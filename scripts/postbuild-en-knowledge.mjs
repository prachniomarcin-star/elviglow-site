import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = "https://elviglow.com";

const articles = [
  {
    slug: "brazilian-wax-preparation",
    nl: "/kennis/brazilian-wax-voorbereiden",
    pl: "/pl/wiedza/brazilian-wax-jak-sie-przygotowac",
    eyebrow: "Brazilian wax • Deventer",
    title: "Brazilian wax: what should you know before your appointment?",
    meta: "Brazilian wax in Deventer: learn how to prepare, how it differs from a bikini-line wax and how to keep the skin calm afterwards.",
    lead: "A Brazilian wax is more extensive than a bikini-line wax. Clear preparation helps you know what to expect, how to arrive for the appointment and how to keep the skin comfortable afterwards.",
    pricing: "/cennik#waxing",
    pricingLabel: "View waxing prices",
    trust: ["Intimate waxing", "By appointment", "Deventer"],
    sections: [
      ["Before the appointment", ["Let the hair grow long enough for the wax to grip it effectively.", "Avoid strong exfoliation, harsh active products and unnecessary friction on the area shortly before the appointment.", "Arrive clean and comfortable. The treatment is handled professionally and discreetly."]],
      ["Bikini line or Brazilian?", ["A bikini-line wax focuses mainly on hair visible outside or along the edge of underwear or swimwear.", "A Brazilian wax is more extensive. Discuss the exact area you want treated so the appointment matches your expectations."]],
      ["After waxing", ["The skin can look red or feel warm immediately after waxing.", "Avoid strong heat, intense exercise, swimming and heavy friction while the skin still feels sensitive.", "Resume exfoliation only once the skin feels fully calm again."]],
      ["When is it better to postpone?", ["Postpone waxing when there are open wounds, active irritation, inflamed spots or a clear skin reaction in the treatment area.", "Tell the therapist beforehand if you use medication or skin products that can make the skin more fragile or sensitive."]]
    ],
    faq: [["How long should the hair be?", "Long enough for the wax to grip it. If you have just shaved, allow enough regrowth before booking."], ["Should I exfoliate beforehand?", "A gentle routine is fine, but avoid intensive exfoliation immediately before the appointment."], ["Can I exercise afterwards?", "It is better to wait until redness and sensitivity have settled."], ["Where can I see the current Brazilian wax price?", "Use the waxing section of the ElviGlow price list for the current price."]],
    related: [["/en/knowledge/first-time-waxing", "First time waxing: how to prepare"], ["/en/knowledge/bikini-line-or-brazilian-wax", "Bikini line or Brazilian wax?"], ["/en/knowledge/how-long-does-waxing-last", "How long does waxing stay smooth?"]]
  },
  {
    slug: "bikini-line-or-brazilian-wax",
    nl: "/kennis/bikinilijn-of-brazilian-wax",
    pl: "/pl/wiedza/bikini-czy-brazilian-wax",
    eyebrow: "Waxing • choice",
    title: "Bikini-line or Brazilian wax: what is the difference?",
    meta: "Bikini-line or Brazilian wax in Deventer? Compare the treatment area, preparation and which option may better match what you want.",
    lead: "The main difference is the size of the area treated. A bikini-line wax is more limited; a Brazilian wax is more extensive and should be discussed clearly before the appointment.",
    pricing: "/cennik#waxing",
    pricingLabel: "View waxing prices",
    trust: ["Clear treatment area", "By appointment", "Deventer"],
    sections: [
      ["What is a bikini-line wax?", ["It removes hair mainly along the visible edge of underwear or swimwear.", "It is a good option when you want a tidy outline without a more extensive intimate wax."]],
      ["What is a Brazilian wax?", ["A Brazilian wax covers a larger intimate area than the bikini line.", "The exact amount of hair removed can be discussed before treatment so you know exactly what is included."]],
      ["How do you choose?", ["Choose based on the area you actually want treated, not on the treatment name alone.", "If you are unsure, ask before the appointment. Clear expectations make the treatment simpler and more comfortable."]],
      ["Preparation is similar", ["For both options the hair needs enough length for the wax to grip.", "Avoid treating irritated, damaged or actively inflamed skin."]]
    ],
    faq: [["Is Brazilian always completely hair-free?", "Not necessarily. Discuss the exact result you want before the treatment."], ["Is a bikini-line wax quicker?", "It usually covers a smaller area, but appointment time still depends on the individual treatment."], ["Can I choose during the appointment?", "It is better to mention your preference when booking so enough time can be reserved."]],
    related: [["/en/knowledge/brazilian-wax-preparation", "How to prepare for a Brazilian wax"], ["/en/knowledge/first-time-waxing", "First time waxing"], ["/en/knowledge/how-long-does-waxing-last", "How long does waxing last?"]]
  },
  {
    slug: "first-time-waxing",
    nl: "/kennis/waxen-eerste-keer",
    pl: "/pl/wiedza/depilacja-woskiem-pierwszy-raz",
    eyebrow: "Waxing • first visit",
    title: "First time waxing: how to prepare your skin",
    meta: "First waxing appointment in Deventer? Learn how to prepare the skin, what to avoid beforehand and what to expect afterwards.",
    lead: "Your first waxing appointment is easier when the skin is calm and the hair has enough length. You do not need a complicated routine — just a few sensible steps.",
    pricing: "/cennik#waxing",
    pricingLabel: "View waxing prices",
    trust: ["Simple preparation", "Clear expectations", "Deventer"],
    sections: [
      ["Let the hair grow", ["Wax needs enough hair length to grip effectively.", "If you have shaved very recently, it may be better to wait before booking."]],
      ["Keep the skin calm", ["Avoid strong exfoliation, aggressive active products and sun irritation shortly before waxing.", "Do not wax over broken, inflamed or clearly irritated skin."]],
      ["What does it feel like?", ["Waxing removes hair from the root, so you can feel a short pulling sensation.", "Sensitivity varies by person and treatment area."]],
      ["After the appointment", ["Give the skin time to settle before intense exercise, heat, swimming or strong friction.", "Do not start scrubbing immediately if the area is still red or sensitive."]]
    ],
    faq: [["Do I need to trim the hair?", "Usually not unless it is unusually long. If in doubt, ask before the appointment."], ["Can I use body lotion beforehand?", "Arrive with clean skin and avoid heavy oily products directly before waxing."], ["Is redness normal?", "Temporary redness can occur after waxing and usually settles as the skin calms."]],
    related: [["/en/knowledge/brazilian-wax-preparation", "Brazilian wax preparation"], ["/en/knowledge/bikini-line-or-brazilian-wax", "Bikini line or Brazilian?"], ["/en/knowledge/how-long-does-waxing-last", "How long does waxing stay smooth?"]]
  },
  {
    slug: "how-long-does-waxing-last",
    nl: "/kennis/hoe-lang-glad-na-waxen",
    pl: "/pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem",
    eyebrow: "Waxing • results",
    title: "How long does skin stay smooth after waxing?",
    meta: "How long does waxing last? Learn why the skin can feel smooth longer than after shaving and why regrowth varies from person to person.",
    lead: "Waxing usually gives a longer feeling of smoothness than shaving because the hair is removed from the root instead of being cut at the skin surface. Regrowth timing still varies.",
    pricing: "/cennik#waxing",
    pricingLabel: "View waxing prices",
    trust: ["Longer than shaving", "Different growth cycles", "Individual result"],
    sections: [
      ["Why does waxing last longer than shaving?", ["Shaving cuts the hair at skin level, while waxing removes it from the root.", "That is why it generally takes longer before the hair becomes visible again."]],
      ["Why do hairs return at different times?", ["Not every hair is in the same stage of its growth cycle.", "Some hairs can therefore become visible earlier than others even after a thorough wax."]],
      ["Does regular waxing change the timing?", ["Repeated appointments can create a more predictable routine for some clients, but individual biology still matters.", "There is no single number of days or weeks that applies to everyone."]],
      ["How do you maintain the skin between visits?", ["Keep the skin comfortable and avoid aggressive exfoliation when it is irritated.", "Once calm, a gentle routine can help reduce roughness and support comfortable regrowth."]]
    ],
    faq: [["Is waxing permanent?", "No. Waxing removes hair from the root but does not permanently stop hair growth."], ["Why do I see some hairs sooner?", "Hair grows in different cycles, so not every hair returns at the same time."], ["When should I book again?", "Book when enough hair has regrown for the wax to grip effectively."]],
    related: [["/en/knowledge/first-time-waxing", "First time waxing"], ["/en/knowledge/brazilian-wax-preparation", "Brazilian wax preparation"], ["/en/knowledge/bikini-line-or-brazilian-wax", "Bikini line or Brazilian wax?"]]
  },
  {
    slug: "large-pores-what-helps",
    nl: "/kennis/grove-porien-wat-helpt",
    pl: "/pl/wiedza/rozszerzone-pory-co-pomaga",
    eyebrow: "Skin • visible pores",
    title: "Visible pores: what can actually help?",
    meta: "Visible or enlarged-looking pores? Learn what can influence their appearance, what skincare can realistically do and when a professional facial may help.",
    lead: "Pores are a normal part of skin structure and cannot simply be erased. Their visibility can however change with oil, congestion, dehydration, texture and the way light reflects from the skin.",
    pricing: "/cennik#face",
    pricingLabel: "View facial treatment prices",
    trust: ["Realistic expectations", "Skin texture", "Deventer"],
    sections: [
      ["Why can pores look larger?", ["Oil, congestion and uneven texture can make pores look more noticeable.", "Dehydrated or rough skin can also exaggerate the contrast around the pore opening."]],
      ["What can home care do?", ["Gentle cleansing, suitable exfoliation and consistent hydration can improve the overall look of texture.", "Over-cleansing or harsh scrubbing can irritate the skin and make texture look worse."]],
      ["When can a treatment help?", ["If congestion or dull surface texture is the main issue, a cleansing or exfoliating facial may be useful.", "For more persistent texture concerns, treatment choice should depend on the current skin condition rather than pore size alone."]],
      ["What should you not expect?", ["No cosmetic treatment can permanently remove pores because pores are part of normal skin anatomy.", "A realistic goal is to improve how smooth, clear and balanced the skin looks."]]
    ],
    faq: [["Can pores be permanently closed?", "No. Pores are normal skin structures and cannot be permanently closed."], ["Does scrubbing make pores smaller?", "Aggressive scrubbing is not a reliable solution and can irritate the skin."], ["Which treatment is best?", "That depends on whether congestion, dehydration, oiliness or texture is the main concern."]],
    related: [["/en/knowledge/dry-skin-despite-moisturiser", "Dry skin despite moisturiser"], ["/en/knowledge/oxybrasion-or-hydrogen-cleansing", "Oxybrasion or hydrogen cleansing?"], ["/en/knowledge/what-not-to-do-after-microneedling", "After microneedling: what to avoid"]]
  },
  {
    slug: "dry-skin-despite-moisturiser",
    nl: "/kennis/droge-huid-ondanks-creme",
    pl: "/pl/wiedza/sucha-skora-mimo-kremu",
    eyebrow: "Skin • dryness",
    title: "Dry skin despite moisturiser: why can it still feel tight?",
    meta: "Skin still dry despite moisturiser? Learn how cleansing, barrier condition, environment and product choice can influence tightness and comfort.",
    lead: "Using more cream is not always enough. Tight or flaky skin can also be influenced by cleansing habits, barrier condition, climate, irritation and whether the products actually match the skin.",
    pricing: "/cennik#face",
    pricingLabel: "View facial treatment prices",
    trust: ["Barrier first", "Gentle care", "Deventer"],
    sections: [
      ["Why can moisturiser feel insufficient?", ["If cleansing is too aggressive or the skin barrier is irritated, water can be lost more easily and the skin may continue to feel tight.", "A cream can support comfort, but it cannot compensate for every source of irritation."]],
      ["Look at the whole routine", ["Frequent hot water, strong exfoliation and too many active products can all increase sensitivity and dryness.", "A simpler routine can sometimes be more useful than adding another product."]],
      ["Hydration and barrier support are different", ["Humectant ingredients help attract water, while emollient and occlusive ingredients help reduce moisture loss.", "Many routines need a sensible balance rather than one type of product only."]],
      ["When can a facial be useful?", ["A gentle facial can support comfort and surface hydration when the skin is calm enough for treatment.", "If the skin is inflamed, painful or persistently cracked, medical assessment may be more appropriate than a cosmetic treatment."]]
    ],
    faq: [["Should I just use a heavier cream?", "Not always. First check whether cleansing, exfoliation or irritation is contributing to the problem."], ["Can exfoliation help flaky skin?", "Sometimes, but aggressive exfoliation on irritated dry skin can make discomfort worse."], ["When should I seek medical advice?", "Persistent inflammation, pain, cracking or a suspected skin condition should be assessed by a qualified medical professional."]],
    related: [["/en/knowledge/large-pores-what-helps", "Visible pores: what helps?"], ["/en/knowledge/oxybrasion-or-hydrogen-cleansing", "Oxybrasion or hydrogen cleansing?"], ["/en/knowledge/what-not-to-do-after-microneedling", "Microneedling aftercare"]]
  },
  {
    slug: "oxybrasion-or-hydrogen-cleansing",
    nl: "/kennis/oxybrasie-of-waterstofreiniging",
    pl: "/pl/wiedza/oxybrazja-czy-oczyszczanie-wodorowe",
    eyebrow: "Facial treatments • comparison",
    title: "Oxybrasion or hydrogen cleansing: which direction fits your skin?",
    meta: "Oxybrasion or hydrogen cleansing in Deventer? Compare a gentle surface-refresh approach with a more cleansing-focused facial route.",
    lead: "These treatments do not have exactly the same goal. Oxybrasion is positioned as a gentle surface-refresh treatment, while hydrogen cleansing is chosen when cleansing and congestion are more central concerns.",
    pricing: "/cennik#face",
    pricingLabel: "View facial treatment prices",
    trust: ["Different goals", "Skin-led choice", "Deventer"],
    sections: [
      ["When is oxybrasion the calmer option?", ["Oxybrasion is aimed at gentle surface exfoliation and a fresher-looking complexion.", "It can make sense when dullness and rough surface texture are more important than congestion."]],
      ["When is cleansing the main goal?", ["A hydrogen-cleansing treatment is more relevant when visible congestion, impurities and a deeper-cleansing direction are the priority.", "The exact protocol should still depend on how the skin looks and reacts on the day of treatment."]],
      ["Do you always need the stronger option?", ["No. A more intensive treatment is not automatically better.", "The useful choice is the one that matches the current skin condition and the specific goal."]],
      ["What if the skin is irritated?", ["Active irritation, open lesions or a strong skin reaction may be a reason to postpone treatment.", "A calm skin check before treatment is more important than following a fixed routine."]]
    ],
    faq: [["Are oxybrasion and hydrogen cleansing the same treatment?", "No. They are used for different treatment goals."], ["Which is better for visible congestion?", "A cleansing-focused treatment may be more logical when congestion is the main concern."], ["Which is better for dullness?", "A gentle surface-refresh treatment such as oxybrasion may be enough when dullness is the main issue."]],
    related: [["/en/knowledge/large-pores-what-helps", "Visible pores: what helps?"], ["/en/knowledge/dry-skin-despite-moisturiser", "Dry skin despite moisturiser"], ["/en/knowledge/what-not-to-do-after-microneedling", "Microneedling aftercare"]]
  },
  {
    slug: "what-not-to-do-after-microneedling",
    nl: "/kennis/wat-niet-doen-na-microneedling",
    pl: "/pl/wiedza/czego-nie-robic-po-microneedlingu",
    eyebrow: "Microneedling • aftercare",
    title: "What should you avoid after microneedling?",
    meta: "Microneedling aftercare: learn what to avoid directly after treatment and how to keep the skin routine simple while it settles.",
    lead: "After microneedling the skin needs a calm recovery period. The priority is usually to avoid unnecessary irritation, heat, friction and aggressive active products while the skin is still reactive.",
    pricing: "/cennik#face",
    pricingLabel: "View microneedling prices",
    trust: ["Gentle aftercare", "Recovery first", "Deventer"],
    sections: [
      ["Do not overload the skin", ["Avoid introducing multiple new products immediately after treatment.", "Keep the routine simple and follow the aftercare instructions given for your specific treatment."]],
      ["Avoid unnecessary heat and friction", ["Intense exercise, sauna, hot environments and rubbing can increase temporary redness and discomfort.", "Give the skin time to settle before returning to a normal routine."]],
      ["Be careful with strong active products", ["Strong acids, retinoids and other potentially irritating actives are generally not the first choice immediately after microneedling.", "Restart active products only when the skin has recovered and according to professional advice."]],
      ["Sun protection matters", ["Freshly treated skin should not be deliberately exposed to strong sun.", "Use sensible sun protection and avoid tanning while the skin is recovering."]]
    ],
    faq: [["Can I exercise after microneedling?", "It is usually better to wait until heat, redness and sensitivity have settled."], ["Can I use acids or retinoids straight away?", "Avoid strong irritating actives immediately after treatment and follow your aftercare plan."], ["When can I return to my normal routine?", "That depends on how quickly your skin settles and on the products you normally use."]],
    related: [["/en/knowledge/dry-skin-despite-moisturiser", "Dry skin and barrier comfort"], ["/en/knowledge/large-pores-what-helps", "Visible pores: what helps?"], ["/en/knowledge/oxybrasion-or-hydrogen-cleansing", "Oxybrasion or hydrogen cleansing?"]]
  }
];

