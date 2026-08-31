#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Relève un artiste chez MusicBrainz et en imprime le bloc à coller dans
`script.js`.

    python3 tools/mb-artiste.py "NewJeans"
    python3 tools/mb-artiste.py "LE SSERAFIM" --id 5f1adfe1-…

Le tableau `ARTISTS` de `script.js` est écrit à la main et le restera : c'est de
la donnée éditoriale autant que factuelle — les notes, les couleurs de repli, le
choix de ce qu'on montre. Mais **relever vingt parutions à la main est une source
d'erreurs**, et cet outil s'en charge : identifiants, titres, types, dates, labels.

Ce qu'il retient et ce qu'il écarte :

  - les **types premiers** seulement — album, EP, single. Une compilation, un
    live, un album de remix portent un type secondaire : ils sont écartés, sans
    quoi une discographie de groupe de K-pop se remplit de rééditions ;
  - les parutions **sans date** sont gardées mais signalées : c'est presque
    toujours le signe d'une fiche incomplète chez MusicBrainz.

Le label vient de la première édition du groupe de parution, et demande donc une
requête de plus par parution. MusicBrainz plafonne à une par seconde : comptez une
minute pour vingt parutions.

Les notes sont laissées **vides**. Une note inventée vaut moins que pas de note ;
c'est à qui tient le dépôt de les écrire.
"""

import json
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request

MB = 'https://musicbrainz.org/ws/2/'
UA = 'visualizer.mp3/1.0 (https://github.com/Nonowarwood/visualizer.mp3)'
MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet',
        'août', 'septembre', 'octobre', 'novembre', 'décembre']
# Repli quand aucune pochette n'est trouvée : une teinte et un motif par rang.
TEINTES = ['#5B7FA6', '#C8A45C', '#8E9E8A', '#9A8FA6', '#A67C6B', '#6E8FA0',
           '#B08A9E', '#7E9E7C', '#A9926A', '#8090A8']
MOTIFS = ['wave', 'ring', 'split', 'grid', 'arc', 'dot']


def fetch(url, tries=5):
    for k in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            return json.loads(urllib.request.urlopen(req, timeout=30).read()
                              .decode('utf-8', 'replace'))
        except Exception:
            if k == tries - 1:
                raise
            time.sleep(2.0 * (k + 1))


def slug(t):
    t = unicodedata.normalize('NFD', t)
    t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9]+', '-', t.lower()).strip('-')


def fr(d):
    """« 2022-05-02 » → « 2 mai 2022 ». Une date partielle reste ce qu'elle est."""
    if not d:
        return ''
    p = d.split('-')
    if len(p) == 3:
        j = int(p[2])
        return '%s %s %s' % ('1er' if j == 1 else j, MOIS[int(p[1]) - 1], p[0])
    if len(p) == 2:
        return '%s %s' % (MOIS[int(p[1]) - 1], p[0])
    return p[0]


def js(t):
    return t.replace('\\', '\\\\').replace('"', '\\"')


