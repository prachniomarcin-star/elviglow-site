import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const contentFile = path.resolve("scripts", "knowledge-persuasion-content.json");
const guides = JSON.parse(fs.readFileSync(contentFile, "utf8"));

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function sectionHtml(kind, title, text) {
  return [
    "",
    '    <section class="article-section psychology-section psychology-' + kind + '" data-psychology-layer="' + kind + '">',
    '      <div class="article-copy">',
    "        <h2>" + escapeHtml(title) + "</h2>",
    "        <p>" + escapeHtml(text) + "</p>",
    "      </div>",
    "    </section>",
  ].join("\n");
}

function insertAfterHero(html, block) {
  const match = html.match(/<section class="article-hero">[\s\S]*?<\/section>/i);
  if (!match) return null;
  return html.replace(match[0], match[0] + block);
}

function insertBeforeClosingContent(html, block) {
  const markers = [
    '<section class="article-section note-section">',
    '<section class="article-section faq-section">',
    '<section class="cta">',
  ];
  for (const marker of markers) {
    if (html.includes(marker)) return html.replace(marker, block + "\n    " + marker);
  }
  return null;
}

function replaceCta(html, heading, paragraph) {
  const match = html.match(/<section class="cta">[\s\S]*?<\/section>/i);
  if (!match) return null;
  let block = match[0].replace(
    /<h2[^>]*>[\s\S]*?<\/h2>/i,
    "<h2>" + escapeHtml(heading) + "</h2>"
  );
  block = block.replace(
    /(<h2[^>]*>[\s\S]*?<\/h2>\s*)<p>[\s\S]*?<\/p>/i,
    "$1<p>" + escapeHtml(paragraph) + "</p>"
  );
  return html.replace(match[0], block);
}

function count(html, pattern) {
  return (html.match(pattern) || []).length;
}

const errors = [];
let updated = 0;
let alreadyRefined = 0;

for (const guide of guides) {
  for (const language of ["nl", "pl", "en"]) {
    const route = guide.routes[language];
    const data = guide.copy[language];
    const file = path.join(dist, route.replace(/^\//, ""), "index.html");

    if (!fs.existsSync(file)) {
      errors.push(route + ": generated article is missing");
      continue;
    }

    const original = fs.readFileSync(file, "utf8");
    if (original.includes('data-psychology-refined="true"')) {
      const recognitionCount = count(original, /data-psychology-layer="recognition"/g);
      const outcomeCount = count(original, /data-psychology-layer="outcome"/g);
      if (recognitionCount !== 1 || outcomeCount !== 1) {
        errors.push(route + ": existing persuasion markers are incomplete");
      } else {
        alreadyRefined += 1;
      }
      continue;
    }

    let html = original.replace(
      '<main class="knowledge-article">',
      '<main class="knowledge-article" data-psychology-refined="true">'
    );

    html = insertAfterHero(
      html,
      sectionHtml("recognition", data.recognitionTitle, data.recognitionText)
    );
    if (!html) {
      errors.push(route + ": article hero not found");
      continue;
    }

    html = insertBeforeClosingContent(
      html,
      sectionHtml("outcome", data.outcomeTitle, data.outcomeText)
    );
    if (!html) {
      errors.push(route + ": article closing section not found");
      continue;
    }

    html = replaceCta(html, data.ctaTitle, data.ctaText);
    if (!html) {
      errors.push(route + ": CTA not found");
      continue;
    }

    const recognitionCount = count(html, /data-psychology-layer="recognition"/g);
    const outcomeCount = count(html, /data-psychology-layer="outcome"/g);
    const refinedCount = count(html, /data-psychology-refined="true"/g);
    if (recognitionCount !== 1 || outcomeCount !== 1 || refinedCount !== 1) {
      errors.push(
        route +
          ": invalid persuasion block count " +
          recognitionCount +
          "/" +
          outcomeCount +
          "/" +
          refinedCount
      );
      continue;
    }

    fs.writeFileSync(file, html);
    updated += 1;
  }
}

if (errors.length) {
  console.error("Knowledge persuasion FAILED (" + errors.length + "):");
  for (const error of errors) console.error("- " + error);
  process.exit(1);
}

console.log(
  "Knowledge persuasion GREEN: refined " +
    updated +
    " localized articles; " +
    alreadyRefined +
    " already verified; " +
    guides.length +
    " guide topics checked."
);
