import fs from "node:fs";
import path from "node:path";

const file = path.resolve("dist/opinie/index.html");
if (!fs.existsSync(file)) {
  console.error("Reviews hotfix FAILED: dist/opinie/index.html is missing.");
  process.exit(1);
}

let html = fs.readFileSync(file, "utf8");

// The review page is generated inside a template literal. A single escaped \n in
// the generator becomes a real newline inside an inline JS string and breaks the
// script, leaving all dynamic labels empty. Repair it in the generated HTML.
const brokenJoin = '.join("\n")';
const fixedJoin = '.join("\\n")';
html = html.replace(brokenJoin, fixedJoin);

// The generic review-link remap runs after the page is created, so it can also
// rewrite the Google button inside /opinie back to /opinie. Restore the real URL.
html = html.replace(
  /(<a class="btn primary" id="googleButton" href=")[^"]*(")/,
  '$1https://g.page/r/CTlVO8SKXGw-EBM/review$2'
);

// Keep the Google option explicit in every language.
html = html.replace('googleButton:"Leave a review"', 'googleButton:"Leave a Google review"');
html = html.replace('googleButton:"Laat een review achter"', 'googleButton:"Schrijf een Google-review"');

// Validate that the inline script now parses before allowing the build to pass.
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
if (!script) {
  console.error("Reviews hotfix FAILED: inline script not found.");
  process.exit(1);
}
try {
  new Function(script);
} catch (error) {
  console.error("Reviews hotfix FAILED: inline script is still invalid.");
  console.error(error);
  process.exit(1);
}

if (!html.includes('href="https://g.page/r/CTlVO8SKXGw-EBM/review"')) {
  console.error("Reviews hotfix FAILED: Google review URL not restored.");
  process.exit(1);
}

fs.writeFileSync(file, html);
console.log("Reviews hotfix GREEN: labels script parses and Google review link is correct.");
