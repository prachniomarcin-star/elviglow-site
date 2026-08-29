import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const errors = [];
let updated = 0;
let verified = 0;

function fileFor(relative) {
  return path.join(dist, relative);
}

function writeIfChanged(file, original, html) {
  if (html !== original) {
    fs.writeFileSync(file, html);
    updated += 1;
  } else {
    verified += 1;
  }
}

function insertBefore(html, marker, block) {
  if (!html.includes(marker)) return null;
  return html.replace(marker, `${block}\n${marker}`);
}

// 1. Strengthen the static /depilacja snapshot with the same commercial intent
// that is now appearing in Search Console: Brazilian wax Deventer and bikinilijn waxen.
{
  const file = fileFor("depilacja/index.html");
  if (!fs.existsSync(file)) {
    errors.push("depilacja/index.html: generated page missing");
  } else {
    const original = fs.readFileSync(file, "utf8");
    let html = original;
    if (!html.includes('data-ranking-wave2-wax-static="true"')) {
      html = html.replace(
        '<section aria-label="Waxen in Deventer per zone">',
        '<section aria-label="Waxen in Deventer per zone" data-ranking-wave2-wax-static="true">'
      );
      const marker = '<nav aria-label="Meer informatie over waxen">';
      const block = `
    <h3>Eerste waxafspraak in Deventer</h3>
    <p>Bij een eerste waxafspraak helpt het om vooraf precies de zone te kiezen. Laat voldoende haarlengte staan, plan de behandeling niet op duidelijk geïrriteerde huid en geef bijzonderheden vooraf door. Zo kunnen we de juiste tijd reserveren en weet je of je een bikinilijn, Brazilian of een andere waxzone boekt.</p>
    <p>Zoek je specifiek op Brazilian wax Deventer of bikinilijn waxen Deventer, dan gaat het dus niet alleen om de naam van de behandeling, maar vooral om hoeveel van het gebied je wilt laten waxen. ElviGlow werkt op afspraak en bevestigt de gekozen zone en beschikbare tijd persoonlijk.</p>`;
      const next = insertBefore(html, marker, block);
      if (!next) errors.push("/depilacja: wax intent insertion point missing");
      else html = next;
    }
    writeIfChanged(file, original, html);
  }
}

// 2. Add useful depth to Oxybrasie without turning the page into keyword stuffing.
{
  const file = fileFor("oxybrasie-deventer/index.html");
  if (!fs.existsSync(file)) {
    errors.push("oxybrasie-deventer/index.html: generated page missing");
  } else {
    const original = fs.readFileSync(file, "utf8");
    let html = original;
    if (!html.includes('data-ranking-wave2-service="oxybrasie"')) {
      const marker = '<section class="article-section"><div class="section-head"><p class="eyebrow">Veelgestelde vragen</p>';
      const block = `
    <section class="article-section" data-ranking-wave2-service="oxybrasie"><div class="section-head"><p class="eyebrow">Oxybrasie • Deventer</p><h2>Wanneer kiezen voor oxybrasie in Deventer?</h2><p>Oxybrasie kan passen wanneer de huid vooral dof, wat ruw of vermoeid oogt en je een lichte behandeling zoekt die op het huidoppervlak werkt. De behandeling is bedoeld als gecontroleerde opfrissing, niet als oplossing voor iedere zichtbare porie of onzuiverheid.</p><p>Bij mee-eters, duidelijke verstopping of een huid waarbij reinigen centraal staat, kijken we eerder naar waterstofreiniging. Is de huid vooral droog of trekkerig, dan kan de verzorgingsbehoefte weer anders zijn. Daarom vergelijken we eerst het huiddoel en kiezen we daarna pas de behandeling.</p></div><div class="actions"><a class="btn secondary" href="/kennis/droge-huid-ondanks-creme">Lees over droge huid</a><a class="btn secondary" href="/kennis/oxybrasie-of-waterstofreiniging">Vergelijk oxybrasie en reinigen</a></div></section>`;
      const next = insertBefore(html, marker, block);
      if (!next) errors.push("/oxybrasie-deventer: FAQ insertion point missing");
      else html = next;
    }
    writeIfChanged(file, original, html);
  }
}

