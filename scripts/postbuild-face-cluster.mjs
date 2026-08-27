import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");

const clusters = [
  {
    files: [
      "gezichtsbehandeling-deventer/index.html",
      "huidverbetering-deventer/index.html",
      "microneedling-deventer/index.html",
      "oxybrasie-deventer/index.html",
      "waterstofreiniging-deventer/index.html",
      "kennis/grove-porien-wat-helpt/index.html",
      "kennis/droge-huid-ondanks-creme/index.html",
      "kennis/wat-niet-doen-na-microneedling/index.html",
      "kennis/oxybrasie-of-waterstofreiniging/index.html"
    ],
    lang: "nl"
  },
  {
    files: [
      "pl/gezichtsbehandeling-deventer/index.html",
      "pl/huidverbetering-deventer/index.html",
      "pl/microneedling-deventer/index.html",
      "pl/oxybrazja-deventer/index.html",
      "pl/oczyszczanie-wodorowe-deventer/index.html",
      "pl/wiedza/rozszerzone-pory-co-pomaga/index.html",
      "pl/wiedza/sucha-skora-mimo-kremu/index.html",
      "pl/wiedza/czego-nie-robic-po-microneedlingu/index.html",
      "pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe/index.html"
    ],
    lang: "pl"
  }
];

const blocks = {
  nl: `
<section class="article-section" data-seo-face-cluster>
  <div class="section-head">
    <p class="eyebrow">ElviGlow • Deventer</p>
    <h2>Van huidprobleem naar passende behandeling</h2>
    <p>Vergelijk de belangrijkste gezichtsbehandelingen en lees eerst wat bij je huiddoel past.</p>
  </div>
  <div class="related">
    <a href="/gezichtsbehandeling-deventer">Gezichtsbehandeling Deventer</a>
    <a href="/huidverbetering-deventer">Huidverbetering Deventer</a>
    <a href="/microneedling-deventer">Microneedling Deventer</a>
    <a href="/oxybrasie-deventer">Oxybrasie Deventer</a>
    <a href="/waterstofreiniging-deventer">Waterstofreiniging Deventer</a>
    <a href="/kennis/grove-porien-wat-helpt">Grove poriën: wat helpt?</a>
    <a href="/kennis/droge-huid-ondanks-creme">Droge huid ondanks crème</a>
    <a href="/kennis/oxybrasie-of-waterstofreiniging">Oxybrasie of waterstofreiniging?</a>
  </div>
</section>`,
  pl: `
<section class="article-section" data-seo-face-cluster>
  <div class="section-head">
    <p class="eyebrow">ElviGlow • Deventer</p>
    <h2>Od problemu skóry do właściwego zabiegu</h2>
    <p>Porównaj najważniejsze zabiegi na twarz i najpierw sprawdź, który kierunek pasuje do potrzeb skóry.</p>
  </div>
  <div class="related">
    <a href="/pl/gezichtsbehandeling-deventer">Zabiegi na twarz Deventer</a>
    <a href="/pl/huidverbetering-deventer">Pielęgnacja skóry Deventer</a>
    <a href="/pl/microneedling-deventer">Microneedling Deventer</a>
    <a href="/pl/oxybrazja-deventer">Oxybrazja Deventer</a>
    <a href="/pl/oczyszczanie-wodorowe-deventer">Oczyszczanie wodorowe Deventer</a>
    <a href="/pl/wiedza/rozszerzone-pory-co-pomaga">Rozszerzone pory: co pomaga?</a>
    <a href="/pl/wiedza/sucha-skora-mimo-kremu">Sucha skóra mimo kremu</a>
    <a href="/pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe">Oxybrazja czy oczyszczanie wodorowe?</a>
  </div>
</section>`
};

let updated = 0;
for (const cluster of clusters) {
  for (const relative of cluster.files) {
    const file = path.join(dist, relative);
    if (!fs.existsSync(file)) continue;

    const original = fs.readFileSync(file, "utf8");
    if (original.includes("data-seo-face-cluster")) continue;

    let html = original;
    if (html.includes("</main>")) {
      html = html.replace("</main>", `${blocks[cluster.lang]}\n</main>`);
    } else if (html.includes("</body>")) {
      html = html.replace("</body>", `${blocks[cluster.lang]}\n</body>`);
    }

    if (html !== original) {
      fs.writeFileSync(file, html);
      updated += 1;
    }
  }
}

const homeFile = path.join(dist, "index.html");
if (fs.existsSync(homeFile)) {
  const original = fs.readFileSync(homeFile, "utf8");
  if (!original.includes("data-seo-face-home-static")) {
    const staticLinks = `
<section data-seo-face-home-static aria-label="Gezichtsbehandelingen in Deventer">
  <h2>Gezichtsbehandelingen in Deventer</h2>
  <p>
    <a href="/gezichtsbehandeling-deventer">Gezichtsbehandeling Deventer</a> ·
    <a href="/huidverbetering-deventer">Huidverbetering Deventer</a> ·
    <a href="/microneedling-deventer">Microneedling Deventer</a> ·
    <a href="/oxybrasie-deventer">Oxybrasie Deventer</a> ·
    <a href="/waterstofreiniging-deventer">Waterstofreiniging Deventer</a>
  </p>
  <p>
    <a href="/pl/gezichtsbehandeling-deventer">Zabiegi na twarz Deventer</a> ·
    <a href="/pl/microneedling-deventer">Microneedling Deventer po polsku</a> ·
    <a href="/pl/oxybrazja-deventer">Oxybrazja Deventer</a> ·
    <a href="/pl/oczyszczanie-wodorowe-deventer">Oczyszczanie wodorowe Deventer</a>
  </p>
</section>`;
    let html = original;
    if (html.includes("</main>")) html = html.replace("</main>", `${staticLinks}\n</main>`);
    else html = html.replace("</body>", `${staticLinks}\n</body>`);
    fs.writeFileSync(homeFile, html);
    updated += 1;
  }
}

console.log(`Face cluster postbuild: linked ${updated} pages.`);