const escapeHtml = (value = "") => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function articleHtml(a) {
  const url = `${base}/en/knowledge/${a.slug}`;
  const sections = a.sections.map(([heading, paras], index) => `<section class="article-section" id="part-${index + 1}"><div class="article-copy"><h2>${escapeHtml(heading)}</h2>${paras.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</div></section>`).join("");
  const faq = a.faq.map(([q, answer]) => `<details><summary>${escapeHtml(q)}</summary><p>${escapeHtml(answer)}</p></details>`).join("");
  const related = a.related.map(([href, label]) => `<a href="${href}">${escapeHtml(label)}</a>`).join("");
  const nav = a.sections.map(([heading], index) => `<a href="#part-${index + 1}">${escapeHtml(heading)}</a>`).join("");
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BeautySalon", "@id": `${base}/#business`, name: "ElviGlow", url: `${base}/`, telephone: "+31682224999", address: { "@type": "PostalAddress", streetAddress: "Jan Wansinkstraat 59", postalCode: "7415 PB", addressLocality: "Deventer", addressCountry: "NL" }, areaServed: { "@type": "City", name: "Deventer" } },
      { "@type": "Article", "@id": `${url}#article`, headline: a.title, description: a.meta, datePublished: "2026-08-22", dateModified: "2026-08-22", inLanguage: "en", mainEntityOfPage: url, author: { "@type": "Organization", name: "ElviGlow" }, publisher: { "@id": `${base}/#business` }, isPartOf: { "@type": "WebSite", name: "ElviGlow", url: `${base}/` } },
      { "@type": "BreadcrumbList", itemListElement: [ { "@type": "ListItem", position: 1, name: "ElviGlow", item: `${base}/` }, { "@type": "ListItem", position: 2, name: "Knowledge", item: `${base}/wiedza` }, { "@type": "ListItem", position: 3, name: a.title, item: url } ] }
    ]
  });

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#fff8f3" />
  <meta name="robots" content="index,follow,max-image-preview:large" />
  <title>${escapeHtml(a.title)} | ElviGlow</title>
  <meta name="description" content="${escapeHtml(a.meta)}" />
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en" href="${url}" />
  <link rel="alternate" hreflang="nl" href="${base}${a.nl}" />
  <link rel="alternate" hreflang="pl" href="${base}${a.pl}" />
  <link rel="alternate" hreflang="x-default" href="${base}${a.nl}" />
  <link rel="icon" type="image/png" href="/elviglow-favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/local-seo.css" />
  <link rel="stylesheet" href="/knowledge-seo.css" />
  <link rel="stylesheet" href="/knowledge-shell-v2.css" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="ElviGlow" />
  <meta property="og:title" content="${escapeHtml(a.title)}" />
  <meta property="og:description" content="${escapeHtml(a.meta)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${base}/elviglow-logo.png" />
  <script type="application/ld+json">${schema}</script>
