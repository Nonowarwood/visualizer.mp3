# visualizer.mp3

Les parutions de **wave to earth** et de **CORTIS**, parcourues une à une.

Site statique en trois fichiers : `index.html`, `style.css`, `script.js`.
Aucune dépendance à compiler, aucun script tiers, aucun cookie.

## Direction artistique

La **structure** est celle du site plein écran ; le **style** emprunte le vocabulaire
visuel des iPod à molette :

- chrome argenté en dégradé vertical, avec filet sombre et brillance haute — barre
  de titre, contrôles segmentés, boutons ronds ;
- **sélections vernies monochromes** : le dégradé de l'époque avec son cassé net à
  mi-hauteur, mais en graphite plutôt qu'en bleu — la structure fait l'effet, pas la
  teinte ;
- panneaux blancs à filets et chevrons pour la fiche ;
- **Source Sans 3**, l'héritier de Myriad, la fonte de l'écosystème Apple de l'époque ;
- **angles nets partout** : l'interface de cette époque n'arrondissait pas ses
  commandes, aucune règle `border-radius` ne subsiste dans la feuille de style ;
- une **seule barre de commandes** en haut à droite — filtres et vues, séparés par
  des filets, pas par des blocs distincts ; la fiche, elle, porte sa propre croix
  à son coin, là où le regard se trouve déjà ;
- **thème clair par défaut**, le sombre et l'automatique restant au choix.

Ce n'est **pas** un appareil : ni molette, ni pile de menus, ni châssis. Aucune marque,
aucun logo ni aucune ressource de constructeur n'est reproduit — tout est redessiné en CSS.

## Navigation

| état | ce qu'on y fait | pour y aller |
|---|---|---|
| **splash** | l'introduction, pendant le préchargement des pochettes | au chargement |
| **parcours** | le Cover Flow plein écran | `entrer`, `esc`, bouton *parcours* |
| **planche** | les parutions filtrées, en grille | touche `G` ou le bouton |
| **fiche** | une parution seule, avec ses métadonnées | `↵` ou clic sur la pochette centrale |

Clavier : `←` `→` parcourir · `↵` ouvrir · `G` planche · `esc` revenir · `début` / `fin`.
On sort d'une fiche par sa croix, par `esc`, ou en touchant un filtre : filtrer
depuis une fiche la laisserait parler d'une liste qu'on ne voit plus.
Souris : molette, glisser, clic, et la réglette de position en bas.
Filtres par type : tout / albums / EP / singles. Thème : auto / clair / sombre.

## L'introduction — votre vidéo

Le splash lit **`assets/splash.mp4`**. Déposez-y le fichier de votre choix : il se
joue plein cadre sur fond noir, et le site s'ouvre dès qu'il se termine. Si le
fichier est absent, le nom de l'artiste le remplace et l'entrée se fait normalement.

```bash
cp /chemin/vers/votre-video.mp4 site/assets/splash.mp4
```

Aucune vidéo n'est fournie ni chargée depuis l'extérieur. N'utilisez qu'un fichier
dont vous détenez les droits ou dont la licence permet la republication : ce dépôt
est public.

## Les images

La vue **images** montre une photo à la fois, **incurvée comme une page de carnet**.
La courbure vient d'un découpage en dix-huit tranches verticales posées sur un
cylindre : chaque tranche porte un morceau du fond, décalé de sa largeur, et reçoit
sa propre rotation et son propre assombrissement. Un `rotateY` sur l'image entière
n'aurait donné qu'un plan incliné.

Navigation : chevrons, flèches du clavier, molette, ou glisser horizontal.
Le nom de l'artiste s'affiche en très grand, flouté, derrière.

**CORTIS est rempli** : 73 images de la série de teasers de `GREENGREEN`, récupérées
depuis kpopping.com. Les fichiers d'origine faisaient 6500 px de large pour 391 Mo au
total — impubliables tels quels, GitHub plafonnant à 100 Mo par fichier. Ils ont été
ramenés à 1200 px de côté long, qualité 72, soit **15 Mo** pour les 73. Les originaux
sont conservés hors du dossier publié, dans `../photos-originaux/cortis/`.

Pour remplir la vue d'un autre artiste :

