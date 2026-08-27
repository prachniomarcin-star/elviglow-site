import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = "https://elviglow.com";
const sourceFile = path.join(dist, "index.html");

if (!fs.existsSync(sourceFile)) {
  console.error("SEO postbuild: dist/index.html not found");
  process.exit(1);
}

const source = fs.readFileSync(sourceFile, "utf8");

const common = `
  <p>ElviGlow is een beauty- en huidstudio in Deventer waar huidverbetering niet begint bij de naam van een apparaat of behandeling, maar bij wat je aan de huid ziet en voelt. Droogte, een doffe teint, zichtbare poriën, een ongelijke structuur, minder stevigheid of eerste lijntjes vragen niet automatisch om dezelfde aanpak. Daarom draait de website om begrijpen, kiezen en daarna pas behandelen.</p>
  <p>Bij gezichtsverzorging kun je kiezen uit microdermabrasie, oxybrasie, waterstofreiniging, Glow Therapy met ampul en masker, liftinggerichte verzorging en microneedling. De behandeling wordt afgestemd op de actuele huidconditie en het doel. Soms is één bezoek een goede start; bij huidkwaliteit, structuur of een langer traject kan een serie of regelmatig verzorgingsritme logischer zijn.</p>
  <p>Microneedling is binnen ElviGlow een regeneratieve richting voor klanten die willen werken aan huidstructuur, poriën, stevigheid en zichtbare tekenen van huidveroudering. Er zijn behandelingen voor gezicht, gezicht en hals, en gezicht, hals en decolleté.</p>
  <p>Naast huidverzorging biedt ElviGlow klassieke manicure, gellak, gel- of acrylverlenging, pedicure, Lycon waxing voor geselecteerde zones en lichaamsbehandelingen zoals vacuum dermomassage en cryolipolyse. De actuele prijzen staan in de prijslijst.</p>
  <p>De Huidacademie legt uit hoe je zichtbare huidproblemen kunt herkennen, waarom thuisverzorging soms voldoende is en wanneer professionele ondersteuning zinvol kan zijn. De mini huidkaart helpt op een eenvoudige, educatieve manier om van probleem naar mogelijke verzorgingsrichting te gaan.</p>
  <p>ElviGlow wil een rustige plek zijn waar je vragen kunt stellen zonder druk om meteen de sterkste of duurste behandeling te kiezen. Je kunt eerst de behandelingen en prijzen bekijken, daarna meer leren in de Huidacademie en pas vervolgens contact opnemen voor een afspraak.</p>
  <p>Goede huidverzorging stopt niet na de afspraak. Thuis blijven milde reiniging, hydratatie, een passende verzorging en dagelijkse zonbescherming belangrijke onderdelen van het geheel.</p>
  <p>Bij een eerste bezoek is het vaak slimmer om de huidreactie te leren kennen dan direct een lange serie vast te leggen. Als de huid rustig reageert en het doel duidelijk is, kan daarna worden besproken of herhaling zinvol is.</p>
  <p>De website is opgebouwd voor klanten uit Deventer en omgeving die graag vooraf willen begrijpen wat een behandeling inhoudt. Uitleg, prijzen, Huidacademie en contact staan daarom in een logische volgorde.</p>`;

