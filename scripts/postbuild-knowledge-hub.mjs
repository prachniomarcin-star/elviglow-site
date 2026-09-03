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
<section class="section" ${marker} aria-label="ElviGlow kennisartikelen">
  <div class="section-heading center">
    <p class="eyebrow">ElviGlow • Kennis</p>
    <h2>Praktische gidsen van ElviGlow</h2>
    <p>Lees verder over nagels, waxen, huidproblemen en microneedling.</p>
  </div>

  <h3>Nagels • Paznokcie • Nails</h3>
  <div class="card-grid-3 knowledge-card-grid" data-nail-knowledge-hub="true">
    <article class="glass-card">
      <span class="card-mark">✦</span>
      <h3>Acrylnagels of gelnagels?</h3>
      <p>Wat is het verschil en welke richting past bij jouw nagels en dagelijks gebruik?</p>
      <p><a href="/kennis/acrylnagels-of-gelnagels">NL</a> · <a href="/pl/wiedza/paznokcie-akrylowe-czy-zelowe">PL</a> · <a href="/en/knowledge/acrylic-or-gel-nails">EN</a></p>
    </article>
    <article class="glass-card">
      <span class="card-mark">✦</span>
      <h3>Hoe lang blijven gelnagels en gellak mooi?</h3>
      <p>Over uitgroei, houdbaarheid, onderhoud en wanneer een refill logisch is.</p>
      <p><a href="/kennis/hoe-lang-blijven-gelnagels-en-gellak-mooi">NL</a> · <a href="/pl/wiedza/jak-dlugo-trzymaja-sie-paznokcie-zelowe-i-hybryda">PL</a> · <a href="/en/knowledge/how-long-do-gel-nails-and-gel-polish-last">EN</a></p>
    </article>
    <article class="glass-card">
      <span class="card-mark">✦</span>
      <h3>Eerste keer nagelverlenging</h3>
      <p>Hoe kies je lengte en vorm, hoe bereid je je voor en wat gebeurt er tijdens de afspraak?</p>
      <p><a href="/kennis/eerste-keer-nagelverlenging">NL</a> · <a href="/pl/wiedza/pierwsze-przedluzanie-paznokci">PL</a> · <a href="/en/knowledge/first-time-nail-extensions">EN</a></p>
    </article>
  </div>

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
    <a href="/pl/wiedza/paznokcie-akrylowe-czy-zelowe">Paznokcie akrylowe czy żelowe?</a> ·
    <a href="/pl/wiedza/jak-dlugo-trzymaja-sie-paznokcie-zelowe-i-hybryda">Jak długo trzymają się paznokcie żelowe i hybryda?</a> ·
    <a href="/pl/wiedza/pierwsze-przedluzanie-paznokci">Pierwsze przedłużanie paznokci</a> ·
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
    <a href="/en/knowledge/acrylic-or-gel-nails">Acrylic or gel nails?</a> ·
    <a href="/en/knowledge/how-long-do-gel-nails-and-gel-polish-last">How long do gel nails and gel polish last?</a> ·
    <a href="/en/knowledge/first-time-nail-extensions">First-time nail extensions</a> ·
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
console.log("Knowledge hub postbuild: static links added, including visible Nail Knowledge cards.");
