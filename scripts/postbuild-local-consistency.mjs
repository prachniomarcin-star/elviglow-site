import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const clusters = [
  { nl: "/gezichtsbehandeling-deventer", pl: "/pl/gezichtsbehandeling-deventer", en: "/en/gezichtsbehandeling-deventer" },
  { nl: "/huidverbetering-deventer", pl: "/pl/huidverbetering-deventer", en: "/en/huidverbetering-deventer" },
  { nl: "/microneedling-deventer", pl: "/pl/microneedling-deventer", en: "/en/microneedling-deventer" },
  { nl: "/nagels-deventer", pl: "/pl/nagels-deventer", en: "/en/nagels-deventer" },
  { nl: "/lycon-waxing-deventer", pl: "/pl/lycon-waxing-deventer", en: "/en/lycon-waxing-deventer" },
  { nl: "/oxybrasie-deventer", pl: "/pl/oxybrazja-deventer", en: "/en/oxybrasion-deventer" },
  { nl: "/waterstofreiniging-deventer", pl: "/pl/oczyszczanie-wodorowe-deventer", en: "/en/hydrogen-facial-cleansing-deventer" },
  { nl: "/kennis/waxen-eerste-keer", pl: "/pl/wiedza/depilacja-woskiem-pierwszy-raz", en: "/en/knowledge/first-time-waxing" },
  { nl: "/kennis/brazilian-wax-voorbereiden", pl: "/pl/wiedza/brazilian-wax-jak-sie-przygotowac", en: "/en/knowledge/brazilian-wax-preparation" },
  { nl: "/kennis/bikinilijn-of-brazilian-wax", pl: "/pl/wiedza/bikini-czy-brazilian-wax", en: "/en/knowledge/bikini-line-or-brazilian-wax" },
  { nl: "/kennis/hoe-lang-glad-na-waxen", pl: "/pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem", en: "/en/knowledge/how-long-does-waxing-last" },
  { nl: "/kennis/grove-porien-wat-helpt", pl: "/pl/wiedza/rozszerzone-pory-co-pomaga", en: "/en/knowledge/large-pores-what-helps" },
  { nl: "/kennis/droge-huid-ondanks-creme", pl: "/pl/wiedza/sucha-skora-mimo-kremu", en: "/en/knowledge/dry-skin-despite-moisturiser" },
  { nl: "/kennis/wat-niet-doen-na-microneedling", pl: "/pl/wiedza/czego-nie-robic-po-microneedlingu", en: "/en/knowledge/what-not-to-do-after-microneedling" },
  { nl: "/kennis/oxybrasie-of-waterstofreiniging", pl: "/pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe", en: "/en/knowledge/oxybrasion-or-hydrogen-cleansing" },
  { nl: "/kennis/hoeveel-microneedling-behandelingen", pl: "/pl/wiedza/ile-zabiegow-microneedlingu", en: "/en/knowledge/how-many-microneedling-treatments" },
  { nl: "/kennis/wanneer-geen-microneedling", pl: "/pl/wiedza/kiedy-nie-robic-microneedlingu", en: "/en/knowledge/when-not-to-have-microneedling" },
  { nl: "/kennis/verstopte-porien-en-mee-eters", pl: "/pl/wiedza/zatkane-pory-i-zaskorniki", en: "/en/knowledge/clogged-pores-and-blackheads" },
  { nl: "/kennis/hoe-vaak-gezicht-laten-reinigen", pl: "/pl/wiedza/jak-czesto-oczyszczac-twarz", en: "/en/knowledge/how-often-professional-facial-cleansing" },
];

function fileFor(route) {
  return path.join(dist, route.replace(/^\//, ""), "index.html");
}

function menu(cluster, active) {
  return `<div class="language-options" role="menu"><a${active === "pl" ? ' class="active"' : ""} data-lang-link="pl" href="${cluster.pl}">PL</a><a${active === "en" ? ' class="active"' : ""} data-lang-link="en" href="${cluster.en}">EN</a><a${active === "nl" ? ' class="active"' : ""} data-lang-link="nl" href="${cluster.nl}">NL</a></div>`;
}

let menus = 0;
for (const cluster of clusters) {
  for (const lang of ["pl", "en", "nl"]) {
    const file = fileFor(cluster[lang]);
    if (!fs.existsSync(file)) continue;
    const original = fs.readFileSync(file, "utf8");
    const html = original.replace(/<div class="language-options"(?:\s+role="menu")?>[\s\S]*?<\/div>/i, menu(cluster, lang));
    if (html !== original) {
      fs.writeFileSync(file, html);
      menus += 1;
    }
  }
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name === "index.html" ? [full] : [];
  });
}

let locality = 0;
let visibleAddress = 0;
for (const file of walk(dist)) {
  const original = fs.readFileSync(file, "utf8");
  let html = original
    .replace(/"addressLocality"\s*:\s*"Deventer"/g, '"addressLocality":"Schalkhaar"')
    .replace(/Jan Wansinkstraat 59,\s*7415 PB Deventer/g, "Jan Wansinkstraat 59, 7415 PB Schalkhaar");
  if (html !== original) {
    if (original.includes('"addressLocality"') && html.includes('"addressLocality":"Schalkhaar"')) locality += 1;
    if (/Jan Wansinkstraat 59,\s*7415 PB Deventer/.test(original)) visibleAddress += 1;
    fs.writeFileSync(file, html);
  }
}

console.log(`Local consistency GREEN: normalized ${menus} language menus; Schalkhaar locality updated on ${locality} pages; visible address corrected on ${visibleAddress} pages.`);
