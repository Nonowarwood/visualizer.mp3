#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Recense les fonds d'écran de `assets/background/`, les range par couleur et
en tire des vignettes.

    python3 tools/build-fonds.py
    python3 tools/build-fonds.py --dry     # dit ce qu'il ferait, n'écrit rien

Déposez une image dans `assets/background/`, relancez : elle apparaît dans le
tiroir d'options, dans le groupe de sa couleur. Rien n'est à écrire à la main.

── Comment la couleur est trouvée ──

Pas par la moyenne des pixels : la moyenne d'un ciel orange et d'une ville bleue
est un gris qui n'existe nulle part dans l'image. Pas non plus par la teinte
moyenne en coordonnées polaires — sur une photo de Tokyo au couchant, elle mêle
le rose du haut du ciel à l'orange de l'horizon et sort un rouge que l'œil ne
voit pas.

On procède donc par **vote**. Chaque pixel dépose son poids dans le bac de sa
teinte, et ce poids vaut `saturation² × valeur` : une couleur franche pèse, un
gris ne dit rien, un noir non plus. Les bacs sont ensuite réunis par familles, et
la famille la plus lourde l'emporte. C'est ce qui range Central Park au vert — son
ciel bleu est le bac le plus lourd pris seul, mais les deux bacs de vert réunis
pèsent plus.

Reste « gris », pour une image qui n'a **aucune** couleur — un noir et blanc. Le
seuil est volontairement très bas, et aucune des images de ce lot n'y tombe : j'ai
essayé de le monter pour y ranger le métro d'acier, que l'œil voit gris, mais
toute valeur qui l'y mettait y jetait d'abord les volutes lilas, qui ont pourtant
une couleur. La mesure a raison contre l'impression : l'acier est chaud, sa bande
de quai est jaune, et l'image pèse plus en couleur que le lilas pâle. On garde
donc la règle simple, et le bac gris pour ce qui n'a vraiment rien.

── Les noms ──

Les fichiers arrivent avec des noms d'empreinte (`a3d4f51698a2…jpg`), qui ne
disent rien dans un menu. L'ordre est donc : le nom déjà inscrit dans
`assets/fonds.js` — une relance ne défait pas ce qui a été nommé —, puis la table
`NOMS` ci-dessous, puis le nom du fichier à défaut.
"""

import colorsys
import json
import os
import re
import subprocess
import sys
import tempfile

# Bacs de teinte, en degrés, dans l'ordre de la roue. `rose` enjambe 360°.
FAMILLES = [
    ('rose',      [(300, 360)]),
    ('orange',    [(0, 52)]),
    ('vert',      [(52, 165)]),
    ('turquoise', [(165, 195)]),
    ('bleu',      [(195, 255)]),
    ('violet',    [(255, 300)]),
]
GRIS = 0.015         # en deçà, l'image n'a aucune couleur : noir et blanc
N = 64               # côté de l'échantillon analysé
VW, VH = 240, 150    # la vignette du tiroir

NOMS = {
    '12f7b70f06a9201dcf8ab2fde082988c': 'central park',
    '131fbc20a3495e85a8bfe59978a95e1b': 'étoile rose',
    '3895ec3781c23024842d25877ae1dd58': 'gratte-ciel',
    '46387d0e1c5ef3913118e0259b25b5e0': 'sortie de tunnel',
    '760052874627976425': 'tokyo au couchant',
    '78d3937426527b302a530dbc8c58ef01': 'nuages tramés',
    '_': 'pont de busan',
    'a3d4f51698a261b1b17b10b155c2e160': 'ville turquoise',
    'acd54c6a06ad6e5155014fec4033434a': 'volutes',
    'b175040b45fc6f25ffb07b79ce33ca7e': 'métro de new york',
    'c8d299b359db111df285f66777661387': 'étoile bleue',
    'f21d943bc9beee8e227db31d367798ca': 'times square',
    'f3dc5234d9b35ea9f7be442354bba308': 'flux',
    'seoul': 'séoul au crépuscule',
}


def echantillon(src):
    """L'image réduite à N × N, en octets RVB."""
    with tempfile.TemporaryDirectory() as t:
        raw = os.path.join(t, 'a.rgb')
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src,
                        '-vf', 'scale=%d:%d' % (N, N), '-pix_fmt', 'rgb24',
                        '-f', 'rawvideo', raw], check=True)
        return open(raw, 'rb').read()


