import fs from "node:fs";
import path from "node:path";

const DIST_DIR = path.resolve("dist");
const OLD_ADS_ID = "AW-959114889";
const NEW_ADS_ID = "AW-18445501835";
const OLD_SEND_TO = "AW-959114889/r4F7CPGR8fMcEIndq8kD";
const NEW_SEND_TO = "AW-18445501835/EVplCIiFivUcEIuLwNtE";

function collectHtmlFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collectHtmlFiles(fullPath));
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(fullPath);
  }
  return out;
}

if (!fs.existsSync(DIST_DIR)) throw new Error(`Missing build directory: ${DIST_DIR}`);

let changed = 0;
for (const file of collectHtmlFiles(DIST_DIR)) {
  const source = fs.readFileSync(file, "utf8");
  const next = source
    .replaceAll(OLD_SEND_TO, NEW_SEND_TO)
    .replaceAll(OLD_ADS_ID, NEW_ADS_ID);
  if (next !== source) {
    fs.writeFileSync(file, next, "utf8");
    changed += 1;
  }
}

console.log(`Google Ads remap complete: ${OLD_ADS_ID} -> ${NEW_ADS_ID}; ${changed} HTML files updated.`);
