import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const sitemapFile = path.join(dist, "sitemap.xml");
const errors = [];
const warnings = [];

const clusters = [
  { pl: "/pl/gezichtsbehandeling-deventer", en: "/en/gezichtsbehandeling-deventer", nl: "/gezichtsbehandeling-deventer" },
  { pl: "/pl/huidverbetering-deventer", en: "/en/huidverbetering-deventer", nl: "/huidverbetering-deventer" },
  { pl: "/pl/microneedling-deventer", en: "/en/microneedling-deventer", nl: "/microneedling-deventer" },
  { pl: "/pl/nagels-deventer", en: "/en/nagels-deventer", nl: "/nagels-deventer" },
  { pl: "/pl/lycon-waxing-deventer", en: "/en/lycon-waxing-deventer", nl: "/lycon-waxing-deventer" },
  { pl: "/pl/oxybrazja-deventer", en: "/en/oxybrasion-deventer", nl: "/oxybrasie-deventer" },
  { pl: "/pl/oczyszczanie-wodorowe-deventer", en: "/en/hydrogen-facial-cleansing-deventer", nl: "/waterstofreiniging-deventer" },
  { pl: "/pl/wiedza/depilacja-woskiem-pierwszy-raz", en: "/en/knowledge/first-time-waxing", nl: "/kennis/waxen-eerste-keer" },
  { pl: "/pl/wiedza/brazilian-wax-jak-sie-przygotowac", en: "/en/knowledge/brazilian-wax-preparation", nl: "/kennis/brazilian-wax-voorbereiden" },
  { pl: "/pl/wiedza/bikini-czy-brazilian-wax", en: "/en/knowledge/bikini-line-or-brazilian-wax", nl: "/kennis/bikinilijn-of-brazilian-wax" },
  { pl: "/pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem", en: "/en/knowledge/how-long-does-waxing-last", nl: "/kennis/hoe-lang-glad-na-waxen" },
  { pl: "/pl/wiedza/rozszerzone-pory-co-pomaga", en: "/en/knowledge/large-pores-what-helps", nl: "/kennis/grove-porien-wat-helpt" },
  { pl: "/pl/wiedza/sucha-skora-mimo-kremu", en: "/en/knowledge/dry-skin-despite-moisturiser", nl: "/kennis/droge-huid-ondanks-creme" },
  { pl: "/pl/wiedza/czego-nie-robic-po-microneedlingu", en: "/en/knowledge/what-not-to-do-after-microneedling", nl: "/kennis/wat-niet-doen-na-microneedling" },
  { pl: "/pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe", en: "/en/knowledge/oxybrasion-or-hydrogen-cleansing", nl: "/kennis/oxybrasie-of-waterstofreiniging" },
  { pl: "/pl/wiedza/ile-zabiegow-microneedlingu", en: "/en/knowledge/how-many-microneedling-treatments", nl: "/kennis/hoeveel-microneedling-behandelingen" },
  { pl: "/pl/wiedza/kiedy-nie-robic-microneedlingu", en: "/en/knowledge/when-not-to-have-microneedling", nl: "/kennis/wanneer-geen-microneedling" },
  { pl: "/pl/wiedza/zatkane-pory-i-zaskorniki", en: "/en/knowledge/clogged-pores-and-blackheads", nl: "/kennis/verstopte-porien-en-mee-eters" },
  { pl: "/pl/wiedza/jak-czesto-oczyszczac-twarz", en: "/en/knowledge/how-often-professional-facial-cleansing", nl: "/kennis/hoe-vaak-gezicht-laten-reinigen" },
];

const clusterByPl = new Map(clusters.map((c) => [c.pl, c]));

function fileFor(route) {
  return path.join(dist, route.replace(/^\//, ""), "index.html");
}
function textMatch(html, tag) {
  const m = html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return m ? m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() : "";
}
function count(haystack, re) {
  return (haystack.match(re) || []).length;
}

if (!fs.existsSync(sitemapFile)) {
  errors.push("sitemap missing");
} else {
  const sitemap = fs.readFileSync(sitemapFile, "utf8");
  const routes = [...sitemap.matchAll(/<loc>https:\/\/elviglow\.com([^<]*)<\/loc>/g)]
    .map((m) => (m[1] || "/").replace(/\/$/, "") || "/")
    .filter((route) => route.startsWith("/pl/"));

  for (const route of routes) {
    const file = fileFor(route);
    if (!fs.existsSync(file)) {
      errors.push(`${route}: HTML missing`);
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    const title = textMatch(html, "title");
    const h1 = textMatch(html, "h1");

    if (!/<html\b[^>]*lang=["']pl["']/i.test(html)) errors.push(`${route}: html lang is not pl`);
    if (!title) errors.push(`${route}: title missing`);
    if (!h1) errors.push(`${route}: h1 missing`);
    if (/\bpo polsku\b/i.test(title)) errors.push(`${route}: title contains artificial phrase 'po polsku'`);
    if (/\bpo polsku\b/i.test(h1)) errors.push(`${route}: H1 contains artificial phrase 'po polsku'`);
    if (/Obsługa po polsku/i.test(html)) warnings.push(`${route}: visible 'Obsługa po polsku' badge/copy remains`);
    if (!/<link\b[^>]*rel=["']canonical["'][^>]*>/i.test(html)) errors.push(`${route}: canonical missing`);
    if (!/<meta\b[^>]*name=["']description["'][^>]*>/i.test(html)) errors.push(`${route}: meta description missing`);

    const cluster = clusterByPl.get(route);
    if (cluster) {
      for (const lang of ["pl", "en", "nl"]) {
        const expected = `https://elviglow.com${cluster[lang]}`;
        const re = new RegExp(`<link\\b[^>]*hreflang=["']${lang}["'][^>]*href=["']${expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][^>]*>|<link\\b[^>]*href=["']${expected.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][^>]*hreflang=["']${lang}["'][^>]*>`, "i");
        if (!re.test(html)) errors.push(`${route}: ${lang} hreflang missing or wrong`);
      }
      if (!new RegExp(`href=["']${cluster.en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i").test(html)) warnings.push(`${route}: no visible EN link in page HTML`);
      if (!new RegExp(`href=["']${cluster.nl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`, "i").test(html)) warnings.push(`${route}: no visible NL link in page HTML`);
    }

    if (!route.startsWith("/pl/wiedza/")) {
      const mainNav = html.match(/<nav\b[^>]*desktop-nav[^>]*>([\s\S]*?)<\/nav>/i)?.[1] || "";
      const navLinks = count(mainNav, /<a\b/gi);
      if (navLinks > 0 && navLinks < 7) warnings.push(`${route}: desktop navigation looks simplified (${navLinks} links)`);
    }
  }

  console.log(`PL consistency audit: inspected ${routes.length} Polish sitemap pages.`);
}

for (const warning of warnings) console.warn(`PL AUDIT warning: ${warning}`);
if (errors.length) {
  console.error(`PL consistency audit FAILED (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
console.log(`PL consistency audit GREEN with ${warnings.length} warning(s).`);
