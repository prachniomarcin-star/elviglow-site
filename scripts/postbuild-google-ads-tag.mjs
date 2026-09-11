import fs from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const GOOGLE_ADS_ID = "AW-959114889";
const MARKER = `googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;

const snippet = `\n    <!-- Google tag (gtag.js) -->\n    <script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}"></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', '${GOOGLE_ADS_ID}');\n    </script>\n`;

function collectHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectHtmlFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(fullPath);
  }
  return out;
}

if (!fs.existsSync(DIST_DIR)) {
  throw new Error(`Missing build directory: ${DIST_DIR}`);
}

const htmlFiles = collectHtmlFiles(DIST_DIR);
let injected = 0;
let alreadyPresent = 0;

for (const file of htmlFiles) {
  const source = fs.readFileSync(file, "utf8");
  if (source.includes(MARKER)) {
    alreadyPresent += 1;
    continue;
  }
  if (!source.includes("<head>")) {
    throw new Error(`Cannot inject Google Ads tag: <head> missing in ${file}`);
  }
  fs.writeFileSync(file, source.replace("<head>", `<head>${snippet}`), "utf8");
  injected += 1;
}

console.log(`Google Ads tag ${GOOGLE_ADS_ID}: injected into ${injected} HTML files; already present in ${alreadyPresent}.`);
