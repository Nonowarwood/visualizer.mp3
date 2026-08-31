#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Prépare les autocollants de `assets/stickers/` et les recense dans
`assets/stickers.js`.

    python3 tools/build-stickers.py
    python3 tools/build-stickers.py --dry     # dit ce qu'il ferait, n'écrit rien

Déposez un fichier dans `assets/stickers/`, relancez : il apparaît dans le tiroir
d'options, prêt à être posé sur le boîtier. Rien d'autre n'est à écrire.

── Pourquoi l'outil renomme ──

Un nom de fichier devient une **adresse**. Trois caractères y sont des pièges, et
l'un est fatal :

  - le **`#`** coupe l'adresse : tout ce qui suit est pris pour un fragment, et le
    fichier n'est jamais demandé. Un autocollant nommé
    `… _#juhoon id scan …png` ne se serait tout simplement pas affiché ;
  - l'espace et le `%` doivent être encodés, ce qui marche mais rend l'adresse
    illisible ;
  - les émojis et les accents décomposés voyagent mal d'un système à l'autre.

Les fichiers reçoivent donc un nom sobre — minuscules, tirets — et **le nom
d'affichage est tiré de l'ancien**, débarrassé de ce qui n'y disait rien
(« sticker », « png », « printable », les adresses recopiées, les émojis).

── Pourquoi l'outil réduit ──

Un autocollant s'affiche autour de 96 px, 200 sur un écran dense. Ceux qui
arrivent font 736 px et jusqu'à 800 ko pièce. Ils sont ramenés à 420 px de côté
long, transparence gardée : le lot passe de quelques mégaoctets à quelques
centaines de kilo-octets, pour une image que personne ne verra jamais plus grande.

**Les originaux ne sont pas perdus.** Ils sont déplacés dans
`../stickers-originaux/`, hors du dossier publié — même parti que pour les photos.

── Les noms ──

