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
- les **options dans un tiroir**, à droite de la barre. Elle portait sept commandes
  de front : trois vues, deux options d'affichage, le thème et le son. Les vues
  restent en vue ; le reste s'y range, ce qui la rend lisible et laisse de la place
  pour ce qu'on y ajoutera. Un clic sur une option ne referme pas le tiroir — on en
  règle souvent deux à la suite ;
- **thème clair par défaut**, le sombre à un cran de là — et le sombre reprend
  **toute** la palette, chrome et panneaux compris. Il n'en changeait d'abord que
  le fond et le texte : la barre de commandes et la fiche restaient en argent
  clair quel que soit le thème, ce qui donnait deux moitiés de site qui ne se
  parlaient pas. Le chrome de l'époque tirait sa lisibilité d'une brillance
  blanche en haut de chaque relief ; sur un chrome sombre elle éblouirait, et
  `--cr-glow` la retourne en ombre portée. La structure du dégradé, elle, ne
  bouge pas.

Ce n'est **pas** un appareil, par défaut : ni molette, ni pile de menus, ni châssis
— l'interface est plein écran, et c'est le style seul qui cite l'époque. Un mode
facultatif la loge dans un boîtier dessiné, voir « Dans l'appareil » plus bas.

Aucune marque, aucun logo ni aucune ressource de constructeur n'est reproduit — tout
est redessiné en CSS, châssis compris.

## Navigation

| état | ce qu'on y fait | pour y aller |
|---|---|---|
| **splash** | l'introduction, pendant le préchargement des pochettes | au chargement |
| **parcours** | le Cover Flow plein écran | `entrer`, `esc`, bouton *parcours* |
| **planche** | les parutions filtrées, en grille | touche `G` ou le bouton |
| **fiche** | une parution seule, avec ses métadonnées | `↵` ou clic sur la pochette centrale |

Clavier : `←` `→` parcourir · `↵` ouvrir · `G` planche · `L` liste · `esc` revenir ·
`début` / `fin`.
On sort d'une fiche par sa croix, par `esc`, ou en touchant un filtre : filtrer
depuis une fiche la laisserait parler d'une liste qu'on ne voit plus.
Souris : molette, glisser, clic, et la réglette de position en bas.
Filtres par type : tout / albums / EP / singles. Thème : clair / sombre.

## L'introduction — un collage

Repris d'une animation de référence : des images arrivent une à une, se chevauchent
en une composition dense, puis s'en vont dans l'ordre inverse. Ici ce sont **les
pochettes** — le splash montre donc ce que le site contient, au lieu d'une image
sans rapport.

Il puise dans les versions **basse définition** de `assets/pix/`, locales et de six
kilo-octets : le collage se monte sans rien attendre de l'archive, ce qui est tout
l'intérêt d'un écran d'attente.

Les sept places sont **posées à la main**, dans le tableau `COLL` en tête de la
section : une composition se compose, elle ne se tire pas au sort. Aucune rotation —
les angles restent nets, comme partout ailleurs. Le montage prend sept fois 110 ms,
la composition tient un instant, puis se démonte à 70 ms par carte.

L'artiste est celui que l'adresse a désigné : un lien vers CORTIS ne s'ouvre pas sur
les pochettes de wave to earth.

**Les pochettes, et rien d'autre** : ni compteur, ni barre de chargement, ni
mention. Le collage dit déjà ce qu'on attend et où l'on en est — chaque carte qui
se pose est une pochette de plus. Le décompte subsiste dans le code, mais pour la
seule chose qu'il sert encore : savoir quand tout est là.

*Le splash lisait auparavant `assets/splash.mp4`. Pour y revenir, il suffit de
remettre une `<video>` à la place du `<div class="coll">`.*

## Le favicon

Un rendu d'iPod à molette, recadré sur le sujet : les marges blanches de l'image
d'origine mangeaient la moitié du cadre et n'auraient laissé qu'une tache grise à
32 px. Servi en deux tailles, `assets/favicon-32.png` pour l'onglet et
`assets/favicon-180.png` pour l'écran d'accueil.

L'illustration ne vient pas d'ici et le dépôt est public : si son auteur devait
être crédité ou l'image retirée, il suffit de remplacer les deux fichiers.

## Les images

Une **hélice de cartes** sur fond noir, reprise d'une référence : la photo de
devant est d'aplomb et pleine lumière, les autres tournent et s'enfoncent de part
et d'autre, la chaîne montant en diagonale d'un coin à l'autre.

La diagonale ne vient pas d'un anneau incliné — il aurait penché *toutes* les
cartes, y compris celle de devant. Chaque carte **tourne d'un cran autour de l'axe
et monte d'autant** : rotation seule, on obtient un anneau plat ; montée seule,
une pile ; les deux ensemble donnent l'hélice, et la carte de devant reste droite.

Les cartes existent une fois et ne changent que de transformée, si bien que la
transition CSS les fait **glisser le long de l'hélice** au lieu de les faire
réapparaître ailleurs.

**La carte est taillée pour que l'hélice tienne dans la fenêtre**, et non l'inverse.
Une taille fixe la faisait déborder en haut et en bas ; les débords se calculent
maintenant en côtés de carte, et la taille s'en déduit. La perspective n'entre pas
dans le calcul parce qu'elle ne fait que **rétrécir** : la carte de devant, seule
à l'échelle 1, est déjà le pire cas.

Ce calcul réservait au départ bien plus de place qu'il n'en fallait. Deux
corrections ont rendu les photos **un tiers plus grandes**, sans rien retirer de
ce qu'on voit :

- une carte tournée ne prend pas sa largeur entière à l'écran mais sa largeur
  **projetée**, `w·|cos a|`. À 88° elle ne montre qu'une tranche, et on lui
  réservait pourtant tout son côté. La hauteur, elle, ne bouge pas : une rotation
  autour de l'axe vertical ne raccourcit rien verticalement ;
- **le fondu s'achève franchement au dernier cran**, au lieu de s'arrêter à 6 %.
  Deux cartes traînaient aux extrémités, invisibles mais bien comptées dans la
  place à réserver — elles rapetissaient toute l'hélice pour rester dans le cadre.

Sur une fenêtre de 1710 px, la carte de base passe ainsi de 221 à 290 px : une
photo en 4:3 mesure 335 × 251 au lieu de 255 × 191.

**La fenêtre de cartes boucle.** Sans cela, en début et en fin de liste elle était
tronquée d'un côté et l'hélice partait de travers. Elle ne peut pas dépasser la
moitié de la liste, sinon une même photo devrait tenir deux places à la fois.

Quatre nombres font l'allure, en tête de la section dans `script.js`. Ils sont
**sans unité — en largeurs de carte** — puisque c'est la carte qui s'adapte :

| | |
|---|---|
| `P_STEP` | l'angle d'un cran, en degrés — plus il est grand, plus les voisines se tournent |
| `P_RISE` | la montée par cran : c'est elle qui fait la pente, et elle seule décide de la hauteur occupée |
| `P_R` | le rayon : il règle l'écart. À 2,8 pour un pas de 22°, les cartes sont séparées de 7 % de leur côté ; à 2,2 elles se recouvraient d'un tiers |
| `P_WIN` | combien de cartes de chaque côté restent posées — ramené à 5 sous 700 px de large, où neuf ne laisseraient que des miettes |

### Deux plans ne peuvent pas se recouvrir sans se couper

C'est le piège de toute la vue, et il tranchait les photos en plein milieu.