// 3. Clarify Waterstofreiniging intent around pores/blackheads and shorten its search title.
{
  const file = fileFor("waterstofreiniging-deventer/index.html");
  if (!fs.existsSync(file)) {
    errors.push("waterstofreiniging-deventer/index.html: generated page missing");
  } else {
    const original = fs.readFileSync(file, "utf8");
    let html = original
      .replace('<title>Waterstofreiniging Deventer | Diepere reiniging €69 | ElviGlow</title>', '<title>Waterstofreiniging Deventer | €69 | ElviGlow</title>')
      .replace('<meta property="og:title" content="Waterstofreiniging Deventer | Diepere reiniging €69 | ElviGlow" />', '<meta property="og:title" content="Waterstofreiniging Deventer | €69 | ElviGlow" />');

    if (!html.includes('data-ranking-wave2-service="waterstof"')) {
      const marker = '<section class="article-section"><div class="section-head"><p class="eyebrow">Veelgestelde vragen</p>';
      const block = `
    <section class="article-section" data-ranking-wave2-service="waterstof"><div class="section-head"><p class="eyebrow">Poriën • mee-eters • reinigen</p><h2>Waterstofreiniging bij verstopte poriën en mee-eters</h2><p>Zichtbare poriën betekenen niet automatisch dat de huid “vies” is. Wanneer er tegelijk mee-eters, ophoping van talg of duidelijke verstopping zichtbaar zijn, kan een professionele reinigingsbehandeling wel een logische richting zijn. Waterstofreiniging is bij ElviGlow daarom vooral een reinigingsgerichte behandeling en niet simpelweg een algemene glow-behandeling.</p><p>De behandeling combineert cavitatiepeeling, waterstofreiniging en zuurstofinfusie met een passende ampul. Handmatige reiniging voegen we alleen toe wanneer de huidconditie dat vraagt. Bij sterk ontstoken of pijnlijke huidproblemen is een cosmetische reiniging niet automatisch de juiste eerste stap.</p></div><div class="actions"><a class="btn secondary" href="/kennis/verstopte-porien-en-mee-eters">Lees over verstopte poriën en mee-eters</a><a class="btn secondary" href="/kennis/hoe-vaak-gezicht-laten-reinigen">Hoe vaak professioneel reinigen?</a></div></section>`;
      const next = insertBefore(html, marker, block);
      if (!next) errors.push("/waterstofreiniging-deventer: FAQ insertion point missing");
      else html = next;
    }
    writeIfChanged(file, original, html);
  }
}

