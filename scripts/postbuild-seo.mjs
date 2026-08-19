import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = "https://elviglow-site.vercel.app";
const sourceFile = path.join(dist, "index.html");

if (!fs.existsSync(sourceFile)) {
  console.error("SEO postbuild: dist/index.html not found");
  process.exit(1);
}

const source = fs.readFileSync(sourceFile, "utf8");

const common = `
  <p>ElviGlow is een beauty- en huidstudio in Deventer waar huidverbetering niet begint bij de naam van een apparaat of behandeling, maar bij wat je aan de huid ziet en voelt. Droogte, een doffe teint, zichtbare poriën, een ongelijke structuur, minder stevigheid of eerste lijntjes vragen niet automatisch om dezelfde aanpak. Daarom draait de website om begrijpen, kiezen en daarna pas behandelen.</p>
  <p>Bij gezichtsverzorging kun je kiezen uit rustige reiniging en opfrissing, oxybrasie, verzorging met ampul en masker, liftinggerichte verzorging en microneedling. De behandeling wordt afgestemd op de actuele huidconditie en het doel. Soms is één bezoek een goede start; bij huidkwaliteit, structuur of een langer traject kan een serie of regelmatig verzorgingsritme logischer zijn. Niet elke behandeling is geschikt voor elke huid en daarom blijft een korte beoordeling belangrijk.</p>
  <p>Microneedling is binnen ElviGlow een regeneratieve richting voor klanten die willen werken aan huidstructuur, poriën, stevigheid en zichtbare tekenen van huidveroudering. Er zijn behandelingen voor gezicht, gezicht en hals, en gezicht, hals en decolleté. De intensiteit en keuze van actieve verzorging horen bij de huid te passen. Bij een gevoelige, geïrriteerde of actieve huid wordt eerst gekeken of een zachtere richting verstandiger is.</p>
  <p>Naast huidverzorging biedt ElviGlow manicure, BIAB, gelstyling en pedicure, Lycon waxing voor geselecteerde zones en lichaamsbehandelingen zoals vacuum dermomassage en cryolipolyse. Deze diensten blijven onderdeel van het salon, maar de kern van de ElviGlow-methode is duidelijk: geen willekeurige behandeling kiezen, maar een verzorgingsrichting die past bij de persoon, de huid en het gewenste resultaat.</p>
  <p>De Huidacademie legt uit hoe je zichtbare huidproblemen kunt herkennen, waarom thuisverzorging soms voldoende is en wanneer professionele ondersteuning zinvol kan zijn. De mini huidkaart helpt op een eenvoudige, educatieve manier om van probleem naar mogelijke verzorgingsrichting te gaan. Dit is geen medische diagnose en vervangt geen dermatologisch advies.</p>
  <p>ElviGlow wil een rustige plek zijn waar je vragen kunt stellen zonder druk om meteen de sterkste of duurste behandeling te kiezen. Je kunt eerst de behandelingen en prijzen bekijken, daarna meer leren in de Huidacademie en pas vervolgens contact opnemen voor een afspraak. Zo blijft de keuze overzichtelijk en weet je beter waarom een bepaalde behandeling of serie wordt voorgesteld.</p>
  <p>Goede huidverzorging stopt niet bij de salon. Thuis blijven milde reiniging, hydratatie, een passende verzorging en dagelijkse zonbescherming belangrijke onderdelen van het geheel. Professionele behandelingen kunnen die basis aanvullen, maar horen niet als vervanging voor een rustige dagelijkse routine te worden gezien. Een behandeling werkt het prettigst wanneer de huid niet onnodig wordt overprikkeld door te veel actieve producten, sterke peelings of telkens wisselende routines.</p>
  <p>Bij een eerste bezoek is het vaak slimmer om de huidreactie te leren kennen dan direct een lange serie vast te leggen. Als de huid rustig reageert en het doel duidelijk is, kan daarna worden besproken of herhaling zinvol is. Voor een snelle opfrissing kan één behandeling voldoende voelen; bij structuur, stevigheid of een langduriger verzorgingsdoel kan een serie logischer zijn. Het plan blijft afhankelijk van de huidconditie, tolerantie en het gewenste resultaat.</p>
  <p>De website is opgebouwd voor klanten uit Deventer en omgeving die graag vooraf willen begrijpen wat een behandeling inhoudt. Daarom staan uitleg, prijzen, Huidacademie en contact los van elkaar maar wel in een logische volgorde. Je kunt zelfstandig oriënteren, een probleem herkennen, de mogelijke richting lezen en daarna pas beslissen of je een afspraak wilt maken. Dat maakt huidverzorging minder technisch en geeft meer controle over de keuze.</p>`;