const routes = {
  "/": {
    title: "ElviGlow Deventer | Huidverbetering & beauty",
    description: "ElviGlow in Deventer: huidverbetering, microneedling, oxybrasie, huidverzorging, nagels, waxing en lichaamsbehandelingen.",
    h1: "Ziet je huid er moe uit ondanks je dagelijkse verzorging?",
    intro: "Droogte, zichtbare poriën, een doffe teint of minder stevigheid? We kijken eerst naar wat je huid werkelijk nodig heeft. Pas daarna kiezen we de behandeling en het verzorgingsplan.",
  },
  "/zabiegi": {
    title: "Gezichtsbehandelingen Deventer | ElviGlow",
    description: "Gezichtsbehandelingen in Deventer: microdermabrasie, oxybrasie, waterstofreiniging, Glow Therapy, lifting care en microneedling.",
    h1: "Gezichtsbehandelingen afgestemd op wat je huid nu nodig heeft",
    intro: "Van zachte reiniging en opfrissing tot Glow Therapy, lifting care en microneedling. Je hoeft geen behandeling op naam te kiezen: begin bij het huiddoel.",
  },
  "/paznokcie": {
    title: "Nagels & pedicure Deventer | ElviGlow",
    description: "Manicure, gellak, gel- of acrylverlenging en pedicure in Deventer in de rustige, verzorgde ElviGlow-stijl.",
    h1: "Nagels en pedicure in Deventer",
    intro: "Klassieke manicure, gellak, gel- of acrylverlenging, opvullen, verwijderen en pedicure met aandacht voor een nette afwerking en de conditie van de nagelplaat.",
  },
  "/depilacja": {
    title: "Waxen Deventer | Waxbehandelingen & prijzen | ElviGlow",
    description: "Waxen in Deventer voor vrouwen: bovenlip, wenkbrauwen, oksels, armen, benen, rug, bikini en Brazilian. Bekijk zones, voorbereiding en prijzen bij ElviGlow.",
    h1: "Waxen in Deventer: zones, prijzen en voorbereiding",
    intro: "Van bovenlip en wenkbrauwen tot oksels, benen, bikini en Brazilian. Kies hier je waxzone en bekijk de voorbereiding. Zoek je specifiek naar LYCON? Daarvoor heeft ElviGlow een aparte merkpagina.",
  },
  "/cialo": {
    title: "Lichaamsbehandelingen Deventer | ElviGlow",
    description: "Vacuum dermomassage en cryolipolyse in Deventer met eenvoudige prijzen en duidelijke behandelkeuzes.",
    h1: "Lichaamsbehandelingen met een duidelijk plan",
    intro: "Vacuum dermomassage en cryolipolyse zijn aparte lichaamsbehandelingen. Bij cryolipolyse werken we tijdens één bezoek op één gekozen zone.",
  },
  "/wiedza": {
    title: "Huidkennis | ElviGlow Deventer",
    description: "Praktische huidkennis over huidtypes, zichtbare signalen, verzorging en bewuster kiezen van een behandeling.",
    h1: "Begrijp eerst wat je huid laat zien",
    intro: "Huidkennis helpt om niet bij elke droogte, porie of lijn meteen naar de sterkste behandeling te grijpen. Leer signalen herkennen en een logische verzorgingsrichting kiezen.",
  },
  "/akademia-skory": {
    title: "Huidacademie & mini huidkaart | ElviGlow",
    description: "Leer je huid begrijpen met de ElviGlow Huidacademie en mini huidkaart: probleem, mechanisme, doel en verzorgingsrichting.",
    h1: "Huidacademie: probleem, mechanisme en verzorgingsrichting",
    intro: "De ElviGlow Huidacademie maakt huidverzorging begrijpelijker. Gebruik de mini huidkaart om van een zichtbaar probleem naar een mogelijke volgende stap te gaan.",
  },
  "/cennik": {
    title: "Prijslijst beauty & huid Deventer | ElviGlow",
    description: "Actuele prijzen voor gezichtsbehandelingen, microneedling, verzorgingsprogramma's, nagels, waxing en lichaamsbehandelingen.",
    h1: "Prijslijst ElviGlow",
    intro: "Bekijk prijzen per categorie: gezicht, verzorgingsprogramma's, nagels en voeten, waxing en lichaamsbehandelingen.",
  },
  "/abonamenty": {
    title: "Verzorgingsprogramma's | ElviGlow Deventer",
    description: "Regelmatige huidverzorgingsprogramma's voor klanten die liever met een plan werken dan met losse behandelingen.",
    h1: "Regelmatige verzorging in plaats van losse keuzes",
    intro: "Verzorgingsprogramma's zijn bedoeld voor klanten die huidverzorging systematisch willen aanpakken en liever met een plan werken dan steeds opnieuw beginnen.",
  },
  "/kontakt": {
    title: "Contact & afspraak | ElviGlow Deventer",
    description: "Neem contact op met ElviGlow in Deventer voor huidverzorging, microneedling, nagels, waxing of lichaamsbehandelingen.",
    h1: "Contact met ElviGlow in Deventer",
    intro: "Stuur een bericht met de dienst die je interesseert, je gewenste resultaat en wanneer je ongeveer beschikbaar bent.",
  },
};

const homeLocalLinks = `
  <section aria-label="Populaire behandelingen in Deventer">
    <h2>Populaire behandelingen in Deventer</h2>
    <p>
      <a href="/gezichtsbehandeling-deventer">Gezichtsbehandeling Deventer</a> ·
      <a href="/huidverbetering-deventer">Huidverbetering Deventer</a> ·
      <a href="/microneedling-deventer">Microneedling Deventer</a> ·
      <a href="/nagels-deventer">Nagels Deventer</a> ·
      <a href="/depilacja">Waxen Deventer</a> ·
      <a href="/lycon-waxing-deventer">LYCON waxing Deventer</a>
    </p>
    <p>
      <a href="/pl/kosmetyczka-deventer">Kosmetyczka Deventer po polsku</a> ·
      <a href="/pl/gezichtsbehandeling-deventer">Zabiegi na twarz Deventer</a> ·
      <a href="/pl/microneedling-deventer">Microneedling Deventer po polsku</a>
    </p>
  </section>`;