L'ordre est : le nom déjà inscrit dans `assets/stickers.js` — une relance ne
renomme personne —, puis la table `NOMS`, puis le nom du fichier nettoyé.
"""

import json
import os
import re
import shutil
import subprocess
import sys
import unicodedata

EXT = ('.svg', '.png', '.webp')
COTE = 420           # côté long publié
NOMS = {'sticker': 'mascotte'}
# Ce qui, dans un nom de fichier, ne dit rien de l'autocollant.
BRUIT = ('sticker', 'stickers', 'png', 'printable', 'icon', 'scan', 'avec',
         'arriere', 'plan', 'supprime', 'id', 'https', 'http', 'jpg', 'jpeg',
         'webp', 'x', 'com', 'co', 't', 'de', 'la', 'le')


def slug(t):
    t = unicodedata.normalize('NFD', t)
    t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    t = re.sub(r'[^A-Za-z0-9]+', '-', t).strip('-').lower()
    return t or 'autocollant'


def joli(stem):
    """Un nom lisible tiré du nom de fichier reçu."""
    mots = [m for m in slug(stem).split('-') if m]
    # Les adresses recopiées laissent des traînées de caractères sans mot. On les
    # reconnaît à ceci qu'elles **mêlent lettres et chiffres** — « bci8z3gmiu » —
    # là où un nom propre n'en mêle pas : « seonghyeon » survit, lui.
    mots = [m for m in mots
            if not (len(m) >= 6 and re.search(r'\d', m) and re.search(r'[a-z]', m))
            and not re.fullmatch(r'[a-z0-9]{16,}', m)]
    gard = [m for m in mots if m not in BRUIT]
    if not gard:
        gard = mots
    # Quatre mots au plus : au-delà, un nom de fichier raconte sa provenance,
    # pas son sujet.
    n = ' '.join(gard[:4])[:26].strip()
    return n or 'autocollant'


def taille(p):
    try:
        out = subprocess.run(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', p],
                             capture_output=True, text=True, check=True).stdout
        v = [int(x) for x in re.findall(r':\s*(\d+)', out)]
        return max(v) if v else 0
    except Exception:
        return 0


def alpha(p):
    """Détouré, vraiment ?

    `sips -g hasAlpha` dit seulement qu'un canal alpha **existe**, pas qu'il
    serve : une photo sur fond blanc exportée en PNG répond oui et se collera
    pourtant avec son rectangle. On regarde donc les quatre coins de l'image
    réduite — s'ils sont opaques, il n'y a pas de découpe.
    """
    import tempfile
    try:
        with tempfile.TemporaryDirectory() as t:
            raw = os.path.join(t, 'a.rgba')
            subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', p,
                            '-vf', 'scale=32:32', '-pix_fmt', 'rgba',
                            '-f', 'rawvideo', raw], check=True)
            b = open(raw, 'rb').read()
        coins = [(0, 0), (31, 0), (0, 31), (31, 31)]
        return all(b[(y * 32 + x) * 4 + 3] < 40 for x, y in coins)
    except Exception:
        return True


def noms_existants(path):
    if not os.path.exists(path):
        return {}
    m = re.search(r'var STICKERS=(\[.*?\]);', open(path, encoding='utf-8').read(), re.S)
    if not m:
        return {}
    try:
        return {x['f']: x['n'] for x in json.loads(m.group(1))}
    except Exception:
        return {}


def main():
    dry = '--dry' in sys.argv
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    d = os.path.join(root, 'assets', 'stickers')
    brut = os.path.join(os.path.dirname(root), 'stickers-originaux')
    man = os.path.join(root, 'assets', 'stickers.js')
    if not os.path.isdir(d):
        print('Rien à faire : %s n\'existe pas.' % os.path.relpath(d, root), file=sys.stderr)
        raise SystemExit(1)

    deja = noms_existants(man)
    out, poids, pris = [], 0, set()

    for f in sorted(os.listdir(d)):
        if not f.lower().endswith(EXT) or f.startswith('.'):
            continue
        src = os.path.join(d, f)
        stem, ext = os.path.splitext(f)
        # Le nom de fichier est tiré du **nom nettoyé**, non du nom reçu : sans
        # quoi une adresse recopiée devient une adresse de fichier de 60 signes.
        s = slug(joli(stem))
        while s in pris:
            s += '-2'
        pris.add(s)
        cible = s + ('.svg' if ext.lower() == '.svg' else '.png')
        dst = os.path.join(d, cible)
        nom = joli(stem)

        sain = (f == cible)
        petit = ext.lower() == '.svg' or taille(src) <= COTE + 20
        if not alpha(src) and ext.lower() != '.svg':
            print('  ! %-24s fond opaque : il se collera avec son rectangle'
                  % nom[:24], file=sys.stderr)

        if sain and petit:
            note = 'déjà prêt'
        elif dry:
            note = ('à renommer en %s' % cible if not sain else '') + \
                   (' et à réduire' if not petit else '')
        else:
            os.makedirs(brut, exist_ok=True)
            garde = os.path.join(brut, f)
            if petit:
                if not sain:
                    shutil.move(src, dst)
                note = 'renommé'
            else:
                shutil.copyfile(src, garde)
                subprocess.run(['sips', '-Z', str(COTE), '-s', 'format', 'png',
                                src, '--out', dst],
                               check=True, stdout=subprocess.DEVNULL,
                               stderr=subprocess.DEVNULL)
                if os.path.abspath(src) != os.path.abspath(dst):
                    os.remove(src)
                note = 'réduit, original gardé'

        rel = 'assets/stickers/' + cible
        p = os.path.getsize(dst) if os.path.exists(dst) else os.path.getsize(src)
        poids += p
        out.append({'f': rel, 'n': deja.get(rel) or NOMS.get(s) or nom})
        print('  %-24s %6d o  %s' % (out[-1]['n'][:24], p, note), file=sys.stderr)

    if dry:
        print('\n(--dry : rien n\'est écrit)', file=sys.stderr)
        return
    with open(man, 'w', encoding='utf-8') as fh:
        fh.write('/* Fabriqué par tools/build-stickers.py — les autocollants\n'
                 '   qu\'on peut poser sur le boîtier. Renommer ici est sans\n'
                 '   danger : l\'outil garde les noms qu\'il trouve. */\n')
        fh.write('var STICKERS=[\n'
                 + ',\n'.join(json.dumps(x, ensure_ascii=False) for x in out)
                 + '\n];\n')
    print('\n%d autocollants, %.0f ko en tout' % (len(out), poids / 1024), file=sys.stderr)


if __name__ == '__main__':
    main()
