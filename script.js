(function(){
'use strict';

/* ═══ les artistes — données : MusicBrainz ═══ */
var ARTISTS=[
 {id:'89e95aa3-bd49-4af3-9c87-0d88b2093bb0', name:'wave to earth', place:'Séoul', since:2019,
  slug:'wave-to-earth', photos:[],
  rel:[
  {id:'5ac8ad8b-81b1-4ae8-8578-c3a820d20a06', t:"wave", kind:'Single', date:'23 août 2019', y:2019, v:'', label:'',
   k:'#5B7FA6', art:'wave', tone:'d', cover:'',
   note:"La toute première parution, un single sorti quelques mois après la formation du trio à Séoul."},
  {id:'4cafc097-ac47-40d7-be73-3f32703c76ea', t:"light", kind:'Single', date:'18 novembre 2019', y:2019, v:'', label:'',
   k:'#C8A45C', art:'ring', tone:'l', cover:'',
   note:"Deuxième single, encore en autoédition, avant le lancement de la série numérotée."},
  {id:'ee9f6a88-da7a-4274-8d18-436de7cfdf7c', t:"wave 0.01", kind:'EP', date:'2 janvier 2020', y:2020, v:'0.01', label:'we are not 0.00',
   k:'#8E9E8A', art:'split', tone:'d', cover:'',
   note:"Le premier EP, et le début de la numérotation qui structure toute la discographie : 0.01."},
  {id:'b6d35085-f8b8-4d35-93ab-59d0b089a8a3', t:"surf.", kind:'Single', date:'13 juillet 2020', y:2020, v:'', label:'',
   k:'#9A8FA6', art:'grid', tone:'l', cover:'',
   note:"Premier single de 2020, entre les deux EP de la série."},
  {id:'22a3bb68-c023-41a9-9a54-c70e2aee5a73', t:"summer flows 0.02", kind:'EP', date:'4 août 2020', y:2020, v:'0.02', label:'we are not 0.00',
   k:'#B87A5E', art:'arc', tone:'d', cover:'',
   note:"Deuxième palier de la série, sorti en plein été. Le groupe est encore autoédité."},
  {id:'4c859e03-3e52-408a-88d8-ca923abfe9b5', t:"pueblo", kind:'Single', date:'3 décembre 2020', y:2020, v:'', label:'',
   k:'#6F8AA0', art:'bar', tone:'l', cover:'',
   note:"Dernier single de 2020."},
  {id:'a11dd070-2e60-4ce9-9c28-6552f1df421e', t:"daisy.", kind:'Single', date:'13 mai 2021', y:2021, v:'', label:'',
   k:'#A98F6B', art:'wave', tone:'d', cover:'',
   note:"Single de 2021, l'année du passage chez WAVY."},
  {id:'e98bd54c-dc70-4d6e-91f4-cd0f54310a0d', t:"nouvelle vague", kind:'Single', date:'24 novembre 2021', y:2021, v:'', label:'',
   k:'#7E8E9E', art:'ring', tone:'l', cover:'',
   note:"Single de fin 2021, au titre emprunté au cinéma français."},
  {id:'20e58602-eead-4c2e-8a74-83a2e0fa2cb2', t:"To us", kind:'Single', date:'28 mai 2022', y:2022, v:'', label:'',
   k:'#B4907A', art:'split', tone:'d', cover:'',
   note:"Single de mai 2022."},
  {id:'0f1a888a-9435-4c5e-9ff9-b3dc76c98e0d', t:"calla", kind:'Single', date:'8 juin 2022', y:2022, v:'', label:'',
   k:'#8FA096', art:'grid', tone:'l', cover:'',
   note:"Single de juin 2022."},
  {id:'089cc424-7421-43d5-b4f1-8d9def8a0e9a', t:"dried flower", kind:'Single', date:'11 octobre 2022', y:2022, v:'', label:'',
   k:'#A08596', art:'arc', tone:'d', cover:'',
   note:"Dernier single avant le premier album."},
  {id:'adc2c452-fc5c-47e4-b0d3-ddc790a5f9ee', t:"0.1 flaws and all.", kind:'Album', date:'20 avril 2023', y:2023, v:'0.1', label:'WAVY',
   k:'#7C93A8', art:'bar', tone:'l', cover:'',
   note:"Le premier album. Le saut de 0.02 à 0.1 marque le changement d'échelle : premier long format, premier vrai label."},
  {id:'bbebfc62-f199-4355-9669-143de039065d', t:"play with earth! 0.03", kind:'Album', date:'6 septembre 2024', y:2024, v:'0.03', label:'WAVY',
   k:'#C0A070', art:'wave', tone:'d', cover:'',
   note:"La série des EP reprend là où elle s'était arrêtée quatre ans plus tôt — mais en format long cette fois."},
  {id:'b86eae70-2155-45aa-b8bd-f0be9fe1c843', t:"heaven and hell", kind:'Single', date:'15 mai 2026', y:2026, v:'', label:'',
   k:'#8A93A6', art:'ring', tone:'l', cover:'',
   note:"Premier single de 2026, annonçant le disque suivant."},
  {id:'84243947-bc02-409b-a5b5-5109d2318876', t:"bad pieces", kind:'Album', date:'7 août 2026', y:2026, v:'', label:'',
   k:'#9E8878', art:'split', tone:'d', cover:'',
   note:"La parution la plus récente, sortie en août 2026."}
]},
 {id:'d27808c8-d3a6-4bbe-acc2-22d5e19f3bca', name:'CORTIS', place:'Séoul', since:2025,
  slug:'cortis',
  /* Les photos se rangent en **séries** : un artiste peut en avoir plusieurs,
     chacune tournée pour une parution. Une simple liste d'adresses reste
     acceptée et vaut série unique.
       t  le nom montré dans le sélecteur
       d  la mention qui l'accompagne
       p  les fichiers, dans assets/photos/<artiste>/<série>/ */
  photos:[
   {t:'COLOR OUTSIDE THE LINES', d:'concept · septembre 2025', p:['assets/photos/cortis/color-outside-the-lines/01.jpg','assets/photos/cortis/color-outside-the-lines/02.jpg','assets/photos/cortis/color-outside-the-lines/03.jpg','assets/photos/cortis/color-outside-the-lines/04.jpg','assets/photos/cortis/color-outside-the-lines/05.jpg','assets/photos/cortis/color-outside-the-lines/06.jpg','assets/photos/cortis/color-outside-the-lines/07.jpg','assets/photos/cortis/color-outside-the-lines/08.jpg','assets/photos/cortis/color-outside-the-lines/09.jpg','assets/photos/cortis/color-outside-the-lines/10.jpg','assets/photos/cortis/color-outside-the-lines/11.jpg','assets/photos/cortis/color-outside-the-lines/12.jpg','assets/photos/cortis/color-outside-the-lines/13.jpg','assets/photos/cortis/color-outside-the-lines/14.jpg','assets/photos/cortis/color-outside-the-lines/15.jpg','assets/photos/cortis/color-outside-the-lines/16.jpg','assets/photos/cortis/color-outside-the-lines/17.jpg','assets/photos/cortis/color-outside-the-lines/18.jpg','assets/photos/cortis/color-outside-the-lines/19.jpg','assets/photos/cortis/color-outside-the-lines/20.jpg','assets/photos/cortis/color-outside-the-lines/21.jpg','assets/photos/cortis/color-outside-the-lines/22.jpg','assets/photos/cortis/color-outside-the-lines/23.jpg','assets/photos/cortis/color-outside-the-lines/24.jpg','assets/photos/cortis/color-outside-the-lines/25.jpg','assets/photos/cortis/color-outside-the-lines/26.jpg','assets/photos/cortis/color-outside-the-lines/27.jpg','assets/photos/cortis/color-outside-the-lines/28.jpg','assets/photos/cortis/color-outside-the-lines/29.jpg','assets/photos/cortis/color-outside-the-lines/30.jpg','assets/photos/cortis/color-outside-the-lines/31.jpg','assets/photos/cortis/color-outside-the-lines/32.jpg','assets/photos/cortis/color-outside-the-lines/33.jpg','assets/photos/cortis/color-outside-the-lines/34.jpg','assets/photos/cortis/color-outside-the-lines/35.jpg','assets/photos/cortis/color-outside-the-lines/36.jpg','assets/photos/cortis/color-outside-the-lines/37.jpg','assets/photos/cortis/color-outside-the-lines/38.jpg','assets/photos/cortis/color-outside-the-lines/39.jpg','assets/photos/cortis/color-outside-the-lines/40.jpg','assets/photos/cortis/color-outside-the-lines/41.jpg','assets/photos/cortis/color-outside-the-lines/42.jpg','assets/photos/cortis/color-outside-the-lines/43.jpg','assets/photos/cortis/color-outside-the-lines/44.jpg','assets/photos/cortis/color-outside-the-lines/45.jpg','assets/photos/cortis/color-outside-the-lines/46.jpg','assets/photos/cortis/color-outside-the-lines/47.jpg','assets/photos/cortis/color-outside-the-lines/48.jpg']},
   {t:'GREENGREEN', d:'teasers', p:['assets/photos/cortis/greengreen/01.jpg','assets/photos/cortis/greengreen/02.jpg','assets/photos/cortis/greengreen/03.jpg','assets/photos/cortis/greengreen/04.jpg','assets/photos/cortis/greengreen/05.jpg','assets/photos/cortis/greengreen/06.jpg','assets/photos/cortis/greengreen/07.jpg','assets/photos/cortis/greengreen/08.jpg','assets/photos/cortis/greengreen/09.jpg','assets/photos/cortis/greengreen/10.jpg','assets/photos/cortis/greengreen/11.jpg','assets/photos/cortis/greengreen/12.jpg','assets/photos/cortis/greengreen/13.jpg','assets/photos/cortis/greengreen/14.jpg','assets/photos/cortis/greengreen/15.jpg','assets/photos/cortis/greengreen/16.jpg','assets/photos/cortis/greengreen/17.jpg','assets/photos/cortis/greengreen/18.jpg','assets/photos/cortis/greengreen/19.jpg','assets/photos/cortis/greengreen/20.jpg','assets/photos/cortis/greengreen/21.jpg','assets/photos/cortis/greengreen/22.jpg','assets/photos/cortis/greengreen/23.jpg','assets/photos/cortis/greengreen/24.jpg','assets/photos/cortis/greengreen/25.jpg','assets/photos/cortis/greengreen/26.jpg','assets/photos/cortis/greengreen/27.jpg','assets/photos/cortis/greengreen/28.jpg','assets/photos/cortis/greengreen/29.jpg','assets/photos/cortis/greengreen/30.jpg','assets/photos/cortis/greengreen/31.jpg','assets/photos/cortis/greengreen/32.jpg','assets/photos/cortis/greengreen/33.jpg','assets/photos/cortis/greengreen/34.jpg','assets/photos/cortis/greengreen/35.jpg','assets/photos/cortis/greengreen/36.jpg','assets/photos/cortis/greengreen/37.jpg','assets/photos/cortis/greengreen/38.jpg','assets/photos/cortis/greengreen/39.jpg','assets/photos/cortis/greengreen/40.jpg','assets/photos/cortis/greengreen/41.jpg','assets/photos/cortis/greengreen/42.jpg','assets/photos/cortis/greengreen/43.jpg','assets/photos/cortis/greengreen/44.jpg','assets/photos/cortis/greengreen/45.jpg','assets/photos/cortis/greengreen/46.jpg','assets/photos/cortis/greengreen/47.jpg','assets/photos/cortis/greengreen/48.jpg','assets/photos/cortis/greengreen/49.jpg','assets/photos/cortis/greengreen/50.jpg','assets/photos/cortis/greengreen/51.jpg','assets/photos/cortis/greengreen/52.jpg','assets/photos/cortis/greengreen/53.jpg','assets/photos/cortis/greengreen/54.jpg','assets/photos/cortis/greengreen/55.jpg','assets/photos/cortis/greengreen/56.jpg','assets/photos/cortis/greengreen/57.jpg','assets/photos/cortis/greengreen/58.jpg','assets/photos/cortis/greengreen/59.jpg','assets/photos/cortis/greengreen/60.jpg','assets/photos/cortis/greengreen/61.jpg','assets/photos/cortis/greengreen/62.jpg','assets/photos/cortis/greengreen/63.jpg','assets/photos/cortis/greengreen/64.jpg','assets/photos/cortis/greengreen/65.jpg','assets/photos/cortis/greengreen/66.jpg','assets/photos/cortis/greengreen/67.jpg','assets/photos/cortis/greengreen/68.jpg','assets/photos/cortis/greengreen/69.jpg','assets/photos/cortis/greengreen/70.jpg','assets/photos/cortis/greengreen/71.jpg','assets/photos/cortis/greengreen/72.jpg','assets/photos/cortis/greengreen/73.jpg']}
  ],
  rel:[
  {id:'4a297ef7-7782-4c18-8d48-dcf58fc5e953', t:"What You Want", kind:'Single', date:'18 août 2025', y:2025, v:'', label:'',
   cover:'', note:"Le premier single du groupe, paru en août 2025."},
  {id:'a8335751-288f-4d70-910b-6a73c3c5d5a2', t:"COLOR OUTSIDE THE LINES", kind:'EP', date:'8 septembre 2025', y:2025, v:'', label:'',
   cover:'', note:"Le premier EP, trois semaines après le single de lancement."},
  {id:'5087f7e8-c358-4297-859a-3db879bc3884', t:"Mention Me (From The Movie \"GOAT\")", kind:'Single', date:'13 février 2026', y:2026, v:'', label:'',
   cover:'', note:"Single tiré de la bande originale du film GOAT."},
  {id:'e8c1f96e-460e-4530-9e54-2b3a57aac365', t:"REDRED", kind:'Single', date:'20 avril 2026', y:2026, v:'', label:'',
   cover:'', note:"Single paru deux semaines avant l'EP GREENGREEN."},
  {id:'24470887-d9fe-4a32-b17e-939f413972c9', t:"GREENGREEN", kind:'EP', date:'4 mai 2026', y:2026, v:'', label:'',
   cover:'', note:"Le deuxième EP."},
  {id:'efa67a19-4089-479f-a446-89ef77353806', t:"MOTION", kind:'Single', date:'31 juillet 2026', y:2026, v:'', label:'',
   cover:'', note:"Single de juillet 2026."},
  {id:'24470887-d9fe-4a32-b17e-939f413972c9', rid:'d461e691-e5c5-49a7-a69b-f82ae2e8895e',
   t:"GREENGREEN_playextended", kind:'EP', date:'23 août 2026', y:2026, v:'', label:'',
   cover:'', note:"L'édition étendue de GREENGREEN. Elle n'existe pas comme parution distincte dans MusicBrainz, seulement comme édition à l'intérieur de celle de mai."}
]}
];
var A=0, REL=ARTISTS[0].rel;

/* ═══ pochettes : Cover Art Archive (MusicBrainz), repli sur le titre ═══ */
var CAA=function(id){return 'https://coverartarchive.org/release-group/'+id+'/front-500';};
/* L'archive sert aussi du 1200 : de quoi ouvrir la pochette en grand sans
   alourdir le Cover Flow, qui n'a besoin que du 500. */
var CAA_BIG=function(id){return 'https://coverartarchive.org/release-group/'+id+'/front-1200';};
var CAAR_BIG=function(id){return 'https://coverartarchive.org/release/'+id+'/front-1200';};
function bigOf(r){return r.cover||(r.rid?CAAR_BIG(r.rid):CAA_BIG(r.id));}
/* Certaines éditions n'existent qu'au niveau « release » et non « release-group » :
   leur pochette et leur fiche se trouvent alors sur un autre chemin. */
var CAAR=function(id){return 'https://coverartarchive.org/release/'+id+'/front-500';};
/* ─────────── les titres du disque, et de quoi les écouter ───────────
   La donnée vient du même endroit que tout le reste — MusicBrainz — mais d'un
   autre niveau : les pistes vivent sur l'*édition*, pas sur le release-group.
   Quand `rid` est renseigné on interroge l'édition ; sinon la première édition
   du groupe.

   MusicBrainz limite à **une requête par seconde** et répond 503 au-delà. Les
   appels passent donc en file, espacés, et un 503 renvoie la demande en fin de
   file au lieu de conclure « pas de titres ». Sans cette reprise, parcourir les
   fiches aux flèches vidait la liste de parutions qui en ont pourtant une — et
   l'échec restait en cache pour toute la session. */
var TRK={},TRKQ={},mbQ=[],mbBusy=false,mbLast=0,MB_GAP=1150;

function mbGo(){
  if(mbBusy||!mbQ.length)return;
  mbBusy=true;
  setTimeout(function(){
    var job=mbQ.shift();mbLast=Date.now();
    fetch(job.u,{headers:{Accept:'application/json'}})
      .then(function(x){
        if(x.status===503||x.status===429)return Promise.reject('busy');
        return x.ok?x.json():Promise.reject(x.status);
      })
      .then(function(d){mbBusy=false;job.ok(d);mbGo();})
      .catch(function(e){
        mbBusy=false;
        if(e==='busy'&&job.n<3){
          job.n++;
          /* On recule l'horloge : la prochaine attente s'allonge d'autant. */
          mbLast=Date.now()+900*job.n;
          mbQ.push(job);
        }else job.ko();
        mbGo();
      });
  },Math.max(0,MB_GAP-(Date.now()-mbLast)));
}
function mbFetch(u,ok,ko){mbQ.push({u:u,ok:ok,ko:ko,n:0});mbGo();}

/* Spotify d'abord : c'est le seul lien qui ouvre la piste exacte plutôt que la
   page de l'album. Sinon la première écoute gratuite, sinon n'importe laquelle. */
function pickUrl(rels){
  var free=null,any=null;
  for(var i=0;i<(rels||[]).length;i++){
    var t=rels[i].type||'',u=(rels[i].url||{}).resource||'';
    if(!u)continue;
    if(u.indexOf('open.spotify.com')>=0)return u;
    if(t.indexOf('free streaming')>=0&&!free)free=u;
    if(!any)any=u;
  }
  return free||any;
}
/* Spotify seul. Les quatre autres plateformes alignaient une rangée de boutons
   qui pesait plus que ce qu'elle apportait. Pour n'en garder aucune, videz ce
   tableau : la rangée disparaît d'elle-même. */
var SERV=[['open.spotify.com','Spotify']];
function services(rels){
  var out=[],seen={};
  for(var i=0;i<(rels||[]).length;i++){
    var t=rels[i].type||'',u=(rels[i].url||{}).resource||'';
    if(!u||t.indexOf('streaming')<0)continue;
    for(var k=0;k<SERV.length;k++){
      if(u.indexOf(SERV[k][0])>=0&&!seen[SERV[k][1]]){seen[SERV[k][1]]=1;out.push([SERV[k][1],u]);break;}
    }
  }
  return out;
}

/* Le relevé fabriqué d'abord : il est là au chargement, complet, et porte les
   identifiants YouTube que MusicBrainz ne connaît pas. L'appel en direct ne
   sert plus que de filet, pour une parution ajoutée sans avoir relancé
   tools/build-tracks.py. */
function mbTracks(r,cb){
  var key=r.rid||r.id;
  if(typeof TRACKS!=='undefined'&&TRACKS[key]){
    var b=TRACKS[key];
    cb({serv:b.s||[],groups:(b.g||[]).map(function(g){
      return g.map(function(t){return {n:t[0],t:t[1],ms:t[2],yt:t[3]||null,u:null};});
    })});
    return;
  }
  if(TRK[key]){cb(TRK[key]);return;}
  if(TRKQ[key]){TRKQ[key].push(cb);return;}
  TRKQ[key]=[cb];
  var inc='inc=recordings+recording-level-rels+url-rels&fmt=json';
  var u=r.rid
    ? 'https://musicbrainz.org/ws/2/release/'+r.rid+'?'+inc
    : 'https://musicbrainz.org/ws/2/release?release-group='+r.id+'&'+inc+'&limit=1';
  var give=function(v,keep){
    /* Un échec n'est jamais mis en cache : la fiche rouverte retentera. */
    if(keep)TRK[key]=v;
    var q=TRKQ[key];delete TRKQ[key];
    q.forEach(function(f){f(v);});
  };
  mbFetch(u,function(d){
    var rel=d.releases?d.releases[0]:d,groups=[];
    (((rel||{}).media)||[]).forEach(function(m){
      var g=[];
      ((m&&m.tracks)||[]).forEach(function(t){
        g.push({n:t.position,t:t.title||'',ms:t.length||0,yt:null,
                u:pickUrl(((t.recording||{}).relations)||[])});
      });
      if(g.length)g&&groups.push(g);
    });
    give({groups:groups,serv:services((rel||{}).relations)},true);
  },function(){give({groups:[],serv:[],failed:true},false);});
}
function dur(ms){
  if(!ms)return '';
  var t=Math.round(ms/1000);
  return Math.floor(t/60)+':'+('0'+(t%60)).slice(-2);
}

function mbLink(r){
  return r.rid?('https://musicbrainz.org/release/'+r.rid)
              :('https://musicbrainz.org/release-group/'+r.id);
}
var $=function(s){return document.querySelector(s);};
var reduce=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches);
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function pad(n){return (n<10?'0':'')+n;}
function srcOf(r){return r.cover||(r.rid?CAAR(r.rid):CAA(r.id));}

var STATE='intro',CUR=0,FILTER='tout',view=[];

/* ─────────── pochette ─────────── */
function sleeveHTML(r,i,withImg){
  return '<span class="sleeve"><span class="ph">'+esc(r.t)+'</span>'
    +(withImg?'<img data-i="'+i+'" alt="Pochette de '+esc(r.t)+'" crossorigin="anonymous">':'')
    +'</span>';
}

/* ─────────── construction, rechargeable d'un artiste à l'autre ─────────── */
var slots=[],lifts=[],faces=[],cells=[];
var total=0,done=0,readyDone=false,t0=Date.now(),armed=false;

/* Le splash s'efface tout seul dès que l'animation est jouée et les pochettes
   chargées : on entre dans le site d'un coup, sans bouton. */
function ready(){
  if(readyDone)return;readyDone=true;
  if(armed)return;armed=true;
  var reste=Math.max(0,(reduce?250:1620)-(Date.now()-t0));
  setTimeout(enter,reste);
}
/* Le splash ne porte plus que les pochettes : ni barre, ni compteur à remplir.
   Ce décompte ne sert donc qu'à savoir quand tout est là. */
function progress(){
  if(done>=total)ready();
}
/* ─────────── l'écran de l'appareil ───────────
   Emprunté à une direction artistique de jeu en pixels : de la 3D rendue en basse
   définition, puis quantifiée et tramée. Rien d'autre n'en est repris — sa palette
   tropicale et ses décors n'ont rien à faire ici. Mais la basse définition, si :
   un baladeur de cette époque avait un écran de 320×240, et les pochettes y
   tenaient à peine plus qu'une vignette. Les montrer **comme l'appareil les aurait
   affichées** est du pixel art et d'époque à la fois.

   La réduction seule donnerait des aplats sales. Ce qui fait l'image, c'est le
   **tramage ordonné** : avant d'arrondir chaque composante à l'un des six niveaux
   retenus, on lui ajoute un seuil qui varie selon la position dans une matrice de
   Bayer 4×4. Deux pixels voisins d'une même teinte s'arrondissent alors de part et
   d'autre, et le mélange rend la nuance que la palette ne contient pas. */
/* PIX_L, le nombre de niveaux gardés par composante, a été réglé en comparant :
   à 6 le ciel vire au damier uniforme et l'image se délave ; à 16 la
   quantification ne se lit plus, indiscernable de la simple réduction. À 10 la
   trame se devine dans les aplats sans manger les couleurs. */
var PIX=false,PIX_N=96,PIX_L=10,pixCache={};
var BAYER=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];