const bridges = [
  {
    marker: 'data-ranking-bridge="wax-nl"',
    files: [
      "kennis/waxen-eerste-keer/index.html",
      "kennis/brazilian-wax-voorbereiden/index.html",
      "kennis/bikinilijn-of-brazilian-wax/index.html",
      "kennis/hoe-lang-glad-na-waxen/index.html",
    ],
    block: `
<section class="article-section" data-ranking-bridge="wax-nl">
  <div class="section-head"><p class="eyebrow">Van gids naar afspraak</p><h2>Bikini of Brazilian wax in Deventer boeken?</h2><p>Weet je na het lezen welke zone je wilt laten waxen, ga dan rechtstreeks naar de waxingpagina. Daar zie je de beschikbare zones, actuele prijzen en het verschil tussen een bikinilijn en een Brazilian wax voordat je een afspraak aanvraagt.</p></div>
  <div class="actions"><a class="btn secondary" href="/depilacja">Bekijk bikini &amp; Brazilian wax in Deventer</a><a class="btn secondary" href="/cennik#waxing">Bekijk waxprijzen</a></div>
</section>`,
  },
  {
    marker: 'data-ranking-bridge="wax-pl"',
    files: [
      "pl/wiedza/depilacja-woskiem-pierwszy-raz/index.html",
      "pl/wiedza/brazilian-wax-jak-sie-przygotowac/index.html",
      "pl/wiedza/bikini-czy-brazilian-wax/index.html",
      "pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem/index.html",
    ],
    block: `
<section class="article-section" data-ranking-bridge="wax-pl">
  <div class="section-head"><p class="eyebrow">Od poradnika do wizyty</p><h2>Bikini lub Brazilian wax w Deventer</h2><p>Jeśli po przeczytaniu wiesz już, jaką strefę chcesz wybrać, przejdź bezpośrednio do strony depilacji. Znajdziesz tam strefy, aktualne ceny oraz różnicę między bikini i Brazilian przed wysłaniem prośby o termin.</p></div>
  <div class="actions"><a class="btn secondary" href="/depilacja">Zobacz bikini i Brazilian wax w Deventer</a><a class="btn secondary" href="/cennik#waxing">Zobacz ceny depilacji</a></div>
</section>`,
  },
  {
    marker: 'data-ranking-bridge="wax-en"',
    files: [
      "en/knowledge/first-time-waxing/index.html",
      "en/knowledge/brazilian-wax-preparation/index.html",
      "en/knowledge/bikini-line-or-brazilian-wax/index.html",
      "en/knowledge/how-long-does-waxing-last/index.html",
    ],
    block: `
<section class="article-section" data-ranking-bridge="wax-en">
  <div class="section-head"><p class="eyebrow">From guide to appointment</p><h2>Book bikini or Brazilian waxing in Deventer</h2><p>If you now know which area you want waxed, continue to the main waxing page. It shows the available treatment areas, current prices and the practical difference between bikini-line and Brazilian waxing before you request an appointment.</p></div>
  <div class="actions"><a class="btn secondary" href="/depilacja">View bikini &amp; Brazilian waxing in Deventer</a><a class="btn secondary" href="/cennik#waxing">View waxing prices</a></div>
</section>`,
  },
  {
    marker: 'data-ranking-bridge="pores-nl"',
    files: ["kennis/grove-porien-wat-helpt/index.html"],
    block: `
<section class="article-section" data-ranking-bridge="pores-nl"><div class="section-head"><p class="eyebrow">Van huidprobleem naar behandeling</p><h2>Zijn zichtbare poriën vooral verstopt of gaat het om huidstructuur?</h2><p>Wanneer mee-eters, talgophoping en verstopping centraal staan, kan waterstofreiniging een logischere route zijn. Gaat het vooral om huidstructuur en algemene huidkwaliteit, dan past een bredere huidverbeteringsroute beter.</p></div><div class="actions"><a class="btn secondary" href="/waterstofreiniging-deventer">Bekijk waterstofreiniging Deventer</a><a class="btn secondary" href="/huidverbetering-deventer">Bekijk huidverbetering Deventer</a></div></section>`,
  },
  {
    marker: 'data-ranking-bridge="pores-pl"',
    files: ["pl/wiedza/rozszerzone-pory-co-pomaga/index.html"],
    block: `
<section class="article-section" data-ranking-bridge="pores-pl"><div class="section-head"><p class="eyebrow">Od problemu skóry do zabiegu</p><h2>Czy pory są przede wszystkim zatkane, czy chodzi o strukturę skóry?</h2><p>Jeśli dominują zaskórniki, nadmiar sebum i widoczne zatkanie, oczyszczanie wodorowe może być bardziej logicznym kierunkiem. Jeśli chodzi głównie o strukturę i ogólną jakość skóry, lepiej zacząć od szerszej oceny pielęgnacji.</p></div><div class="actions"><a class="btn secondary" href="/pl/oczyszczanie-wodorowe-deventer">Oczyszczanie wodorowe Deventer</a><a class="btn secondary" href="/pl/huidverbetering-deventer">Pielęgnacja skóry Deventer</a></div></section>`,
  },
  {
    marker: 'data-ranking-bridge="pores-en"',
    files: ["en/knowledge/large-pores-what-helps/index.html"],
    block: `
<section class="article-section" data-ranking-bridge="pores-en"><div class="section-head"><p class="eyebrow">From concern to treatment</p><h2>Are visible pores mainly congested, or is skin texture the bigger concern?</h2><p>If blackheads, sebum build-up and congestion are the main issue, hydrogen facial cleansing may be a more logical direction. If the concern is mostly texture and overall skin quality, a broader skin-improvement approach may fit better.</p></div><div class="actions"><a class="btn secondary" href="/en/hydrogen-facial-cleansing-deventer">Hydrogen facial cleansing Deventer</a><a class="btn secondary" href="/en/huidverbetering-deventer">Skin improvement Deventer</a></div></section>`,
  },
  {
    marker: 'data-ranking-bridge="compare-nl"',
    files: ["kennis/oxybrasie-of-waterstofreiniging/index.html"],
    block: `
<section class="article-section" data-ranking-bridge="compare-nl"><div class="section-head"><p class="eyebrow">Vergelijk de behandelingen</p><h2>Bekijk oxybrasie en waterstofreiniging direct</h2><p>Oxybrasie is vooral gericht op een zachte oppervlakkige opfrissing. Waterstofreiniging is juist de reinigingsgerichte keuze wanneer poriën, mee-eters en verstopping belangrijker zijn. Bekijk beide behandelingen voordat je beslist.</p></div><div class="actions"><a class="btn secondary" href="/oxybrasie-deventer">Oxybrasie Deventer</a><a class="btn secondary" href="/waterstofreiniging-deventer">Waterstofreiniging Deventer</a></div></section>`,
  },
  {
    marker: 'data-ranking-bridge="compare-pl"',
    files: ["pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe/index.html"],
    block: `
<section class="article-section" data-ranking-bridge="compare-pl"><div class="section-head"><p class="eyebrow">Porównaj zabiegi</p><h2>Zobacz bezpośrednio oxybrazję i oczyszczanie wodorowe</h2><p>Oxybrazja służy przede wszystkim delikatnemu odświeżeniu powierzchni skóry. Oczyszczanie wodorowe jest kierunkiem bardziej skoncentrowanym na porach, zaskórnikach i zatkaniu. Porównaj oba zabiegi przed wyborem.</p></div><div class="actions"><a class="btn secondary" href="/pl/oxybrazja-deventer">Oxybrazja Deventer</a><a class="btn secondary" href="/pl/oczyszczanie-wodorowe-deventer">Oczyszczanie wodorowe Deventer</a></div></section>`,
  },
  {
    marker: 'data-ranking-bridge="compare-en"',
    files: ["en/knowledge/oxybrasion-or-hydrogen-cleansing/index.html"],
    block: `
<section class="article-section" data-ranking-bridge="compare-en"><div class="section-head"><p class="eyebrow">Compare the treatments</p><h2>View oxybrasion and hydrogen facial cleansing directly</h2><p>Oxybrasion is mainly a gentle surface refresh. Hydrogen facial cleansing is the more cleansing-focused direction when pores, blackheads and congestion matter more. Compare both treatment pages before choosing.</p></div><div class="actions"><a class="btn secondary" href="/en/oxybrasion-deventer">Oxybrasion Deventer</a><a class="btn secondary" href="/en/hydrogen-facial-cleansing-deventer">Hydrogen facial cleansing Deventer</a></div></section>`,
  },
];

for (const bridge of bridges) {
  for (const relative of bridge.files) {
    const file = fileFor(relative);
    if (!fs.existsSync(file)) {
      errors.push(`${relative}: generated article missing`);
      continue;
    }
    const original = fs.readFileSync(file, "utf8");
    if (original.includes(bridge.marker)) {
      verified += 1;
      continue;
    }
    const html = insertBefore(original, '<section class="cta">', bridge.block);
    if (!html) {
      errors.push(`${relative}: CTA insertion point missing`);
      continue;
    }
    fs.writeFileSync(file, html);
    updated += 1;
  }
}

if (errors.length) {
  console.error(`Ranking Wave 2 FAILED (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Ranking Wave 2 GREEN: updated ${updated}; already verified ${verified}.`);
