export default function CtaStrip({ onNavigate, t }) {
  return (
    <section className="section cta-strip">
      <div>
        <p className="eyebrow">ElviGlow</p>
        <h2>{t.cta.title}</h2>
        <p>{t.cta.text}</p>
      </div>
      <div className="hero-actions">
        <button className="primary-btn" onClick={() => onNavigate("/akademia-skory")}>{t.cta.primary}</button>
        <button className="secondary-btn" onClick={() => onNavigate("/kontakt")}>{t.cta.secondary}</button>
      </div>
    </section>
  );
}
