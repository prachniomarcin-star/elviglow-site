import { useState } from "react";
import RouterLink from "./RouterLink";
import { LANGUAGES } from "../data/i18n";

const navKeys = [
  { key: "home", href: "/" },
  { key: "treatments", href: "/zabiegi" },
  { key: "nails", href: "/paznokcie" },
  { key: "pricing", href: "/cennik" },
  { key: "academy", href: "/akademia-skory" },
  { key: "contact", href: "/kontakt" },
];

const mobileMainNav = navKeys.slice(0, 4);
const mobileMoreNav = navKeys.slice(4);

export default function Layout({ children, currentPath, onNavigate, lang, setLang, t }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const activeLanguage = LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0];
  const isMoreActive = mobileMoreNav.some((item) => item.href === currentPath);

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
            <img src="/elviglow-logo.png" alt="ElviGlow" />
            <span>
              <strong>ElviGlow</strong>
              <small>{t.home.cardSubtitle}</small>
            </span>
          </RouterLink>

          <div className="top-actions">
            <div className="language-menu">
              <button
                type="button"
                className="language-trigger"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((value) => !value)}
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
              onClick={() => setIsMoreOpen((value) => !value)}
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

      <footer className="footer">
        <div>
          <img src="/elviglow-logo.png" alt="ElviGlow" />
          <p>{t.home.cardSubtitle}</p>
        </div>
        <div className="footer-links">
          {navKeys.map((item) => (
            <RouterLink key={item.href} href={item.href} onNavigate={handleNavigate}>
              {t.nav[item.key]}
            </RouterLink>
          ))}
        </div>
      </footer>
    </div>
  );
}