</head>
<body class="knowledge-shell-v2">
  <header class="topbar">
    <div class="brand-row">
      <a class="brand" href="/" aria-label="ElviGlow home"><img src="/elviglow-logo.webp" alt="ElviGlow" /><span><strong>ElviGlow</strong><small>Skin • Beauty • Care</small></span></a>
      <div class="top-actions">
        <div class="language-menu" id="seo-language-menu"><button class="language-trigger" type="button" aria-expanded="false">EN <span aria-hidden="true">⌄</span></button><div class="language-options" role="menu"><a href="${a.pl}">PL</a><a class="active" href="/en/knowledge/${a.slug}">EN</a><a href="${a.nl}">NL</a></div></div>
        <a class="nav-cta" href="/kontakt">Book appointment</a>
      </div>
    </div>
    <nav class="nav-tabs desktop-nav" aria-label="Main navigation"><a href="/">Home</a><a href="/zabiegi">Treatments</a><a href="/paznokcie">Nails</a><a href="/depilacja">Waxing</a><a href="/cialo">Body</a><a class="active" href="/wiedza">Knowledge</a><a href="/akademia-skory">Skin Academy</a><a href="/cennik">Prices</a><a href="/kontakt">Contact</a></nav>
    <nav class="nav-tabs mobile-nav" aria-label="Mobile navigation"><a href="/">Home</a><a href="/zabiegi">Treatments</a><a href="/depilacja">Waxing</a><a class="active" href="/wiedza">Knowledge</a></nav>
  </header>
  <nav class="article-context-nav" aria-label="Article navigation"><a href="/wiedza">← Knowledge</a><a href="${a.pricing}">Prices</a><span class="article-context-current">ElviGlow guide</span></nav>
  <main class="knowledge-article">
    <section class="article-hero">
      <p class="eyebrow">${escapeHtml(a.eyebrow)}</p>
      <h1>${escapeHtml(a.title)}</h1>
      <p class="lead">${escapeHtml(a.lead)}</p>
      <div class="actions"><a class="btn primary" href="https://wa.me/31682224999" target="_blank" rel="noreferrer">Ask about an appointment on WhatsApp</a><a class="btn secondary" href="${a.pricing}">${escapeHtml(a.pricingLabel)}</a></div>
      <div class="trust">${a.trust.map((item) => `<span>✦ ${escapeHtml(item)}</span>`).join("")}</div>
      <div class="article-intro-card"><strong>In this guide:</strong><div class="article-nav">${nav}</div></div>
    </section>
    ${sections}
    <section class="article-section faq-section"><div class="section-head"><p class="eyebrow">FAQ</p><h2>Frequently asked questions</h2></div><div class="faq">${faq}</div></section>
    <section class="cta"><div><p class="eyebrow">ElviGlow • Deventer</p><h2>Want to choose the next step?</h2><p>Use the price list for current prices or message ElviGlow if you are unsure which treatment fits your goal.</p><h3 class="article-related-title">Read next</h3><div class="related">${related}</div></div><div class="actions"><a class="btn primary" href="https://wa.me/31682224999" target="_blank" rel="noreferrer">WhatsApp</a><a class="btn secondary" href="${a.pricing}">${escapeHtml(a.pricingLabel)}</a></div></section>
  </main>
  <footer class="footer footer-premium"><div class="footer-brand"><img src="/elviglow-logo.webp" alt="ElviGlow" /><div><strong>ElviGlow</strong><p>Skin • Beauty • Care</p><small>Deventer • Skin • Beauty • Care</small></div></div><div class="footer-links"><a href="/zabiegi">Treatments</a><a href="/wiedza">Knowledge</a><a href="/cennik">Prices</a><a href="/kontakt">Contact</a></div></footer>
  <div class="mobile-booking-bar" aria-label="Quick actions"><a class="mobile-booking-secondary" href="/wiedza">Knowledge</a><a class="mobile-booking-primary" href="/kontakt">Book</a></div>
  <script>(()=>{const m=document.getElementById('seo-language-menu'),b=m?.querySelector('.language-trigger');b?.addEventListener('click',()=>{const o=!m.classList.contains('open');m.classList.toggle('open',o);b.setAttribute('aria-expanded',String(o));});})();</script>
</body>
</html>`;
}

const counterpartMap = new Map();
for (const article of articles) {
  const dir = path.join(dist, "en", "knowledge", article.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), articleHtml(article));
  counterpartMap.set(article.nl, `/en/knowledge/${article.slug}`);
  counterpartMap.set(article.pl, `/en/knowledge/${article.slug}`);
}

// Upgrade existing NL/PL article language menus so EN opens the matching article instead of the generic Knowledge page.
for (const article of articles) {
  for (const sourcePath of [article.nl, article.pl]) {
    const relative = sourcePath.replace(/^\//, "");
    const file = path.join(dist, relative, "index.html");
    if (!fs.existsSync(file)) continue;
    const original = fs.readFileSync(file, "utf8");
    const enHref = `/en/knowledge/${article.slug}`;
    let html = original
      .replace(/<a href="\/wiedza" data-main-lang="en">EN<\/a>/g, `<a href="${enHref}">EN</a>`)
      .replace(/<a href="\/wiedza">EN<\/a>/g, `<a href="${enHref}">EN</a>`);
    if (html !== original) fs.writeFileSync(file, html);
  }
}

console.log(`English knowledge postbuild: generated ${articles.length} articles and linked language counterparts.`);
