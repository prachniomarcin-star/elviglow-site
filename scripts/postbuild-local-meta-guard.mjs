import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = "https://elviglow.com";

const pages = {
  "microneedling-deventer/index.html": {
    canonical: "/microneedling-deventer",
    description: "Microneedling in Deventer vanaf €89. Voor huidstructuur, zichtbare poriën, stevigheid en fijne lijntjes, persoonlijk afgestemd bij ElviGlow."
  },
  "gezichtsbehandeling-deventer/index.html": {
    canonical: "/gezichtsbehandeling-deventer",
    description: "Gezichtsbehandeling in Deventer vanaf €50. Oxybrasie, waterstofreiniging, glow, lifting en microneedling afgestemd op je huid."
  },
  "huidverbetering-deventer/index.html": {
    canonical: "/huidverbetering-deventer",
    description: "Huidverbetering in Deventer voor droogte, poriën, doffe teint, structuur en stevigheid. Behandelingen vanaf €50 bij ElviGlow."
  },
  "lycon-waxing-deventer/index.html": {
    canonical: "/lycon-waxing-deventer",
    description: "Lycon waxing in Deventer vanaf €10. Wenkbrauwen, oksels, benen, bikini en Brazilian waxing met duidelijke prijzen bij ElviGlow."
  },
  "abonamenty/index.html": {
    canonical: "/abonamenty",
    description: "Regelmatige huidverzorging in Deventer met een duidelijk plan voor reiniging, glow en regeneratie bij ElviGlow."
  }
};

function upsertMeta(html, description) {
  const tag = `<meta name="description" content="${description.replaceAll('"', '&quot;')}" />`;
  if (/<meta\s+name=["']description["'][^>]*>/i.test(html)) {
    return html.replace(/<meta\s+name=["']description["'][^>]*>/i, tag);
  }
  return html.replace("</head>", `  ${tag}\n</head>`);
}

function upsertCanonical(html, url) {
  const tag = `<link rel="canonical" href="${url}" />`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    return html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, tag);
  }
  return html.replace("</head>", `  ${tag}\n</head>`);
}

const failures = [];

for (const [relative, config] of Object.entries(pages)) {
  const file = path.join(dist, relative);
  if (!fs.existsSync(file)) {
    failures.push(`${relative}: missing generated file`);
    continue;
  }

  let html = fs.readFileSync(file, "utf8");
  const canonical = `${base}${config.canonical}`;
  html = upsertMeta(html, config.description);
  html = upsertCanonical(html, canonical);
  fs.writeFileSync(file, html);

  const verify = fs.readFileSync(file, "utf8");
  if (!verify.includes(`content="${config.description.replaceAll('"', '&quot;')}"`)) {
    failures.push(`${relative}: meta description guard failed`);
  }
  if (!verify.includes(`rel="canonical" href="${canonical}"`)) {
    failures.push(`${relative}: canonical guard failed`);
  }
}

if (failures.length) {
  console.error("Local SEO meta guard FAILED:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Local SEO meta guard GREEN: ${Object.keys(pages).length} pages verified.`);