function pixelate(url,cb){
  if(pixCache[url]){cb(pixCache[url]);return;}
  var im=new Image();
  im.crossOrigin='anonymous';
  im.onerror=function(){cb(null);};
  im.onload=function(){
    try{
      var c=document.createElement('canvas');c.width=c.height=PIX_N;
      var x=c.getContext('2d');
      x.drawImage(im,0,0,PIX_N,PIX_N);
      var d=x.getImageData(0,0,PIX_N,PIX_N),a=d.data,step=255/(PIX_L-1);
      for(var i=0,px=0;i<a.length;i+=4,px++){
        var seuil=(BAYER[(px%PIX_N%4)+((px/PIX_N|0)%4)*4]/16-0.5)*step;
        for(var k=0;k<3;k++){
          var v=Math.round((a[i+k]+seuil)/step)*step;
          a[i+k]=v<0?0:(v>255?255:v);
        }
      }
      x.putImageData(d,0,0);
      var u=c.toDataURL('image/png');
      pixCache[url]=u;cb(u);
    }catch(e){
      /* Canevas souillé : l'archive n'a pas renvoyé l'en-tête qui l'autorise.
         On laisse la pochette telle quelle plutôt que de la perdre. */
      cb(null);
    }
  };
  im.src=url;
}

/* Toute pochette passe par ici. L'adresse d'origine et la clé de la parution
   sont gardées sur l'élément, si bien qu'on bascule d'un mode à l'autre sans
   rien recharger.

   Les versions en pixels sont **fabriquées d'avance** — `tools/build-pix.py` les
   écrit dans `assets/pix/`, et `assets/pix.js` les recense. Le navigateur ne fait
   donc plus, à chaque visite et sous les yeux de qui regarde, le travail de
   télécharger le 500 px, le peindre sur un canevas, le réduire et le tramer. Il
   charge une image déjà prête, dix fois plus légère. La fabrication à la volée
   reste en place, comme filet, pour une parution ajoutée depuis. */
function setCover(img,url,key){
  img.setAttribute('data-src',url);
  if(key)img.setAttribute('data-pk',key);
  var toute=(typeof PIXMAP!=='undefined')&&key&&PIXMAP[key];
  if(PIX){
    if(toute){img.src=toute;return;}
    pixelate(url,function(u){
      if(img.getAttribute('data-src')===url)img.src=u||url;
    });
    return;
  }
  /* Hors mode pixels, la version basse définition sert d'**aperçu immédiat** :
     elle est locale et pèse six kilo-octets, donc elle s'affiche avant même que
     l'archive n'ait répondu. Le navigateur la lisse — sans `image-rendering`
     imposé — et on la lit comme une image encore floue, ce qu'elle est. La vraie
     pochette la remplace dès qu'elle arrive.

     Le préchargeur porte le même `crossOrigin` que l'image visible : sans quoi la
     réponse serait mise en cache sous une autre clé et la pochette retéléchargée
     une seconde fois pour rien. */
  if(toute)img.src=toute;
  var vraie=new Image();
  vraie.crossOrigin='anonymous';
  vraie.onload=function(){
    if(img.getAttribute('data-src')===url)img.src=url;
  };
  vraie.onerror=function(){
    /* Sans aperçu, il faut tout de même tenter : l'image porte ses propres
       gestionnaires d'erreur, qui la retireront si elle échoue aussi. */
    if(!toute&&img.getAttribute('data-src')===url)img.src=url;
  };
  vraie.src=url;
}
function applyPix(){
  document.documentElement.setAttribute('data-pix',PIX?'on':'off');
  $('#mPix').setAttribute('aria-pressed',PIX?'true':'false');
  try{localStorage.setItem('wte-pix',PIX?'1':'0');}catch(e){}
  [].slice.call(document.querySelectorAll('img[data-src]')).forEach(function(im){
    setCover(im,im.getAttribute('data-src'),im.getAttribute('data-pk'));
  });
}

