# visualizer.mp3

Les parutions de **wave to earth** et de **CORTIS**, parcourues une à une.

Site statique : `index.html`, `style.css`, `script.js`, et `assets/tracks.js`
pour les titres. Aucune dépendance à compiler, aucun script tiers.

**Une réserve, et elle est réelle** : le lecteur intègre une vidéo YouTube. Tant
qu'on ne lance rien, rien n'est chargé depuis YouTube ; dès qu'on joue une piste,
un tiers entre dans la page et peut déposer. Le domaine `youtube-nocookie.com`
limite la casse sans l'annuler. C'est le prix de l'écoute sur place — pour vous en
passer, voyez « Le lecteur » plus bas.

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
- **thème clair par défaut**, le sombre à un cran de là.

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
Filtres par type : tout / albums / EP / singles. Thème : clair / sombre.

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

## Le favicon

Un rendu d'iPod à molette, recadré sur le sujet : les marges blanches de l'image
d'origine mangeaient la moitié du cadre et n'auraient laissé qu'une tache grise à
32 px. Servi en deux tailles, `assets/favicon-32.png` pour l'onglet et
`assets/favicon-180.png` pour l'écran d'accueil.

L'illustration ne vient pas d'ici et le dépôt est public : si son auteur devait
être crédité ou l'image retirée, il suffit de remplacer les deux fichiers.

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

## Les titres du disque, et de quoi les écouter

La liste des pistes est **relevée d'avance**, dans `assets/tracks.js`, par
`tools/build-tracks.py`. Deux raisons, toutes deux apprises à mes dépens.

**MusicBrainz plafonne à une requête par seconde** et répond `503` au-delà.
Interrogé à l'ouverture de chaque fiche, il suffisait de parcourir les parutions
aux flèches pour déclencher des `503` — que le code prenait pour « pas de
titres », effaçant la section et gardant l'échec en cache pour la session. Un
relevé des vingt-deux parutions l'a établi : **toutes ont leurs pistes chez
MusicBrainz**, aucune ne manquait vraiment.

**Retrouver la vidéo d'un titre demande une recherche YouTube.** Sans clé d'API,
elle ne peut se faire qu'en lisant la page de résultats — ce qui n'a rien à faire
dans le navigateur d'un visiteur. C'est fait une fois, ici.

C'est le même parti que le tableau `rel` de `script.js` : la donnée vient bien de
MusicBrainz, mais elle est relevée puis figée, pas redemandée à chaque visite. Le
site n'appelle plus personne au chargement, et la liste s'affiche d'un coup.

```bash
cd site && python3 tools/build-tracks.py
```

À relancer après avoir ajouté une parution. Si le fichier ne connaît pas une
parution, le site **retombe sur l'appel direct** à MusicBrainz — avec sa file
d'attente et ses reprises sur `503`. Rien ne casse, la liste arrive juste plus
tard et sans vidéo.

### Comment la vidéo est choisie

La chaîne **« <artiste> - Topic »** d'abord : c'est la piste auto-générée par
YouTube à partir de la sortie officielle, donc exactement le morceau et rien
d'autre — la « section sorties » d'un compte d'artiste. Puis la chaîne de
l'artiste. La durée relevée chez MusicBrainz sert d'arbitre : elle écarte les
live, les reprises et les vidéos d'album entier qui portent le même titre. **Plus
d'une minute d'écart et le candidat est rejeté** : mieux vaut pas de vidéo qu'une
mauvaise, la fiche retombe alors sur une recherche.

Le fichier produit est lisible, et une correction à la main y est sans danger.

### Le lien d'album

MusicBrainz renseigne bien mieux les liens **par album** que ceux par piste. On
n'en garde qu'un, **Spotify** : les quatre autres plateformes alignaient une
rangée de boutons qui pesait plus qu'elle n'apportait. Il forme la ligne `Écouter`
sous la liste, et il sort du site.

Deux parutions n'en ont pas chez MusicBrainz — la ligne disparaît alors d'
elle-même. Pour n'en garder aucune, videz le tableau `SERV`, dans `script.js` et
dans `tools/build-tracks.py`.

Certaines parutions rendent **plusieurs supports** — `0.1 flaws and all.` en a
deux, de huit et six pistes. Ils sont alors affichés séparément.

## Le lecteur

Cliquer un titre le joue **dans la page**, sur un petit lecteur posé en bas à
droite. Il vit hors du HUD : refermer la fiche, changer de vue ou d'artiste ne
l'interrompt pas — on referme un disque, on continue de l'écouter.

C'est une **iframe**, pas l'API JavaScript de YouTube. Celle-ci offrirait
l'enchaînement automatique en fin de piste, mais au prix d'un script tiers exécuté
dans la page, ce que le site s'interdit partout ailleurs. D'où les deux boutons
◂◂ ▸▸ qui parcourent les pistes jouables de la parution.

Les pistes qui portent un `▸` se jouent ici ; celles qui portent un `↗` s'ouvrent
au dehors, faute de vidéo trouvée.

**Pour retirer le lecteur** et revenir à un site qui ne charge rien de tiers :
supprimez la `<section class="player">` de `index.html`. Les titres retomberont
tous sur un lien sortant.

## Finitions

- l'interface entre **en séquence** après le splash : marque, barre de commandes,
  compteur, réglette et flèches se posent l'une après l'autre ;
- la ligne de métadonnées **se fond** au lieu de sauter d'un texte à l'autre ;
- les lignes de la fiche arrivent **échelonnées** sous la pochette ;
- chaque vue **se pose** en arrivant — une échelle imperceptible qui se résorbe ;
- la pochette centrale porte une **ombre plus profonde** que ses voisines ;
- la page d'image **pivote** en entrant, du côté d'où elle vient ;
- toute la barre répond à l'appui ;
- le thème se règle à l'**interrupteur *hold***, la commande qui verrouillait
  l'appareil : on le pousse, la bande orange se découvre, le site passe au sombre.
  Deux positions, clair et sombre — pas d'automatique ;
- le splash compte les pochettes sur un **petit afficheur** plutôt que sur une barre
  muette. La grille sombre par-dessus donne le point de la matrice — sans elle,
  c'est du texte ambre sur du noir, pas un afficheur ;
- le **type de la parution** se tient debout contre les deux bords de la fenêtre.

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
