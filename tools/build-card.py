#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Compose `assets/card.png`, l'image d'aperçu des liens partagés.

    python3 tools/build-card.py

Les adresses par parution ont été faites pour qu'un disque se partage. Sans
balise `og:image`, le lien partagé n'affiche pourtant aucun aperçu : la moitié du
bénéfice manquait.

La carte reprend la composition du splash — des pochettes qui se chevauchent sur
le fond clair du site. Elle puise dans `assets/pix/`, les versions basse
définition, et les remonte **en plus proche voisin** : la marche d'escalier est
gardée, si bien que l'aperçu ressemble au site plutôt qu'à un montage étranger.

Une réserve à connaître : le fragment d'une adresse (`#/cortis/greengreen`)
n'atteint jamais le serveur. On ne peut donc pas produire une carte *par
parution* sans pré-rendu — celle-ci vaut pour tout le site.
"""

import os
import re
import subprocess
import sys

W, H = 1200, 630
GROUND = '0xF7F8FA'
# (x, y, côté) — posés à la main, comme les places du collage.
SLOTS = [(126, 150, 250), (322, 236, 300), (556, 96, 286),
         (800, 244, 262), (612, 372, 214)]


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    pixdir = os.path.join(root, 'assets', 'pix')
    src = open(os.path.join(root, 'script.js'), encoding='utf-8').read()

    keys = []
    for rg, rid, _ in re.findall(
            r"\{id:'([0-9a-f-]{36})'(?:,\s*rid:'([0-9a-f-]{36})')?,\s*t:\"((?:[^\"\\]|\\.)*)\"",
            src, re.S):
        k = rid or rg
        f = os.path.join(pixdir, k + '.png')
        if os.path.exists(f) and f not in keys:
            keys.append(f)
        if len(keys) == len(SLOTS):
            break
    if len(keys) < len(SLOTS):
        print('Il manque des pochettes dans assets/pix — lancez build-pix.py',
              file=sys.stderr)
        raise SystemExit(1)

    args = ['ffmpeg', '-v', 'error', '-y',
            '-f', 'lavfi', '-i', 'color=c=%s:s=%dx%d' % (GROUND, W, H)]
    for f in keys:
        args += ['-i', f]

    steps, prev = [], '[0:v]'
    for i, (x, y, s) in enumerate(SLOTS):
        # `neighbor` : la marche d'escalier est le sujet, pas un défaut à lisser.
        steps.append('[%d:v]scale=%d:%d:flags=neighbor[s%d]' % (i + 1, s, s, i))
        tag = '[o%d]' % i
        steps.append('%s[s%d]overlay=%d:%d%s' % (prev, i, x, y, tag))
        prev = tag
    fc = ';'.join(steps)
    # La dernière étape ne doit pas être étiquetée, sinon rien n'est mappé.
    fc = fc[:fc.rfind(prev)] + fc[fc.rfind(prev) + len(prev):]

    dst = os.path.join(root, 'assets', 'card.png')
    args += ['-filter_complex', fc, '-frames:v', '1', dst]
    subprocess.run(args, check=True)
    print('%s — %d x %d, %d ko'
          % (os.path.relpath(dst, root), W, H, os.path.getsize(dst) // 1024),
          file=sys.stderr)


if __name__ == '__main__':
    main()