Avec `transform-style: preserve-3d`, les cartes sont de **vrais plans dans un même
espace**. Or deux plans tangents à un cylindre, écartés d'un angle θ, se croisent
à `R·tan(θ/2)` de leur centre : dès que la demi-carte dépasse cette distance, ils
se traversent, et le navigateur les découpe le long de leur ligne d'intersection.

Au pas de 17°, il aurait fallu un rayon de **3,35 côtés de carte** pour l'éviter —
c'est-à-dire aucun recouvrement, c'est-à-dire pas de jeu de cartes. Le problème
n'était donc pas un mauvais réglage : il était structurel.

La sortie est de **laisser l'anneau plat** et de porter la perspective sur lui.
Chaque carte est alors rendue seule, avec sa perspective, puis composée à plat :
elles se recouvrent par ordre de plan, sans jamais se couper.

### Chaque photo garde son format

Pas de rognage : un paysage reste un paysage, un portrait reste un portrait. Les
proportions sont mesurées sur l'image même, **cinq crans avant qu'elle n'entre
dans la fenêtre** — sans quoi une carte découvrirait son format sous les yeux et
changerait de taille en arrivant.

La taille est **normalisée par l'aire** plutôt que par un côté : `w = S·√r` et
`h = S/√r`, dont le produit vaut `S²` quel que soit le format. Un paysage et un
portrait occupent ainsi la même place, sans que l'un écrase l'autre.

Le **cadre** est borné entre 0,5 et 2,2, pas l'image. Une des 73 photos est un
panorama de rapport 6 : `object-fit: contain` la pose en entier dans un cadre de
2,2, avec des bandes au-dessus et au-dessous, invisibles sur ce fond presque noir.
Sans cette borne, cette seule photo rétrécirait toutes les autres, puisque c'est
le format le plus large qui commande la mise à l'échelle.

Cliquer la carte de devant l'ouvre en grand — la même visionneuse que les
pochettes. Cliquer une carte de côté l'amène simplement au centre.

### Le mouvement est continu

La position n'est pas un rang mais un **nombre à virgule**. Auparavant l'affichage
avançait par crans, avec un verrou de 260 ms sur la molette : rien ne pouvait y
être fluide.

Molette et glisser déplacent maintenant la position continûment, et l'hélice est
redessinée à chaque image ; les flèches et les chevrons visent un entier vers
lequel la position glisse. Au repos, elle se pose sur le cran le plus proche —
sinon on resterait entre deux photos.

Conséquence : **plus aucune transition CSS sur la transformée des cartes**, elle
se battrait avec la boucle et traînerait d'une image sur l'autre.

L'approche est calée sur le **temps écoulé**, pas sur le nombre d'images : à
120 Hz, un pas par image irait deux fois plus vite qu'à 60. Un cran prend 383 ms
quel que soit l'écran, dont 90 % du chemin dans les 150 premières millisecondes.

Cliquer une carte de côté l'amène au centre **par le plus court chemin** : l'hélice
boucle, aller à la 2 depuis la 72 ne doit pas dérouler soixante-dix crans.

### Le reste de l'interface

La vue **suit le thème** : elle n'a pas de fond propre, celui de la page traverse.
Elle était d'abord noire dans les deux thèmes, ce qui donnait un site clair qui
s'ouvrait sur un trou noir.

Le **grand compteur** y sert aussi : `01 / 73`, `02 / 73`. Il disait le rang d'une
parution qu'on ne regarde plus. La **réglette** disparaît en revanche — elle porte
un calendrier de sorties, qui ne veut rien dire pour des photos. Et toucher un
filtre (albums, EP, singles) fait sortir de la vue, comme depuis une fiche : le
filtre n'y porte sur rien de visible.

### Le filé

Le mouvement se lit comme une suite de sauts s'il reste net : une hélice qui
traverse la fenêtre en trois images doit **traîner**. Un flou proportionnel à la
vitesse du moment est donc posé sur les cartes, borné à 7,5 % de leur côté —
au-delà on ne lit plus rien. La vitesse est lissée, sans quoi le flou scintille
d'une image à l'autre.

Un piège s'y cache : la vitesse lissée ne retombe jamais tout à fait à zéro. À la
dernière image, elle restait au-dessus du seuil et **le flou se figeait**, puisque
aucune image ne suit pour le lever. Elle est donc remise à zéro avant cette
dernière passe.

Le **lancer** prolonge le geste au lieu de le couper : au relâcher, la position
part là où la vitesse la portait — quatre crans au plus — puis se pose sur le cran
le plus proche.

Les sources ne sont posées qu'à l'approche : soixante-treize images chargées d'un
coup pèseraient les quinze mégaoctets du dossier.

Navigation : chevrons, flèches du clavier, molette, ou glisser horizontal.
Le nom de l'artiste s'affiche en très grand, flouté, derrière, et la ligne de
métadonnées porte le nom de la série et sa mention — renseignés de longue date,
ils n'étaient montrés nulle part.

Les cartes sont des **boutons**, mais **une seule est atteignable au clavier** :
celle de devant. Soixante-treize cartes dans l'ordre de tabulation seraient une
traversée du désert ; on atteint celle du milieu, les flèches font le reste, et
`entrée` l'ouvre en grand.

**CORTIS a deux séries**, récupérées depuis kpopping.com :

| série | | |
|---|---|---|
| `COLOR OUTSIDE THE LINES` | 48 images | concept, septembre 2025 |
| `GREENGREEN` | 73 images | teasers |

Les fichiers d'origine font 4000 à 6500 px de large — impubliables tels quels,
GitHub plafonnant à 100 Mo par fichier. Ramenés à 1200 px de côté long, qualité 72,
les 121 images pèsent **27 Mo**. Les originaux, 610 Mo, sont conservés hors du
dossier publié, dans `../photos-originaux/cortis/<série>/`.

### Les séries

Un artiste peut avoir **plusieurs séries** de photos — une par parution, en
général. Le champ `photos` porte alors une liste de séries plutôt qu'une liste
d'adresses :

```js
photos:[
  {t:'GREENGREEN', d:'teasers · août 2026', p:['assets/photos/cortis/greengreen/01.jpg', …]},
  {t:'COLOR OUTSIDE THE LINES', d:'…',      p:['assets/photos/cortis/color-outside-the-lines/01.jpg', …]}
]
```

`t` est le nom montré, `d` la mention qui l'accompagne, `p` les fichiers. **Une
simple liste d'adresses reste acceptée** et vaut série unique : le champ d'un
artiste qui n'en a qu'une n'a pas à changer de forme.

Le sélecteur prend la place laissée libre par la réglette au milieu de la barre
du bas — elle porte un calendrier de sorties, sans objet ici. Un seul des deux
occupe donc la fente centrale, ce qui la garde centrée. **Il ne s'affiche qu'à
partir de deux séries** : une seule n'est pas un choix. La série entre dans
l'adresse pour la même raison :

```
#/cortis/images                            une seule série
#/cortis/images/color-outside-the-lines    plusieurs
```

### Récupérer une série

```bash
python3 tools/fetch-photos.py <adresse de la galerie> <artiste> <série>
```

L'outil relève les images **dans l'ordre où elles figurent sur la page** — pas
dans l'ordre alphabétique de leurs adresses, qui n'a rien à voir avec celui de la
série — et écarte celles dont le nom ne porte pas le nom de la série : une page de
galerie sert aussi des vignettes d'articles voisins.

