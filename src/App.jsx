const treatments = [
  {
    category: "Oczyszczenie i świeży wygląd skóry",
    icon: "🌸",
    items: [
      { name: "Oxybrazja", price: "59 €", details: ["Oczyszczenie skóry", "Delikatne złuszczanie wodno-tlenowe", "Ukojenie i wykończenie pielęgnacyjne"], effect: "Delikatne odświeżenie, wygładzenie i oczyszczenie skóry bez mocnego podrażnienia.", passes: "" },
      { name: "Zabieg odświeżający z maską", price: "59 €", details: ["Oczyszczenie skóry", "Maska dobrana do potrzeb skóry", "Spokojne wykończenie zabiegu"], effect: "Dla skóry zmęczonej, suchej, poszarzałej lub potrzebującej lekkiego nawilżenia i ukojenia.", passes: "" },
      { name: "Oczyszczanie Glow", price: "69 €", details: ["Oczyszczanie skóry", "Praca nad porami i nierówną strukturą", "Maska lub wykończenie dobrane do skóry"], effect: "Dla skóry zanieczyszczonej, z rozszerzonymi porami, nierówną strukturą lub brakiem świeżości.", passes: "" },
      { name: "Oczyszczanie + oxybrazja", price: "79 €", details: ["Oczyszczanie skóry", "Oxybrazja", "Maska lub ukojenie po zabiegu"], effect: "Połączenie oczyszczenia i delikatnego złuszczenia dla gładszej, świeższej skóry.", passes: "" },
    ],
  },
  {
    category: "Nawilżenie, ampułki i lifting",
    icon: "💎",
    items: [
      { name: "Pielęgnacja z ampułką", price: "79 €", details: ["Oczyszczenie skóry", "Ampułka dobrana do aktualnych potrzeb", "Pielęgnacyjne wykończenie zabiegu"], effect: "Ampułka dobierana do potrzeb skóry: nawilżenie, ukojenie, rozświetlenie lub regeneracja.", passes: "" },
      { name: "Glow Therapy z ampułką i maską", price: "89 €", details: ["Oczyszczenie skóry", "Ampułka dobrana do potrzeb skóry", "Maska pielęgnacyjna"], effect: "Dla skóry suchej, szarej, zmęczonej lub pozbawionej blasku.", passes: "" },
      { name: "Intensywne nawilżenie skóry", price: "89 €", details: ["Oczyszczenie skóry", "Pielęgnacja nawilżająca", "Maska lub wykończenie dobrane do skóry"], effect: "Dla skóry napiętej, odwodnionej, przesuszonej lub osłabionej.", passes: "" },
      { name: "Pielęgnacja liftingująca", price: "95 €", details: ["Oczyszczenie skóry", "Pielęgnacja wspierająca napięcie", "Maska liftingująca"], effect: "Dla skóry, która traci jędrność, wygląda na zmęczoną lub potrzebuje poprawy napięcia.", passes: "" },
      { name: "Pielęgnacja liftingująca z ampułką", price: "109 €", details: ["Oczyszczenie skóry", "Ampułka liftingująca", "Maska liftingująca"], effect: "Mocniejszy zabieg pielęgnacyjny z dodatkowym wsparciem składników aktywnych.", passes: "" },
      { name: "Anti-Aging Glow Treatment", price: "119 €", details: ["Oczyszczenie skóry", "Pielęgnacja anti-aging", "Ampułka lub maska dobrana do skóry"], effect: "Dla skóry dojrzałej, zmęczonej, z utratą jędrności, drobnymi zmarszczkami lub nierównym kolorytem.", passes: "" },
    ],
  },
  {
    category: "Microneedling",
    icon: "✨",
    items: [
      { name: "Microneedling — twarz", price: "99 €", details: ["Przygotowanie skóry", "Microneedling z ampułką", "Maska łagodząca"], effect: "Regeneracja skóry, wygładzenie, rozświetlenie i poprawa struktury.", passes: "Pakiet 3 zabiegów: 279 € | Pakiet 5 zabiegów: 449 €" },
      { name: "Microneedling — twarz + szyja", price: "119 €", details: ["Przygotowanie skóry", "Microneedling twarzy i szyi z ampułką", "Maska łagodząca"], effect: "Intensywniejsza regeneracja i poprawa jakości skóry na twarzy oraz szyi.", passes: "Pakiet 3 zabiegów: 339 € | Pakiet 5 zabiegów: 549 €" },
      { name: "Microneedling — twarz + szyja + dekolt", price: "139 €", details: ["Przygotowanie skóry", "Microneedling twarzy, szyi i dekoltu z ampułką", "Maska łagodząca"], effect: "Głębsza regeneracja i poprawa jakości skóry na większym obszarze.", passes: "Pakiet 3 zabiegów: 399 € | Pakiet 5 zabiegów: 649 €" },
      { name: "Microneedling Anti-Aging / Regeneration", price: "149 €", details: ["Oczyszczenie i przygotowanie skóry", "Microneedling z ampułką regenerującą", "Maska łagodząca"], effect: "Zagęszczenie skóry, poprawa elastyczności i redukcja oznak starzenia.", passes: "Pakiet 3 zabiegów: 429 € | Pakiet 5 zabiegów: 699 €" },
    ],
  },
];

