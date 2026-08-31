# Vos autocollants

Déposez un fichier ici, puis relancez l'outil :

```sh
cd site && python3 tools/build-stickers.py
```

Il apparaît dans le tiroir d'options, sous **autocollants**, prêt à être posé sur
le boîtier. Rien d'autre n'est à écrire.

## Ce qui marche

- **SVG** de préférence : quelques centaines d'octets, net à toutes les tailles.
  Les neuf fournis pèsent 7,5 ko à eux tous ;
- **PNG à fond transparent**, si vous partez d'un dessin. Comptez large — 400 px
  de côté suffisent, l'autocollant s'affiche autour de 96.

## Ce qui ne marche pas

Un PNG **à fond blanc**. Il se collera avec son carré blanc autour, et l'outil ne
peut pas le deviner à votre place : détourez avant de déposer.

## Le nom

Il est tiré du nom du fichier, les tirets défaits. Les accents ne survivant pas
toujours à un nom de fichier, vous pouvez corriger le nom directement dans
`assets/stickers.js` : une relance de l'outil ne le défera pas.

## Ce qui est fourni

Neuf autocollants dessinés pour ce site — cassette, cœur, disque, éclair, étoile,
fleur, note, nuage, onde. Ils sont originaux : aucune marque, aucun personnage ni
aucune ressource de constructeur n'y est reproduit, comme partout ailleurs ici.
Supprimez-en autant que vous voulez, l'outil ne les recréera pas.
