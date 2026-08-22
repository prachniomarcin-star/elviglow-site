import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const enUrl = "https://elviglow.com/en/hydrogen-facial-cleansing-deventer";
const enPath = "/en/hydrogen-facial-cleansing-deventer";

const files = [
  path.join(dist, "waterstofreiniging-deventer", "index.html"),
  path.join(dist, "pl", "oczyszczanie-wodorowe-deventer", "index.html"),
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

  if (!html.includes(enPath)) {
    html = html.replace(
      /(<div class="language-options"[^>]*>)([\s\S]*?)(<\/div>)/,
      (match, open, links, close) => `${open}${links}<a href="${enPath}" data-lang-link="en">EN</a>${close}`
    );
  }

  if (html !== original) {
    fs.writeFileSync(file, html);
    updated += 1;
  }
}

console.log(`English hydrogen cleansing postbuild: updated ${updated} language counterpart pages.`);