Il garde les originaux **hors du dossier publié**, dans
`../photos-originaux/<artiste>/<série>/`, et n'en publie qu'une réduction à
1200 px de côté long, qualité 72. Il imprime pour finir le fragment à coller dans
le champ `photos`.

Deux détails qui n'ont l'air de rien :

- les images reçues sont gardées sous une clé tirée de leur adresse, dans un
  sous-dossier `.entrant`. Relancer l'outil ne retélécharge donc rien — mais ce
  cache double la place occupée, et **se supprime sans dommage** une fois la série
  en place ;
- **les doublons sont écartés avant la numérotation.** Une galerie sert parfois
  deux fois la même image sous deux adresses ; écartée après coup, elle aurait
  laissé un rang vide, et une relance l'aurait remise. `COLOR OUTSIDE THE LINES`
  en comptait un : 49 adresses, 48 photos.

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

### Les vidéos viennent des sorties officielles

`build-tracks.py` retrouve chaque piste par une **recherche** YouTube, et un bon
résultat n'est pas toujours le bon. Il tombe sur une reprise, une version
accélérée, une vidéo d'album entier, ou la version « feat. » d'un morceau qui
existe aussi seul. Le relevé initial de CORTIS avait ainsi **20 pistes fausses sur
23** : un même identifiant servait pour `REDRED`, pour `MOTION` et pour `REDRED`
dans `GREENGREEN` ; un autre pour `Blue Lips` *et* pour `Lullaby`.

L'onglet **sorties** d'une chaîne d'artiste liste au contraire les albums
officiels, chacun sous forme de liste générée par YouTube : les bonnes vidéos,
dans l'ordre du disque. Il n'y a plus à deviner.

```bash
python3 tools/yt-releases.py @cortis_bighit cortis --dry   # pour voir
python3 tools/yt-releases.py @cortis_bighit cortis          # pour écrire
```

La règle de sécurité tient en une ligne : **on ne remplace que si les comptes
concordent.** Quand la liste officielle a autant de pistes que MusicBrainz, la
correspondance est positionnelle et sûre — vérifié sur `play with earth! 0.03`,
dont les sept rangs coïncident exactement. Sinon on ne touche à rien et on le dit :
mieux vaut un lien tiré d'une recherche qu'un lien faux.

Deux pièges rencontrés :

- **l'onglet et les listes ne se décrivent pas pareil.** La page *sorties* emploie
  `playlistRenderer`, les pages de liste `lockupViewModel`. L'outil accepte les
  deux ;
- **les parutions absentes de la chaîne restent à la recherche.** `To us` est un
  morceau d'APRO en featuring wave to earth, donc absent de la chaîne de
  wave to earth ; la recherche lui avait donné la vidéo de `you`. Retrouvé à la
  main sur *APRO - Topic*, durée concordante à la seconde.

Un contrôle final vérifie qu'aucune vidéo ne sert deux morceaux différents. Les
cinq réemplois restants sont légitimes : un single repris sur un disque.

**77 pistes, 77 vidéos.**

### Comment la recherche choisit, à défaut

La chaîne **« <artiste> - Topic »** d'abord : c'est la piste auto-générée par
YouTube à partir de la sortie officielle, donc exactement le morceau et rien
d'autre — la « section sorties » d'un compte d'artiste. Puis la chaîne de
l'artiste. La durée relevée chez MusicBrainz sert d'arbitre : elle écarte les
live, les reprises et les vidéos d'album entier qui portent le même titre. **Plus
d'une minute d'écart et le candidat est rejeté** : mieux vaut pas de vidéo qu'une
mauvaise, la fiche retombe alors sur une recherche.

Le fichier produit est lisible, et une correction à la main y est sans danger.
Cette recherche ne sert plus que de repli, pour les parutions qu'aucune chaîne
d'artiste ne porte.

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

C'est une **iframe**, pas l'API JavaScript de YouTube : celle-ci exigerait un
script tiers exécuté dans la page, ce que le site s'interdit partout ailleurs.

**Une piste à la fois**, et les boutons ◂◂ ▸▸ pour passer à la suivante.

L'enchaînement automatique a été tenté, par le paramètre `playlist` de
l'intégration. Il est censé ne porter que la **suite** du disque, la piste
demandée restant dans le chemin de l'adresse — c'est ce que dit la documentation,
et ce sur quoi repose le tour bien connu du `?loop=1&playlist=<le même
identifiant>` pour faire boucler une vidéo.

**Tous les lecteurs ne s'y tiennent pas.** Certains prennent `playlist` pour la
liste entière et commencent à son premier élément, c'est-à-dire à la piste
*suivante* : lancer `TNT` jouait `REDRED`, lancer `REDRED` jouait `ACAI`. Le
décalage venait de là, et non de la donnée — chaque identifiant a été recoupé
contre YouTube, tous correspondaient à leur titre.

Comme on ne peut pas savoir d'avance lequel des deux comportements s'appliquera,
on ne s'y fie plus. Jouer la piste demandée n'est pas négociable ; l'enchaînement
n'était qu'un agrément.

Le récupérer proprement demanderait l'**API JavaScript de YouTube**, qui donne un
retour d'état et donc un vrai enchaînement — mais au prix d'un script tiers exécuté
dans la page, ce que le site s'interdit partout ailleurs.

Les pistes qui portent un `▸` se jouent ici ; celles qui portent un `↗` s'ouvrent
au dehors, faute de vidéo trouvée.

**Pour retirer le lecteur** et revenir à un site qui ne charge rien de tiers :
supprimez la `<section class="player">` de `index.html`. Les titres retomberont
tous sur un lien sortant.

## L'adresse

Le fragment porte l'artiste, la vue, et la parution quand il y en a une :

```
#/wave-to-earth             le parcours
#/cortis/planche            la planche
#/wave-to-earth/bad-pieces  une fiche
```

Sans état dans l'URL, aucune parution ne se partageait ni ne se mettait en favori,
et le bouton **retour** du navigateur quittait le site au lieu de refermer la
fiche. Les trois sont réglés.

La parution est désignée par son titre mis à plat, pas par son identifiant
MusicBrainz : une adresse se lit et se dicte. Les accents sont défaits avant
d'être jetés, les apostrophes typographiques disparaissent au lieu de devenir des
tirets, la ponctuation tombe — `Mention Me (From The Movie "GOAT")` donne
`mention-me-from-the-movie-goat`. Un titre entièrement non latin se réduirait à
rien : il reçoit alors une adresse de repli plutôt qu'une adresse vide. Aucune
collision sur les vingt-deux parutions actuelles.

Au démarrage, l'adresse a le dernier mot — mais **le splash garde la main** :
la destination est mise de côté et appliquée à l'entrée, sinon l'intro serait
écrasée avant d'avoir été vue.

## La liste appariée

Les guides d'interface sont d'accord sur un point : **un Cover Flow ne devrait pas
rester seul.** Il se double normalement d'une liste du même contenu, la liste
servant à naviguer pendant que le Cover Flow sert d'aperçu — surtout sur un écran
non tactile, où l'on n'a pas de doigt pour balayer.

Le site n'avait que le Cover Flow. La planche existait bien, mais c'est une **vue
séparée** : on la regarde *à la place*, pas *avec*. On parcourait donc à l'aveugle,
sans savoir ce qu'on survolait avant que la pochette n'arrive au centre, ni ce qui
venait dix rangs plus loin.

Le bouton `liste`, ou la touche `L`, ouvre un panneau à gauche : rang, titre,
année. Cliquer une ligne y mène ; la ligne courante suit le Cover Flow. **Le Cover
Flow n'est pas poussé de côté** — c'est le champ lui-même qui se raccourcit, et
comme tout s'y centre sur sa largeur, la pochette centrale se replace d'elle-même
sans une seule mesure à corriger ailleurs.

