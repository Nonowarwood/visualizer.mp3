#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fabrique les pochettes en basse définition, une fois pour toutes.

    python3 tools/build-pix.py

Le mode `pixels` fabriquait chaque pochette dans le navigateur : télécharger le
500 px, le peindre sur un canevas, le réduire, le tramer, le remonter. Vingt-deux
fois, à chaque visite, et devant l'utilisateur. Ici c'est fait une fois, et le site
ne charge plus qu'une image déjà prête — une dizaine de kilo-octets.

L'algorithme est celui du navigateur, au détail près :

  1. réduction à 96 px de côté ;
  2. tramage ordonné sur une matrice de Bayer 4×4, puis arrondi de chaque
     composante à l'un des dix niveaux retenus. C'est le tramage qui fait
     l'image : deux pixels voisins d'une même teinte s'arrondissent de part et
     d'autre, et leur mélange rend la nuance que la palette ne contient pas ;
  3. écriture en PNG, sans lissage — la remontée se fait à l'affichage.

Le fichier `assets/pix.js` recense ce qui a été fabriqué. Une parution qui n'y
figure pas — ajoutée depuis — retombe sur la fabrication dans le navigateur, qui
reste en place comme filet.
"""

import json
import os
import re
import subprocess
import sys
import tempfile
import urllib.request

N = 96
LEVELS = 10
BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]
UA = 'visualizer.mp3/1.0 (https://github.com/Nonowarwood/visualizer.mp3)'


def cover_url(rg, rid):
    """La pochette d'une édition quand `rid` est là, celle du groupe sinon —
       même règle que `srcOf` dans script.js."""
    if rid:
        return 'https://coverartarchive.org/release/%s/front-500' % rid
    return 'https://coverartarchive.org/release-group/%s/front-500' % rg


def fetch(url, tries=5):
    """L'archive renvoie par moments 500, ou ne répond pas : ce sont des
       défaillances passagères de son côté, pas des pochettes absentes. On
       attend et on recommence, sans quoi une poignée manque à chaque passage."""
    import time
    for k in range(tries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            return urllib.request.urlopen(req, timeout=60).read()
        except Exception:
            if k == tries - 1:
                raise
            time.sleep(3.0 * (k + 1))


def dither(raw):
    a = bytearray(raw)
    step = 255.0 / (LEVELS - 1)
    for px in range(N * N):
        s = (BAYER[(px % N) % 4 + ((px // N) % 4) * 4] / 16.0 - 0.5) * step
        for k in range(3):
            i = px * 3 + k
            v = round((a[i] + s) / step) * step
            a[i] = 0 if v < 0 else (255 if v > 255 else int(v))
    return bytes(a)


def build(src_bytes, dst):
    with tempfile.TemporaryDirectory() as tmp:
        raw_in = os.path.join(tmp, 'in')
        open(raw_in, 'wb').write(src_bytes)
        rgb = os.path.join(tmp, 'a.rgb')
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', raw_in,
                        '-vf', 'scale=%d:%d' % (N, N), '-pix_fmt', 'rgb24',
                        '-f', 'rawvideo', rgb], check=True)
        out = os.path.join(tmp, 'b.rgb')
        open(out, 'wb').write(dither(open(rgb, 'rb').read()))
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'rawvideo',
                        '-pix_fmt', 'rgb24', '-s', '%dx%d' % (N, N),
                        '-i', out, '-compression_level', '9', dst], check=True)


def main():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src = open(os.path.join(root, 'script.js'), encoding='utf-8').read()
    rels = re.findall(
        r"\{id:'([0-9a-f-]{36})'(?:,\s*rid:'([0-9a-f-]{36})')?,\s*t:\"((?:[^\"\\]|\\.)*)\"",
        src, re.S)

    out = os.path.join(root, 'assets', 'pix')
    os.makedirs(out, exist_ok=True)
    made, total = {}, 0

    for rg, rid, title in rels:
        key = rid or rg
        dst = os.path.join(out, key + '.png')
        rel = 'assets/pix/%s.png' % key
        if os.path.exists(dst):
            made[key] = rel
            total += os.path.getsize(dst)
            print('  = %-30s déjà là' % title[:30], file=sys.stderr)
            continue
        try:
            build(fetch(cover_url(rg, rid)), dst)
            made[key] = rel
            total += os.path.getsize(dst)
            print('  + %-30s %s ko' % (title[:30], os.path.getsize(dst) // 1024),
                  file=sys.stderr)
        except Exception as e:
            print('  ! %-30s %s' % (title[:30], e), file=sys.stderr)

    man = os.path.join(root, 'assets', 'pix.js')
    with open(man, 'w', encoding='utf-8') as f:
        f.write('/* Fabriqué par tools/build-pix.py — les pochettes en basse\n'
                '   définition, prêtes à servir. Une parution absente d\'ici\n'
                '   retombe sur la fabrication dans le navigateur. */\n')
        f.write('var PIXMAP=' + json.dumps(made, ensure_ascii=False,
                                           indent=0).replace('\n', '') + ';\n')
    print('\n%d pochettes, %.0f ko au total' % (len(made), total / 1024), file=sys.stderr)


if __name__ == '__main__':
    main()