const memberships = [
  {
    name: "Cera w równowadze",
    price: "69 €/mies.",
    details: ["1 zabieg oczyszczający w miesiącu", "Gratis maska co druga wizyta"],
    effect: "Regularna pielęgnacja i utrzymanie skóry w dobrej kondycji.",
  },
  {
    name: "Pielęgnacja Premium",
    price: "129 €/mies.",
    details: ["2 zabiegi miesięcznie z zabiegów podstawowych", "Maseczka w płachcie do domu"],
    effect: "Systematyczne oczyszczanie i rozświetlenie cery.",
  },
  {
    name: "Regeneracja Pro",
    price: "229 €/mies.",
    details: ["1x microneedling w miesiącu", "1x zabieg pielęgnacyjny z ampułką", "15% rabatu na dodatkowy zabieg"],
    effect: "Intensywna regeneracja i widoczna poprawa jakości skóry.",
  },
];

const benefits = [
  "Indywidualne dobranie zabiegu do potrzeb skóry",
  "Rytuał relaksu, pielęgnacji i blasku",
  "Pakiety dla jednej osoby i dla dwóch osób",
  "Pakiety microneedlingu i programy regularnej pielęgnacji",
];

const faqs = [
  {
    q: "Dla kogo są zabiegi ElviGlow?",
    a: "Dla osób, które chcą zadbać o oczyszczenie, nawilżenie, rozświetlenie i świeższy wygląd skóry. Dobór zabiegu najlepiej ustalić po krótkiej konsultacji.",
  },
  {
    q: "Czy są dostępne pakiety?",
    a: "Tak. Pakiety są dostępne przy microneedlingu, a dermomasaż i kriolipoliza zostają z dotychczasowymi pakietami. Dobór serii najlepiej potwierdzić po konsultacji.",
  },
  {
    q: "Czy jest opcja dla dwóch osób?",
    a: "Tak. Pakiet Duet „Przyjaciółka” jest przygotowany dla dwóch osób i łączy pielęgnację z relaksującym rytuałem.",
  },
  {
    q: "Czy mogę zapytać o abonament?",
    a: "Tak. Dostępne są abonamenty miesięczne: Cera w równowadze, Pielęgnacja Premium oraz Regeneracja Pro.",
  },
];

