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
    const lang = document.documentElement.lang || localStorage.getItem("elviglow-lang") || "nl";
    return ["pl","en","nl"].includes(lang) ? lang : "nl";
  }

  function ensureCard() {
    const side = document.querySelector(".booking-side");
    if (!side) return;

    const lang = currentLang();
    const t = copy[lang];
    let card = document.getElementById("elviglow-location-card");

    if (!card) {
      card = document.createElement("article");
      card.id = "elviglow-location-card";
      card.className = "elviglow-location-card";
      const hours = side.querySelector(".booking-hours-card");
      if (hours?.nextSibling) side.insertBefore(card, hours.nextSibling);
      else side.appendChild(card);
    }

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

  const observer = new MutationObserver(ensureCard);
  observer.observe(document.body, { childList: true, subtree: true });
  ensureCard();
})();
