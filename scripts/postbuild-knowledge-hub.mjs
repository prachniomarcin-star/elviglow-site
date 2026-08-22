import fs from "node:fs";
import path from "node:path";

const file = path.resolve("dist/wiedza/index.html");
if (!fs.existsSync(file)) {
  console.log("Knowledge hub postbuild: /wiedza snapshot not found.");
  process.exit(0);
}

const marker = "data-static-knowledge-hub";
let html = fs.readFileSync(file, "utf8");
if (html.includes(marker)) {
  console.log("Knowledge hub postbuild: static hub already present.");
  process.exit(0);
}

const hub = `
<section ${marker} aria-label="ElviGlow kennisartikelen">
  <h2>Praktische huid- en waxkennis</h2>
  <h3>Waxen</h3>
  <p>
    <a href="/kennis/brazilian-wax-voorbereiden">Brazilian wax voorbereiden</a> ·
    <a href="/kennis/bikinilijn-of-brazilian-wax">Bikinilijn of Brazilian wax</a> ·
    <a href="/kennis/waxen-eerste-keer">Eerste keer waxen</a> ·
    <a href="/kennis/hoe-lang-glad-na-waxen">Hoe lang blijft de huid glad?</a>
  </p>
  <h3>Huid, poriën en reinigen</h3>
  <p>
    <a href="/kennis/grove-porien-wat-helpt">Grove poriën: wat helpt?</a> ·
    <a href="/kennis/droge-huid-ondanks-creme">Droge huid ondanks crème</a> ·
    <a href="/kennis/oxybrasie-of-waterstofreiniging">Oxybrasie of waterstofreiniging?</a>
  </p>
  <h3>Microneedling</h3>
  <p><a href="/kennis/wat-niet-doen-na-microneedling">Wat kun je beter niet doen na microneedling?</a></p>
  <h3>Polski poradnik</h3>
  <p>
    <a href="/pl/wiedza/brazilian-wax-jak-sie-przygotowac">Brazilian wax: jak się przygotować</a> ·
    <a href="/pl/wiedza/bikini-czy-brazilian-wax">Bikini czy Brazilian wax</a> ·
    <a href="/pl/wiedza/depilacja-woskiem-pierwszy-raz">Depilacja woskiem pierwszy raz</a> ·
    <a href="/pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem">Jak długo skóra pozostaje gładka?</a> ·
    <a href="/pl/wiedza/rozszerzone-pory-co-pomaga">Rozszerzone pory</a> ·
    <a href="/pl/wiedza/sucha-skora-mimo-kremu">Sucha skóra mimo kremu</a> ·
    <a href="/pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe">Oxybrazja czy oczyszczanie wodorowe?</a> ·
    <a href="/pl/wiedza/czego-nie-robic-po-microneedlingu">Czego nie robić po microneedlingu?</a>
  </p>
</section>`;

if (html.includes("</main>")) html = html.replace("</main>", `${hub}\n</main>`);
else html = html.replace("</body>", `${hub}\n</body>`);

fs.writeFileSync(file, html);
console.log("Knowledge hub postbuild: static links added.");