def main():
    argv = [a for a in sys.argv[1:]]
    mbid = None
    if '--id' in argv:
        i = argv.index('--id')
        mbid = argv[i + 1]
        del argv[i:i + 2]
    if not argv:
        print(__doc__)
        raise SystemExit(2)
    nom = argv[0]

    if not mbid:
        d = fetch(MB + 'artist?query=' + urllib.parse.quote('artist:"%s"' % nom)
                  + '&fmt=json&limit=5')
        a = (d.get('artists') or [])
        if not a:
            print('Aucun artiste de ce nom.', file=sys.stderr)
            raise SystemExit(1)
        for x in a[:5]:
            print('  %-40s %s  (%s)' % (x['name'], x['id'],
                                        (x.get('area') or {}).get('name', '?')),
                  file=sys.stderr)
        art = a[0]
        mbid = art['id']
        print('\nretenu : %s\n' % art['name'], file=sys.stderr)
    else:
        art = fetch(MB + 'artist/%s?fmt=json' % mbid)
    time.sleep(1.2)

    LIEUX = {'South Korea': 'Corée du Sud', 'Japan': 'Japon',
             'United States': 'États-Unis', 'United Kingdom': 'Royaume-Uni',
             'France': 'France', 'Seoul': 'Séoul'}
    lieu = (art.get('area') or {}).get('name') or ''
    lieu = LIEUX.get(lieu, lieu)
    debut = ((art.get('life-span') or {}).get('begin') or '')[:4]

    groupes, off = [], 0
    while True:
        d = fetch(MB + 'release-group?artist=%s&fmt=json&limit=100&offset=%d'
                  % (mbid, off))
        g = d.get('release-groups') or []
        groupes += g
        off += len(g)
        if off >= d.get('release-group-count', 0) or not g:
            break
        time.sleep(1.2)

    gard = [g for g in groupes
            if g.get('primary-type') in ('Album', 'EP', 'Single')
            and not (g.get('secondary-types') or [])]
    # ── écarter les doublons ──
    # Une discographie de groupe de K-pop est pleine de la même parution sous
    # trois formes : la version anglaise, la version japonaise, et le single qui
    # porte le nom de l'EP dont il est le titre-phare. Trente et une entrées pour
    # LE SSERAFIM, dont douze redisaient ce que disait déjà une autre.
    #
    # La règle : l'album et l'EP passent avant le single du même titre, et une
    # mention de version en écarte le porteur. Le tri place donc les formats longs
    # d'abord à date égale, puis on ne garde qu'un titre.
    RANG = {'Album': 0, 'EP': 1, 'Single': 2}
    gard.sort(key=lambda g: (g.get('first-release-date') or '9999',
                             RANG.get(g.get('primary-type'), 9)))
    VERSION = re.compile(r'\((english|japanese|korean|inst|instrumental|remix|'
                         r'sped up|slowed)[^)]*\)|\bver\.?\)?$', re.I)

    def cle(t):
        t = VERSION.sub('', t)
        t = unicodedata.normalize('NFD', t)
        t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
        return re.sub(r'[^a-z0-9]+', '', t.lower())

    vus, net = set(), []
    for g in gard:
        t = g['title']
        if VERSION.search(t):
            print('  – %-34s version, écartée' % t[:34], file=sys.stderr)
            continue
        k = cle(t)
        if not k:
            # Un titre entièrement non latin : gardé seulement si rien d'autre ne
            # le redit. On le repère à sa date, partagée avec son jumeau latin.
            k = 'x' + (g.get('first-release-date') or '')
        if k in vus:
            print('  – %-34s doublon d\'un titre déjà pris' % t[:34], file=sys.stderr)
            continue
        vus.add(k)
        net.append(g)
    gard = net
    gard.sort(key=lambda g: (g.get('first-release-date') or '9999',
                             RANG.get(g.get('primary-type'), 9)))
    print('%d parutions retenues sur %d' % (len(gard), len(groupes)), file=sys.stderr)

    lignes = []
    for i, g in enumerate(gard):
        time.sleep(1.2)
        label = ''
        try:
            r = fetch(MB + 'release?release-group=%s&fmt=json&inc=labels&limit=1'
                      % g['id'])
            rel = (r.get('releases') or [None])[0]
            if rel:
                li = (rel.get('label-info') or [])
                if li and li[0].get('label'):
                    label = li[0]['label'].get('name') or ''
        except Exception as e:
            print('  ! label de %s : %s' % (g['title'][:24], e), file=sys.stderr)
        d = g.get('first-release-date') or ''
        if not d:
            print('  ? %-28s sans date chez MusicBrainz' % g['title'][:28],
                  file=sys.stderr)
        lignes.append(
            '  {id:\'%s\', t:"%s", kind:\'%s\', date:\'%s\', y:%s, v:\'\', label:\'%s\',\n'
            '   k:\'%s\', art:\'%s\', tone:\'%s\', cover:\'\',\n'
            '   note:""},'
            % (g['id'], js(g['title']), g['primary-type'], fr(d), (d[:4] or '0'),
               js(label), TEINTES[i % len(TEINTES)], MOTIFS[i % len(MOTIFS)],
               'd' if i % 2 else 'l'))
        print('  %-9s %-34s %s' % (g['primary-type'], g['title'][:34], d),
              file=sys.stderr)

    print(' {id:\'%s\', name:\'%s\', place:\'%s\', since:%s,\n'
          '  slug:\'%s\', photos:[],\n  rel:[\n%s\n  ]},'
          % (mbid, js(art['name']), js(lieu), debut or '0',
             slug(art['name']), '\n'.join(lignes)))


if __name__ == '__main__':
    main()
