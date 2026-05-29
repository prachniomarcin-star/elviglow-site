import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import OfferCard from "./components/OfferCard";
import CtaStrip from "./components/CtaStrip";
import { translations } from "./data/i18n";
import "./index.css";

const allowedPaths = ["/", "/zabiegi", "/paznokcie", "/akademia-skory", "/abonamenty", "/kontakt"];

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

      <section className="section split-feature">
        <div className="image-frame soft">
          <img src="/elviglow-price-card.png" alt="ElviGlow price card" />
        </div>
        <div>
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.home.offerTitle}</h2>
          <p>{t.home.offerText}</p>
          <div className="hero-actions compact">
            <button className="primary-btn" onClick={() => onNavigate("/zabiegi")}>{t.nav.treatments}</button>
            <button className="secondary-btn" onClick={() => onNavigate("/paznokcie")}>{t.nav.nails}</button>
          </div>
        </div>
      </section>

      <CtaStrip onNavigate={onNavigate} t={t} />
    </>
  );
}

function TreatmentsPage({ t }) {
  const [activeGroup, setActiveGroup] = useState("facial");
  const groupItems = t.treatments.groups[activeGroup] || t.treatments.groups.facial;

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

      <section className="section tabs-page">
        <div className="inner-tabs" role="tablist" aria-label="Treatment categories">
          {Object.entries(t.treatments.tabs).map(([key, label]) => (
            <button
              key={key}
              className={activeGroup === key ? "active" : ""}
              onClick={() => setActiveGroup(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="category-intro">
          <p className="eyebrow">ElviGlow</p>
          <h2>{t.treatments.tabs[activeGroup]}</h2>
          <p>{t.treatments.intros[activeGroup]}</p>
        </div>

        <div className="offer-grid">
          {groupItems.map((item) => <OfferCard item={item} key={item.name} t={t} />)}
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

      <section className="section offer-grid nails-grid">
        {t.nails.services.map((service) => (
          <article className="offer-card nail-card" key={service.name}>
            <div className="offer-topline">
              <h3>{service.name}</h3>
              <strong>{service.price}</strong>
            </div>
            <p>{service.text}</p>
          </article>
        ))}
      </section>

      <CtaStrip onNavigate={onNavigate} t={t} />
    </>
  );
}

function SkinMapBuilder({ t }) {
  const b = t.academy.builder;
  const [age, setAge] = useState(1);
  const [problem, setProblem] = useState(0);
  const [rhythm, setRhythm] = useState(0);

  const result = useMemo(() => {
    const problemText = b.problemOptions[problem]?.toLowerCase() || "";
    const rhythmText = b.rhythmOptions[rhythm]?.toLowerCase() || "";

    if (rhythm >= 2 || rhythmText.includes("regular") || rhythmText.includes("regelmaat")) return b.results.membership;
    if (problem >= 2 || age >= 2 || problemText.includes("firm") || problemText.includes("jędr") || problemText.includes("stevig")) return b.results.micro;
    if (age >= 1 || problemText.includes("wrinkle") || problemText.includes("zmarszcz") || problemText.includes("lijntjes")) return b.results.premium;
    return b.results.glow;
  }, [age, problem, rhythm, b]);

  const selectors = [
    [b.ageLabel, b.ageOptions, age, setAge],
    [b.problemLabel, b.problemOptions, problem, setProblem],
    [b.rhythmLabel, b.rhythmOptions, rhythm, setRhythm],
  ];

  return (
    <div className="skin-builder">
      <div className="builder-copy">
        <p className="eyebrow">ElviGlow</p>
        <h2>{b.title}</h2>
        <p>{b.text}</p>
        <small>{t.common.notDiagnosis}</small>
      </div>
      <div className="builder-panel">
        {selectors.map(([label, options, value, setter]) => (
          <div className="choice-group" key={label}>
            <strong>{label}</strong>
            <div>
              {options.map((option, index) => (
                <button
                  key={option}
                  className={value === index ? "active" : ""}
                  onClick={() => setter(index)}
                  type="button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="builder-result">
          <span>{t.common.suggested}</span>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}

function AcademyPage({ t, onNavigate }) {
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

      <section className="section">
        <SkinMapBuilder t={t} />
      </section>

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

      <CtaStrip onNavigate={onNavigate} t={t} />
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
  const rows = [t.contact.address, t.contact.phone, t.contact.email, t.contact.social, t.contact.booking].filter(Boolean);
  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.lead} />
      <section className="section contact-layout">
        <div className="contact-panel">
          {rows.map((row) => <p key={row}>{row}</p>)}
          <div className="hero-actions">
            <a className="primary-btn" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="secondary-btn" href="mailto:kontakt@elviglow.com">E-mail</a>
          </div>
          <small>{t.contact.disclaimer}</small>
        </div>
        <div className="contact-card-big">
          <img src="/elviglow-contact-card.png" alt="ElviGlow contact card" />
        </div>
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
  if (currentPath === "/zabiegi") page = <TreatmentsPage t={t} />;
  if (currentPath === "/paznokcie") page = <NailsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/akademia-skory") page = <AcademyPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/abonamenty") page = <MembershipsPage t={t} onNavigate={onNavigate} />;
  if (currentPath === "/kontakt") page = <ContactPage t={t} />;

  return (
    <Layout currentPath={currentPath} onNavigate={onNavigate} lang={lang} setLang={setLang} t={t}>
      {page}
    </Layout>
  );
}

createRoot(document.getElementById("root")).render(<App />);
