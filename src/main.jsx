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
  "/paznokcie": { title: "Nagels & Gellak Deventer | ElviGlow", description: "Manicure, gellak en pedicure in Deventer in de rustige, verzorgde ElviGlow-stijl." },
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

const bookingCopy = {
  pl: {
    eyebrow: "Rezerwacja • ElviGlow",
    title: "Umów wizytę przez WhatsApp lub Instagram",
    lead: "Nie pokazujemy publicznego kalendarza. Wybierz usługę i preferowany termin, a przygotujemy gotową wiadomość do wysłania. Elwira potwierdzi dostępność osobiście.",
    formTitle: "Przygotuj wiadomość",
    formText: "To nie jest automatyczna rezerwacja — termin jest potwierdzany w rozmowie.",
    category: "Kategoria",
    categoryPlaceholder: "Wybierz kategorię",
    service: "Konkretny zabieg",
    servicePlaceholder: "Najpierw wybierz kategorię",
    price: "Cena",
    duration: "Orientacyjny czas",
    selectionHelp: "Wybierz dokładny zabieg — dzięki temu od razu wiemy, ile czasu zarezerwować.",
    date: "Preferowana data",
    time: "Preferowana godzina rozpoczęcia",
    timePlaceholder: "Najpierw wybierz datę",
    firstVisit: "To moja pierwsza wizyta w ElviGlow",
    note: "Dodatkowa wiadomość (opcjonalnie)",
    notePlaceholder: "Np. zależy mi na oczyszczeniu, mam wrażliwą skórę albo chcę konkretny kolor paznokci.",
    whatsapp: "Wyślij przez WhatsApp",
    instagram: "Skopiuj wiadomość i otwórz Instagram",
    copied: "Wiadomość skopiowana — wklej ją w DM na Instagramie.",
    preview: "Podgląd wiadomości",
    chooseDate: "Wybierz datę, aby zobaczyć możliwe godziny.",
    closed: "W niedzielę salon jest nieczynny. Wybierz inny dzień.",
    saturday: "Sobota jest dostępna co drugi tydzień — dostępność potwierdzimy w wiadomości.",
    hoursTitle: "Godziny przyjmowania klientek",
    hoursLead: "Podana godzina końcowa oznacza najpóźniejszą godzinę rozpoczęcia wizyty.",
    channelsTitle: "Najwygodniejszy kontakt",
    channelsText: "Rezerwacje ustalamy przez WhatsApp lub Instagram. E-mail zostawiamy do dłuższych pytań.",
    emailLabel: "E-mail",
    phoneLabel: "WhatsApp",
    weekdays: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    messageIntro: "Dzień dobry, chciałabym umówić wizytę w ElviGlow.",
    messageService: "Usługa",
    messagePrice: "Cena",
    messageDuration: "Orientacyjny czas",
    messageDate: "Preferowana data",
    messageTime: "Preferowana godzina",
    messageFirst: "Pierwsza wizyta",
    yes: "tak",
    no: "nie",
    messageNote: "Dodatkowo",
  },
  en: {
    eyebrow: "Booking • ElviGlow",
    title: "Book your visit via WhatsApp or Instagram",
    lead: "We do not display a public calendar. Choose a service and preferred time and we will prepare a ready-to-send message. Elvira will confirm availability personally.",
    formTitle: "Prepare your message",
    formText: "This is not an automatic booking — the appointment is confirmed in conversation.",
    category: "Category",
    categoryPlaceholder: "Choose a category",
    service: "Specific treatment",
    servicePlaceholder: "Choose a category first",
    price: "Price",
    duration: "Estimated time",
    selectionHelp: "Choose the exact treatment so we immediately know how much time to reserve.",
    date: "Preferred date",
    time: "Preferred start time",
    timePlaceholder: "Choose a date first",
    firstVisit: "This is my first visit to ElviGlow",
    note: "Additional message (optional)",
    notePlaceholder: "For example: I want cleansing, I have sensitive skin, or I have a specific nail colour in mind.",
    whatsapp: "Send via WhatsApp",
    instagram: "Copy message and open Instagram",
    copied: "Message copied — paste it into an Instagram DM.",
    preview: "Message preview",
    chooseDate: "Choose a date to see possible times.",
    closed: "The salon is closed on Sundays. Please choose another day.",
    saturday: "Saturday is available every other week — we will confirm availability in the conversation.",
    hoursTitle: "Client hours",
    hoursLead: "The closing time shown is the latest possible appointment start time.",
    channelsTitle: "Best way to contact us",
    channelsText: "Bookings are arranged through WhatsApp or Instagram. E-mail is available for longer questions.",
    emailLabel: "E-mail",
    phoneLabel: "WhatsApp",
    weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    messageIntro: "Hello, I would like to book a visit at ElviGlow.",
    messageService: "Service",
    messagePrice: "Price",
    messageDuration: "Estimated time",
    messageDate: "Preferred date",
    messageTime: "Preferred time",
    messageFirst: "First visit",
    yes: "yes",
    no: "no",
    messageNote: "Additional note",
  },
  nl: {
    eyebrow: "Afspraak • ElviGlow",
    title: "Maak een afspraak via WhatsApp of Instagram",
    lead: "We tonen geen openbare agenda. Kies een behandeling en een gewenst moment; de website maakt een bericht voor je klaar. Elvira bevestigt de beschikbaarheid persoonlijk.",
    formTitle: "Maak je bericht klaar",
    formText: "Dit is geen automatische boeking — de afspraak wordt in het gesprek bevestigd.",
    category: "Categorie",
    categoryPlaceholder: "Kies een categorie",
    service: "Specifieke behandeling",
    servicePlaceholder: "Kies eerst een categorie",
    price: "Prijs",
    duration: "Geschatte tijd",
    selectionHelp: "Kies de exacte behandeling, zodat we meteen weten hoeveel tijd we moeten reserveren.",
    date: "Gewenste datum",
    time: "Gewenste starttijd",
    timePlaceholder: "Kies eerst een datum",
    firstVisit: "Dit is mijn eerste bezoek aan ElviGlow",
    note: "Extra bericht (optioneel)",
    notePlaceholder: "Bijvoorbeeld: ik wil mijn huid laten reinigen, ik heb een gevoelige huid of ik wil een specifieke nagelkleur.",
    whatsapp: "Verstuur via WhatsApp",
    instagram: "Kopieer bericht en open Instagram",
    copied: "Bericht gekopieerd — plak het in een DM op Instagram.",
    preview: "Voorbeeld van je bericht",
    chooseDate: "Kies een datum om mogelijke tijden te zien.",
    closed: "Op zondag is de salon gesloten. Kies een andere dag.",
    saturday: "Zaterdag is om de week beschikbaar — we bevestigen de beschikbaarheid in het gesprek.",
    hoursTitle: "Tijden voor afspraken",
    hoursLead: "De eindtijd is de laatst mogelijke starttijd van een afspraak.",
    channelsTitle: "Snelste contact",
    channelsText: "Afspraken regelen we via WhatsApp of Instagram. E-mail is er voor langere vragen.",
    emailLabel: "E-mail",
    phoneLabel: "WhatsApp",
    weekdays: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
    messageIntro: "Hallo, ik wil graag een afspraak maken bij ElviGlow.",
    messageService: "Behandeling",
    messagePrice: "Prijs",
    messageDuration: "Geschatte tijd",
    messageDate: "Gewenste datum",
    messageTime: "Gewenste tijd",
    messageFirst: "Eerste bezoek",
    yes: "ja",
    no: "nee",
    messageNote: "Extra informatie",
  },
};