const routes = {
  "/": {
    title: "ElviGlow Deventer | Huidverbetering, microneedling & beauty",
    description: "ElviGlow in Deventer: huidverbetering, microneedling, oxybrasie, huidverzorging, nagels, Lycon waxing en lichaamsbehandelingen.",
    h1: "Ziet je huid er moe uit ondanks je dagelijkse verzorging?",
    intro: "Droogte, zichtbare poriën, een doffe teint of minder stevigheid? We kijken eerst naar wat je huid werkelijk nodig heeft. Pas daarna kiezen we de behandeling en het verzorgingsplan.",
  },
  "/zabiegi": {
    title: "Gezichtsbehandelingen Deventer | ElviGlow",
    description: "Gezichtsbehandelingen in Deventer: reiniging, oxybrasie, ampullen, lifting care en microneedling afgestemd op de huid.",
    h1: "Gezichtsbehandelingen afgestemd op wat je huid nu nodig heeft",
    intro: "Van zachte opfrissing en reiniging tot ampullen, lifting care en microneedling. Je hoeft geen behandeling op naam te kiezen: begin bij het huiddoel.",
  },
  "/paznokcie": {
    title: "Nagels & BIAB Deventer | ElviGlow",
    description: "Manicure, BIAB, gel en pedicure in Deventer in de rustige, verzorgde ElviGlow-stijl.",
    h1: "Nagels en pedicure in Deventer",
    intro: "Manicure, BIAB, gelstyling, verlenging en pedicure met aandacht voor de conditie van de nagelplaat, een nette afwerking en een stijl die bij je past.",
  },
  "/depilacja": {
    title: "Lycon waxing Deventer | ElviGlow",
    description: "Lycon waxing voor vrouwen in Deventer met aandacht voor comfort, precisie en huidreactie.",
    h1: "Lycon waxing in Deventer",
    intro: "Waxing voor geselecteerde zones met aandacht voor hygiëne, comfort en een rustige huidreactie. Voor het gezicht blijven alleen precieze zones in de aanbieding.",
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
    title: "Prijslijst ElviGlow Deventer",
    description: "Actuele prijzen voor gezichtsbehandelingen, microneedling, verzorgingsprogramma's, nagels, waxing en lichaam.",
    h1: "Prijslijst ElviGlow",
    intro: "Bekijk prijzen per categorie: gezicht, verzorgingsprogramma's, nagels en voeten, Lycon waxing en lichaamsbehandelingen. Zo vind je snel de juiste dienst.",
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
    intro: "Stuur een bericht met de dienst die je interesseert, je gewenste resultaat en wanneer je ongeveer beschikbaar bent. Bij huidbehandelingen kun je ook kort beschrijven wat je aan de huid ziet.",
  },
};

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

function fallback(data) {
  return `<main class="seo-fallback" aria-label="ElviGlow">
    <section>
      <img src="/elviglow-logo.png" alt="ElviGlow huidverbetering en beauty in Deventer" width="120" height="120" />
      <p>ElviGlow • Deventer • Huidverbetering & beauty</p>
      <h1>${escapeHtml(data.h1)}</h1>
      <p>${escapeHtml(data.intro)}</p>
      ${common}
      <nav aria-label="Belangrijkste pagina's">
        <a href="/zabiegi">Gezichtsbehandelingen</a> · <a href="/akademia-skory">Huidacademie</a> · <a href="/cennik">Prijslijst</a> · <a href="/kontakt">Contact</a>
      </nav>
    </section>
  </main>`;
}

for (const [route, data] of Object.entries(routes)) {
  let html = replaceMeta(source, route, data);
  html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${fallback(data)}</div>`);
  if (route === "/") {
    fs.writeFileSync(sourceFile, html);
  } else {
    const dir = path.join(dist, route.slice(1));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html);
  }
}

console.log(`SEO postbuild: generated ${Object.keys(routes).length} route snapshots.`);
