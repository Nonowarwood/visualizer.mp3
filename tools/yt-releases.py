#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Reprend les vidéos depuis l'onglet **sorties** d'une chaîne YouTube d'artiste.

    python3 tools/yt-releases.py @cortis_bighit cortis
    python3 tools/yt-releases.py @cortis_bighit cortis --dry

Pourquoi plutôt qu'une recherche : `build-tracks.py` retrouve chaque piste par
une recherche YouTube, et un bon résultat n'est pas toujours le bon. Il tombe sur
une reprise, une version accélérée, une vidéo d'album entier, ou la version
« feat. » d'un morceau qui existe aussi seul.

L'onglet *sorties* d'une chaîne d'artiste liste au contraire les **albums
officiels**, chacun sous forme de liste de lecture générée par YouTube : les
bonnes vidéos, dans l'ordre du disque. Il n'y a plus à deviner.

La règle de sécurité tient en une ligne : **on ne remplace que si les comptes
concordent.** Quand la liste officielle a autant de pistes que MusicBrainz, la
correspondance est positionnelle et sûre. Sinon on ne touche à rien et on le dit —
mieux vaut un lien tiré d'une recherche qu'un lien faux.

Les parutions absentes de la chaîne — une bande originale de film, par exemple —
sont laissées telles quelles.
"""

import json
import os
import re
import sys
import time
import urllib.request

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0 Safari/537.36')


def get(url, tries=4):
    for k in range(tries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9'})
            return urllib.request.urlopen(req, timeout=45).read().decode('utf-8', 'replace')
        except Exception:
            if k == tries - 1:
                raise
            time.sleep(2.5 * (k + 1))


def initdata(html):
    m = re.search(r'var ytInitialData\s*=\s*(\{.*?\});</script>', html, re.S)
    return json.loads(m.group(1)) if m else None


def walk(node, fn):
    if isinstance(node, dict):
        fn(node)
        for v in node.values():
            walk(v, fn)
    elif isinstance(node, list):
        for v in node:
            walk(v, fn)


def release_playlists(handle):
    """Les listes de sortie, dans l'ordre de l'onglet.

    L'onglet *sorties* et les pages de liste ne se décrivent pas de la même
    façon : le premier emploie `playlistRenderer`, les secondes
    `lockupViewModel`. On accepte donc les deux, et on ne retient que les
    identifiants en `OLAK5uy_`, qui sont ceux des albums générés par YouTube.
    """
    d = initdata(get('https://www.youtube.com/%s/releases' % handle))
    out, seen = [], set()

    def take(o):
        for k in ('lockupViewModel', 'playlistRenderer', 'gridPlaylistRenderer'):
            r = o.get(k)
            if not isinstance(r, dict):
                continue
            pid = r.get('contentId') or r.get('playlistId') or ''
            if pid.startswith('OLAK5uy_') and pid not in seen:
                seen.add(pid)
                out.append(pid)
    walk(d, take)
    return out


def playlist(pid):
    """Titre de la sortie, et ses pistes dans l'ordre du disque."""
    html = get('https://www.youtube.com/playlist?list=' + pid)
    d = initdata(html)
    m = re.search(r'<title>(.*?) - YouTube</title>', html, re.S)
    title = (m.group(1) if m else pid).strip()
    items, seen = [], set()

    def take(o):
        lv = o.get('lockupViewModel')
        if not lv or lv.get('contentType') != 'LOCKUP_CONTENT_TYPE_VIDEO':
            return
        vid = lv.get('contentId')
        if not vid or vid in seen:
            return
        seen.add(vid)
        names = []
        walk(lv.get('metadata', {}),
             lambda o: names.append(o['content'])
             if isinstance(o.get('content'), str) else None)
        items.append((vid, names[0] if names else ''))
    walk(d, take)
    return title, items


def norm(s):
    return re.sub(r'[^a-z0-9]', '', (s or '').lower())


def main():
    argv = [a for a in sys.argv[1:] if a != '--dry']
    dry = '--dry' in sys.argv
    if len(argv) < 2:
        print(__doc__)
        raise SystemExit(2)
    handle, artist = argv[0], argv[1]
    if not handle.startswith('@'):
        handle = '@' + handle

    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src = open(os.path.join(root, 'script.js'), encoding='utf-8').read()

    block = re.split(r"\{id:'[0-9a-f-]{36}', name:'", src)[1:]
    rels = []
    for b in block:
        if norm(b.split("'", 1)[0]) != norm(artist) and \
           norm(re.search(r"slug:'([^']+)'", b).group(1)) != norm(artist):
            continue
        for rg, rid, title in re.findall(
                r"\{id:'([0-9a-f-]{36})'(?:,\s*rid:'([0-9a-f-]{36})')?,\s*t:\"((?:[^\"\\]|\\.)*)\"",
                b, re.S):
            rels.append((rid or rg, title.replace('\\"', '"')))
        break
    if not rels:
        print('Artiste « %s » introuvable dans script.js' % artist, file=sys.stderr)
        raise SystemExit(1)

    print('%d parutions, chaîne %s' % (len(rels), handle), file=sys.stderr)
    official = {}
    for pid in release_playlists(handle):
        t, items = playlist(pid)
        official[norm(t)] = (t, items)
        time.sleep(1.2)
    print('%d sorties sur la chaîne' % len(official), file=sys.stderr)

    path = os.path.join(root, 'assets', 'tracks.js')
    js = open(path, encoding='utf-8').read()
    changed = kept = absent = mismatch = 0

    for key, title in rels:
        m = re.search(r'"%s":\{"s":(\[.*?\]),"g":(\[.*?\])\}' % re.escape(key), js)
        if not m:
            continue
        groups = json.loads(m.group(2))
        flat = [t for g in groups for t in g]

        hit = official.get(norm(title))
        if not hit:
            for k, v in official.items():
                if k.startswith(norm(title)) or norm(title).startswith(k):
                    hit = v
                    break
        if not hit:
            print('  · %-28s absente de la chaîne, inchangée' % title[:28], file=sys.stderr)
            absent += 1
            continue

        oname, items = hit
        if len(items) != len(flat):
            print('  ! %-28s %d pistes ici, %d sur la chaîne — inchangée'
                  % (title[:28], len(flat), len(items)), file=sys.stderr)
            mismatch += 1
            continue

        n, p = 0, 0
        for g in groups:
            for t in g:
                vid = items[p][0]
                if t[3] != vid:
                    print('      %-22s %s -> %s  (%s)'
                          % (t[1][:22], t[3] or '—', vid, items[p][1][:34]), file=sys.stderr)
                    t[3] = vid
                    n += 1
                p += 1
        changed += n
        kept += len(flat) - n
        print('  %s %-28s %d corrigée(s) sur %d   [%s]'
              % ('✎' if n else '·', title[:28], n, len(flat), oname[:26]), file=sys.stderr)
        js = js[:m.start(2)] + json.dumps(groups, ensure_ascii=False) + js[m.end(2):]

    print('\n%d pistes corrigées, %d déjà justes, %d parutions hors chaîne, '
          '%d écartées faute de comptes concordants'
          % (changed, kept, absent, mismatch), file=sys.stderr)
    if dry:
        print('(--dry : rien n\'est écrit)', file=sys.stderr)
        return
    open(path, 'w', encoding='utf-8').write(js)
    print('%s mis à jour' % os.path.relpath(path, root), file=sys.stderr)


if __name__ == '__main__':
    main()
