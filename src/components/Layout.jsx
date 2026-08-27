import { useState } from "react";
import RouterLink from "./RouterLink";
import { LANGUAGES } from "../data/i18n";

const navKeys = [
  { key: "home", href: "/" },
  { key: "treatments", href: "/zabiegi" },
  { key: "nails", href: "/paznokcie" },
  { key: "waxing", href: "/depilacja" },
  { key: "body", href: "/cialo" },
  { key: "knowledge", href: "/wiedza" },
  { key: "academy", href: "/akademia-skory" },
  { key: "pricing", href: "/cennik" },
  { key: "contact", href: "/kontakt" },
];

const localSeoLinks = {
  pl: [
    ["/microneedling-deventer", "Microneedling Deventer"],
    ["/huidverbetering-deventer", "Pielęgnacja skóry Deventer"],
    ["/gezichtsbehandeling-deventer", "Zabiegi twarzy Deventer"],
    ["/nagels-deventer", "Paznokcie Deventer"],
    ["/lycon-waxing-deventer", "Lycon waxing Deventer"],
  ],
  en: [
    ["/microneedling-deventer", "Microneedling Deventer"],
    ["/huidverbetering-deventer", "Skin improvement Deventer"],
    ["/gezichtsbehandeling-deventer", "Facial treatments Deventer"],
    ["/nagels-deventer", "Nails Deventer"],
    ["/lycon-waxing-deventer", "Lycon waxing Deventer"],
  ],
  nl: [
    ["/microneedling-deventer", "Microneedling Deventer"],
    ["/huidverbetering-deventer", "Huidverbetering Deventer"],
    ["/gezichtsbehandeling-deventer", "Gezichtsbehandeling Deventer"],
    ["/nagels-deventer", "Nagels Deventer"],
    ["/lycon-waxing-deventer", "Lycon waxing Deventer"],
  ],
};

const mobileMainNav = navKeys.slice(0, 4);
const mobileMoreNav = navKeys.slice(4);

const studioSubtitles = {
  pl: "Prywatne studio domowe • jedna klientka na raz",
  en: "Private home studio • one client at a time",
  nl: "Privéstudio aan huis • één klant tegelijk",
};

export default function Layout({ children, currentPath, onNavigate, lang, setLang, t }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const activeLanguage = LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0];
  const isMoreActive = mobileMoreNav.some((item) => item.href === currentPath);
  const seoLinks = localSeoLinks[lang] || localSeoLinks.nl;
  const studioSubtitle = studioSubtitles[lang] || studioSubtitles.nl;

  function handleLanguageChange(code) {
    setLang(code);
    setIsLangOpen(false);
  }

  function handleNavigate(path) {
    setIsMoreOpen(false);
    onNavigate(path);
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand-row">
          <RouterLink href="/" className="brand" onNavigate={handleNavigate} aria-label="ElviGlow home">
            <img src="/elviglow-logo.webp" alt="ElviGlow" />
            <span>
              <strong>ElviGlow</strong>
              <small>{studioSubtitle}</small>
            </span>
          </RouterLink>

          <div className="top-actions">
            <div className="language-menu">
              <button
                type="button"
                className="language-trigger"
                aria-expanded={isLangOpen}
                onClick={() => {
                  setIsLangOpen((value) => !value);
                  setIsMoreOpen(false);
                }}
              >
                {activeLanguage.label}
                <span aria-hidden="true">⌄</span>
              </button>
              {isLangOpen && (
                <div className="language-options" role="menu">
                  {LANGUAGES.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      className={lang === item.code ? "active" : ""}
                      onClick={() => handleLanguageChange(item.code)}
                      role="menuitem"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <RouterLink href="/kontakt" className="nav-cta" onNavigate={handleNavigate}>
              {t.nav.book}
            </RouterLink>
          </div>
        </div>

        <nav className="nav-tabs desktop-nav" aria-label="Main navigation">
          {navKeys.map((item) => (
            <RouterLink
              key={item.href}
              href={item.href}
              onNavigate={handleNavigate}
              className={currentPath === item.href ? "active" : ""}
            >
              {t.nav[item.key]}
            </RouterLink>
          ))}
        </nav>

        <nav className="nav-tabs mobile-nav" aria-label="Main navigation">
          {mobileMainNav.map((item) => (
            <RouterLink
              key={item.href}
              href={item.href}
              onNavigate={handleNavigate}
              className={currentPath === item.href ? "active" : ""}
            >
              {t.nav[item.key]}
            </RouterLink>
          ))}

          <div className={`nav-more ${isMoreActive ? "active" : ""}`}>
            <button
              type="button"
              className="nav-more-trigger"
              aria-label="More pages"
              aria-expanded={isMoreOpen}
              onClick={() => {
                setIsMoreOpen((value) => !value);
                setIsLangOpen(false);
              }}
            >
              •••
            </button>
            {isMoreOpen && (
              <div className="nav-more-panel">
                {mobileMoreNav.map((item) => (
                  <RouterLink
                    key={item.href}
                    href={item.href}
                    onNavigate={handleNavigate}
                    className={currentPath === item.href ? "active" : ""}
                  >
                    {t.nav[item.key]}
                  </RouterLink>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {children}

      <footer className="footer footer-premium">
        <div className="footer-brand">
          <img src="/elviglow-logo.webp" alt="ElviGlow" />
          <div>
            <strong>ElviGlow</strong>
            <p>{studioSubtitle}</p>
            <small>Deventer • Skin • Beauty • Care</small>
          </div>
        </div>
        <div className="footer-links">
          <RouterLink href="/zabiegi" onNavigate={handleNavigate}>{t.nav.treatments}</RouterLink>
          <RouterLink href="/akademia-skory" onNavigate={handleNavigate}>{t.nav.academy}</RouterLink>
          <RouterLink href="/cennik" onNavigate={handleNavigate}>{t.nav.pricing}</RouterLink>
          <RouterLink href="/kontakt" onNavigate={handleNavigate}>{t.nav.contact}</RouterLink>
          {seoLinks.map(([href, label]) => (
            <a href={href} key={href}>{label}</a>
          ))}
          <a href="https://www.instagram.com/nagelsvoorjouenbeauty?igsh=N2hxdnRmaXZyYTJp" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </footer>

      <div className="mobile-booking-bar" aria-label="Quick actions">
        <RouterLink href="/akademia-skory" className="mobile-booking-secondary" onNavigate={handleNavigate}>
          {t.nav.academy}
        </RouterLink>
        <RouterLink href="/kontakt" className="mobile-booking-primary" onNavigate={handleNavigate}>
          {t.nav.book}
        </RouterLink>
      </div>
    </div>
  );
}