const bookingServices = {
  pl: [
    { id: "face", label: "Zabiegi twarzy", items: [
      { id: "oxy", name: "Oxybrazja", price: "59 €", duration: "ok. 60 min" },
      { id: "cleansing-glow", name: "Oczyszczanie Glow", price: "69 €", duration: "ok. 75 min" },
      { id: "glow-ampoule-mask", name: "Glow Therapy z ampułką i maską", price: "89 €", duration: "ok. 75 min" },
      { id: "lifting", name: "Pielęgnacja liftingująca", price: "95 €", duration: "ok. 75 min" },
    ]},
    { id: "micro", label: "Microneedling", items: [
      { id: "micro-face", name: "Microneedling — twarz", price: "89 €", duration: "ok. 75 min" },
      { id: "micro-neck", name: "Microneedling — twarz + szyja", price: "109 €", duration: "ok. 90 min" },
      { id: "micro-decollete", name: "Microneedling — twarz + szyja + dekolt", price: "129 €", duration: "ok. 105 min" },
    ]},
    { id: "nails", label: "Paznokcie", items: [
      { id: "manicure-classic", name: "Manicure klasyczny", price: "35 €", duration: "ok. 45 min" },
      { id: "manicure-gellak", name: "Manicure hybrydowy / gellak", price: "45 €", duration: "ok. 60 min" },
      { id: "nail-removal", name: "Usunięcie stylizacji", price: "20 €", duration: "ok. 30 min" },
    ]},
    { id: "pedicure", label: "Pedicure", items: [
      { id: "pedi-classic", name: "Pedicure klasyczny", price: "50 €", duration: "ok. 60 min" },
      { id: "pedi-gellak", name: "Pedicure + gellak", price: "60 €", duration: "ok. 75 min" },
      { id: "pedi-spa", name: "Pedicure SPA / wellness", price: "70 €", duration: "ok. 75 min" },
      { id: "pedi-spa-gellak", name: "Pedicure SPA + gellak", price: "75 €", duration: "ok. 90 min" },
    ]},
    { id: "wax", label: "Depilacja Lycon", items: [
      { id: "wax-lip", name: "Wąsik", price: "10 €", duration: "ok. 15 min" },
      { id: "wax-brows", name: "Brwi", price: "15 €", duration: "ok. 20 min" },
      { id: "wax-brows-tint", name: "Brwi + henna", price: "25 €", duration: "ok. 30 min" },
      { id: "wax-underarms", name: "Pachy", price: "20 €", duration: "ok. 20 min" },
      { id: "wax-forearms", name: "Przedramiona", price: "25 €", duration: "ok. 30 min" },
      { id: "wax-lowerlegs", name: "Łydki", price: "30 €", duration: "ok. 30 min" },
      { id: "wax-legs", name: "Całe nogi", price: "35 €", duration: "ok. 45 min" },
      { id: "wax-back", name: "Plecy", price: "36 €", duration: "ok. 45 min" },
      { id: "wax-bikini", name: "Linia bikini", price: "40 €", duration: "ok. 30 min" },
      { id: "wax-brazilian", name: "Bikini brazylijskie", price: "50 €", duration: "ok. 45 min" },
    ]},
    { id: "body", label: "Zabiegi na ciało", items: [
      { id: "dermomassage", name: "Dermomasaż vacuum", price: "60 €", duration: "ok. 60 min" },
      { id: "cryo-abdomen", name: "Kriolipoliza — brzuch", price: "99 €", duration: "ok. 75 min" },
      { id: "cryo-waist", name: "Kriolipoliza — boczki / talia", price: "99 €", duration: "ok. 75 min" },
      { id: "cryo-outer-thigh", name: "Kriolipoliza — uda zewnętrzne", price: "99 €", duration: "ok. 75 min" },
      { id: "cryo-inner-thigh", name: "Kriolipoliza — uda wewnętrzne", price: "99 €", duration: "ok. 75 min" },
      { id: "cryo-arms", name: "Kriolipoliza — ramiona", price: "99 €", duration: "ok. 75 min" },
    ]},
    { id: "care", label: "Program pielęgnacji", items: [
      { id: "care-advice", name: "Chcę dobrać program pielęgnacji", price: "od 69 €/mies.", duration: "czas pierwszej wizyty ustalimy po rozmowie" },
    ]},
    { id: "advice", label: "Konsultacja / nie wiem", items: [
      { id: "general-advice", name: "Nie wiem — potrzebuję konsultacji i doboru", price: "do ustalenia", duration: "ustalimy po rozmowie" },
    ]},
  ],
  en: [
    { id: "face", label: "Facial treatments", items: [
      { id: "oxy", name: "Oxybrasion", price: "59 €", duration: "approx. 60 min" },
      { id: "cleansing-glow", name: "Cleansing Glow", price: "69 €", duration: "approx. 75 min" },
      { id: "glow-ampoule-mask", name: "Glow Therapy with Ampoule and Mask", price: "89 €", duration: "approx. 75 min" },
      { id: "lifting", name: "Lifting Care", price: "95 €", duration: "approx. 75 min" },
    ]},
    { id: "micro", label: "Microneedling", items: [
      { id: "micro-face", name: "Microneedling — face", price: "89 €", duration: "approx. 75 min" },
      { id: "micro-neck", name: "Microneedling — face + neck", price: "109 €", duration: "approx. 90 min" },
      { id: "micro-decollete", name: "Microneedling — face + neck + décolleté", price: "129 €", duration: "approx. 105 min" },
    ]},
    { id: "nails", label: "Nails", items: [
      { id: "manicure-classic", name: "Classic manicure", price: "35 €", duration: "approx. 45 min" },
      { id: "manicure-gellak", name: "Hybrid manicure / gellak", price: "45 €", duration: "approx. 60 min" },
      { id: "nail-removal", name: "Removal", price: "20 €", duration: "approx. 30 min" },
    ]},
    { id: "pedicure", label: "Pedicure", items: [
      { id: "pedi-classic", name: "Classic pedicure", price: "50 €", duration: "approx. 60 min" },
      { id: "pedi-gellak", name: "Pedicure + gellak", price: "60 €", duration: "approx. 75 min" },
      { id: "pedi-spa", name: "SPA / wellness pedicure", price: "70 €", duration: "approx. 75 min" },
      { id: "pedi-spa-gellak", name: "SPA pedicure + gellak", price: "75 €", duration: "approx. 90 min" },
    ]},
    { id: "wax", label: "Lycon waxing", items: [
      { id: "wax-lip", name: "Upper lip", price: "10 €", duration: "approx. 15 min" },
      { id: "wax-brows", name: "Brows", price: "15 €", duration: "approx. 20 min" },
      { id: "wax-brows-tint", name: "Brows + tint", price: "25 €", duration: "approx. 30 min" },
      { id: "wax-underarms", name: "Underarms", price: "20 €", duration: "approx. 20 min" },
      { id: "wax-forearms", name: "Forearms", price: "25 €", duration: "approx. 30 min" },
      { id: "wax-lowerlegs", name: "Lower legs", price: "30 €", duration: "approx. 30 min" },
      { id: "wax-legs", name: "Full legs", price: "35 €", duration: "approx. 45 min" },
      { id: "wax-back", name: "Back", price: "36 €", duration: "approx. 45 min" },
      { id: "wax-bikini", name: "Bikini line", price: "40 €", duration: "approx. 30 min" },
      { id: "wax-brazilian", name: "Brazilian bikini", price: "50 €", duration: "approx. 45 min" },
    ]},
    { id: "body", label: "Body treatments", items: [
      { id: "dermomassage", name: "Vacuum dermomassage", price: "60 €", duration: "approx. 60 min" },
      { id: "cryo-abdomen", name: "Cryolipolysis — abdomen", price: "99 €", duration: "approx. 75 min" },
      { id: "cryo-waist", name: "Cryolipolysis — flanks / waist", price: "99 €", duration: "approx. 75 min" },
      { id: "cryo-outer-thigh", name: "Cryolipolysis — outer thighs", price: "99 €", duration: "approx. 75 min" },
      { id: "cryo-inner-thigh", name: "Cryolipolysis — inner thighs", price: "99 €", duration: "approx. 75 min" },
      { id: "cryo-arms", name: "Cryolipolysis — arms", price: "99 €", duration: "approx. 75 min" },
    ]},
    { id: "care", label: "Care programme", items: [
      { id: "care-advice", name: "I want help choosing a care programme", price: "from 69 €/month", duration: "first-visit time agreed in conversation" },
    ]},
    { id: "advice", label: "Consultation / not sure", items: [
      { id: "general-advice", name: "I am not sure — I need consultation and advice", price: "to be agreed", duration: "agreed in conversation" },
    ]},
  ],
  nl: [
    { id: "face", label: "Gezichtsbehandelingen", items: [
      { id: "oxy", name: "Oxybrasie", price: "59 €", duration: "ca. 60 min" },
      { id: "cleansing-glow", name: "Reiniging Glow", price: "69 €", duration: "ca. 75 min" },
      { id: "glow-ampoule-mask", name: "Glow Therapy met ampul en masker", price: "89 €", duration: "ca. 75 min" },
      { id: "lifting", name: "Lifting verzorging", price: "95 €", duration: "ca. 75 min" },
    ]},
    { id: "micro", label: "Microneedling", items: [
      { id: "micro-face", name: "Microneedling — gezicht", price: "89 €", duration: "ca. 75 min" },
      { id: "micro-neck", name: "Microneedling — gezicht + hals", price: "109 €", duration: "ca. 90 min" },
      { id: "micro-decollete", name: "Microneedling — gezicht + hals + decolleté", price: "129 €", duration: "ca. 105 min" },
    ]},
    { id: "nails", label: "Nagels", items: [
      { id: "manicure-classic", name: "Klassieke manicure", price: "35 €", duration: "ca. 45 min" },
      { id: "manicure-gellak", name: "Hybride manicure / gellak", price: "45 €", duration: "ca. 60 min" },
      { id: "nail-removal", name: "Verwijderen", price: "20 €", duration: "ca. 30 min" },
    ]},
    { id: "pedicure", label: "Pedicure", items: [
      { id: "pedi-classic", name: "Klassieke pedicure", price: "50 €", duration: "ca. 60 min" },
      { id: "pedi-gellak", name: "Pedicure + gellak", price: "60 €", duration: "ca. 75 min" },
      { id: "pedi-spa", name: "SPA / wellness pedicure", price: "70 €", duration: "ca. 75 min" },
      { id: "pedi-spa-gellak", name: "SPA pedicure + gellak", price: "75 €", duration: "ca. 90 min" },
    ]},
    { id: "wax", label: "Lycon waxing", items: [
      { id: "wax-lip", name: "Bovenlip", price: "10 €", duration: "ca. 15 min" },
      { id: "wax-brows", name: "Wenkbrauwen", price: "15 €", duration: "ca. 20 min" },
      { id: "wax-brows-tint", name: "Wenkbrauwen + henna", price: "25 €", duration: "ca. 30 min" },
      { id: "wax-underarms", name: "Oksels", price: "20 €", duration: "ca. 20 min" },
      { id: "wax-forearms", name: "Onderarmen", price: "25 €", duration: "ca. 30 min" },
      { id: "wax-lowerlegs", name: "Onderbenen", price: "30 €", duration: "ca. 30 min" },
      { id: "wax-legs", name: "Hele benen", price: "35 €", duration: "ca. 45 min" },
      { id: "wax-back", name: "Rug", price: "36 €", duration: "ca. 45 min" },
      { id: "wax-bikini", name: "Bikinilijn", price: "40 €", duration: "ca. 30 min" },
      { id: "wax-brazilian", name: "Brazilian bikini", price: "50 €", duration: "ca. 45 min" },
    ]},
    { id: "body", label: "Lichaamsbehandelingen", items: [
      { id: "dermomassage", name: "Vacuum dermomassage", price: "60 €", duration: "ca. 60 min" },
      { id: "cryo-abdomen", name: "Cryolipolyse — buik", price: "99 €", duration: "ca. 75 min" },
      { id: "cryo-waist", name: "Cryolipolyse — flanken / taille", price: "99 €", duration: "ca. 75 min" },
      { id: "cryo-outer-thigh", name: "Cryolipolyse — buitenkant dijen", price: "99 €", duration: "ca. 75 min" },
      { id: "cryo-inner-thigh", name: "Cryolipolyse — binnenkant dijen", price: "99 €", duration: "ca. 75 min" },
      { id: "cryo-arms", name: "Cryolipolyse — armen", price: "99 €", duration: "ca. 75 min" },
    ]},
    { id: "care", label: "Verzorgingsprogramma", items: [
      { id: "care-advice", name: "Ik wil een verzorgingsprogramma laten kiezen", price: "vanaf 69 €/maand", duration: "tijd voor het eerste bezoek spreken we af" },
    ]},
    { id: "advice", label: "Consult / ik weet het nog niet", items: [
      { id: "general-advice", name: "Ik weet het nog niet — graag consult en advies", price: "in overleg", duration: "in overleg" },
    ]},
  ],
};