const waxIntentBlock = `
  <section aria-label="Waxen in Deventer per zone">
    <h2>Waxen in Deventer per zone</h2>
    <p>Zoek je waxen in Deventer, dan kun je bij ElviGlow per zone kiezen. Naast kleinere zones zoals bovenlip, wenkbrauwen en oksels zijn er ook behandelingen voor benen, bikinilijn en Brazilian wax.</p>
    <h3>Brazilian wax Deventer</h3>
    <p>Een Brazilian wax is uitgebreider dan alleen de bikinilijn. Lees vooraf hoe je je voorbereidt en wat je na de behandeling beter even vermijdt.</p>
    <h3>Bikinilijn waxen Deventer</h3>
    <p>Wil je alleen haren langs de rand van bikini of ondergoed verwijderen, dan past de bikinilijn beter. Het verschil met Brazilian leggen we apart uit.</p>
    <nav aria-label="Meer informatie over waxen">
      <a href="/kennis/brazilian-wax-voorbereiden">Brazilian wax voorbereiden</a> ·
      <a href="/kennis/bikinilijn-of-brazilian-wax">Bikinilijn of Brazilian wax</a> ·
      <a href="/kennis/waxen-eerste-keer">Eerste keer waxen</a> ·
      <a href="/kennis/hoe-lang-glad-na-waxen">Hoe lang glad na waxen?</a>
    </nav>
  </section>`;

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function replaceOrInsert(html, pattern, tag) {
  if (pattern.test(html)) return html.replace(pattern, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function replaceMeta(html, route, data) {
  const url = `${base}${route === "/" ? "/" : route}`;
  html = replaceOrInsert(html, /<title>.*?<\/title>/s, `<title>${escapeHtml(data.title)}</title>`);
  html = replaceOrInsert(html, /<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(data.description)}" />`);
  html = replaceOrInsert(html, /<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${url}" />`);
  html = replaceOrInsert(html, /<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(data.title)}" />`);
  html = replaceOrInsert(html, /<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(data.description)}" />`);
  html = replaceOrInsert(html, /<meta property="og:url" content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${url}" />`);
  html = replaceOrInsert(html, /<meta property="og:image" content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${base}/elviglow-logo.png" />`);
  return html;
}

function fallback(data, route) {
  const extra = route === "/"
    ? homeLocalLinks
    : route === "/depilacja"
      ? `${waxIntentBlock}<p><a href="/lycon-waxing-deventer">Specifiek op zoek naar LYCON waxing in Deventer?</a></p>`
      : "";

  return `<main class="seo-fallback" aria-label="ElviGlow">
    <section>
      <img src="/elviglow-logo.png" alt="ElviGlow huidverbetering en beauty in Deventer" width="120" height="120" />
      <p>ElviGlow • Deventer • Huidverbetering & beauty</p>
      <h1>${escapeHtml(data.h1)}</h1>
      <p>${escapeHtml(data.intro)}</p>
      ${extra}
      ${common}
      <nav aria-label="Belangrijkste pagina's">
        <a href="/zabiegi">Gezichtsbehandelingen</a> · <a href="/depilacja">Waxen Deventer</a> · <a href="/akademia-skory">Huidacademie</a> · <a href="/cennik">Prijslijst</a> · <a href="/kontakt">Contact</a>
      </nav>
    </section>
  </main>`;
}

for (const [route, data] of Object.entries(routes)) {
  let html = replaceMeta(source, route, data);
  html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${fallback(data, route)}</div>`);
  if (route === "/") {
    fs.writeFileSync(sourceFile, html);
  } else {
    const dir = path.join(dist, route.slice(1));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html);
  }
}

const waxArticleCtas = [
  ["kennis/waxen-eerste-keer/index.html", "/depilacja", "Bekijk waxzones en prijzen"],
  ["kennis/brazilian-wax-voorbereiden/index.html", "/depilacja", "Bekijk Brazilian wax en prijzen"],
  ["kennis/bikinilijn-of-brazilian-wax/index.html", "/depilacja", "Bekijk bikini en Brazilian wax"],
  ["kennis/hoe-lang-glad-na-waxen/index.html", "/depilacja", "Bekijk waxzones en prijzen"],
  ["pl/wiedza/depilacja-woskiem-pierwszy-raz/index.html", "/depilacja", "Zobacz strefy depilacji i ceny"],
  ["pl/wiedza/brazilian-wax-jak-sie-przygotowac/index.html", "/depilacja", "Zobacz Brazilian wax i ceny"],
  ["pl/wiedza/bikini-czy-brazilian-wax/index.html", "/depilacja", "Zobacz bikini i Brazilian wax"],
  ["pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem/index.html", "/depilacja", "Zobacz strefy depilacji i ceny"],
];

let relinkedWaxArticles = 0;
for (const [relativeFile, target, label] of waxArticleCtas) {
  const file = path.join(dist, relativeFile);
  if (!fs.existsSync(file)) continue;

  const original = fs.readFileSync(file, "utf8");
  let html = original
    .replace(/<a class="btn secondary" href="\/lycon-waxing-deventer">Bekijk passende behandeling<\/a>/g, `<a class="btn secondary" href="${target}">${label}</a>`)
    .replace(/<a class="btn secondary" href="\/pl\/lycon-waxing-deventer">Zobacz pasujący zabieg<\/a>/g, `<a class="btn secondary" href="${target}">${label}</a>`);

  if (html !== original) {
    fs.writeFileSync(file, html);
    relinkedWaxArticles += 1;
  }
}

console.log(`SEO postbuild: generated ${Object.keys(routes).length} route snapshots; relinked ${relinkedWaxArticles} waxing articles.`);
