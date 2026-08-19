import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import OfferCard from "./components/OfferCard";
import CtaStrip from "./components/CtaStrip";
import ElviSkinMiniMap from "./components/ElviSkinMiniMap";
import { translations } from "./data/i18n";
import "./index.css";

const allowedPaths = ["/", "/zabiegi", "/paznokcie", "/depilacja", "/cialo", "/wiedza", "/cennik", "/akademia-skory", "/abonamenty", "/kontakt"];

const BASE_URL = "https://elviglow.com";

const homeExperience = {
  pl: {
    eyebrow: "Pielęgnacja skóry • Deventer",
    title: "Twoja skóra wygląda na zmęczoną mimo pielęgnacji?",
    lead: "Suchość, rozszerzone pory, szary koloryt lub utrata jędrności? Najpierw sprawdzamy, czego potrzebuje Twoja skóra. Dopiero potem dobieramy zabieg i plan pielęgnacji.",
    primary: "Dobierz zabieg do skóry",
    secondary: "Zobacz zabiegi",
    trust: ["Deventer", "Indywidualny dobór", "Bez przypadkowych zabiegów"],
    visualKicker: "OD PROBLEMU DO PLANU",
    visualTitle: "Nie wybieraj zabiegu w ciemno.",
    visualText: "Wybierz to, co najbardziej przeszkadza Ci w skórze. Pokażemy Ci spokojny kierunek działania i dopiero wtedy dobierzemy zabieg.",
    visualProblems: ["suchość", "pory", "brak glow", "zmarszczki", "jędrność"],
    visualPrompt: "Kliknij problem, który najbardziej pasuje:",
    problemEyebrow: "Zacznij od problemu",
    problemTitle: "Co najbardziej przeszkadza Ci w skórze?",
    problemLead: "Nie wybieraj zabiegu po nazwie. Wybierz objaw, który widzisz — a Akademia skóry pokaże Ci spokojny kierunek działania.",
    problems: [
      ["Suchość i napięcie", "Skóra szybko traci komfort, wygląda na cienką lub zmęczoną.", "Nawilżenie i bariera"],
      ["Pory i nierówna struktura", "Makijaż podkreśla strukturę, a skóra szybko traci świeżość.", "Oczyszczenie i wygładzenie"],
      ["Szary, zmęczony koloryt", "Pielęgnujesz skórę, ale nadal brakuje jej świeżości i światła.", "Glow i odżywienie"],
      ["Utrata jędrności", "Owal i napięcie skóry nie wyglądają już tak jak wcześniej.", "Lifting i regeneracja"],
      ["Pierwsze lub utrwalone zmarszczki", "Chcesz działać świadomie, zanim zmiany staną się mocniej widoczne.", "Anti-aging i plan serii"],
    ],
    pathEyebrow: "Jak pracujemy",
    pathTitle: "Problem → mechanizm → plan",
    pathLead: "ElviGlow nie ma być katalogiem przypadkowych usług. Ma pomóc Ci zrozumieć skórę i wybrać najmądrzejszy następny krok.",
    path: [
      ["01", "Widzimy objaw", "Najpierw to, co naprawdę widzisz i czujesz na skórze."],
      ["02", "Wyjaśniamy kierunek", "Bez obietnic cudów — tłumaczymy, czego skóra może potrzebować."],
      ["03", "Dobieramy rytm", "Pojedynczy zabieg, seria albo regularna pielęgnacja — zależnie od celu."],
    ],
    academyCta: "Przejdź do Akademii skóry",
  },
  en: {
    eyebrow: "Skin improvement • Deventer",
    title: "Does your skin still look tired despite daily care?",
    lead: "Dryness, visible pores, dull tone or loss of firmness? We first look at what your skin actually needs. Only then do we choose the treatment and care plan.",
    primary: "Match a treatment to my skin",
    secondary: "See treatments",
    trust: ["Deventer", "Individually matched", "No random treatments"],
    visualKicker: "FROM CONCERN TO PLAN",
    visualTitle: "Do not choose a treatment blindly.",
    visualText: "Choose what bothers you most about your skin. We show you a clear direction first and choose the treatment afterwards.",
    visualProblems: ["dryness", "pores", "dullness", "lines", "firmness"],
    visualPrompt: "Choose the concern that fits best:",
    problemEyebrow: "Start with the concern",
    problemTitle: "What bothers you most about your skin?",
    problemLead: "Do not choose by treatment name. Choose the concern you see — the Skin Academy will show you a calm direction forward.",
    problems: [
      ["Dryness and tightness", "Skin quickly loses comfort and can look thin or tired.", "Hydration and barrier"],
      ["Pores and uneven texture", "Make-up highlights texture and the skin quickly loses freshness.", "Cleansing and smoothing"],
      ["Dull, tired tone", "You care for your skin, yet it still lacks freshness and light.", "Glow and nourishment"],
      ["Loss of firmness", "The facial contour and skin tension no longer look the way they used to.", "Lifting and regeneration"],
      ["First or established lines", "You want to act consciously before changes become more visible.", "Anti-aging and series plan"],
    ],
    pathEyebrow: "How we work",
    pathTitle: "Concern → mechanism → plan",
    pathLead: "ElviGlow should not feel like a random service catalogue. It should help you understand your skin and choose the smartest next step.",
    path: [
      ["01", "We see the concern", "We start with what you actually see and feel on your skin."],
      ["02", "We explain the direction", "No miracle promises — we explain what the skin may need."],
      ["03", "We choose the rhythm", "One treatment, a series or regular care depending on the goal."],
    ],
    academyCta: "Go to the Skin Academy",
  },
  nl: {
    eyebrow: "Huidverbetering • Deventer",
    title: "Ziet je huid er moe uit ondanks je dagelijkse verzorging?",
    lead: "Droogte, zichtbare poriën, een doffe teint of minder stevigheid? We kijken eerst naar wat je huid werkelijk nodig heeft. Pas daarna kiezen we de behandeling en het verzorgingsplan.",
    primary: "Vind een passende behandeling",
    secondary: "Bekijk behandelingen",
    trust: ["Deventer", "Persoonlijk afgestemd", "Geen willekeurige behandeling"],
    visualKicker: "VAN HUIDVRAAG NAAR PLAN",
    visualTitle: "Kies je behandeling niet blind.",
    visualText: "Kies wat je het meest aan je huid stoort. Eerst krijg je een duidelijke richting; daarna kiezen we pas de behandeling.",
    visualProblems: ["droogte", "poriën", "dofheid", "lijntjes", "stevigheid"],
    visualPrompt: "Kies wat het beste bij je huid past:",
    problemEyebrow: "Begin bij het probleem",
    problemTitle: "Wat stoort je het meest aan je huid?",
    problemLead: "Kies niet op basis van een behandelnaam. Kies wat je ziet — de Huidacademie laat daarna een rustige richting zien.",
    problems: [
      ["Droogte en trekkerigheid", "De huid verliest snel comfort en kan dun of vermoeid ogen.", "Hydratatie en huidbarrière"],
      ["Poriën en ongelijke structuur", "Make-up benadrukt de structuur en de huid verliest snel frisheid.", "Reiniging en gladheid"],
      ["Doffe, vermoeide teint", "Je verzorgt je huid, maar toch ontbreekt frisheid en glow.", "Glow en voeding"],
      ["Minder stevigheid", "De gezichtscontour en spanning van de huid zijn veranderd.", "Lifting en regeneratie"],
      ["Eerste of zichtbare lijntjes", "Je wilt bewust handelen voordat veranderingen sterker zichtbaar worden.", "Anti-aging en behandelplan"],
    ],
    pathEyebrow: "Zo werken we",
    pathTitle: "Probleem → mechanisme → plan",
    pathLead: "ElviGlow is geen willekeurige lijst behandelingen. We helpen je de huid te begrijpen en de slimste volgende stap te kiezen.",
    path: [
      ["01", "We zien het probleem", "We beginnen met wat je echt ziet en voelt aan je huid."],
      ["02", "We leggen de richting uit", "Geen wonderbeloftes — we leggen uit wat de huid mogelijk nodig heeft."],
      ["03", "We kiezen het ritme", "Eén behandeling, een kuur of regelmatige verzorging — afhankelijk van je doel."],
    ],
    academyCta: "Ga naar de Huidacademie",
  },
};