def couleur(b):
    """(famille, teinte dominante, couleur moyenne) d'une image échantillonnée."""
    n = len(b) // 3
    poids = {f: 0.0 for f, _ in FAMILLES}
    total = 0.0
    mr = mg = mb = 0.0
    # 24 bacs de 15° : assez fin pour séparer l'orange du rose, assez large pour
    # qu'un dégradé de ciel ne s'éparpille pas en poussière.
    bacs = [0.0] * 24
    for i in range(n):
        r, g, bl = b[3 * i] / 255, b[3 * i + 1] / 255, b[3 * i + 2] / 255
        mr += r
        mg += g
        mb += bl
        h, s, v = colorsys.rgb_to_hsv(r, g, bl)
        w = s * s * v
        total += w
        bacs[int(h * 24) % 24] += w
        deg = h * 360
        for f, plages in FAMILLES:
            if any(a <= deg < z for a, z in plages):
                poids[f] += w
                break
    moy = '#%02X%02X%02X' % (int(mr / n * 255), int(mg / n * 255), int(mb / n * 255))
    if total / n < GRIS:
        return 'gris', -1, moy
    f = max(poids, key=lambda k: poids[k])
    dom = max(range(24), key=lambda i: bacs[i]) * 15 + 7
    return f, dom, moy


def vignette(src, dst):
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src,
                    '-vf', 'scale=%d:%d:force_original_aspect_ratio=increase,'
                    'crop=%d:%d' % (VW, VH, VW, VH),
                    '-q:v', '5', dst], check=True)


def noms_existants(path):
    """Ce qui a déjà été nommé le reste : une relance ne renomme personne."""
    if not os.path.exists(path):
        return {}
    m = re.search(r'var FONDS=(\[.*?\]);', open(path, encoding='utf-8').read(), re.S)
    if not m:
        return {}
    try:
        return {x['f']: x['n'] for x in json.loads(m.group(1))}
    except Exception:
        return {}


def main():
    dry = '--dry' in sys.argv
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    d = os.path.join(root, 'assets', 'background')
    vd = os.path.join(d, 'vignettes')
    man = os.path.join(root, 'assets', 'fonds.js')
    if not os.path.isdir(d):
        print('Rien à faire : %s n\'existe pas.' % os.path.relpath(d, root), file=sys.stderr)
        raise SystemExit(1)
    if not dry:
        os.makedirs(vd, exist_ok=True)

    deja = noms_existants(man)
    out = []
    for f in sorted(os.listdir(d)):
        if not f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
            continue
        src = os.path.join(d, f)
        stem = os.path.splitext(f)[0]
        rel = 'assets/background/' + f
        vrel = 'assets/background/vignettes/' + stem + '.jpg'
        fam, dom, moy = couleur(echantillon(src))
        if not dry:
            vignette(src, os.path.join(vd, stem + '.jpg'))
        out.append({'f': rel, 'v': vrel,
                    'n': deja.get(rel) or NOMS.get(stem) or stem.replace('-', ' '),
                    'c': moy, 'g': fam, 'h': dom})
        print('  %-9s %3d°  %s  %-22s %s'
              % (fam, dom, moy, out[-1]['n'][:22], f[:34]), file=sys.stderr)

    ordre = [f for f, _ in FAMILLES] + ['gris']
    out.sort(key=lambda x: (ordre.index(x['g']), x['h']))
    for x in out:
        del x['h']

    if dry:
        print('\n(--dry : rien n\'est écrit)', file=sys.stderr)
        return
    with open(man, 'w', encoding='utf-8') as fh:
        fh.write('/* Fabriqué par tools/build-fonds.py — les fonds d\'écran, rangés\n'
                 '   par famille de couleur. Renommer un fond ici est sans danger :\n'
                 '   l\'outil garde les noms qu\'il trouve. */\n')
        fh.write('var FONDS=[\n'
                 + ',\n'.join(json.dumps(x, ensure_ascii=False) for x in out)
                 + '\n];\n')
    tot = sum(os.path.getsize(os.path.join(root, x['v'])) for x in out)
    print('\n%d fonds, %d familles, %.0f ko de vignettes'
          % (len(out), len({x['g'] for x in out}), tot / 1024), file=sys.stderr)


if __name__ == '__main__':
    main()
