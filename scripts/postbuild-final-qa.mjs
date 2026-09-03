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
  { nl: "/kennis/hoeveel-microneedling-behandelingen", pl: "/pl/wiedza/ile-zabiegow-microneedlingu", en: "/en/knowledge/how-many-microneedling-treatments" },
  { nl: "/kennis/wanneer-geen-microneedling", pl: "/pl/wiedza/kiedy-nie-robic-microneedlingu", en: "/en/knowledge/when-not-to-have-microneedling" },
  { nl: "/kennis/verstopte-porien-en-mee-eters", pl: "/pl/wiedza/zatkane-pory-i-zaskorniki", en: "/en/knowledge/clogged-pores-and-blackheads" },
  { nl: "/kennis/hoe-vaak-gezicht-laten-reinigen", pl: "/pl/wiedza/jak-czesto-oczyszczac-twarz", en: "/en/knowledge/how-often-professional-facial-cleansing" },
];

const appRoutes = new Set([
  "/",
  "/zabiegi",
  "/paznokcie",
  "/depilacja",
  "/cialo",
  "/wiedza",
  "/cennik",
  "/akademia-skory",
  "/abonamenty",
  "/kontakt",
]);

const errors = [];
const warnings = [];
const fail = (message) => errors.push(message);
const warn = (message) => warnings.push(message);

function fileForPath(pathname) {
  if (pathname === "/") return path.join(dist, "index.html");
  return path.join(dist, pathname.replace(/^\//, ""), "index.html");
}

function readAttributes(tag) {
  const attrs = {};
  for (const match of tag.matchAll(/([:\w-]+)\s*=\s*["']([^"']*)["']/g)) attrs[match[1].toLowerCase()] = match[2];
  return attrs;
}

if (!fs.existsSync(sitemapFile)) {
  fail("dist/sitemap.xml is missing");
} else {
  const sitemap = fs.readFileSync(sitemapFile, "utf8");
  const urls = [...sitemap.matchAll(/<loc>(https:\/\/elviglow\.com[^<]+)<\/loc>/g)].map((m) => m[1]);
  const uniqueUrls = new Set(urls);

  if (urls.length !== 77) fail(`expected 77 sitemap URLs, found ${urls.length}`);
  if (uniqueUrls.size !== urls.length) fail(`sitemap contains ${urls.length - uniqueUrls.size} duplicate URL(s)`);

  const sitemapPaths = new Set(urls.map((url) => new URL(url).pathname.replace(/\/$/, "") || "/"));

  for (const url of urls) {
    const pathname = new URL(url).pathname.replace(/\/$/, "") || "/";
    const file = fileForPath(pathname);
    if (!fs.existsSync(file)) {
      fail(`missing generated HTML for ${pathname}`);
      continue;
    }

    const html = fs.readFileSync(file, "utf8");
    const linkTags = [...html.matchAll(/<link\b[^>]*>/gi)].map((m) => readAttributes(m[0]));
    const canonical = linkTags.filter((attrs) => attrs.rel === "canonical").map((attrs) => attrs.href).filter(Boolean);
    const expectedCanonical = `${base}${pathname === "/" ? "/" : pathname}`;

    if (canonical.length !== 1) warn(`${pathname}: expected 1 canonical, found ${canonical.length}`);
    else if (canonical[0] !== expectedCanonical) warn(`${pathname}: canonical is ${canonical[0]}, expected ${expectedCanonical}`);

    if (/https:\/\/www\.elviglow\.com/i.test(canonical.join(" "))) warn(`${pathname}: www canonical found`);
    if (!/<title>[^<]+<\/title>/i.test(html)) warn(`${pathname}: title missing`);
    if (!/<meta\b[^>]*name=["']description["'][^>]*>/i.test(html)) warn(`${pathname}: meta description missing`);
    if (/<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html)) warn(`${pathname}: noindex found`);

    if (!appRoutes.has(pathname)) {
      const transparencyMarkers = (html.match(/data-studio-transparency=["']true["']/gi) || []).length;
      if (transparencyMarkers !== 1) fail(`${pathname}: expected one studio transparency block, found ${transparencyMarkers}`);
    }

    const internalLinks = [...html.matchAll(/<a\b[^>]*href=["'](\/[^"'#?]*)(?:[?#][^"']*)?["'][^>]*>/gi)].map((m) => m[1]);
    for (const href of internalLinks) {
      const clean = href.replace(/\/$/, "") || "/";
      if (!sitemapPaths.has(clean)) warn(`${pathname}: internal link outside sitemap: ${href}`);
    }
  }

  if (fs.existsSync(vercelFile)) {
    const vercel = JSON.parse(fs.readFileSync(vercelFile, "utf8"));
    const rewriteSources = new Set((vercel.rewrites || []).map((item) => item.source));
    for (const url of urls) {
      const pathname = new URL(url).pathname.replace(/\/$/, "") || "/";
      if (pathname !== "/" && !rewriteSources.has(pathname)) warn(`${pathname}: explicit clean-URL rewrite missing`);
    }
  } else {
    warn("vercel.json is missing");
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
    const file = fileForPath(route);
    if (!fs.existsSync(file)) {
      fail(`${route}: localized file missing`);
      continue;
    }

    const html = fs.readFileSync(file, "utf8");
    const alternateTags = [...html.matchAll(/<link\b[^>]*>/gi)]
      .map((m) => readAttributes(m[0]))
      .filter((attrs) => attrs.rel === "alternate" && attrs.hreflang);

    for (const [hreflang, href] of Object.entries(expected)) {
      const matches = alternateTags.filter((attrs) => attrs.hreflang === hreflang).map((attrs) => attrs.href);
      if (matches.length !== 1) warn(`${route}: expected one ${hreflang} hreflang, found ${matches.length}`);
      else if (matches[0] !== href) warn(`${route}: ${hreflang} points to ${matches[0]}, expected ${href}`);
    }

    if (/^\/(?:kennis\/|pl\/wiedza\/|en\/knowledge\/)/.test(route)) {
      const refinedMarkers = (html.match(/data-psychology-refined=["']true["']/gi) || []).length;
      const recognitionSections = (html.match(/data-psychology-layer=["']recognition["']/gi) || []).length;
      const outcomeSections = (html.match(/data-psychology-layer=["']outcome["']/gi) || []).length;

      if (refinedMarkers !== 1) fail(`${route}: expected one psychology refinement marker, found ${refinedMarkers}`);
      if (recognitionSections !== 1) fail(`${route}: expected one recognition section, found ${recognitionSections}`);
      if (outcomeSections !== 1) fail(`${route}: expected one outcome section, found ${outcomeSections}`);
      if (/Want to choose the next step\?/i.test(html)) fail(`${route}: generic CTA copy was not replaced`);
    }
  }
}

const uniqueWarnings = [...new Set(warnings)];
if (uniqueWarnings.length) {
  console.warn(`Final QA warnings (${uniqueWarnings.length}):`);
  for (const warning of uniqueWarnings.slice(0, 40)) console.warn(`- ${warning}`);
  if (uniqueWarnings.length > 40) console.warn(`- ...and ${uniqueWarnings.length - 40} more`);
}

if (errors.length) {
  console.error(`Final SEO QA FAILED (${errors.length} critical issue(s)):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Final SEO QA GREEN: 77 sitemap URLs validated; all static pages include the studio disclosure; ${clusters.length} legacy language clusters inspected plus Nail Knowledge QA.`);