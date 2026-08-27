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
    <a href="/kennis/oxybrasie-of-waterstofreiniging">Oxybrasie of waterstofreiniging?</a> ·
    <a href="/kennis/verstopte-porien-en-mee-eters">Verstopte poriën en mee-eters</a> ·
    <a href="/kennis/hoe-vaak-gezicht-laten-reinigen">Hoe vaak professioneel reinigen?</a>
  </p>
  <h3>Microneedling</h3>
  <p>
    <a href="/kennis/wat-niet-doen-na-microneedling">Microneedling dag voor dag</a> ·
    <a href="/kennis/hoeveel-microneedling-behandelingen">Hoeveel behandelingen zijn nodig?</a> ·
    <a href="/kennis/wanneer-geen-microneedling">Wanneer beter geen microneedling?</a>
  </p>

  <h3>Polski poradnik</h3>
  <p>
    <a href="/pl/wiedza/brazilian-wax-jak-sie-przygotowac">Brazilian wax: jak się przygotować</a> ·
    <a href="/pl/wiedza/bikini-czy-brazilian-wax">Bikini czy Brazilian wax</a> ·
    <a href="/pl/wiedza/depilacja-woskiem-pierwszy-raz">Depilacja woskiem pierwszy raz</a> ·
    <a href="/pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem">Jak długo skóra pozostaje gładka?</a> ·
    <a href="/pl/wiedza/rozszerzone-pory-co-pomaga">Rozszerzone pory</a> ·
    <a href="/pl/wiedza/sucha-skora-mimo-kremu">Sucha skóra mimo kremu</a> ·
    <a href="/pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe">Oxybrazja czy oczyszczanie wodorowe?</a> ·
    <a href="/pl/wiedza/zatkane-pory-i-zaskorniki">Zatkane pory i zaskórniki</a> ·
    <a href="/pl/wiedza/jak-czesto-oczyszczac-twarz">Jak często oczyszczać twarz?</a> ·
    <a href="/pl/wiedza/czego-nie-robic-po-microneedlingu">Microneedling dzień po dniu</a> ·
    <a href="/pl/wiedza/ile-zabiegow-microneedlingu">Ile zabiegów potrzeba?</a> ·
    <a href="/pl/wiedza/kiedy-nie-robic-microneedlingu">Kiedy nie robić microneedlingu?</a>
  </p>

  <h3>English guides</h3>
  <p>
    <a href="/en/knowledge/brazilian-wax-preparation">Brazilian wax preparation</a> ·
    <a href="/en/knowledge/bikini-line-or-brazilian-wax">Bikini line or Brazilian wax?</a> ·
    <a href="/en/knowledge/first-time-waxing">First time waxing</a> ·
    <a href="/en/knowledge/how-long-does-waxing-last">How long does waxing stay smooth?</a> ·
    <a href="/en/knowledge/large-pores-what-helps">Visible pores: what helps?</a> ·
    <a href="/en/knowledge/dry-skin-despite-moisturiser">Dry skin despite moisturiser</a> ·
    <a href="/en/knowledge/oxybrasion-or-hydrogen-cleansing">Oxybrasion or hydrogen cleansing?</a> ·
    <a href="/en/knowledge/clogged-pores-and-blackheads">Clogged pores and blackheads</a> ·
    <a href="/en/knowledge/how-often-professional-facial-cleansing">How often professional facial cleansing?</a> ·
    <a href="/en/knowledge/what-not-to-do-after-microneedling">Microneedling day by day</a> ·
    <a href="/en/knowledge/how-many-microneedling-treatments">How many treatments are needed?</a> ·
    <a href="/en/knowledge/when-not-to-have-microneedling">When should you avoid microneedling?</a>
  </p>
</section>`;

if (html.includes("</main>")) html = html.replace("</main>", `${hub}\n</main>`);
else html = html.replace("</body>", `${hub}\n</body>`);

fs.writeFileSync(file, html);
console.log("Knowledge hub postbuild: static links added.");
