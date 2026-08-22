import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");

const facePages = [
  "en/gezichtsbehandeling-deventer/index.html",
  "en/huidverbetering-deventer/index.html",
  "en/microneedling-deventer/index.html",
  "en/oxybrasion-deventer/index.html",
  "en/hydrogen-facial-cleansing-deventer/index.html",
  "en/knowledge/large-pores-what-helps/index.html",
  "en/knowledge/dry-skin-despite-moisturiser/index.html",
  "en/knowledge/oxybrasion-or-hydrogen-cleansing/index.html",
  "en/knowledge/what-not-to-do-after-microneedling/index.html",
];

const faceBlock = `
<section class="article-section" data-seo-en-face-cluster>
  <div class="section-head">
    <p class="eyebrow">ElviGlow • Deventer</p>
    <h2>From skin concern to the right next step</h2>
    <p>Compare facial treatments and guides before choosing a treatment or checking the price list.</p>
  </div>
  <div class="related">
    <a href="/en/gezichtsbehandeling-deventer">Facial treatments Deventer</a>
    <a href="/en/huidverbetering-deventer">Skin improvement Deventer</a>
    <a href="/en/microneedling-deventer">Microneedling Deventer</a>
    <a href="/en/oxybrasion-deventer">Oxybrasion Deventer</a>
    <a href="/en/hydrogen-facial-cleansing-deventer">Hydrogen facial cleansing Deventer</a>
    <a href="/en/knowledge/large-pores-what-helps">Visible pores: what helps?</a>
    <a href="/en/knowledge/dry-skin-despite-moisturiser">Dry skin despite moisturiser</a>
    <a href="/en/knowledge/oxybrasion-or-hydrogen-cleansing">Oxybrasion or hydrogen cleansing?</a>
    <a href="/wiedza">Knowledge hub</a>
    <a href="/cennik#face">Facial treatment prices</a>
  </div>
</section>`;

const waxPages = [
  "en/lycon-waxing-deventer/index.html",
  "en/knowledge/brazilian-wax-preparation/index.html",
  "en/knowledge/bikini-line-or-brazilian-wax/index.html",
  "en/knowledge/first-time-waxing/index.html",
  "en/knowledge/how-long-does-waxing-last/index.html",
];

const waxBlock = `
<section class="article-section" data-seo-en-wax-cluster>
  <div class="section-head">
    <p class="eyebrow">ElviGlow • Deventer</p>
    <h2>Waxing in Deventer: treatment, preparation and prices</h2>
    <p>Use the service page for treatment options, the guides for preparation and the price list for current prices.</p>
  </div>
  <div class="related">
    <a href="/depilacja">Waxing Deventer</a>
    <a href="/en/lycon-waxing-deventer">LYCON waxing Deventer</a>
    <a href="/en/knowledge/brazilian-wax-preparation">Brazilian wax preparation</a>
    <a href="/en/knowledge/bikini-line-or-brazilian-wax">Bikini line or Brazilian wax?</a>
    <a href="/en/knowledge/first-time-waxing">First time waxing</a>
    <a href="/en/knowledge/how-long-does-waxing-last">How long does waxing stay smooth?</a>
    <a href="/wiedza">Knowledge hub</a>
    <a href="/cennik#waxing">Waxing prices</a>
  </div>
</section>`;

function appendBlock(relative, marker, block) {
  const file = path.join(dist, relative);
  if (!fs.existsSync(file)) return 0;
  const original = fs.readFileSync(file, "utf8");
  if (original.includes(marker)) return 0;
  let html = original;
  if (html.includes("</main>")) html = html.replace("</main>", `${block}\n</main>`);
  else if (html.includes("</body>")) html = html.replace("</body>", `${block}\n</body>`);
  if (html === original) return 0;
  fs.writeFileSync(file, html);
  return 1;
}

let updated = 0;
for (const file of facePages) updated += appendBlock(file, "data-seo-en-face-cluster", faceBlock);
for (const file of waxPages) updated += appendBlock(file, "data-seo-en-wax-cluster", waxBlock);

const homeFile = path.join(dist, "index.html");
if (fs.existsSync(homeFile)) {
  const original = fs.readFileSync(homeFile, "utf8");
  if (!original.includes("data-seo-en-home-static")) {
    const homeBlock = `
<section data-seo-en-home-static aria-label="English ElviGlow services in Deventer">
  <h2>ElviGlow services in Deventer — English</h2>
  <p>
    <a href="/en/gezichtsbehandeling-deventer">Facial treatments Deventer</a> ·
    <a href="/en/huidverbetering-deventer">Skin improvement Deventer</a> ·
    <a href="/en/microneedling-deventer">Microneedling Deventer</a> ·
    <a href="/en/oxybrasion-deventer">Oxybrasion Deventer</a> ·
    <a href="/en/hydrogen-facial-cleansing-deventer">Hydrogen facial cleansing Deventer</a> ·
    <a href="/en/nagels-deventer">Nails Deventer</a> ·
    <a href="/depilacja">Waxing Deventer</a> ·
    <a href="/en/lycon-waxing-deventer">LYCON waxing Deventer</a> ·
    <a href="/wiedza">Knowledge</a>
  </p>
</section>`;
    let html = original;
    if (html.includes("</main>")) html = html.replace("</main>", `${homeBlock}\n</main>`);
    else html = html.replace("</body>", `${homeBlock}\n</body>`);
    fs.writeFileSync(homeFile, html);
    updated += 1;
  }
}

console.log(`English internal links postbuild: updated ${updated} pages.`);
