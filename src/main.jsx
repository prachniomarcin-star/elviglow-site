import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import OfferCard from "./components/OfferCard";
import CtaStrip from "./components/CtaStrip";
import ElviSkinMiniMap from "./components/ElviSkinMiniMap";
import { translations } from "./data/i18n";
import "./index.css";

const allowedPaths = ["/", "/zabiegi", "/paznokcie", "/wiedza", "/akademia-skory", "/cennik", "/abonamenty", "/kontakt"];

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

function DecisionCta({ eyebrow = "ElviGlow", title, text, primaryLabel, primaryHref, secondaryLabel, secondaryHref, onNavigate }) {
  return (
    <section className="section decision-cta-panel">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="hero-actions">
        <button className="primary-btn" onClick={() => onNavigate(primaryHref)}>{primaryLabel}</button>
        <button className="secondary-btn" onClick={() => onNavigate(secondaryHref)}>{secondaryLabel}</button>
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
            <button className="secondary-btn" onClick={() => onNavigate("/wiedza")}>{t.nav.knowledge}</button>
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
        <div className="hero-actions centered-actions single-centered-action">
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
      <PageHero eyebrow={t.treatments.eyebrow} title={t.treatments.title} text={t.treatments.lead}>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/wiedza")}>{t.nav.knowledge}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/akademia-skory")}>{t.nav.academy}</button>
        </div>
      </PageHero>

      <section className="section treatment-flow-section">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.treatments.processTitle}</h2>
          <p>{t.treatments.processLead}</p>
        </div>
        <div className="process-grid">
          {t.treatments.processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
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

      <section className="section treatment-rituals-section">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.treatments.ritualsTitle}</h2>
          <p>{t.treatments.ritualsLead}</p>
        </div>
        <div className="ritual-grid">
          {t.treatments.ritualCards.map((card) => (
            <article className="ritual-card" key={card.title}>
              <p className="small-label">{card.label}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section rules-box treatment-safety-box">
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.treatments.safetyTitle}</h2>
        </div>
        <ul>{t.treatments.safetyList.map((rule) => <li key={rule}>{rule}</li>)}</ul>
      </section>

      <DecisionCta
        title={t.treatments.finalTitle}
        text={t.treatments.finalText}
        primaryLabel={t.nav.knowledge}
        primaryHref="/wiedza"
        secondaryLabel={t.nav.academy}
        secondaryHref="/akademia-skory"
        onNavigate={onNavigate}
      />
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

function KnowledgePage({ t, onNavigate }) {
  const knowledge = t.knowledge;
  return (
    <>
      <PageHero eyebrow={knowledge.eyebrow} title={knowledge.title} text={knowledge.lead}>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/akademia-skory")}>{t.nav.academy}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/zabiegi")}>{t.nav.treatments}</button>
        </div>
      </PageHero>

      <section className="section knowledge-intro-grid">
        <article className="knowledge-large-card">
          <p className="eyebrow">{knowledge.typesEyebrow}</p>
          <h2>{knowledge.typesTitle}</h2>
          <p>{knowledge.typesLead}</p>
        </article>
        <div className="knowledge-note-card">
          <h3>{knowledge.noteTitle}</h3>
          <p>{knowledge.noteText}</p>
        </div>
      </section>

      <section className="section skin-type-grid">
        {knowledge.skinTypes.map((type) => (
          <article className="skin-type-card" key={type.title}>
            <span className="card-mark">✦</span>
            <h3>{type.title}</h3>
            <p><strong>{knowledge.labels.see}</strong> {type.see}</p>
            <p><strong>{knowledge.labels.needs}</strong> {type.needs}</p>
            <p><strong>{knowledge.labels.avoid}</strong> {type.avoid}</p>
          </article>
        ))}
      </section>

      <section className="section skin-signals-section">
        <div className="section-heading center">
          <p className="eyebrow">ElviGlow</p>
          <h2>{knowledge.signalsTitle}</h2>
          <p>{knowledge.signalsLead}</p>
        </div>
        <div className="signal-grid">
          {knowledge.signals.map((signal) => (
            <article className="signal-card" key={signal.title}>
              <h3>{signal.title}</h3>
              <p>{signal.text}</p>
              <span>{signal.direction}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section age-section knowledge-age-section">
        <div className="section-heading center">
          <p className="eyebrow">{knowledge.ageEyebrow}</p>
          <h2>{knowledge.ageTitle}</h2>
          <p>{knowledge.ageLead}</p>
        </div>
        <div className="age-timeline">
          {knowledge.ageGuide.map((item) => (
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

      <DecisionCta
        title={knowledge.finalTitle}
        text={knowledge.finalText}
        primaryLabel={t.nav.academy}
        primaryHref="/akademia-skory"
        secondaryLabel={t.nav.treatments}
        secondaryHref="/zabiegi"
        onNavigate={onNavigate}
      />
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
      </section>
    </>
  );
}

function AcademyPage({ t, onNavigate, lang }) {
  return (
    <>
      <PageHero eyebrow={t.academy.eyebrow} title={t.academy.title} text={t.academy.lead}>
        <div className="hero-actions">
          <button className="primary-btn" onClick={() => onNavigate("/wiedza")}>{t.nav.knowledge}</button>
          <button className="secondary-btn" onClick={() => onNavigate("/cennik")}>{t.common.seePricing}</button>
        </div>
      </PageHero>

      <section className="section card-grid-3 academy-focus-grid">
        {t.academy.focusCards.map((card) => (
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

      <section className="section rules-box academy-rules-box">
        <div>
          <p className="eyebrow">{t.academy.safetyEyebrow || "ElviGlow"}</p>
          <h2>{t.common.notDiagnosis}</h2>
        </div>
        <ul>{t.academy.safety.map((rule) => <li key={rule}>{rule}</li>)}</ul>
      </section>

      <DecisionCta
        title={t.academy.finalTitle}
        text={t.academy.finalText}
        primaryLabel={t.common.seePricing}
        primaryHref="/cennik"
        secondaryLabel={t.nav.contact}
        secondaryHref="/kontakt"
        onNavigate={onNavigate}
      />
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
  if (currentPath === "/wiedza") page = <KnowledgePage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/akademia-skory") page = <AcademyPage t={t} onNavigate={onNavigate} lang={lang} />;
  if (currentPath === "/cennik") page = <PricingPage t={t} />;
  if (currentPath === "/abonamenty") page = <MembershipsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/kontakt") page = <ContactPage t={t} />;

  return (
    <Layout currentPath={currentPath} onNavigate={onNavigate} lang={lang} setLang={setLang} t={t}>
      {page}
    </Layout>
  );
}

createRoot(document.getElementById("root")).render(<App />);
