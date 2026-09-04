/* Vérifier script.js hors navigateur — `node tools/verif-dom.mjs`
   ─────────────────────────────────────────────────────────────────────────
   `node --check` ne lit que la grammaire : il ne voit ni une variable jamais
   déclarée, ni un `$('#truc')` qui ne vise rien, ni un appel à une méthode
   qui n'existe pas. Le fichier s'exécute donc ici, dans un faux DOM, et l'on
   relève ce qui casse.

   Ce n'est pas un navigateur : le rendu, la mise en page et les mesures
   n'existent pas. Ça attrape les fautes de charpente, pas les fautes d'œil. */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ici  = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(ici, 'index.html'), 'utf8');

/* Les identifiants et les classes que le HTML contient réellement. */
const js   = fs.readFileSync(path.join(ici, 'script.js'), 'utf8');
/* Les identifiants écrits à la main dans le HTML, **et** ceux que le script
   fabrique lui-même : la fiche pose `#trk`, l'hélice pose `#pring`. Les
   compter pour des fautes de frappe serait un faux positif. */
const IDS = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));
for(const m of js.matchAll(/id=[\\]?["']([\w-]+)/g)) IDS.add(m[1]);
const orphelins = new Set();
/* On ne juge que les **identifiants**. Les classes, le script en fabrique la
   moitié à l'exécution — `.slot`, `.cell` n'existent nulle part dans le HTML
   et c'est normal. Un identifiant, lui, est toujours écrit à la main : s'il
   ne s'y trouve pas, c'est une faute de frappe. */
function connu(sel){
  const t = sel.trim().split(/[\s>,+~:[]/)[0];
  return t.startsWith('#') ? IDS.has(t.slice(1)) : true;
}

const noop = () => {};

/* Les écouteurs, retenus par sélecteur : c'est ce qui permet de *déclencher*
   un clic à la fin du fichier, et donc d'exercer autre chose que le simple
   chargement. */
const ecoute = new Map();
function noter(sel, type, fn){
  const c = sel+'|'+type;
  if(!ecoute.has(c)) ecoute.set(c, []);
  ecoute.get(c).push(fn);
}
export const ratés = [];
export function declencher(sel, type, ev){
  const l = ecoute.get(sel+'|'+type) || [];
  for(const f of l){
    /* Une exception dans un gestionnaire ne doit pas arrêter la vérification :
       on la relève et l'on continue, sinon la première faute cache toutes les
       suivantes — et c'est justement la liste complète qu'on vient chercher. */
    try{ f(Object.assign({type, preventDefault:noop, stopPropagation:noop,
      target:doc.querySelector(sel), key:'', deltaX:0, deltaY:0}, ev||{})); }
    catch(e){ ratés.push(sel+' · '+type+' → '+e.name+' : '+e.message
      +'\n       '+String(e.stack||'').split('\n')[1]?.trim()); }
  }
  return l.length;
}

/* Un élément par sélecteur, et toujours le même : deux appels à `$('#gestE')`
   doivent rendre le même objet, sinon un `textContent` écrit ici est perdu
   pour celui qui le relit là. */
const cache = new Map();
function elem(sel, unique){
  if(!unique && cache.has(sel)) return cache.get(sel);
  const e = fabrique(sel);
  if(!unique) cache.set(sel, e);
  return e;
}
function fabrique(sel){
  const e = {
    tagName:'DIV', nodeType:1, sel, hidden:false, disabled:false, checked:false,
    value:'', selectionStart:0, selectionEnd:0, scrollLeft:0, scrollTop:0,
    scrollWidth:1000, scrollHeight:1000, clientWidth:800, clientHeight:600,
    offsetWidth:800, offsetHeight:600, readyState:4, currentTime:0, paused:true,
    videoWidth:640, videoHeight:480, srcObject:null, naturalWidth:600, naturalHeight:600,
    complete:true, children:[], childNodes:[], firstChild:null, lastChild:null,
    nextElementSibling:null, previousElementSibling:null,
    /* Un élément fabriqué n'a ni parent ni enfant : le faux DOM n'analyse pas le
       HTML qu'on lui pose. Les deux se fabriquent donc **à la demande**, sinon
       un `el.firstChild.src` ou un `el.parentNode.insertBefore` tombe sur `null`
       et l'on croirait à une faute du site là où il n'y a qu'une limite du
       harnais. */
    get firstChild(){ return this.childNodes[0] || (this._fc ||= fabrique(sel+' >*')); },
    set firstChild(v){ this._fc = v; },
    get parentNode(){ return this._pn ||= fabrique(sel+' ^'); },
    set parentNode(v){ this._pn = v; },
    /* `style` répond à tout : les propriétés en camelCase, et les trois
       méthodes des variables personnalisées, dont le site se sert beaucoup. */
    style:new Proxy({},{
      get(t,k){
        if(k==='setProperty')        return (n,v)=>{t[n]=v;};
        if(k==='getPropertyValue')   return n=>t[n]??'';
        if(k==='removeProperty')     return n=>{delete t[n];};
        return t[k]??'';
      },
      set:(t,k,v)=>(t[k]=v,true),
    }),
    dataset:{},
    classList:{ _s:new Set(),
      add(...c){c.forEach(x=>this._s.add(x))}, remove(...c){c.forEach(x=>this._s.delete(x))},
      toggle(c,f){const v=f??!this._s.has(c); v?this._s.add(c):this._s.delete(c); return v},
      contains(c){return this._s.has(c)} },
    _t:'', _h:'',
    set textContent(v){this._t=String(v)}, get textContent(){return this._t},
    set innerHTML(v){this._h=String(v)},  get innerHTML(){return this._h},
    set src(v){this._src=v}, get src(){return this._src||''},
    _at:{},
    setAttribute(n,v){this._at[n]=String(v);}, removeAttribute(n){delete this._at[n];},
    getAttribute(n){return n in this._at ? this._at[n] : null;},
    hasAttribute(n){return n in this._at;},
    addEventListener(t,f){noter(sel,t,f);}, removeEventListener:noop, dispatchEvent:()=>true,
    appendChild(c){this.childNodes.push(c);this.children.push(c);this.firstChild=this.childNodes[0];this.lastChild=c;return c},
    insertBefore(c){return this.appendChild(c)},
    removeChild(c){const i=this.childNodes.indexOf(c);if(i>=0){this.childNodes.splice(i,1);this.children.splice(i,1);}this.firstChild=this.childNodes[0]||null;return c},
    remove:noop, replaceChildren:noop, prepend:noop, append:noop,
    querySelector:s=>doc.querySelector(s), querySelectorAll:s=>doc.querySelectorAll(s),
    getElementsByTagName:()=>[], getElementsByClassName:()=>[],
    closest:()=>null, matches:()=>false, contains:()=>false,
    focus:noop, blur:noop, click:noop, scrollIntoView:noop, animate:()=>({finished:Promise.resolve(),cancel:noop}),
    getBoundingClientRect:()=>({x:0,y:0,left:0,top:0,right:800,bottom:600,width:800,height:600}),
    getContext:()=>ctx2d, toDataURL:()=>'data:,', play:()=>Promise.resolve(), pause:noop,
    load:noop, decode:()=>Promise.resolve(),
    offsetLeft:0, offsetTop:0, offsetParent:null,
  };
  /* Courir après chaque méthode du DOM une par une n'en finirait pas. Le faux
     élément répond donc à tout — mais il **note** ce qu'il a dû inventer, et
     la liste est imprimée à la fin. Un stub muet masquerait précisément les
     fautes que ce fichier existe pour trouver ; celui-ci les montre. */
  return new Proxy(e, {
    get(t, k){
      if(k in t) return t[k];
      /* Ni les symboles ni `then` : un objet qui répond à `then` se fait
         prendre pour une promesse et tout se bloque. */
      if(typeof k !== 'string' || k === 'then') return undefined;
      inventes.add(k);
      return noop;
    },
  });
}
const inventes = new Set();

const ctx2d = new Proxy({ canvas:{width:240,height:180} }, {
  get:(t,k)=> k in t ? t[k]
    : k==='getImageData'  ? (x,y,w,h)=>({data:new Uint8ClampedArray(w*h*4),width:w,height:h})
    : k==='measureText'   ? ()=>({width:10, actualBoundingBoxAscent:8, actualBoundingBoxDescent:2})
    : k==='createLinearGradient'||k==='createRadialGradient' ? ()=>({addColorStop:noop})
    : typeof k==='string' ? noop : undefined,
  set:()=>true,
});

const doc = {
  documentElement: elem(':root'), body: elem('body'), head: elem('head'),
  hidden:false, visibilityState:'visible', readyState:'complete', activeElement:null,
  querySelector(s){ if(!connu(s)) orphelins.add(s); return elem(s); },
  /* Une liste vide ferait échouer tout ce qui parcourt le champ : le script
     indexe `slots[i]` sur le nombre de parutions, pas sur ce que le DOM lui
     rend. On sert donc une liste plus longue que le plus grand tableau du
     site — 58 parutions aujourd'hui, 256 laisse de la marge. */
  querySelectorAll(s){ if(!connu(s)) orphelins.add(s);
    return Array.from({length:256}, () => elem(s, true)); },
  getElementById(id){ if(!IDS.has(id)) orphelins.add('#'+id); return elem('#'+id); },
  getElementsByClassName:()=>[], getElementsByTagName:()=>[],
  createElement:t=>elem('<'+t+'>'), createDocumentFragment:()=>elem('#fragment'),
  createTextNode:t=>({nodeType:3,textContent:t}),
  addEventListener(t,f){noter('document',t,f);}, removeEventListener:noop,
  createEvent:()=>({initEvent:noop}),
  fonts:{ready:Promise.resolve(), load:()=>Promise.resolve()},
  exitFullscreen:()=>Promise.resolve(), fullscreenElement:null,
};

const mem = new Map();
const sandbox = {
  document: doc, console,
  localStorage:{ getItem:k=>mem.has(k)?mem.get(k):null, setItem:(k,v)=>mem.set(k,String(v)),
                 removeItem:k=>mem.delete(k), clear:()=>mem.clear() },
  sessionStorage:{ getItem:()=>null, setItem:noop, removeItem:noop },
  location:{ href:'https://exemple/', origin:'https://exemple', pathname:'/', search:'', hash:'', replace:noop, assign:noop },
  history:{ replaceState:noop, pushState:noop, state:null },
  navigator:{ userAgent:'node', language:'fr-FR', clipboard:{writeText:()=>Promise.resolve()},
              mediaDevices:{ getUserMedia:()=>Promise.reject(new Error('pas de caméra')) },
              maxTouchPoints:0, sendBeacon:()=>true },
  matchMedia:q=>({matches:false, media:q, addEventListener:noop, removeEventListener:noop, addListener:noop, removeListener:noop}),
  requestAnimationFrame:()=>1, cancelAnimationFrame:noop,
  requestIdleCallback:()=>1, cancelIdleCallback:noop,
  setTimeout:()=>1, clearTimeout:noop, setInterval:()=>1, clearInterval:noop,
  performance:{ now:()=>Date.now(), getEntriesByType:()=>[], mark:noop, measure:noop },
  fetch:()=>Promise.resolve({ok:true, json:()=>Promise.resolve({}), text:()=>Promise.resolve('')}),
  Image:function(){ return elem('<img>'); },
  Audio:function(){ return elem('<audio>'); },
  AudioContext:function(){ return { currentTime:0, state:'running', destination:{}, resume:()=>Promise.resolve(),
    createOscillator:()=>({type:'',frequency:{setValueAtTime:noop,exponentialRampToValueAtTime:noop},connect:noop,start:noop,stop:noop}),
    createGain:()=>({gain:{setValueAtTime:noop,exponentialRampToValueAtTime:noop},connect:noop}) }; },
  IntersectionObserver:function(){ return {observe:noop,unobserve:noop,disconnect:noop}; },
  ResizeObserver:function(){ return {observe:noop,unobserve:noop,disconnect:noop}; },
  MutationObserver:function(){ return {observe:noop,disconnect:noop}; },
  /* Le style calculé rend `'0px'` pour tout, **et** répond aux deux méthodes
     dont le site se sert pour lire ses variables : sans elles, un
     `getPropertyValue('--pas')` casse ici alors qu'il marche en navigateur. */
  getComputedStyle:()=>new Proxy({},{get:(t,k)=>
    k==='getPropertyValue' ? (()=>'0px') :
    k==='getPropertyPriority' ? (()=>'') : '0px'}),
  devicePixelRatio:2, innerWidth:1280, innerHeight:800, scrollX:0, scrollY:0,
  addEventListener:noop, removeEventListener:noop, scrollTo:noop,
  btoa:s=>Buffer.from(s,'binary').toString('base64'),
  atob:s=>Buffer.from(s,'base64').toString('binary'),
  URL, URLSearchParams, Promise, Math, JSON, Date, isNaN, parseInt, parseFloat,
  encodeURIComponent, decodeURIComponent, escape:globalThis.escape, unescape:globalThis.unescape,
};
sandbox.window = sandbox;
sandbox.self   = sandbox;
sandbox.globalThis = sandbox;

/* Les données du site se chargent avant script.js, comme dans la page. */
const contexte = vm.createContext(sandbox);
const FICHIERS = ['assets/pix.js','assets/fonds.js','assets/stickers.js','assets/tracks.js','script.js'];

let ko = 0;
for(const f of FICHIERS){
  const abs = path.join(ici, f);
  if(!fs.existsSync(abs)){ console.log('  ⚠  absent : '+f); continue; }
  try{
    new vm.Script(fs.readFileSync(abs,'utf8'), {filename:f}).runInContext(contexte);
    console.log('  ✅ '+f);
  }catch(e){
    ko++;
    console.log('  ❌ '+f+'\n     '+e.name+' : '+e.message
              + '\n     '+String(e.stack||'').split('\n')[1]?.trim());
  }
}

/* ─────────── ce que le chargement seul n'exerce pas ───────────
   Charger le fichier ne prouve qu'une chose : qu'il se charge. Les commandes,
   elles, dorment jusqu'au clic. On les déclenche donc ici — c'est là que les
   `ReferenceError` d'un renommage se voient. */
let ko2 = 0;
const ok = (nom, reel, attendu) => {
  const bon = reel === attendu; if(!bon) ko2++;
  console.log((bon?'  ✅ ':'  ❌ ')+nom.padEnd(52)+String(reel)+(bon?'':'   ≠ '+attendu));
};
const el = s => doc.querySelector(s);

console.log('\nLes commandes répondent');
for(const [nom, sel] of [
  ['le tiroir d\'options',      '#mOpt'],
  ['la planche',                 '#mSurvey'],
  ['les images',                 '#mPhotos'],
  ['le parcours',                '#mParcours'],
  ['la liste appariée',          '#mList'],
  ['les pochettes en pixels',    '#mPix'],
  ['le thème',                   '#mTheme'],
  ['le son',                     '#mSnd'],
  ['la trame de l\'écran',       '#mGlass'],
  ['dans l\'appareil',           '#mDevice'],
  ['… et en sortir',             '#mDevice'],
  ['la recherche',               '#mQuete'],
  ['le lien de réglage',         '#mLien'],
  ['à propos',                   '#mAbout'],
  ['les dépliants du tiroir',    '#fondsH'],
  ['la flèche suivante',         '#next'],
  ['la flèche précédente',       '#prev'],
]) ok(nom, declencher(sel,'click') > 0, true);

console.log('\nLa molette de l\'appareil');
for(const [nom, sel] of [
  ['menu',      '.dv-menu'],
  ['précédent', '.dv-prev'],
  ['suivant',   '.dv-next'],
  ['lecture',   '.dv-play'],
  ['le centre', '#dvCentre'],
]) ok(nom, declencher(sel,'click') >= 0, true);

ko += ko2;

if(ratés.length){
  ko += ratés.length;
  console.log('\n❌ exceptions levées pendant les essais :');
  for(const r of ratés) console.log('     '+r);
}

console.log('');
if(orphelins.size){
  ko++;
  console.log('❌ sélecteurs qui ne visent rien dans index.html :');
  for(const o of orphelins) console.log('     '+o);
}else{
  console.log('✅ tous les sélecteurs demandés existent dans index.html');
}
console.log('   ('+IDS.size+' identifiants écrits dans le HTML)');
if(inventes.size){
  console.log('\nℹ  le faux DOM a dû inventer ces membres — à relire d’un œil,\n'
            + '   une méthode du DOM mal orthographiée apparaîtrait ici :');
  console.log('     '+[...inventes].sort().join(', '));
}
console.log(ko ? '\n❌ '+ko+' problème(s)\n' : '\n✅ rien à signaler\n');
process.exit(ko ? 1 : 0);