Deux choix qui méritent d'être dits :

- **le champ change de largeur en glissant**, et les pochettes prennent leur place
  au lieu de s'y téléporter. Une mesure unique donnerait un centrage faux — c'est
  le piège du vol FLIP — alors marges de bout et position de la pochette centrale
  sont recalculées **à chaque image** le temps du glissement, sur la largeur réelle
  du moment ;
- **la ligne courante n'est ramenée dans le cadre que si elle en est sortie.** La
  rappeler à chaque pas ferait sauter la liste sous le curseur de qui la parcourt
  à la main.

Le choix est retenu d'une visite à l'autre : c'est une façon de naviguer, pas un
coup d'œil. Sous 900 px de large, la liste disparaît — elle mangerait la pochette
qu'elle est censée servir.

## Le fond d'écran

Le tiroir d'options propose quatorze fonds, **rangés par famille de couleur**.

### Seulement dans l'appareil

Le fond tapissait d'abord la page entière quand on n'était pas dans le boîtier.
C'était une erreur d'échelle : ces images font 1200 px de large. Réduites dans
l'écran de l'appareil — 595 px — elles sont nettes ; étalées sur une fenêtre de
1700, elles sont **agrandies**, et le grain d'une photo compressée saute aux yeux.

Le fond ne s'affiche donc que dans l'appareil, où il est d'ailleurs à sa place :
c'est là qu'un fond d'écran a un sens. Le choix reste retenu et reparaît avec le
boîtier ; le tiroir le dit d'une ligne, pour qu'on ne cherche pas une panne.

### Le tiroir s'élargit et se replie

Quatorze vignettes ne se regardent pas dans 268 px : à trois par rangée, une photo
de ville n'est plus qu'une bande. Le tiroir passe donc à 372 px — il flotte
au-dessus de la page, sa largeur ne coûte rien à la barre — et les vignettes à
deux par rangée. Seule l'ouverture devait se voir : elle part du coin du bouton,
aux deux tiers de sa largeur, et se déploie vers la gauche et vers le bas.

La liste, elle, est **fermée au départ**. Quatorze fonds dépliés en permanence, et
la visite guidée ou les crédits passaient hors de portée sans défiler tout le lot.

Elle se déplie depuis une **ligne ordinaire du menu**, et non depuis un bandeau de
catégorie. Le bandeau était le mauvais objet : une catégorie annonce, elle ne se
replie pas, et il gardait sa hauteur et son filet quoi qu'il arrive — replié,
l'onglet laissait encore une barre. La ligne « fonds d'écran » a la hauteur de
« thème » ou de « son », porte comme elles le nom de ce qui est choisi, et ne
laisse rien paraître une fois refermée.
Le dépliement anime `grid-template-rows` de `0fr` à `1fr` : la seule façon de faire
glisser une hauteur qu'on ne connaît pas d'avance sans aller la mesurer en
JavaScript. Avec un piège, découvert replié : la rangée à `0fr` met la hauteur de
**contenu** à zéro, mais les 21 px de marge intérieure de l'enfant restent, et son
texte s'y voyait — l'onglet fermé débordait sur la section suivante. Le
`overflow:hidden` doit être sur le conteneur, pas seulement sur l'enfant.

### Le voile

C'est lui qui rend la chose tenable. Sans voile, un ciel de midi mange le texte,
une rue de nuit noie les panneaux, et le site change de lisibilité à chaque
image — l'utilisateur aurait le choix entre un fond et un site utilisable.

Un voile posé à la couleur du thème, à 76 % en clair et 74 % en sombre, ramène
toutes les images au même contraste. Le fond reste **un fond** : on le reconnaît,
il donne son climat à la page, et rien de ce qui se lit n'en dépend.

### Deux couches pour une image

Changer `background-image` remplace l'image d'un coup, et cette coupure se voit.
La couche en porte donc deux : celle du bloc et celle de son `::before`. On écrit
la nouvelle dans celle qui ne sert pas, puis on bascule — les deux fonds se
fondent l'un dans l'autre. Le voile, en `::after`, est peint après les deux et
les couvre donc l'une comme l'autre.

### Ranger par couleur

`tools/build-fonds.py` recense `assets/background/`, classe chaque image et en
tire la vignette du tiroir. Déposez une image, relancez : elle apparaît dans le
groupe de sa couleur, sans qu'une ligne soit à écrire.

```sh
cd site && python3 tools/build-fonds.py
python3 tools/build-fonds.py --dry    # dit ce qu'il ferait, n'écrit rien
```

La couleur n'est trouvée **ni par la moyenne des pixels** — la moyenne d'un ciel
orange et d'une ville bleue est un gris qui n'existe nulle part dans l'image —
**ni par la teinte moyenne en coordonnées polaires** : sur Tokyo au couchant, elle
mêle le rose du haut du ciel à l'orange de l'horizon et sort un rouge que l'œil ne
voit pas. Les deux ont été essayées ; les deux se trompaient.

On procède par **vote**. Chaque pixel dépose son poids dans le bac de sa teinte,
et ce poids vaut `saturation² × valeur` : une couleur franche pèse, un gris ne dit
rien, un noir non plus. Les bacs sont ensuite réunis par familles — rose, orange,
vert, turquoise, bleu, violet — et la plus lourde l'emporte. C'est ce qui range
Central Park au vert : son ciel bleu est le bac le plus lourd pris seul, mais les
deux bacs de vert réunis pèsent davantage.

Reste un bac « gris », pour une image qui n'a **aucune** couleur. Son seuil est
volontairement très bas, et aucune de ces quatorze images n'y tombe. J'ai essayé
de le monter pour y ranger le métro d'acier, que l'œil voit gris : toute valeur
qui l'y mettait y jetait d'abord les volutes lilas, qui ont pourtant une couleur.
La mesure avait raison contre l'impression — l'acier est chaud, sa bande de quai
est jaune, et l'image pèse plus en couleur que le lilas pâle. La règle est donc
restée simple.

### Les noms

Les fichiers arrivent nommés par empreinte — `a3d4f51698a2….jpg` — ce qui ne dit
rien dans un menu. L'outil nomme donc dans cet ordre : le nom déjà inscrit dans
`assets/fonds.js`, puis sa table `NOMS`, puis le nom du fichier à défaut.
Renommer un fond dans le manifeste est sans danger : une relance ne le défait pas.

### Ce que cela pèse

Les vignettes du tiroir font 360 × 225 — le double de leur taille d'affichage,
pour un écran à forte densité —, 169 ko pour les quatorze, et ne se chargent qu'à
l'ouverture du tiroir. Le fond en pleine taille n'est demandé que
lorsqu'on le choisit — et le choix est retenu d'une visite à l'autre.

## Les autocollants

On en pose sur le boîtier, on les glisse où l'on veut, ils restent d'une visite à
l'autre. Le dossier n'en contient qu'un, celui du dépôt : la **mascotte**, la même
que celle qui guide la visite. Neuf autres avaient été dessinés en SVG pour
l'occasion — cassette, cœur, disque, éclair, étoile, fleur, note, nuage, onde —
puis écartés au profit de celui-là. Ils dorment dans l'historique si l'un manque
un jour.

