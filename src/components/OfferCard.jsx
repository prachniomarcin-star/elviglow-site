export default function OfferCard({ item, t, onBook, bookLabel }) {
  return (
    <article className="offer-card">
      <div className="offer-topline">
        <div>
          <h3>{item.name}</h3>
          <p className="offer-tags">{item.tags?.join(" • ")}</p>
        </div>
        <div className="offer-price">
          <strong>{item.price}</strong>
          {item.duration && <small>{item.duration}</small>}
        </div>
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

      {onBook && (
        <button type="button" className="secondary-btn offer-book-btn" onClick={() => onBook(item.id)}>
          {bookLabel || t.common.bookVisit}
        </button>
      )}
    </article>
  );
}
