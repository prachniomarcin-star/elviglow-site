export default function OfferCard({ item, t }) {
  return (
    <article className="offer-card">
      <div className="offer-topline">
        <div>
          <h3>{item.name}</h3>
          <p className="offer-tags">{item.tags?.join(" • ")}</p>
        </div>
        <strong>{item.price}</strong>
      </div>

      <div className="offer-block">
        <span>{t.common.included}</span>
        <ul>
          {item.includes.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="offer-effect">
        <span>{t.common.effect}</span>
        <p>{item.effect}</p>
      </div>

      {item.passes && <p className="passes-line">{item.passes}</p>}
    </article>
  );
}
