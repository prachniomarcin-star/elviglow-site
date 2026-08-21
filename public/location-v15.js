(() => {
  const MAP_URL = "https://www.google.com/maps/search/?api=1&query=ElviGlow%20Jan%20Wansinkstraat%2059%207415%20PB";
  const copy = {
    pl: {
      title: "Adres wizyty",
      line1: "Jan Wansinkstraat 59",
      line2: "7415 PB Deventer",
      note: "Wizyty wyłącznie po wcześniejszym umówieniu.",
      map: "Otwórz ElviGlow w Google Maps"
    },
    en: {
      title: "Visit address",
      line1: "Jan Wansinkstraat 59",
      line2: "7415 PB Deventer",
      note: "By appointment only.",
      map: "Open ElviGlow in Google Maps"
    },
    nl: {
      title: "Bezoekadres",
      line1: "Jan Wansinkstraat 59",
      line2: "7415 PB Deventer",
      note: "Alleen op afspraak.",
      map: "Open ElviGlow in Google Maps"
    }
  };

  function currentLang() {
    const stored = localStorage.getItem("elviglow-lang");
    if (["pl", "en", "nl"].includes(stored)) return stored;

    const documentLang = (document.documentElement.lang || "").slice(0, 2).toLowerCase();
    if (["pl", "en", "nl"].includes(documentLang)) return documentLang;

    return "nl";
  }

  function renderCard(card, lang) {
    const t = copy[lang] || copy.nl;
    card.dataset.lang = lang;
    card.innerHTML = `
      <div class="location-head">
        <span class="location-icon" aria-hidden="true">⌖</span>
        <div>
          <h3>${t.title}</h3>
          <address>${t.line1}<br>${t.line2}</address>
          <p class="location-note">${t.note}</p>
        </div>
      </div>
      <a class="location-map-link" href="${MAP_URL}" target="_blank" rel="noreferrer">
        ${t.map} ↗
      </a>
    `;
  }

  function ensureCard() {
    const side = document.querySelector(".booking-side");
    if (!side) return;

    const lang = currentLang();
    let card = document.getElementById("elviglow-location-card");

    // If the card is already correct, do not touch the DOM.
    if (card && card.dataset.lang === lang) return;

    if (!card) {
      card = document.createElement("article");
      card.id = "elviglow-location-card";
      card.className = "elviglow-location-card";

      const hours = side.querySelector(".booking-hours-card");
      if (hours?.nextSibling) side.insertBefore(card, hours.nextSibling);
      else side.appendChild(card);
    }

    renderCard(card, lang);
  }

  let scheduled = false;
  function scheduleEnsureCard() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      ensureCard();
    });
  }

  const observer = new MutationObserver(scheduleEnsureCard);
  observer.observe(document.body, { childList: true, subtree: true });

  window.addEventListener("storage", scheduleEnsureCard);
  scheduleEnsureCard();
})();
