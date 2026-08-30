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
  photos:['assets/photos/cortis/01.jpg','assets/photos/cortis/02.jpg','assets/photos/cortis/03.jpg','assets/photos/cortis/04.jpg','assets/photos/cortis/05.jpg','assets/photos/cortis/06.jpg','assets/photos/cortis/07.jpg','assets/photos/cortis/08.jpg','assets/photos/cortis/09.jpg','assets/photos/cortis/10.jpg','assets/photos/cortis/11.jpg','assets/photos/cortis/12.jpg','assets/photos/cortis/13.jpg','assets/photos/cortis/14.jpg','assets/photos/cortis/15.jpg','assets/photos/cortis/16.jpg','assets/photos/cortis/17.jpg','assets/photos/cortis/18.jpg','assets/photos/cortis/19.jpg','assets/photos/cortis/20.jpg','assets/photos/cortis/21.jpg','assets/photos/cortis/22.jpg','assets/photos/cortis/23.jpg','assets/photos/cortis/24.jpg','assets/photos/cortis/25.jpg','assets/photos/cortis/26.jpg','assets/photos/cortis/27.jpg','assets/photos/cortis/28.jpg','assets/photos/cortis/29.jpg','assets/photos/cortis/30.jpg','assets/photos/cortis/31.jpg','assets/photos/cortis/32.jpg','assets/photos/cortis/33.jpg','assets/photos/cortis/34.jpg','assets/photos/cortis/35.jpg','assets/photos/cortis/36.jpg','assets/photos/cortis/37.jpg','assets/photos/cortis/38.jpg','assets/photos/cortis/39.jpg','assets/photos/cortis/40.jpg','assets/photos/cortis/41.jpg','assets/photos/cortis/42.jpg','assets/photos/cortis/43.jpg','assets/photos/cortis/44.jpg','assets/photos/cortis/45.jpg','assets/photos/cortis/46.jpg','assets/photos/cortis/47.jpg','assets/photos/cortis/48.jpg','assets/photos/cortis/49.jpg','assets/photos/cortis/50.jpg','assets/photos/cortis/51.jpg','assets/photos/cortis/52.jpg','assets/photos/cortis/53.jpg','assets/photos/cortis/54.jpg','assets/photos/cortis/55.jpg','assets/photos/cortis/56.jpg','assets/photos/cortis/57.jpg','assets/photos/cortis/58.jpg','assets/photos/cortis/59.jpg','assets/photos/cortis/60.jpg','assets/photos/cortis/61.jpg','assets/photos/cortis/62.jpg','assets/photos/cortis/63.jpg','assets/photos/cortis/64.jpg','assets/photos/cortis/65.jpg','assets/photos/cortis/66.jpg','assets/photos/cortis/67.jpg','assets/photos/cortis/68.jpg','assets/photos/cortis/69.jpg','assets/photos/cortis/70.jpg','assets/photos/cortis/71.jpg','assets/photos/cortis/72.jpg','assets/photos/cortis/73.jpg'],
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
function progress(){
  var bar=$('#barFill'),l=$('#lcdTxt');
  if(bar)bar.style.width=Math.min(100,done/Math.max(1,total)*100)+'%';
  if(l)l.textContent=done>=total?'PRÊT':(pad(done)+' / '+pad(total));
  if(done>=total)ready();
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
    img.src=srcOf(REL[i]);
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
  /* La réglette suit le calendrier, pas le rang : espacer les parutions
     régulièrement masquait le rythme réel du catalogue — trois singles en deux
     mois, puis un an de silence. Chaque trait est posé à sa date. */
  var ys=view.map(function(idx){return REL[idx].y||0;}).filter(Boolean);
  var y0=Math.min.apply(null,ys),y1=Math.max.apply(null,ys),span=Math.max(1,y1-y0);
  $('#scrub').innerHTML=view.map(function(idx,p){
    var f=((REL[idx].y||y0)-y0)/span;
    return '<button type="button" data-p="'+p+'" aria-current="false" style="--x:'
      +(f*100).toFixed(2)+'%" aria-label="'+esc(REL[idx].t)+', '+(REL[idx].y||'')+'"></button>';
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
  plate.appendChild(img);img.src=srcOf(r);
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
  /* L'enchaînement sans l'API de YouTube : une intégration accepte une suite
     d'identifiants en paramètre et passe d'elle-même à la suivante. On lui donne
     donc la fin du disque à partir d'ici — la piste jouée reste dans le chemin,
     `playlist` ne portant que ce qui vient après. */
  var suite=PL.list.slice(k+1).map(function(x){return x.yt;}).join(',');
  $('#plFrame').src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(t.yt)
    +'?autoplay=1&rel=0&modestbranding=1&playsinline=1'
    +(suite?'&playlist='+suite:'');
  $('#plTitle').textContent=t.t;
  $('#plNum').textContent=pad(k+1)+' / '+pad(PL.list.length)+' · '+PL.rel;
  /* Le lecteur avance seul : le compteur ne le sait pas, faute de retour de
     l'iframe. Il dit d'où l'on est parti, ce que la mention ci-dessous précise. */
  $('#plSuite').hidden=!suite;
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
  else if(STATE==='photos')h+='/images';
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
  if(first){pendingHash=what||null;return;}
  applyHash(what);
}
function applyHash(what){
  if(what==='planche'){setState('survey');return;}
  if(what==='images'){openPhotos();return;}
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
    var cl=Math.max(-4,Math.min(4,off));
    lifts[i].style.transform='translateX('+(-cl*cw*.22).toFixed(1)+'px) translateZ('
      +(-Math.min(ao,3)*cw*.34).toFixed(1)+'px) rotateY('+(-sg*58*Math.min(1,ao)).toFixed(1)
      +'deg) scale('+(1-Math.min(ao*.09,.30)).toFixed(3)+')';
    faces[i].style.filter=ao>0.6?'blur('+Math.min((ao-0.6)*2.4,4.5).toFixed(2)+'px)':'';
    s.style.zIndex=String(100-Math.round(ao*10));
    s.style.opacity=ao>4.2?'0':'1';
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

function photoList(){return ARTISTS[A].photos||[];}

function buildPhotos(){
  var a=ARTISTS[A],list=photoList();
  pIdx=0;pBuilt=true;pPos=pAim=0;pLast=-1;
  $('#pbig').textContent=a.name;
  var empty=$('#pempty');
  if(!list.length){
    $('#pstage').innerHTML='';$('#pcap').textContent='';
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
var pT0=0;
function pTick(now){
  pRaf=0;
  /* L'approche est calée sur le **temps écoulé**, pas sur le nombre d'images :
     à 120 Hz, un pas par image irait deux fois plus vite qu'à 60. */
  var dt=pT0?Math.min(64,now-pT0):16.7;pT0=now;
  var d=pAim-pPos;
  if(Math.abs(d)<0.002){pPos=pAim;pT0=0;placeRing();pSync();return;}
  pPos+=d*(1-Math.pow(0.76,dt/16.7));
  placeRing();pSync();
  pRaf=requestAnimationFrame(pTick);
}
function pRun(){if(!pRaf){pT0=0;pRaf=requestAnimationFrame(pTick);}}
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
  $('#pcap').textContent=pad(k+1)+' / '+pad(len);
}

function buildRing(){
  var list=photoList();
  pAR={};pARmin=1;pARmax=1;
  $('#pstage').innerHTML='<div class="pring" id="pring">'
    +list.map(function(_,k){
      return '<i class="pcard" data-k="'+k+'"><img alt="" decoding="async"></i>';
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
    el.style.filter='brightness('+(1-Math.min(aa/105,0.74)).toFixed(3)+')';
    el.style.opacity=pOpacity(aa).toFixed(3);
    el.style.zIndex=String(200-Math.round(aa));
    el.classList.toggle('front',i===0);
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
    pDrag={x:e.clientX,from:pAim};
    try{st.setPointerCapture(e.pointerId);}catch(err){}
  });
  st.addEventListener('pointermove',function(e){
    if(!pDrag)return;
    var dx=e.clientX-pDrag.x;
    if(Math.abs(dx)>6)pMoved=true;
    if(!pMoved)return;
    pPos=pAim=pDrag.from-dx/((st.clientWidth||900)/3);
    placeRing();pSync();
  });
  ['pointerup','pointercancel','pointerleave'].forEach(function(ev){
    st.addEventListener(ev,function(){
      /* Au relâcher, l'hélice se pose sur le cran le plus proche. */
      if(pDrag&&pMoved)pAimAt(Math.round(pAim));
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
document.addEventListener('click',function(){amenuOpen(false);});

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
$('#filters').addEventListener('click',function(e){
  var b=e.target.closest('button');if(!b)return;
  /* Filtrer depuis une fiche la laisserait parler d'une liste qu'on ne voit plus
     — son rang compterait dans l'ancienne. On revient au parcours. */
  if(STATE==='focus')setState('parcours');
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

document.addEventListener('keydown',function(e){
  if(STATE==='intro'){enter();return;}
  var k=e.key;
  if(k==='ArrowRight'){e.preventDefault();
    if(STATE==='photos')pStep(1); else if(STATE==='focus')open(CUR+1); else goTo(CUR+1);}
  else if(k==='ArrowLeft'){e.preventDefault();
    if(STATE==='photos')pStep(-1); else if(STATE==='focus')open(CUR-1); else goTo(CUR-1);}
  else if(k==='Enter'&&STATE==='parcours'){e.preventDefault();open(CUR);}
  else if(k==='Escape'){e.preventDefault();
    if(!$('#loupe').hidden)loupeOff();
    else if(amenu.classList.contains('on'))amenuOpen(false); else close();}
  else if(k==='g'||k==='G'){e.preventDefault();setState(STATE==='survey'?'parcours':'survey');}
  else if(k==='Home'){e.preventDefault();goTo(0);}
  else if(k==='End'){e.preventDefault();goTo(view.length-1);}
});

/* ─────────── splash : la vidéo ───────────
   Déposez votre fichier en assets/splash.mp4. S'il manque, le nom prend sa place
   et l'entrée se fait normalement — rien n'est chargé depuis l'extérieur. */
(function(){
  var v=$('#splashVid');if(!v)return;
  v.addEventListener('error',function(){
    v.hidden=true;
    var fb=$('#splashFb');
    if(fb){fb.hidden=false;fb.textContent=ARTISTS[0].name;}
  });
  v.addEventListener('ended',function(){ready();});
  v.src='assets/splash.mp4';
  var pr=v.play();
  if(pr&&pr.catch)pr.catch(function(){});
})();


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
  b.setAttribute('aria-pressed',sfx.on()?'true':'false');
  b.textContent=sfx.on()?'son':'muet';
  b.addEventListener('click',function(){
    sfx.set(!sfx.on());
    this.setAttribute('aria-pressed',sfx.on()?'true':'false');
    this.textContent=sfx.on()?'son':'muet';
  });
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
  if(pendingHash){var w=pendingHash;pendingHash=null;applyHash(w);}
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

})();
