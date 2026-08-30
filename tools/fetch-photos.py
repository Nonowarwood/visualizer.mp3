#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Récupère une série de photos depuis une page de galerie, et la prépare.

    python3 tools/fetch-photos.py <adresse> <artiste> <série> [motif]

    python3 tools/fetch-photos.py \\
      https://kpopping.com/kpics/cortis-…-concept-photos cortis color-outside-the-lines

Ce que fait l'outil, dans l'ordre :

  1. lit la page et relève les images **dans l'ordre où elles y figurent** — pas
     dans l'ordre alphabétique des adresses, qui n'a rien à voir avec celui de la
     série ;
  2. écarte les images dont le nom ne porte pas le `motif` (par défaut : les mots
     du nom de série). Une page de galerie sert aussi des vignettes d'articles
     voisins, qui n'ont rien à y faire ;
  3. garde les originaux **hors du dossier publié**, dans
     `../photos-originaux/<artiste>/<série>/`. Ils pèsent plusieurs mégaoctets
     pièce et GitHub plafonne à 100 Mo par fichier ;
  4. en publie une réduction à 1200 px de côté long, qualité 72, dans
     `assets/photos/<artiste>/<série>/` ;
  5. imprime le fragment à coller dans le champ `photos` de l'artiste.

Les images reçues sont gardées telles quelles sous une clé tirée de leur
adresse : relancer l'outil ne retélécharge donc rien. Les doublons — une galerie
sert parfois deux fois la même image sous deux adresses — sont écartés **avant**
la numérotation, sur l'empreinte du fichier, pour qu'aucun rang ne reste vide et
qu'une relance donne exactement le même résultat.

Les photographies promotionnelles d'un groupe appartiennent à leur auteur et à
son label. Cet outil ne fait que les rassembler ; la décision de les publier
appartient à celui qui tient le dépôt.
"""

import hashlib
import os
import re
import shutil
import subprocess
import sys
import time
import urllib.request

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0 Safari/537.36')
LONG_SIDE = 1200
QUALITY = 72


def get(url, binary=False, tries=4):
    for k in range(tries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9'})
            data = urllib.request.urlopen(req, timeout=60).read()
            return data if binary else data.decode('utf-8', 'replace')
        except Exception:
            if k == tries - 1:
                raise
            time.sleep(2.0 * (k + 1))


def collect(html, pattern):
    """Dans l'ordre du document, sans doublon."""
    seen, out = set(), []
    for m in re.finditer(r'https://[^"\'\s\\]+?\.(?:jpe?g|png|webp)', html):
        u = m.group(0)
        if u in seen:
            continue
        seen.add(u)
        if pattern and pattern not in u.upper().replace('_', '-'):
            continue
        out.append(u)
    return out


def main():
    if len(sys.argv) < 4:
        print(__doc__)
        raise SystemExit(2)
    page, artist, series = sys.argv[1], sys.argv[2], sys.argv[3]
    pattern = (sys.argv[4] if len(sys.argv) > 4
               else series.upper().replace('_', '-'))

    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    pub = os.path.join(root, 'assets', 'photos', artist, series)
    raw = os.path.join(os.path.dirname(root), 'photos-originaux', artist, series)
    os.makedirs(pub, exist_ok=True)
    os.makedirs(raw, exist_ok=True)

    print('page : %s' % page, file=sys.stderr)
    urls = collect(get(page), pattern)
    print('%d images retenues (motif « %s »)' % (len(urls), pattern), file=sys.stderr)
    if not urls:
        print('Rien ne correspond. Passez un motif en quatrième argument.', file=sys.stderr)
        raise SystemExit(1)

    # ── on rapatrie d'abord, on numérote ensuite ──
    # Une galerie sert parfois deux fois la même image sous deux adresses. Si l'on
    # numérotait au fil du téléchargement, le doublon prendrait un rang et le
    # laisserait vide une fois écarté ; pire, relancer l'outil le remettrait. On
    # écarte donc **avant** de numéroter, sur l'empreinte du fichier reçu.
    tmp = os.path.join(raw, '.entrant')
    os.makedirs(tmp, exist_ok=True)
    seen, files = {}, []
    for i, u in enumerate(urls, 1):
        cache = os.path.join(tmp, hashlib.sha1(u.encode()).hexdigest()[:16])
        try:
            if not os.path.exists(cache):
                open(cache, 'wb').write(get(u, binary=True))
                time.sleep(0.4)
            h = hashlib.md5(open(cache, 'rb').read()).hexdigest()
            if h in seen:
                print('  · doublon de %s, écarté' % seen[h], file=sys.stderr)
                continue
            seen[h] = '%02d' % (len(files) + 1)
            files.append(cache)
        except Exception as e:
            print('  ! image %d : %s' % (i, e), file=sys.stderr)

    kept = []
    for i, cache in enumerate(files, 1):
        name = '%02d.jpg' % i
        big = os.path.join(raw, name)
        small = os.path.join(pub, name)
        try:
            shutil.copyfile(cache, big)
            subprocess.run(
                ['sips', '-Z', str(LONG_SIDE),
                 '--setProperty', 'formatOptions', str(QUALITY),
                 '-s', 'format', 'jpeg', big, '--out', small],
                check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            kept.append(name)
            print('  %s  %s ko' % (name, os.path.getsize(small) // 1024), file=sys.stderr)
        except Exception as e:
            print('  ! %s : %s' % (name, e), file=sys.stderr)

    tot = sum(os.path.getsize(os.path.join(pub, n)) for n in kept)
    print('\n%d fichiers, %.1f Mo publiés (originaux gardés dans %s)'
          % (len(kept), tot / 1e6, os.path.relpath(raw, root)), file=sys.stderr)

    base = 'assets/photos/%s/%s/' % (artist, series)
    print("\n{t:'%s', d:'', p:[%s]}"
          % (series.replace('-', ' ').upper(),
             ','.join("'" + base + n + "'" for n in kept)))


if __name__ == '__main__':
    main()
