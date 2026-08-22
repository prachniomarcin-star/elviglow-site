import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = "https://elviglow.com";
const sitemapFile = path.join(dist, "sitemap.xml");
const vercelFile = path.resolve("vercel.json");

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
];

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function fileForUrl(url) {
  const pathname = new URL(url).pathname;
  if (pathname === "/") return path.join(dist, "index.html");
  return path.join(dist, pathname.replace(/^\//, ""), "index.html");
}

if (!fs.existsSync(sitemapFile)) {
  fail("dist/sitemap.xml is missing");
} else {
  const sitemap = fs.readFileSync(sitemapFile, "utf8");
  const urls = [...sitemap.matchAll(/<loc>(https:\/\/elviglow\.com[^<]+)<\/loc>/g)].map((m) => m[1]);
  const uniqueUrls = new Set(urls);

  if (urls.length !== 56) fail(`expected 56 sitemap URLs, found ${urls.length}`);
  if (uniqueUrls.size !== urls.length) fail(`sitemap contains ${urls.length - uniqueUrls.size} duplicate URL(s)`);

  const sitemapPaths = new Set(urls.map((url) => new URL(url).pathname.replace(/\/$/, "") || "/"));

  for (const url of urls) {
    const pathname = new URL(url).pathname;
    const normalizedPath = pathname.replace(/\/$/, "") || "/";
    const file = fileForUrl(url);
    if (!fs.existsSync(file)) {
      fail(`missing generated HTML for ${normalizedPath}`);
      continue;
    }

    const html = fs.readFileSync(file, "utf8");
    const canonicalMatches = [...html.matchAll(/<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']([^"']+)["'][^>]*>/gi)].map((m) => m[1]);
    const expectedCanonical = `${base}${normalizedPath === "/" ? "/" : normalizedPath}`;

    if (canonicalMatches.length !== 1) fail(`${normalizedPath}: expected 1 canonical, found ${canonicalMatches.length}`);
    else if (canonicalMatches[0].replace(/\/$/, normalizedPath === "/" ? "/" : "") !== expectedCanonical) {
      const actual = canonicalMatches[0];
      if (actual !== expectedCanonical) fail(`${normalizedPath}: canonical mismatch (${actual})`);
    }

    if (/canonical[^>]+https:\/\/www\.elviglow\.com/i.test(html)) fail(`${normalizedPath}: www canonical found`);
    if (!/<title>[^<]+<\/title>/i.test(html)) fail(`${normalizedPath}: title missing`);
    if (!/<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+["'][^>]*>/i.test(html)) fail(`${normalizedPath}: meta description missing`);
    if (/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) fail(`${normalizedPath}: noindex found`);

    const internalLinks = [...html.matchAll(/<a\b[^>]*href=["'](\/[^"'#?]*)(?:[?#][^"']*)?["'][^>]*>/gi)].map((m) => m[1]);
    for (const href of internalLinks) {
      const clean = href.replace(/\/$/, "") || "/";
      if (!sitemapPaths.has(clean)) warnings.push(`${normalizedPath}: internal link points outside sitemap: ${href}`);
    }
  }

  const vercel = JSON.parse(fs.readFileSync(vercelFile, "utf8"));
  const rewriteSources = new Set((vercel.rewrites || []).map((item) => item.source));
  for (const url of urls) {
    const pathname = new URL(url).pathname.replace(/\/$/, "") || "/";
    if (pathname === "/") continue;
    if (!rewriteSources.has(pathname)) fail(`${pathname}: clean-URL rewrite missing in vercel.json`);
  }
}

for (const cluster of clusters) {
  const expected = {
    nl: `${base}${cluster.nl}`,
    pl: `${base}${cluster.pl}`,
    en: `${base}${cluster.en}`,
    "x-default": `${base}${cluster.nl}`,
  };

  for (const lang of ["nl", "pl", "en"]) {
    const route = cluster[lang];
    const file = path.join(dist, route.replace(/^\//, ""), "index.html");
    if (!fs.existsSync(file)) {
      fail(`${route}: localized file missing`);
      continue;
    }
    const html = fs.readFileSync(file, "utf8");
    for (const [hreflang, href] of Object.entries(expected)) {
      const matches = [...html.matchAll(new RegExp(`<link\\b[^>]*hreflang=["']${hreflang}["'][^>]*href=["']([^"']+)["'][^>]*>`, "gi"))].map((m) => m[1]);
      if (matches.length !== 1) fail(`${route}: expected one ${hreflang} hreflang, found ${matches.length}`);
      else if (matches[0] !== href) fail(`${route}: ${hreflang} points to ${matches[0]}, expected ${href}`);
    }
  }
}

if (warnings.length) {
  const uniqueWarnings = [...new Set(warnings)];
  console.warn(`Final QA warnings (${uniqueWarnings.length}):`);
  for (const warning of uniqueWarnings.slice(0, 30)) console.warn(`- ${warning}`);
  if (uniqueWarnings.length > 30) console.warn(`- ...and ${uniqueWarnings.length - 30} more`);
}

if (errors.length) {
  console.error(`Final SEO QA FAILED (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Final SEO QA GREEN: 56 sitemap URLs, generated HTML, canonicals, rewrites and 15 reciprocal hreflang clusters validated.");
