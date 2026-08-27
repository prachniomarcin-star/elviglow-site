import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = "https://elviglow.com";

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

function fileFor(urlPath) {
  return path.join(dist, urlPath.replace(/^\//, ""), "index.html");
}

function absolute(urlPath) {
  return `${base}${urlPath}`;
}

function hreflangBlock(cluster) {
  return [
    `<link rel="alternate" hreflang="nl" href="${absolute(cluster.nl)}" />`,
    `<link rel="alternate" hreflang="pl" href="${absolute(cluster.pl)}" />`,
    `<link rel="alternate" hreflang="en" href="${absolute(cluster.en)}" />`,
    `<link rel="alternate" hreflang="x-default" href="${absolute(cluster.nl)}" />`,
  ].join("\n  ");
}

let updated = 0;
let checked = 0;
const warnings = [];

for (const cluster of clusters) {
  const block = hreflangBlock(cluster);

  for (const language of ["nl", "pl", "en"]) {
    const urlPath = cluster[language];
    const file = fileFor(urlPath);

    if (!fs.existsSync(file)) {
      warnings.push(`missing file: ${urlPath}`);
      continue;
    }

    checked += 1;
    const original = fs.readFileSync(file, "utf8");

    let html = original.replace(/\s*<link\b[^>]*>/gi, (tag) => {
      const isAlternate = /\brel=["']alternate["']/i.test(tag);
      const hasHreflang = /\bhreflang=["'][^"']+["']/i.test(tag);
      return isAlternate && hasHreflang ? "" : tag;
    });

    const canonicalMatch = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i);
    if (canonicalMatch) {
      html = html.replace(canonicalMatch[0], `${canonicalMatch[0]}\n  ${block}`);
    } else if (html.includes("</head>")) {
      warnings.push(`canonical missing, hreflang inserted before </head>: ${urlPath}`);
      html = html.replace("</head>", `  ${block}\n</head>`);
    } else {
      warnings.push(`head missing: ${urlPath}`);
      continue;
    }

    for (const target of ["nl", "pl", "en", "x-default"]) {
      const matches = html.match(new RegExp(`hreflang=["']${target}["']`, "gi")) || [];
      if (matches.length !== 1) warnings.push(`${urlPath}: ${matches.length} ${target} tags`);
    }

    if (html !== original) {
      fs.writeFileSync(file, html);
      updated += 1;
    }
  }
}

console.log(`Hreflang postbuild: checked ${checked} pages in ${clusters.length} clusters; updated ${updated}.`);
if (warnings.length) {
  console.warn(`Hreflang postbuild warnings (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}
