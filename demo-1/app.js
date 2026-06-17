'use strict';

/* ═══════════════════════════════════════════════════════════
   ELEMENT DATA  (118 elements)
   Fields: n=número atómico, s=símbolo, name=nombre (es),
           mass=masa atómica, cat=categoría, g=grupo (null=f-block),
           p=periodo, ec=configuración electrónica, desc=descripción breve
   ═══════════════════════════════════════════════════════════ */
const ELEMENTS = [
  // ── Periodo 1 ──────────────────────────────────────────
  { n:1,   s:'H',  name:'Hidrógeno',     mass:1.008,    cat:'nonmetal',             g:1,    p:1, ec:'1s¹',                            desc:'El elemento más abundante del universo. Componente esencial del agua y los combustibles.' },
  { n:2,   s:'He', name:'Helio',          mass:4.003,    cat:'noble-gas',            g:18,   p:1, ec:'1s²',                            desc:'Gas noble inerte, el segundo más abundante. Usado en globos, dirgibles y resonancias magnéticas.' },
  // ── Periodo 2 ──────────────────────────────────────────
  { n:3,   s:'Li', name:'Litio',          mass:6.941,    cat:'alkali-metal',         g:1,    p:2, ec:'[He] 2s¹',                       desc:'Metal alcalino muy ligero. Clave en baterías recargables y tratamientos del trastorno bipolar.' },
  { n:4,   s:'Be', name:'Berilio',        mass:9.012,    cat:'alkaline-earth-metal', g:2,    p:2, ec:'[He] 2s²',                       desc:'Metal ligero y rígido. Tóxico; usado en aleaciones de alta precisión y ventanas de rayos X.' },
  { n:5,   s:'B',  name:'Boro',           mass:10.81,    cat:'metalloid',            g:13,   p:2, ec:'[He] 2s² 2p¹',                   desc:'Metaloide con propiedades semiconductoras. Clave en fibra de vidrio, Pyrex y ácido bórico.' },
  { n:6,   s:'C',  name:'Carbono',        mass:12.011,   cat:'nonmetal',             g:14,   p:2, ec:'[He] 2s² 2p²',                   desc:'Base de toda la química orgánica y la vida. Existe como diamante, grafito y grafeno.' },
  { n:7,   s:'N',  name:'Nitrógeno',      mass:14.007,   cat:'nonmetal',             g:15,   p:2, ec:'[He] 2s² 2p³',                   desc:'Forma el 78 % de la atmósfera terrestre. Esencial en proteínas, ADN y fertilizantes.' },
  { n:8,   s:'O',  name:'Oxígeno',        mass:15.999,   cat:'nonmetal',             g:16,   p:2, ec:'[He] 2s² 2p⁴',                   desc:'Imprescindible para la respiración aerobia. Segundo elemento más abundante en la corteza terrestre.' },
  { n:9,   s:'F',  name:'Flúor',          mass:18.998,   cat:'halogen',              g:17,   p:2, ec:'[He] 2s² 2p⁵',                   desc:'El elemento más electronegativo. Muy reactivo; presente en pastas dentales y plásticos fluorados.' },
  { n:10,  s:'Ne', name:'Neón',           mass:20.180,   cat:'noble-gas',            g:18,   p:2, ec:'[He] 2s² 2p⁶',                   desc:'Gas noble inerte. Famoso por su uso en letreros luminosos de color rojo-naranja.' },
  // ── Periodo 3 ──────────────────────────────────────────
  { n:11,  s:'Na', name:'Sodio',          mass:22.990,   cat:'alkali-metal',         g:1,    p:3, ec:'[Ne] 3s¹',                       desc:'Metal alcalino reactivo con el agua. Principal componente de la sal de mesa (NaCl).' },
  { n:12,  s:'Mg', name:'Magnesio',       mass:24.305,   cat:'alkaline-earth-metal', g:2,    p:3, ec:'[Ne] 3s²',                       desc:'Metal ligero y resistente. Usado en aleaciones aeronáuticas y como cofactor enzimático.' },
  { n:13,  s:'Al', name:'Aluminio',       mass:26.982,   cat:'post-transition-metal',g:13,   p:3, ec:'[Ne] 3s² 3p¹',                   desc:'Metal ligero y abundante. Ampliamente usado en envases, construcción y transporte.' },
  { n:14,  s:'Si', name:'Silicio',        mass:28.086,   cat:'metalloid',            g:14,   p:3, ec:'[Ne] 3s² 3p²',                   desc:'Semiconductor base de la industria electrónica. El segundo elemento más abundante en la corteza.' },
  { n:15,  s:'P',  name:'Fósforo',        mass:30.974,   cat:'nonmetal',             g:15,   p:3, ec:'[Ne] 3s² 3p³',                   desc:'Elemento esencial para la vida. Presente en el ADN, ARN, huesos y fertilizantes.' },
  { n:16,  s:'S',  name:'Azufre',         mass:32.06,    cat:'nonmetal',             g:16,   p:3, ec:'[Ne] 3s² 3p⁴',                   desc:'No metal amarillo con olor característico. Clave en proteínas, medicamentos y ácido sulfúrico.' },
  { n:17,  s:'Cl', name:'Cloro',          mass:35.45,    cat:'halogen',              g:17,   p:3, ec:'[Ne] 3s² 3p⁵',                   desc:'Gas halógeno tóxico de color verdoso. Usado en desinfección de agua potable y producción de PVC.' },
  { n:18,  s:'Ar', name:'Argón',          mass:39.948,   cat:'noble-gas',            g:18,   p:3, ec:'[Ne] 3s² 3p⁶',                   desc:'Gas noble, tercer componente más abundante del aire. Usado como atmósfera inerte en soldadura.' },
  // ── Periodo 4 ──────────────────────────────────────────
  { n:19,  s:'K',  name:'Potasio',        mass:39.098,   cat:'alkali-metal',         g:1,    p:4, ec:'[Ar] 4s¹',                       desc:'Metal alcalino esencial para la función celular, nerviosa y muscular en organismos vivos.' },
  { n:20,  s:'Ca', name:'Calcio',         mass:40.078,   cat:'alkaline-earth-metal', g:2,    p:4, ec:'[Ar] 4s²',                       desc:'Mineral más abundante del cuerpo humano. Fundamental para huesos, dientes y señalización celular.' },
  { n:21,  s:'Sc', name:'Escandio',       mass:44.956,   cat:'transition-metal',     g:3,    p:4, ec:'[Ar] 3d¹ 4s²',                   desc:'Metal de transición raro. Usado en aleaciones ligeras para equipos deportivos y lámparas.' },
  { n:22,  s:'Ti', name:'Titanio',        mass:47.867,   cat:'transition-metal',     g:4,    p:4, ec:'[Ar] 3d² 4s²',                   desc:'Metal muy resistente y ligero. Usado en aeronáutica, implantes quirúrgicos y pinturas blancas.' },
  { n:23,  s:'V',  name:'Vanadio',        mass:50.942,   cat:'transition-metal',     g:5,    p:4, ec:'[Ar] 3d³ 4s²',                   desc:'Metal duro utilizado para endurecer el acero. Cofactor enzimático en algunos organismos.' },
  { n:24,  s:'Cr', name:'Cromo',          mass:51.996,   cat:'transition-metal',     g:6,    p:4, ec:'[Ar] 3d⁵ 4s¹',                   desc:'Metal brillante y resistente a la corrosión. Clave en el acero inoxidable y recubrimientos.' },
  { n:25,  s:'Mn', name:'Manganeso',      mass:54.938,   cat:'transition-metal',     g:7,    p:4, ec:'[Ar] 3d⁵ 4s²',                   desc:'Usado en la producción de acero, baterías alcalinas y como oxidante en la fotosíntesis.' },
  { n:26,  s:'Fe', name:'Hierro',         mass:55.845,   cat:'transition-metal',     g:8,    p:4, ec:'[Ar] 3d⁶ 4s²',                   desc:'El metal más utilizado por la humanidad. Base del acero y transportador de oxígeno en la sangre.' },
  { n:27,  s:'Co', name:'Cobalto',        mass:58.933,   cat:'transition-metal',     g:9,    p:4, ec:'[Ar] 3d⁷ 4s²',                   desc:'Usado en imanes permanentes, baterías de ion-litio, pigmentos azules y aleaciones duras.' },
  { n:28,  s:'Ni', name:'Níquel',         mass:58.693,   cat:'transition-metal',     g:10,   p:4, ec:'[Ar] 3d⁸ 4s²',                   desc:'Metal brillante y resistente a la corrosión. Usado en monedas, aceros y baterías recargables.' },
  { n:29,  s:'Cu', name:'Cobre',          mass:63.546,   cat:'transition-metal',     g:11,   p:4, ec:'[Ar] 3d¹⁰ 4s¹',                  desc:'Excelente conductor eléctrico. Usado en cables, tuberías, monedas y circuitos electrónicos.' },
  { n:30,  s:'Zn', name:'Zinc',           mass:65.38,    cat:'transition-metal',     g:12,   p:4, ec:'[Ar] 3d¹⁰ 4s²',                  desc:'Usado para galvanizar el acero, en aleaciones como el latón y como mineral esencial en la dieta.' },
  { n:31,  s:'Ga', name:'Galio',          mass:69.723,   cat:'post-transition-metal',g:13,   p:4, ec:'[Ar] 3d¹⁰ 4s² 4p¹',              desc:'Metal que se funde con la temperatura corporal. Clave en semiconductores como GaN y GaAs.' },
  { n:32,  s:'Ge', name:'Germanio',       mass:72.63,    cat:'metalloid',            g:14,   p:4, ec:'[Ar] 3d¹⁰ 4s² 4p²',              desc:'Semiconductor utilizado en fibra óptica, detectores de infrarrojos y transistores.' },
  { n:33,  s:'As', name:'Arsénico',       mass:74.922,   cat:'metalloid',            g:15,   p:4, ec:'[Ar] 3d¹⁰ 4s² 4p³',              desc:'Metaloide tóxico. Tiene aplicaciones en semiconductores, pesticidas y preservantes de madera.' },
  { n:34,  s:'Se', name:'Selenio',        mass:78.971,   cat:'nonmetal',             g:16,   p:4, ec:'[Ar] 3d¹⁰ 4s² 4p⁴',              desc:'Elemento traza esencial para la salud. Usado en células fotovoltaicas y fotocopiadoras.' },
  { n:35,  s:'Br', name:'Bromo',          mass:79.904,   cat:'halogen',              g:17,   p:4, ec:'[Ar] 3d¹⁰ 4s² 4p⁵',              desc:'Único no metal líquido a temperatura ambiente. Usado en retardantes de llama y fotografía.' },
  { n:36,  s:'Kr', name:'Kriptón',        mass:83.798,   cat:'noble-gas',            g:18,   p:4, ec:'[Ar] 3d¹⁰ 4s² 4p⁶',              desc:'Gas noble raro. Usado en lámparas de alta eficiencia y como gas inerte en doble acristalamiento.' },
  // ── Periodo 5 ──────────────────────────────────────────
  { n:37,  s:'Rb', name:'Rubidio',        mass:85.468,   cat:'alkali-metal',         g:1,    p:5, ec:'[Kr] 5s¹',                       desc:'Metal alcalino muy reactivo. Usado en células fotovoltaicas, relojes atómicos y fireworks.' },
  { n:38,  s:'Sr', name:'Estroncio',      mass:87.62,    cat:'alkaline-earth-metal', g:2,    p:5, ec:'[Kr] 5s²',                       desc:'Metal reactivo. Sus compuestos emiten color rojo brillante en fuegos artificiales.' },
  { n:39,  s:'Y',  name:'Itrio',          mass:88.906,   cat:'transition-metal',     g:3,    p:5, ec:'[Kr] 4d¹ 5s²',                   desc:'Metal de transición usado en láseres de granate (YAG), LEDs blancos y superconductores.' },
  { n:40,  s:'Zr', name:'Zirconio',       mass:91.224,   cat:'transition-metal',     g:4,    p:5, ec:'[Kr] 4d² 5s²',                   desc:'Metal muy resistente a la corrosión. Usado en reactores nucleares, cerámica dental y joyas.' },
  { n:41,  s:'Nb', name:'Niobio',         mass:92.906,   cat:'transition-metal',     g:5,    p:5, ec:'[Kr] 4d⁴ 5s¹',                   desc:'Usado para endurecer aceros inoxidables, en superconductores y en monedas conmemorativas.' },
  { n:42,  s:'Mo', name:'Molibdeno',      mass:95.96,    cat:'transition-metal',     g:6,    p:5, ec:'[Kr] 4d⁵ 5s¹',                   desc:'Metal con el tercer punto de fusión más alto. Usado en aceros de alta resistencia y catalizadores.' },
  { n:43,  s:'Tc', name:'Tecnecio',       mass:98,       cat:'transition-metal',     g:7,    p:5, ec:'[Kr] 4d⁵ 5s²',                   desc:'Primer elemento producido artificialmente (1937). Radiactivo; usado en medicina nuclear diagnóstica.' },
  { n:44,  s:'Ru', name:'Rutenio',        mass:101.07,   cat:'transition-metal',     g:8,    p:5, ec:'[Kr] 4d⁷ 5s¹',                   desc:'Metal del grupo del platino, muy resistente. Usado en catalizadores y electrónica de disco duro.' },
  { n:45,  s:'Rh', name:'Rodio',          mass:102.906,  cat:'transition-metal',     g:9,    p:5, ec:'[Kr] 4d⁸ 5s¹',                   desc:'Metal muy escaso y valioso. Clave en los catalizadores de los convertidores catalíticos de autos.' },
  { n:46,  s:'Pd', name:'Paladio',        mass:106.42,   cat:'transition-metal',     g:10,   p:5, ec:'[Kr] 4d¹⁰',                      desc:'Cataliza reacciones de hidrogenación. Usado en convertidores catalíticos, joyería y electrónica.' },
  { n:47,  s:'Ag', name:'Plata',          mass:107.868,  cat:'transition-metal',     g:11,   p:5, ec:'[Kr] 4d¹⁰ 5s¹',                  desc:'El mejor conductor eléctrico y térmico. Usado en joyería, fotografía y conductores eléctricos.' },
  { n:48,  s:'Cd', name:'Cadmio',         mass:112.411,  cat:'transition-metal',     g:12,   p:5, ec:'[Kr] 4d¹⁰ 5s²',                  desc:'Metal tóxico y carcinógeno. Usado en baterías Ni-Cd, recubrimientos anticorrosión y pigmentos.' },
  { n:49,  s:'In', name:'Indio',          mass:114.818,  cat:'post-transition-metal',g:13,   p:5, ec:'[Kr] 4d¹⁰ 5s² 5p¹',              desc:'Metal blando y maleable. Su óxido (ITO) es esencial en pantallas táctiles y LCD.' },
  { n:50,  s:'Sn', name:'Estaño',         mass:118.71,   cat:'post-transition-metal',g:14,   p:5, ec:'[Kr] 4d¹⁰ 5s² 5p²',              desc:'Usado en soldaduras, hojalata para conservas, bronce y recubrimiento anticorrosión.' },
  { n:51,  s:'Sb', name:'Antimonio',      mass:121.76,   cat:'metalloid',            g:15,   p:5, ec:'[Kr] 4d¹⁰ 5s² 5p³',              desc:'Metaloide utilizado en retardantes de llama, aleaciones duras y semiconductores.' },
  { n:52,  s:'Te', name:'Teluro',         mass:127.6,    cat:'metalloid',            g:16,   p:5, ec:'[Kr] 4d¹⁰ 5s² 5p⁴',              desc:'Semiconductor raro. Usado en células solares de película delgada (CdTe) y discos ópticos.' },
  { n:53,  s:'I',  name:'Yodo',           mass:126.904,  cat:'halogen',              g:17,   p:5, ec:'[Kr] 4d¹⁰ 5s² 5p⁵',              desc:'Sólido negro-violáceo con vapores característicos. Esencial para la función de la glándula tiroides.' },
  { n:54,  s:'Xe', name:'Xenón',          mass:131.293,  cat:'noble-gas',            g:18,   p:5, ec:'[Kr] 4d¹⁰ 5s² 5p⁶',              desc:'Gas noble denso. Usado en lámparas de flash para fotografía, anestesia y propulsores iónicos.' },
  // ── Periodo 6 ──────────────────────────────────────────
  { n:55,  s:'Cs', name:'Cesio',          mass:132.905,  cat:'alkali-metal',         g:1,    p:6, ec:'[Xe] 6s¹',                       desc:'Metal alcalino muy blando y dorado. Su transición hiperfina define el segundo atómico internacional.' },
  { n:56,  s:'Ba', name:'Bario',          mass:137.327,  cat:'alkaline-earth-metal', g:2,    p:6, ec:'[Xe] 6s²',                       desc:'Metal pesado y reactivo. Su sulfato insoluble se usa como contraste en radiografías gastrointestinales.' },
  // ── Lantánidos (fila 9 del grid) ───────────────────────
  { n:57,  s:'La', name:'Lantano',        mass:138.905,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 5d¹ 6s²',                   desc:'Primer lantánido. Usado en catalizadores de craqueo de petróleo, vidrios ópticos y baterías NiMH.' },
  { n:58,  s:'Ce', name:'Cerio',          mass:140.116,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f¹ 5d¹ 6s²',               desc:'El lantánido más abundante. Usado en catalizadores de automóviles, encendedores y vidrios UV.' },
  { n:59,  s:'Pr', name:'Praseodimio',    mass:140.908,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f³ 6s²',                   desc:'Da color verde al vidrio. Clave en imanes permanentes de alta potencia (NdFeB con Pr).' },
  { n:60,  s:'Nd', name:'Neodimio',       mass:144.242,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f⁴ 6s²',                   desc:'Componente de los imanes permanentes más potentes del mundo (NdFeB). Vital en motores eléctricos.' },
  { n:61,  s:'Pm', name:'Prometio',       mass:145,      cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f⁵ 6s²',                   desc:'Único lantánido sin isótopos estables. Completamente radiactivo y sin ocurrencia natural significativa.' },
  { n:62,  s:'Sm', name:'Samario',        mass:150.36,   cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f⁶ 6s²',                   desc:'Usado en imanes SmCo de alta temperatura y como absorbente de neutrones en reactores nucleares.' },
  { n:63,  s:'Eu', name:'Europio',        mass:151.964,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f⁷ 6s²',                   desc:'Usado como fósforo rojo y azul en televisores, LEDs blancos y como elemento de seguridad en billetes.' },
  { n:64,  s:'Gd', name:'Gadolinio',      mass:157.25,   cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f⁷ 5d¹ 6s²',               desc:'Agente de contraste en resonancias magnéticas (MRI). Propiedades magnéticas excepcionales.' },
  { n:65,  s:'Tb', name:'Terbio',         mass:158.925,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f⁹ 6s²',                   desc:'Produce fósforo verde brillante. Usado en pantallas de alta eficiencia y materiales magnetoestrictivos.' },
  { n:66,  s:'Dy', name:'Disprosio',      mass:162.5,    cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f¹⁰ 6s²',                  desc:'Mejora los imanes de neodimio para altas temperaturas. Clave en turbinas eólicas y autos eléctricos.' },
  { n:67,  s:'Ho', name:'Holmio',         mass:164.930,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f¹¹ 6s²',                  desc:'Tiene el momento magnético más alto de todos los elementos. Usado en imanes y láseres médicos.' },
  { n:68,  s:'Er', name:'Erbio',          mass:167.259,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f¹² 6s²',                  desc:'Dopante en fibras ópticas para amplificadores EDFA. Su óxido da color rosa al vidrio y cerámica.' },
  { n:69,  s:'Tm', name:'Tulio',          mass:168.934,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f¹³ 6s²',                  desc:'El lantánido más escaso. Fuente de radiación X en láseres médicos portátiles.' },
  { n:70,  s:'Yb', name:'Iterbio',        mass:173.04,   cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f¹⁴ 6s²',                  desc:'Usado en los relojes atómicos de red óptica más precisos del mundo y en láseres de estado sólido.' },
  { n:71,  s:'Lu', name:'Lutecio',        mass:174.967,  cat:'lanthanide',           g:null, p:6, ec:'[Xe] 4f¹⁴ 5d¹ 6s²',              desc:'Último lantánido. Usado en detectores PET, catalizadores de refinería y láseres.' },
  // ── Bloque d, periodo 6 (continuación) ─────────────────
  { n:72,  s:'Hf', name:'Hafnio',         mass:178.49,   cat:'transition-metal',     g:4,    p:6, ec:'[Xe] 4f¹⁴ 5d² 6s²',              desc:'Muy resistente a la corrosión. Usado en vainas de combustible nuclear y compuertas de transistores.' },
  { n:73,  s:'Ta', name:'Tántalo',        mass:180.948,  cat:'transition-metal',     g:5,    p:6, ec:'[Xe] 4f¹⁴ 5d³ 6s²',              desc:'Biológicamente inerte y muy resistente. Usado en implantes quirúrgicos y condensadores electrolíticos.' },
  { n:74,  s:'W',  name:'Wolframio',      mass:183.84,   cat:'transition-metal',     g:6,    p:6, ec:'[Xe] 4f¹⁴ 5d⁴ 6s²',              desc:'Tiene el punto de fusión más alto de todos los metales (3422 °C). Usado en filamentos y herramientas.' },
  { n:75,  s:'Re', name:'Renio',          mass:186.207,  cat:'transition-metal',     g:7,    p:6, ec:'[Xe] 4f¹⁴ 5d⁵ 6s²',              desc:'Uno de los metales más raros y densos. Usado en turbinas de aviones y catalizadores de refinería.' },
  { n:76,  s:'Os', name:'Osmio',          mass:190.23,   cat:'transition-metal',     g:8,    p:6, ec:'[Xe] 4f¹⁴ 5d⁶ 6s²',              desc:'El metal más denso conocido (22,59 g/cm³). Usado en puntas de plumas estilográficas y cojinetes.' },
  { n:77,  s:'Ir', name:'Iridio',         mass:192.217,  cat:'transition-metal',     g:9,    p:6, ec:'[Xe] 4f¹⁴ 5d⁷ 6s²',              desc:'El metal más resistente a la corrosión. Marcador del límite Cretácico-Paleógeno (extinción dinosaurios).' },
  { n:78,  s:'Pt', name:'Platino',        mass:195.084,  cat:'transition-metal',     g:10,   p:6, ec:'[Xe] 4f¹⁴ 5d⁹ 6s¹',              desc:'Muy inerte y valioso. Usado en catalizadores de automóviles, joyería y electrodos médicos.' },
  { n:79,  s:'Au', name:'Oro',            mass:196.967,  cat:'transition-metal',     g:11,   p:6, ec:'[Xe] 4f¹⁴ 5d¹⁰ 6s¹',             desc:'Metal precioso, símbolo de riqueza. Excelente conductor no oxidable; usado en electrónica y joyería.' },
  { n:80,  s:'Hg', name:'Mercurio',       mass:200.59,   cat:'transition-metal',     g:12,   p:6, ec:'[Xe] 4f¹⁴ 5d¹⁰ 6s²',             desc:'Único metal líquido a temperatura ambiente (−39 °C). Muy tóxico; usado en termómetros y amalgamas.' },
  { n:81,  s:'Tl', name:'Talio',          mass:204.38,   cat:'post-transition-metal',g:13,   p:6, ec:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',         desc:'Metal pesado muy tóxico. Usado en detectores de infrarrojos y semiconductores.' },
  { n:82,  s:'Pb', name:'Plomo',          mass:207.2,    cat:'post-transition-metal',g:14,   p:6, ec:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',         desc:'Metal pesado y tóxico. Usado en baterías de plomo-ácido, blindaje contra radiación y munición.' },
  { n:83,  s:'Bi', name:'Bismuto',        mass:208.980,  cat:'post-transition-metal',g:15,   p:6, ec:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',         desc:'Metal pesado con brillo iridiscente. Se expande al solidificar. Usado en medicamentos y sustituto del plomo.' },
  { n:84,  s:'Po', name:'Polonio',        mass:209,      cat:'metalloid',            g:16,   p:6, ec:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',         desc:'Elemento radiactivo altamente tóxico, muy raro en la naturaleza. Descubierto por Marie Curie en 1898.' },
  { n:85,  s:'At', name:'Astato',         mass:210,      cat:'halogen',              g:17,   p:6, ec:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',         desc:'El halógeno más pesado y escaso. Completamente radiactivo con vidas medias muy cortas.' },
  { n:86,  s:'Rn', name:'Radón',          mass:222,      cat:'noble-gas',            g:18,   p:6, ec:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',         desc:'Gas noble radiactivo. Puede acumularse en sótanos y constituye el segundo factor de riesgo de cáncer de pulmón.' },
  // ── Periodo 7 ──────────────────────────────────────────
  { n:87,  s:'Fr', name:'Francio',        mass:223,      cat:'alkali-metal',         g:1,    p:7, ec:'[Rn] 7s¹',                       desc:'El metal alcalino más pesado y radiactivo. Extremadamente raro; menos de 30 g existen en la Tierra.' },
  { n:88,  s:'Ra', name:'Radio',          mass:226,      cat:'alkaline-earth-metal', g:2,    p:7, ec:'[Rn] 7s²',                       desc:'Elemento radiactivo descubierto por Marie y Pierre Curie. Emite luz azul-verdosa. Usado en medicina.' },
  // ── Actínidos (fila 10 del grid) ───────────────────────
  { n:89,  s:'Ac', name:'Actinio',        mass:227,      cat:'actinide',             g:null, p:7, ec:'[Rn] 6d¹ 7s²',                   desc:'Primer actínido. Muy radiactivo y raro. Su nombre da origen al término "actínido".' },
  { n:90,  s:'Th', name:'Torio',          mass:232.038,  cat:'actinide',             g:null, p:7, ec:'[Rn] 6d² 7s²',                   desc:'Actínido radiactivo más abundante. Candidato a combustible nuclear del futuro por su abundancia.' },
  { n:91,  s:'Pa', name:'Protactinio',    mass:231.036,  cat:'actinide',             g:null, p:7, ec:'[Rn] 5f² 6d¹ 7s²',               desc:'Actínido radiactivo y muy escaso. Producto de la desintegración del U-235.' },
  { n:92,  s:'U',  name:'Uranio',         mass:238.029,  cat:'actinide',             g:null, p:7, ec:'[Rn] 5f³ 6d¹ 7s²',               desc:'Actínido más conocido. Combustible en reactores nucleares; su U-235 es fisible.' },
  { n:93,  s:'Np', name:'Neptunio',       mass:237,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f⁴ 6d¹ 7s²',               desc:'Primer elemento transuránico sintetizado artificialmente (1940). Producto del proceso nuclear.' },
  { n:94,  s:'Pu', name:'Plutonio',       mass:244,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f⁶ 7s²',                   desc:'Extremadamente radiactivo. Usado en armas nucleares y como combustible en reactores de rápidos.' },
  { n:95,  s:'Am', name:'Americio',       mass:243,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f⁷ 7s²',                   desc:'Elemento sintético. Presente en detectores de humo domésticos como fuente de partículas alfa.' },
  { n:96,  s:'Cm', name:'Curio',          mass:247,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f⁷ 6d¹ 7s²',               desc:'Elemento sintético en honor a Marie y Pierre Curie. Fuente de energía en sondas espaciales.' },
  { n:97,  s:'Bk', name:'Berkelio',       mass:247,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f⁹ 7s²',                   desc:'Sintetizado en el Laboratorio Lawrence Berkeley (1949). Solo existe en cantidades mínimas.' },
  { n:98,  s:'Cf', name:'Californio',     mass:251,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f¹⁰ 7s²',                  desc:'Fuente de neutrones muy potente. Usado en detectores de metales y tratamiento del cáncer.' },
  { n:99,  s:'Es', name:'Einstenio',      mass:252,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f¹¹ 7s²',                  desc:'Descubierto en los residuos de la primera prueba de bomba de hidrógeno (1952).' },
  { n:100, s:'Fm', name:'Fermio',         mass:257,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f¹² 7s²',                  desc:'Elemento sintético en honor a Enrico Fermi. Solo se produce en cantidades de pocos átomos.' },
  { n:101, s:'Md', name:'Mendelevio',     mass:258,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f¹³ 7s²',                  desc:'En honor a Dmitri Mendeléyev, creador de la tabla periódica. Primer elemento producido átomo a átomo.' },
  { n:102, s:'No', name:'Nobelio',        mass:259,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f¹⁴ 7s²',                  desc:'Elemento sintético en honor a Alfred Nobel. Vida media del isótopo más estable: 58 minutos.' },
  { n:103, s:'Lr', name:'Lawrencio',      mass:266,      cat:'actinide',             g:null, p:7, ec:'[Rn] 5f¹⁴ 7p¹',                  desc:'Último actínido. Sintetizado en el Laboratorio Lawrence Berkeley (1961).' },
  // ── Bloque d, periodo 7 (súper pesados) ────────────────
  { n:104, s:'Rf', name:'Rutherfordio',   mass:267,      cat:'transition-metal',     g:4,    p:7, ec:'[Rn] 5f¹⁴ 6d² 7s²',              desc:'Primer elemento superpesado (transactínido). Muy inestable; producido en aceleradores de partículas.' },
  { n:105, s:'Db', name:'Dubnio',         mass:268,      cat:'transition-metal',     g:5,    p:7, ec:'[Rn] 5f¹⁴ 6d³ 7s²',              desc:'Elemento superpesado sintético. Solo se producen unos pocos átomos en cada experimento.' },
  { n:106, s:'Sg', name:'Seaborgio',      mass:271,      cat:'transition-metal',     g:6,    p:7, ec:'[Rn] 5f¹⁴ 6d⁴ 7s²',              desc:'En honor al físico Glenn T. Seaborg, codescubridor de muchos actínidos.' },
  { n:107, s:'Bh', name:'Bohrio',         mass:272,      cat:'transition-metal',     g:7,    p:7, ec:'[Rn] 5f¹⁴ 6d⁵ 7s²',              desc:'En honor al físico Niels Bohr. Tiene isótopos con vidas medias de décimas de segundo.' },
  { n:108, s:'Hs', name:'Hasio',          mass:270,      cat:'transition-metal',     g:8,    p:7, ec:'[Rn] 5f¹⁴ 6d⁶ 7s²',              desc:'Sintetizado en el GSI de Darmstadt. Nombrado en honor al estado alemán de Hesse (Hassia).' },
  { n:109, s:'Mt', name:'Meitnerio',      mass:278,      cat:'transition-metal',     g:9,    p:7, ec:'[Rn] 5f¹⁴ 6d⁷ 7s²',              desc:'En honor a Lise Meitner, pionera en la teoría de la fisión nuclear.' },
  { n:110, s:'Ds', name:'Darmstadtio',    mass:281,      cat:'transition-metal',     g:10,   p:7, ec:'[Rn] 5f¹⁴ 6d⁸ 7s²',              desc:'Sintetizado en el GSI de Darmstadt (1994). Extremadamente inestable.' },
  { n:111, s:'Rg', name:'Roentgenio',     mass:282,      cat:'transition-metal',     g:11,   p:7, ec:'[Rn] 5f¹⁴ 6d⁹ 7s²',              desc:'En honor a Wilhelm Röntgen, descubridor de los rayos X.' },
  { n:112, s:'Cn', name:'Copernicio',     mass:285,      cat:'transition-metal',     g:12,   p:7, ec:'[Rn] 5f¹⁴ 6d¹⁰ 7s²',             desc:'En honor a Nicolás Copérnico. Comportamiento inusual: posiblemente gaseoso a temperatura ambiente.' },
  { n:113, s:'Nh', name:'Nihonio',        mass:286,      cat:'post-transition-metal',g:13,   p:7, ec:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',         desc:'Descubierto en Japón (Nihon). Primer elemento descubierto en Asia, confirmado en 2016.' },
  { n:114, s:'Fl', name:'Flerovio',       mass:289,      cat:'post-transition-metal',g:14,   p:7, ec:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',         desc:'En honor a Georgy Flyorov. Posiblemente gaseoso a temperatura ambiente como el mercurio.' },
  { n:115, s:'Mc', name:'Moscovio',       mass:290,      cat:'post-transition-metal',g:15,   p:7, ec:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',         desc:'En honor a la región de Moscú. Sintetizado en Dubna, Rusia en 2003.' },
  { n:116, s:'Lv', name:'Livermorio',     mass:293,      cat:'post-transition-metal',g:16,   p:7, ec:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',         desc:'En honor al Laboratorio Nacional Lawrence Livermore. Sintetizado en colaboración ruso-americana.' },
  { n:117, s:'Ts', name:'Teneso',         mass:294,      cat:'halogen',              g:17,   p:7, ec:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',         desc:'En honor al estado de Tennessee. El halógeno más pesado conocido; confirmado en 2016.' },
  { n:118, s:'Og', name:'Oganesón',       mass:294,      cat:'noble-gas',            g:18,   p:7, ec:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',         desc:'El último elemento de la tabla periódica, en honor a Yuri Oganessian. Podría no ser gas noble.' },
];

/* ═══════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════ */
const CATEGORY_LABELS = {
  'alkali-metal':          'Metal alcalino',
  'alkaline-earth-metal':  'Metal alcalinotérreo',
  'transition-metal':      'Metal de transición',
  'post-transition-metal': 'Metal del bloque p',
  'metalloid':             'Metaloide',
  'nonmetal':              'No metal',
  'halogen':               'Halógeno',
  'noble-gas':             'Gas noble',
  'lanthanide':            'Lantánido',
  'actinide':              'Actínido',
  'unknown':               'Desconocido',
};

/* ═══════════════════════════════════════════════════════════
   RENDER TABLE
   Grid rows:  1-7 = periodos, 8 = separador (var(--sep-h)),
               9 = lantánidos, 10 = actínidos
   ═══════════════════════════════════════════════════════════ */
function renderTable() {
  const table = document.getElementById('periodic-table');
  table.innerHTML = '';

  // Reference markers at period 6 & 7, group 3 (where La/Ac would be in main table)
  table.appendChild(makeRefCell('lanthanide-ref', 3, 6, '57–71', 'Lantánidos (ver abajo)'));
  table.appendChild(makeRefCell('actinide-ref',   3, 7, '89–103', 'Actínidos (ver abajo)'));

  // Series labels on the left of lanthanide/actinide rows
  table.appendChild(makeSeriesLabel('Lantánidos', 9));
  table.appendChild(makeSeriesLabel('Actínidos', 10));

  // All 118 elements
  ELEMENTS.forEach(el => {
    const cell = makeElementCell(el);

    if (el.cat === 'lanthanide') {
      // La (57) → col 3 … Lu (71) → col 17
      cell.style.gridColumn = String(3 + (el.n - 57));
      cell.style.gridRow    = '9';
    } else if (el.cat === 'actinide') {
      // Ac (89) → col 3 … Lr (103) → col 17
      cell.style.gridColumn = String(3 + (el.n - 89));
      cell.style.gridRow    = '10';
    } else {
      cell.style.gridColumn = String(el.g);
      cell.style.gridRow    = String(el.p);
    }

    table.appendChild(cell);
  });
}

function makeRefCell(typeClass, col, row, text, titleText) {
  const div = document.createElement('div');
  div.className = `series-ref ${typeClass}`;
  div.style.gridColumn = String(col);
  div.style.gridRow    = String(row);
  div.textContent      = text;
  div.title            = titleText;
  return div;
}

function makeSeriesLabel(text, row) {
  const div = document.createElement('div');
  div.className     = 'series-label';
  div.style.gridRow = String(row);
  div.textContent   = text;
  return div;
}

function makeElementCell(el) {
  const div = document.createElement('div');
  div.className  = `element ${el.cat}`;
  div.dataset.n  = el.n;
  div.setAttribute('role', 'gridcell');
  div.setAttribute('tabindex', '0');
  div.title = `${el.name} (${el.s}) — Z=${el.n}`;

  const num  = document.createElement('span'); num.className = 'el-number'; num.textContent = el.n;
  const sym  = document.createElement('span'); sym.className = 'el-symbol'; sym.textContent = el.s;
  const name = document.createElement('span'); name.className = 'el-name';  name.textContent = el.name;
  const mass = document.createElement('span'); mass.className = 'el-mass';  mass.textContent = el.mass;

  div.append(num, sym, name, mass);

  div.addEventListener('click', () => showDetail(el));
  div.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showDetail(el); } });

  return div;
}

/* ═══════════════════════════════════════════════════════════
   LEGEND
   ═══════════════════════════════════════════════════════════ */
function renderLegend() {
  const legend = document.getElementById('legend');
  const cats = [
    ['alkali-metal',          'Metal alcalino'],
    ['alkaline-earth-metal',  'Metal alcalinotérreo'],
    ['transition-metal',      'Metal de transición'],
    ['post-transition-metal', 'Metal del bloque p'],
    ['metalloid',             'Metaloide'],
    ['nonmetal',              'No metal'],
    ['halogen',               'Halógeno'],
    ['noble-gas',             'Gas noble'],
    ['lanthanide',            'Lantánido'],
    ['actinide',              'Actínido'],
  ];

  legend.innerHTML = cats.map(([cat, label]) =>
    `<div class="legend-item" role="listitem">
      <div class="swatch ${cat}" aria-hidden="true"></div>
      <span>${label}</span>
    </div>`
  ).join('');
}

/* ═══════════════════════════════════════════════════════════
   SEARCH / FILTER
   Compares query against name, symbol and atomic number.
   Non-matching elements get class "dimmed" (reduced opacity).
   Grid structure is NEVER modified — positions stay fixed.
   ═══════════════════════════════════════════════════════════ */
function filterElements(query) {
  const q = query.trim().toLowerCase();

  document.querySelectorAll('.element[data-n]').forEach(cell => {
    if (!q) {
      cell.classList.remove('dimmed');
      return;
    }
    const el = ELEMENTS.find(e => e.n === Number(cell.dataset.n));
    if (!el) return;

    const matches = el.name.toLowerCase().includes(q)
                 || el.s.toLowerCase().includes(q)
                 || String(el.n) === q;

    cell.classList.toggle('dimmed', !matches);
  });
}

/* ═══════════════════════════════════════════════════════════
   DETAIL PANEL
   Uses position:fixed overlay — table layout is never touched.
   ═══════════════════════════════════════════════════════════ */
let _activeN = null;

function showDetail(el) {
  _activeN = el.n;

  // Highlight selected element in table
  document.querySelectorAll('.element.selected').forEach(c => c.classList.remove('selected'));
  const cell = document.querySelector(`.element[data-n="${el.n}"]`);
  if (cell) cell.classList.add('selected');

  const catLabel = CATEGORY_LABELS[el.cat] || el.cat;
  const groupStr = el.g != null ? String(el.g) : '—';

  document.getElementById('detail-content').innerHTML = `
    <div class="detail-header">
      <div class="detail-symbol-box ${el.cat}">
        <span class="dsb-number">${el.n}</span>
        <span class="dsb-symbol">${el.s}</span>
        <span class="dsb-name">${el.name}</span>
        <span class="dsb-mass">${el.mass}</span>
      </div>
      <div class="detail-meta">
        <h2 id="detail-name">${el.name}</h2>
        <span class="d-category">${catLabel}</span>
      </div>
    </div>
    <div class="props-grid">
      <div class="prop-card">
        <div class="prop-label">N.º Atómico</div>
        <div class="prop-value">${el.n}</div>
      </div>
      <div class="prop-card">
        <div class="prop-label">Símbolo</div>
        <div class="prop-value">${el.s}</div>
      </div>
      <div class="prop-card">
        <div class="prop-label">Masa atómica</div>
        <div class="prop-value">${el.mass} u</div>
      </div>
      <div class="prop-card">
        <div class="prop-label">Grupo / Periodo</div>
        <div class="prop-value">${groupStr} / ${el.p}</div>
      </div>
    </div>
    <div class="prop-config">
      <div class="prop-label">Configuración electrónica</div>
      <div class="prop-value">${el.ec}</div>
    </div>
    <p class="detail-desc">${el.desc}</p>
  `;

  document.getElementById('detail-overlay').classList.remove('hidden');
}

function closeDetail() {
  document.getElementById('detail-overlay').classList.add('hidden');
  document.querySelectorAll('.element.selected').forEach(c => c.classList.remove('selected'));
  _activeN = null;
}

/* ═══════════════════════════════════════════════════════════
   THEME MANAGEMENT
   ═══════════════════════════════════════════════════════════ */

/**
 * initTheme — sync icon state with the theme already applied by the
 * inline <head> script (which ran before the DOM was ready).
 */
function initTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  // Nothing else needed: data-theme is already set. CSS handles icon visibility.
  // Expose for external use if needed.
  return current;
}

/**
 * toggleTheme — flip between 'light' and 'dark', persist to localStorage.
 */
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('ptable-theme', next); } catch (e) {}
}

/* ═══════════════════════════════════════════════════════════
   EVENTS & INITIALISATION
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Sync icon and expose theme state
  initTheme();
  renderTable();
  renderLegend();

  // Theme toggle
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Search — real-time filtering on every keystroke
  document.getElementById('search-input').addEventListener('input', e => {
    filterElements(e.target.value);
  });

  // Close panel: × button
  document.getElementById('close-btn').addEventListener('click', closeDetail);

  // Close panel: click on the semi-transparent overlay backdrop
  document.getElementById('detail-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('detail-overlay')) closeDetail();
  });

  // Close panel: Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDetail();
  });
});
