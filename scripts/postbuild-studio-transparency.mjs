import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const sitemapFile = path.join(dist, "sitemap.xml");
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

const copy = {
  pl: {
    eyebrow: "PRYWATNIE I KAMERALNIE",
    title: "Studio domowe — wyłącznie po umówieniu",
    text: "ElviGlow nie jest dużym salonem. To prywatny gabinet domowy w Deventer, w którym wizyty odbywają się indywidualnie, jedna klientka na raz. Podczas zabiegu drzwi gabinetu są zamknięte. Nie prowadzimy wizyt bez wcześniejszego umówienia; szczegóły lokalizacji potwierdzamy przy rezerwacji.",
    tags: ["Prywatny gabinet domowy", "Jedna klientka na raz", "Tylko po umówieniu"],
  },
  en: {
    eyebrow: "PRIVATE AND PERSONAL",
    title: "Home-based studio — appointment only",
    text: "ElviGlow is not a large salon. It is a private home-based treatment studio in Deventer, where visits are one-to-one and only one client is seen at a time. The treatment-room door remains closed during the appointment. There are no walk-ins; location details are confirmed when booking.",
    tags: ["Private home studio", "One client at a time", "Appointment only"],
  },
  nl: {
    eyebrow: "PRIVÉ EN KLEINSCHALIG",
    title: "Studio aan huis — alleen op afspraak",
    text: "ElviGlow is geen grote salon, maar een privé-behandelruimte aan huis in Deventer. Afspraken zijn één-op-één, met één klant tegelijk, en de deur van de behandelruimte blijft tijdens de behandeling gesloten. Er is geen vrije inloop; de bezoekdetails worden bij de afspraak bevestigd.",
    tags: ["Privéstudio aan huis", "Eén klant tegelijk", "Alleen op afspraak"],
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function languageFor(route) {
  if (route.startsWith("/pl/")) return "pl";
  if (route.startsWith("/en/")) return "en";
  return "nl";
}

function disclosure(language) {
  const item = copy[language];
  const tags = item.tags.map((tag) => `<span>✦ ${escapeHtml(tag)}</span>`).join("");
  return [
    "",
    '    <section class="article-section studio-disclosure" data-studio-transparency="true">',
    '      <div class="section-head">',
    `        <p class="eyebrow">${escapeHtml(item.eyebrow)}</p>`,
    `        <h2>${escapeHtml(item.title)}</h2>`,
    `        <p>${escapeHtml(item.text)}</p>`,
    `        <div class="trust">${tags}</div>`,
    "      </div>",
    "    </section>",
    "",
  ].join("\n");
}

if (!fs.existsSync(sitemapFile)) {
  console.error("Studio transparency FAILED: dist/sitemap.xml is missing.");
  process.exit(1);
}

const sitemap = fs.readFileSync(sitemapFile, "utf8");
const routes = [...sitemap.matchAll(/<loc>https:\/\/elviglow\.com([^<]*)<\/loc>/g)]
  .map((match) => match[1].replace(/\/$/, "") || "/")
  .filter((route) => !appRoutes.has(route));

const errors = [];
let updated = 0;
let verified = 0;

for (const route of routes) {
  const file = path.join(dist, route.replace(/^\//, ""), "index.html");
  if (!fs.existsSync(file)) {
    errors.push(`${route}: generated HTML is missing`);
    continue;
  }

  const original = fs.readFileSync(file, "utf8");
  const markerCount = (original.match(/data-studio-transparency=["']true["']/g) || []).length;

  if (markerCount === 1) {
    verified += 1;
    continue;
  }
  if (markerCount > 1) {
    errors.push(`${route}: transparency block occurs ${markerCount} times`);
    continue;
  }

  const cta = original.match(/<section class=["']cta["']>/i);
  if (!cta) {
    errors.push(`${route}: CTA insertion point is missing`);
    continue;
  }

  const html = original.replace(cta[0], disclosure(languageFor(route)) + cta[0]);
  const finalCount = (html.match(/data-studio-transparency=["']true["']/g) || []).length;
  if (finalCount !== 1) {
    errors.push(`${route}: transparency block could not be inserted exactly once`);
    continue;
  }

  fs.writeFileSync(file, html);
  updated += 1;
}

if (errors.length) {
  console.error(`Studio transparency FAILED (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Studio transparency GREEN: updated ${updated}; already verified ${verified}; checked ${routes.length} static pages.`);