Il y en avait déjà eu, et ils avaient été retirés à raison : c'étaient des
ornements que j'avais dessinés *dans* le châssis, qui encombraient une surface
sans que personne les ait demandés. La différence tient en un mot : ici c'est
l'utilisateur qui pose, déplace et retire. Un autocollant qu'on choisit de coller
n'est pas la même chose qu'une décoration qu'on subit.

### Où ils peuvent aller

Le boîtier a peu de place libre : l'écran occupe le haut, la molette le milieu.
Restent la bande entre les deux, les côtés de la molette, et le bas.

Plutôt que d'interdire le reste, le glisser **repousse** — vers le bas pour
l'écran, **radialement** pour la molette, ce qui donne au geste l'impression de la
contourner. On ne peut donc pas mal poser un autocollant, et rien n'est jamais
à moitié caché derrière la molette.

Le pointeur se déplace en pixels d'écran quand le châssis se mesure en pixels
virtuels : le déplacement est divisé par le facteur d'échelle, sans quoi
l'autocollant fuirait sous le doigt d'autant que le boîtier est réduit.

### Ce qui en fait du collant et non de l'imprimé

Une **inclinaison** légère — quelques degrés, pris dans une liste et retenus avec
la place. Un angle tiré au sort changerait à chaque chargement, et l'objet ne
serait plus le même d'une visite à l'autre. C'est la seule rotation du site, et
elle est justifiée : la règle des angles nets vise les commandes de l'interface,
pas un morceau de papier collé de travers.

Une **ombre courte**, qui dit le millimètre d'épaisseur.

Et *pas* de reflet ajouté par-dessus. J'en avais mis un — un dégradé en
pseudo-élément — avant de voir qu'il couvre la **boîte** du bouton et non la
silhouette découpée : il laissait un voile blanc carré sur la coque. Chaque
autocollant porte sa brillance dessinée dans sa propre forme, seul endroit où
elle peut être juste.

### Poser, déplacer, retirer

Le tiroir d'options en propose la planche sous **autocollants**. Un clic en pose
un ; il arrive à une place libre, les places tournant en boucle pour que trois
posés d'affilée ne se recouvrent pas. On le glisse ensuite où l'on veut.

Un clic le sélectionne, un second le retire — une seule action destructrice au
premier clic serait un piège à la souris. Un bouton *tout retirer* vide la coque.

### Les vôtres

Déposez un fichier dans `assets/stickers/` et relancez :

```sh
cd site && python3 tools/build-stickers.py
```

SVG de préférence, ou PNG **à fond transparent** : un PNG à fond blanc se collera
avec son carré blanc, et l'outil ne peut pas le deviner. Le dossier porte un
`LISEZMOI.md` qui redit tout cela.

## L'écran de l'appareil

Emprunt à une direction artistique de jeu en pixels : de la 3D rendue en **basse
définition**, puis quantifiée et tramée. Rien d'autre n'en est repris — sa palette
saturée et ses décors n'auraient rien à faire ici.

Mais la basse définition, si. Un baladeur de cette époque avait un écran de
320 × 240, et les pochettes y tenaient à peine plus qu'une vignette. Les montrer
**comme l'appareil les aurait affichées** est du pixel art et d'époque à la fois :
c'est le seul point où les deux partis pris se rejoignent.

Le bouton `pixels`, ou la touche `P`, réduit chaque pochette à 96 px, ramène
chaque composante à dix niveaux, puis la remonte en plus proche voisin — sans quoi
le navigateur la lisserait et rendrait la réduction invisible.

**Les versions en pixels sont fabriquées d'avance.** Le navigateur faisait ce
travail à chaque visite et sous les yeux de qui regardait : télécharger le 500 px,
le peindre sur un canevas, le réduire, le tramer, vingt-deux fois. Elles sont
maintenant écrites une fois dans `assets/pix/` et recensées par `assets/pix.js` —
le site ne charge plus qu'une image prête, une dizaine de kilo-octets.

```bash
python3 tools/build-pix.py
```

**Ces mêmes fichiers servent d'aperçu hors du mode pixels.** Six kilo-octets et en
local : la pochette basse définition s'affiche avant même que l'archive n'ait
répondu, le navigateur la lisse — on la lit comme une image encore floue, ce qu'elle
est — et la vraie la remplace dès qu'elle arrive. Le préchargeur porte le même
`crossOrigin` que l'image visible, sans quoi la réponse serait mise en cache sous
une autre clé et la pochette retéléchargée pour rien.

L'outil saute ce qui est déjà là, donc on le relance sans crainte. La Cover Art
Archive répond par moments `500` : ce sont des défaillances passagères de son côté,
pas des pochettes absentes, d'où les reprises. Une parution qui manque au
manifeste — la sienne a résisté à cinq essais — **retombe sur la fabrication dans
le navigateur**, qui reste en place comme filet.

**Ce qui fait l'image, c'est le tramage.** Avant d'arrondir une composante, on lui
ajoute un seuil qui varie selon la position dans une matrice de Bayer 4 × 4 : deux
pixels voisins d'une même teinte s'arrondissent alors de part et d'autre, et leur
mélange rend la nuance que la palette ne contient pas.

Le nombre de niveaux a été réglé en comparant, pas au jugé :

| niveaux | ce que ça donne |
|---|---|
| 6 | le ciel vire au damier uniforme, l'image se délave |
| **10** | la trame se devine dans les aplats, les couleurs tiennent |
| 16 | indiscernable de la simple réduction — la quantification ne se lit plus |

Si l'archive ne renvoie pas l'en-tête qui autorise la lecture du canevas, la
pochette est laissée telle quelle plutôt que perdue. Le choix est retenu d'une
visite à l'autre.

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
- le **type de la parution** se tient debout contre les deux bords de la fenêtre ;
- la fiche annonce la **durée du disque**, `14 titres · 58 min`. Le total est tu
  si une seule piste n'est pas mesurée, plutôt que d'en annoncer un faux ;
- cliquer la pochette de la fiche l'**ouvre en grand** : la Cover Art Archive sert
  du 1200 là où le Cover Flow se contente du 500. Le petit reste affiché derrière
  tant que le grand n'est pas arrivé, pour que le cadre ne s'ouvre pas sur du vide ;
- la **numérotation en série** — `0.01`, `0.02`, `0.1`, `0.03` — se voit enfin dans
  la planche. C'est la colonne vertébrale de la discographie de wave to earth ;
  les artistes qui n'en ont pas n'ont rien de plus.

## Animations

Les pochettes des artistes non affichés sont tirées en arrière-plan dès que la
première série est en place, une par une : changer d'artiste devient instantané
au lieu d'attendre l'archive.

Apparition en cascade des pochettes · profondeur de champ (flou selon l'éloignement
du centre) · compteur à rouleaux, chiffre par chiffre · transition **FLIP** : la
pochette vole de sa place dans le Cover Flow jusqu'à la fiche · grain léger et léger
vignettage.

### La pile

Les fentes du rail sont posées en ligne, à 1,06 largeur de pochette l'une de
l'autre. Laissées là, les voisines **défilent en file** : elles s'écartaient de
0,84 largeur par rang alors qu'une pochette tournée à 58° n'en projette que 0,53 —
elles ne se recouvraient donc jamais. C'était un carrousel, pas un Cover Flow, dont
la signature est la **pile** sur les côtés.

La position visée **sature** : franche pour la première voisine, puis de plus en
plus serrée.

| rang | 0 | 1 | 2 | 3 | 4 | 6 |
|---|---|---|---|---|---|---|
| distance au centre | 0 | 0,83 | 1,05 | 1,19 | 1,32 | 1,58 |