const contactLocationCopy = {
  pl: { title: "Deventer", text: "Salon działa w Deventer. Dokładne szczegóły wizyty i lokalizacji potwierdzamy przy rezerwacji." },
  en: { title: "Deventer", text: "The salon operates in Deventer. Exact visit and location details are confirmed when booking." },
  nl: { title: "Deventer", text: "De salon is in Deventer. De exacte bezoek- en locatiegegevens bevestigen we bij de afspraak." },
};

const seoByPath = {
  "/": {
    title: "ElviGlow Deventer | Huidverbetering, microneedling & beauty",
    description: "ElviGlow in Deventer: huidverbetering, microneedling, oxybrasie, huidverzorging, nagels, Lycon waxing en lichaamsbehandelingen. Kies eerst op huidbehoefte, daarna op behandeling.",
  },
  "/zabiegi": { title: "Gezichtsbehandelingen Deventer | ElviGlow", description: "Gezichtsbehandelingen in Deventer: reiniging, oxybrasie, ampullen, lifting care en microneedling afgestemd op de actuele huidconditie." },
  "/paznokcie": { title: "Nagels & BIAB Deventer | ElviGlow", description: "Manicure, BIAB, gel en pedicure in Deventer in de rustige, verzorgde ElviGlow-stijl." },
  "/depilacja": { title: "Lycon waxing Deventer | ElviGlow", description: "Lycon waxing voor vrouwen in Deventer: precieze en grotere zones met aandacht voor comfort en huidreactie." },
  "/cialo": { title: "Lichaamsbehandelingen Deventer | ElviGlow", description: "Vacuum dermomassage en cryolipolyse in Deventer. Heldere uitleg, eenvoudige pakketten en één gekozen zone per cryolipolysebezoek." },
  "/wiedza": { title: "Huidkennis | ElviGlow Deventer", description: "Praktische huidkennis: huidtypes, zichtbare signalen, verzorgingsregels en hoe je een behandeling bewuster kiest." },
  "/akademia-skory": { title: "Huidacademie & mini huidkaart | ElviGlow", description: "Leer je huid beter begrijpen met de ElviGlow Huidacademie en mini huidkaart: probleem, mechanisme, doel en verzorgingsrichting." },
  "/cennik": { title: "Prijslijst ElviGlow Deventer", description: "Bekijk actuele prijzen voor gezichtsbehandelingen, microneedling, verzorgingsprogramma's, nagels, Lycon waxing en lichaamsbehandelingen." },
  "/abonamenty": { title: "Verzorgingsprogramma's | ElviGlow Deventer", description: "Regelmatige huidverzorgingsprogramma's voor klanten die liever met een plan werken dan met losse, toevallige behandelingen." },
  "/kontakt": { title: "Contact & afspraak | ElviGlow Deventer", description: "Neem contact op met ElviGlow in Deventer voor een afspraak, huidbehandeling, microneedling, nagels, waxing of lichaamsbehandeling." },
};

