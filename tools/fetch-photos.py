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
import urllib.parse
import urllib.request

UA = ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 '
      '(KHTML, like Gecko) Chrome/126.0 Safari/537.36')
LONG_SIDE = 1200
QUALITY = 72
TOUT = False


def get(url, binary=False, tries=4):
    """Une requête, et la patience qui va avec.

    Deux réponses demandent un traitement plutôt qu'une nouvelle tentative :

      - **308**, redirection permanente. Python ne la suit pas de lui-même avant
        la 3.11, et la galerie s'en sert pour ses adresses canoniques : l'outil
        s'arrêtait sur une page qui existait pourtant. On la suit à la main ;
      - **403**, quand on a trop demandé d'un coup. Ce n'est pas un refus mais un
        essoufflement : on attend plus longtemps qu'après une erreur ordinaire,
        et l'on repart.
    """
    for k in range(tries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9'})
            data = urllib.request.urlopen(req, timeout=60).read()
            return data if binary else data.decode('utf-8', 'replace')
        except urllib.error.HTTPError as e:
            if e.code in (301, 302, 303, 307, 308):
                suite = e.headers.get('Location')
                if suite:
                    url = urllib.parse.urljoin(url, suite)
                    continue
            if e.code in (403, 429) and k < tries - 1:
                time.sleep(20.0 * (k + 1))
                continue
            if k == tries - 1:
                raise
            time.sleep(2.0 * (k + 1))
        except Exception:
            if k == tries - 1:
                raise
            time.sleep(2.0 * (k + 1))


def collect(html, pattern):
    """Les images de la série, dans l'ordre où la page les donne.

    La galerie a changé de forme depuis le premier usage de cet outil, et deux
    choses ont cassé :

    1. **les adresses y sont échappées** — `https:\\/\\/…` dans du JSON embarqué.
       L'expression s'arrêtait à la barre inverse et ramenait des `tps://…`
       inutilisables. On défait donc l'échappement avant de chercher ;

    2. **les noms de fichiers ne portent plus le nom de la série.** Ils sont
       maintenant de la forme `<horodatage>-<jeton>-<rang>.jpg`, et le filtrage par
       motif ne retenait plus qu'une image sur cent vingt-cinq.

    Ce qui distingue une série est désormais son **horodatage commun** : toutes ses
    images le partagent, et leur rang est le nombre final. On garde donc le groupe
    le plus nombreux sous `/kpics/`, et on l'ordonne par ce rang — ce qui est plus
    sûr que l'ordre du document, où les vignettes voisines se mêlent aux grandes.

    Un motif explicite passé en argument court-circuite tout cela.
    """
    html = html.replace('\\/', '/')
    seen, urls = set(), []
    for m in re.finditer(r'https://[^"\'\s\\]+?\.(?:jpe?g|png|webp)', html):
        u = m.group(0)
        # La même image est servie par deux hôtes : on ne la prend qu'une fois,
        # sur son nom de fichier, avant de la télécharger deux fois pour rien.
        nom = u.rsplit('/', 1)[-1]
        if nom in seen:
            continue
        seen.add(nom)
        urls.append(u)

    if pattern:
        return [u for u in urls if pattern in u.upper().replace('_', '-')]

    # Deux formes cohabitent sur la galerie selon l'âge de la série, et il faut
    # savoir lire les deux :
    #   récente  /kpics/2026/05/1778511834990-icxuqe-3.jpg   → l'horodatage groupe
    #   ancienne /documents/48/3/Nom-De-La-Serie-documents-4.jpeg → le nom groupe
    # Dans les deux cas le nombre final donne le rang, qui est l'ordre voulu — plus
    # sûr que celui du document, où les vignettes voisines se mêlent aux grandes.
    FORMES = (r'/kpics/.*?/(\d{10,})-\w+-(\d+)\.(?:jpe?g|png|webp)$',
              r'/documents/.*/(.+?)-documents-(\d+)\.(?:jpe?g|png|webp)$')
    grappes = {}
    for u in urls:
        for f in FORMES:
            m = re.search(f, u)
            if m:
                grappes.setdefault(m.group(1), []).append((int(m.group(2)), u))
                break
    if not grappes:
        return []
    if TOUT:
        # Certaines pages portent **plusieurs séries légitimes** — les teasers d'un
        # album y voisinent avec une seconde livraison. Les prendre toutes n'est
        # pourtant pas le défaut : une page de galerie sert aussi les vignettes des
        # articles voisins, et l'on en ramènerait douze grappes étrangères.
        out = []
        for k in sorted(grappes, key=lambda k: -len(grappes[k])):
            out += [u for _, u in sorted(grappes[k])]
        print('  %d séries sur la page, toutes prises (%d images)'
              % (len(grappes), len(out)), file=sys.stderr)
        return out
    cle = max(grappes, key=lambda k: len(grappes[k]))
    if len(grappes) > 1:
        print('  %d séries sur la page, on prend la plus fournie (%d images)'
              % (len(grappes), len(grappes[cle])), file=sys.stderr)
        print('  (--tout pour les prendre toutes)', file=sys.stderr)
    return [u for _, u in sorted(grappes[cle])]


def main():
    global TOUT
    argv = [a for a in sys.argv[1:] if a != '--tout']
    TOUT = '--tout' in sys.argv
    if len(argv) < 3:
        print(__doc__)
        raise SystemExit(2)
    page, artist, series = argv[0], argv[1], argv[2]
    # Plus de motif par défaut : le nom de la série ne figure plus dans celui des
    # fichiers, et le déduire ne retenait qu'une image sur cent vingt-cinq. On
    # laisse le regroupement par horodatage faire son travail ; le motif reste
    # disponible en quatrième argument pour les galeries d'autrefois.
    pattern = argv[3] if len(argv) > 3 else ''

    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    pub = os.path.join(root, 'assets', 'photos', artist, series)
    raw = os.path.join(os.path.dirname(root), 'photos-originaux', artist, series)
    os.makedirs(pub, exist_ok=True)
    os.makedirs(raw, exist_ok=True)

    print('page : %s' % page, file=sys.stderr)
    urls = collect(get(page), pattern)
    print('%d images retenues%s' % (len(urls),
          (' (motif « %s »)' % pattern) if pattern else ''), file=sys.stderr)
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
