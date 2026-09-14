import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
if (!fs.existsSync(dist)) {
  console.error("Solo studio/reviews postbuild FAILED: dist is missing.");
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    if (!entry.isFile()) return [];
    return /\.(?:html|js)$/i.test(entry.name) ? [full] : [];
  });
}

const replacements = [
  // NL — jednoosobowy ton
  ["In onze kleinschalige studio aan huis kijken we eerst naar wat je huid werkelijk nodig heeft.", "Bij ElviGlow is elke afspraak één-op-één. In de kleinschalige studio aan huis in Deventer kijkt Elvira persoonlijk naar wat je huid nodig heeft."],
  ["We helpen je begrijpen wat je huid nodig heeft en hoe je haar regelmatig verzorgt.", "Elvira helpt je persoonlijk begrijpen wat je huid nodig heeft en hoe je haar regelmatig verzorgt."],
  ["Eerst helpen we de huidbehoefte begrijpen, daarna kiezen we een gezichtsritueel, nagelverzorging, Lycon waxing, lichaamsbehandeling of regelmatig verzorgingsprogramma — rustig, esthetisch en zonder druk.", "Eerst krijg je duidelijkheid over wat je huid nodig heeft; daarna kies je samen met Elvira een passend gezichtsritueel, nagelverzorging, Lycon waxing, lichaamsbehandeling of verzorgingsprogramma — rustig, persoonlijk en zonder druk."],
  ["We kijken wat de huid het meest stoort:", "Elvira kijkt naar wat je het meest aan je huid stoort:"],
  ["We leggen het mechanisme eenvoudig uit:", "Je krijgt een eenvoudige uitleg over het mechanisme:"],
  ["We stemmen de behandeling af op het doel:", "Elvira stemt de behandeling af op jouw doel:"],
  ["We bepalen of één behandeling genoeg is, of dat een serie of verzorgingsprogramma beter past.", "Samen met Elvira bepaal je of één behandeling genoeg is, of dat een serie of verzorgingsprogramma beter past."],
  ["We stemmen kleur, vorm en afwerking af op de stijl van de klant.", "Kleur, vorm en afwerking worden afgestemd op jouw stijl."],
  ["We stemmen het effect af op lengte, handvorm, werk en wensen.", "Het effect wordt afgestemd op lengte, handvorm, werk en jouw wensen."],
  ["We doen geen volledige gezichtswaxing", "Volledige gezichtswaxing wordt niet aangeboden"],
  ["Hoe kiezen we de waxingmethode?", "Hoe wordt de waxingmethode gekozen?"],
  ["De omvang spreken we vóór de behandeling rustig af, met volledig respect voor comfort.", "De omvang wordt vóór de behandeling rustig met je afgestemd, met volledig respect voor comfort."],
  ["Voor cryolipolyse doen we altijd een korte check en bespreken we contra-indicaties.", "Voor cryolipolyse vindt altijd eerst een korte check plaats en worden contra-indicaties besproken."],
  ["We behandelen niet op actief geïrriteerde huid of verse huidveranderingen.", "Er wordt niet behandeld op actief geïrriteerde huid of verse huidveranderingen."],
  ["We gebruiken geen sterke zuiging en tijdens één bezoek behandelen we alleen één gekozen zone.", "Er wordt geen sterke zuiging gebruikt en per bezoek wordt één gekozen zone behandeld."],
  ["Tijdens één bezoek behandelen we slechts één lichaamszone.", "Per bezoek wordt één lichaamszone behandeld."],
  ["We kiezen dit wanneer de huid sterkere voeding, hydratatie, spanning of een meer premium verzorgingseffect nodig heeft.", "Deze richting past wanneer de huid sterkere voeding, hydratatie, spanning of een meer premium verzorgingseffect nodig heeft."],
  ["We kiezen dit na overleg.", "Deze behandeling wordt pas na overleg gekozen."],
  ["Eerst herkennen we het zichtbare probleem, dan leggen we een eenvoudig mechanisme uit en pas daarna kiezen we de verzorgingsrichting.", "Eerst herken je het zichtbare probleem, daarna krijg je een eenvoudige uitleg en vervolgens kies je samen met Elvira de verzorgingsrichting."],
  ["We doen geen agressieve behandelingen zonder de huid te beoordelen en contra-indicaties te bespreken.", "Er wordt geen intensievere behandeling uitgevoerd zonder eerst de huid te beoordelen en contra-indicaties te bespreken."],
  ["Bij zeer gevoelige huid, actieve ontsteking of verse irritatie kiezen we een zachter ritueel.", "Bij zeer gevoelige huid, actieve ontsteking of verse irritatie wordt een zachter ritueel gekozen."],
  ["Stuur ons een bericht via Instagram of e-mail.", "Stuur Elvira een bericht via Instagram of e-mail."],
  ["We antwoorden en helpen de juiste richting kiezen.", "Elvira antwoordt persoonlijk en helpt je de juiste richting kiezen."],
  ["Afspraken regelen we via WhatsApp of Instagram. E-mail is er voor langere vragen.", "Een afspraak regel je rechtstreeks met Elvira via WhatsApp of Instagram. E-mail is handig voor langere vragen."],
  ["zodat we meteen weten hoeveel tijd we moeten reserveren.", "zodat Elvira meteen weet hoeveel tijd ze moet reserveren."],
  ["we bevestigen de beschikbaarheid in het gesprek.", "Elvira bevestigt de beschikbaarheid in het gesprek."],
  ["De exacte locatiegegevens bevestigen we bij de afspraak.", "De exacte locatiegegevens ontvang je bij de afspraak."],
  ["We zien het probleem", "Je start bij het probleem"],
  ["We beginnen met wat je echt ziet en voelt aan je huid.", "Je begint met wat je echt ziet en voelt aan je huid."],
  ["We leggen de richting uit", "Je krijgt duidelijke uitleg"],
  ["we leggen uit wat de huid mogelijk nodig heeft.", "je krijgt een rustige uitleg over wat de huid mogelijk nodig heeft."],
  ["We kiezen het ritme", "Je kiest het ritme met Elvira"],
  ["Zo werken we", "Zo werkt de aanpak"],
  ["We helpen je de huid te begrijpen en de slimste volgende stap te kiezen.", "Je krijgt eerst inzicht in je huid en kiest daarna samen met Elvira de slimste volgende stap."],

  // EN — one-person / neutral voice
  ["In our small home-based studio, we first look at what your skin actually needs.", "At ElviGlow, every visit is one-to-one. In the small home-based studio in Deventer, Elvira personally looks at what your skin needs."],
  ["First we help understand skin needs, then we choose", "First you get clarity about what the skin needs; then Elvira helps you choose"],
  ["We look at what bothers the skin most:", "Elvira looks at what bothers you most about the skin:"],
  ["We explain the mechanism simply:", "You get a simple explanation of the mechanism:"],
  ["We match the treatment to the goal:", "Elvira matches the treatment to the goal:"],
  ["We decide whether one treatment is enough, or whether a series or regular care program makes more sense.", "Together with Elvira, you decide whether one treatment is enough or whether a series or regular care program makes more sense."],
  ["We match colour, shape and finish to the client’s style.", "Colour, shape and finish are matched to your style."],
  ["We match the effect to nail length, hand shape, work and expectations.", "The effect is matched to nail length, hand shape, work and your expectations."],
  ["We do not offer full-face waxing", "Full-face waxing is not offered"],
  ["How do we choose the waxing method?", "How is the waxing method chosen?"],
  ["Before cryolipolysis we always do a short qualification and discuss contraindications.", "Before cryolipolysis, a short qualification is always done and contraindications are discussed."],
  ["We do not perform the treatment on actively irritated skin or on fresh skin lesions.", "The treatment is not performed on actively irritated skin or fresh skin lesions."],
  ["We do not use strong suction and during one visit we work on one selected body area only.", "No strong suction is used, and one selected body area is treated per visit."],
  ["We do not perform aggressive treatments without assessing the skin and discussing contraindications.", "No intensive treatment is performed without first assessing the skin and discussing contraindications."],
  ["For very sensitive skin, active inflammation or fresh irritation, we choose a gentler ritual.", "For very sensitive skin, active inflammation or fresh irritation, a gentler ritual is chosen."],
  ["Message us on Instagram or by e-mail.", "Message Elvira on Instagram or by e-mail."],
  ["We will reply and help choose the right direction.", "Elvira will reply personally and help you choose the right direction."],
  ["so we immediately know how much time to reserve.", "so Elvira immediately knows how much time to reserve."],
  ["we will confirm availability in the conversation.", "Elvira will confirm availability in the conversation."],
  ["We see the concern", "Start with the concern"],
  ["We start with what you actually see and feel on your skin.", "Begin with what you actually see and feel on your skin."],
  ["We explain the direction", "Get a clear direction"],
  ["we explain what the skin may need.", "you get a clear explanation of what the skin may need."],
  ["We choose the rhythm", "Choose the rhythm with Elvira"],
  ["How we work", "How the approach works"],

  // PL — jednoosobowy / neutralny ton
  ["Pomagamy zrozumieć, czego potrzebuje skóra i jak dbać o nią regularnie.", "Elvira pomaga zrozumieć, czego potrzebuje skóra i jak dbać o nią regularnie."],
  ["Patrzymy, co najbardziej przeszkadza skórze:", "Elvira sprawdza, co najbardziej przeszkadza skórze:"],
  ["Tłumaczymy prosty mechanizm:", "Dostajesz proste wyjaśnienie:"],
  ["Dobieramy zabieg do celu:", "Elvira dobiera zabieg do celu:"],
  ["Ustalamy, czy wystarczy pojedynczy zabieg, czy lepsza będzie seria albo program regularnej pielęgnacji.", "Razem z Elvirą ustalasz, czy wystarczy pojedynczy zabieg, czy lepsza będzie seria albo program regularnej pielęgnacji."],
  ["Nie wykonujemy agresywnych zabiegów bez oceny skóry i rozmowy o przeciwwskazaniach.", "Intensywniejszy zabieg nie jest wykonywany bez wcześniejszej oceny skóry i rozmowy o przeciwwskazaniach."],
  ["Przy skórze bardzo wrażliwej, aktywnych stanach zapalnych lub świeżych podrażnieniach dobieramy łagodniejszy rytuał.", "Przy skórze bardzo wrażliwej, aktywnych stanach zapalnych lub świeżych podrażnieniach wybierany jest łagodniejszy rytuał."],
  ["Napisz do nas", "Napisz do Elviry"],
  ["dzięki temu od razu wiemy, ile czasu zarezerwować.", "dzięki temu Elvira od razu wie, ile czasu zarezerwować."],
  ["dostępność potwierdzimy w wiadomości.", "Elvira potwierdzi dostępność w wiadomości."],
  ["Rezerwacje ustalamy przez WhatsApp lub Instagram. E-mail zostawiamy do dłuższych pytań.", "Rezerwację najłatwiej ustalić bezpośrednio z Elvirą przez WhatsApp lub Instagram. E-mail sprawdzi się przy dłuższych pytaniach."],
];