function wireImages(first){
  /* Restreint au rail et à la planche : une recherche sur tout le document
     ramassait aussi l'image de la fiche, ajoutée en JS et sans `data-i`,
     ce qui levait une exception et interrompait le changement d'artiste. */
  var imgs=[].slice.call($('#rail').querySelectorAll('img'))
    .concat([].slice.call($('#grid').querySelectorAll('img')));
  if(first){total=imgs.length;done=0;progress();}
  imgs.forEach(function(img){
    var i=parseInt(img.getAttribute('data-i'),10),seen=false;
    if(!REL[i]){img.remove();return;}
    img.addEventListener('load',function(){
      img.classList.add('on');
      if(first&&!seen){seen=true;done++;progress();}
    });
    img.addEventListener('error',function(){
      img.remove();
      if(first&&!seen){seen=true;done++;progress();}
    });
    setCover(img,srcOf(REL[i]),REL[i].rid||REL[i].id);
  });
  if(first&&!imgs.length)ready();
}

/* Les pochettes des autres artistes sont tirées en arrière-plan une fois la
   première série affichée : changer d'artiste devient instantané au lieu
   d'attendre l'archive. */
var prefetched=false;
function prefetchOthers(){
  if(prefetched)return;prefetched=true;
  var q=[];
  ARTISTS.forEach(function(a,i){
    if(i===A)return;
    a.rel.forEach(function(r){q.push(srcOf(r));});
  });
  var n=0;
  (function next(){
    if(n>=q.length)return;
    var im=new Image();
    im.crossOrigin='anonymous';
    im.onload=im.onerror=function(){n++;setTimeout(next,60);};
    im.src=q[n];
  })();
}

function buildArtist(idx,first){
  A=idx;
  var a=ARTISTS[A];
  REL=a.rel;
  $('#brandName').textContent=a.name;
  $('#brandSub').textContent=a.place+' · depuis '+a.since;

  $('#rail').innerHTML='<i class="edge"></i>'+REL.map(function(r,i){
    return '<button class="slot" type="button" role="option" aria-selected="false" data-i="'+i+'"'
      +' aria-label="'+esc(r.t)+', '+esc(r.kind)+', '+r.y+'">'
      +'<span class="lift">'+sleeveHTML(r,i,true)
      +'<span class="refl" aria-hidden="true">'+sleeveHTML(r,i,true)+'</span></span></button>';
  }).join('')+'<i class="edge"></i>';

  /* La numérotation en série — 0.01, 0.02, 0.1, 0.03 — est la colonne
     vertébrale de la discographie de wave to earth, mais rien ne la donnait à
     voir. On marque les parutions qui en portent une : la planche montre alors
     la série d'un coup d'œil. Les artistes sans numérotation n'ont rien de plus. */
  $('#grid').innerHTML=REL.map(function(r,i){
    return '<button class="cell'+(r.v?' serie':'')+'" type="button" data-i="'+i+'"'
      +' aria-label="Ouvrir '+esc(r.t)+(r.v?', série '+esc(r.v):'')+'">'
      +sleeveHTML(r,i,true)
      +(r.v?'<span class="ser" aria-hidden="true">'+esc(r.v)+'</span>':'')
      +'<span class="cap"><b>'+esc(r.t)+'</b><span>'+r.y+'</span></span></button>';
  }).join('');

  slots=[].slice.call(document.querySelectorAll('.slot'));
  lifts=slots.map(function(s){return s.querySelector('.lift');});
  faces=slots.map(function(s){return s.querySelector('.lift > .sleeve');});
  cells=[].slice.call(document.querySelectorAll('.cell'));
  if(!first)$('#rail').classList.add('is-live');

  wireImages(first);

  FILTER='tout';
  [].slice.call(document.querySelectorAll('#filters button')).forEach(function(x){
    x.setAttribute('aria-pressed',x.getAttribute('data-f')==='tout'?'true':'false');
  });
  CUR=0;pBuilt=false;counts();rebuild();hud();sizeEdges();goTo(0,false);
  requestAnimationFrame(render);
  amenuPaint();
}

/* ─────────── filtres ─────────── */
function counts(){
  var c={tout:REL.length,Album:0,EP:0,Single:0};
  REL.forEach(function(r){if(c[r.kind]!==undefined)c[r.kind]++;});
  [].slice.call(document.querySelectorAll('#filters button')).forEach(function(b){
    b.innerHTML=esc(b.getAttribute('data-lbl'))+'<sup>'+(c[b.getAttribute('data-f')]||0)+'</sup>';
  });
}
function sizeEdges(){
  var first=view.length?slots[view[0]]:null,w=first?first.offsetWidth:0;
  if(!w)return;
  $('#rail').style.setProperty('--edge',Math.max(0,(field.clientWidth-w)/2+2).toFixed(1)+'px');
}
function rebuild(){
  view=[];
  for(var i=0;i<REL.length;i++){
    var on=(FILTER==='tout'||REL[i].kind===FILTER);
    slots[i].hidden=!on;cells[i].hidden=!on;
    if(on)view.push(i);
  }
  view.forEach(function(idx,p){
    slots[idx].style.setProperty('--d',(p*55)+'ms');
    cells[idx].style.setProperty('--d',(p*35)+'ms');
  });
  $('#rlistIn').innerHTML=view.map(function(idx,p){
    var r=REL[idx];
    return '<li aria-current="false"><button type="button" data-p="'+p+'">'
      +'<b>'+pad(p+1)+'</b><span>'+esc(r.t)+'</span><i>'+r.y+'</i></button></li>';
  }).join('');
  $('#scrub').innerHTML=view.map(function(idx,p){
    return '<button type="button" data-p="'+p+'" aria-current="false" aria-label="'
      +esc(REL[idx].t)+', '+(REL[idx].y||'')+'"></button>';
  }).join('');
  CUR=Math.min(CUR,Math.max(0,view.length-1));
  sizeEdges();
}

/* ─────────── compteur ─────────── */
/* Le décalage est en `em`, pas en pourcentage : un pourcentage se calcule sur la
   hauteur de l'élément déplacé, et la colonne fait dix chiffres — soit dix fois
   trop. Les colonnes sont conservées d'un appel à l'autre pour que le chiffre
   roule au lieu d'être redessiné. */
function setCount(n,tot){
  var s=pad(n),el=$('#count');
  var cols=el.querySelectorAll('.roll .col');
  if(cols.length!==s.length){
    var digits='';for(var k=0;k<10;k++)digits+='<span>'+k+'</span>';
    var out='';
    for(var d=0;d<s.length;d++)out+='<span class="roll"><span class="col">'+digits+'</span></span>';
    el.innerHTML=out+'<i>/ '+pad(tot)+'</i>';
    cols=el.querySelectorAll('.roll .col');
  }else{
    var tail=el.querySelector('i');
    if(tail)tail.textContent='/ '+pad(tot);
  }
  for(var i=0;i<cols.length;i++)cols[i].style.transform='translateY(-'+s[i]+'em)';
}
function hud(){
  if(!view.length)return;
  var r=REL[view[CUR]];
  setCount(CUR+1,view.length);
  setLine([r.kind,r.date,r.label].filter(Boolean).join(' · '));
  $('#edgeL').textContent=$('#edgeR').textContent=r.kind;
  slots.forEach(function(s,i){s.setAttribute('aria-selected',i===view[CUR]?'true':'false');});
  [].slice.call($('#scrub').children).forEach(function(b,p){
    b.setAttribute('aria-current',p===CUR?'true':'false');
  });
  var rows=$('#rlistIn').children;
  for(var q=0;q<rows.length;q++)rows[q].setAttribute('aria-current',q===CUR?'true':'false');
  if(LIST&&rows[CUR]){
    /* La ligne courante est ramenée dans le cadre, mais seulement si elle en est
       sortie : la rappeler à chaque pas ferait sauter la liste sous le curseur
       de qui la parcourt à la main. */
    var el=rows[CUR],box=$('#rlist');
    var top=el.offsetTop,bot=top+el.offsetHeight;
    if(top<box.scrollTop)box.scrollTop=top-6;
    else if(bot>box.scrollTop+box.clientHeight)box.scrollTop=bot-box.clientHeight+6;
  }
}

var lineT=0;
function setLine(txt){
  var el=$('#nowline');
  if(el.textContent===txt)return;
  el.style.opacity='0';
  clearTimeout(lineT);
  lineT=setTimeout(function(){el.textContent=txt;el.style.opacity='';},reduce?0:190);
}

/* ─────────── fiche ─────────── */
var ficheTok=0;
function fiche(i){
  var r=REL[i],p=view.indexOf(i);
  var meta=[['Type',r.kind],['Parution',r.date]];
  if(r.label)meta.push(['Label',r.label]);
  if(r.v)meta.push(['Série',r.v]);
  meta.push(['Rang',pad(p+1)+' sur '+pad(view.length)]);
  $('#focus').innerHTML=
    '<div class="plate">'+sleeveHTML(r,i,false)+'</div>'
    +'<div class="txt">'
      +'<button class="fclose" type="button" style="--d:0ms" '
        +'aria-label="Fermer la fiche et revenir au parcours">\u2715</button>'
      +'<span class="idx" style="--d:0ms">'+pad(p+1)+'<i>/ '+pad(view.length)+'</i></span>'
      +'<div class="card" style="--d:80ms">'
        +'<div class="head"><h2>'+esc(r.t)+'</h2><p>'+esc(ARTISTS[A].name)+' · '+r.y+'</p></div>'
        +'<dl class="rows">'+meta.map(function(m){
            return '<div><dt>'+esc(m[0])+'</dt><dd>'+esc(m[1])+'</dd></div>';}).join('')+'</dl>'
        +'<div class="trk" id="trk"><p class="trk-h">Titres<i>relevé…</i></p></div>'
        +(r.note?'<p class="note">'+esc(r.note)+'</p>':'')
        +'<a class="src" href="'+mbLink(r)
          +'" target="_blank" rel="noopener noreferrer"><span>fiche musicbrainz</span><span>›</span></a>'
      +'</div>'
    +'</div>';
  /* Un jeton par ouverture : une réponse lente ne doit pas écrire ses titres
     dans la fiche suivante, déjà affichée à sa place. */
  var tok=++ficheTok;
  mbTracks(r,function(d){
    if(tok!==ficheTok)return;
    var box=$('#trk');if(!box)return;
    if(d.failed){
      box.innerHTML='<p class="trk-h">Titres<i>indisponible</i></p>';
      box.classList.add('on');return;
    }
    if(!d.groups.length&&!d.serv.length){box.remove();return;}
    var many=d.groups.length>1;
    var n=d.groups.reduce(function(a,g){return a+g.length;},0);
    /* La durée du disque : l'information qu'on cherche d'abord, et elle était
       dans la donnée sans être dite. Tue si une seule piste n'est pas mesurée,
       plutôt que d'annoncer un total faux. */
    var ms=0,plein=true;
    d.groups.forEach(function(g){g.forEach(function(t){
      if(t.ms)ms+=t.ms; else plein=false;});});
    var tot=(plein&&ms)?(n+' titre'+(n>1?'s':'')+' · '+Math.round(ms/60000)+' min'):(n+' titre'+(n>1?'s':''));
    /* Le lecteur ne connaît que les pistes jouables, dans leur ordre. */
    var flat=[];
    box.innerHTML=(d.groups.length
      ? '<p class="trk-h">Titres<i>'+esc(tot)+'</i></p>'
        +d.groups.map(function(g,mi){
            return (many?'<p class="trk-s">Support '+(mi+1)+'</p>':'')
              +'<ol class="trk-l">'+g.map(function(t){
                  /* Trois sorts, du meilleur au moins bon : une vidéo qu'on
                     joue sur place ; un lien d'écoute que MusicBrainz connaît
                     pour l'enregistrement ; sinon une recherche, qui aboutit
                     toujours. Seul le premier reste dans la page. */
                  var lab=pad(t.n);
                  if(t.yt){
                    return '<li data-y="'+esc(t.yt)+'"><b>'+lab+'</b>'
                      +'<button type="button" class="tp" data-k="'+(flat.push(t)-1)+'">'
                      +esc(t.t)+'</button><i>'+dur(t.ms)+'</i></li>';
                  }
                  var href=t.u||('https://www.youtube.com/results?search_query='
                    +encodeURIComponent(ARTISTS[A].name+' '+t.t));
                  return '<li class="out"><b>'+lab+'</b>'
                    +'<a href="'+esc(href)+'" target="_blank" rel="noopener noreferrer"'
                    +' title="'+(t.u?'Écouter cette piste':'Chercher cette piste')+'">'
                    +esc(t.t)+'</a><i>'+dur(t.ms)+'</i></li>';
                }).join('')+'</ol>';
          }).join('')
      : '')
      +(d.serv.length
        ? '<p class="play"><span>Écouter</span>'+d.serv.map(function(x){
            return '<a href="'+esc(x[1])+'" target="_blank" rel="noopener noreferrer">'
              +esc(x[0])+'</a>';
          }).join('')+'</p>'
        : '');
    box.classList.add('on');
    /* La fiche affichée expose sa liste, mais ne la donne pas au lecteur : sinon
       ouvrir une autre parution pendant l'écoute déplacerait « suivant » vers un
       disque qu'on n'écoute pas. Le lecteur ne prend le fil qu'au moment du clic. */
    SHOWN={list:flat,rel:r.t,key:r.rid||r.id};
    plMark();
  });

  var plate=$('#focus .plate .sleeve');
  var img=new Image();
  img.crossOrigin='anonymous';img.className='on';img.alt='Pochette de '+r.t;
  img.onerror=function(){img.remove();};
  plate.appendChild(img);setCover(img,srcOf(r),r.rid||r.id);
  return plate;
}