const openingHours = {
  pl: [
    ["Poniedziałek", "09:00–16:00"],
    ["Wtorek", "09:00–17:00"],
    ["Środa", "09:00–16:00"],
    ["Czwartek", "09:00–17:00"],
    ["Piątek", "09:00–16:00"],
    ["Sobota", "co druga • 09:00–15:00"],
    ["Niedziela", "nieczynne"],
  ],
  en: [
    ["Monday", "09:00–16:00"],
    ["Tuesday", "09:00–17:00"],
    ["Wednesday", "09:00–16:00"],
    ["Thursday", "09:00–17:00"],
    ["Friday", "09:00–16:00"],
    ["Saturday", "every other • 09:00–15:00"],
    ["Sunday", "closed"],
  ],
  nl: [
    ["Maandag", "09:00–16:00"],
    ["Dinsdag", "09:00–17:00"],
    ["Woensdag", "09:00–16:00"],
    ["Donderdag", "09:00–17:00"],
    ["Vrijdag", "09:00–16:00"],
    ["Zaterdag", "om de week • 09:00–15:00"],
    ["Zondag", "gesloten"],
  ],
};

function ContactPage({ t, lang }) {
  const copy = bookingCopy[lang] || bookingCopy.nl;
  const instagramUrl = "https://www.instagram.com/nagelsvoorjouenbeauty";
  const whatsappNumber = "31682224999";
  const whatsappDisplay = "+31 6 82224999";
  const email = "elviglow47@gmail.com";
  const [category, setCategory] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [firstVisit, setFirstVisit] = useState(false);
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  const serviceGroups = bookingServices[lang] || bookingServices.nl;
  const selectedCategory = serviceGroups.find((group) => group.id === category) || null;
  const selectedService = selectedCategory?.items.find((item) => item.id === serviceId) || null;

  const now = new Date();
  const minDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const chosenDate = date ? new Date(`${date}T12:00:00`) : null;
  const dayIndex = chosenDate ? chosenDate.getDay() : null;
  const isClosed = dayIndex === 0;
  const isSaturday = dayIndex === 6;
  const maxHourByDay = { 1: 16, 2: 17, 3: 16, 4: 17, 5: 16, 6: 15 };
  const maxHour = dayIndex == null ? null : maxHourByDay[dayIndex];
  const timeSlots = [];

  if (maxHour != null) {
    for (let hour = 9; hour <= maxHour; hour += 1) {
      timeSlots.push(`${String(hour).padStart(2, "0")}:00`);
      if (hour < maxHour) timeSlots.push(`${String(hour).padStart(2, "0")}:30`);
    }
  }

  const formattedDate = chosenDate
    ? new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : lang === "nl" ? "nl-NL" : "en-GB", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" }).format(chosenDate)
    : "—";

  const messageLines = [
    copy.messageIntro,
    `${copy.messageService}: ${selectedService?.name || "—"}`,
    `${copy.messagePrice}: ${selectedService?.price || "—"}`,
    `${copy.messageDuration}: ${selectedService?.duration || "—"}`,
    `${copy.messageDate}: ${formattedDate}`,
    `${copy.messageTime}: ${time || "—"}`,
    `${copy.messageFirst}: ${firstVisit ? copy.yes : copy.no}`,
  ];
  if (note.trim()) messageLines.push(`${copy.messageNote}: ${note.trim()}`);
  const message = messageLines.join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const canSend = Boolean(category && selectedService && date && time && !isClosed);

  function handleDateChange(value) {
    setDate(value);
    setTime("");
    setCopied(false);
  }

  function openInstagram() {
    window.open(instagramUrl, "_blank", "noopener,noreferrer");
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(message).then(() => setCopied(true)).catch(() => setCopied(false));
    }
  }

  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} text={copy.lead} />

      <section className="section booking-layout">
        <article className="booking-card">
          <div className="booking-card-head">
            <div>
              <p className="eyebrow">ElviGlow</p>
              <h2>{copy.formTitle}</h2>
              <p>{copy.formText}</p>
            </div>
            <span className="booking-channel-badge">WhatsApp + Instagram</span>
          </div>

          <div className="booking-form-grid">
            <label className="booking-field">
              <span>{copy.category}</span>
              <select value={category} onChange={(event) => { setCategory(event.target.value); setServiceId(""); setCopied(false); }}>
                <option value="">{copy.categoryPlaceholder}</option>
                {serviceGroups.map((group) => <option key={group.id} value={group.id}>{group.label}</option>)}
              </select>
            </label>

            <label className="booking-field">
              <span>{copy.service}</span>
              <select value={serviceId} disabled={!selectedCategory} onChange={(event) => { setServiceId(event.target.value); setCopied(false); }}>
                <option value="">{selectedCategory ? copy.service : copy.servicePlaceholder}</option>
                {selectedCategory?.items.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
              </select>
            </label>

            <label className="booking-field">
              <span>{copy.date}</span>
              <input type="date" min={minDate} value={date} onChange={(event) => handleDateChange(event.target.value)} />
            </label>

            <label className="booking-field">
              <span>{copy.time}</span>
              <select value={time} disabled={!date || isClosed} onChange={(event) => { setTime(event.target.value); setCopied(false); }}>
                <option value="">{date ? copy.time : copy.timePlaceholder}</option>
                {timeSlots.map((slot) => <option key={slot} value={slot}>{slot}</option>)}
              </select>
            </label>

            <label className="booking-check">
              <input type="checkbox" checked={firstVisit} onChange={(event) => { setFirstVisit(event.target.checked); setCopied(false); }} />
              <span>{copy.firstVisit}</span>
            </label>
          </div>

          {selectedService && (
            <p className="booking-info">
              <strong>{selectedService.name}</strong> • {copy.price}: <strong>{selectedService.price}</strong> • {copy.duration}: <strong>{selectedService.duration}</strong>
            </p>
          )}
          {!selectedService && <p className="booking-info subtle">{copy.selectionHelp}</p>}

          {date && isClosed && <p className="booking-alert">{copy.closed}</p>}
          {date && isSaturday && !isClosed && <p className="booking-info">{copy.saturday}</p>}
          {!date && <p className="booking-info subtle">{copy.chooseDate}</p>}

          <label className="booking-field booking-field-full">
            <span>{copy.note}</span>
            <textarea rows="4" value={note} placeholder={copy.notePlaceholder} onChange={(event) => { setNote(event.target.value); setCopied(false); }} />
          </label>

          <div className="booking-preview">
            <span>{copy.preview}</span>
            <p>{message}</p>
          </div>

          <div className="booking-actions">
            <a className={`primary-btn booking-whatsapp ${!canSend ? "is-disabled" : ""}`} href={canSend ? whatsappUrl : undefined} target="_blank" rel="noreferrer" aria-disabled={!canSend}>
              {copy.whatsapp}
            </a>
            <button className="secondary-btn" type="button" disabled={!canSend} onClick={openInstagram}>{copy.instagram}</button>
          </div>
          {copied && <p className="booking-copied" role="status">{copy.copied}</p>}
        </article>

        <aside className="booking-side">
          <article className="booking-hours-card">
            <p className="eyebrow">Deventer</p>
            <h2>{copy.hoursTitle}</h2>
            <p>{copy.hoursLead}</p>
            <div className="booking-hours-list">
              {(openingHours[lang] || openingHours.nl).map(([day, hours]) => (
                <div key={day}><span>{day}</span><strong>{hours}</strong></div>
              ))}
            </div>
          </article>

          <article className="booking-contact-card">
            <p className="eyebrow">ElviGlow</p>
            <h3>{copy.channelsTitle}</h3>
            <p>{copy.channelsText}</p>
            <a className="booking-contact-link" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              <span>WA</span><div><small>{copy.phoneLabel}</small><strong>{whatsappDisplay}</strong></div>
            </a>
            <a className="booking-contact-link" href={instagramUrl} target="_blank" rel="noreferrer">
              <span>IG</span><div><small>Instagram</small><strong>@nagelsvoorjouenbeauty</strong></div>
            </a>
            <a className="booking-contact-link" href={`mailto:${email}`}>
              <span>✉</span><div><small>{copy.emailLabel}</small><strong>{email}</strong></div>
            </a>
          </article>
        </aside>
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
