#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fabrique assets/tracks.js — les titres de chaque parution, et pour chacun
l'identifiant de la vidéo YouTube qui le fait entendre.

Pourquoi un fichier fabriqué plutôt qu'un appel à l'exécution :

  - MusicBrainz plafonne à une requête par seconde et répond 503 au-delà.
    Parcourir les fiches aux flèches en déclenchait, et la liste disparaissait.
    Ici la donnée est là au chargement, sans un seul appel ;
  - retrouver la vidéo d'un titre demande une recherche YouTube. Sans clé d'API,
    elle ne peut se faire qu'en lisant la page de résultats — ce qui n'a rien à
    faire dans un navigateur de visiteur. C'est fait ici, une fois.

C'est le même parti que le tableau `rel` de script.js : la donnée vient bien de
MusicBrainz, mais elle est relevée puis figée, pas interrogée à chaque visite.

    python3 tools/build-tracks.py          # depuis le dossier site/

Relancer après avoir ajouté une parution. Le fichier produit est lisible et se
corrige à la main si une vidéo tombe à côté.
"""

import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0 Safari/537.36')
MB = 'https://musicbrainz.org/ws/2/'
MB_UA = 'visualizer.mp3/1.0 (https://github.com/Nonowarwood/visualizer.mp3)'
INC = 'inc=recordings+recording-level-rels+url-rels&fmt=json'

# Spotify seul : les autres plateformes alignaient une rangée de boutons qui
# pesait plus qu'elle n'apportait. Videz la liste pour n'en garder aucune.
SERV = [('open.spotify.com', 'Spotify')]


def fetch(url, ua, tries=5):
    """MusicBrainz répond 503 dès qu'on le presse : on attend et on recommence."""
    for k in range(tries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': ua, 'Accept-Language': 'en-US,en;q=0.9'})
            return urllib.request.urlopen(req, timeout=30).read().decode('utf-8', 'replace')
        except Exception as e:
            if k == tries - 1:
                raise
            time.sleep(2.0 * (k + 1))


# ───────────────────────── MusicBrainz ─────────────────────────

def mb_release(rg, rid):
    """Les pistes vivent sur l'édition, pas sur le release-group."""
    if rid:
        url = MB + 'release/%s?%s' % (rid, INC)
    else:
        url = MB + 'release?release-group=%s&%s&limit=1' % (rg, INC)
    d = json.loads(fetch(url, MB_UA))
    if 'releases' in d:
        rels = d.get('releases') or []
        return rels[0] if rels else None
    return d


def services(rels):
    out, seen = [], set()
    for r in rels or []:
        t = r.get('type') or ''
        u = (r.get('url') or {}).get('resource') or ''
        if not u or 'streaming' not in t:
            continue
        for host, label in SERV:
            if host in u and label not in seen:
                seen.add(label)
                out.append([label, u])
                break
    return out


# ───────────────────────── YouTube ─────────────────────────

def yt_search(q):
    """Lit la page de résultats. Le filtre sp=EgIQAQ%3D%3D ne garde que les
       vidéos — sans lui, les chaînes et les playlists brouillent le classement."""
    url = ('https://www.youtube.com/results?search_query='
           + urllib.parse.quote(q) + '&sp=EgIQAQ%3D%3D')
    html = fetch(url, UA)
    m = re.search(r'var ytInitialData\s*=\s*(\{.*?\});</script>', html, re.S)
    if not m:
        m = re.search(r'ytInitialData"\]\s*=\s*(\{.*?\});</script>', html, re.S)
    if not m:
        return []
    out = []

    def walk(o):
        if isinstance(o, dict):
            v = o.get('videoRenderer')
            if v and v.get('videoId'):
                out.append({
                    'id': v['videoId'],
                    't': ''.join(r.get('text', '')
                                 for r in (v.get('title', {}).get('runs') or [])),
                    'ch': ''.join(r.get('text', '')
                                  for r in (v.get('ownerText', {}).get('runs') or [])),
                    'len': (v.get('lengthText') or {}).get('simpleText', ''),
                })
            for x in o.values():
                walk(x)
        elif isinstance(o, list):
            for x in o:
                walk(x)

    walk(json.loads(m.group(1)))
    return out


def secs(s):
    p = [int(x) for x in s.split(':') if x.isdigit()]
    if len(p) == 2:
        return p[0] * 60 + p[1]
    if len(p) == 3:
        return p[0] * 3600 + p[1] * 60 + p[2]
    return 0


def pick_video(artist, title, ms):
    """La chaîne « <artiste> - Topic » d'abord : c'est la piste auto-générée par
       YouTube à partir de la sortie officielle, donc exactement le morceau et
       rien d'autre. Puis la chaîne de l'artiste. La durée relevée chez
       MusicBrainz sert d'arbitre : elle écarte les live, les reprises et les
       vidéos d'album entier qui portent le même titre."""
    res = yt_search('%s %s' % (artist, title))
    if not res:
        return None
    want = round(ms / 1000) if ms else 0
    a, tl = artist.lower(), title.lower()

    def score(v):
        ch, t = v['ch'].lower(), v['t'].lower()
        s = 0
        if ch == a + ' - topic':
            s -= 100
        elif a in ch:
            s -= 60
        if tl in t:
            s -= 25
        if 'live' in t and 'live' not in tl:
            s += 30
        if 'cover' in t or 'remix' in t or 'sped up' in t:
            s += 40
        if want:
            d = abs(secs(v['len']) - want)
            s += 0 if d <= 3 else (10 if d <= 12 else 45)
        return s

    res.sort(key=score)
    best = res[0]
    if want and abs(secs(best['len']) - want) > 60:
        # Plus d'une minute d'écart : ce n'est pas le morceau. Mieux vaut rien
        # qu'une vidéo fausse — la fiche retombera sur une recherche.
        return None
    return best


# ───────────────────────── assemblage ─────────────────────────

def main():
    here = os.path.dirname(os.path.abspath(__file__))
    root = os.path.dirname(here)
    src = open(os.path.join(root, 'script.js'), encoding='utf-8').read()

    blocks = re.split(r"\{id:'[0-9a-f-]{36}', name:'", src)[1:]
    jobs = []
    for b in blocks:
        artist = b.split("'", 1)[0]
        for rg, rid, title in re.findall(
                r"\{id:'([0-9a-f-]{36})'(?:,\s*rid:'([0-9a-f-]{36})')?,\s*t:\"((?:[^\"\\]|\\.)*)\"",
                b, re.S):
            jobs.append((artist, rg, rid, title.replace('\\"', '"')))

    print('%d parutions à relever' % len(jobs), file=sys.stderr)
    out, nyt, ntr = {}, 0, 0

    for artist, rg, rid, title in jobs:
        key = rid or rg
        try:
            rel = mb_release(rg, rid)
        except Exception as e:
            print('  ! %-28s MusicBrainz : %s' % (title[:28], e), file=sys.stderr)
            continue
        time.sleep(1.3)
        if not rel:
            print('  ! %-28s aucune édition' % title[:28], file=sys.stderr)
            continue

        groups = []
        for m in rel.get('media') or []:
            g = []
            for t in m.get('tracks') or []:
                name = t.get('title') or ''
                ms = t.get('length') or 0
                vid = None
                try:
                    v = pick_video(artist, name, ms)
                    if v:
                        vid = v['id']
                        nyt += 1
                except Exception as e:
                    print('  ! %-28s YouTube : %s' % (name[:28], e), file=sys.stderr)
                ntr += 1
                g.append([t.get('position') or len(g) + 1, name, ms, vid])
                time.sleep(1.8)
            if g:
                groups.append(g)

        out[key] = {'s': services(rel.get('relations')), 'g': groups}
        got = sum(1 for gg in groups for t in gg if t[3])
        tot = sum(len(gg) for gg in groups)
        print('  %-9s %-28s %2d/%2d pistes trouvées' % (artist[:9], title[:28], got, tot),
              file=sys.stderr)

    body = ',\n'.join(
        '"%s":{"s":%s,"g":%s}' % (k, json.dumps(v['s'], ensure_ascii=False),
                                  json.dumps(v['g'], ensure_ascii=False))
        for k, v in out.items())
    dst = os.path.join(root, 'assets', 'tracks.js')
    with open(dst, 'w', encoding='utf-8') as f:
        f.write('/* Fabriqué par tools/build-tracks.py — relancez-le plutôt que\n'
                '   de tout réécrire, mais une correction à la main est sans danger.\n'
                '   [rang, titre, durée en ms, identifiant YouTube ou null] */\n')
        f.write('var TRACKS={\n' + body + '\n};\n')
    print('\n%s\n%d parutions, %d pistes, %d vidéos trouvées'
          % (dst, len(out), ntr, nyt), file=sys.stderr)


if __name__ == '__main__':
    main()