let changedFiles = 0;
let replacementsMade = 0;
for (const file of walk(dist)) {
  let text = fs.readFileSync(file, "utf8");
  const before = text;
  for (const [from, to] of replacements) {
    if (!text.includes(from)) continue;
    const count = text.split(from).length - 1;
    text = text.split(from).join(to);
    replacementsMade += count;
  }
  if (text !== before) {
    fs.writeFileSync(file, text);
    changedFiles += 1;
  }
}

const reviewDir = path.join(dist, "opinie");
fs.mkdirSync(reviewDir, { recursive: true });
const reviewHtml = `<!doctype html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex,follow" />
  <title>Review ElviGlow</title>
  <style>
    :root{--bg:#fff8f5;--ink:#4b2925;--muted:#8f665d;--line:#ecd8d2;--accent:#b75f50;--soft:#f8ece8;--white:#fff}
    *{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;background:linear-gradient(180deg,#fffaf7,#fff4ef);color:var(--ink)}
    .wrap{width:min(980px,calc(100% - 32px));margin:0 auto;padding:28px 0 64px}.brand{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:36px}.brand a{color:inherit;text-decoration:none;font-weight:800;font-size:22px}.langs{display:flex;gap:8px}.langs button{border:1px solid var(--line);background:var(--white);border-radius:999px;padding:10px 12px;font-weight:700;color:var(--muted)}.langs button.active{background:var(--accent);color:white;border-color:var(--accent)}
    .hero{text-align:center;max-width:760px;margin:0 auto 30px}.eyebrow{font-size:12px;letter-spacing:.16em;font-weight:800;color:var(--accent);text-transform:uppercase}.hero h1{font-family:Georgia,serif;font-size:clamp(42px,7vw,72px);line-height:.98;margin:12px 0 18px}.hero p{font-size:18px;line-height:1.7;color:var(--muted)}
    .grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:22px}.card{background:rgba(255,255,255,.9);border:1px solid var(--line);border-radius:28px;padding:28px;box-shadow:0 18px 50px rgba(91,42,34,.08)}.card h2{font-family:Georgia,serif;font-size:32px;margin:8px 0 10px}.card p{color:var(--muted);line-height:1.65}.mark{display:inline-grid;place-items:center;width:42px;height:42px;border-radius:50%;background:var(--soft);color:var(--accent);font-size:22px}
    .btn{display:inline-flex;align-items:center;justify-content:center;text-align:center;border-radius:999px;padding:14px 20px;text-decoration:none;font-weight:800;border:1px solid var(--accent);cursor:pointer}.btn.primary{background:var(--accent);color:white}.btn.secondary{background:white;color:var(--accent)}
    form{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:22px}label{display:grid;gap:7px;font-weight:700}input,select,textarea{width:100%;border:1px solid var(--line);background:#fff;border-radius:16px;padding:13px 14px;font:inherit;color:var(--ink);outline:none}textarea{resize:vertical}.full{grid-column:1/-1}.check{grid-template-columns:auto 1fr;align-items:start;font-weight:500;line-height:1.5}.check input{width:19px;height:19px;margin-top:2px}.note{font-size:13px;color:var(--muted);line-height:1.5}.actions{display:flex;gap:10px;flex-wrap:wrap}.disabled{pointer-events:none;opacity:.45}.back{margin-top:28px;text-align:center}.back a{color:var(--accent);font-weight:700}
    @media(max-width:720px){.wrap{width:min(100% - 20px,980px);padding-top:18px}.grid{grid-template-columns:1fr}.card{padding:22px;border-radius:24px}.hero h1{font-size:46px}.hero p{font-size:16px}form{grid-template-columns:1fr}.full{grid-column:auto}.actions{flex-direction:column}.actions .btn{width:100%}.brand{margin-bottom:24px}}
  </style>
</head>
<body>
  <main class="wrap">
    <header class="brand"><a href="/">ElviGlow</a><div class="langs"><button data-lang="pl">PL</button><button data-lang="en">EN</button><button data-lang="nl">NL</button></div></header>
    <section class="hero"><div class="eyebrow" id="eyebrow"></div><h1 id="title"></h1><p id="lead"></p></section>
    <section class="grid">
      <article class="card"><span class="mark">★</span><h2 id="googleTitle"></h2><p id="googleText"></p><a class="btn primary" id="googleButton" href="https://g.page/r/CTlVO8SKXGw-EBM/review" target="_blank" rel="noreferrer"></a></article>
      <article class="card"><span class="mark">♡</span><h2 id="directTitle"></h2><p id="directText"></p>
        <form id="reviewForm">
          <label><span id="nameLabel"></span><input id="name" autocomplete="name" /></label>
          <label><span id="serviceLabel"></span><input id="service" /></label>
          <label><span id="ratingLabel"></span><select id="rating"><option value=""></option><option value="5">★★★★★ — 5/5</option><option value="4">★★★★☆ — 4/5</option><option value="3">★★★☆☆ — 3/5</option><option value="2">★★☆☆☆ — 2/5</option><option value="1">★☆☆☆☆ — 1/5</option></select></label>
          <label class="full"><span id="reviewLabel"></span><textarea id="review" rows="5"></textarea></label>
          <label class="check full"><input type="checkbox" id="consent" /><span id="consentLabel"></span></label>
          <div class="note full" id="privacy"></div>
          <div class="actions full"><a class="btn primary disabled" id="waButton" target="_blank" rel="noreferrer"></a><a class="btn secondary disabled" id="mailButton"></a></div>
        </form>
      </article>
    </section>
    <div class="back"><a href="/kontakt" id="backLink"></a></div>
  </main>
<script>
const copy={
pl:{eyebrow:"OPINIA O ELVIGLOW",title:"Jak chcesz zostawić opinię?",lead:"Jeśli masz konto Google, opinia w Google najbardziej pomaga lokalnej widoczności ElviGlow. Jeśli nie korzystasz z Google, możesz wysłać opinię bezpośrednio do Elviry.",googleTitle:"Opinia w Google",googleText:"Najlepsza opcja, jeśli masz konto Google. Otworzy się bezpośredni formularz opinii ElviGlow.",googleButton:"Zostaw opinię w Google",directTitle:"Opinia bez konta Google",directText:"Wypełnij kilka pól. Opinia trafi bezpośrednio do Elviry przez WhatsApp lub e-mail i nie zostanie opublikowana automatycznie.",name:"Imię",service:"Jaki zabieg lub usługa?",rating:"Ocena",select:"Wybierz ocenę",review:"Twoja opinia",consent:"Zgadzam się, aby ElviGlow mogło opublikować tę opinię na stronie lub w social mediach z podanym imieniem.",privacy:"Bez zgody na publikację opinia może zostać wykorzystana wyłącznie jako prywatny feedback.",wa:"Wyślij opinię przez WhatsApp",mail:"Wyślij opinię e-mailem",back:"← Wróć do kontaktu",header:"Opinia bezpośrednia ElviGlow"},
en:{eyebrow:"ELVIGLOW REVIEW",title:"How would you like to leave your review?",lead:"If you have a Google account, a Google review helps ElviGlow most with local visibility. If you do not use Google, you can send your review directly to Elvira.",googleTitle:"Google review",googleText:"The best option if you have a Google account. It opens the ElviGlow Google review form directly.",googleButton:"Leave a Google review",directTitle:"Review without a Google account",directText:"Complete a few fields. Your review goes directly to Elvira via WhatsApp or e-mail and is not published automatically.",name:"Name",service:"Treatment or service",rating:"Rating",select:"Choose a rating",review:"Your review",consent:"I agree that ElviGlow may publish this review on the website or social media using the name entered above.",privacy:"Without publication consent, the review can only be used as private feedback.",wa:"Send review via WhatsApp",mail:"Send review by e-mail",back:"← Back to contact",header:"Direct ElviGlow review"},
nl:{eyebrow:"REVIEW OVER ELVIGLOW",title:"Hoe wil je je review achterlaten?",lead:"Heb je een Google-account, dan helpt een Google-review ElviGlow het meest met lokale vindbaarheid. Gebruik je geen Google, dan kun je je review rechtstreeks naar Elvira sturen.",googleTitle:"Google-review",googleText:"De beste optie als je een Google-account hebt. Je opent direct het reviewformulier van ElviGlow op Google.",googleButton:"Schrijf een Google-review",directTitle:"Review zonder Google-account",directText:"Vul een paar velden in. Je review gaat rechtstreeks naar Elvira via WhatsApp of e-mail en wordt niet automatisch gepubliceerd.",name:"Naam",service:"Behandeling of dienst",rating:"Beoordeling",select:"Kies een beoordeling",review:"Jouw review",consent:"Ik geef toestemming dat ElviGlow deze review met mijn ingevulde naam op de website of social media mag publiceren.",privacy:"Zonder toestemming voor publicatie wordt de review alleen als privéfeedback gebruikt.",wa:"Stuur review via WhatsApp",mail:"Stuur review per e-mail",back:"← Terug naar contact",header:"Directe review voor ElviGlow"}
};
let lang=localStorage.getItem("elviglow-lang")||((navigator.language||"").toLowerCase().startsWith("pl")?"pl":(navigator.language||"").toLowerCase().startsWith("nl")?"nl":"en");if(!copy[lang])lang="nl";
const ids=["eyebrow","title","lead","googleTitle","googleText","googleButton","directTitle","directText","privacy"];
function render(){const c=copy[lang];document.documentElement.lang=lang;ids.forEach(id=>document.getElementById(id).textContent=c[id]);document.getElementById("nameLabel").textContent=c.name;document.getElementById("serviceLabel").textContent=c.service;document.getElementById("ratingLabel").textContent=c.rating;document.querySelector("#rating option").textContent=c.select;document.getElementById("reviewLabel").textContent=c.review;document.getElementById("consentLabel").textContent=c.consent;document.getElementById("waButton").textContent=c.wa;document.getElementById("mailButton").textContent=c.mail;document.getElementById("backLink").textContent=c.back;document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));localStorage.setItem("elviglow-lang",lang);updateLinks()}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;render()}));
const fields=["name","service","rating","review","consent"].map(id=>document.getElementById(id));fields.forEach(el=>el.addEventListener("input",updateLinks));fields.forEach(el=>el.addEventListener("change",updateLinks));
function updateLinks(){const c=copy[lang],name=document.getElementById("name").value.trim(),service=document.getElementById("service").value.trim(),rating=document.getElementById("rating").value,review=document.getElementById("review").value.trim(),consent=document.getElementById("consent").checked,can=Boolean(name&&rating&&review);const msg=[c.header,c.name+": "+(name||"—"),c.service+": "+(service||"—"),c.rating+": "+(rating||"—")+"/5",c.review+": "+(review||"—"),c.consent+": "+(consent?"TAK / YES / JA":"NIE / NO / NEE")].join("\n");const wa=document.getElementById("waButton"),mail=document.getElementById("mailButton");wa.classList.toggle("disabled",!can);mail.classList.toggle("disabled",!can);wa.href=can?"https://wa.me/31682224999?text="+encodeURIComponent(msg):"#";mail.href=can?"mailto:elviglow47@gmail.com?subject="+encodeURIComponent(c.header)+"&body="+encodeURIComponent(msg):"#"}
render();
</script>
</body></html>`;
fs.writeFileSync(path.join(reviewDir, "index.html"), reviewHtml);

const sitemapFile = path.join(dist, "sitemap.xml");
if (fs.existsSync(sitemapFile)) {
  let sitemap = fs.readFileSync(sitemapFile, "utf8");
  if (!sitemap.includes("https://elviglow.com/opinie")) {
    sitemap = sitemap.replace("</urlset>", "  <url><loc>https://elviglow.com/opinie</loc></url>\n</urlset>");
    fs.writeFileSync(sitemapFile, sitemap);
  }
}

// Zamiast prowadzić istniejący przycisk opinii prosto do Google,
// kierujemy go do bramki /opinie z wyborem Google albo opinii bez konta Google.
for (const file of walk(dist)) {
  let text = fs.readFileSync(file, "utf8");
  const before = text;
  text = text.split("https://g.page/r/CTlVO8SKXGw-EBM/review").join("/opinie");
  text = text.split("Dodaj opinię w Google").join("Zostaw opinię");
  text = text.split("Leave a Google review").join("Leave a review");
  text = text.split("Schrijf een Google-review").join("Laat een review achter");
  if (text !== before) fs.writeFileSync(file, text);
}

console.log(`Solo studio/reviews GREEN: ${replacementsMade} copy replacements across ${changedFiles} generated files; /opinie created.`);
