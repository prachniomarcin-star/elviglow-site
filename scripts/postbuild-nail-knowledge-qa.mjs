import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = "https://elviglow.com";
const clusters = [
  { nl: "/kennis/acrylnagels-of-gelnagels", pl: "/pl/wiedza/paznokcie-akrylowe-czy-zelowe", en: "/en/knowledge/acrylic-or-gel-nails" },
  { nl: "/kennis/hoe-lang-blijven-gelnagels-en-gellak-mooi", pl: "/pl/wiedza/jak-dlugo-trzymaja-sie-paznokcie-zelowe-i-hybryda", en: "/en/knowledge/how-long-do-gel-nails-and-gel-polish-last" },
  { nl: "/kennis/eerste-keer-nagelverlenging", pl: "/pl/wiedza/pierwsze-przedluzanie-paznokci", en: "/en/knowledge/first-time-nail-extensions" },
];
const service = { nl: "/nagels-deventer", pl: "/pl/nagels-deventer", en: "/en/nagels-deventer" };
const errors = [];
let checked = 0;

const fileFor = route => path.join(dist, route.replace(/^\//, ""), "index.html");
const escRx = value => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

for (const cluster of clusters) {
  for (const lang of ["nl", "pl", "en"]) {
    const route = cluster[lang];
    const file = fileFor(route);
    if (!fs.existsSync(file)) { errors.push(`${route}: generated file missing`); continue; }
    checked++;
    const html = fs.readFileSync(file, "utf8");
    const canonical = `${base}${route}`;
    if (!html.includes(`<link rel="canonical" href="${canonical}"`)) errors.push(`${route}: canonical mismatch`);
    if (!html.includes('addressLocality":"Schalkhaar"')) errors.push(`${route}: schema locality is not Schalkhaar`);
    if (!html.includes('areaServed":{"@type":"City","name":"Deventer"}')) errors.push(`${route}: Deventer areaServed missing`);
    if (!html.includes(`href="${service[lang]}"`)) errors.push(`${route}: nail service link missing`);
    if (!html.includes('data-psychology-refined="true"')) errors.push(`${route}: psychology marker missing`);
    if (!html.includes('data-psychology-layer="recognition"')) errors.push(`${route}: recognition section missing`);
    if (!html.includes('data-psychology-layer="outcome"')) errors.push(`${route}: outcome section missing`);
    if (!/<h1>[^<]+<\/h1>/i.test(html)) errors.push(`${route}: H1 missing`);
    if (!/<meta name="description" content="[^"]+"/i.test(html)) errors.push(`${route}: meta description missing`);

    const menuMatch = html.match(/<div class="language-options"[^>]*>([\s\S]*?)<\/div>/i);
    if (!menuMatch) { errors.push(`${route}: language dropdown missing`); continue; }
    const menu = menuMatch[1];
    for (const targetLang of ["pl", "en", "nl"]) {
      const expected = cluster[targetLang];
      const rx = new RegExp(`<a\\b[^>]*href="${escRx(expected)}"[^>]*>\\s*${targetLang.toUpperCase()}\\s*<\\/a>`, "i");
      if (!rx.test(menu)) errors.push(`${route}: ${targetLang.toUpperCase()} dropdown must point to ${expected}`);
      const hreflang = `<link rel="alternate" hreflang="${targetLang}" href="${base}${expected}"`;
      if (!html.includes(hreflang)) errors.push(`${route}: ${targetLang} hreflang mismatch`);
    }
  }
}

for (const lang of ["nl", "pl", "en"]) {
  const file = fileFor(service[lang]);
  if (!fs.existsSync(file)) { errors.push(`${service[lang]}: nail landing missing`); continue; }
  const html = fs.readFileSync(file, "utf8");
  if (!html.includes('data-nail-knowledge-links="true"')) errors.push(`${service[lang]}: Nail Knowledge block missing`);
  for (const cluster of clusters) if (!html.includes(`href="${cluster[lang]}"`)) errors.push(`${service[lang]}: link missing to ${cluster[lang]}`);
}

if (errors.length) {
  console.error(`Nail Knowledge QA FAILED (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`Nail Knowledge QA GREEN: ${checked} localized articles across ${clusters.length} topics; exact language switching and service links verified.`);