function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function App() {
  return (
    <main className="site-shell">
      <nav className="navbar">
        <button className="brand" onClick={() => scrollToId("home")} aria-label="ElviGlow home">
          <img src="/elviglow-logo.png" alt="ElviGlow logo" />
          <span>ElviGlow</span>
        </button>

        <div className="nav-links">
          <button onClick={() => scrollToId("o-nas")}>O nas</button>
          <button onClick={() => scrollToId("zabiegi")}>Zabiegi</button>
          <button onClick={() => scrollToId("abonamenty")}>Abonamenty</button>
          <button onClick={() => scrollToId("kontakt")}>Kontakt</button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-text">
          <p className="eyebrow">Beauty • Wellness • Glow</p>
          <h1>Twoja chwila luksusu i blasku</h1>
          <p className="lead">
            ElviGlow to przestrzeń pielęgnacji twarzy, relaksu i świadomego dbania o skórę.
            Wybierz zabieg, który pomoże Ci poczuć świeżość, lekkość i naturalny glow.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => scrollToId("zabiegi")}>
              Zobacz ofertę
            </button>
            <button className="secondary-btn" onClick={() => scrollToId("kontakt")}>
              Umów wizytę
            </button>
          </div>

          <div className="mini-stats" aria-label="Najważniejsze informacje">
            <div>
              <strong>Glow</strong>
              <span>oczyszczenie i blask</span>
            </div>
            <div>
              <strong>Premium</strong>
              <span>ampułki i rytuały</span>
            </div>
            <div>
              <strong>Pro</strong>
              <span>microneedling</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="logo-frame">
            <img src="/elviglow-logo.png" alt="Logo ElviGlow" />
          </div>
          <div className="hero-note">
            <span>ElviGlow</span>
            <p>Twoja chwila luksusu i blasku</p>
          </div>
        </div>
      </section>

      <section className="section about" id="o-nas">
        <div className="section-heading">
          <p className="eyebrow">O salonie</p>
          <h2>Pielęgnacja, która ma być przyjemna, spokojna i regularna.</h2>
        </div>

        <div className="about-grid">
          <div className="glass-card wide">
            <h3>Filozofia ElviGlow</h3>
            <p>
              Nie chodzi tylko o pojedynczy zabieg. Chodzi o moment dla siebie:
              oczyszczenie, odżywienie, rozświetlenie i poczucie, że Twoja skóra dostała uwagę,
              której potrzebuje.
            </p>
          </div>

          {benefits.map((benefit) => (
            <div className="glass-card" key={benefit}>
              <span className="card-icon">✦</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section treatments" id="zabiegi">
        <div className="section-heading center">
          <p className="eyebrow">Oferta</p>
          <h2>Zabiegi twarzy ElviGlow</h2>
          <p>
            Wybierz delikatne odświeżenie, pielęgnację z ampułką albo intensywniejszą regenerację
            w formie microneedlingu.
          </p>
        </div>

        {treatments.map((group) => (
          <div className="treatment-group" key={group.category}>
            <div className="group-title">
              <span>{group.icon}</span>
              <h3>{group.category}</h3>
            </div>

            <div className="cards-grid">
              {group.items.map((item) => (
                <article className="treatment-card" key={item.name}>
                  <div className="card-top">
                    <h4>{item.name}</h4>
                    <strong>{item.price}</strong>
                  </div>

                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <p className="effect">
                    <span>Efekt:</span> {item.effect}
                  </p>

                  <p className="passes">{item.passes}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="section memberships" id="abonamenty">
        <div className="section-heading center">
          <p className="eyebrow">Regularna pielęgnacja</p>
          <h2>Abonamenty ElviGlow</h2>
          <p>
            Dla klientek, które chcą dbać o skórę systematycznie i mieć prosty plan pielęgnacji miesiąc po miesiącu.
          </p>
        </div>

        <div className="membership-grid">
          {memberships.map((membership) => (
            <article className="membership-card" key={membership.name}>
              <span className="membership-tag">Abonament</span>
              <h3>{membership.name}</h3>
              <strong>{membership.price}</strong>
              <ul>
                {membership.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <p>{membership.effect}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section visual-section">
        <div className="visual-copy">
          <p className="eyebrow">Cennik i kontakt</p>
          <h2>Wszystko w jednym miejscu</h2>
          <p>
            Na stronie możesz zostawić pełną ofertę, a grafiki z cennikiem i kontaktem wykorzystać jako
            dodatkowe materiały dla klientek.
          </p>
          <button className="primary-btn" onClick={() => scrollToId("kontakt")}>
            Przejdź do kontaktu
          </button>
        </div>

        <div className="visual-images">
          <img src="/elviglow-price-card.png" alt="Cennik pakietów ElviGlow" />
          <img src="/elviglow-contact-card.png" alt="Dane kontaktowe ElviGlow" />
        </div>
      </section>

      <section className="section faq">
        <div className="section-heading center">
          <p className="eyebrow">FAQ</p>
          <h2>Najczęstsze pytania</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section contact" id="kontakt">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h2>Umów swoją chwilę luksusu i blasku</h2>
            <p>
              Napisz wiadomość, zapytaj o dobranie zabiegu albo wybierz pakiet dla siebie.
              Dane kontaktowe możesz później podmienić w pliku <strong>src/App.jsx</strong>.
            </p>
          </div>

          <div className="contact-list">
            <a href="https://www.instagram.com/elviglow" target="_blank" rel="noreferrer">
              Instagram / Facebook: @ElviGlow
            </a>
            <a href="mailto:kontakt@elviglow.com">E-mail: kontakt@elviglow.com</a>
            <a href="tel:+31000000000">Telefon: +31 000 000 000</a>
            <span>Adres salonu: wpisz tutaj adres salonu</span>
          </div>
        </div>

        <p className="safe-note">
          Informacje na stronie mają charakter ofertowy. Dobór zabiegu warto potwierdzić podczas konsultacji,
          szczególnie przy skórze wrażliwej, podrażnieniach lub przeciwwskazaniach do zabiegów.
        </p>
      </section>
    </main>
  );
}

export default App;