/* ─────────── la pochette en grand ───────────
   Le Cover Flow se contente du 500 ; ici on demande le 1200 à l'archive. Le
   petit reste affiché derrière tant que le grand n'est pas arrivé : sans quoi
   le cadre s'ouvrirait sur du vide le temps du chargement. */
function loupeOpen(small,big,cap){
  var el=$('#loupe');
  el.innerHTML='<img src="'+esc(small)+'" alt="'+esc(cap)+'">'
    +'<figcaption>'+esc(cap)+'</figcaption>';
  if(big&&big!==small){
    var im2=new Image();
    im2.onload=function(){var im=el.querySelector('img');if(im)im.src=im2.src;};
    im2.src=big;
  }
  el.hidden=false;
  requestAnimationFrame(function(){el.classList.add('on');});
}
function loupe(i){var r=REL[i];loupeOpen(srcOf(r),bigOf(r),r.t);}
function loupeOff(){
  var el=$('#loupe');
  el.classList.remove('on');
  setTimeout(function(){el.hidden=true;el.innerHTML='';},reduce?0:260);
}
$('#loupe').addEventListener('click',loupeOff);

/* ─────────── à propos ───────────
   Le site se sert de quatre sources et n'en créditait aucune dans son interface.
   Vu qu'il montre des visuels qui ne lui appartiennent pas et fait entrer un
   tiers dans la page, le dire relève moins de l'agrément que de la correction. */
function aboutOpen(on){
  var el=$('#about');
  if(on){el.hidden=false;requestAnimationFrame(function(){el.classList.add('on');});}
  else{el.classList.remove('on');setTimeout(function(){el.hidden=true;},reduce?0:220);}
}
/* ─────────── le mode appareil ───────────
   Le site vient loger dans l'écran d'un châssis dessiné. Les mesures sont
   virtuelles — châssis 736 × 916, écran 680 × 510 — et un seul facteur met les
   deux à l'échelle **depuis le même coin haut-gauche** : l'écran tombe donc au
   pixel près sur son cadre, sans arithmétique de centrage à refaire deux fois.

   Donner une transformée à `#app` en fait le référent des positions fixes qu'il
   contient : le lecteur, la loupe, la visite et les panneaux restent dans l'écran
   sans qu'aucun d'eux n'ait à savoir qu'il y est. */
/* Proportions relevées sur des rendus de l'appareil, rapportées à la largeur du
   corps : hauteur 1,658 ; écran 0,808 × 0,614 posé en 0,091 / 0,065 ; molette
   0,596 de diamètre à 0,829 du haut. Les miennes étaient franchement fausses —
   écran trop large, molette bien trop petite, corps trop court. */
var DV_W=736,DV_H=1220,DV_SX=67,DV_SY=48,DV_SW=595,DV_SH=452;
/* La barre sortie occupe un bandeau réservé en haut : le boîtier se met à
   l'échelle dans ce qui reste, de sorte qu'aucun des deux ne recouvre l'autre,
   à aucune taille de fenêtre. */
var DV_BAND=62;
var DEV=false;
try{DEV=localStorage.getItem('wte-dev')==='1';}catch(e){}

/* La barre de commandes, le guide et le lecteur **sortent de l'écran** plutôt que
   d'y être dupliqués : on déplace les mêmes nœuds, donc tous les gestionnaires
   suivent sans être recâblés et l'état des boutons reste celui qu'il était. On
   retient d'où ils viennent pour les y remettre à l'identique. */
var outMoved=[];
function deviceMove(on){
  if(on){
    if(outMoved.length)return;
    ['.ctlbar','#tour','#player'].forEach(function(sel){
      var el=document.querySelector(sel);
      if(!el)return;
      outMoved.push({el:el,par:el.parentNode,next:el.nextSibling});
      $('#outside').appendChild(el);
    });
  }else{
    while(outMoved.length){
      var m=outMoved.pop();
      m.par.insertBefore(m.el,m.next);
    }
  }
}

/* Votre boîtier se pose dans `assets/appareil/`. Nommé `appareil.png`, il
   remplace de lui-même le châssis dessiné ; `appareil-sombre.png` sert au thème
   sombre s'il existe. Videz la constante pour revenir au dessin.

   Le fichier n'est cherché **qu'à l'entrée dans le mode**, jamais au chargement
   de la page. S'il manque, le châssis dessiné reste — il n'y a pas d'état cassé. */
var APPAREIL='assets/appareil/appareil.png',apVues={};
function appareil(){
  var clair=APPAREIL,sombre=APPAREIL.replace(/\.(\w+)$/,'-sombre.$1');
  [clair,sombre].forEach(function(u,i){
    if(!u||apVues[u]!==undefined)return;
    apVues[u]=null;
    var im=new Image();
    im.onload=function(){
      apVues[u]=true;
      document.documentElement.setAttribute(i?'data-dvimg-sombre':'data-dvimg','on');
      var dv=$('#device').querySelector('.dv-body');
      if(dv)dv.style.setProperty(i?'--dv-img-sombre':'--dv-img','url("'+u+'")');
    };
    im.onerror=function(){apVues[u]=false;};
    im.src=u;
  });
}

var dvZ=1,dvT=0;
function deviceLayout(){
  var app=$('#app'),dv=$('#device'),gl=$('#dvGlass');
  if(!DEV){app.removeAttribute('style');gl.hidden=true;gl.removeAttribute('style');return;}
  dv.hidden=false;gl.hidden=false;
  appareil();
  var hDispo=innerHeight-DV_BAND;
  var z=Math.min(innerWidth*0.94/DV_W,hDispo*0.94/DV_H);
  dvZ=z;
  var dx=(innerWidth-DV_W*z)/2,dy=DV_BAND+(hDispo-DV_H*z)/2;
  dv.style.cssText='left:'+dx.toFixed(1)+'px;top:'+dy.toFixed(1)+'px;width:'+DV_W
    +'px;height:'+DV_H+'px;transform:scale('+z.toFixed(4)+')';
  var ecran='left:'+(dx+DV_SX*z).toFixed(1)+'px;top:'+(dy+DV_SY*z).toFixed(1)
    +'px;width:'+DV_SW+'px;height:'+DV_SH+'px;transform:scale('+z.toFixed(4)
    +');transform-origin:0 0';
  app.style.cssText='position:fixed;inset:auto;'+ecran+';overflow:hidden';
  /* La vitre occupe exactement le même rectangle que l'écran, au même facteur. */
  gl.style.cssText='position:fixed;'+ecran;
}

/* ─────────── le passage d'un mode à l'autre ───────────
   Un basculement instantané ne dit rien de ce qui se passe. Ici la caméra
   s'approche de l'écran jusqu'à ce qu'il occupe toute la page, ou s'en éloigne
   jusqu'à découvrir le boîtier.

   C'est le vol FLIP, appliqué à la page entière : on mesure l'écran **avant**, on
   bascule — la mise en page change d'un coup —, on le mesure **après**, et l'on
   repart visuellement de la première position pour rejoindre la seconde. Rien
   n'est interpolé en mise en page, donc rien ne se recalcule à chaque image.

   Le châssis subit le mouvement **inverse** : si l'écran grandit d'un facteur k,
   il s'écarte de 1/k. Les deux restent ainsi solidaires — on ne voit pas un cadre
   qui se déforme, mais une caméra qui avance. */
function zoomModes(A,dvStyleWas,devWas){
  var app=$('#app'),dv=$('#device'),out=$('#outside');
  var B=app.getBoundingClientRect();
  if(!A.width||!B.width)return;
  var k=A.width/B.width;
  var dx=A.left-B.left,dy=A.top-B.top;
  var base=DEV?('scale('+dvZ.toFixed(4)+')'):'';
  var pre='translate('+dx.toFixed(1)+'px,'+dy.toFixed(1)+'px) scale('+k.toFixed(5)+') ';
  /* L'inverse exact de `pre` : scale(1/k) puis la translation opposée. */
  var inv='scale('+(1/k).toFixed(5)+') translate('+(-dx).toFixed(1)+'px,'+(-dy).toFixed(1)+'px) ';

  app.style.transition='none';
  app.style.transformOrigin='0 0';
  app.style.transform=pre+base;

  if(DEV){
    dv.hidden=false;
    dv.style.transition='none';dv.style.opacity='0';
    dv.style.transformOrigin='0 0';
    dv.style.transform=pre+'scale('+dvZ.toFixed(4)+')';
  }else if(devWas){
    dv.hidden=false;
    dv.setAttribute('style',dvStyleWas);
    dv.style.transition='none';dv.style.opacity='1';dv.style.transformOrigin='0 0';
  }
  out.style.transition='none';out.style.opacity='0';

  app.offsetWidth;                       /* on force le calcul avant d'animer */

  var D='.66s cubic-bezier(.16,1,.3,1)';
  app.style.transition='transform '+D;
  app.style.transform=base;
  out.style.transition='opacity .34s var(--e) .24s';
  out.style.opacity='1';
  if(DEV){
    dv.style.transition='transform '+D+',opacity .38s ease .1s';
    dv.style.transform='scale('+dvZ.toFixed(4)+')';
    dv.style.opacity='1';
  }else if(devWas){
    var m=/transform:scale\(([\d.]+)\)/.exec(dvStyleWas);
    dv.style.transition='transform '+D+',opacity .4s ease';
    dv.style.transform=inv+'scale('+(m?m[1]:'1')+')';
    dv.style.opacity='0';
  }

  clearTimeout(dvT);
  dvT=setTimeout(function(){
    app.style.transition='';out.style.transition='';out.style.opacity='';
    dv.style.transition='';
    if(!DEV){dv.hidden=true;dv.removeAttribute('style');}
    else dv.style.opacity='';
  },700);
}

function applyDevice(anim){
  var app=$('#app'),dv=$('#device');
  var A=anim?app.getBoundingClientRect():null;
  var devWas=!dv.hidden,dvStyleWas=dv.getAttribute('style')||'';

  document.documentElement.setAttribute('data-device',DEV?'on':'off');
  deviceMove(DEV);
  $('#mDevice').setAttribute('aria-pressed',DEV?'true':'false');
  try{localStorage.setItem('wte-dev',DEV?'1':'0');}catch(e){}
  deviceLayout();
  if(!DEV&&!anim){dv.hidden=true;dv.removeAttribute('style');}

  if(anim&&!reduce&&A)zoomModes(A,dvStyleWas,devWas);
  else if(!DEV){dv.hidden=true;dv.removeAttribute('style');}

  /* Le champ vient de changer de largeur du tout au tout : tout ce qui se centre
     sur elle doit être refait. */
  sizeEdges();goTo(CUR,false);requestAnimationFrame(render);
  if(STATE==='photos'&&photoList().length)placeRing();
}
$('#mDevice').addEventListener('click',function(){DEV=!DEV;applyDevice(true);});

/* La trame et le reflet de la vitre ont un parti pris marqué : ils restent au
   choix, et éteints par défaut. */
var GLASS=false;
try{GLASS=localStorage.getItem('wte-glass')==='1';}catch(e){}
function applyGlass(){
  document.documentElement.setAttribute('data-glass',GLASS?'on':'off');
  $('#mGlass').setAttribute('aria-pressed',GLASS?'true':'false');
  try{localStorage.setItem('wte-glass',GLASS?'1':'0');}catch(e){}
}
$('#mGlass').addEventListener('click',function(){GLASS=!GLASS;applyGlass();});
addEventListener('resize',function(){
  if(!DEV)return;
  deviceLayout();sizeEdges();goTo(CUR,false);requestAnimationFrame(render);
  if(STATE==='photos'&&photoList().length)placeRing();
});

/* Les quatre zones font ce que font les touches, pour que la molette ne soit pas
   un décor : elle commande vraiment. */
/* ─────────── le menu des artistes ───────────
   `menu` remonte d'un cran : d'une fiche au parcours, du parcours à ce menu. Le
   Cover Flow y est **déchargé** — l'écran ne montre plus qu'une liste, comme la
   pile de menus d'un baladeur, et l'on redescend en choisissant.

   La molette y déplace la sélection au lieu de parcourir : c'est le même geste,
   appliqué à ce que l'écran montre. */
var menuI=0;
function paintMenu(){
  menuI=A;
  $('#amenusIn').innerHTML=ARTISTS.map(function(a,i){
    return '<li aria-current="'+(i===A?'true':'false')+'">'
      +'<button type="button" data-a="'+i+'"><span>'+esc(a.name)+'</span>'
      +'<i>'+a.rel.length+' ›</i></button></li>';
  }).join('');
}
function menuMark(){
  var r=$('#amenusIn').children;
  for(var i=0;i<r.length;i++)r[i].setAttribute('aria-current',i===menuI?'true':'false');
}
function menuGo(d){
  var n=ARTISTS.length;
  menuI=((menuI+d)%n+n)%n;
  sfx.step();menuMark();
}
function menuPick(){
  var i=menuI;
  setState('parcours');
  if(i!==A)buildArtist(i,false); else goTo(CUR,false);
}
$('#amenus').addEventListener('click',function(e){
  var b=e.target.closest('button[data-a]');
  if(!b)return;
  menuI=parseInt(b.getAttribute('data-a'),10);menuPick();
});

/* Parcourir, et rien d'autre : ce que fait la molette quoi qu'il se joue. */
function dvNav(d){
  if(STATE==='menu'){menuGo(d);return;}
  if(STATE==='photos')pStep(d);
  else if(STATE==='focus')open(CUR+d);
  else goTo(CUR+d);
}

