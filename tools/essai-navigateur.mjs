/* Toucher à tout, dans un vrai navigateur — `node tools/essai-navigateur.mjs`
   ─────────────────────────────────────────────────────────────────────────
   `verif-dom.mjs` déclenche les commandes dans un faux DOM : il attrape ce qui
   casse au chargement et les identifiants qui ne visent rien. Mais son DOM n'a
   ni mise en page ni mesures, et la moitié du site en dépend — le vol FLIP, la
   pile de l'hélice, le passage d'un mode à l'autre, la visite guidée qui vise
   des rectangles.

   Ici, on ouvre le site pour de bon et l'on **appuie sur tout** : les trois
   vues, les filtres, les cinq artistes, les réglages, la molette, la recherche,
   et les dix-huit étapes de la visite. Chaque geste est encadré : la page note
   ses propres erreurs, et l'on regarde après chaque appui s'il en est arrivé
   une. Un `ReferenceError` dans un gestionnaire ne remonte nulle part — il
   n'apparaît que là.

   Il faut le même navigateur que `tools/apercu.mjs`, dont ce fichier reprend le
   pilotage. */
import { ouvrir, servir } from './apercu.mjs';

const serveur = await servir();
const s = await ouvrir({ w: 1440, h: 900 });
const { envoi, ev } = s;
const fautes = [];

/* La page tient son propre journal : `onerror` attrape ce qu'un gestionnaire
   laisse échapper, `unhandledrejection` ce qu'une promesse laisse tomber, et
   `console.error` ce que le code signale lui-même. */
await envoi('Page.addScriptToEvaluateOnNewDocument', { source: `
  window.__fautes=[];
  addEventListener('error',e=>window.__fautes.push('erreur : '+(e.message||e)
    +' @'+(e.filename||'').split('/').pop()+':'+(e.lineno||'')));
  addEventListener('unhandledrejection',e=>window.__fautes.push('promesse : '+e.reason));
  const ce=console.error;console.error=function(){
    window.__fautes.push('console : '+[].join.call(arguments,' '));ce.apply(console,arguments);};
  try{localStorage.clear();localStorage.setItem('wte-tour','1');}catch(e){}
`});
await envoi('Page.navigate', { url: 'http://127.0.0.1:8899/index.html' });
await new Promise(r => setTimeout(r, 3000));

async function geste(nom, code, pose = 700){
  const avant = (await ev('window.__fautes.length')) || 0;
  const r = await ev(`(async function(){${code}})()`, true);
  await new Promise(x => setTimeout(x, pose));
  const apres = (await ev('window.__fautes.length')) || 0;
  let mal = (r && r.erreur) ? r.erreur : '';
  if(apres > avant) mal += ' ' + await ev(`window.__fautes.slice(${avant}).join(' | ')`);
  if(mal) fautes.push(nom + ' → ' + mal.trim());
  console.log((mal ? '  ❌ ' : '  ✅ ') + nom.padEnd(28) + mal.trim());
}

console.log('Les vues, les réglages, la molette');
/* Chaque clic est enfermé dans son propre bloc : deux `CLIC` mis bout à bout
   déclaraient deux fois la même variable, et le tout ne compilait pas. */
const CLIC = s => `{const b=document.querySelector('${s}'); if(!b) throw new Error('pas de ${s}'); b.click();}`;
for(const [nom, code] of [
  ['la planche',            CLIC('#mSurvey')],
  ['une fiche',             CLIC('.cell:not([hidden])')],
  ['la refermer',           CLIC('#back')],
  ['les images',            CLIC('#mPhotos')],
  ['une photo de côté',     CLIC('#pNext')],
  ['une autre série',       "const b=document.querySelectorAll('#psets button')[1]; if(b)b.click();"],
  ['revenir au parcours',   CLIC('#mParcours')],
  ['changer d’artiste',     CLIC('#brandBtn') + "document.querySelectorAll('#amenu button')[1].click();"],
  ['filtrer sur les EP',    CLIC('#filters button[data-f=EP]')],
  ['tout remontrer',        CLIC('#filters button[data-f=tout]')],
  ['la liste appariée',     CLIC('#mList')],
  ['les pochettes en pixels', CLIC('#mPix')],
  ['le thème',              CLIC('#mTheme')],
  ['la trame de l’écran',   CLIC('#mGlass')],
  ['entrer dans l’appareil', CLIC('#mDevice')],
  ['la molette : menu',     CLIC('.dv-menu')],
  ['y descendre',           CLIC('#amenusIn button')],
  ['en remonter',           CLIC('.dv-menu')],
  ['la molette : suivant',  CLIC('.dv-next')],
  ['le bouton central',     CLIC('#dvCentre')],
  ['en sortir',             CLIC('#mDevice')],
  ['un fond d’écran',       CLIC('#fondsH') + "const f=document.querySelector('#fonds .fv'); if(f)f.click();"],
  ['une couleur d’accent',  CLIC('#accH') + "const a=document.querySelectorAll('#accP .accb')[2]; if(a)a.click();"],
  ['une surface',           CLIC('#surfH') + "const x=document.querySelectorAll('#surfP .surfb')[2]; if(x)x.click();"],
  ['la gravure',            CLIC('#gravH') + "const g=document.querySelector('#grav1'); g.value='nono'; g.dispatchEvent(new Event('input',{bubbles:true}));"],
  ['poser un autocollant',  CLIC('#stkH') + "const t=document.querySelector('#stkP button'); if(t)t.click();"],
  ['copier le réglage',     CLIC('#mLien')],
  ['ouvrir la recherche',   CLIC('#mQuete')],
  ['y taper « wave »',      "const q=document.querySelector('#qIn'); q.value='wave'; q.dispatchEvent(new Event('input',{bubbles:true}));"],
  ['ouvrir un résultat',    "const r=document.querySelector('#qRes button'); if(r)r.click();"],
  ['à propos',              CLIC('#mAbout')],
  ['le refermer',           CLIC('#aboutX')],
]) await geste(nom, code);

console.log('\nLa visite guidée, étape par étape');
await geste('l’ouvrir', CLIC('#mOpt') + CLIC('#mTour'), 900);
for(let i = 0; i < 24; i++){
  const reste = await ev(`!document.querySelector('#tour').hidden`);
  if(!reste){ console.log('  · close après ' + i + ' étapes'); break; }
  const n = await ev(`document.querySelector('#tourN').textContent`);
  await geste('étape ' + n, CLIC('#tourNext'), 900);
}

console.log(fautes.length ? '\n❌ ' + fautes.length + ' problème(s)\n'
                          : '\n✅ rien à signaler\n');
s.fermer(); serveur.close();
process.exit(fautes.length ? 1 : 0);
