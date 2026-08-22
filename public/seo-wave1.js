(() => {
  const BASE = "https://elviglow.com";

  const polishSeo = {
    "/": {
      title: "ElviGlow Deventer | Kosmetyczka, zabiegi na twarz i beauty",
      description: "ElviGlow w Deventer: zabiegi na twarz, microneedling, oxybrazja, oczyszczanie, paznokcie, depilacja woskiem i zabiegi na ciało. Obsługa po polsku."
    },
    "/zabiegi": {
      title: "Zabiegi na twarz Deventer po polsku | ElviGlow",
      description: "Zabiegi na twarz w Deventer: oczyszczanie, oxybrazja, ampułki, maski, pielęgnacja liftingująca i microneedling. Dobór do aktualnych potrzeb skóry."
    },
    "/paznokcie": {
      title: "Paznokcie i pedicure Deventer po polsku | ElviGlow",
      description: "Manicure, hybryda / gellak, przedłużanie żelem lub akrylem oraz pedicure w Deventer. Obsługa po polsku w ElviGlow."
    },
    "/depilacja": {
      title: "Depilacja woskiem Deventer po polsku | ElviGlow",
      description: "Depilacja woskiem w Deventer dla kobiet: wąsik, brwi, pachy, przedramiona, łydki, nogi, plecy, bikini i Brazilian. Obsługa po polsku w ElviGlow."
    },
    "/cialo": {
      title: "Zabiegi na ciało Deventer po polsku | ElviGlow",
      description: "Dermomasaż vacuum i kriolipoliza w Deventer. Prosty wybór zabiegów, jasny cennik i obsługa po polsku w ElviGlow."
    },
    "/wiedza": {
      title: "Wiedza o skórze po polsku | ElviGlow Deventer",
      description: "Praktyczna wiedza o skórze po polsku: typy skóry, widoczne problemy, pielęgnacja domowa i świadomy dobór zabiegów w ElviGlow Deventer."
    },
    "/akademia-skory": {
      title: "Akademia skóry po polsku | ElviGlow Deventer",
      description: "Poznaj potrzeby swojej skóry: problem, możliwy mechanizm, cel pielęgnacji i kierunek zabiegów. Akademia skóry ElviGlow w Deventer po polsku."
    },
    "/cennik": {
      title: "Cennik ElviGlow Deventer po polsku | Zabiegi i beauty",
      description: "Aktualny cennik ElviGlow w Deventer: zabiegi na twarz, microneedling, paznokcie, pedicure, depilacja woskiem i zabiegi na ciało."
    },
    "/abonamenty": {
      title: "Programy pielęgnacji skóry | ElviGlow Deventer",
      description: "Regularne programy pielęgnacji skóry w ElviGlow Deventer dla osób, które wolą przemyślany plan zamiast przypadkowych pojedynczych zabiegów."
    },
    "/kontakt": {
      title: "Kontakt i rezerwacja po polsku | ElviGlow Deventer",
      description: "Umów wizytę w ElviGlow Deventer po polsku. Rezerwacje zabiegów na twarz, paznokci, depilacji woskiem i zabiegów na ciało przez WhatsApp lub Instagram."
    }
  };

  const dutchWaxSeo = {
    title: "Waxen Deventer | Waxbehandelingen & prijzen | ElviGlow",
    description: "Waxen in Deventer voor vrouwen: bovenlip, wenkbrauwen, oksels, armen, benen, rug, bikini en Brazilian. Bekijk zones, voorbereiding en prijzen bij ElviGlow."
  };

  const localLinks = {
    nl: {
      title: "Populaire behandelingen in Deventer",
      text: "Ga direct naar de behandeling of lokale informatie die je zoekt.",
      items: [
        ["/gezichtsbehandeling-deventer", "Gezichtsbehandeling Deventer"],
        ["/huidverbetering-deventer", "Huidverbetering Deventer"],
        ["/microneedling-deventer", "Microneedling Deventer"],
        ["/oxybrasie-deventer", "Oxybrasie Deventer"],
        ["/waterstofreiniging-deventer", "Waterstofreiniging Deventer"],
        ["/nagels-deventer", "Nagels Deventer"],
        ["/depilacja", "Waxen Deventer"],
        ["/lycon-waxing-deventer", "Lycon waxing Deventer"]
      ]
    },
    pl: {
      title: "Popularne usługi ElviGlow w Deventer",
      text: "Przejdź bezpośrednio do usługi lub informacji lokalnej, której szukasz.",
      items: [
        ["/pl/gezichtsbehandeling-deventer", "Zabiegi na twarz Deventer"],
        ["/pl/huidverbetering-deventer", "Pielęgnacja skóry Deventer"],
        ["/pl/microneedling-deventer", "Microneedling Deventer"],
        ["/pl/oxybrazja-deventer", "Oxybrazja Deventer"],
        ["/pl/oczyszczanie-wodorowe-deventer", "Oczyszczanie wodorowe Deventer"],
        ["/pl/nagels-deventer", "Paznokcie Deventer"],
        ["/depilacja", "Depilacja woskiem Deventer"],
        ["/pl/lycon-waxing-deventer", "Depilacja Lycon Deventer"]
      ]
    },
    en: {
      title: "Popular ElviGlow services in Deventer",
      text: "Go directly to the treatment or local information you are looking for.",
      items: [
        ["/en/gezichtsbehandeling-deventer", "Facial treatments Deventer"],
        ["/en/huidverbetering-deventer", "Skin improvement Deventer"],
        ["/en/microneedling-deventer", "Microneedling Deventer"],
        ["/en/nagels-deventer", "Nails Deventer"],
        ["/depilacja", "Waxing Deventer"],
        ["/en/lycon-waxing-deventer", "Lycon waxing Deventer"]
      ]
    }
  };

  const waxKnowledgeLinks = {
    nl: {
      title: "Meer over waxen in Deventer",
      text: "Twijfel je tussen bikinilijn en Brazilian, of is dit je eerste waxafspraak? Deze uitleg helpt je kiezen en voorbereiden.",
      items: [
        ["/kennis/brazilian-wax-voorbereiden", "Brazilian wax: voorbereiding"],
        ["/kennis/bikinilijn-of-brazilian-wax", "Bikinilijn of Brazilian wax"],
        ["/kennis/waxen-eerste-keer", "Eerste keer waxen"],
        ["/kennis/hoe-lang-glad-na-waxen", "Hoe lang blijft de huid glad?"]
      ]
    },
    pl: {
      title: "Więcej o depilacji woskiem w Deventer",
      text: "Jeśli wybierasz między bikini i Brazilian albo to Twoja pierwsza depilacja, te materiały pomogą przygotować się do wizyty.",
      items: [
        ["/pl/wiedza/brazilian-wax-jak-sie-przygotowac", "Brazilian wax: jak się przygotować"],
        ["/pl/wiedza/bikini-czy-brazilian-wax", "Bikini czy Brazilian wax"],
        ["/pl/wiedza/depilacja-woskiem-pierwszy-raz", "Depilacja woskiem pierwszy raz"],
        ["/pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem", "Jak długo skóra pozostaje gładka?"]
      ]
    }
  };

  function cleanPath() {
    return window.location.pathname.replace(/\/$/, "") || "/";
  }

  function currentLang() {
    const lang = (document.documentElement.lang || "nl").toLowerCase().slice(0, 2);
    return ["pl", "en", "nl"].includes(lang) ? lang : "nl";
  }

  function setMeta(selector, attr, value) {
    const node = document.head.querySelector(selector);
    if (node && node.getAttribute(attr) !== value) node.setAttribute(attr, value);
  }

  function setText(node, value) {
    if (node && node.textContent !== value) node.textContent = value;
  }

  function applyMetadata() {
    const path = cleanPath();
    const lang = currentLang();
    const seo = lang === "pl" ? polishSeo[path] : (lang === "nl" && path === "/depilacja" ? dutchWaxSeo : null);
    if (!seo) return;

    if (document.title !== seo.title) document.title = seo.title;
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);

    const url = `${BASE}${path === "/" ? "/" : path}`;
    setMeta('meta[property="og:url"]', "content", url);
  }

  function ensureStyle() {
    if (document.getElementById("seo-wave1-style")) return;
    const style = document.createElement("style");
    style.id = "seo-wave1-style";
    style.textContent = `
      .seo-wave1-home-links,.seo-wave1-wax-links{padding-top:12px}.seo-wave1-link-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px;max-width:1100px;margin:24px auto 0}.seo-wave1-link-grid a{display:flex;align-items:center;justify-content:center;min-height:54px;padding:12px 16px;border:1px solid rgba(80,58,48,.16);border-radius:16px;text-decoration:none;color:inherit;background:rgba(255,255,255,.7);font-weight:700;text-align:center}.seo-wave1-link-grid a:hover{transform:translateY(-1px)}
    `;
    document.head.appendChild(style);
  }

  function ensureHomeLinks() {
    const existing = document.querySelector("[data-seo-wave1-home-links]");
    if (cleanPath() !== "/") {
      existing?.remove();
      return;
    }
    if (existing) return;

    const target = document.querySelector(".home-service-section");
    if (!target) return;

    const lang = currentLang();
    const copy = localLinks[lang] || localLinks.nl;
    const section = document.createElement("section");
    section.className = "section seo-wave1-home-links";
    section.setAttribute("data-seo-wave1-home-links", "");
    section.innerHTML = `
      <div class="section-heading center">
        <p class="eyebrow">ElviGlow • Deventer</p>
        <h2>${copy.title}</h2>
        <p>${copy.text}</p>
      </div>
      <nav class="seo-wave1-link-grid" aria-label="ElviGlow Deventer">
        ${copy.items.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
    `;
    target.insertAdjacentElement("afterend", section);
  }

  function ensureWaxIntent() {
    const path = cleanPath();
    const lang = currentLang();
    const oldLink = document.querySelector("[data-seo-wave1-lycon-link]");
    const oldKnowledge = document.querySelector("[data-seo-wave1-wax-links]");
    oldLink?.remove();

    if (path !== "/depilacja") {
      oldKnowledge?.remove();
      return;
    }

    const hero = document.querySelector(".page-hero");
    if (!hero) return;

    if (lang === "nl") {
      setText(hero.querySelector(".eyebrow"), "Waxen • Deventer");
      setText(hero.querySelector("h1"), "Waxen in Deventer: zones, prijzen en voorbereiding");
      setText(hero.querySelector(".lead"), "Van bovenlip en wenkbrauwen tot benen, bikini en Brazilian: kies de waxzone die bij je afspraak past. Voor informatie over LYCON is er een aparte merkpagina.");
    } else if (lang === "pl") {
      setText(hero.querySelector(".eyebrow"), "Depilacja woskiem • Deventer");
      setText(hero.querySelector("h1"), "Depilacja woskiem w Deventer");
      setText(hero.querySelector(".lead"), "Depilacja woskiem dla kobiet: wąsik, brwi, pachy, przedramiona, nogi, plecy, bikini i Brazilian. Osobna strona opisuje depilację wykonywaną produktami LYCON.");
    }

    if (!oldKnowledge && waxKnowledgeLinks[lang]) {
      const copy = waxKnowledgeLinks[lang];
      const section = document.createElement("section");
      section.className = "section seo-wave1-wax-links";
      section.setAttribute("data-seo-wave1-wax-links", "");
      section.innerHTML = `
        <div class="section-heading center">
          <p class="eyebrow">ElviGlow • Deventer</p>
          <h2>${copy.title}</h2>
          <p>${copy.text}</p>
        </div>
        <nav class="seo-wave1-link-grid" aria-label="Waxen Deventer informatie">
          ${copy.items.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
        </nav>
      `;
      const insertAfter = document.querySelector(".page-hero");
      insertAfter?.insertAdjacentElement("afterend", section);
    }
  }

  let scheduled = false;
  function applyAll() {
    scheduled = false;
    ensureStyle();
    applyMetadata();
    ensureHomeLinks();
    ensureWaxIntent();
  }

  function scheduleApply() {
    if (scheduled) return;
    scheduled = true;
    window.setTimeout(applyAll, 0);
  }

  const observer = new MutationObserver(scheduleApply);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  observer.observe(document.head, { childList: true, subtree: true, attributes: true, characterData: true });
  observer.observe(document.body, { childList: true, subtree: true });

  ["pushState", "replaceState"].forEach((method) => {
    const original = history[method];
    history[method] = function (...args) {
      const result = original.apply(this, args);
      scheduleApply();
      return result;
    };
  });
  window.addEventListener("popstate", scheduleApply);
  window.addEventListener("load", scheduleApply);
  scheduleApply();
})();