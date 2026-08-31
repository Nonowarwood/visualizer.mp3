#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Recense les autocollants de `assets/stickers/` dans `assets/stickers.js`.

    python3 tools/build-stickers.py

Déposez un fichier dans `assets/stickers/`, relancez : il apparaît dans le tiroir
d'options, prêt à être posé sur le boîtier. Les formats acceptés sont le SVG — le
plus léger et le seul qui reste net à toutes les tailles — et le PNG à fond
transparent.

Un autocollant n'est pas une image de fond : il doit se **détourer**. Un PNG à
fond blanc se collera avec son carré blanc, ce que l'outil ne peut pas deviner.

Les noms suivent la même règle que les fonds d'écran : celui déjà inscrit dans le
manifeste d'abord — une relance ne renomme personne —, puis le nom du fichier,
tirets défaits.
"""

import json
import os
import re
import sys

EXT = ('.svg', '.png', '.webp')
# Les accents ne survivent pas à un nom de fichier ; on les rend ici.
NOMS = {
    'etoile': 'étoile', 'coeur': 'cœur', 'eclair': 'éclair',
}


def noms_existants(path):
    if not os.path.exists(path):
        return {}
    m = re.search(r'var STICKERS=(\[.*?\]);',
                  open(path, encoding='utf-8').read(), re.S)
    if not m:
        return {}
    try:
        return {x['f']: x['n'] for x in json.loads(m.group(1))}
    except Exception:
        return {}


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    d = os.path.join(root, 'assets', 'stickers')
    man = os.path.join(root, 'assets', 'stickers.js')
    if not os.path.isdir(d):
        print('Rien à faire : %s n\'existe pas.' % os.path.relpath(d, root),
              file=sys.stderr)
        raise SystemExit(1)

    deja = noms_existants(man)
    out, poids = [], 0
    for f in sorted(os.listdir(d)):
        if not f.lower().endswith(EXT) or f.startswith('.'):
            continue
        stem = os.path.splitext(f)[0]
        rel = 'assets/stickers/' + f
        out.append({'f': rel,
                    'n': deja.get(rel) or NOMS.get(stem) or stem.replace('-', ' ')})
        poids += os.path.getsize(os.path.join(d, f))
        print('  %-14s %5d o  %s' % (out[-1]['n'][:14],
                                     os.path.getsize(os.path.join(d, f)), f),
              file=sys.stderr)

    with open(man, 'w', encoding='utf-8') as fh:
        fh.write('/* Fabriqué par tools/build-stickers.py — les autocollants\n'
                 '   qu\'on peut poser sur le boîtier. Renommer ici est sans\n'
                 '   danger : l\'outil garde les noms qu\'il trouve. */\n')
        fh.write('var STICKERS=[\n'
                 + ',\n'.join(json.dumps(x, ensure_ascii=False) for x in out)
                 + '\n];\n')
    print('\n%d autocollants, %.1f ko en tout' % (len(out), poids / 1024),
          file=sys.stderr)


if __name__ == '__main__':
    main()
