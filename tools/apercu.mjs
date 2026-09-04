/* Rendre le site, et le mesurer — `node tools/apercu.mjs`
   ─────────────────────────────────────────────────────────────────────────
   `tools/verif-dom.mjs` exécute `script.js` dans un faux DOM : il attrape les
   fautes de charpente, jamais les fautes d'œil. Rien n'y a de taille, de place
   ni de couleur — un panneau qui recouvre un compteur, une hélice qui sort du
   cadre, un boîtier qui glisse à côté de son propre écran, il ne les voit pas.

   Celui-ci ouvre un vrai navigateur, sans fenêtre, et rend le site : il en tire
   des images à regarder, et surtout des **mesures**. Les trois défauts les plus
   coûteux de la V2 ont été trouvés ici, et aucun n'aurait pu l'être autrement :

   - les cinq dépliants du tiroir gardaient 22 px de haut une fois repliés ;
   - l'hélice des photos réservait la place d'une image et en dessinait une
     1,68 fois plus grande — la perspective n'était pas comptée ;
   - le châssis s'écartait de son écran jusqu'à 1 300 px pendant le passage d'un
     mode à l'autre.

   Il faut un navigateur bâti sur Chromium — Chrome, Chromium, Brave, Edge. Le
   premier trouvé sert ; `NAVIGATEUR=/chemin/vers/le/binaire` passe outre.

     node tools/apercu.mjs              rend les vues courantes dans ./apercus/
     node tools/apercu.mjs --mesure     imprime les mesures au lieu des images

   Le dossier `apercus/` n'est pas publié : `.gitignore` s'en charge. */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';

const ICI = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PORT = 8899, DEBUG = 9333;

/* `file://` ne suffit pas : les pochettes portent `crossorigin="anonymous"`, et
   sur ce protocole la vérification d'origine les refuse toutes. On sert donc le
   dossier, comme GitHub Pages le sert. */
const TYPES = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript',
  '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml',
  '.mp4':'video/mp4', '.json':'application/json', '.txt':'text/plain' };

export function servir(){
  return new Promise(res => {
    const s = http.createServer((rq, rp) => {
      const u = decodeURIComponent((rq.url||'/').split('?')[0]);
      const f = path.join(ICI, u === '/' ? 'index.html' : u);
      if(!f.startsWith(ICI) || !fs.existsSync(f) || fs.statSync(f).isDirectory()){
        rp.writeHead(404); rp.end('non'); return;
      }
      rp.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream',
                          'cache-control': 'no-store' });
      fs.createReadStream(f).pipe(rp);
    });
    s.listen(PORT, '127.0.0.1', () => res(s));
  });
}

const CHEMINS = [
  process.env.NAVIGATEUR,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
].filter(Boolean);

function navigateur(){
  for(const c of CHEMINS) if(fs.existsSync(c)) return c;
  throw new Error('aucun navigateur Chromium trouvé — posez son chemin dans NAVIGATEUR');
}

