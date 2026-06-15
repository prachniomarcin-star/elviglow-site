import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import OfferCard from "./components/OfferCard";
import CtaStrip from "./components/CtaStrip";
import ElviSkinMiniMap from "./components/ElviSkinMiniMap";
import { translations } from "./data/i18n";
import "./index.css";

const allowedPaths = ["/", "/zabiegi", "/paznokcie", "/depilacja", "/cialo", "/wiedza", "/cennik", "/akademia-skory", "/abonamenty", "/kontakt"];

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

function HomePage({ onNavigate, t }) {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="lead">{t.home.lead}</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => onNavigate("/zabiegi")}>{t.common.seeTreatments}</button>
            <button className="secondary-btn" onClick={() => onNavigate("/akademia-skory")}>{t.common.learnMore}</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="logo-card">
            <img src="/elviglow-logo.png" alt="Logo ElviGlow" />
          </div>
          <div className="floating-note">
            <span>{t.home.cardTitle}</span>
            <p>{t.home.cardSubtitle}</p>
          </div>
        </div>
      </section>

      <section className="section two-columns">
        <div>
          <p className="eyebrow">{t.home.philosophyEyebrow}</p>
          <h2>{t.home.philosophyTitle}</h2>
        </div>
        <div className="text-panel">
          <p>{t.home.philosophyText1}</p>
          <p>{t.home.philosophyText2}</p>
        </div>
      </section>

      <section className="section card-grid-3">
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
            <article className="glass-card" key={card.title}>
              <span className="card-mark">✦</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="hero-actions centered-actions">
          <button className="primary-btn" onClick={() => onNavigate("/zabiegi")}>{t.nav.treatments}</button>
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

function ContactPage({ t }) {
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

function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));
  const [lang, setLangState] = useState(() => localStorage.getItem("elviglow-lang") || "pl");
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

  let page = <HomePage onNavigate={onNavigate} t={t} />;
  if (currentPath === "/zabiegi") page = <TreatmentsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/paznokcie") page = <NailsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/depilacja") page = <WaxingPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/cialo") page = <BodyPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/wiedza") page = <KnowledgePage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/cennik") page = <PricingPage t={t} />;
  if (currentPath === "/akademia-skory") page = <AcademyPage t={t} onNavigate={onNavigate} lang={lang} />;
  if (currentPath === "/abonamenty") page = <MembershipsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/kontakt") page = <ContactPage t={t} />;

  return (
    <Layout currentPath={currentPath} onNavigate={onNavigate} lang={lang} setLang={setLang} t={t}>
      {page}
    </Layout>
  );
}

createRoot(document.getElementById("root")).render(<App />);