function dvAction(z){
  if(z==='menu'){
    if(STATE==='focus')close();
    else if(STATE==='menu')return;             /* déjà au sommet */
    else if(STATE!=='parcours')setState('parcours');
    else{paintMenu();setState('menu');}
    return;
  }
  if(z==='prev'||z==='next'){
    var d=z==='next'?1:-1;
    /* Sur un baladeur, ces deux **touches** changent de morceau tant qu'une piste
       joue. La molette, elle, ne doit jamais le faire : elle parcourt, c'est son
       office. Les deux passaient par ici, si bien qu'elle héritait du
       comportement de lecture — d'où `dvNav`, qui ne fait que parcourir. */
    if(!$('#player').hidden&&PL.i>=0){plPlay(PL.i+d);return;}
    dvNav(d);
    return;
  }
  if(z==='play'){
    /* Depuis une fiche, la première piste jouable part. Ailleurs, on ouvre. */
    var b=document.querySelector('#trk .tp');
    if(STATE==='focus'&&b)b.click(); else if(STATE==='parcours')open(CUR);
    return;
  }
  if(z==='centre'){
    if(STATE==='menu')menuPick();
    else if(STATE==='parcours')open(CUR);
    else if(STATE==='photos'){
      var l=photoList();
      if(l.length)loupeOpen(l[pIdx],l[pIdx],pad(pIdx+1)+' / '+pad(l.length));
    }
  }
}
[].slice.call(document.querySelectorAll('.dv-z')).forEach(function(b){
  b.addEventListener('click',function(e){e.stopPropagation();dvAction(b.getAttribute('data-z'));});
});
$('#dvCentre').addEventListener('click',function(e){e.stopPropagation();dvAction('centre');});

/* Tourner la molette parcourt le catalogue. L'angle est suivi en absolu et son
   écart cumulé : un cran tous les 22°, ce qui fait seize crans par tour. Le
   passage par ±180° est ramené dans l'intervalle, sinon un demi-tour compterait
   pour seize d'un coup. */
var wDrag=null,wAcc=0;
(function(){
  var w=$('#dvWheel');if(!w)return;
  w.addEventListener('pointerdown',function(e){
    if(e.target.closest('.dv-c,.dv-z'))return;
    var r=w.getBoundingClientRect();
    wDrag={cx:r.left+r.width/2,cy:r.top+r.height/2,a:null};wAcc=0;
    try{w.setPointerCapture(e.pointerId);}catch(err){}
  });
  w.addEventListener('pointermove',function(e){
    if(!wDrag)return;
    var a=Math.atan2(e.clientY-wDrag.cy,e.clientX-wDrag.cx)*180/Math.PI;
    if(wDrag.a!==null){
      var d=a-wDrag.a;
      if(d>180)d-=360; else if(d<-180)d+=360;
      wAcc+=d;
      while(Math.abs(wAcc)>=22){
        var sg=wAcc>0?1:-1;wAcc-=sg*22;
        dvNav(sg>0?1:-1);
      }
    }
    wDrag.a=a;
  });
  ['pointerup','pointercancel','pointerleave'].forEach(function(ev){
    w.addEventListener(ev,function(){wDrag=null;});
  });
})();

/* ─────────── la visite guidée ───────────
   Le site a beaucoup de choses qui ne se devinent pas : les touches, le tiroir,
   les titres qui se jouent d'un clic. Six étapes, chacune désignant une commande
   réelle plutôt que de la décrire de loin.

   Les étapes ne changent jamais l'état du site — elles montrent, elles ne font
   pas à la place. Une étape qui ouvrirait la planche pour l'expliquer laisserait
   le visiteur ailleurs qu'il ne croyait. */
/* Votre illustration se pose dans `assets/mascotte/`. Nommée `mascotte.png`, elle
   remplace d'elle-même la figure dessinée. Videz cette constante pour revenir à
   celle-ci. Le fichier n'est cherché **qu'à l'ouverture de la visite**, jamais au
   chargement de la page : rien n'est demandé pour rien à qui ne la lance pas. */
var MASCOTTE='assets/mascotte/mascotte.png',mascVue=false;
function mascotte(){
  if(mascVue||!MASCOTTE)return;
  mascVue=true;
  var im=new Image();
  im.onload=function(){
    var box=$('#tour');if(!box)return;
    var svg=box.querySelector('.tour-m');
    if(svg)svg.remove();
    im.className='tour-m';im.alt='';
    box.insertBefore(im,box.firstChild);
  };
  im.onerror=function(){};   /* pas de fichier : la figure dessinée reste */
  im.src=MASCOTTE;
}

var TOUR=[
 {sel:'#field',t:'Le parcours',
  x:'Les pochettes défilent à la molette, au glisser, ou aux flèches <kbd>←</kbd> <kbd>→</kbd>. '
   +'<kbd>↵</kbd> ouvre celle du milieu.'},
 {sel:'#brandBtn',t:'Changer d\'artiste',
  x:'Le nom est un bouton : il ouvre la liste des artistes. Tout se reconstruit sans recharger.'},
 {sel:null,t:'La fiche',
  x:'Une fois un disque ouvert, <b>cliquer un titre le joue dans la page</b>, sur un petit '
   +'lecteur qui reste là même si l\'on referme la fiche. La pochette s\'ouvre en grand.'},
 {sel:'#mSurvey',t:'La planche',
  x:'Toutes les parutions d\'un coup d\'œil, en grille. La touche <kbd>G</kbd> y va aussi.'},
 {sel:'#mPhotos',t:'Les images',
  x:'Les photos sur une hélice qui tourne. Quand un artiste en a plusieurs séries, '
   +'un sélecteur apparaît en bas.'},
 {sel:'#mOpt',t:'Les options',
  x:'La liste appariée (<kbd>L</kbd>), les pochettes en pixels (<kbd>P</kbd>), le thème, '
   +'le son — et les crédits.'}
];
var tourI=0,tourCible=null;

function tourHi(sel){
  if(tourCible)tourCible.classList.remove('tour-hi');
  tourCible=sel?document.querySelector(sel):null;
  if(tourCible)tourCible.classList.add('tour-hi');
}
function tourShow(i){
  if(i>=TOUR.length){tourEnd();return;}
  mascotte();
  tourI=i;
  var e=TOUR[i];
  $('#tourT').textContent=e.t;
  $('#tourN').textContent=(i+1)+' / '+TOUR.length;
  $('#tourX').innerHTML=e.x;
  $('#tourNext').textContent=(i===TOUR.length-1)?'terminer':'suivant';
  tourHi(e.sel);
  var el=$('#tour');
  el.hidden=false;
  requestAnimationFrame(function(){el.classList.add('on');});
}
function tourEnd(){
  tourHi(null);
  var el=$('#tour');
  el.classList.remove('on');
  setTimeout(function(){el.hidden=true;},reduce?0:300);
  try{localStorage.setItem('wte-tour','1');}catch(e){}
}
$('#tourNext').addEventListener('click',function(){tourShow(tourI+1);});
$('#tourSkip').addEventListener('click',tourEnd);
$('#mTour').addEventListener('click',function(){optOpen(false);tourShow(0);});

$('#mAbout').addEventListener('click',function(){optOpen(false);aboutOpen(true);});
$('#aboutX').addEventListener('click',function(){aboutOpen(false);});
$('#about').addEventListener('click',function(e){if(e.target===this)aboutOpen(false);});

/* ─────────── le lecteur ───────────
   Une iframe YouTube, pas l'API JavaScript de YouTube : celle-ci exigerait de
   charger un script tiers dans la page, ce que le site s'interdit partout
   ailleurs. On perd l'enchaînement automatique en fin de piste — d'où les deux
   boutons — et on garde une page qui n'exécute que son propre code.

   Le domaine `youtube-nocookie.com` est celui qui dépose le moins. Il n'annule
   pas tout : intégrer YouTube, c'est faire entrer un tiers dans la page, et le
   README le dit maintenant sans détour. */
var PL={list:[],i:-1,rel:'',key:''},SHOWN={list:[],rel:'',key:''};
function plMark(){
  /* On ne surligne que si la fiche ouverte est bien celle qu'on écoute. */
  var same=PL.key&&PL.key===SHOWN.key;
  var l=document.querySelectorAll('#trk .trk-l li');
  for(var k=0;k<l.length;k++){
    var b=l[k].querySelector('.tp');
    l[k].classList.toggle('playing',
      same&&!!b&&PL.i>=0&&parseInt(b.getAttribute('data-k'),10)===PL.i);
  }
}
function plPlay(k){
  if(k<0||k>=PL.list.length)return;
  PL.i=k;
  var t=PL.list[k];
  /* Une seule piste, et rien d'autre dans l'adresse.

     L'enchaînement passait auparavant par le paramètre `playlist`, censé ne
     porter que la suite du disque, la piste demandée restant dans le chemin.
     C'est ce que dit la documentation, et ce sur quoi repose le tour connu du
     `?loop=1&playlist=<le même identifiant>`. Mais tous les lecteurs ne s'y
     tiennent pas : certains prennent `playlist` pour la liste entière et
     commencent à son premier élément — donc **à la piste suivante**. Lancer TNT
     jouait REDRED, lancer REDRED jouait ACAI.

     Comme on ne peut pas savoir d'avance lequel des deux comportements
     s'appliquera, on ne s'y fie plus. Jouer la piste demandée n'est pas
     négociable ; l'enchaînement automatique n'était qu'un agrément, et les
     boutons ◂◂ ▸▸ le remplacent. */
  $('#plFrame').src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(t.yt)
    +'?autoplay=1&rel=0&modestbranding=1&playsinline=1';
  $('#plTitle').textContent=t.t;
  $('#plNum').textContent=pad(k+1)+' / '+pad(PL.list.length)+' · '+PL.rel;
  $('#plPrev').disabled=k<=0;
  $('#plNext').disabled=k>=PL.list.length-1;
  $('#player').hidden=false;
  plMark();
}
function plStop(){
  /* Vider la source coupe le son : masquer l'iframe ne l'aurait pas fait. */
  $('#plFrame').src='';
  $('#player').hidden=true;
  PL.i=-1;PL.key='';plMark();
}
$('#plClose').addEventListener('click',plStop);
$('#plPrev').addEventListener('click',function(){plPlay(PL.i-1);});
$('#plNext').addEventListener('click',function(){plPlay(PL.i+1);});