export async function ouvrir({ w = 1440, h = 900, dpr = 1 } = {}){
  const proc = spawn(navigateur(), [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--mute-audio',
    '--no-first-run', '--no-default-browser-check', '--disable-extensions',
    '--force-device-scale-factor=' + dpr,
    '--remote-debugging-port=' + DEBUG,
    '--user-data-dir=' + path.join(ICI, '.apercu-profil'),
    '--window-size=' + w + ',' + h, 'about:blank',
  ], { stdio: 'ignore' });

  let cible = null;
  for(let i = 0; i < 90 && !cible; i++){
    try{
      const l = await (await fetch('http://127.0.0.1:' + DEBUG + '/json/list')).json();
      cible = l.find(t => t.type === 'page');
    }catch{}
    if(!cible) await new Promise(r => setTimeout(r, 150));
  }
  if(!cible){ proc.kill(); throw new Error('le navigateur n’a pas répondu'); }

  const ws = new WebSocket(cible.webSocketDebuggerUrl);
  await new Promise((ok, ko) => { ws.onopen = ok; ws.onerror = ko; });
  let n = 0; const attente = new Map();
  ws.onmessage = e => {
    const m = JSON.parse(e.data);
    if(m.id && attente.has(m.id)){
      const { ok, ko } = attente.get(m.id); attente.delete(m.id);
      m.error ? ko(new Error(JSON.stringify(m.error))) : ok(m.result);
    }
  };
  const envoi = (methode, params = {}) => new Promise((ok, ko) => {
    const id = ++n; attente.set(id, { ok, ko });
    ws.send(JSON.stringify({ id, method: methode, params }));
  });
  await envoi('Page.enable');
  await envoi('Runtime.enable');
  await envoi('Network.enable');
  /* Sans cela, une feuille de style modifiée à l'instant est resservie depuis le
     cache et l'on mesure la version d'avant — une demi-heure de perdue, la
     première fois. */
  await envoi('Network.setCacheDisabled', { cacheDisabled: true });

  const ev = async (code, promesse = false) => {
    const r = await envoi('Runtime.evaluate',
      { expression: code, awaitPromise: promesse, returnByValue: true });
    if(r.exceptionDetails)
      return { erreur: r.exceptionDetails.exception?.description || r.exceptionDetails.text };
    return r.result?.value;
  };

  /* Une scène : la page repartie de zéro, sa mémoire vidée, une mise en place
     facultative avant le chargement et un geste après. La visite guidée est
     éteinte partout — elle s'ouvrirait d'elle-même et couvrirait ce qu'on
     vient regarder. */
  const scene = async (nom, avant, apres, larg = 1440, haut = 900, pose = 3000) => {
    await envoi('Emulation.setDeviceMetricsOverride',
      { width: larg, height: haut, deviceScaleFactor: 1, mobile: false });
    await envoi('Page.navigate', { url: 'about:blank' });
    await new Promise(r => setTimeout(r, 200));
    await envoi('Page.addScriptToEvaluateOnNewDocument', {
      source: `try{localStorage.clear();localStorage.setItem('wte-tour','1');${avant||''}}catch(e){}` });
    await envoi('Page.navigate', { url: 'http://127.0.0.1:' + PORT + '/index.html' });
    await new Promise(r => setTimeout(r, pose));
    if(apres){ await ev(`(async()=>{${apres}})()`, true);
               await new Promise(r => setTimeout(r, 1400)); }
    return nom;
  };

  const image = async (fichier) => {
    const s = await envoi('Page.captureScreenshot', { format: 'png' });
    fs.mkdirSync(path.dirname(fichier), { recursive: true });
    fs.writeFileSync(fichier, Buffer.from(s.data, 'base64'));
    return fichier;
  };

  return { envoi, ev, scene, image, fermer(){ ws.close(); proc.kill(); } };
}

/* ─── les vues qu'on regarde ───
   Une par état, plus les deux thèmes et les deux modes. Ajouter une ligne
   suffit à en garder une de plus d'une fois sur l'autre. */
export const VUES = [
  ['parcours',        '', '', 1440, 900],
  ['fiche',           '', "document.querySelector('.slot[aria-selected=true] .lift').click()", 1440, 900],
  ['planche',         '', "document.querySelector('#mSurvey').click()", 1440, 760],
  ['images',          '', "location.hash='#/cortis'; await new Promise(r=>setTimeout(r,700)); document.querySelector('#mPhotos').click()", 1440, 900],
  ['options',         '', "document.querySelector('#mOpt').click()", 1440, 900],
  ['liste',           "localStorage.setItem('wte-list','1')", '', 1440, 900],
  ['appareil',        "localStorage.setItem('wte-dev','1')", '', 1440, 900],
  ['appareil-menu',   "localStorage.setItem('wte-dev','1')", "document.querySelector('.dv-menu').click()", 1440, 900],
  ['appareil-fiche',  "localStorage.setItem('wte-dev','1')", "document.querySelector('.slot[aria-selected=true] .lift').click()", 1440, 900],
  ['sombre',          "localStorage.setItem('wte-theme','dark')", '', 1440, 900],
  ['sombre-appareil', "localStorage.setItem('wte-theme','dark');localStorage.setItem('wte-dev','1')", '', 1440, 900],
  ['etroit',          '', '', 760, 900],
];