1. déposez vos images dans `assets/photos/<slug>/` — `wave-to-earth` ou `cortis` ;
2. listez-les dans le champ `photos` de l'artiste, en haut de `script.js` :

```js
slug:'cortis', photos:['assets/photos/cortis/01.jpg','assets/photos/cortis/02.jpg'],
```

Les photographies promotionnelles d'un groupe appartiennent à leur auteur et à son
label. Celles présentes ici ont été ajoutées à votre demande : la décision de les
publier vous revient. Pour les retirer du dépôt sans toucher au code, videz
`assets/photos/cortis/` et remettez `photos:[]` sur l'artiste.

## L'ancienne introduction

*Remplacée par la lecture vidéo ci-dessus.* Elle reprenait la technique d'une animation de référence : **séparation des canaux
rouge, vert et bleu**, écartés puis ramenés au centre, avec passage du contour fin à
la masse pleine et un flou qui gonfle en cours de route, sur fond noir et tramage en
surimpression. Environ 1,5 seconde.

Écrite en CSS — quatre calques de texte en `mix-blend-mode: screen`, animés en
`text-stroke`, `filter` et `transform`. **Aucune vidéo n'est chargée.**

Il n'y a **pas de bouton d'entrée** : le splash s'efface de lui-même dès que
l'animation est jouée et les pochettes chargées, et le site apparaît d'un coup.
Un clic l'abrège ; un filet de sécurité borne l'attente à quatre secondes.
La barre fine suit le préchargement.

## Curseur et sons

Le curseur est remplacé par **quatre équerres formant un cadre**, avec un point de
visée au centre. Leur écartement porte l'information : resserré au repos, ouvert sur
un élément actionnable, largement ouvert sur une pochette — le curseur annonce le
cadrage avant même le clic, et le point de visée s'efface quand il cadre. Il se
contracte à l'appui.

Le tout est en `mix-blend-mode: difference` : il s'inverse de lui-même selon le fond,
lisible sur le chrome clair comme sur le noir, sans avoir à connaître ce qu'il y a
dessous. Il ne s'active pas sur écran tactile, et le curseur natif revient si le
script ne tourne pas.

Les **sons sont entièrement synthétisés** par l'API Web Audio : quatre timbres courts
— survol, clic, changement de pochette, changement de vue — construits à la volée à
partir d'oscillateurs. **Aucun fichier audio n'est chargé**, rien à héberger, rien qui
appartienne à un tiers.

Rien ne sonne avant votre premier geste : les navigateurs l'exigent, et l'introduction
reste silencieuse. Le bouton **son / muet** de la barre coupe tout, et le choix est
retenu.

## Finitions

- l'interface entre **en séquence** après le splash : marque, barre de commandes,
  compteur, réglette et flèches se posent l'une après l'autre ;
- la ligne de métadonnées **se fond** au lieu de sauter d'un texte à l'autre ;
- les lignes de la fiche arrivent **échelonnées** sous la pochette ;
- chaque vue **se pose** en arrivant — une échelle imperceptible qui se résorbe ;
- la pochette centrale porte une **ombre plus profonde** que ses voisines ;
- la page d'image **pivote** en entrant, du côté d'où elle vient ;
- toute la barre répond à l'appui.

## Animations

Les pochettes des artistes non affichés sont tirées en arrière-plan dès que la
première série est en place, une par une : changer d'artiste devient instantané
au lieu d'attendre l'archive.

Apparition en cascade des pochettes · profondeur de champ (flou selon l'éloignement
du centre) · compteur à rouleaux, chiffre par chiffre · transition **FLIP** : la
pochette vole de sa place dans le Cover Flow jusqu'à la fiche · grain léger et léger
vignettage.

Le vol FLIP se mesure sur la fiche **posée**, pas sur la fiche qui se pose : le temps
du vol, l'échelle d'entrée du panneau est neutralisée. Sans quoi la pochette viserait
une place que la fiche n'occupe pas encore, et sauterait de quelques pixels en
atterrissant — le vol tient lieu de transition.

Le fond coloré tiré des pochettes a été retiré : il contredisait le chrome argenté.
Toute l'extraction de couleur qui l'alimentait a disparu avec lui. Tout est neutralisé sous `prefers-reduced-motion`.

## Publier sur GitHub Pages