/* ─────────── transition FLIP ─────────── */
function flipTo(fromEl,toEl,done){
  if(reduce||!fromEl||!toEl){if(done)done();return;}
  var a=fromEl.getBoundingClientRect(),b=toEl.getBoundingClientRect();
  if(!a.width||!b.width){if(done)done();return;}
  var clone=fromEl.cloneNode(true);
  clone.className=fromEl.className+' flip';
  clone.style.cssText+=';position:fixed;transform-origin:0 0;margin:0;left:'+a.left+'px;top:'+a.top
    +'px;width:'+a.width+'px;height:'+a.height+'px;z-index:45;pointer-events:none';
  /* La pochette centrale porte une ombre plus profonde que ses voisines, et la
     tient de son parent : le clone, seul dans le corps du document, la perdrait
     au décollage. On la recopie. */
  try{clone.style.boxShadow=getComputedStyle(fromEl).boxShadow;}catch(e){}
  document.body.appendChild(clone);
  toEl.style.opacity='0';
  var an=clone.animate(
    [{transform:'translate(0,0) scale(1,1)'},
     {transform:'translate('+(b.left-a.left)+'px,'+(b.top-a.top)+'px) scale('
        +(b.width/a.width)+','+(b.height/a.height)+')'}],
    {duration:620,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'});
  var ended=false;
  var end=function(){
    if(ended)return;ended=true;
    if(clone.parentNode)clone.parentNode.removeChild(clone);
    toEl.style.opacity='';
    if(done)done();
  };
  an.onfinish=end;
  setTimeout(end,900);
}

/* ─────────── l'adresse ───────────
   Sans état dans l'URL, aucune parution ne se partage ni ne se met en favori, et
   le bouton « retour » du navigateur quitte le site au lieu de refermer la fiche.
   Le fragment porte donc l'artiste, la vue, et la parution quand il y en a une :

     #/wave-to-earth            le parcours
     #/cortis/planche           la planche
     #/wave-to-earth/bad-pieces  une fiche

   La parution est désignée par son titre mis à plat plutôt que par son
   identifiant MusicBrainz : une adresse se lit et se dicte. Les collisions sont
   levées par le rang, mais il n'y en a aucune aujourd'hui. */
function slugify(t){
  var x=String(t).toLowerCase();
  /* NFD sépare l'accent de sa lettre, on jette les accents ; les apostrophes
     typographiques disparaissent au lieu de devenir des tirets. */
  if(x.normalize)x=x.normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  x=x.replace(/[\u2018\u2019']/g,'')
     .replace(/[^a-z0-9]+/g,'-')
     .replace(/^-+|-+$/g,'');
  /* Un titre entièrement non latin se réduirait à rien : mieux vaut une adresse
     de repli qu'une adresse vide, qui renverrait au parcours. */
  return x||'x';
}
var hashLock=false;
function writeHash(){
  if(hashLock)return;
  var a=ARTISTS[A],h='#/'+a.slug;
  if(STATE==='focus'&&view.length)h+='/'+slugify(REL[view[CUR]].t);
  else if(STATE==='survey')h+='/planche';
  else if(STATE==='photos'){
    h+='/images';
    /* La série ne s'écrit que s'il y en a plusieurs : sinon l'adresse porterait
       un choix qui n'en est pas un. */
    var sets=photoSets();
    if(sets.length>1&&sets[pSet])h+='/'+setSlug(sets[pSet]);
  }
  if(location.hash===h)return;
  hashLock=true;
  try{history.pushState(null,'',h);}catch(e){location.hash=h;}
  hashLock=false;
}
var pendingHash=null;
function readHash(first){
  var p=(location.hash||'').replace(/^#\/?/,'').split('/').filter(Boolean);
  var ai=0;
  for(var i=0;i<ARTISTS.length;i++)if(ARTISTS[i].slug===p[0])ai=i;
  if(ai!==A||first)buildArtist(ai,!!first);
  var what=p[1]||'';
  /* Au premier passage le splash tient encore l'écran : on met la destination
     de côté, `enter` l'appliquera. Sans quoi l'intro serait écrasée avant même
     d'avoir été vue. */
  if(first){pendingHash=what?[what,p[2]||'']:null;return;}
  applyHash(what,p[2]||'');
}
function applyHash(what,sub){
  if(what==='planche'){setState('survey');return;}
  if(what==='images'){
    openPhotos();
    var want=sub||'';
    if(want){
      var sets=photoSets();
      for(var j=0;j<sets.length;j++)if(setSlug(sets[j])===want){goSet(j);break;}
    }
    return;
  }
  if(what){
    for(var k=0;k<view.length;k++){
      if(slugify(REL[view[k]].t)===what){open(k);return;}
    }
  }
  setState('parcours');goTo(CUR,false);
}
addEventListener('popstate',function(){
  hashLock=true;readHash(false);hashLock=false;
});

/* ─────────── états ─────────── */
function setState(s){
  if(s!==STATE)sfx.view();
  STATE=s;
  document.documentElement.setAttribute('data-state',s);
  writeHash();
  $('#mParcours').setAttribute('aria-pressed',s==='parcours'?'true':'false');
  $('#mSurvey').setAttribute('aria-pressed',s==='survey'?'true':'false');
  $('#mPhotos').setAttribute('aria-pressed',s==='photos'?'true':'false');
  $('#photos').setAttribute('aria-hidden',s==='photos'?'false':'true');
  $('#survey').setAttribute('aria-hidden',s==='survey'?'false':'true');
  $('#focus').setAttribute('aria-hidden',s==='focus'?'false':'true');
  $('#amenus').setAttribute('aria-hidden',s==='menu'?'false':'true');
  /* En quittant les images, le compteur revient aux parutions. */
  if(s!=='photos'&&view.length)hud();
  if(s==='parcours')try{field.focus({preventScroll:true});}catch(e){}
}
function open(p){
  if(!view.length)return;
  CUR=Math.max(0,Math.min(view.length-1,p));
  var i=view[CUR],from=faces[i];
  var vis=STATE==='parcours'&&from&&from.getBoundingClientRect().width>0;
  hud();
  var fc=$('#focus');
  fc.classList.toggle('flipping',!!vis);
  var plate=fiche(i);
  setState('focus');
  writeHash();
  if(vis)requestAnimationFrame(function(){
    flipTo(from,plate,function(){fc.classList.remove('flipping');});
  });
}
function close(){setState('parcours');goTo(CUR,false);}

/* ─────────── Cover Flow ─────────── */
var field=$('#field'),raf=0;
function render(){
  raf=0;if(!view.length)return;
  var mid=field.scrollLeft+field.clientWidth/2,cw=slots[view[0]].offsetWidth||220;
  var best=0,bd=Infinity;
  for(var p=0;p<view.length;p++){
    var i=view[p],s=slots[i];
    var c=s.offsetLeft+s.offsetWidth/2,off=(c-mid)/cw,ao=Math.abs(off),sg=off<0?-1:1;
    if(ao<bd){bd=ao;best=p;}
    /* Les fentes sont posées en ligne, à 1,06 largeur de pochette l'une de
       l'autre. Laissées là, les voisines défilent en file — elles s'écartaient de
       0,84 largeur par rang alors qu'à 58° elles n'en projettent que 0,53, si
       bien qu'elles ne se recouvraient jamais. C'est un carrousel, pas un Cover
       Flow : sa signature est la **pile** sur les côtés.

       On vise donc une position qui **sature** : franche pour la première
       voisine, puis de plus en plus serrée — 0,83 · 1,05 · 1,19 · 1,32 largeur du
       centre. À partir du troisième rang, les pochettes ne s'écartent plus que
       d'un huitième de leur largeur : elles s'empilent. `translateX` ne porte que
       l'écart entre cette position visée et celle où la mise en page les avait
       mises. */
    var vise=0.80*Math.tanh(ao/0.75)+0.13*ao;
    var tx=sg*vise*cw-(off*1.06*cw);
    /* La profondeur et l'échelle saturent aussi : sans quoi le fond de la pile
       partirait à l'infini et finirait invisible. */
    var tz=-cw*0.44*Math.tanh(ao/0.8);
    var sc=1-0.16*Math.tanh(ao/0.9);
    lifts[i].style.transform='translateX('+tx.toFixed(1)+'px) translateZ('
      +tz.toFixed(1)+'px) rotateY('+(-sg*58*Math.min(1,ao/0.85)).toFixed(1)
      +'deg) scale('+sc.toFixed(3)+')';
    /* Le fond de la pile s'assombrit, comme une rangée de disques dans un bac :
       c'est ce qui donne sa profondeur au tas, plus que l'échelle. */
    faces[i].style.filter='brightness('+(1-Math.min(ao*0.13,0.42)).toFixed(3)+')'
      +(ao>0.7?' blur('+Math.min((ao-0.7)*1.6,3.2).toFixed(2)+'px)':'');
    s.style.zIndex=String(200-Math.round(ao*10));
    /* La pile tenant dans une largeur et demie, tout le catalogue peut y figurer :
       on ne masque que la queue lointaine, où plus rien ne se distingue. */
    s.style.opacity=ao>7?'0':(ao>5.5?(1-(ao-5.5)/1.5).toFixed(2):'1');
  }
  if(best!==CUR){CUR=best;hud();}
}
function schedule(){if(!raf)raf=requestAnimationFrame(render);}
field.addEventListener('scroll',schedule,{passive:true});
addEventListener('resize',function(){sizeEdges();schedule();});
addEventListener('load',function(){sizeEdges();goTo(CUR,false);schedule();});

function goTo(p,smooth){
  if(!view.length)return;
  p=Math.max(0,Math.min(view.length-1,p));
  if(p!==CUR)sfx.step();
  var s=slots[view[p]];
  field.scrollTo({left:s.offsetLeft-(field.clientWidth-s.offsetWidth)/2,
    behavior:(smooth===false||reduce)?'auto':'smooth'});
}
var drag=null;
field.addEventListener('pointerdown',function(e){
  if(e.pointerType==='touch')return;
  drag={x:e.clientX,l:field.scrollLeft,moved:false};
});
field.addEventListener('pointermove',function(e){
  if(!drag)return;
  var dx=e.clientX-drag.x;
  if(Math.abs(dx)>3)drag.moved=true;
  field.scrollLeft=drag.l-dx;
});
function endDrag(){if(drag&&drag.moved)goTo(CUR);drag=null;}
['pointerup','pointercancel','pointerleave'].forEach(function(ev){field.addEventListener(ev,endDrag);});
field.addEventListener('click',function(e){
  var s=e.target.closest('.slot');if(!s||(drag&&drag.moved))return;
  var p=view.indexOf(parseInt(s.getAttribute('data-i'),10));
  if(p<0)return;
  if(p===CUR)open(p); else goTo(p);
});
field.addEventListener('wheel',function(e){
  e.preventDefault();
  field.scrollLeft+=(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY);
},{passive:false});




/* ─────────── images : une hélice de cartes ─────────── */
var pIdx=0,pBuilt=false,pDrag=null,pMoved=false;

/* Une liste d'adresses toute simple vaut série unique : le champ `photos` d'un
   artiste peut rester tel qu'il était avant que les séries n'existent. */
var pSet=0;
function photoSets(){
  var ph=ARTISTS[A].photos||[];
  if(!ph.length)return [];
  if(typeof ph[0]==='string')return [{t:'Images',d:'',p:ph}];
  return ph;
}
function photoList(){
  var sets=photoSets();
  return (sets[pSet]||sets[0]||{p:[]}).p||[];
}
function setSlug(x){return slugify(x.t||'images');}

/* Le sélecteur prend la place laissée libre par la réglette, qui n'a rien à dire
   ici. Il ne s'affiche qu'à partir de deux séries : une seule n'est pas un choix. */
function paintSets(){
  var sets=photoSets(),box=$('#psets');
  box.innerHTML=sets.length<2?'':sets.map(function(x,i){
    return '<button type="button" data-s="'+i+'" aria-pressed="'+(i===pSet?'true':'false')+'">'
      +esc(x.t||('Série '+(i+1)))+(x.d?'<sup>'+esc(String(x.p.length))+'</sup>':'')+'</button>';
  }).join('');
}
function goSet(i){
  var sets=photoSets();
  if(i<0||i>=sets.length||i===pSet)return;
  pSet=i;
  buildRing();
  pPos=pAim=0;pLast=-1;pVel=0;pPrev=0;
  paintSets();placeRing();pSync();writeHash();
}

function buildPhotos(){
  var a=ARTISTS[A];
  pSet=0;
  var list=photoList();
  pIdx=0;pBuilt=true;pPos=pAim=0;pLast=-1;
  $('#pbig').textContent=a.name;
  var empty=$('#pempty');
  if(!list.length){
    $('#pstage').innerHTML='';$('#psets').innerHTML='';
    $('#pPrev').hidden=$('#pNext').hidden=true;
    empty.hidden=false;
    empty.innerHTML='<b>Aucune image pour '+esc(a.name)+'</b>'
      +'Déposez vos fichiers dans <code>assets/photos/'+esc(a.slug)+'/</code>, '
      +'puis listez-les dans le champ <code>photos</code> de cet artiste, en haut de '
      +'<code>script.js</code>.';
    return;
  }
  empty.hidden=true;
  $('#pPrev').hidden=$('#pNext').hidden=false;
  paintSets();
  buildRing();
  showPhoto(0);
}

/* Les photos sont posées sur une **hélice** : chaque carte tourne d'un cran
   autour d'un axe vertical et monte d'autant. La rotation seule aurait donné un
   anneau plat, la montée seule une pile ; ensemble elles font la diagonale du
   modèle, tout en gardant la carte de devant d'aplomb — ce qu'un anneau incliné
   n'aurait pas fait, puisqu'il aurait penché toutes les cartes avec lui.

   Les cartes ne sont pas redessinées à chaque pas : elles existent une fois et
   ne changent que de transformée, si bien que la transition CSS les fait glisser
   le long de l'hélice au lieu de les faire réapparaître ailleurs. */
/* Les nombres qui font l'allure. Ils sont sans unité — en côtés de carte —
   parce que c'est la carte qui s'adapte à la fenêtre, et non l'inverse :
   P_STEP  l'angle d'un cran, en degrés ;
   P_RISE  la montée par cran — c'est elle qui fait la pente ;
   P_R     le rayon — il règle le recouvrement ;
   P_WIN   combien de cartes de chaque côté restent posées. */
var P_STEP=22, P_WIN=5, P_R=2.8, P_RISE=0.26, P_MAXS=340;
var pCards=[], pAR={}, pARmin=1, pARmax=1;

/* La position est un **nombre à virgule**, pas un rang. L'affichage avançait par
   crans, avec un verrou de 260 ms sur la molette : rien ne pouvait y être fluide.
   Ici la molette et le glisser déplacent la position continûment, et l'hélice est
   redessinée à chaque image ; les flèches et les chevrons visent un entier, vers
   lequel la position glisse. Il n'y a donc plus aucune transition CSS sur les
   cartes — elle se battrait avec la boucle. */
var pPos=0, pAim=0, pRaf=0, pLast=0, pSnd=0;
var pT0=0, pPrev=0, pVel=0;
function pTick(now){
  pRaf=0;
  /* L'approche est calée sur le **temps écoulé**, pas sur le nombre d'images :
     à 120 Hz, un pas par image irait deux fois plus vite qu'à 60. */
  var dt=pT0?Math.min(64,now-pT0):16.7;pT0=now;
  var d=pAim-pPos;
  var fin=Math.abs(d)<0.002;
  if(fin){
    /* La vitesse est mise à zéro **avant** la dernière passe : lissée, elle
       serait restée au-dessus du seuil, et le flou figé sur l'image d'arrêt
       puisque aucune image ne suit. */
    pPos=pAim;pT0=0;pPrev=pPos;pVel=0;
  }else{
    pPos+=d*(1-Math.pow(0.76,dt/16.7));
    pMeasureVel(dt);
  }
  placeRing();pSync();
  if(fin)return;
  pRaf=requestAnimationFrame(pTick);
}
/* La vitesse du moment, en crans par image, lissée pour que le flou ne
   scintille pas d'une image à l'autre. Elle sert de mesure au flou de filé :
   sans lui, une hélice qui traverse la fenêtre en trois images reste nette et le
   mouvement se lit comme une suite de sauts. */
function pMeasureVel(dt){
  var v=Math.abs(pPos-pPrev)*(16.7/Math.max(1,dt));
  pPrev=pPos;
  pVel=pVel*0.55+v*0.45;
  if(pVel<0.0015)pVel=0;
}
function pRun(){
  /* Mouvement réduit : on va droit au but. L'hélice est le système le plus
     remuant du site — boucle continue, filé, lancer — et c'est exactement ce
     qu'un réglage « moins d'animations » demande d'éteindre. */
  if(reduce){pPos=pAim;pVel=0;pPrev=pPos;placeRing();pSync();return;}
  if(!pRaf){pT0=0;pRaf=requestAnimationFrame(pTick);}
}
function pAimAt(t){pAim=t;pRun();}
function pSync(){
  var list=photoList(),len=list.length;
  if(!len)return;
  var k=((Math.round(pPos)%len)+len)%len;
  if(k===pLast)return;
  pLast=k;pIdx=k;
  /* Un glisser rapide traverse dix photos en une seconde : sans ce garde-temps,
     le son se mitraillerait. */
  var t=Date.now();
  if(t-pSnd>90){pSnd=t;sfx.step();}
  /* Le grand compteur à rouleaux sert aussi ici : il disait le rang d'une
     parution qu'on ne regarde plus. La réglette, elle, reste cachée — elle porte
     un calendrier de sorties, qui ne veut rien dire pour des photos. */
  if(STATE==='photos'){
    setCount(k+1,len);
    /* Le nom de la série et sa mention étaient renseignés sans être montrés
       nulle part. La ligne de métadonnées, libre ici, les porte. */
    var st=photoSets()[pSet];
    setLine(st?[st.t,st.d].filter(Boolean).join(' · '):'Images');
  }
}

function buildRing(){
  var list=photoList();
  pAR={};pARmin=1;pARmax=1;
  $('#pstage').innerHTML='<div class="pring" id="pring">'
    +list.map(function(_,k){
      return '<button class="pcard" type="button" tabindex="-1" data-k="'+k+'">'
        +'<img alt="" decoding="async"></button>';
    }).join('')+'</div>';
  pCards=[].slice.call(document.querySelectorAll('#pring .pcard'));
}

/* Les proportions sont mesurées sur l'image, à l'écart du document : une carte
   qui découvrirait son format en entrant dans la fenêtre changerait de taille
   sous les yeux. On mesure donc plus large que ce qu'on montre. */
function measure(k,url){
  if(pAR[k]!==undefined)return;
  pAR[k]=null;
  var im=new Image();
  im.onload=function(){
    var ar=(im.naturalWidth||1)/(im.naturalHeight||1);
    pAR[k]=Math.max(0.4,Math.min(2.6,ar));
    if(pAR[k]<pARmin)pARmin=pAR[k];
    if(pAR[k]>pARmax)pARmax=pAR[k];
    if(STATE==='photos')placeRing();
  };
  im.onerror=function(){pAR[k]=1;};
  im.src=url;
}

/* Normalisation par l'aire plutôt que par un côté : un paysage et un portrait
   du même nombre de pixels occupent la même place, sans que l'un écrase l'autre.
   w = S·√r et h = S/√r — leur produit vaut S² quel que soit le format. */
function cardBox(k,S){
  var r=pAR[k]||1,q=Math.sqrt(r);
  return [S*q,S/q];
}

/* Le fondu s'achève franchement au dernier cran, au lieu de s'arrêter à 6 %.
   Deux cartes traînaient ainsi aux extrémités, invisibles mais bien présentes
   dans le calcul de place : elles rapetissaient toute l'hélice pour rester dans
   le cadre. La chaîne est plus courte de deux crans et les photos un tiers plus
   grandes — on n'a rien perdu qu'on pouvait voir. */
function pOpacity(a){return 1-Math.min(Math.max(Math.abs(a)-40,0)/70,1);}

/* La carte est taillée pour que l'hélice tienne dans la fenêtre. Les débords se
   comptent en côtés de carte ; la perspective n'entre pas dans le calcul parce
   qu'elle ne fait que **rétrécir** — la carte de devant, seule à l'échelle 1,
   est déjà le pire cas.

   Deux corrections ont rendu les photos un quart plus grandes :

   - une carte tournée ne prend pas sa largeur entière à l'écran mais sa largeur
     **projetée**, `w·|cos a|`. À 88° elle ne montre qu'une tranche, et on lui
     réservait pourtant toute sa largeur. La hauteur, elle, ne bouge pas : une
     rotation autour de l'axe vertical ne raccourcit rien verticalement ;
   - les cartes trop pâles pour être vues ne comptent plus. Aux deux bouts de la
     chaîne, l'opacité tombe sous 8 % ; ces cartes-là rapetissaient toute
     l'hélice pour rester dans le cadre alors que personne ne les distingue. Si
     elles débordent maintenant, nul ne le verra. */
function fitCard(W,H,win){
  var ex=0,ey=0,qw=Math.sqrt(pARmax),qh=1/Math.sqrt(pARmin);
  for(var n=-win;n<=win;n++){
    var a=n*P_STEP,r=a*Math.PI/180;
    if(pOpacity(a)<0.15)continue;
    ex=Math.max(ex,Math.abs(P_R*Math.sin(r))+0.5*qw*Math.abs(Math.cos(r)));
    ey=Math.max(ey,Math.abs(n*P_RISE)+0.5*qh);
  }
  /* Un peu plus de marge en hauteur qu'en largeur : le compteur et le nom de
     l'artiste occupent le haut et le bas. */
  if(!ex||!ey)return 120;
  /* Pas de plancher au-dessus de ce que la fenêtre permet : mieux vaut de
     petites cartes qu'une hélice qui déborde. */
  return Math.max(40,Math.min(P_MAXS,(W*0.97)/(2*ex),(H*0.90)/(2*ey)));
}

function placeRing(){
  var list=photoList(),len=list.length;
  if(!pCards.length||!len)return;
  var st=$('#pstage');
  /* La fenêtre boucle : en début et en fin de liste, elle était tronquée d'un
     côté et l'hélice partait de travers. Elle ne peut pas dépasser la moitié de
     la liste, sinon une même photo devrait tenir deux places à la fois. */
  /* Sur une fenêtre étroite, une chaîne plus courte : neuf cartes de chaque
     côté n'y laisseraient que des miettes. */
  var win=Math.min(P_WIN,Math.floor((len-1)/2),
    (st.clientWidth||innerWidth)<700?4:P_WIN);
  var S=fitCard(st.clientWidth||innerWidth,st.clientHeight||innerHeight,win);
  var R=(S*P_R).toFixed(1),rise=S*P_RISE,seen={};
  /* Le rang de référence est l'entier le plus proche ; l'écart à la position
     réelle décale toute la chaîne d'une fraction de cran. C'est ce reste qui
     rend le mouvement continu au lieu de le faire sauter de place en place. */
  var base=Math.round(pPos),frac=pPos-base;
  /* Le filé est proportionnel à la vitesse et borné : au-delà, on ne lit plus
     rien. Il est écrit une fois par image, en pixels, d'après la taille du
     moment — un flou en valeur fixe serait énorme sur petite carte. */
  var blur=(pVel&&!reduce)?Math.min(S*0.075,pVel*S*0.30):0;
  blur=blur>0.4?blur.toFixed(1):0;
  /* On mesure cinq crans plus loin qu'on ne montre. */
  for(var m=-win-5;m<=win+5;m++){
    var q=((base+m)%len+len)%len;measure(q,list[q]);
  }
  for(var i=-win;i<=win;i++){
    var k=((base+i)%len+len)%len;
    if(seen[k])continue;
    seen[k]=1;
    var n=i-frac;
    var el=pCards[k],a=(n*P_STEP).toFixed(2),aa=Math.abs(n*P_STEP),box=cardBox(k,S);
    el.hidden=false;
    var im=el.firstChild;
    if(!im.getAttribute('src'))im.src=list[k];
    el.style.setProperty('--w',box[0].toFixed(1)+'px');
    el.style.setProperty('--h',box[1].toFixed(1)+'px');
    el.style.transform='translateY('+(-n*rise).toFixed(1)+'px) rotateY('+a
      +'deg) translateZ('+R+'px)';
    var op=pOpacity(aa);
    /* Les cartes qu'on ne voit pas ne se floutent pas : autant d'images à ne
       pas recalculer à chaque passe. */
    el.style.filter='brightness('+(1-Math.min(aa/105,0.74)).toFixed(3)+')'
      +((blur&&op>0.1)?' blur('+blur+'px)':'');
    el.style.opacity=op.toFixed(3);
    el.style.zIndex=String(200-Math.round(aa));
    var devant=(i===0);
    el.classList.toggle('front',devant);
    /* Un seul point d'entrée au clavier : soixante-treize cartes dans l'ordre de
       tabulation seraient une traversée du désert. On atteint celle de devant,
       les flèches font le reste, et « entrée » l'ouvre en grand. */
    el.tabIndex=devant?0:-1;
    el.setAttribute('aria-label',
      devant?('Photo '+(k+1)+' sur '+len+', ouvrir en grand')
            :('Aller à la photo '+(k+1)+' sur '+len));
  }
  for(var j=0;j<pCards.length;j++)if(!seen[j])pCards[j].hidden=true;
}

function pStep(d){pAimAt(Math.round(pAim)+d);}
function showPhoto(k){
  var list=photoList();
  if(!list.length)return;
  pPos=pAim=k;pLast=-1;pSync();placeRing();
}
function openPhotos(){
  if(!pBuilt)buildPhotos();
  setState('photos');
  pLast=-1;pSync();
}
(function(){
  var st=$('#pstage');

  /* La carte de devant s'ouvre en grand ; une carte de côté vient au centre par
     le plus court chemin — l'hélice boucle, aller à la 2 depuis la 72 ne doit
     pas dérouler soixante-dix crans. */
  st.addEventListener('click',function(e){
    var c=e.target.closest('.pcard');
    /* `pointerup` vide `pDrag` avant que le clic n'arrive : sans ce drapeau
       gardé à part, un glisser se terminerait par l'ouverture d'une photo. */
    if(!c||pMoved)return;
    var list=photoList(),len=list.length;
    var k=parseInt(c.getAttribute('data-k'),10);
    if(k===pIdx){loupeOpen(list[k],list[k],pad(k+1)+' / '+pad(len));return;}
    var base=Math.round(pAim),cur=((base%len)+len)%len,d=k-cur;
    if(d>len/2)d-=len; else if(d<-len/2)d+=len;
    pAimAt(base+d);
  });

  $('#pPrev').addEventListener('click',function(){pStep(-1);});
  $('#pNext').addEventListener('click',function(){pStep(1);});

  /* Le glisser mène la position à la main, sans amortissement : le doigt et
     l'hélice doivent rester ensemble. Un cran par tiers de fenêtre parcouru. */
  st.addEventListener('pointerdown',function(e){
    pMoved=false;
    pDrag={x:e.clientX,from:pAim,lx:e.clientX,lt:Date.now(),v:0};
    try{st.setPointerCapture(e.pointerId);}catch(err){}
  });
  st.addEventListener('pointermove',function(e){
    if(!pDrag)return;
    var dx=e.clientX-pDrag.x;
    if(Math.abs(dx)>6)pMoved=true;
    if(!pMoved)return;
    var unit=(st.clientWidth||900)/3;
    /* La vitesse du geste, en crans par milliseconde, lissée sur les derniers
       mouvements — un seul écart de pointeur est trop bruité pour servir. */
    var now=Date.now(),dtm=Math.max(8,now-pDrag.lt);
    pDrag.v=pDrag.v*0.7+(-(e.clientX-pDrag.lx)/unit/dtm)*0.3;
    pDrag.lx=e.clientX;pDrag.lt=now;
    pPos=pAim=pDrag.from-dx/unit;
    pMeasureVel(16.7);
    placeRing();pSync();
  });
  ['pointerup','pointercancel','pointerleave'].forEach(function(ev){
    st.addEventListener(ev,function(){
      if(pDrag&&pMoved){
        /* Le lancer prolonge le geste au lieu de le couper net : la position
           part là où la vitesse la portait, puis se pose sur le cran le plus
           proche. Sans cela, relâcher en plein élan arrêtait tout d'un coup.
           Sous mouvement réduit, on ne lance pas : on se pose où l'on est. */
        var jet=reduce?0:Math.max(-4,Math.min(4,pDrag.v*170));
        pAimAt(Math.round(pAim+jet));
      }
      pDrag=null;
    });
  });

  /* La molette déplace la cible plutôt qu'un rang : un geste continu donne un
     mouvement continu. Le repos rappelle la position sur le cran le plus proche,
     sinon l'hélice resterait entre deux photos. */
  var settle=0;
  $('#photos').addEventListener('wheel',function(e){
    e.preventDefault();
    var d=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;
    pAim+=d/260;
    pRun();
    clearTimeout(settle);
    settle=setTimeout(function(){pAimAt(Math.round(pAim));},130);
  },{passive:false});

  addEventListener('resize',function(){
    if(STATE==='photos'&&photoList().length)placeRing();
  });
})();

/* ─────────── liste déroulante des artistes ─────────── */
var amenu=$('#amenu'),brandBtn=$('#brandBtn');
function amenuPaint(){
  amenu.innerHTML='<p class="ah">Artistes</p>'+ARTISTS.map(function(a,i){
    return '<button type="button" role="menuitemradio" data-a="'+i+'" aria-checked="'
      +(i===A?'true':'false')+'"><span>'+esc(a.name)+'</span>'
      +'<span class="n">'+a.rel.length+'</span></button>';
  }).join('');
  [].slice.call(amenu.querySelectorAll('button')).forEach(function(b,k){
    b.style.setProperty('--d',(k*45)+'ms');
  });
}
function amenuOpen(on){
  amenu.classList.toggle('on',on);
  brandBtn.setAttribute('aria-expanded',on?'true':'false');
}
brandBtn.addEventListener('click',function(e){
  e.stopPropagation();
  amenuOpen(!amenu.classList.contains('on'));
});
amenu.addEventListener('click',function(e){
  e.stopPropagation();
  var b=e.target.closest('button[data-a]');if(!b)return;
  var i=parseInt(b.getAttribute('data-a'),10);
  amenuOpen(false);
  if(i!==A){setState('parcours');buildArtist(i,false);}
});
document.addEventListener('click',function(){amenuOpen(false);optOpen(false);});

/* ─────────── le tiroir d'options ───────────
   La barre portait sept commandes de front : les trois vues, deux options
   d'affichage, le thème et le son. Les vues restent en vue ; le reste passe
   dans un tiroir, ce qui rend la barre lisible et laisse de la place pour ce
   qu'on y ajoutera. Un clic sur une option ne le referme pas — on en règle
   souvent deux à la suite. */
var optmenu=$('#optmenu'),optBtn=$('#mOpt');
function optOpen(on){
  optmenu.classList.toggle('on',on);
  optBtn.setAttribute('aria-expanded',on?'true':'false');
}
optBtn.addEventListener('click',function(e){
  e.stopPropagation();
  optOpen(!optmenu.classList.contains('on'));
});
optmenu.addEventListener('click',function(e){e.stopPropagation();});

/* ─────────── commandes ─────────── */
$('#grid').addEventListener('click',function(e){
  var b=e.target.closest('.cell');if(!b)return;
  var p=view.indexOf(parseInt(b.getAttribute('data-i'),10));
  if(p>=0)open(p);
});
$('#scrub').addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  goTo(parseInt(b.getAttribute('data-p'),10));
});
$('#prev').addEventListener('click',function(){
  if(STATE==='photos')pStep(-1); else if(STATE==='focus')open(CUR-1); else goTo(CUR-1);});
$('#next').addEventListener('click',function(){
  if(STATE==='photos')pStep(1); else if(STATE==='focus')open(CUR+1); else goTo(CUR+1);});
$('#back').addEventListener('click',close);
/* La fiche est reconstruite à chaque ouverture : on écoute le conteneur. */
$('#focus').addEventListener('click',function(e){
  if(e.target.closest('.fclose')){close();return;}
  if(e.target.closest('.plate')){loupe(view[CUR]);return;}
  var t=e.target.closest('.tp');
  if(t){
    PL.list=SHOWN.list;PL.rel=SHOWN.rel;PL.key=SHOWN.key;
    plPlay(parseInt(t.getAttribute('data-k'),10));
  }
});
$('#mParcours').addEventListener('click',function(){setState('parcours');goTo(CUR,false);});
$('#mSurvey').addEventListener('click',function(){setState(STATE==='survey'?'parcours':'survey');});
$('#mPhotos').addEventListener('click',function(){
  if(STATE==='photos')setState('parcours'); else openPhotos();
});
/* La liste appariée : le Cover Flow montre, elle nomme. Le choix est retenu —
   c'est une façon de naviguer, pas un coup d'œil. */
var LIST=false;
try{LIST=localStorage.getItem('wte-list')==='1';}catch(e){}
function applyList(){
  document.documentElement.setAttribute('data-list',LIST?'on':'off');
  $('#mList').setAttribute('aria-pressed',LIST?'true':'false');
  try{localStorage.setItem('wte-list',LIST?'1':'0');}catch(e){}
  /* Le champ change de largeur en glissant, et non plus d'un coup. Mesurer une
     seule fois donnerait un centrage faux — c'est le piège du vol FLIP. On
     recalcule donc **à chaque image** le temps du glissement : marges de bout et
     position de la pochette centrale suivent la largeur réelle du moment, et les
     pochettes prennent leur place au lieu de s'y téléporter. */
  /* Sous mouvement réduit la transition CSS dure une milliseconde : une seule
     passe suffit, la boucle n'aurait rien à suivre. */
  var fin=Date.now()+(reduce?0:460);
  (function suivre(){
    sizeEdges();goTo(CUR,false);render();
    if(Date.now()<fin)requestAnimationFrame(suivre);
  })();
  hud();
}
$('#mList').addEventListener('click',function(){LIST=!LIST;applyList();});
try{PIX=localStorage.getItem('wte-pix')==='1';}catch(e){}
$('#mPix').addEventListener('click',function(){PIX=!PIX;applyPix();});
$('#rlist').addEventListener('click',function(e){
  var b=e.target.closest('button[data-p]');
  if(b)goTo(parseInt(b.getAttribute('data-p'),10));
});

$('#psets').addEventListener('click',function(e){
  var b=e.target.closest('button');
  if(b)goSet(parseInt(b.getAttribute('data-s'),10));
});
$('#filters').addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  /* Filtrer depuis une fiche la laisserait parler d'une liste qu'on ne voit plus
     — son rang compterait dans l'ancienne. Depuis les images, le filtre ne porte
     sur rien de visible. Dans les deux cas on revient au parcours. */
  if(STATE==='focus'||STATE==='photos')setState('parcours');
  FILTER=b.getAttribute('data-f');
  [].slice.call(this.querySelectorAll('button')).forEach(function(x){
    x.setAttribute('aria-pressed',x===b?'true':'false');
  });
  CUR=0;rebuild();hud();goTo(0,false);requestAnimationFrame(render);
});

/* thème : auto → clair → sombre */
/* L'ordre suit la course de l'interrupteur, de gauche à droite : le système
   d'abord, puis les deux verrouillages. Le repli reste « clair », comme avant. */
var tm=['light','dark'],ti=0,tn={light:'clair',dark:'sombre'};
try{var st=localStorage.getItem('wte-theme');if(st&&tm.indexOf(st)>=0)ti=tm.indexOf(st);}catch(e){}
function applyTheme(){
  var v=tm[ti],b=$('#mTheme');
  document.documentElement.setAttribute('data-theme',v);
  b.setAttribute('data-t',v);
  b.setAttribute('aria-pressed',v==='dark'?'true':'false');
  b.setAttribute('aria-label','Thème sombre');
  $('#mThemeL').textContent=tn[v];
  try{localStorage.setItem('wte-theme',v);}catch(e){}
}
$('#mTheme').addEventListener('click',function(){ti=(ti+1)%tm.length;applyTheme();});
applyTheme();
applyList();
applyPix();
applyGlass();
applyDevice(false);

document.addEventListener('keydown',function(e){
  if(STATE==='intro'){enter();return;}
  var k=e.key;
  if(k==='ArrowRight'){e.preventDefault();
    if(STATE==='photos')pStep(1); else if(STATE==='focus')open(CUR+1); else goTo(CUR+1);}
  else if(k==='ArrowLeft'){e.preventDefault();
    if(STATE==='photos')pStep(-1); else if(STATE==='focus')open(CUR-1); else goTo(CUR-1);}
  else if(k==='Enter'&&STATE==='parcours'){e.preventDefault();open(CUR);}
  else if(k==='Escape'){e.preventDefault();
    if(!$('#tour').hidden)tourEnd();
    else if(!$('#about').hidden)aboutOpen(false);
    else if(!$('#loupe').hidden)loupeOff();
    else if(amenu.classList.contains('on'))amenuOpen(false); else close();}
  else if(k==='g'||k==='G'){e.preventDefault();setState(STATE==='survey'?'parcours':'survey');}
  else if(k==='l'||k==='L'){e.preventDefault();LIST=!LIST;applyList();}
  else if(k==='p'||k==='P'){e.preventDefault();PIX=!PIX;applyPix();}
  else if(k==='Home'){e.preventDefault();goTo(0);}
  else if(k==='End'){e.preventDefault();goTo(view.length-1);}
});

/* ─────────── splash : le collage ───────────
   Repris d'une animation de référence : des images arrivent une à une, se
   chevauchent en une composition dense, puis s'en vont dans l'ordre inverse.
   Ici ce sont les pochettes — le splash montre donc ce que le site contient,
   au lieu d'une image sans rapport.

   Il puise dans les versions **basse définition**, locales et de six kilo-octets :
   le collage se monte sans attendre l'archive, ce qui est tout l'intérêt d'un
   écran d'attente. Les places sont posées à la main, jamais tirées au hasard —
   une composition se compose. */
var COLL=[[30,4,30],[6,24,34],[44,26,36],[58,2,24],[24,44,32],[10,58,30],[48,58,34]];

function collage(){
  var box=$('#coll');if(!box)return;
  /* L'artiste est celui que l'adresse a désigné, pas le premier du tableau : un
     lien vers CORTIS ne doit pas s'ouvrir sur les pochettes de wave to earth. */
  var a=ARTISTS[A],rel=a.rel,vus={},srcs=[];
  for(var i=0;i<rel.length&&srcs.length<COLL.length;i++){
    var k=rel[i].rid||rel[i].id;
    if(vus[k])continue;vus[k]=1;
    srcs.push((typeof PIXMAP!=='undefined'&&PIXMAP[k])||srcOf(rel[i]));
  }
  if(!srcs.length)return;
  box.innerHTML=srcs.map(function(u,i){
    var p=COLL[i];
    return '<i style="left:'+p[0]+'%;top:'+p[1]+'%;width:'+p[2]+'%;'
      +'--d:'+(i*110)+'ms;--od:'+((srcs.length-1-i)*70)+'ms">'
      +'<img src="'+esc(u)+'" alt=""></i>';
  }).join('');
  /* Le démontage part quand le montage est fini : sept cartes à 110 ms, puis un
     temps d'arrêt pour qu'on voie la composition entière. */
  setTimeout(function(){box.classList.add('out');},srcs.length*110+380);
}

/* ─────────── sons ───────────
   Entièrement synthétisés à l'exécution : aucun fichier audio n'est chargé.
   Rien ne sonne avant le premier geste — les navigateurs l'exigent, et
   l'introduction reste silencieuse. */
var armedSnd=false;
var sfx=(function(){
  var on=true,AC=null,last=0;
  try{if(localStorage.getItem('wte-snd')==='0')on=false;}catch(e){}
  function ctx(){
    if(!AC){try{AC=new (window.AudioContext||window.webkitAudioContext)();}catch(e){return null;}}
    if(AC.state==='suspended'){var r=AC.resume();if(r&&r.catch)r.catch(function(){});}
    return AC;
  }
  function tone(f,dur,vol,type,to){
    if(!on||!armedSnd)return;
    var c=ctx();if(!c)return;
    var t0=c.currentTime,o=c.createOscillator(),g=c.createGain();
    o.type=type||'sine';
    o.frequency.setValueAtTime(f,t0);
    if(to)o.frequency.exponentialRampToValueAtTime(to,t0+dur);
    g.gain.setValueAtTime(0.0001,t0);
    g.gain.exponentialRampToValueAtTime(vol,t0+0.006);
    g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
    o.connect(g);g.connect(c.destination);
    o.start(t0);o.stop(t0+dur+0.04);
  }
  return {
    hover:function(){var n=Date.now();if(n-last<70)return;last=n;tone(2400,0.030,0.010,'sine');},
    click:function(){tone(720,0.055,0.045,'triangle');tone(1480,0.032,0.014,'sine');},
    step:function(){tone(1250,0.042,0.020,'sine',980);},
    view:function(){tone(430,0.17,0.030,'sine',780);},
    set:function(v){on=v;try{localStorage.setItem('wte-snd',v?'1':'0');}catch(e){}},
    on:function(){return on;}
  };
})();
(function(){
  function arm(){armedSnd=true;}
  addEventListener('pointerdown',arm,{once:true});
  addEventListener('keydown',arm,{once:true});
  var b=$('#mSnd');
  /* L'état s'écrit dans un enfant et non sur le bouton : celui-ci porte
     maintenant son intitulé, qu'un `textContent` effacerait. */
  function paintSnd(){
    b.setAttribute('aria-pressed',sfx.on()?'true':'false');
    $('#mSndL').textContent=sfx.on()?'activé':'coupé';
  }
  paintSnd();
  b.addEventListener('click',function(){sfx.set(!sfx.on());paintSnd();});
  document.addEventListener('click',function(e){
    if(e.target&&e.target.closest&&e.target.closest('button,a'))sfx.click();
  },true);
})();

/* ─────────── curseur ─────────── */
(function(){
  if(window.matchMedia&&window.matchMedia('(pointer:coarse)').matches)return;
  var cur=$('#cur'),root=document.documentElement;
  var tx=0,ty=0,x=0,y=0,raf=0,shown=false;
  var HOT='button,a,input,[role="option"]';
  var FRAME='.slot,.cell,.pstage';
  function loop(){
    raf=0;
    var k=reduce?1:0.30;
    x+=(tx-x)*k;y+=(ty-y)*k;
    cur.style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0)';
    if(Math.abs(tx-x)>0.3||Math.abs(ty-y)>0.3)raf=requestAnimationFrame(loop);
  }
  addEventListener('pointermove',function(e){
    if(e.pointerType==='touch')return;
    tx=e.clientX;ty=e.clientY;
    if(!shown){shown=true;x=tx;y=ty;root.classList.add('has-cur');}
    if(!raf)raf=requestAnimationFrame(loop);
  },{passive:true});
  addEventListener('pointerover',function(e){
    var el=e.target&&e.target.closest?e.target:null;
    var fr=el&&el.closest?el.closest(FRAME):null;
    var hot=el&&el.closest?el.closest(HOT):null;
    cur.classList.toggle('frame',!!fr);
    cur.classList.toggle('hot',!fr&&!!hot);
    if(fr||hot)sfx.hover();
  },{passive:true});
  addEventListener('pointerdown',function(){cur.classList.add('press');},{passive:true});
  addEventListener('pointerup',function(){cur.classList.remove('press');},{passive:true});
  document.addEventListener('mouseleave',function(){root.classList.remove('has-cur');shown=false;});
  document.addEventListener('mouseenter',function(){if(tx||ty)root.classList.add('has-cur');});
})();