function normalizePath(pathname) {
  const clean = pathname.replace(/\/$/, "") || "/";
  return allowedPaths.includes(clean) ? clean : "/";
}

function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
        {children}
      </div>
    </section>
  );
}

function HomePage({ onNavigate, t, lang }) {
  const x = homeExperience[lang] || homeExperience.nl;

  return (
    <>
      <section className="home-hero home-hero-premium">
        <div className="hero-copy">
          <p className="eyebrow">{x.eyebrow}</p>
          <h1>{x.title}</h1>
          <p className="lead">{x.lead}</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => onNavigate("/akademia-skory")}>{x.primary}</button>
            <button className="secondary-btn" onClick={() => onNavigate("/zabiegi")}>{x.secondary}</button>
          </div>
          <div className="trust-row" aria-label="ElviGlow">
            {x.trust.map((item) => <span key={item}>✦ {item}</span>)}
          </div>
        </div>

        <div className="hero-visual skin-first-visual">
          <div className="skin-focus-card">
            <div className="skin-focus-head">
              <span className="skin-focus-kicker">{x.visualKicker}</span>
              <img src="/elviglow-logo.webp" alt="ElviGlow" />
            </div>
            <h2>{x.visualTitle}</h2>
            <p>{x.visualText}</p>
            <p className="skin-focus-prompt">{x.visualPrompt}</p>
            <div className="skin-focus-chips" aria-label={x.visualPrompt}>
              {x.visualProblems.map((item, index) => (
                <button
                  type="button"
                  className="skin-focus-chip"
                  key={item}
                  onClick={() => document.getElementById(`skin-problem-${index}`)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="secondary-btn skin-focus-cta" onClick={() => onNavigate("/akademia-skory")}>
              {x.academyCta} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section problem-first-section">
        <div className="section-heading center">
          <p className="eyebrow">{x.problemEyebrow}</p>
          <h2>{x.problemTitle}</h2>
          <p>{x.problemLead}</p>
        </div>
        <div className="problem-grid">
          {x.problems.map(([title, text, direction], index) => (
            <button id={`skin-problem-${index}`} className="problem-card" key={title} onClick={() => onNavigate("/akademia-skory")}>
              <span className="problem-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <strong>{direction} <span aria-hidden="true">→</span></strong>
            </button>
          ))}
        </div>
      </section>

      <section className="section pathway-section">
        <div className="pathway-copy">
          <p className="eyebrow">{x.pathEyebrow}</p>
          <h2>{x.pathTitle}</h2>
          <p>{x.pathLead}</p>
          <button className="secondary-btn" onClick={() => onNavigate("/wiedza")}>{t.nav.knowledge}</button>
        </div>
        <div className="pathway-list">
          {x.path.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-columns philosophy-polish">
        <div>
          <p className="eyebrow">{t.home.philosophyEyebrow}</p>
          <h2>{t.home.philosophyTitle}</h2>
        </div>
        <div className="text-panel">
          <p>{t.home.philosophyText1}</p>
          <p>{t.home.philosophyText2}</p>
        </div>
      </section>

      <section className="section card-grid-3 pillar-polish">
        {t.home.pillars.map(([title, text]) => (
          <article className="glass-card" key={title}>
            <span className="card-mark">✦</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="section home-service-section">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.home.offerTitle}</h2>
          <p>{t.home.offerText}</p>
        </div>
        <div className="service-preview-grid">
          {t.home.serviceCards.map((card) => (
            <article className="glass-card service-preview-card" key={card.title}>
              <span className="card-mark">✦</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="hero-actions centered-actions">
          <button className="primary-btn" onClick={() => onNavigate("/zabiegi")}>{t.nav.treatments}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/cennik")}>{t.common.seePricing}</button>
        </div>
      </section>

      <CtaStrip onNavigate={onNavigate} t={t} />
    </>
  );
}

function TreatmentsPage({ t, onNavigate }) {
  return (
    <>
      <PageHero eyebrow={t.treatments.eyebrow} title={t.treatments.title} text={t.treatments.lead} />

      <section className="section consultation-section first-in-flow">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.treatments.consultationTitle}</h2>
        </div>
        <div className="steps-list">
          {t.treatments.consultationSteps.map((step, index) => (
            <div className="step-row" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section treatment-guide-section first-in-flow">
        <div className="section-heading center">
          <p className="eyebrow">{t.treatments.guideEyebrow}</p>
          <h2>{t.treatments.guideTitle}</h2>
          <p>{t.treatments.guideLead}</p>
        </div>
        <div className="guide-grid">
          {t.treatments.treatmentGuide.map((item) => (
            <article className="guide-card" key={item.title}>
              <span>✦</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-strip">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.treatments.flowTitle}</h2>
          <p>{t.treatments.flowText}</p>
        </div>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/wiedza")}>{t.treatments.flowPrimary}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/akademia-skory")}>{t.treatments.flowSecondary}</button>
        </div>
      </section>
    </>
  );
}

function NailsPage({ t, onNavigate }) {
  return (
    <>
      <PageHero eyebrow={t.nails.eyebrow} title={t.nails.title} text={t.nails.lead}>
        <div className="hero-actions"><button className="primary-btn" onClick={() => onNavigate("/kontakt")}>{t.common.bookVisit}</button></div>
      </PageHero>

      <section className="section two-columns">
        <div>
          <p className="eyebrow">ElviGlow Nails</p>
          <h2>{t.nails.introTitle}</h2>
        </div>
        <div className="text-panel">
          <p>{t.nails.introText}</p>
          <p>{t.nails.note}</p>
        </div>
      </section>

      <section className="section treatment-guide-section nails-info-section">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow Nails</p>
          <h2>{t.nails.infoTitle}</h2>
          <p>{t.nails.infoLead}</p>
        </div>
        <div className="guide-grid">
          {t.nails.infoCards.map((item) => (
            <article className="guide-card" key={item.title}>
              <span>✦</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaStrip onNavigate={onNavigate} t={t} />
    </>
  );
}



function WaxingPage({ t, onNavigate }) {
  return (
    <>
      <PageHero eyebrow={t.waxing.eyebrow} title={t.waxing.title} text={t.waxing.lead}>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/cennik")}>{t.common.seePricing}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/kontakt")}>{t.common.bookVisit}</button>
        </div>
      </PageHero>

      <section className="section two-columns">
        <div>
          <p className="eyebrow">Lycon</p>
          <h2>{t.waxing.introTitle}</h2>
        </div>
        <div className="text-panel">
          <p>{t.waxing.introText}</p>
        </div>
      </section>

      <section className="section treatment-guide-section first-in-flow">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow Waxing</p>
          <h2>{t.waxing.methodTitle}</h2>
        </div>
        <div className="guide-grid">
          {t.waxing.methodCards.map((item) => (
            <article className="guide-card" key={item.title}>
              <span>✦</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section waxing-groups-section">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow Waxing</p>
          <h2>{t.pricing.tabs.waxing}</h2>
          <p>{t.pricing.waxingIntro}</p>
        </div>
        <div className="waxing-groups-grid">
          {t.waxing.groups.map((group) => (
            <article className="waxing-group-card" key={group.title}>
              <span className="card-mark">✦</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section rules-box">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.waxing.beforeTitle}</h2>
        </div>
        <ul>{t.waxing.before.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
    </>
  );
}


function BodyPage({ t, onNavigate }) {
  return (
    <>
      <PageHero eyebrow={t.body.eyebrow} title={t.body.title} text={t.body.lead}>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/cennik")}>{t.common.seePricing}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/kontakt")}>{t.common.bookVisit}</button>
        </div>
      </PageHero>

      <section className="section two-columns">
        <div>
          <p className="eyebrow">ElviGlow Body</p>
          <h2>{t.body.introTitle}</h2>
        </div>
        <div className="text-panel">
          <p>{t.body.introText}</p>
        </div>
      </section>

      <section className="section waxing-groups-section">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow Body</p>
          <h2>{t.body.methodTitle}</h2>
        </div>
        <div className="waxing-groups-grid">
          {t.body.groups.map((group) => (
            <article className="waxing-group-card" key={group.title}>
              <span className="card-mark">✦</span>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section rules-box">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.body.safetyTitle}</h2>
        </div>
        <ul>{t.body.safety.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
    </>
  );
}

function KnowledgePage({ t, onNavigate }) {
  return (
    <>
      <PageHero eyebrow={t.knowledge.eyebrow} title={t.knowledge.title} text={t.knowledge.lead}>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/akademia-skory")}>{t.nav.academy}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/cennik")}>{t.common.seePricing}</button>
        </div>
      </PageHero>

      <section className="section two-columns">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.knowledge.typesTitle}</h2>
        </div>
        <div className="text-panel">
          <p>{t.knowledge.typesLead}</p>
        </div>
      </section>

      <section className="section card-grid-3 knowledge-card-grid">
        {t.knowledge.skinTypes.map((card) => (
          <article className="glass-card" key={card.title}>
            <span className="card-mark">✦</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="section treatment-guide-section first-in-flow">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.knowledge.symptomsTitle}</h2>
          <p>{t.knowledge.symptomsLead}</p>
        </div>
        <div className="guide-grid">
          {t.knowledge.symptoms.map((item) => (
            <article className="guide-card" key={item.title}>
              <span>✦</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section rules-box">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.knowledge.rulesTitle}</h2>
        </div>
        <ul>{t.knowledge.rules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
      </section>

      <section className="section cta-strip">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.knowledge.ctaTitle}</h2>
          <p>{t.knowledge.ctaText}</p>
        </div>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/akademia-skory")}>{t.nav.academy}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/kontakt")}>{t.nav.contact}</button>
        </div>
      </section>
    </>
  );
}

function PriceListGroups({ groups }) {
  return (
    <>
      {groups.map((group) => (
        <div className="pricing-group" key={group.category}>
          <h3>{group.category}</h3>
          <div className="price-list-grid">
            {group.items.map((service) => (
              <article className="price-row-card" key={service.name}>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.text}</p>
                </div>
                <strong>{service.price}</strong>
              </article>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function PricingPage({ t }) {
  const [active, setActive] = useState("face");
  const pricing = t.pricing;

  function renderFace() {
    return (
      <>
        <div className="category-intro pricing-intro">
          <p className="eyebrow">ElviGlow</p>
          <h2>{pricing.tabs.face}</h2>
          <p>{pricing.faceIntro}</p>
        </div>

        <div className="pricing-group">
          <h3>{pricing.headings.popular}</h3>
          <div className="offer-grid">
            {pricing.offers.facial.map((item) => <OfferCard item={item} key={item.name} t={t} />)}
          </div>
        </div>

        <div className="pricing-group">
          <h3>{pricing.headings.premium}</h3>
          <div className="offer-grid">
            {pricing.offers.premium.map((item) => <OfferCard item={item} key={item.name} t={t} />)}
          </div>
        </div>

        <div className="pricing-group">
          <h3>{pricing.headings.regeneration}</h3>
          <div className="offer-grid">
            {pricing.offers.microneedling.map((item) => <OfferCard item={item} key={item.name} t={t} />)}
          </div>
          <p className="pricing-note">{pricing.note}</p>
        </div>
      </>
    );
  }

  function renderNails() {
    return (
      <>
        <div className="category-intro pricing-intro">
          <p className="eyebrow">ElviGlow Nails</p>
          <h2>{pricing.tabs.nails}</h2>
          <p>{pricing.nailsIntro}</p>
        </div>
        <div className="price-list-grid">
          {pricing.nails.map((service) => (
            <article className="price-row-card" key={service.name}>
              <div>
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
              <strong>{service.price}</strong>
            </article>
          ))}
        </div>
      </>
    );
  }

  function renderWaxing() {
    return (
      <>
        <div className="category-intro pricing-intro">
          <p className="eyebrow">ElviGlow Waxing</p>
          <h2>{pricing.tabs.waxing}</h2>
          <p>{pricing.waxingIntro}</p>
        </div>
        <PriceListGroups groups={pricing.waxing} />
      </>
    );
  }


  function renderBody() {
    return (
      <>
        <div className="category-intro pricing-intro">
          <p className="eyebrow">ElviGlow Body</p>
          <h2>{pricing.tabs.body}</h2>
          <p>{pricing.bodyIntro}</p>
        </div>
        <PriceListGroups groups={pricing.body} />
      </>
    );
  }

  function renderCare() {
    return (
      <>
        <div className="category-intro pricing-intro">
          <p className="eyebrow">ElviGlow Care</p>
          <h2>{pricing.tabs.care}</h2>
          <p>{pricing.careIntro}</p>
        </div>
        <div className="offer-grid">
          {pricing.memberships.map((item) => <OfferCard key={item.name} item={{ ...item, tags: [], passes: "" }} t={t} />)}
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow={pricing.eyebrow} title={pricing.title} text={pricing.lead} />
      <section className="section tabs-page pricing-page">
        <div className="inner-tabs pricing-tabs" role="tablist" aria-label="Pricing categories">
          {Object.entries(pricing.tabs).map(([key, label]) => (
            <button key={key} className={active === key ? "active" : ""} onClick={() => setActive(key)}>
              {label}
            </button>
          ))}
        </div>
        {active === "face" && renderFace()}
        {active === "care" && renderCare()}
        {active === "nails" && renderNails()}
        {active === "waxing" && renderWaxing()}
        {active === "body" && renderBody()}
      </section>
    </>
  );
}

function AcademyPage({ t, onNavigate, lang }) {
  const academyNextStep = {
    pl: {
      title: "Wiesz już, czego potrzebuje Twoja skóra?",
      text: "Sprawdź cennik zabiegów albo napisz do nas, jeśli chcesz dobrać pierwszy rytuał do aktualnego stanu skóry.",
      primary: "Zobacz cennik",
      secondary: "Kontakt",
    },
    en: {
      title: "Do you already know what your skin needs?",
      text: "Check the price list or message us if you want to choose the first ritual for your current skin condition.",
      primary: "View prices",
      secondary: "Contact",
    },
    nl: {
      title: "Weet je al wat je huid nodig heeft?",
      text: "Bekijk de prijslijst of stuur ons een bericht als je het eerste ritueel wilt afstemmen op je huidige huidconditie.",
      primary: "Bekijk prijzen",
      secondary: "Contact",
    },
  }[lang] || {
    title: t.cta.title,
    text: t.cta.text,
    primary: t.common.seePricing,
    secondary: t.nav.contact,
  };

  return (
    <>
      <PageHero eyebrow={t.academy.eyebrow} title={t.academy.title} text={t.academy.lead} />

      <section className="section card-grid-3">
        {t.academy.preventionCards.map((card) => (
          <article className="glass-card" key={card.title}>
            <span className="card-mark">✦</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>

      <section className="section advanced-path">
        <div className="section-heading center">
          <p className="eyebrow">{t.academy.pathEyebrow || "ElviGlow"}</p>
          <h2>{t.academy.pathTitle}</h2>
          <p>{t.academy.pathText}</p>
        </div>
        <div className="path-grid">
          {t.academy.pathSteps.map(([number, title, text]) => (
            <article key={number} className="path-card">
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <ElviSkinMiniMap lang={lang} />

      <section className="section age-section">
        <div className="section-heading center">
          <p className="eyebrow">{t.academy.ageTitle}</p>
          <h2>{t.academy.preventionTitle}</h2>
          <p>{t.academy.ageLead}</p>
        </div>
        <div className="age-timeline">
          {t.academy.ageGuide.map((item) => (
            <article key={item.age}>
              <strong>{item.age}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-grid">
        <div>
          <p className="eyebrow">{t.academy.topicsEyebrow || "ElviGlow"}</p>
          <h2>{t.academy.topicsTitle}</h2>
        </div>
        <div className="knowledge-list">
          {t.academy.topics.map((topic) => (
            <article key={topic.title}>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section rules-box">
        <div>
          <p className="eyebrow">{t.academy.safetyEyebrow || "ElviGlow"}</p>
          <h2>{t.common.notDiagnosis}</h2>
        </div>
        <ul>{t.academy.safety.map((rule) => <li key={rule}>{rule}</li>)}</ul>
      </section>

      <section className="section cta-strip academy-next-step">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{academyNextStep.title}</h2>
          <p>{academyNextStep.text}</p>
        </div>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/cennik")}>{academyNextStep.primary}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/kontakt")}>{academyNextStep.secondary}</button>
        </div>
      </section>
    </>
  );
}

function MembershipsPage({ t, onNavigate }) {
  return (
    <>
      <PageHero eyebrow={t.memberships.eyebrow} title={t.memberships.title} text={t.memberships.lead} />
      <section className="section offer-grid">
        {t.memberships.items.map((item) => <OfferCard key={item.name} item={{ ...item, tags: [], passes: "" }} t={t} />)}
      </section>
      <CtaStrip onNavigate={onNavigate} t={t} />
    </>
  );
}

function ContactPage({ t, lang }) {
  const instagramUrl = "https://www.instagram.com/nagelsvoorjouenbeauty?igsh=N2hxdnRmaXZyYTJp";

  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.lead} />

      <section className="section contact-new-layout">
        <article className="contact-main-card">
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.contact.mainTitle}</h2>
          <p>{t.contact.mainText}</p>
          <div className="hero-actions">
            <a className="primary-btn" href={instagramUrl} target="_blank" rel="noreferrer">{t.contact.instagramButton}</a>
            <a className="secondary-btn" href="mailto:kontakt@elviglow.com">{t.contact.emailButton}</a>
          </div>
        </article>

        <div className="contact-info-grid">
          <article className="contact-info-card">
            <span>⌖</span>
            <div>
              <h3>{(contactLocationCopy[lang] || contactLocationCopy.nl).title}</h3>
              <p>{(contactLocationCopy[lang] || contactLocationCopy.nl).text}</p>
            </div>
          </article>
          {t.contact.cards.map((card) => (
            <article className="contact-info-card" key={card.title}>
              <span>{card.icon}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                {card.type === "instagram" && <a href={instagramUrl} target="_blank" rel="noreferrer">@nagelsvoorjouenbeauty</a>}
                {card.type === "email" && <a href="mailto:kontakt@elviglow.com">kontakt@elviglow.com</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-note-box">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.contact.beforeVisitTitle}</h2>
        </div>
        <ul>{t.contact.beforeVisit.map((item) => <li key={item}>{item}</li>)}</ul>
        <small>{t.contact.disclaimer}</small>
      </section>
    </>
  );
}

function getInitialLanguage() {
  const saved = localStorage.getItem("elviglow-lang");
  if (["pl", "en", "nl"].includes(saved)) return saved;
  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("pl")) return "pl";
  if (browser.startsWith("nl")) return "nl";
  return "en";
}

function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));
  const [lang, setLangState] = useState(getInitialLanguage);
  const t = translations[lang] || translations.pl;

  function onNavigate(path) {
    const next = normalizePath(path);
    window.history.pushState({}, "", next);
    setCurrentPath(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function setLang(nextLang) {
    setLangState(nextLang);
    localStorage.setItem("elviglow-lang", nextLang);
    document.documentElement.lang = nextLang;
  }

  useEffect(() => {
    const handlePop = () => setCurrentPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePop);
    document.documentElement.lang = lang;
    return () => window.removeEventListener("popstate", handlePop);
  }, [lang]);

  useEffect(() => {
    const seo = seoByPath[currentPath] || seoByPath["/"];
    document.title = seo.title;

    const upsertMeta = (selector, attribute, value) => {
      let node = document.head.querySelector(selector);
      if (!node) {
        node = document.createElement("meta");
        const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
        if (match) node.setAttribute(match[1], match[2]);
        document.head.appendChild(node);
      }
      node.setAttribute(attribute, value);
    };

    upsertMeta('meta[name="description"]', "content", seo.description);
    upsertMeta('meta[property="og:title"]', "content", seo.title);
    upsertMeta('meta[property="og:description"]', "content", seo.description);
    upsertMeta('meta[property="og:url"]', "content", `${BASE_URL}${currentPath === "/" ? "" : currentPath}`);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${currentPath === "/" ? "" : currentPath}`;
  }, [currentPath, lang]);

  let page = <HomePage onNavigate={onNavigate} t={t} lang={lang} />;
  if (currentPath === "/zabiegi") page = <TreatmentsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/paznokcie") page = <NailsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/depilacja") page = <WaxingPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/cialo") page = <BodyPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/wiedza") page = <KnowledgePage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/cennik") page = <PricingPage t={t} />;
  if (currentPath === "/akademia-skory") page = <AcademyPage t={t} onNavigate={onNavigate} lang={lang} />;
  if (currentPath === "/abonamenty") page = <MembershipsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/kontakt") page = <ContactPage t={t} lang={lang} />;

  return (
    <Layout currentPath={currentPath} onNavigate={onNavigate} lang={lang} setLang={setLang} t={t}>
      {page}
    </Layout>
  );
}

const rootElement = document.getElementById("root");
rootElement.replaceChildren();
createRoot(rootElement).render(<App />);
