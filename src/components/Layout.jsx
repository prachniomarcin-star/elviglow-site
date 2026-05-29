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

export default function Layout({ children, currentPath, onNavigate, lang, setLang, t }) {
  return (
    <div className="site-shell">
      <header className="topbar">
        <RouterLink href="/" className="brand" onNavigate={onNavigate} aria-label="ElviGlow home">
          <img src="/elviglow-logo.png" alt="ElviGlow" />
          <span>ElviGlow</span>
        </RouterLink>

        <nav className="nav-tabs" aria-label="Main navigation">
          {navKeys.map((item) => (
            <RouterLink
              key={item.href}
              href={item.href}
              onNavigate={onNavigate}
              className={currentPath === item.href ? "active" : ""}
            >
              {t.nav[item.key]}
            </RouterLink>
          ))}
        </nav>

        <div className="top-actions">
          <div className="language-switch" aria-label="Language switcher">
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                type="button"
                className={lang === item.code ? "active" : ""}
                onClick={() => setLang(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <RouterLink href="/kontakt" className="nav-cta" onNavigate={onNavigate}>
            {t.nav.book}
          </RouterLink>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div>
          <img src="/elviglow-logo.png" alt="ElviGlow" />
          <p>{t.home.cardSubtitle}</p>
        </div>
        <div className="footer-links">
          {navKeys.map((item) => (
            <RouterLink key={item.href} href={item.href} onNavigate={onNavigate}>
              {t.nav[item.key]}
            </RouterLink>
          ))}
        </div>
      </footer>
    </div>
  );
}