/* ─────────── entrée ─────────── */
function enter(){
  if(STATE!=='intro')return;
  $('#splash').classList.add('done');
  setState('parcours');
  $('#rail').classList.add('is-live');
  var hud=document.querySelector('.hud');
  [].slice.call(hud.querySelectorAll('.top>*,.bot>*')).forEach(function(el,k){
    el.style.setProperty('--d',(120+k*90)+'ms');
  });
  hud.classList.add('lit');
  goTo(0,false);requestAnimationFrame(render);
  if(pendingHash){var w=pendingHash;pendingHash=null;applyHash(w[0],w[1]);}
  /* À la première venue seulement, et après l'entrée : la visite désigne des
     commandes que le splash recouvrait encore. */
  var vu=true;
  try{vu=localStorage.getItem('wte-tour')==='1';}catch(e){}
  if(!vu)setTimeout(function(){if(STATE==='parcours')tourShow(0);},1100);
  if(window.requestIdleCallback)requestIdleCallback(prefetchOthers,{timeout:2500});
  else setTimeout(prefetchOthers,1200);
  var h=$('#hint');
  if(h){h.classList.add('on');setTimeout(function(){h.classList.remove('on');},6500);}
}
/* filet de sécurité : on n'attend jamais plus de quatre secondes */
setTimeout(ready,4000);
$('#splash').addEventListener('click',enter);

/* ─────────── départ ─────────── */
document.documentElement.setAttribute('data-state','intro');
/* L'adresse a le dernier mot au démarrage : ouvrir un lien partagé doit mener
   là où il pointe, pas au parcours du premier artiste. */
readHash(true);
collage();

})();