```bash
cd site
git init && git add -A && git commit -m "visualizer.mp3"
git branch -M main
git remote add origin git@github.com:<vous>/<depot>.git
git push -u origin main
```

Puis **Settings → Pages → Deploy from a branch → main / (root)**.
`.nojekyll` fait servir le dossier tel quel.

## Plusieurs artistes

Le nom en haut à gauche est un bouton : il ouvre une liste déroulante qui glisse
depuis son coin, items décalés en cascade. Changer d'artiste reconstruit le Cover
Flow, la planche, la réglette, les compteurs et les filtres, sans recharger la page
ni rejouer le splash.

Pour en ajouter un, complétez le tableau `ARTISTS` en haut de `script.js` :

```js
{id:'<mbid de l'artiste>', name:'CORTIS', place:'Séoul', since:2025, rel:[ … ]}
```

Les parutions se récupèrent dans MusicBrainz :
`https://musicbrainz.org/ws/2/release-group?artist=<mbid>&fmt=json&limit=100`

## Modifier le contenu

Tout part du tableau `rel` de chaque artiste, en haut de `script.js` :

```js
{id:'adc2c452-…', t:"0.1 flaws and all.", kind:'Album', date:'20 avril 2023', y:2023,
 v:'0.1', label:'WAVY', k:'#8E9E8A', cover:'', note:"Le texte de la fiche."}
```

| clé | rôle |
|---|---|
| `id` | identifiant MusicBrainz — sert à trouver la pochette et à lier la fiche |
| `t` `kind` `date` `y` | titre, type (`Album` / `EP` / `Single`), date, année |
| `v` | numéro de la série (`0.01`, `0.1`…) — vide pour les singles |
| `label` | affiché seulement s'il est renseigné |
| `k` | teinte de repli, remplacée par la couleur extraite de la pochette |
| `rid` | identifiant d'**édition**, facultatif — prioritaire sur `id` pour la pochette et le lien |
| `cover` | chemin d'une image locale — prioritaire sur tout le reste |
| `note` | texte de la fiche |

Cover Flow, planche, réglette, compteurs et filtres se régénèrent seuls.

## Les pochettes

Servies à l'exécution par la **Cover Art Archive** (MusicBrainz), appelées par
l'identifiant de chaque parution. Les quinze y ont une image ; si l'une manque, le
titre s'affiche à sa place.

Rien n'est copié dans le dépôt : les visuels appartiennent au groupe et à son label.
Pour héberger vos propres fichiers, déposez-les dans `assets/covers/` et renseignez
`cover` — en vous assurant d'en avoir le droit.

L'archive renvoie `access-control-allow-origin: *`, ce qui permet d'échantillonner
chaque pochette sur un canevas 32×32 et d'en tirer les couleurs de la nappe de fond.

## Les données

Toutes tirées de **MusicBrainz**, triées par date de première parution.

**wave to earth** — `89e95aa3-bd49-4af3-9c87-0d88b2093bb0`, 15 parutions.
Deux réserves : MusicBrainz classe `play with earth! 0.03` en **Album**, Wikipédia
en **EP** ; le site suit MusicBrainz, d'où viennent les identifiants. Et la
compilation `uncounted 0.00` (mai 2024) n'y figure pas, donc elle est absente.

**CORTIS** — `d27808c8-d3a6-4bbe-acc2-22d5e19f3bca`, 7 parutions.
`What You Want` y figure deux fois, aux 18 et 22 août 2025 : un doublon de catalogue.
La première entrée est conservée, la seconde écartée.

`GREENGREEN_playextended` (23 août 2026) n'existe **pas** comme parution distincte :
c'est une édition à l'intérieur du release-group `GREENGREEN`. Elle porte donc une
clé supplémentaire, `rid`, l'identifiant de l'édition — quand elle est présente, la
pochette et le lien pointent vers `/release/<rid>` au lieu de `/release-group/<id>`.
C'est le moyen d'ajouter n'importe quelle réédition, version étendue ou pressage
particulier.

Les labels de CORTIS ne sont pas renseignés faute de source sûre — le champ reste
vide et la ligne ne s'affiche pas.

Les **notes** de chaque fiche sont rédigées pour la maquette. Réécrivez-les.