/* ─── les mesures qui doivent tenir ───
   Chacune est un défaut qu'on a eu, et qu'on ne veut pas revoir. Elles se lisent
   dans la page, en coordonnées de fenêtre : c'est la seule vérité disponible. */
export const MESURES = [
  ['le tiroir replié ne laisse rien paraître', '', "document.querySelector('#mOpt').click()",
   `Math.max(...[...document.querySelectorAll('.plie')].map(p=>p.getBoundingClientRect().height))`,
   v => v <= 2, '≤ 2 px'],
  ['la planche ne passe pas sous le compteur', '', "document.querySelector('#mSurvey').click()",
   `+(getComputedStyle(document.querySelector('.meter')).opacity)`, v => v === 0, '0', 1440, 700],
  ['l’hélice tient dans la fenêtre', '',
   "location.hash='#/cortis'; await new Promise(r=>setTimeout(r,700)); document.querySelector('#mPhotos').click()",
   `[...document.querySelectorAll('.pcard')].filter(c=>!c.hidden&&+getComputedStyle(c).opacity>0.4)
      .filter(c=>{const r=c.getBoundingClientRect();
        return r.left<0||r.top<0||r.right>innerWidth||r.bottom>innerHeight;}).length`,
   v => v === 0, '0 carte qui déborde'],
];

/* ─── l'écran reste dans son trou ───
   La mesure du passage d'un mode à l'autre. On échantillonne à chaque image
   l'écart entre le rectangle de `#app` et la découpe de l'écran dans le
   châssis : il doit rester nul du début à la fin, dans les deux sens. */
export const ECART_CAMERA = `(async()=>{
  const app=document.querySelector('#app'), dv=document.querySelector('#device');
  const W=736,SX=70.5,SY=48,SW=595; let pire=0;
  document.querySelector('#mDevice').click();
  const t0=performance.now();
  await new Promise(res=>{ (function f(){
    const a=app.getBoundingClientRect(), d=dv.getBoundingClientRect(), z=d.width/W;
    if(z>0)pire=Math.max(pire,Math.abs(a.left-(d.left+SX*z)),
                              Math.abs(a.top-(d.top+SY*z)),
                              Math.abs(a.width-SW*z));
    if(performance.now()-t0<700) requestAnimationFrame(f); else res();
  })(); });
  return Math.round(pire*10)/10;
})()`;

/* ─── en ligne de commande ─── */
if(import.meta.url === 'file://' + process.argv[1]){
  const serveur = await servir();
  const s = await ouvrir();
  const mesurer = process.argv.includes('--mesure');
  let ko = 0;
  if(mesurer){
    for(const [nom, avant, apres, code, bon, attendu, w, h] of MESURES){
      await s.scene(nom, avant, apres, w || 1440, h || 900);
      const v = await s.ev(code);
      const ok = bon(v); if(!ok) ko++;
      console.log((ok ? '  ✅ ' : '  ❌ ') + nom.padEnd(52) + v + (ok ? '' : '   ≠ ' + attendu));
    }
    for(const [nom, avant] of [['on entre dans l’appareil', ''],
                               ['on en sort', "localStorage.setItem('wte-dev','1')"]]){
      await s.scene(nom, avant, '');
      const v = await s.ev(ECART_CAMERA, true);
      const ok = typeof v === 'number' && v <= 1; if(!ok) ko++;
      console.log((ok ? '  ✅ ' : '  ❌ ') + ('l’écran reste dans son trou, ' + nom).padEnd(52)
        + v + ' px' + (ok ? '' : '   ≠ ≤ 1 px'));
    }
    console.log(ko ? '\n❌ ' + ko + ' mesure(s) hors clou\n' : '\n✅ toutes les mesures tiennent\n');
  }else{
    const sortie = path.join(ICI, 'apercus');
    for(const [nom, avant, apres, w, h] of VUES){
      await s.scene(nom, avant, apres, w, h);
      console.log('  ' + await s.image(path.join(sortie, nom + '.png')));
    }
  }
  s.fermer(); serveur.close(); process.exit(ko ? 1 : 0);
}
