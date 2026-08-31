# Vos autocollants

Déposez un fichier ici, puis relancez l'outil :

```sh
cd site && python3 tools/build-stickers.py
python3 tools/build-stickers.py --dry    # dit ce qu'il ferait, n'écrit rien
```

Il apparaît dans le tiroir d'options, sous **autocollants**, prêt à être posé sur
le boîtier. Une fois posé, une poignée permet de l'agrandir, de le tourner, de le
retirer, ou de valider sa place.

## Ce que l'outil fait de votre fichier

**Il le renomme.** Un nom de fichier devient une adresse, et le `#` y est fatal :
il coupe l'adresse, et le fichier n'est jamais demandé. Les espaces, les émojis et
les accents décomposés voyagent mal. Votre fichier reçoit donc un nom sobre — le
**nom affiché**, lui, est tiré de l'ancien, débarrassé de ce qui n'y disait rien.

**Il le réduit** à 420 px de côté long, transparence gardée. Un autocollant
s'affiche autour de 96 px : au-delà, c'est du poids que personne ne voit.
**L'original n'est pas perdu**, il part dans `../stickers-originaux/`, hors du
dossier publié.

**Il vérifie le détourage.** Un canal alpha peut exister sans servir : une photo
sur fond blanc répond « oui » et se colle pourtant avec son rectangle. L'outil
regarde les quatre coins et vous le dit. Ce n'est pas une erreur — un portrait
rectangulaire à bord blanc fait un autocollant très acceptable — mais autant le
savoir avant.

## Ce qui marche

- **PNG à fond transparent**, le plus courant. 400 px de côté suffisent
  largement ;
- **SVG**, si vous en avez : quelques centaines d'octets et net à toutes les
  tailles.

## Le nom affiché

Corrigez-le directement dans `assets/stickers.js` si celui que l'outil a deviné ne
vous convient pas : une relance ne le défera pas.

## Le droit

Les images que vous déposez appartiennent à leurs auteurs. L'outil ne fait que
les préparer ; la décision de les publier appartient à qui tient le dépôt.