À partir du troisième rang, les pochettes ne s'écartent plus que d'un huitième de
leur largeur : elles s'empilent. `translateX` ne porte que l'écart entre cette
position et celle où la mise en page les avait mises.

La profondeur et l'échelle saturent de même — sans quoi le fond de la pile
partirait à l'infini. Et il **s'assombrit**, comme une rangée de disques dans un
bac : c'est ce qui donne sa profondeur au tas, plus que l'échelle. La pile tenant
dans une largeur et demie, tout le catalogue peut y figurer ; on ne masque que la
queue lointaine, où plus rien ne se distingue.

Le vol FLIP se mesure sur la fiche **posée**, pas sur la fiche qui se pose : le temps
du vol, l'échelle d'entrée du panneau est neutralisée. Sans quoi la pochette viserait
une place que la fiche n'occupe pas encore, et sauterait de quelques pixels en
atterrissant — le vol tient lieu de transition.

Le fond coloré tiré des pochettes a été retiré : il contredisait le chrome argenté.
Toute l'extraction de couleur qui l'alimentait a disparu avec lui. Tout est neutralisé sous `prefers-reduced-motion`.

## Mouvement réduit

`prefers-reduced-motion` n'était honoré qu'à cinq endroits — le splash, la ligne
de métadonnées, la loupe, le vol FLIP, le défilement. Les deux systèmes les plus
remuants l'ignoraient : **l'hélice des photos** et sa boucle continue, et le
glissement du champ à l'ouverture de la liste. C'est précisément ce qu'un tel
réglage demande d'éteindre, et c'est nous qui l'avions ajouté.

Sous mouvement réduit, désormais : l'hélice va droit au but sans boucle, le **filé**
s'éteint, le **lancer** ne prolonge plus le geste — on se pose où l'on est — et le
suivi image par image du champ n'a plus lieu, la transition CSS y durant déjà une
milliseconde.

## Partager un lien

Les adresses par parution ont été faites pour qu'un disque se partage ; sans
`og:image`, le lien partagé n'affichait aucun aperçu.

```bash
python3 tools/build-card.py
```

La carte reprend la composition du splash — des pochettes qui se chevauchent sur le
fond clair — en puisant dans `assets/pix/` et en les remontant **en plus proche
voisin** : la marche d'escalier est gardée, l'aperçu ressemble donc au site plutôt
qu'à un montage étranger.

**Une réserve :** le fragment d'une adresse (`#/cortis/greengreen`) n'atteint jamais
le serveur. Une carte *par parution* demanderait un pré-rendu ; celle-ci vaut pour
tout le site.

## Dans l'appareil

Une option range le site dans l'**écran d'un baladeur dessiné** : corps métal,
écran cerclé, molette à quatre zones et bouton central. Rien n'y est emprunté —
ni marque, ni nom, ni silhouette relevée : c'est la ligne que le site tient déjà
pour son chrome.

**L'écran s'allège.** Un baladeur n'affiche pas une barre de commandes : dans ce
mode, la barre et le guide **sortent dans le châssis**, tandis que le compteur et
les flèches disparaissent — ils n'ont plus lieu d'être à côté d'une molette qui
fait le même travail. L'écran ne garde que le nom de l'artiste et la réglette de
position.

Ce sont les **mêmes nœuds, déplacés** — pas des copies. Tous leurs gestionnaires
suivent sans être recâblés, l'état des boutons reste celui qu'il était, et l'on
retient d'où ils viennent pour les y remettre à l'identique en quittant le mode.

**L'écran porte le fond de la page**, non celui du cadre : sans fond propre, il
aurait laissé voir le noir du bezel même en thème clair. Il n'est donc noir que si
le thème l'est.

**Le boîtier suit le thème** : argent en clair, noir en sombre. Le même objet dans
son autre finition — la structure du dégradé ne change pas, seules les quatre
teintes.

**La molette commande vraiment.** La faire tourner parcourt le catalogue : l'angle
est suivi en absolu, son écart cumulé, et un cran tombe tous les 22° — seize par
tour. Le passage par ±180° est ramené dans l'intervalle, sinon un demi-tour
compterait pour seize crans d'un coup. Les quatre zones font ce que font les
touches, à une nuance près : **tant qu'une piste joue, `◂◂` `▸▸` changent de
morceau** plutôt que de parcourir le catalogue — c'est ce que font ces deux touches
sur un baladeur. `▸❙❙` ouvre ou lance la première piste, le centre vaut `↵`.

**La molette, elle, ne commande jamais la lecture.** Elle parcourt, c'est son
office. Les deux passaient d'abord par la même fonction, si bien qu'elle héritait
du comportement des touches et sautait de morceau dès qu'une piste jouait.

Les mesures sont **virtuelles** — châssis 736 × 1220, écran 595 × 452 — et un seul
facteur met les deux à l'échelle **depuis le même coin haut-gauche**. L'écran tombe
donc au pixel près sur son cadre, sans centrage à refaire deux fois de son côté.

Les proportions sont **relevées**, non estimées : rapportées à la largeur du corps,
hauteur 1,658 ; écran 0,808 × 0,614 posé en 0,091 / 0,065 ; molette 0,596 de
diamètre à 0,829 du haut. Le premier jet était franchement faux — écran trop large,
molette bien trop petite, corps trop court.

La barre sortie occupe un **bandeau réservé** en haut, et non une barre posée
par-dessus : le boîtier se met à l'échelle dans ce qui reste, de sorte qu'aucun des
deux ne recouvre l'autre, à aucune taille de fenêtre.

Le **lecteur sort aussi** dans le châssis : il n'a pas sa place dans l'écran d'un
appareil qui a déjà ses commandes de lecture.

Le point qui rend tout le reste gratuit : donner une transformée à `#app` en fait
le **référent des positions fixes** qu'il contient. Le lecteur, la loupe, la visite
et les panneaux restent dans l'écran sans qu'aucun d'eux n'ait à savoir qu'il y est.

### La matière

Le boîtier a d'abord été **plat**, puis **dur**. Les deux fois pour la même raison :
j'ajoutais des effets — arêtes marquées, brossage, reflet en diagonale, dégradés
larges — là où il fallait en retirer.

Puis, en corrigeant la dureté, je l'ai rendu **plat une seconde fois** : trop
blanc, trop uniforme. Un aplat clair n'a pas plus de relief qu'un dégradé large.

Ce qui manquait n'était ni plus ni moins d'effet, mais **la bonne physique**.

**La courbe de valeurs remonte en bas.** C'est le point que j'avais raté deux fois.
Un objet courbe ne s'assombrit pas jusqu'au bord : la lumière rebondit du support et
rallume l'arête basse. Une valeur qui ne fait que descendre décrit un plan incliné,
pas un galet.

| haut | | creux | | arête basse |
|---|---|---|---|---|
| 246 | → | 208 | → | **226** |

**Le spéculaire est large et s'éteint en fondu.** Un reflet net ferait du verre ;
celui-ci déborde par le haut et se perd sur 72 % de la hauteur, ce qui fait du
plastique poli.

**Les creux portent une occlusion, pas une ombre.** Autour de la molette et du
cadre de l'écran, la lumière n'entre plus — l'assombrissement est diffus et sans
direction, ce qui est exactement la différence entre un creux et un objet posé.

**La molette est éclairée à l'envers du bouton.** Elle est enfoncée : sombre en
haut, où le bord porte son ombre dedans, claire en bas, où le fond la renvoie. Le
bouton central, bombé, fait l'inverse et pose son ombre au fond du creux. C'est le
seul indice qui distingue un creux d'une bosse.

