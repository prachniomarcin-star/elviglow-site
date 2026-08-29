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

const errors = [];
let checked = 0;

function fileFor(route) {
  return path.join(dist, route.replace(/^\//, ""), "index.html");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

for (const cluster of clusters) {
  for (const active of ["pl", "en", "nl"]) {
    const route = cluster[active];
    const file = fileFor(route);
    if (!fs.existsSync(file)) {
      errors.push(`${route}: generated HTML missing`);
      continue;
    }

    checked += 1;
    const html = fs.readFileSync(file, "utf8");
    const match = html.match(/<div class=["']language-options["'][^>]*>([\s\S]*?)<\/div>/i);
    if (!match) {
      errors.push(`${route}: language dropdown missing`);
      continue;
    }
    const menu = match[1];

    for (const lang of ["pl", "en", "nl"]) {
      const expected = cluster[lang];
      const target = new RegExp(`<a\\b[^>]*href=["']${escapeRegExp(expected)}["'][^>]*>\\s*${lang.toUpperCase()}\\s*<\\/a>`, "i");
      const targetHrefFirst = new RegExp(`<a\\b[^>]*>\\s*${lang.toUpperCase()}\\s*<\\/a>`, "i");
      if (!target.test(menu)) {
        const genericLabelExists = targetHrefFirst.test(menu);
        errors.push(`${route}: ${lang.toUpperCase()} dropdown target must be ${expected}${genericLabelExists ? " (label exists but href is wrong)" : ""}`);
      }
    }

    const activeExpected = cluster[active];
    const activeLink = new RegExp(`<a\\b(?=[^>]*class=["'][^"']*active[^"']*["'])(?=[^>]*href=["']${escapeRegExp(activeExpected)}["'])[^>]*>\\s*${active.toUpperCase()}\\s*<\\/a>`, "i");
    if (!activeLink.test(menu)) errors.push(`${route}: active language is not marked correctly`);
  }
}

if (errors.length) {
  console.error(`Language menu QA FAILED (${errors.length} issue(s)):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Language menu QA GREEN: ${checked} pages checked across ${clusters.length} PL/EN/NL clusters; every dropdown points to the exact translated counterpart.`);
