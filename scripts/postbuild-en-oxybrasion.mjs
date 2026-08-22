import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const enUrl = "https://elviglow.com/en/oxybrasion-deventer";

const files = [
  path.join(dist, "oxybrasie-deventer", "index.html"),
  path.join(dist, "pl", "oxybrazja-deventer", "index.html"),
];

let updated = 0;
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const original = fs.readFileSync(file, "utf8");
  let html = original;

  if (!html.includes('hreflang="en"')) {
    html = html.replace(
      /(<link rel="alternate" hreflang="(?:nl|pl)"[^>]*>)/,
      `$1\n  <link rel="alternate" hreflang="en" href="${enUrl}" />`
    );
  }

  if (!html.includes('/en/oxybrasion-deventer')) {
    html = html.replace(
      /(<div class="language-options"[^>]*>)([\s\S]*?)(<\/div>)/,
      (match, open, links, close) => `${open}${links}<a href="/en/oxybrasion-deventer" data-lang-link="en">EN</a>${close}`
    );
  }

  if (html !== original) {
    fs.writeFileSync(file, html);
    updated += 1;
  }
}

console.log(`English oxybrasion postbuild: updated ${updated} language counterpart pages.`);