**La température fait le métal.** Les hautes lumières sont presque neutres (4 points
d'écart bleu-rouge), les creux nettement plus froids (13). Un gris parfaitement
neutre lit comme du papier ; c'est ce petit décalage qui dit l'alliage.

La plage de valeurs revient à 15 % — entre les 22 % qui durcissaient et les 12 %
qui aplatissaient.

### Le thème sombre

Tout ce qui précède était écrit **en blanc dur**, et c'était un défaut de méthode :
un même blanc n'ajoute pas la même chose selon le fond.

| | sur corps clair | sur corps sombre |
|---|---|---|
| spéculaire à 92 % | +44 de luminance | **+202** |
| dôme du bouton à 90 % | +43 | **+197** |

D'où une plaque grise en travers du boîtier et un bouton changé en bille brillante.
Les hautes lumières sont désormais des **variables**, réglées pour ajouter *autant
en absolu* dans les deux thèmes — +40, +27, +44, +21 en sombre contre +44, +28,
+43, +20 en clair.

Même correction pour la reprise de lumière sur l'arête basse : elle valait +9 % du
creux en clair mais **+45 %** en sombre, où elle coupait le boîtier en deux. Elle
est ramenée à +13 %.

Le reflet de la vitre, lui, reste en blanc fixe : un reflet sur du verre est clair
quel que soit ce qu'il y a derrière.

**Rien de tout cela n'est repris d'un dessin existant** : ce sont des règles
d'éclairage, pas une silhouette. Le boîtier reste générique, comme tout ce que le
site redessine.

### Y mettre le vôtre

Le châssis dessiné n'est qu'un défaut. Déposez le vôtre dans
**`assets/appareil/`**, nommé `appareil.png`, et il prend sa place —
`appareil-sombre.png` sert au thème sombre s'il existe. Le dossier porte un
`LISEZMOI.txt` avec le gabarit complet.

Le corps est au rapport **736 × 1220**, et trois zones doivent tomber juste parce
que le site s'y branche :

| | position | taille |
|---|---|---|
| écran | 9,10 % / 3,93 % | 80,84 % × 37,05 % |
| molette | 20,18 % / 50,00 % | 59,65 % de la largeur |
| bouton | même centre | 22,28 % de la largeur |

**L'écran doit rester vide** — le site s'y affiche par-dessus. La molette, le
bouton et les quatre repères, en revanche, sont à dessiner : quand une image est
présente, le site efface les siens et ne garde que les **zones sensibles**,
invisibles et à leur place. La molette tourne donc toujours.

Le fichier n'est cherché qu'à l'entrée dans le mode, jamais au chargement de la
page. S'il manque, le châssis dessiné reste : il n'y a pas d'état cassé.

### Les repères de la molette

Ils sont **dessinés**, non écrits — trois formes SVG pour ◀◀, ▶▶ et ▶❚❚. Le motif
n'est pas esthétique : tourner la molette est un **glisser**, et un glisser de
pointeur est par défaut un glisser de *sélection*. Il surlignait donc les repères
à chaque tour de molette.

Trois choses le règlent, et il fallait les trois :

1. des **formes** plutôt que des caractères : il n'y a plus de texte à
   sélectionner à l'endroit exact où l'on glisse ;
2. `user-select:none` sur tout le boîtier, qui couvre le reste — dont les quatre
   lettres de « menu », restées du texte parce que quatre lettres en courbes de
   Bézier ne valent pas leur poids ;
3. `preventDefault()` au `pointerdown` de la molette. C'est le fond du problème :
   la molette prend le geste à son compte, elle doit donc en refuser l'usage
   prévu, sans quoi le navigateur continue de sélectionner ce qu'il trouve
   derrière.

Une forme a en prime une **taille connue**, là où un caractère dépendait de la
fonte. Les quatre repères tombent donc au milieu exact de l'anneau : 439 de
diamètre, 164 pour le bouton central, il reste 137,5 de bande, dont le milieu est
à 68,75. Les repères font 22 de haut et 40 de large — d'où les 58 px et les 49 px
de la feuille.

### La vitre

Une **trame de points**, qui dit que c'est une dalle et non une fenêtre, et un
**reflet** en diagonale, qui dit qu'il y a un verre. Le parti pris est marqué :
c'est une **option**, éteinte par défaut, dans le tiroir.

Elle vit hors du châssis parce qu'elle doit passer **au-dessus** du site, quand le
châssis passe dessous — elle est calée sur le même rectangle et au même facteur que
l'écran.

Le boîtier porte le second `border-radius` de la feuille — avec le microsillon. Un
boîtier n'a pas d'angles vifs, et la règle des angles nets vise les commandes de
l'interface, pas l'objet qui les contient.

### Les mesures suivent l'écran

Le site exprime ses tailles en unités de fenêtre — `vw`, `vh`. Or **ces unités se
réfèrent toujours à la vraie fenêtre**, même à l'intérieur d'un conteneur mis à
l'échelle. La fiche se croyait donc sur 1710 px : elle demandait 872 px de large
dans un écran de 595, avec 134 px de marge en haut et autant en bas sur 452 de
haut. Il ne restait que 183 px utiles.

Tout ce qui dépendait de la fenêtre est redit en pixels pour ce mode — marges,
colonnes, nom en grand, grille de la planche, chevrons des images. On passe à
551 px de contenu et 420 px utiles. Les requêtes de média, aveugles de la même
façon, sont surpassées par la **spécificité** plutôt que par l'ordre.

**La pochette, elle, garde sa taille.** Seule la fiche avait besoin d'être
resserrée ; tout rétrécir avait réduit le sujet avec le décor. Elle est fixée en
pixels plutôt qu'en `24vw`, mesure qui la faisait varier selon la taille du
navigateur — dans un écran qui, lui, ne change pas.

### La fiche tient dans l'écran

Redire les mesures en pixels ne suffisait pas. Additionnées, elles demandaient
encore près de **660 px** de haut dans les 420 disponibles : le numéro, la
cartouche, cinq lignes de renseignements l'une sous l'autre, puis **une piste par
ligne**. La fiche ne débordait plus par la largeur, elle débordait par le bas — et
un album de vingt titres n'aurait de toute façon jamais tenu, si petite qu'en soit
la typographie.

Deux moyens, donc, plutôt qu'un rabotage :

1. **appairer ce qui va par deux.** Les renseignements passent sur deux colonnes,
   séparés d'un filet ; les titres aussi, dès 150 px de large. La hauteur de ces
   deux blocs est divisée par deux **sans rien retrancher** — c'est la mise en
   page qui cède, pas le contenu ;
2. **donner le défilement à la seule liste.** La cartouche devient une colonne
   flexible : l'en-tête, les renseignements et le lien de source gardent leur
   hauteur (`flex:none`), et seuls les titres glissent. La fiche ne dépasse donc
   jamais, quel que soit le disque, et la sortie reste sous les yeux au lieu de
   fuir vers le bas.

Le second point demande `min-height:0` à **chaque** étage — colonne de texte,
cartouche, liste. Sans quoi un enfant flexible refuse de se laisser comprimer en
deçà de son contenu, et le débordement ressort un cran plus haut.

Un disque de douze titres occupe désormais 376 px des 420 : il tient tout entier,
sans défilement.

### La coque est grise, pas blanche

L'appareil ne se détachait pas du fond. J'ai d'abord accusé le sol et l'ai
assombri : c'était traiter le symptôme, et cela salissait la page pour rattraper
autre chose. Le défaut était **dans la coque**, qui montait à `#F4F6F8` — du
blanc, alors que l'objet dont elle s'inspire est en plastique gris clair et mat.

La voici vingt-cinq points plus bas, entre 195 et 216 de luminance, sur une plage
resserrée de vingt et un points : un gris quasi uniforme que la lumière module à
peine. Le sol peut alors redevenir ce qu'il doit être — presque blanc, 233 à 246 —
et l'écart entre les deux passe à une trentaine de points. L'objet se pose sur du
papier, il n'y disparaît plus.

**Le mat suit le gris.** Sur un blanc, il fallait beaucoup de blanc pour qu'un
reflet se voie : le spéculaire était à 92 %. Sur ce gris, la même quantité ferait
une plaque. Un plastique mat ne renvoie pas l'image de la source, seulement sa
direction — 30 % suffisent, soit douze points de luminance ajoutés au lieu de
quarante-quatre.

Le thème sombre suit la même règle qu'avant : on égalise ce que la lumière
**ajoute en absolu**, pas le pourcentage de blanc. Là où le clair ajoute +12 sur
un corps à 214, il faut 7 % de blanc pour ajouter les mêmes +12 sur un corps à 76.
Les deux thèmes restent faits de la même matière.

### La rive de l'écran

Un baladeur de cette époque avait une large bordure noire autour de la dalle — la
vitre couvrait bien plus que l'image. À 5 px la nôtre passait pour un liseré de
cadre ; elle est à **16**, et franchement noire. Le filet blanc qu'on avait posé
autour est retiré : sur la référence, le noir touche le gris sans transition, et
ce filet dessinait un cadre là où il n'y en a pas.

Elle mord sur la coque et jamais sur l'écran : l'image garde ses 595 × 452, et le
site qui s'y loge n'a rien à recalculer.

L'occasion a servi à corriger un défaut plus ancien : l'écran était posé 7 px à
gauche du centre — 67 px de marge à gauche, 74 à droite. Le voilà à 70,5 des deux
côtés. C'est le genre de décalage qui ne se voit pas tant que rien ne le souligne,
et qu'une rive épaisse aurait souligné.

### Le passage d'un mode à l'autre

Un basculement instantané ne dit rien de ce qui se passe. La caméra **s'approche**
de l'écran jusqu'à ce qu'il occupe toute la page, ou **s'en éloigne** jusqu'à
découvrir le boîtier.

C'est le vol FLIP appliqué à la page entière : on mesure l'écran **avant**, on
bascule — la mise en page change d'un coup —, on le mesure **après**, et l'on
repart visuellement de la première position pour rejoindre la seconde. Rien n'est
interpolé en mise en page, donc rien ne se recalcule à chaque image.

Le châssis subit le mouvement **exactement inverse** : si l'écran grandit d'un
facteur k, il s'écarte de 1/k. Les deux restent solidaires — on ne voit pas un
cadre qui se déforme, mais une caméra qui avance. L'inverse est composé à la main,
`scale(1/k)` puis la translation opposée, et vérifié : appliqué à la transformation
d'aller, il rend l'identité.

Sous mouvement réduit, le passage reste instantané.

### Remonter jusqu'aux artistes

`menu` remonte d'un cran : d'une fiche au parcours, du parcours à un **menu des
artistes**. Le Cover Flow y est **déchargé** — c'est le propre d'un menu que de
remplacer ce qu'il surmonte, non de flotter par-dessus. L'écran ne montre plus
qu'une liste, la ligne courante vernie, un chevron pour dire qu'on descendra.

La molette y déplace la sélection au lieu de parcourir : le même geste, appliqué à
ce que l'écran montre. Le centre choisit et redescend.

## La visite guidée

Le site a beaucoup de choses qui ne se devinent pas : les touches `L`, `P`, `G`, le
tiroir d'options, les titres qui se jouent d'un clic. Huit étapes, chacune
**désignant** une commande réelle — cerclée à l'écran — plutôt que de la décrire de
loin. Elle s'ouvre d'elle-même à la première venue et se retrouve dans le tiroir.

Les étapes ne changent jamais l'état du site : elles montrent, elles ne font pas à
la place. Une étape qui ouvrirait la planche pour l'expliquer laisserait le
visiteur ailleurs qu'il ne croyait.

**Une exception, et une seule :** les deux dernières étapes ouvrent le tiroir
d'options, et celle du fond d'écran déplie son onglet. Montrer du doigt une
commande que rien ne rend visible ne montre rien. Le tiroir se referme aux autres
étapes et à la sortie ; l'état du site, lui, n'est toujours pas touché.

### La mascotte

Elle est **dessinée ici, en SVG**, et n'emprunte à aucune figure existante — pas
plus que le reste du site ne reproduit de marque ou de ressource de constructeur.
Ce qui est repris, ce sont des dispositifs, pas un personnage :

- la **construction du verni** de l'époque — dégradé vertical, cassure nette à
  mi-hauteur, brillance haute, filet sombre ;
- le **partage en deux tons**, une diagonale qui coupe la figure ;
- un **visage minimal**, deux points et un sourire.

Le partage se fait entre **deux tons du même verni**, non entre deux couleurs, et
la diagonale passe à droite du visage plutôt qu'entre les yeux. Avec cette palette,
une coupure au milieu aurait mis un œil sur un fond presque noir, où il aurait
disparu ; ici le visage reste du côté clair et se lit toujours.

### Y mettre la vôtre

La figure dessinée n'est qu'un défaut. Déposez la vôtre dans **`assets/mascotte/`**,
nommée `mascotte.png`, et elle prend sa place sans rien d'autre à faire. Le dossier
porte un `LISEZMOI.txt` qui redit tout ça sur place.

```
assets/mascotte/mascotte.png
```

Pour un autre nom ou un autre format — `.webp`, `.gif` animé, `.svg` —, changez la
constante `MASCOTTE` en tête de la section. Videz-la pour revenir à la figure
dessinée.

Le fichier n'est cherché **qu'à l'ouverture de la visite**, jamais au chargement de
la page : rien n'est demandé pour rien à qui ne la lance pas. S'il manque, la figure
dessinée reste — il n'y a donc pas d'état cassé.

Elle est posée dans une boîte de 66 × 82 points, **ajustée sans être déformée** quel
que soit son format, alignée sur le bas. L'ombre portée et le balancement lent
viennent de la feuille de style : votre image n'a pas à les porter.

Elle est en **graphite et non en bleu**. Le verni du site est monochrome par
choix — « la structure fait l'effet, pas la teinte » — et une mascotte Aqua serait
la seule chose colorée de la page, à démentir la règle. Pour l'essayer en bleu, il
suffit de donner d'autres teintes aux quatre arrêts `.g1` à `.g4`.

Ces teintes sont d'ailleurs posées **par la feuille de style et non en attribut** :
`var()` dans un attribut de présentation SVG n'est pas résolu partout, et la
mascotte serait sortie noire. Elle suit donc le thème comme le reste.

## À propos, dans le site

Le site se sert de quatre sources — MusicBrainz, la Cover Art Archive, les chaînes
officielles sur YouTube, kpopping — et n'en créditait aucune dans son interface. Vu
qu'il montre des visuels qui ne lui appartiennent pas et fait entrer un tiers dans
la page, le dire relève moins de l'agrément que de la correction.

Le panneau, ouvert depuis le tiroir d'options, porte les sources, la position sur
les droits, et la réserve sur YouTube.

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
