(function(){
'use strict';

/* ═══ les artistes — données : MusicBrainz ═══ */
var ARTISTS=[
 {id:'89e95aa3-bd49-4af3-9c87-0d88b2093bb0', name:'wave to earth', place:'Séoul', since:2019,
  slug:'wave-to-earth',
  photos:[
   {t:'0.1 FLAWS AND ALL', d:'teasers du premier album · 2023', p:['assets/photos/wave-to-earth/flaws-and-all/01.jpg','assets/photos/wave-to-earth/flaws-and-all/02.jpg','assets/photos/wave-to-earth/flaws-and-all/03.jpg','assets/photos/wave-to-earth/flaws-and-all/04.jpg','assets/photos/wave-to-earth/flaws-and-all/05.jpg','assets/photos/wave-to-earth/flaws-and-all/06.jpg','assets/photos/wave-to-earth/flaws-and-all/07.jpg','assets/photos/wave-to-earth/flaws-and-all/08.jpg','assets/photos/wave-to-earth/flaws-and-all/09.jpg','assets/photos/wave-to-earth/flaws-and-all/10.jpg']},
   {t:'NOUVELLE VAGUE', d:'concept du single · 2021', p:['assets/photos/wave-to-earth/nouvelle-vague/01.jpg','assets/photos/wave-to-earth/nouvelle-vague/02.jpg','assets/photos/wave-to-earth/nouvelle-vague/03.jpg','assets/photos/wave-to-earth/nouvelle-vague/04.jpg','assets/photos/wave-to-earth/nouvelle-vague/05.jpg','assets/photos/wave-to-earth/nouvelle-vague/06.jpg','assets/photos/wave-to-earth/nouvelle-vague/07.jpg']},
   {t:'SÉANCE PHOTO', d:'ajoutée à la galerie en mai 2026', p:['assets/photos/wave-to-earth/seance-2026/01.jpg','assets/photos/wave-to-earth/seance-2026/02.jpg','assets/photos/wave-to-earth/seance-2026/03.jpg','assets/photos/wave-to-earth/seance-2026/04.jpg','assets/photos/wave-to-earth/seance-2026/05.jpg','assets/photos/wave-to-earth/seance-2026/06.jpg','assets/photos/wave-to-earth/seance-2026/07.jpg','assets/photos/wave-to-earth/seance-2026/08.jpg']},
   {t:'AUTRES', d:'W Korea et publications du groupe · 2022-2024', p:['assets/photos/wave-to-earth/autres/01.jpg','assets/photos/wave-to-earth/autres/02.jpg','assets/photos/wave-to-earth/autres/03.jpg','assets/photos/wave-to-earth/autres/04.jpg','assets/photos/wave-to-earth/autres/05.jpg']}
  ],
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
]},

 {id:'49204a7a-ed85-407a-828f-6fd46f1d8126', name:'NewJeans', place:'Corée du Sud', since:2022,
  slug:'newjeans',
  photos:[
   {t:'GET UP', d:'deuxième EP · juillet 2023', p:['assets/photos/newjeans/get-up/01.jpg','assets/photos/newjeans/get-up/02.jpg','assets/photos/newjeans/get-up/03.jpg','assets/photos/newjeans/get-up/04.jpg','assets/photos/newjeans/get-up/05.jpg','assets/photos/newjeans/get-up/06.jpg','assets/photos/newjeans/get-up/07.jpg','assets/photos/newjeans/get-up/08.jpg','assets/photos/newjeans/get-up/09.jpg','assets/photos/newjeans/get-up/10.jpg','assets/photos/newjeans/get-up/11.jpg','assets/photos/newjeans/get-up/12.jpg','assets/photos/newjeans/get-up/13.jpg','assets/photos/newjeans/get-up/14.jpg','assets/photos/newjeans/get-up/15.jpg','assets/photos/newjeans/get-up/16.jpg','assets/photos/newjeans/get-up/17.jpg','assets/photos/newjeans/get-up/18.jpg','assets/photos/newjeans/get-up/19.jpg','assets/photos/newjeans/get-up/20.jpg','assets/photos/newjeans/get-up/21.jpg']}
  ],
  rel:[
  {id:'cad0949d-e2cc-4794-b4f0-1439907c1cbe', t:"New Jeans", kind:'EP', date:'1er août 2022', y:2022, v:'', label:'ADOR',
   k:'#5B7FA6', art:'wave', tone:'l', cover:'',
   note:"Les débuts du groupe, en août 2022, chez ADOR."},
  {id:'f99c9e74-52e3-47cb-9286-ce0019a9b69a', t:"Ditto", kind:'Single', date:'19 décembre 2022', y:2022, v:'', label:'ADOR',
   k:'#C8A45C', art:'ring', tone:'d', cover:'',
   note:""},
  {id:'23d1cd75-8dc5-436d-a0c6-cab894dd5f64', t:"OMG", kind:'Single', date:'2 janvier 2023', y:2023, v:'', label:'ADOR',
   k:'#8E9E8A', art:'split', tone:'l', cover:'',
   note:""},
  {id:'a492b478-3505-44a6-8a28-da1c53c64fec', t:"Zero", kind:'Single', date:'3 avril 2023', y:2023, v:'', label:'ADOR',
   k:'#9A8FA6', art:'grid', tone:'d', cover:'',
   note:""},
  {id:'2817894d-e004-4de0-a575-da1fc3675dd0', t:"Be Who You Are (Real Magic)", kind:'Single', date:'31 mai 2023', y:2023, v:'', label:'Interscope Records',
   k:'#A67C6B', art:'arc', tone:'l', cover:'',
   note:""},
  {id:'1bb441a0-6dd9-4b47-88b4-cf88db07ac96', t:"Super Shy", kind:'Single', date:'7 juillet 2023', y:2023, v:'', label:'ADOR',
   k:'#6E8FA0', art:'dot', tone:'d', cover:'',
   note:""},
  {id:'d2b0e110-fe62-4c91-9504-5dbfbedf1374', t:"Get Up", kind:'EP', date:'21 juillet 2023', y:2023, v:'', label:'ADOR',
   k:'#B08A9E', art:'wave', tone:'l', cover:'',
   note:""},
  {id:'9750354e-78df-4058-8758-b5a7a2eccf66', t:"How Sweet & Bubble Gum", kind:'Single', date:'24 mai 2024', y:2024, v:'', label:'ADOR',
   k:'#7E9E7C', art:'ring', tone:'d', cover:'',
   note:""},
  {id:'8b5e82eb-a7e3-4b5f-a2b9-92cb5319f5e7', t:"Supernatural", kind:'Single', date:'21 juin 2024', y:2024, v:'', label:'ADOR',
   k:'#A9926A', art:'split', tone:'l', cover:'',
   note:""},
  ]},
 {id:'066080a4-84c7-46c6-91d3-dc10d572749b', name:'Hearts2Hearts', place:'Corée du Sud', since:2025,
  slug:'hearts2hearts',
  photos:[
   {t:'ICONIC HEART', d:'teasers · août 2026', p:['assets/photos/hearts2hearts/iconic-heart/01.jpg','assets/photos/hearts2hearts/iconic-heart/02.jpg','assets/photos/hearts2hearts/iconic-heart/03.jpg','assets/photos/hearts2hearts/iconic-heart/04.jpg','assets/photos/hearts2hearts/iconic-heart/05.jpg','assets/photos/hearts2hearts/iconic-heart/06.jpg','assets/photos/hearts2hearts/iconic-heart/07.jpg','assets/photos/hearts2hearts/iconic-heart/08.jpg','assets/photos/hearts2hearts/iconic-heart/09.jpg','assets/photos/hearts2hearts/iconic-heart/10.jpg','assets/photos/hearts2hearts/iconic-heart/11.jpg','assets/photos/hearts2hearts/iconic-heart/12.jpg','assets/photos/hearts2hearts/iconic-heart/13.jpg','assets/photos/hearts2hearts/iconic-heart/14.jpg','assets/photos/hearts2hearts/iconic-heart/15.jpg','assets/photos/hearts2hearts/iconic-heart/16.jpg','assets/photos/hearts2hearts/iconic-heart/17.jpg','assets/photos/hearts2hearts/iconic-heart/18.jpg','assets/photos/hearts2hearts/iconic-heart/19.jpg','assets/photos/hearts2hearts/iconic-heart/20.jpg','assets/photos/hearts2hearts/iconic-heart/21.jpg','assets/photos/hearts2hearts/iconic-heart/22.jpg','assets/photos/hearts2hearts/iconic-heart/23.jpg','assets/photos/hearts2hearts/iconic-heart/24.jpg','assets/photos/hearts2hearts/iconic-heart/25.jpg','assets/photos/hearts2hearts/iconic-heart/26.jpg','assets/photos/hearts2hearts/iconic-heart/27.jpg','assets/photos/hearts2hearts/iconic-heart/28.jpg','assets/photos/hearts2hearts/iconic-heart/29.jpg','assets/photos/hearts2hearts/iconic-heart/30.jpg','assets/photos/hearts2hearts/iconic-heart/31.jpg','assets/photos/hearts2hearts/iconic-heart/32.jpg']},
   {t:'LEMON TANG', d:'concept · juin 2026', p:['assets/photos/hearts2hearts/lemon-tang/01.jpg','assets/photos/hearts2hearts/lemon-tang/02.jpg','assets/photos/hearts2hearts/lemon-tang/03.jpg','assets/photos/hearts2hearts/lemon-tang/04.jpg','assets/photos/hearts2hearts/lemon-tang/05.jpg','assets/photos/hearts2hearts/lemon-tang/06.jpg','assets/photos/hearts2hearts/lemon-tang/07.jpg','assets/photos/hearts2hearts/lemon-tang/08.jpg','assets/photos/hearts2hearts/lemon-tang/09.jpg','assets/photos/hearts2hearts/lemon-tang/10.jpg','assets/photos/hearts2hearts/lemon-tang/11.jpg','assets/photos/hearts2hearts/lemon-tang/12.jpg','assets/photos/hearts2hearts/lemon-tang/13.jpg','assets/photos/hearts2hearts/lemon-tang/14.jpg','assets/photos/hearts2hearts/lemon-tang/15.jpg','assets/photos/hearts2hearts/lemon-tang/16.jpg','assets/photos/hearts2hearts/lemon-tang/17.jpg','assets/photos/hearts2hearts/lemon-tang/18.jpg','assets/photos/hearts2hearts/lemon-tang/19.jpg','assets/photos/hearts2hearts/lemon-tang/20.jpg','assets/photos/hearts2hearts/lemon-tang/21.jpg','assets/photos/hearts2hearts/lemon-tang/22.jpg','assets/photos/hearts2hearts/lemon-tang/23.jpg','assets/photos/hearts2hearts/lemon-tang/24.jpg']}
  ],
  rel:[
  {id:'4447961b-bea2-441b-b52a-c2fdc9460a36', t:"The Chase", kind:'Single', date:'24 février 2025', y:2025, v:'', label:'SM Entertainment',
   k:'#5B7FA6', art:'wave', tone:'l', cover:'',
   note:"Les débuts du groupe, en février 2025, chez SM."},
  {id:'a554c96b-f5fc-49d5-8d9d-fefae27d7aaf', t:"STYLE", kind:'Single', date:'18 juin 2025', y:2025, v:'', label:'SM Entertainment',
   k:'#C8A45C', art:'ring', tone:'d', cover:'',
   note:""},
  {id:'491a8005-dad7-490f-a12b-c902a4988c8b', t:"Pretty Please", kind:'Single', date:'24 septembre 2025', y:2025, v:'', label:'SM Entertainment',
   k:'#8E9E8A', art:'split', tone:'l', cover:'',
   note:""},
  {id:'158311ee-7ed5-46a3-89e5-0e2ed6416a5c', t:"FOCUS", kind:'EP', date:'20 octobre 2025', y:2025, v:'', label:'SM Entertainment',
   k:'#9A8FA6', art:'grid', tone:'d', cover:'',
   note:""},
  {id:'5209edba-458a-4f37-8863-ec663b51fc6b', t:"RUDE!", kind:'Single', date:'20 février 2026', y:2026, v:'', label:'SM Entertainment',
   k:'#A67C6B', art:'arc', tone:'l', cover:'',
   note:""},
  {id:'23757eb9-48b4-4bdd-aee9-10c6c135ec97', t:"Lemon Tang", kind:'EP', date:'22 juin 2026', y:2026, v:'', label:'EMI Records',
   k:'#6E8FA0', art:'dot', tone:'d', cover:'',
   note:""},
  {id:'cd3129e3-4c5c-41be-94c4-0f655fe284ff', t:"ICONIC HEART", kind:'Single', date:'9 août 2026', y:2026, v:'', label:'',
   k:'#B08A9E', art:'wave', tone:'l', cover:'',
   note:""},
  ]},
 {id:'1ee37742-1e3d-4e61-84d2-bc85f4c1459a', name:'LE SSERAFIM', place:'Corée du Sud', since:2022,
  slug:'le-sserafim',
  photos:[
   {t:'PUREFLOW pt.1', d:'concept · mai 2026', p:['assets/photos/le-sserafim/pureflow-pt1/01.jpg','assets/photos/le-sserafim/pureflow-pt1/02.jpg','assets/photos/le-sserafim/pureflow-pt1/03.jpg','assets/photos/le-sserafim/pureflow-pt1/04.jpg','assets/photos/le-sserafim/pureflow-pt1/05.jpg','assets/photos/le-sserafim/pureflow-pt1/06.jpg','assets/photos/le-sserafim/pureflow-pt1/07.jpg','assets/photos/le-sserafim/pureflow-pt1/08.jpg','assets/photos/le-sserafim/pureflow-pt1/09.jpg','assets/photos/le-sserafim/pureflow-pt1/10.jpg','assets/photos/le-sserafim/pureflow-pt1/11.jpg','assets/photos/le-sserafim/pureflow-pt1/12.jpg','assets/photos/le-sserafim/pureflow-pt1/13.jpg','assets/photos/le-sserafim/pureflow-pt1/14.jpg','assets/photos/le-sserafim/pureflow-pt1/15.jpg','assets/photos/le-sserafim/pureflow-pt1/16.jpg','assets/photos/le-sserafim/pureflow-pt1/17.jpg','assets/photos/le-sserafim/pureflow-pt1/18.jpg','assets/photos/le-sserafim/pureflow-pt1/19.jpg','assets/photos/le-sserafim/pureflow-pt1/20.jpg','assets/photos/le-sserafim/pureflow-pt1/21.jpg','assets/photos/le-sserafim/pureflow-pt1/22.jpg','assets/photos/le-sserafim/pureflow-pt1/23.jpg','assets/photos/le-sserafim/pureflow-pt1/24.jpg','assets/photos/le-sserafim/pureflow-pt1/25.jpg','assets/photos/le-sserafim/pureflow-pt1/26.jpg','assets/photos/le-sserafim/pureflow-pt1/27.jpg','assets/photos/le-sserafim/pureflow-pt1/28.jpg']},
   {t:'TEASER', d:'coulisses du tournage · avril 2026', p:['assets/photos/le-sserafim/trailer-photo-sketch/01.jpg','assets/photos/le-sserafim/trailer-photo-sketch/02.jpg','assets/photos/le-sserafim/trailer-photo-sketch/03.jpg','assets/photos/le-sserafim/trailer-photo-sketch/04.jpg','assets/photos/le-sserafim/trailer-photo-sketch/05.jpg','assets/photos/le-sserafim/trailer-photo-sketch/06.jpg','assets/photos/le-sserafim/trailer-photo-sketch/07.jpg','assets/photos/le-sserafim/trailer-photo-sketch/08.jpg','assets/photos/le-sserafim/trailer-photo-sketch/09.jpg','assets/photos/le-sserafim/trailer-photo-sketch/10.jpg','assets/photos/le-sserafim/trailer-photo-sketch/11.jpg','assets/photos/le-sserafim/trailer-photo-sketch/12.jpg','assets/photos/le-sserafim/trailer-photo-sketch/13.jpg','assets/photos/le-sserafim/trailer-photo-sketch/14.jpg','assets/photos/le-sserafim/trailer-photo-sketch/15.jpg','assets/photos/le-sserafim/trailer-photo-sketch/16.jpg','assets/photos/le-sserafim/trailer-photo-sketch/17.jpg','assets/photos/le-sserafim/trailer-photo-sketch/18.jpg','assets/photos/le-sserafim/trailer-photo-sketch/19.jpg','assets/photos/le-sserafim/trailer-photo-sketch/20.jpg','assets/photos/le-sserafim/trailer-photo-sketch/21.jpg','assets/photos/le-sserafim/trailer-photo-sketch/22.jpg','assets/photos/le-sserafim/trailer-photo-sketch/23.jpg','assets/photos/le-sserafim/trailer-photo-sketch/24.jpg','assets/photos/le-sserafim/trailer-photo-sketch/25.jpg','assets/photos/le-sserafim/trailer-photo-sketch/26.jpg','assets/photos/le-sserafim/trailer-photo-sketch/27.jpg','assets/photos/le-sserafim/trailer-photo-sketch/28.jpg','assets/photos/le-sserafim/trailer-photo-sketch/29.jpg','assets/photos/le-sserafim/trailer-photo-sketch/30.jpg','assets/photos/le-sserafim/trailer-photo-sketch/31.jpg','assets/photos/le-sserafim/trailer-photo-sketch/32.jpg','assets/photos/le-sserafim/trailer-photo-sketch/33.jpg','assets/photos/le-sserafim/trailer-photo-sketch/34.jpg','assets/photos/le-sserafim/trailer-photo-sketch/35.jpg','assets/photos/le-sserafim/trailer-photo-sketch/36.jpg']},
   {t:'POCHETTE', d:'coulisses de la prise de vue · mai 2026', p:['assets/photos/le-sserafim/jacket-photo-sketch/01.jpg','assets/photos/le-sserafim/jacket-photo-sketch/02.jpg','assets/photos/le-sserafim/jacket-photo-sketch/03.jpg','assets/photos/le-sserafim/jacket-photo-sketch/04.jpg','assets/photos/le-sserafim/jacket-photo-sketch/05.jpg','assets/photos/le-sserafim/jacket-photo-sketch/06.jpg','assets/photos/le-sserafim/jacket-photo-sketch/07.jpg','assets/photos/le-sserafim/jacket-photo-sketch/08.jpg','assets/photos/le-sserafim/jacket-photo-sketch/09.jpg','assets/photos/le-sserafim/jacket-photo-sketch/10.jpg','assets/photos/le-sserafim/jacket-photo-sketch/11.jpg','assets/photos/le-sserafim/jacket-photo-sketch/12.jpg','assets/photos/le-sserafim/jacket-photo-sketch/13.jpg','assets/photos/le-sserafim/jacket-photo-sketch/14.jpg','assets/photos/le-sserafim/jacket-photo-sketch/15.jpg','assets/photos/le-sserafim/jacket-photo-sketch/16.jpg','assets/photos/le-sserafim/jacket-photo-sketch/17.jpg','assets/photos/le-sserafim/jacket-photo-sketch/18.jpg','assets/photos/le-sserafim/jacket-photo-sketch/19.jpg','assets/photos/le-sserafim/jacket-photo-sketch/20.jpg','assets/photos/le-sserafim/jacket-photo-sketch/21.jpg','assets/photos/le-sserafim/jacket-photo-sketch/22.jpg','assets/photos/le-sserafim/jacket-photo-sketch/23.jpg','assets/photos/le-sserafim/jacket-photo-sketch/24.jpg','assets/photos/le-sserafim/jacket-photo-sketch/25.jpg','assets/photos/le-sserafim/jacket-photo-sketch/26.jpg','assets/photos/le-sserafim/jacket-photo-sketch/27.jpg','assets/photos/le-sserafim/jacket-photo-sketch/28.jpg','assets/photos/le-sserafim/jacket-photo-sketch/29.jpg','assets/photos/le-sserafim/jacket-photo-sketch/30.jpg','assets/photos/le-sserafim/jacket-photo-sketch/31.jpg','assets/photos/le-sserafim/jacket-photo-sketch/32.jpg','assets/photos/le-sserafim/jacket-photo-sketch/33.jpg','assets/photos/le-sserafim/jacket-photo-sketch/34.jpg','assets/photos/le-sserafim/jacket-photo-sketch/35.jpg','assets/photos/le-sserafim/jacket-photo-sketch/36.jpg','assets/photos/le-sserafim/jacket-photo-sketch/37.jpg','assets/photos/le-sserafim/jacket-photo-sketch/38.jpg','assets/photos/le-sserafim/jacket-photo-sketch/39.jpg','assets/photos/le-sserafim/jacket-photo-sketch/40.jpg','assets/photos/le-sserafim/jacket-photo-sketch/41.jpg','assets/photos/le-sserafim/jacket-photo-sketch/42.jpg']}
  ],
  rel:[
  {id:'fb426d76-525d-4b25-90d1-fa4d1b3140c9', t:"FEARLESS", kind:'EP', date:'2 mai 2022', y:2022, v:'', label:'SOURCE MUSIC',
   k:'#5B7FA6', art:'wave', tone:'l', cover:'',
   note:"Les débuts du groupe, en mai 2022, chez Source Music."},
  {id:'cfc67890-7a0a-465a-b817-d506f57b9058', t:"ANTIFRAGILE", kind:'EP', date:'17 octobre 2022', y:2022, v:'', label:'SOURCE MUSIC',
   k:'#C8A45C', art:'ring', tone:'d', cover:'',
   note:""},
  {id:'a8eccf2a-ff65-412f-8cdd-6085424c190d', t:"Choices", kind:'Single', date:'8 janvier 2023', y:2023, v:'', label:'SOURCE MUSIC',
   k:'#8E9E8A', art:'split', tone:'l', cover:'',
   note:""},
  {id:'be1d9f08-297f-4832-99cc-015003e051ae', t:"UNFORGIVEN", kind:'Album', date:'1er mai 2023', y:2023, v:'', label:'SOURCE MUSIC',
   k:'#9A8FA6', art:'grid', tone:'d', cover:'',
   note:""},
  {id:'c5b62214-587a-4929-aabf-2347c140de3f', t:"이브, 프시케 그리고 푸른 수염의 아내", kind:'Single', date:'23 mai 2023', y:2023, v:'', label:'SOURCE MUSIC',
   k:'#A67C6B', art:'arc', tone:'l', cover:'',
   note:""},
  {id:'14e1a869-8378-47df-818e-07dfe1d0c7fc', t:"ジュエリー", kind:'Single', date:'25 juillet 2023', y:2023, v:'', label:'SOURCE MUSIC',
   k:'#6E8FA0', art:'dot', tone:'d', cover:'',
   note:""},
  {id:'73403a9a-ef08-4747-8e5a-4a59eb65506c', t:"EASY", kind:'EP', date:'19 février 2024', y:2024, v:'', label:'SOURCE MUSIC',
   k:'#B08A9E', art:'wave', tone:'l', cover:'',
   note:""},
  {id:'f4ccbdf3-1d77-4f56-b77f-5d0f3888271c', t:"CRAZY", kind:'EP', date:'30 août 2024', y:2024, v:'', label:'SOURCE MUSIC',
   k:'#7E9E7C', art:'ring', tone:'d', cover:'',
   note:""},
  {id:'609b43ab-dd7c-41ff-87af-60cbcaa6322f', t:"Star Signs", kind:'Single', date:'12 novembre 2024', y:2024, v:'', label:'SOURCE MUSIC',
   k:'#A9926A', art:'split', tone:'l', cover:'',
   note:""},
  {id:'50bcea80-692f-4e36-a7a5-825a3233cb13', t:"HOT", kind:'EP', date:'14 mars 2025', y:2025, v:'', label:'SOURCE MUSIC',
   k:'#8090A8', art:'grid', tone:'d', cover:'',
   note:""},
  {id:'aa3e5cef-8d9e-49e0-9388-ef88d8de617b', t:"Come Over", kind:'Single', date:'31 mars 2025', y:2025, v:'', label:'SOURCE MUSIC',
   k:'#5B7FA6', art:'arc', tone:'l', cover:'',
   note:""},
  {id:'44e25a9c-9dc4-42a5-b514-ba4e0956a5e8', t:"DIFFERENT", kind:'Single', date:'9 juin 2025', y:2025, v:'', label:'HYBE JAPAN',
   k:'#C8A45C', art:'dot', tone:'d', cover:'',
   note:""},
  {id:'ffca8aaa-b0bd-49f5-9800-9d273f4735a7', t:"butterflies", kind:'Single', date:'10 juillet 2025', y:2025, v:'', label:'Plush Records',
   k:'#8E9E8A', art:'wave', tone:'l', cover:'',
   note:""},
  {id:'24962998-431e-4790-bafd-a34124919115', t:"the NOISE", kind:'Single', date:'26 septembre 2025', y:2025, v:'', label:'Virgin Music',
   k:'#9A8FA6', art:'ring', tone:'d', cover:'',
   note:""},
  {id:'8fecf07e-3715-4df4-9f47-1f7204f71b94', t:"SPAGHETTI", kind:'Single', date:'24 octobre 2025', y:2025, v:'', label:'SOURCE MUSIC',
   k:'#A67C6B', art:'split', tone:'l', cover:'',
   note:""},
  {id:'8ff15315-a8f2-40df-9f7f-44b89c1fda60', t:"Pearlies (My oyster is the world)", kind:'Single', date:'24 octobre 2025', y:2025, v:'', label:'SOURCE MUSIC',
   k:'#6E8FA0', art:'grid', tone:'d', cover:'',
   note:""},
  {id:'0a344a27-75d4-40df-9300-94fafa7509be', t:"CELEBRATION", kind:'Single', date:'24 avril 2026', y:2026, v:'', label:'Virgin Music',
   k:'#B08A9E', art:'arc', tone:'l', cover:'',
   note:""},
  {id:'195b4cc7-40c2-414b-b9b2-5e2c69eb612f', t:"‘PUREFLOW’ pt.1", kind:'Album', date:'22 mai 2026', y:2026, v:'', label:'SOURCE MUSIC',
   k:'#7E9E7C', art:'dot', tone:'d', cover:'',
   note:""},
  {id:'50625dfe-f537-4b7b-8782-112338299aaf', t:"BOOMPALA", kind:'Single', date:'22 mai 2026', y:2026, v:'', label:'SOURCE MUSIC',
   k:'#A9926A', art:'wave', tone:'l', cover:'',
   note:""},
  {id:'c20f68e8-125e-4cf9-8edd-f27e1bc8d2bf', t:"ICONIC BY MISTAKE", kind:'Single', date:'10 juin 2026', y:2026, v:'', label:'Belift Lab',
   k:'#8090A8', art:'ring', tone:'d', cover:'',
   note:""},
  ]},
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
/* Le dessin allégé : sur un appareil tactile, ou dans une fenêtre étroite. Ce
   n'est pas une question de goût mais de budget — un téléphone tient rarement
   seize images par seconde de plus sous un flou par pochette. */
var LEGER=false;
try{
  LEGER=(window.matchMedia&&window.matchMedia('(pointer:coarse)').matches)
    ||innerWidth<760;
}catch(e){}

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
  /* Les comptes viennent de changer, donc les largeurs aussi. */
  glisse();
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
/* ─────────── le curseur des groupes segmentés ───────────
   Un seul objet qui se déplace, plutôt qu'un fond qui s'allume ici et s'éteint
   là. Il faut le remesurer chaque fois que la sélection change **ou que les
   intitulés changent de longueur** — les filtres portent un compte, qui n'est pas
   le même d'un artiste à l'autre. */
function glisse(){
  [].slice.call(document.querySelectorAll('.ctlbar .seg')).forEach(function(g){
    var i=g.querySelector('.glis');
    if(!i)return;
    var b=g.querySelector('button[aria-pressed="true"]');
    /* Aucune vue sélectionnée — on est dans une fiche : le curseur s'efface au
       lieu de rester sur la dernière. */
    if(!b||!b.offsetWidth){i.style.opacity='0';return;}
    i.style.opacity='1';
    i.style.width=b.offsetWidth+'px';
    i.style.transform='translateX('+b.offsetLeft+'px)';
  });
}
/* Les intitulés arrivent avec la fonte : mesurés avant, ils sont faux. */
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(glisse);
addEventListener('resize',glisse);

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
var DV_W=736,DV_H=1220,DV_SX=70.5,DV_SY=48,DV_SW=595,DV_SH=452;
/* La barre sortie occupe un bandeau réservé en haut : le boîtier se met à
   l'échelle dans ce qui reste, de sorte qu'aucun des deux ne recouvre l'autre,
   à aucune taille de fenêtre. */
var DV_BAND=62;
var DEV=false;
try{DEV=localStorage.getItem('wte-dev')==='1';}catch(e){}

/* La barre de commandes et le lecteur **sortent de l'écran** plutôt que
   d'y être dupliqués : on déplace les mêmes nœuds, donc tous les gestionnaires
   suivent sans être recâblés et l'état des boutons reste celui qu'il était. On
   retient d'où ils viennent pour les y remettre à l'identique. */
var outMoved=[];
function deviceMove(on){
  if(on){
    if(outMoved.length)return;
    /* La barre sort, réduite à son seul bouton d'options — le reste de son
       contenu a rejoint la pile de menus. Le lecteur sort aussi. La visite, elle,
       vit hors de `#app` : elle est déjà dehors. */
    ['.ctlbar','#player'].forEach(function(sel){
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

  /* La pile de menus est une affaire d'appareil : en sortir la laisserait
     couvrir toute la page, sans molette pour la parcourir. */
  if(!DEV&&STATE==='menu')setState('parcours');
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
  /* La barre vient de reparaître ou de disparaître : son curseur de sélection se
     mesure sur des largeurs qui n'existaient pas il y a un instant. */
  glisse();
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
/* ─────────── la pile de menus ───────────
   La barre de commandes flottait au-dessus du boîtier ; rien ne flotte au-dessus
   d'un baladeur. Tout ce qu'elle portait est descendu ici : les artistes, les
   types de parution, les vues, les réglages. On ne pilote plus l'appareil de
   l'extérieur — on entre dans ses menus, à la molette, et l'on en ressort par
   `menu`, un cran à la fois.

   Une **pile** plutôt qu'un menu : chaque niveau est une page, et chaque page
   sait se refaire — un réglage qu'on bascule se relit aussitôt dans sa propre
   ligne, sans quitter l'endroit où l'on est. Chaque niveau retient aussi **où
   l'on en était** : revenir en arrière, c'est retrouver son rang, pas repartir du
   premier item.

   La molette y déplace la sélection au lieu de parcourir : le même geste, appliqué
   à ce que l'écran montre. */
var menuI=0,MPILE=[];

function mIt(n,v,go){return {n:n,v:v,go:go};}
function mNiveau(){return MPILE[MPILE.length-1];}

/* ─── les pages ─── */
function pRacine(){
  return {t:'menu',l:[
    /* Il y avait ici une entrée « Musique » qui ouvrait les types de parution de
       l'artiste courant. Elle mentait par omission : on y arrivait sur CORTIS
       sans jamais pouvoir en changer, comme si le site n'en connaissait qu'un.
       On passe donc par les artistes, toujours — c'est un cran de plus et une
       ambiguïté de moins, et c'est le chemin d'un vrai baladeur. */
    mIt('Artistes',ARTISTS[A].name,function(){menuPush(pArtistes);}),
    mIt('Rechercher','⌕',function(){menuFerme();qOuvre(true);}),
    mIt('Images','›',function(){menuFerme();openPhotos();}),
    mIt('Planche','›',function(){menuFerme();setState('survey');}),
    mIt('Réglages','›',function(){menuPush(pReglages);})
  ]};
}
function pArtistes(){
  return {t:'artistes',l:ARTISTS.map(function(a,i){
    return mIt(a.name,String(a.rel.length),function(){
      /* On change d'artiste **sans quitter le menu** : on descend aussitôt dans
         ses types de parution, comme un baladeur descend d'un cran. */
      if(i!==A)buildArtist(i,false);
      menuPush(pMusique);
    });
  })};
}
function pMusique(){
  var c={tout:REL.length,Album:0,EP:0,Single:0};
  REL.forEach(function(r){if(c[r.kind]!==undefined)c[r.kind]++;});
  function f(lbl,cle){
    return mIt(lbl,String(c[cle]||0),function(){
      FILTER=cle;
      [].slice.call(document.querySelectorAll('#filters button')).forEach(function(x){
        x.setAttribute('aria-pressed',x.getAttribute('data-f')===cle?'true':'false');
      });
      glisse();
      CUR=0;rebuild();hud();menuFerme();goTo(0,false);
      requestAnimationFrame(render);
    });
  }
  return {t:ARTISTS[A].name,l:[
    f('Tout','tout'),f('Albums','Album'),f('EP','EP'),f('Singles','Single')]};
}
function mFondNom(){
  var L=fondsListe();
  if(L)for(var i=0;i<L.length;i++)if(L[i].f===FOND)return L[i].n;
  return 'aucun';
}
function pFonds(){
  var L=fondsListe()||[];
  var l=[mIt('Aucun',FOND?'':'✓',function(){FOND='';applyFond();menuRefaire();})];
  L.forEach(function(x){
    l.push(mIt(x.n,FOND===x.f?'✓':x.g,function(){
      FOND=x.f;applyFond();menuRefaire();
    }));
  });
  return {t:'fond d\'écran',l:l};
}
function pStickers(){
  var L=stkListe()||[];
  var l=L.map(function(x){
    return mIt(x.n,'poser',function(){stkAdd(x.f);menuRefaire();});
  });
  if(POSE.length)l.push(mIt('Tout retirer',String(POSE.length),function(){
    POSE=[];stkSel=-1;stkSave();stkPaint();menuRefaire();
  }));
  if(!l.length)l.push(mIt('Aucun autocollant','',function(){}));
  return {t:'autocollants',l:l};
}
function pAccents(){
  return {t:'accent',l:ACCENTS.map(function(n){
    return mIt(n,ACC===n?'✓':'',function(){ACC=n;applyAcc();menuRefaire();});
  })};
}
function pSurfaces(){
  var l=[mIt('Aucune',SURF?'':'✓',function(){SURF='';applySurf();menuRefaire();})];
  SURFACES.forEach(function(n){
    l.push(mIt(n,SURF===n?'✓':'',function(){SURF=n;applySurf();menuRefaire();}));
  });
  return {t:'surface',l:l};
}
function pReglages(){
  return {t:'réglages',l:[
    mIt('Thème',tn[tm[ti]],function(){
      ti=(ti+1)%tm.length;applyTheme();menuRefaire();}),
    mIt('Accent',ACC,function(){menuPush(pAccents);}),
    mIt('Surface',SURF||'aucune',function(){menuPush(pSurfaces);}),
    /* On ne tape pas au doigt sur une molette : cette ligne mène au champ, elle
       ne prétend pas le remplacer. */
    mIt('Gravure',GRAV[0]||GRAV[1]||'aucune',function(){
      menuFerme();optOpen(true);pli('#gravH','#gravW',true);
      var e=$('#grav1');if(e&&e.focus)setTimeout(function(){e.focus();},260);}),
    mIt('Pochettes en pixels',PIX?'oui':'non',function(){
      PIX=!PIX;applyPix();menuRefaire();}),
    mIt('Liste appariée',LIST?'oui':'non',function(){
      LIST=!LIST;applyList();menuRefaire();}),
    mIt('Trame de l\'écran',GLASS?'oui':'non',function(){
      GLASS=!GLASS;applyGlass();menuRefaire();}),
    mIt('Fond d\'écran',mFondNom(),function(){menuPush(pFonds);}),
    mIt('Autocollants',POSE.length?String(POSE.length)+' posé'+(POSE.length>1?'s':''):'aucun',
      function(){menuPush(pStickers);}),
    mIt('Son',sfx.on()?'activé':'coupé',function(){
      sfx.set(!sfx.on());
      $('#mSnd').setAttribute('aria-pressed',sfx.on()?'true':'false');
      $('#mSndL').textContent=sfx.on()?'activé':'coupé';
      menuRefaire();}),
    mIt('Visite guidée','↻',function(){menuFerme();tourShow(0);}),
    mIt('À propos','↗',function(){aboutOpen(true);}),
    /* La seule porte de sortie : sans elle, la barre cachée enfermerait dans
       l'appareil qui n'aurait pas trouvé la molette. */
    mIt('Sortir de l\'appareil','✕',function(){
      menuFerme();DEV=false;applyDevice(true);})
  ]};
}

/* ─── la pile ─── */
function menuPush(fn){MPILE.push({f:fn,i:0});paintMenu();}
function menuPop(){
  if(MPILE.length<=1)return false;
  MPILE.pop();paintMenu();return true;
}
function menuOuvre(){
  if(!MPILE.length)MPILE=[{f:pRacine,i:0}];
  paintMenu();setState('menu');
}
function menuFerme(){setState('parcours');}
function menuRefaire(){paintMenu(true);}

function paintMenu(garde){
  var e=mNiveau();
  if(!e){MPILE=[{f:pRacine,i:0}];e=mNiveau();}
  var p=e.f();
  e.p=p;
  if(!garde)menuI=e.i||0;
  if(menuI>=p.l.length)menuI=p.l.length-1;
  if(menuI<0)menuI=0;
  e.i=menuI;
  $('#amenusT').textContent=p.t;
  $('#amenusIn').innerHTML=p.l.map(function(x,i){
    return '<li aria-current="'+(i===menuI?'true':'false')+'">'
      +'<button type="button" data-k="'+i+'"><span>'+esc(x.n)+'</span>'
      +'<i>'+esc(x.v||'')+'</i></button></li>';
  }).join('');
}
function menuMark(){
  var e=mNiveau();if(e)e.i=menuI;
  var r=$('#amenusIn').children;
  for(var i=0;i<r.length;i++)r[i].setAttribute('aria-current',i===menuI?'true':'false');
  /* La ligne choisie doit rester en vue : une page de réglages est plus longue
     que l'écran de l'appareil. */
  var el=r[menuI],box=$('#amenus');
  if(el&&box){
    var top=el.offsetTop,bot=top+el.offsetHeight;
    if(top<box.scrollTop)box.scrollTop=top-8;
    else if(bot>box.scrollTop+box.clientHeight)box.scrollTop=bot-box.clientHeight+8;
  }
}
function menuGo(d){
  var e=mNiveau();if(!e||!e.p)return;
  var n=e.p.l.length;if(!n)return;
  menuI=((menuI+d)%n+n)%n;
  sfx.step();menuMark();
}
function menuPick(){
  var e=mNiveau();if(!e||!e.p)return;
  var x=e.p.l[menuI];
  if(x&&x.go)x.go();
}
$('#amenus').addEventListener('click',function(e){
  var b=e.target.closest('button[data-k]');
  if(!b)return;
  menuI=parseInt(b.getAttribute('data-k'),10);menuMark();menuPick();
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
    /* `menu` remonte d'un cran, toujours : d'une fiche au parcours, d'une page de
       menu à celle du dessus, et du parcours — ou de la planche, ou des images,
       où l'on n'est arrivé que par le menu — au menu lui-même. Au sommet de la
       pile, il ne se passe rien : c'est le sommet. */
    if(STATE==='focus'){close();return;}
    if(STATE==='menu'){menuPop();return;}
    menuOuvre();
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
    /* **Une piste joue : le bouton fait ce que son dessin annonce**, pause ou
       reprise, et rien d'autre. C'est sa fonction première ; ouvrir une fiche ne
       vient qu'ensuite, quand il n'y a rien à mettre en pause. */
    if(plToggle())return;
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
    /* Un glisser de pointeur est, par défaut, un glisser de **sélection** : c'est
       lui qui surlignait tout ce que la molette rencontrait. La molette prend le
       geste à son compte, elle doit donc en refuser l'usage prévu. */
    e.preventDefault();
    var r=w.getBoundingClientRect();
    wDrag={cx:r.left+r.width/2,cy:r.top+r.height/2,a:null,
           doigt:e.pointerType!=='mouse'};wAcc=0;
    try{w.setPointerCapture(e.pointerId);}catch(err){}
  });
  /* ─── pourquoi la molette saccadait ───
     Chaque cran appelait `dvNav`, donc `goTo`, donc un défilement **doux** vers la
     pochette suivante. Au doigt, un mouvement circulaire produit des évènements
     par paquets, et le navigateur en livre jusqu'à cent vingt par seconde : on
     déclenchait plusieurs défilements doux par image, chacun **repartant de la
     position courante et annulant le précédent**. L'animation ne se posait jamais.
     Ce n'est donc pas le signal tactile qui est mal retranscrit — il l'est trop
     bien, et c'est ce qu'on en faisait qui ne suivait pas.

     Le geste est maintenant découplé du travail. Le déplacement du doigt ne fait
     qu'**accumuler un angle** ; une boucle d'images consomme cet angle et n'émet
     **qu'un seul mouvement par image**, vers la destination finale plutôt qu'un
     par cran. Le défilement doux a dès lors une cible stable, et il se pose.

     Le cran est aussi plus large au doigt qu'à la souris : on ne trace pas un
     cercle au millimètre avec un pouce. */
  var wRaf=0;
  function wTick(){
    wRaf=0;
    if(!wDrag)return;
    var seuil=wDrag.doigt?30:22;
    var n=Math.floor(Math.abs(wAcc)/seuil);
    if(n){
      /* Trois crans par image au plus : au-delà, un moulinet enverrait la
         sélection à l'autre bout du catalogue d'un coup de poignet. On ne
         **retire de l'angle que ce qu'on applique** — sinon un geste large serait
         tronqué au lieu d'être étalé, et la molette mangerait la moitié du
         mouvement. Le reste part à l'image suivante. */
      var sg=wAcc>0?1:-1,pris=Math.min(n,3);
      wAcc-=sg*pris*seuil;
      dvNav(sg*pris);
    }
    wRaf=requestAnimationFrame(wTick);
  }
  w.addEventListener('pointermove',function(e){
    if(!wDrag)return;
    var a=Math.atan2(e.clientY-wDrag.cy,e.clientX-wDrag.cx)*180/Math.PI;
    if(wDrag.a!==null){
      var d=a-wDrag.a;
      if(d>180)d-=360; else if(d<-180)d+=360;
      wAcc+=d;
    }
    wDrag.a=a;
    if(!wRaf)wRaf=requestAnimationFrame(wTick);
  });
  ['pointerup','pointercancel','pointerleave'].forEach(function(ev){
    w.addEventListener(ev,function(){
      wDrag=null;wAcc=0;
      if(wRaf){cancelAnimationFrame(wRaf);wRaf=0;}
    });
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

/* ─────────── la visite guidée ───────────
   Elle ne décrit plus, elle **montre en faisant**. Chaque étape peut ouvrir une
   fiche, lancer une piste, entrer dans le boîtier, poser un autocollant : on voit
   la fonction marcher plutôt qu'on n'en lit la promesse.

   C'est un renversement du parti d'avant, qui interdisait à la visite de toucher
   à l'état du site — de peur de laisser le visiteur ailleurs qu'il ne croyait. La
   crainte était juste, la réponse était mauvaise : on ne montre pas un lecteur en
   parlant d'un lecteur. Ce qu'il fallait, c'est **rendre l'état** à la sortie, ce
   que fait `tourRendre` — artiste, parution, vue, thème d'affichage, appareil,
   fond, autocollants et lecteur sont relevés au départ et remis à la fin, qu'on
   aille au bout ou qu'on passe.

   Trois moyens visuels, empruntés à ce qui marche ailleurs :

     - le **projecteur** : tout s'éteint et se floute sauf la commande dont on
       parle. Rien à souligner, il n'y a plus que ça à voir ;
     - la **bulle voyage** avec sa mascotte et vient se poser contre la commande,
       du côté où il y a de la place, une flèche pointée ;
     - le trou du projecteur **glisse** d'une étape à l'autre au lieu de sauter :
       on voit d'où l'on vient.

   Seize étapes, et un bouton *passer* à chacune. La longueur n'est pas un défaut
   quand elle est facultative : qui reste veut savoir. */
var TOUR=[
 {t:'Le parcours',sel:'#field',delai:780,
  avant:function(){tourNet();setState('parcours');goTo(0);},
  x:'Les pochettes défilent à la molette, au glisser, ou aux flèches '
   +'<kbd>←</kbd> <kbd>→</kbd>. Celle du milieu est la parution courante ; '
   +'<kbd>↵</kbd> l\'ouvre.'},
 {t:'La réglette',sel:'#scrub',
  x:'Un trait par parution, dans l\'ordre du temps. Elle dit où l\'on en est, et '
   +'un clic y va directement — c\'est le raccourci quand la discographie '
   +'s\'allonge.'},
 {t:'Trier',sel:'#filters',
  x:'Albums, EP, singles, avec leur nombre en exposant. Le tri se fait sur place, '
   +'sans rien recharger — et depuis une fiche, il en fait sortir.'},
 {t:'Changer d\'artiste',sel:'#brandBtn',
  x:'Le nom en haut à gauche est un bouton : il ouvre la liste des artistes. '
   +'Tout se reconstruit sans quitter la page.'},
 {t:'La liste appariée',sel:'#rlist',delai:520,
  avant:function(){LIST=true;applyList();},
  x:'La voici ouverte pour de bon. Le Cover Flow montre, elle nomme : les deux '
   +'se répondent, et la pochette centrale reste alignée sur la ligne courante. '
   +'La touche <kbd>L</kbd> la rappelle.'},
 {t:'La fiche',sel:'#focus .card',delai:640,
  avant:function(){LIST=false;applyList();open(CUR);},
  x:'On vient d\'en ouvrir une. La pochette vole jusqu\'à sa place, et le disque '
   +'donne son type, sa date, son label, son rang — et ses titres.'},
 {t:'Écouter',sel:'#player',delai:900,
  avant:function(){var b=document.querySelector('#trk .tp');if(b)b.click();},
  x:'Le premier titre vient de partir. <b>Cliquer un titre le joue dans la '
   +'page</b> : le lecteur se pose en bas à droite et y reste, même si l\'on '
   +'referme la fiche. On referme un disque, on continue de l\'écouter.'},
 {t:'Les commandes',sel:'#player .pl-foot',
  x:'<kbd>◂◂</kbd> et <kbd>▸▸</kbd> passent d\'une piste à l\'autre, <kbd>❚❚</kbd> '
   +'met en pause et reprend. Le titre en cours reste marqué dans la liste.'},
 {t:'La pochette en grand',sel:'#focus .plate',
  x:'Un clic dessus l\'ouvre en grand, dans sa définition d\'archive. '
   +'<kbd>esc</kbd> referme, comme partout.'},
 {t:'La planche',sel:'#survey .grid',delai:520,
  avant:function(){close();setState('survey');},
  x:'Toutes les parutions d\'un coup d\'œil. C\'est la vue qu\'on prend pour '
   +'chercher, quand le parcours est celui qu\'on prend pour flâner. La touche '
   +'<kbd>G</kbd> y va aussi.'},
 {t:'Les images',sel:'#pstage',delai:640,
  avant:function(){openPhotos();},
  x:'Les photos sur une hélice qui tourne, une série à la fois. Quand un artiste '
   +'en a plusieurs, un sélecteur apparaît en bas.'},
 {t:'Les pochettes en pixels',sel:'#field',delai:420,
  avant:function(){setState('parcours');PIX=true;applyPix();},
  x:'Voilà ce que ça donne : chaque pochette réduite à 96 px et tramée, comme un '
   +'baladeur de l\'époque l\'aurait affichée. Elles sont fabriquées d\'avance, '
   +'donc l\'affichage est immédiat. Touche <kbd>P</kbd>.'},
 {t:'Le tiroir',sel:'#optmenu',delai:360,
  avant:function(){PIX=false;applyPix();optOpen(true);},
  x:'Tout le reste est là : le thème clair ou sombre, le son, la liste, les '
   +'pixels, le boîtier, les fonds, les autocollants — et les crédits.'},
 {t:'Dans l\'appareil',sel:'#device',delai:900,
  avant:function(){optOpen(false);if(!DEV){DEV=true;applyDevice(true);}},
  x:'Le site vient d\'entrer dans un baladeur dessiné. <b>La barre a disparu</b> : '
   +'rien ne flotte au-dessus d\'un baladeur. La molette commande vraiment — on '
   +'la tourne pour parcourir, <kbd>menu</kbd> remonte, <kbd>▸❚❚</kbd> met en pause.'},
 {t:'La pile de menus',sel:'#app',delai:520,
  avant:function(){menuOuvre();},
  x:'Tout ce que portait la barre est ici : les artistes et, sous chacun, ses '
   +'albums, EP et singles ; les images, la planche, et les réglages jusqu\'au '
   +'fond d\'écran. On descend au bouton central, on remonte par <kbd>menu</kbd>.'},
 {t:'Le fond d\'écran',sel:'#app',delai:640,
  avant:function(){
    menuFerme();
    var L=fondsListe();
    if(L&&L.length){FOND=L[Math.min(8,L.length-1)].f;applyFond();}
  },
  x:'Quatorze fonds rangés par couleur, un voile posé dessus pour que le texte '
   +'reste lisible quelle que soit l\'image. Ils ne se voient que dans '
   +'l\'appareil, où leur définition suffit.'},
 {t:'Les autocollants',sel:function(){return document.querySelector('.stk');},
  delai:520,marge:66,
  avant:function(){
    var L=stkListe();
    if(L&&L.length&&!POSE.length)stkAdd(L[0].f);
  },
  x:'On vient d\'en poser un. Glissez-le où vous voulez — il refuse l\'écran et '
   +'contourne la molette. Un clic le prend en main : une poignée l\'agrandit, '
   +'le tourne, le retire. Déposez les vôtres dans <code>assets/stickers/</code>.'},
 {t:'C\'est à vous',sel:null,
  avant:function(){tourRendre();},
  x:'Tout est remis comme vous l\'aviez laissé. L\'adresse suit ce que vous '
   +'regardez, donc un disque se partage tel quel. Cette visite se relance quand '
   +'vous voulez, depuis le tiroir.'}
];
var tourI=0,tourEl=null,tourT=0,tourEtat=null;

/* ─── relever l'état, et le rendre ───
   La visite se permet de tout toucher ; elle se doit donc de tout remettre. */
function tourGarder(){
  tourEtat={a:A,cur:CUR,st:STATE,dev:DEV,fond:FOND,pix:PIX,list:LIST,
            pose:JSON.stringify(POSE)};
}
function tourRendre(){
  var e=tourEtat;if(!e)return;
  tourEtat=null;
  plStop();
  POSE=JSON.parse(e.pose);stkSel=-1;stkSave();stkPaint();
  if(FOND!==e.fond){FOND=e.fond;applyFond();}
  if(PIX!==e.pix){PIX=e.pix;applyPix();}
  if(LIST!==e.list){LIST=e.list;applyList();}
  if(DEV!==e.dev){DEV=e.dev;applyDevice(true);}
  if(A!==e.a)buildArtist(e.a,false);
  if(STATE==='focus')close();
  setState(e.st==='focus'?'parcours':e.st);
  goTo(Math.min(e.cur,view.length-1),false);
}
/* Ce qu'il faut éteindre avant de commencer, pour partir d'une page nette. */
function tourNet(){
  optOpen(false);
  loupeOff();
  if(STATE==='focus')close();
  /* On commence toujours hors du boîtier. Les premières étapes désignent la
     barre, la réglette, les filtres — qui n'existent pas dedans : la visite s'y
     serait ouverte en montrant du vide. Elle y entrera au bon moment, et l'état
     de départ sera rendu à la sortie. */
  if(DEV){DEV=false;applyDevice(true);}
}

function tourPose(el,vide,marge){
  var sp=$('#spot'),b=$('#tour'),W=innerWidth,H=innerHeight,m=14;
  /* La marge du trou : huit pixels d'ordinaire, davantage quand l'étape désigne
     une chose qui en traîne une autre — l'autocollant et sa poignée ne se
     comprennent qu'ensemble. */
  var g=marge||8;
  var r=null;
  if(el&&el.getBoundingClientRect){
    var q=el.getBoundingClientRect();
    if(q.width>2&&q.height>2)
      r={l:q.left-g,t:q.top-g,w:q.width+g*2,h:q.height+g*2};
  }
  if(!r||vide)r={l:W/2,t:H/2,w:0,h:0};
  /* On borne dans la fenêtre : une cible qui dépasse laisserait un volet de
     largeur négative, et le pavage se déferait. */
  var l=Math.max(0,Math.min(r.l,W)),t=Math.max(0,Math.min(r.t,H));
  var w=Math.max(0,Math.min(r.w,W-l)),h=Math.max(0,Math.min(r.h,H-t));
  /* Les volets sont pris par leur classe et non par leur rang : un jour où le
     balisage gagnera un nœud, le pavage ne se décalera pas d'un cran. */
  var vh=sp.querySelector('.sp-h'),vb=sp.querySelector('.sp-b'),
      vg=sp.querySelector('.sp-g'),vd=sp.querySelector('.sp-d'),
      vo=sp.querySelector('.sp-o');
  if(!vh||!vb||!vg||!vd||!vo)return;
  function met(e,a,b2,c,d){
    e.style.cssText='left:'+a.toFixed(0)+'px;top:'+b2.toFixed(0)+'px;width:'
      +Math.max(0,c).toFixed(0)+'px;height:'+Math.max(0,d).toFixed(0)+'px';
  }
  met(vh,0,0,W,t);                         /* volet du haut   */
  met(vb,0,t+h,W,H-t-h);                   /* volet du bas    */
  met(vg,0,t,l,h);                         /* volet de gauche */
  met(vd,l+w,t,W-l-w,h);                   /* volet de droite */
  met(vo,l,t,w,h);                         /* l'anneau        */
  sp.classList.toggle('plein',!w||!h);
  sp.hidden=false;

  /* La bulle se pose du côté où il reste de la place. */
  var bw=b.offsetWidth||360,bh=b.offsetHeight||170;
  var msc=b.querySelector('.tour-m');
  var dec=msc?(msc.offsetWidth+12)/2:39;    /* la mascotte décale le panneau */
  var fl='rien',x,y;
  if(!w&&!h){x=(W-bw)/2;y=H-bh-m*3;}
  else if(H-(t+h)>bh+m*2){fl='haut';y=t+h+m;x=l+w/2-bw/2+dec;}
  else if(t>bh+m*2){fl='bas';y=t-bh-m;x=l+w/2-bw/2+dec;}
  else if(W-(l+w)>bw+m*2){fl='gauche';x=l+w+m;y=t+h/2-bh/2;}
  else if(l>bw+m*2){fl='droite';x=l-bw-m;y=t+h/2-bh/2;}
  else{x=(W-bw)/2;y=H-bh-m*3;}
  b.setAttribute('data-fl',fl);
  b.style.left=Math.max(m,Math.min(x,W-bw-m)).toFixed(0)+'px';
  b.style.top=Math.max(m,Math.min(y,H-bh-m)).toFixed(0)+'px';
}

function tourShow(i){
  if(i>=TOUR.length){tourEnd();return;}
  if(i<0)i=0;
  if(!tourEtat)tourGarder();
  mascotte();
  tourI=i;
  var e=TOUR[i];
  clearTimeout(tourT);
  if(e.avant){try{e.avant();}catch(err){}}
  $('#tourT').textContent=e.t;
  $('#tourN').textContent=(i+1)+' / '+TOUR.length;
  $('#tourX').innerHTML=e.x;
  $('#tourJ').style.width=Math.round((i+1)/TOUR.length*100)+'%';
  $('#tourNext').textContent=(i===TOUR.length-1)?'terminer':'suivant';
  $('#tourPrev').disabled=i===0;
  var el=$('#tour');
  el.hidden=false;
  requestAnimationFrame(function(){el.classList.add('on');});
  /* La cible n'existe parfois qu'après l'animation que l'étape vient de lancer :
     on la cherche au moment de viser, pas avant. */
  tourT=setTimeout(function(){
    tourEl=(typeof e.sel==='function')?e.sel()
      :(e.sel?document.querySelector(e.sel):null);
    tourPose(tourEl,!e.sel,e.marge);
  },reduce?0:(e.delai||120));
}
function tourEnd(){
  clearTimeout(tourT);
  tourRendre();
  tourEl=null;
  var el=$('#tour'),sp=$('#spot');
  el.classList.remove('on');
  sp.classList.add('plein');
  setTimeout(function(){el.hidden=true;sp.hidden=true;},reduce?0:320);
  try{localStorage.setItem('wte-tour','1');}catch(e){}
}
$('#tourNext').addEventListener('click',function(){tourShow(tourI+1);});
$('#tourPrev').addEventListener('click',function(){tourShow(tourI-1);});
$('#tourSkip').addEventListener('click',tourEnd);
$('#mTour').addEventListener('click',function(){optOpen(false);tourShow(0);});
/* La fenêtre change de taille : le trou et la bulle sont ailleurs. */
addEventListener('resize',function(){
  if($('#tour').hidden)return;
  tourPose(tourEl,!TOUR[tourI].sel,TOUR[tourI].marge);
});

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
  /* `enablejsapi` n'est **pas** l'API JavaScript de YouTube : c'est l'ouverture
     d'un canal `postMessage` vers l'iframe. Aucun script tiers n'entre dans la
     page — la règle du site tient — et l'on gagne de quoi mettre en pause et
     reprendre, ce que le lecteur ne savait pas faire. */
  $('#plFrame').src='https://www.youtube-nocookie.com/embed/'+encodeURIComponent(t.yt)
    +'?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1'
    +(/^https?:$/.test(location.protocol)
      ?'&origin='+encodeURIComponent(location.origin):'');
  PLAY=true;plBtn();
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
  PL.i=-1;PL.key='';PLAY=false;plMark();
}

/* ─── pause et reprise ───
   Le bouton ▸❚❚ de la molette ouvrait une fiche quoi qu'il arrive : il ne faisait
   jamais ce que son dessin annonce. Il fallait d'abord que le lecteur sache
   s'arrêter, ce qu'il ne savait pas — aucun bouton nulle part ne le permettait.

   On parle à l'iframe par `postMessage`, sans charger la moindre ligne de
   YouTube. Et comme une commande envoyée ne dit pas ce qui se passe ensuite, on
   ouvre l'écoute en retour : l'iframe prévient alors de chaque changement d'état,
   si bien que le bouton reste juste même quand la pause vient des commandes de
   YouTube plutôt que des nôtres. */
var PLAY=false;
function plCmd(f){
  var w=$('#plFrame').contentWindow;
  if(!w)return false;
  try{w.postMessage(JSON.stringify({event:'command',func:f,args:[]}),'*');return true;}
  catch(e){return false;}
}
function plBtn(){
  var b=$('#plPP');if(!b)return;
  b.textContent=PLAY?'\u275A\u275A':'\u25B8';
  b.setAttribute('aria-label',PLAY?'Mettre en pause':'Reprendre');
}
function plToggle(){
  if($('#player').hidden||PL.i<0)return false;
  PLAY=!PLAY;
  plCmd(PLAY?'playVideo':'pauseVideo');
  plBtn();
  return true;
}
$('#plPP').addEventListener('click',plToggle);
/* L'iframe ne parle que si on lui demande de parler, et seulement une fois
   chargée. */
$('#plFrame').addEventListener('load',function(){
  var w=$('#plFrame').contentWindow;
  if(!w)return;
  try{w.postMessage(JSON.stringify(
    {event:'listening',id:1,channel:'widget'}),'*');}catch(e){}
});
addEventListener('message',function(e){
  if(!/^https?:\/\/([\w-]+\.)*youtube(-nocookie)?\.com$/.test(e.origin||''))return;
  var d=e.data;
  if(typeof d==='string'){try{d=JSON.parse(d);}catch(err){return;}}
  if(!d||d.event!=='onStateChange')return;
  var n=(d.info&&typeof d.info==='object')?d.info.playerState:d.info;
  if(n===1&&!PLAY){PLAY=true;plBtn();}
  else if((n===2||n===0)&&PLAY){PLAY=false;plBtn();}
});
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
     de repli qu'une adresse vide, qui renverrait au parcours. Mais un repli
     constant ne vaut guère mieux — deux titres coréens partageraient la même
     adresse, et la première des deux fiches répondrait pour les deux. On tire
     donc du titre un jeton stable, laid mais unique. */
  if(x)return x;
  var h=0;
  for(var i=0;i<t.length;i++)h=((h<<5)-h+t.charCodeAt(i))|0;
  return 'x'+Math.abs(h).toString(36);
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
  glisse();
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
    /* On n'écrit que si la valeur a changé. À soixante images par seconde, sur une
       quinzaine de pochettes, c'est autant de recalculs de style évités — et sur
       un téléphone, écrire une propriété coûte plus cher que de comparer deux
       chaînes. Les valeurs sont arrondies au dixième, ce qui rend les répétitions
       fréquentes : une pochette du fond de pile ne bouge presque plus. */
    var tr='translateX('+tx.toFixed(1)+'px) translateZ('
      +tz.toFixed(1)+'px) rotateY('+(-sg*58*Math.min(1,ao/0.85)).toFixed(1)
      +'deg) scale('+sc.toFixed(3)+')';
    if(lifts[i]._t!==tr){lifts[i]._t=tr;lifts[i].style.transform=tr;}
    /* Le fond de la pile s'assombrit, comme une rangée de disques dans un bac :
       c'est ce qui donne sa profondeur au tas, plus que l'échelle. */
    /* Le flou du fond de pile est **le poste le plus cher de la boucle** : un
       flou gaussien par pochette, recalculé à chaque image, sur une quinzaine de
       pochettes. Un ordinateur ne le sent pas ; un téléphone ne fait que ça, et
       le défilement devient une suite de saccades. On le retire là où il coûte —
       l'assombrissement suffit à creuser la pile, c'est même lui qui la creuse le
       plus, le flou n'ajoutait qu'une profondeur de champ. */
    var fi='brightness('+(1-Math.min(ao*0.13,0.42)).toFixed(3)+')'
      +((!LEGER&&ao>0.7)?' blur('+Math.min((ao-0.7)*1.6,3.2).toFixed(2)+'px)':'');
    if(faces[i]._f!==fi){faces[i]._f=fi;faces[i].style.filter=fi;}
    var zi=String(200-Math.round(ao*10));
    if(s._z!==zi){s._z=zi;s.style.zIndex=zi;}
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
document.addEventListener('click',function(e){
  /* Un clic ailleurs referme les tiroirs — sauf s'il vient de la visite. L'étape
     du tiroir l'ouvrait dans son `avant`, puis le clic sur « suivant » remontait
     jusqu'ici et le refermait aussitôt : la commande désignée restait close, et le
     projecteur cernait une boîte repliée, trop petite pour qu'on y voie rien. */
  if(e.target&&e.target.closest&&e.target.closest('#tour'))return;
  amenuOpen(false);optOpen(false);
});

/* ─────────── la recherche ───────────
   La seule chose du site qui **traverse les artistes**. Partout ailleurs il faut
   d'abord savoir de qui relève un disque ; ici on tape un titre et on y va.

   L'index se construit **à la première ouverture**, pas au chargement : deux cent
   quarante-huit entrées à assembler ne valent pas d'être payées par qui ne
   cherchera jamais. Une fois monté, il tient en mémoire pour la session.

   Le classement n'est pas une simple correspondance : ce qui **commence** par ce
   qu'on tape passe avant ce qui commence un mot, qui passe avant ce qui le
   contient quelque part. C'est la seule façon que « wave » donne d'abord *wave*
   et non *nouvelle vague*. */
var Q=null,qI=0,qRes=[];

function qNorm(t){
  t=String(t).toLowerCase();
  if(t.normalize)t=t.normalize('NFD').replace(/[̀-ͯ]/g,'');
  return t.replace(/[‘’']/g,'');
}
function qIndex(){
  if(Q)return Q;
  Q=[];
  ARTISTS.forEach(function(a,ai){
    a.rel.forEach(function(r,ri){
      Q.push({t:'d',a:ai,r:ri,n:r.t,s:a.name,c:qNorm(r.t+' '+a.name)});
      var d=(typeof TRACKS!=='undefined'&&TRACKS)?TRACKS[r.rid||r.id]:null;
      if(!d||!d.g)return;
      d.g.forEach(function(g){
        g.forEach(function(x){
          Q.push({t:'p',a:ai,r:ri,n:x[1],s:r.t,ar:a.name,c:qNorm(x[1]+' '+r.t+' '+a.name)});
        });
      });
    });
  });
  return Q;
}
function qScore(e,q){
  var i=e.c.indexOf(q);
  if(i<0)return -1;
  if(i===0)return 0;                                   /* commence par */
  if(/[\s\-–—(\/]/.test(e.c.charAt(i-1)))return 1;     /* commence un mot */
  return 2;                                            /* contenu quelque part */
}
function qCherche(txt){
  var q=qNorm(txt).trim();
  var box=$('#qRes'),vide=$('#qVide');
  qRes=[];qI=0;
  if(!q){
    box.innerHTML='';
    vide.textContent='Cinq artistes, '+REL_TOTAL()+' parutions. Tapez un titre, '
      +'un disque ou un nom.';
    return;
  }
  var L=qIndex(),h=[];
  for(var i=0;i<L.length;i++){
    var sc=qScore(L[i],q);
    if(sc>=0)h.push([sc,i,L[i]]);
  }
  /* À égalité de pertinence, l'ordre du catalogue : c'est celui que le reste du
     site montre, et deux classements différents pour la même chose désorientent. */
  h.sort(function(x,y){return x[0]-y[0]||x[1]-y[1];});
  qRes=h.slice(0,40).map(function(x){return x[2];});
  box.innerHTML=qRes.map(function(e,k){
    return '<li role="option" aria-selected="'+(k===0?'true':'false')+'">'
      +'<button type="button" data-k="'+k+'">'
      +'<span class="q-t">'+(e.t==='p'?'♪':'▦')+'</span>'
      +'<span class="q-n">'+esc(e.n)+'</span>'
      +'<span class="q-s">'+esc(e.t==='p'?e.s:e.s)+'</span></button></li>';
  }).join('');
  vide.textContent=qRes.length?'':'Rien de ce nom dans le catalogue.';
  qMarque();
}
function REL_TOTAL(){
  var n=0;ARTISTS.forEach(function(a){n+=a.rel.length;});return n;
}
function qMarque(){
  var r=$('#qRes').children;
  for(var i=0;i<r.length;i++)r[i].setAttribute('aria-selected',i===qI?'true':'false');
  var el=r[qI],box=$('#qRes');
  if(el&&box){
    var t=el.offsetTop,b=t+el.offsetHeight;
    if(t<box.scrollTop)box.scrollTop=t-6;
    else if(b>box.scrollTop+box.clientHeight)box.scrollTop=b-box.clientHeight+6;
  }
}
function qBouge(d){
  if(!qRes.length)return;
  qI=Math.max(0,Math.min(qRes.length-1,qI+d));
  qMarque();
}
function qOuvre(on){
  var el=$('#quete');
  if(on){
    qIndex();
    el.hidden=false;
    requestAnimationFrame(function(){
      el.classList.add('on');
      var i=$('#qIn');if(i){i.value='';i.focus();}
      qCherche('');
    });
  }else{
    el.classList.remove('on');
    setTimeout(function(){el.hidden=true;},reduce?0:200);
  }
}
/* Aller au résultat : changer d'artiste s'il le faut, **lever le filtre** — sinon
   la parution cherchée peut ne pas être dans la vue courante et l'on ouvrirait
   dans le vide —, puis ouvrir la fiche, et jouer la piste si c'en était une. */
function qAller(e){
  if(!e)return;
  qOuvre(false);
  if(e.a!==A)buildArtist(e.a,false);
  if(FILTER!=='tout'){
    FILTER='tout';
    [].slice.call(document.querySelectorAll('#filters button')).forEach(function(x){
      x.setAttribute('aria-pressed',x.getAttribute('data-f')==='tout'?'true':'false');
    });
    glisse();rebuild();
  }
  var p=view.indexOf(e.r);
  if(p<0)return;
  CUR=p;hud();
  open(p);
  if(e.t!=='p')return;
  /* La liste des titres se pose après le vol de la pochette : on attend qu'elle
     soit là plutôt que de deviner un délai au jugé. */
  var essais=0;
  (function attend(){
    var b=document.querySelectorAll('#trk .tp');
    for(var i=0;i<b.length;i++){
      if(b[i].textContent===e.n){b[i].click();return;}
    }
    if(++essais<20)setTimeout(attend,80);
  })();
}
if($('#qIn')){
  $('#qIn').addEventListener('input',function(){qCherche(this.value);});
  $('#qIn').addEventListener('keydown',function(e){
    if(e.key==='ArrowDown'){e.preventDefault();qBouge(1);}
    else if(e.key==='ArrowUp'){e.preventDefault();qBouge(-1);}
    else if(e.key==='Enter'){e.preventDefault();qAller(qRes[qI]);}
    else if(e.key==='Escape'){e.preventDefault();qOuvre(false);}
  });
}
if($('#qRes'))$('#qRes').addEventListener('click',function(e){
  var b=e.target.closest('button[data-k]');
  if(b)qAller(qRes[parseInt(b.getAttribute('data-k'),10)]);
});
if($('#qX'))$('#qX').addEventListener('click',function(){qOuvre(false);});
if($('#quete'))$('#quete').addEventListener('click',function(e){
  if(e.target===this)qOuvre(false);
});
if($('#mQuete'))$('#mQuete').addEventListener('click',function(){
  optOpen(false);qOuvre(true);
});

/* ─────────── le tiroir d'options ───────────
   La barre portait sept commandes de front : les trois vues, deux options
   d'affichage, le thème et le son. Les vues restent en vue ; le reste passe
   dans un tiroir, ce qui rend la barre lisible et laisse de la place pour ce
   qu'on y ajoutera. Un clic sur une option ne le referme pas — on en règle
   souvent deux à la suite. */
var optmenu=$('#optmenu'),optBtn=$('#mOpt');
/* Les lignes arrivent l'une après l'autre, décalées d'un pas — mais le retard
   est posé **ici**, sur chaque ligne, plutôt qu'écrit rang par rang dans la
   feuille. Il l'était : seize règles `nth-child` pour un tiroir qui en compte
   aujourd'hui vingt-trois, si bien que les sept dernières n'avaient aucun
   retard et arrivaient avant celles du milieu. La cascade se lisait à l'envers
   par le bas. Une ligne ajoutée demain prend sa place sans qu'on y pense.

   Le pas et le plafond viennent de la feuille : c'est elle qui tient le temps
   du site, et une valeur écrite en double finirait par mentir. */
(function(){
  var cs=getComputedStyle(document.documentElement);
  var n=optmenu.children.length;
  var pas=parseFloat(cs.getPropertyValue('--pas'))||18;
  /* Le pas se **resserre** plutôt que le retard ne se plafonne. Plafonné, tout
     ce qui dépassait le quart de seconde arrivait ensemble : avec vingt-trois
     lignes, les neuf dernières partageaient le même retard et tombaient d'un
     bloc au bout d'une cascade. Un pas de 240 / (n−1) donne à chaque ligne son
     propre instant sans dépasser le budget, et il se règle tout seul le jour
     où l'on en ajoute une. */
  if(n>1)pas=Math.min(pas,240/(n-1));
  [].slice.call(optmenu.children).forEach(function(el,i){
    el.style.setProperty('--d',Math.round(i*pas)+'ms');
  });
})();
function optOpen(on){
  optmenu.classList.toggle('on',on);
  optBtn.setAttribute('aria-expanded',on?'true':'false');
}
optBtn.addEventListener('click',function(e){
  e.stopPropagation();
  optOpen(!optmenu.classList.contains('on'));
});
optmenu.addEventListener('click',function(e){e.stopPropagation();});

/* ─────────── le fond d'écran ───────────
   Les images vivent dans `assets/background/` ; `tools/build-fonds.py` les
   recense, les range par famille de couleur et en tire les vignettes du tiroir.
   Rien n'est écrit à la main ici : déposer une image et relancer l'outil suffit.

   On choisit un fond en le voyant, jamais à son nom — d'autant que ces fichiers
   arrivent nommés par empreinte. Le tiroir montre donc des vignettes, groupées
   par couleur, ce qui est l'ordre dans lequel on cherche un fond.

   Le site sait vivre sans le manifeste : s'il manque, la section disparaît, son
   titre avec, et rien d'autre ne change. */
var FOND='',fondB=false;
try{FOND=localStorage.getItem('wte-fond')||'';}catch(e){}
function fondsListe(){
  return (typeof FONDS!=='undefined'&&FONDS&&FONDS.length)?FONDS:null;
}
function paintFonds(){
  var box=$('#fonds');if(!box)return;
  var L=fondsListe();
  if(!L){
    /* Pas de manifeste : l'onglet entier s'efface, son titre avec, et le reste
       du tiroir ne s'aperçoit de rien. */
    var h=$('#fondsH'),w=$('#fondsW');
    if(h)h.remove();
    if(w)w.remove(); else box.remove();
    return;
  }
  /* Les familles sont prises dans l'ordre du manifeste : c'est l'outil qui a
     rangé, du rose au bleu, et non l'ordre où les fichiers se présentent. */
  var noms=[],grp=[];
  L.forEach(function(x){
    var k=noms.indexOf(x.g);
    if(k<0){k=noms.push(x.g)-1;grp.push([]);}
    grp[k].push(x);
  });
  box.innerHTML=
    '<p class="fhint">Le fond ne se voit que dans l\'appareil : les images y sont '
    +'réduites, donc nettes.</p>'
    +'<button class="fnul" type="button" data-f="" aria-pressed="false">aucun fond</button>'
    +noms.map(function(nom,i){
      return '<p class="fg">'+esc(nom)+'</p><div class="fgr">'
        +grp[i].map(function(x){
          return '<button class="fv" type="button" data-f="'+esc(x.f)+'"'
            +' aria-pressed="false" aria-label="Fond d\'écran : '+esc(x.n)+'"'
            +' title="'+esc(x.n)+'">'
            +'<img src="'+esc(x.v)+'" alt="" loading="lazy" width="240" height="150">'
            +'<span>'+esc(x.n)+'</span></button>';
        }).join('')+'</div>';
    }).join('');
}
function applyFond(){
  var L=fondsListe(),it=null,el=$('#fond');
  if(L)for(var i=0;i<L.length;i++)if(L[i].f===FOND)it=L[i];
  /* Un fond retiré du dossier depuis le dernier passage : on revient au fond du
     thème plutôt que d'appeler une image qui n'est plus là. */
  if(!it)FOND='';
  if(it&&el){
    /* On écrit dans la couche qui ne sert pas, puis on bascule : les deux fonds
       se fondent l'un dans l'autre. */
    fondB=!fondB;
    el.style.setProperty(fondB?'--fond-b':'--fond-a','url("'+it.f+'")');
    el.classList.toggle('b',fondB);
  }
  document.documentElement.setAttribute('data-fond',it?'on':'off');
  /* La ligne du menu dit ce qui est choisi, comme « thème » dit clair ou sombre :
     on sait sans avoir à déplier. */
  var lab=$('#fondsL');
  if(lab)lab.textContent=it?it.n:'aucun';
  var box=$('#fonds');
  if(box){
    var bs=box.querySelectorAll('button[data-f]');
    for(var k=0;k<bs.length;k++)
      bs[k].setAttribute('aria-pressed',
        bs[k].getAttribute('data-f')===FOND?'true':'false');
  }
  try{localStorage.setItem('wte-fond',FOND);}catch(e){}
}
/* Fermé au départ, et sans mémoire : on ne vient dans les options que pour une
   chose à la fois, et quatorze vignettes dépliées mettraient la visite guidée
   hors de portée sans défiler. */
function pli(bouton,tiroir,on){
  var b=$(bouton),t=$(tiroir);
  if(t)t.classList.toggle('on',on);
  if(b)b.setAttribute('aria-expanded',on?'true':'false');
}
/* Les cinq dépliants du tiroir se câblaient un à un, cinq fois les mêmes trois
   lignes à un nom près. C'est peu de code et beaucoup d'occasions de se tromper :
   le sixième aurait été copié du cinquième. Ils sont désormais nommés en une
   liste, et la liste se câble seule. */
['fonds','acc','surf','grav','stk'].forEach(function(n){
  var b=$('#'+n+'H'),t=$('#'+n+'W');
  if(!b||!t)return;
  b.addEventListener('click',function(){
    pli('#'+n+'H','#'+n+'W',!t.classList.contains('on'));
  });
  pli('#'+n+'H','#'+n+'W',false);
});
if($('#fonds'))$('#fonds').addEventListener('click',function(e){
  var b=e.target.closest('button[data-f]');if(!b)return;
  FOND=b.getAttribute('data-f');
  applyFond();
});
paintFonds();applyFond();

/* ─────────── le réglage, dans un lien ───────────
   Thème, accent, surface, fond, gravure, autocollants : tout cela vivait dans le
   navigateur de qui l'avait réglé, et nulle part ailleurs. On ne pouvait pas le
   montrer. Encodé dans l'adresse, un réglage devient **transmissible** : on envoie
   son lien, l'autre ouvre le site tel qu'on l'a fait.

   Il passe par la **requête** et non par le fragment. Le fragment sert déjà à dire
   quel disque on regarde, et l'y mêler aurait demandé de démonter une analyse qui
   marche. La requête, elle, ne gêne personne — et le serveur de pages la sert sans
   la lire. Elle est retirée de la barre d'adresse aussitôt appliquée : un réglage
   se reçoit, il ne se colle pas au front.

   **Tout ce qui arrive par le lien est vérifié contre les manifestes.** Sans quoi
   un lien fabriqué poserait l'adresse de son choix dans un fond d'écran ou un
   autocollant — c'est-à-dire ferait charger au visiteur ce qu'il veut. Une valeur
   qu'on ne reconnaît pas est simplement ignorée. */
function reglageCode(){
  var o={t:tm[ti],a:ACC,s:SURF,f:FOND,
         p:PIX?1:0,l:LIST?1:0,g:GLASS?1:0,d:DEV?1:0,
         v:[GRAV[0].slice(0,26),GRAV[1].slice(0,26)],
         k:POSE.map(function(p){
           return [p.f,Math.round(p.x),Math.round(p.y),
                   Math.round(p.r||0),Math.round((p.s||1)*100)/100];
         })};
  try{
    return btoa(unescape(encodeURIComponent(JSON.stringify(o))))
      .replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  }catch(e){return '';}
}
function reglageLire(code){
  var o;
  try{
    var b=code.replace(/-/g,'+').replace(/_/g,'/');
    while(b.length%4)b+='=';
    o=JSON.parse(decodeURIComponent(escape(atob(b))));
  }catch(e){return false;}
  if(!o||typeof o!=='object')return false;

  if(o.t&&tm.indexOf(o.t)>=0){ti=tm.indexOf(o.t);applyTheme();}
  if(o.a&&ACCENTS.indexOf(o.a)>=0){ACC=o.a;applyAcc();}
  if(typeof o.s==='string'&&(o.s===''||SURFACES.indexOf(o.s)>=0)){SURF=o.s;applySurf();}
  if(Array.isArray(o.v)){
    GRAV=[String(o.v[0]||'').slice(0,26),String(o.v[1]||'').slice(0,26)];
    var e1=$('#grav1'),e2=$('#grav2');
    if(e1)e1.value=GRAV[0];
    if(e2)e2.value=GRAV[1];
    applyGrav();
  }
  /* Le fond doit exister dans le manifeste : on ne charge pas une adresse reçue. */
  var LF=fondsListe()||[];
  if(typeof o.f==='string'){
    var ok=!o.f;
    for(var i=0;i<LF.length;i++)if(LF[i].f===o.f)ok=true;
    if(ok){FOND=o.f;applyFond();}
  }
  var LS=stkListe()||[];
  if(Array.isArray(o.k)){
    var connu={};
    LS.forEach(function(x){connu[x.f]=1;});
    POSE=[];
    o.k.slice(0,24).forEach(function(x){
      if(!Array.isArray(x)||!connu[x[0]])return;
      var p={f:x[0],x:+x[1]||0,y:+x[2]||0,r:+x[3]||0,
             s:Math.min(STK_MAX,Math.max(STK_MIN,+x[4]||1))};
      stkClamp(p);POSE.push(p);
    });
    stkSel=-1;stkSave();stkPaint();
  }
  if(typeof o.p!=='undefined'&&!!o.p!==PIX){PIX=!!o.p;applyPix();}
  if(typeof o.l!=='undefined'&&!!o.l!==LIST){LIST=!!o.l;applyList();}
  if(typeof o.g!=='undefined'&&!!o.g!==GLASS){GLASS=!!o.g;applyGlass();}
  if(typeof o.d!=='undefined'&&!!o.d!==DEV){DEV=!!o.d;applyDevice(false);}
  return true;
}
if($('#mLien'))$('#mLien').addEventListener('click',function(){
  var url=location.origin+location.pathname+'?r='+reglageCode()+(location.hash||'');
  var b=$('#mLienL');
  function dit(t){if(!b)return;b.textContent=t;setTimeout(function(){b.textContent='⧉';},1800);}
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(function(){dit('copié');},
      function(){dit('refusé');});
  }else dit('refusé');
});

/* ─────────── la couleur d'accent ───────────
   Un attribut sur la racine, et toute la feuille suit : le verni de sélection est
   une variable, et tout ce qui se choisit s'en sert. Le graphite est le défaut et
   ne pose aucun attribut — rien ne change pour qui ne demande rien. */
var ACCENTS=['graphite','bleu','ambre','vert','rose','violet'];
var ACC='graphite';
try{
  var a=localStorage.getItem('wte-accent');
  if(a&&ACCENTS.indexOf(a)>=0)ACC=a;
}catch(e){}
function applyAcc(){
  if(ACC&&ACC!=='graphite')document.documentElement.setAttribute('data-accent',ACC);
  else document.documentElement.removeAttribute('data-accent');
  var lab=$('#accL');
  if(lab)lab.textContent=ACC;
  var box=$('#accP');
  if(box){
    var b=box.querySelectorAll('button[data-c]');
    for(var i=0;i<b.length;i++)
      b[i].setAttribute('aria-pressed',b[i].getAttribute('data-c')===ACC?'true':'false');
  }
  try{localStorage.setItem('wte-accent',ACC);}catch(e){}
}
function paintAcc(){
  var box=$('#accP');if(!box)return;
  box.innerHTML='<div class="accgr">'+ACCENTS.map(function(n){
    /* La pastille porte l'attribut : elle se peint donc du verni qu'elle propose,
       sans qu'aucune couleur soit redite en JavaScript. */
    return '<button class="accb" type="button" data-c="'+n+'" aria-pressed="false"'
      +(n==='graphite'?'':' data-accent="'+n+'"')
      +' title="'+n+'" aria-label="Accent : '+n+'"></button>';
  }).join('')+'</div>';
}
if($('#accP'))$('#accP').addEventListener('click',function(e){
  var b=e.target.closest('button[data-c]');if(!b)return;
  ACC=b.getAttribute('data-c');applyAcc();
});
paintAcc();applyAcc();

/* ─────────── la gravure ───────────
   Deux lignes, retenues comme le reste. Le seul endroit du site où l'on écrit —
   d'où la seule précaution qui va avec : ce qu'on tape n'est jamais posé en HTML,
   seulement en texte. */
var GRAV=['',''];
try{
  var g=JSON.parse(localStorage.getItem('wte-grav')||'[]');
  if(Array.isArray(g))GRAV=[String(g[0]||''),String(g[1]||'')];
}catch(e){}
function applyGrav(){
  var el=$('#dvGrav');
  var l=[GRAV[0].slice(0,26),GRAV[1].slice(0,26)];
  /* `textContent` et non `innerHTML` : un site où l'on peut écrire est un site où
     quelqu'un écrira une balise. */
  if(el)el.textContent=l.filter(Boolean).join('\n');
  var lab=$('#gravL');
  if(lab)lab.textContent=l[0]||l[1]||'aucune';
  try{localStorage.setItem('wte-grav',JSON.stringify(l));}catch(e){}
}
['#grav1','#grav2'].forEach(function(sel,i){
  var el=$(sel);if(!el)return;
  el.value=GRAV[i];
  el.addEventListener('input',function(){GRAV[i]=el.value;applyGrav();});
});
applyGrav();

/* ─────────── la surface ───────────
   Le sol de la page, dessiné plutôt que photographié. Voir la feuille de style
   pour le pourquoi ; ici il n'y a qu'un attribut à poser sur la racine, et le nom
   à retenir d'une visite à l'autre. */
var SURFACES=['grille','points','lignes','brosse','toile','damier','grain','chevrons'];
var SURF='';
try{SURF=localStorage.getItem('wte-surf')||'';}catch(e){}
if(SURF&&SURFACES.indexOf(SURF)<0)SURF='';
function applySurf(){
  if(SURF)document.documentElement.setAttribute('data-surface',SURF);
  else document.documentElement.removeAttribute('data-surface');
  var lab=$('#surfL');
  if(lab)lab.textContent=SURF||'aucune';
  var box=$('#surfP');
  if(box){
    var b=box.querySelectorAll('button[data-s]');
    for(var i=0;i<b.length;i++)
      b[i].setAttribute('aria-pressed',b[i].getAttribute('data-s')===SURF?'true':'false');
  }
  try{localStorage.setItem('wte-surf',SURF);}catch(e){}
}
function paintSurf(){
  var box=$('#surfP');if(!box)return;
  box.innerHTML='<div class="surfgr">'
    +'<button class="surfb" type="button" data-s="" aria-pressed="false"'
    +' aria-label="Aucune surface"><i></i><span>aucune</span></button>'
    +SURFACES.map(function(n){
      return '<button class="surfb" type="button" data-s="'+n+'" aria-pressed="false"'
        +' aria-label="Surface : '+n+'"><i data-surface="'+n+'"></i>'
        +'<span>'+n+'</span></button>';
    }).join('')+'</div>';
}
if($('#surfP'))$('#surfP').addEventListener('click',function(e){
  var b=e.target.closest('button[data-s]');if(!b)return;
  SURF=b.getAttribute('data-s');applySurf();
});
paintSurf();applySurf();

/* ─────────── les autocollants ───────────
   On en pose sur le boîtier, on les glisse où l'on veut, ils restent d'une visite
   à l'autre. Ce ne sont pas des ornements dessinés dans le châssis — ceux-là
   avaient été retirés, et à raison : ils encombraient une surface sans que
   personne les ait demandés. Ici c'est l'utilisateur qui pose, déplace et retire.

   Le boîtier a peu de place libre : l'écran en occupe le haut, la molette le
   milieu. Restent la bande entre les deux, les côtés de la molette et le bas.
   Plutôt que d'interdire le reste, le glisser **repousse** — vers le bas pour
   l'écran, radialement pour la molette, ce qui donne l'impression de la
   contourner. On ne peut pas mal poser un autocollant. */
var STK_SIZE=96,STK_MARGE=8;
/* La molette, dans les coordonnées du châssis : les mêmes chiffres que la
   feuille de style, qui la pose à 610 avec 439 de diamètre. */
var STK_WX=DV_W/2,STK_WY=610+219.5,STK_WR=219.5;
/* Les places d'arrivée, à la main comme celles du collage : une composition se
   compose. On y revient en boucle, si bien que trois autocollants posés d'affilée
   ne se recouvrent pas. */
var STK_POSES=[[368,1130],[150,615],[586,615],[200,1132],[536,1132],[368,1163]];
/* Une inclinaison légère, sans quoi un autocollant a l'air imprimé plutôt que
   collé. Elle est prise dans une liste et retenue avec la place — un angle tiré
   au sort changerait à chaque chargement, et l'objet ne serait plus le même. */
var STK_TILT=[-7,5,-3,8,-5,4];
var POSE=[];
try{
  var brut=JSON.parse(localStorage.getItem('wte-stick')||'[]');
  if(Array.isArray(brut))POSE=brut;
}catch(e){}
var stkDrag=null,stkSel=-1;

function stkListe(){
  return (typeof STICKERS!=='undefined'&&STICKERS&&STICKERS.length)?STICKERS:null;
}
function stkNom(f){
  var L=stkListe()||[];
  for(var i=0;i<L.length;i++)if(L[i].f===f)return L[i].n;
  return 'autocollant';
}
function stkClamp(p){
  /* La demi-taille suit l'échelle : un autocollant agrandi doit être repoussé
     d'autant, sinon il mord sur l'écran ou sur la molette en grandissant. */
  var h=STK_SIZE*(p.s||1)/2,m=h+STK_MARGE;
  p.x=Math.min(Math.max(p.x,m),DV_W-m);
  p.y=Math.min(Math.max(p.y,m),DV_H-m);
  var bas=DV_SY+DV_SH+16+h;             /* sous l'écran, rive noire comprise */
  if(p.y<bas)p.y=bas;
  var dx=p.x-STK_WX,dy=p.y-STK_WY,R=STK_WR+h,d=Math.sqrt(dx*dx+dy*dy);
  if(d<R){
    if(d<0.5)p.y=STK_WY+R;              /* pile au centre : on sort par le bas */
    else{p.x=STK_WX+dx/d*R;p.y=STK_WY+dy/d*R;}
  }
  p.x=Math.min(Math.max(p.x,m),DV_W-m);
  p.y=Math.min(Math.max(p.y,m),DV_H-m);
}
function stkCompte(){
  var lab=$('#stkL');
  if(lab)lab.textContent=POSE.length?(POSE.length+' posé'+(POSE.length>1?'s':'')):'aucun';
}
function stkSave(){
  try{localStorage.setItem('wte-stick',JSON.stringify(POSE));}catch(e){}
  stkCompte();
}
function stkMark(){
  var box=$('#dvStick');if(!box)return;
  var b=box.children;
  for(var i=0;i<b.length;i++)b[i].classList.toggle('sel',i===stkSel);
  stkBarPose();
}
function stkPaint(){
  var box=$('#dvStick');if(!box)return;
  box.innerHTML=POSE.map(function(p,i){
    return '<button class="stk" type="button" data-i="'+i+'"'
      +' style="left:'+p.x+'px;top:'+p.y+'px;--r:'+(p.r||0)+'deg;--s:'+(p.s||1)+'"'
      +' aria-label="Autocollant '+esc(stkNom(p.f))
      +' — glisser pour déplacer, cliquer pour régler">'
      +'<img src="'+esc(p.f)+'" alt="" draggable="false"></button>';
  }).join('');
  stkMark();stkCompte();stkBarPose();
}
/* ─── la poignée de réglage ───
   Poser sans pouvoir régler, c'est poser à l'aveugle. La poignée suit
   l'autocollant choisi et tient ce qu'on veut en faire : plus petit, plus grand,
   tourné d'un côté ou de l'autre, retiré, ou validé — auquel cas elle s'efface et
   l'autocollant reste où il est.

   Elle se met **sous** l'autocollant, ou au-dessus s'il n'y a plus de place en
   bas, et son abscisse est bornée pour qu'elle ne sorte jamais du châssis. */
var STK_MIN=0.6,STK_MAX=1.6,STK_PAS=0.15,STK_ANGLE=10;
function stkBarPose(){
  var bar=$('#stkBar');if(!bar)return;
  var p=POSE[stkSel];
  if(stkSel<0||!p){bar.hidden=true;return;}
  bar.hidden=false;
  var h=STK_SIZE*(p.s||1)/2;
  var y=p.y+h+16;
  if(y>DV_H-64)y=p.y-h-16-46;
  bar.style.left=Math.min(Math.max(p.x,148),DV_W-148)+'px';
  bar.style.top=Math.min(Math.max(y,8),DV_H-54)+'px';
}
function stkAdd(f){
  var n=POSE.length,q=STK_POSES[n%STK_POSES.length];
  var p={f:f,x:q[0],y:q[1],r:STK_TILT[n%STK_TILT.length],s:1};
  stkClamp(p);
  POSE.push(p);stkSel=POSE.length-1;
  stkSave();stkPaint();
}
function stkPickPaint(){
  var box=$('#stkP');if(!box)return;
  var L=stkListe();
  if(!L){
    var h=$('#stkH'),w=$('#stkW');
    if(h)h.remove();
    if(w)w.remove(); else box.remove();
    return;
  }
  box.innerHTML=
    '<p class="fhint">Ils se posent sur le boîtier : on ne les voit que dans '
    +'l\'appareil. Glissez pour déplacer, cliquez deux fois pour retirer.</p>'
    +'<div class="stkgr">'+L.map(function(x){
      return '<button class="stkb" type="button" data-f="'+esc(x.f)+'"'
        +' title="'+esc(x.n)+'" aria-label="Poser l\'autocollant '+esc(x.n)+'">'
        +'<img src="'+esc(x.f)+'" alt="" loading="lazy"></button>';
    }).join('')+'</div>'
    +'<button class="fnul" type="button" data-clear="1">tout retirer</button>';
}

if($('#stkP'))$('#stkP').addEventListener('click',function(e){
  var c=e.target.closest('button[data-clear]');
  if(c){POSE=[];stkSel=-1;stkSave();stkPaint();return;}
  var b=e.target.closest('button[data-f]');
  if(b)stkAdd(b.getAttribute('data-f'));
});

var stkBox=$('#dvStick');
if(stkBox){
  stkBox.addEventListener('pointerdown',function(e){
    var b=e.target.closest('.stk');if(!b)return;
    /* Le même défaut que la molette : un glisser non réclamé devient un glisser
       de sélection. Et il ne doit pas non plus faire tourner la molette. */
    e.preventDefault();e.stopPropagation();
    var i=parseInt(b.getAttribute('data-i'),10);
    stkDrag={i:i,b:b,x0:e.clientX,y0:e.clientY,
             px:POSE[i].x,py:POSE[i].y,bouge:false};
    try{b.setPointerCapture(e.pointerId);}catch(err){}
  });
  stkBox.addEventListener('pointermove',function(e){
    if(!stkDrag)return;
    var ex=e.clientX-stkDrag.x0,ey=e.clientY-stkDrag.y0;
    /* Le pointeur se déplace en pixels d'écran, le châssis se mesure en pixels
       virtuels : on divise par le facteur d'échelle, sinon l'autocollant fuit
       sous le doigt d'autant que le boîtier est réduit. */
    if(!stkDrag.bouge&&Math.abs(ex)+Math.abs(ey)>4)stkDrag.bouge=true;
    if(!stkDrag.bouge)return;
    var p=POSE[stkDrag.i];
    p.x=stkDrag.px+ex/(dvZ||1);p.y=stkDrag.py+ey/(dvZ||1);
    stkClamp(p);
    stkDrag.b.style.left=p.x+'px';stkDrag.b.style.top=p.y+'px';
  });
  ['pointerup','pointercancel'].forEach(function(ev){
    stkBox.addEventListener(ev,function(){
      if(!stkDrag)return;
      var d=stkDrag;stkDrag=null;
      if(d.bouge){stkSave();return;}
      /* Un clic prend l'autocollant en main, un second le repose. Retirer se fait
         à la croix de la poignée, jamais par un clic de trop. */
      stkSel=(stkSel===d.i)?-1:d.i;
      stkMark();
    });
  });
}
if($('#stkBar'))$('#stkBar').addEventListener('click',function(e){
  var b=e.target.closest('button[data-act]');
  if(!b||stkSel<0||!POSE[stkSel])return;
  var p=POSE[stkSel],a=b.getAttribute('data-act'),s0=p.s||1;
  if(a==='ok'){stkSel=-1;stkSave();stkPaint();return;}
  if(a==='non'){POSE.splice(stkSel,1);stkSel=-1;stkSave();stkPaint();return;}
  if(a==='moins')p.s=Math.max(STK_MIN,Math.round((s0-STK_PAS)*100)/100);
  else if(a==='plus')p.s=Math.min(STK_MAX,Math.round((s0+STK_PAS)*100)/100);
  else if(a==='gauche')p.r=(p.r||0)-STK_ANGLE;
  else if(a==='droite')p.r=(p.r||0)+STK_ANGLE;
  stkClamp(p);stkSave();stkPaint();
});
stkPickPaint();stkPaint();

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
  glisse();
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
  /* **Ne jamais interpréter une frappe destinée à un champ.** Le site n'en avait
     aucun ; il en a maintenant trois — la gravure et la recherche —, et taper
     « pixels » dans l'un d'eux basculait les pochettes en pixels à la lettre p,
     ouvrait la planche au g et la liste au l. */
  var c=e.target&&e.target.tagName;
  if(c==='INPUT'||c==='TEXTAREA'||(e.target&&e.target.isContentEditable))return;
  if(STATE==='intro'){enter();return;}
  var k=e.key;
  /* La barre oblique ouvre la recherche : c'est la convention, et elle ne sert à
     rien d'autre ici. */
  if(k==='/'){e.preventDefault();qOuvre(true);return;}
  if(k==='ArrowRight'){e.preventDefault();
    if(STATE==='photos')pStep(1); else if(STATE==='focus')open(CUR+1); else goTo(CUR+1);}
  else if(k==='ArrowLeft'){e.preventDefault();
    if(STATE==='photos')pStep(-1); else if(STATE==='focus')open(CUR-1); else goTo(CUR-1);}
  else if(k==='Enter'&&STATE==='parcours'){e.preventDefault();open(CUR);}
  else if(k==='Escape'){e.preventDefault();
    if(!$('#quete').hidden)qOuvre(false);
    else if(!$('#tour').hidden)tourEnd();
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
  var bille=cur.querySelector('b'),halo=cur.querySelector('i');
  var tx=0,ty=0,x=0,y=0,raf=0,shown=false;
  var HOT='button,a,input,[role="option"]';
  var FRAME='.slot,.cell,.pstage';
  /* La bille est posée **dans l'événement**, pas dans la boucle : elle doit
     tomber au pixel où l'on clique, sans une image de retard. Seul le halo est
     interpolé, et c'est lui qui donne la douceur — l'ancien curseur traînait tout
     entier, ce qui était joli et un peu menteur. */
  function pose(){
    if(bille)bille.style.transform='translate3d('+tx+'px,'+ty+'px,0)';
  }
  function loop(){
    raf=0;
    var k=reduce?1:0.22;
    x+=(tx-x)*k;y+=(ty-y)*k;
    if(halo)halo.style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0)';
    if(Math.abs(tx-x)>0.3||Math.abs(ty-y)>0.3)raf=requestAnimationFrame(loop);
  }
  addEventListener('pointermove',function(e){
    if(e.pointerType==='touch')return;
    tx=e.clientX;ty=e.clientY;
    if(!shown){shown=true;x=tx;y=ty;root.classList.add('has-cur');
      if(halo)halo.style.transform='translate3d('+x+'px,'+y+'px,0)';}
    pose();
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
  /* Pas d'ouverture d'elle-même sur un écran étroit ou tactile. La visite éteint
     la page pour éclairer une commande, promène une bulle de 400 px et désigne
     des choses qui n'ont pas la même place au doigt : lancée toute seule sur un
     téléphone, elle se présente comme une panne — un voile sombre en haut de
     l'écran et rien qui réponde. Elle reste dans le tiroir, pour qui la demande. */
  var etroit=innerWidth<760
    ||(window.matchMedia&&window.matchMedia('(pointer:coarse)').matches);
  if(!vu&&!etroit)setTimeout(function(){if(STATE==='parcours')tourShow(0);},1100);
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
/* Le réglage reçu s'applique **en dernier**, après que chaque module a lu sa
   propre mémoire : posé plus haut, il aurait été écrasé par les valeurs retenues
   du navigateur, qui s'assignent au fil du fichier. */
(function(){
  var m=/[?&]r=([A-Za-z0-9\-_]+)/.exec(location.search||'');
  if(!m)return;
  reglageLire(m[1]);
  /* Le réglage se reçoit, il ne se colle pas au front : on le retire de la barre
     d'adresse, en gardant le fragment qui dit ce qu'on regarde. */
  try{history.replaceState(null,'',location.pathname+(location.hash||''));}catch(e){}
})();

readHash(true);
collage();

})();
