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
- le splash compte les pochettes sur un **petit afficheur** plutôt que sur une barre
  muette. La grille sombre par-dessus donne le point de la matrice — sans elle,
  c'est du texte ambre sur du noir, pas un afficheur ;
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
touches : `menu` revient, `◂◂` `▸▸` parcourent, `▸❙❙` ouvre ou lance la première
piste, le centre vaut `↵`.

Les mesures sont **virtuelles** — châssis 736 × 916, écran 680 × 510 — et un seul
facteur met les deux à l'échelle **depuis le même coin haut-gauche**. L'écran tombe
donc au pixel près sur son cadre, sans centrage à refaire deux fois de son côté.

Le point qui rend tout le reste gratuit : donner une transformée à `#app` en fait
le **référent des positions fixes** qu'il contient. Le lecteur, la loupe, la visite
et les panneaux restent dans l'écran sans qu'aucun d'eux n'ait à savoir qu'il y est.

Le boîtier porte le second `border-radius` de la feuille — avec le microsillon. Un
boîtier n'a pas d'angles vifs, et la règle des angles nets vise les commandes de
l'interface, pas l'objet qui les contient.

## La visite guidée

Le site a beaucoup de choses qui ne se devinent pas : les touches `L`, `P`, `G`, le
tiroir d'options, les titres qui se jouent d'un clic. Six étapes, chacune
**désignant** une commande réelle — cerclée à l'écran — plutôt que de la décrire de
loin. Elle s'ouvre d'elle-même à la première venue et se retrouve dans le tiroir.

Les étapes ne changent jamais l'état du site : elles montrent, elles ne font pas à
la place. Une étape qui ouvrirait la planche pour l'expliquer laisserait le
visiteur ailleurs qu'il ne croyait.

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
