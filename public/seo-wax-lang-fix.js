(() => {
  const copies = {
    nl: {
      title: "Meer over waxen in Deventer",
      text: "Twijfel je tussen bikinilijn en Brazilian, of is dit je eerste waxafspraak? Deze uitleg helpt je kiezen en voorbereiden.",
      aria: "Waxen Deventer informatie",
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
      aria: "Informacje o depilacji woskiem w Deventer",
      items: [
        ["/pl/wiedza/brazilian-wax-jak-sie-przygotowac", "Brazilian wax: jak się przygotować"],
        ["/pl/wiedza/bikini-czy-brazilian-wax", "Bikini czy Brazilian wax"],
        ["/pl/wiedza/depilacja-woskiem-pierwszy-raz", "Depilacja woskiem pierwszy raz"],
        ["/pl/wiedza/jak-dlugo-gladka-skora-po-depilacji-woskiem", "Jak długo skóra pozostaje gładka?"]
      ]
    },
    en: {
      title: "Learn more about waxing in Deventer",
      text: "Choosing between a bikini line and Brazilian wax, or booking for the first time? These guides help you prepare and know what to expect.",
      aria: "Waxing Deventer guides",
      items: [
        ["/en/knowledge/brazilian-wax-preparation", "Brazilian wax: how to prepare"],
        ["/en/knowledge/bikini-line-or-brazilian-wax", "Bikini line or Brazilian wax?"],
        ["/en/knowledge/first-time-waxing", "First time waxing"],
        ["/en/knowledge/how-long-does-waxing-last", "How long does waxing stay smooth?"]
      ]
    }
  };

  function path() {
    return window.location.pathname.replace(/\/$/, "") || "/";
  }

  function lang() {
    const value = (document.documentElement.lang || "nl").toLowerCase().slice(0, 2);
    return ["pl", "nl", "en"].includes(value) ? value : "nl";
  }

  function render() {
    if (path() !== "/depilacja") return;

    const current = lang();
    let section = document.querySelector("[data-seo-wave1-wax-links]");
    const copy = copies[current];
    if (!copy) return;

    if (!section) {
      const hero = document.querySelector(".page-hero");
      if (!hero) return;
      section = document.createElement("section");
      section.className = "section seo-wave1-wax-links";
      section.setAttribute("data-seo-wave1-wax-links", "");
      hero.insertAdjacentElement("afterend", section);
    }

    if (section.getAttribute("data-seo-wax-lang") === current) return;

    section.setAttribute("data-seo-wax-lang", current);
    section.innerHTML = `
      <div class="section-heading center">
        <p class="eyebrow">ElviGlow • Deventer</p>
        <h2>${copy.title}</h2>
        <p>${copy.text}</p>
      </div>
      <nav class="seo-wave1-link-grid" aria-label="${copy.aria}">
        ${copy.items.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
      </nav>
    `;
  }

  let queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    window.setTimeout(() => {
      queued = false;
      render();
    }, 0);
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-seo-wave1-wax-links] a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (href.startsWith("/pl/")) localStorage.setItem("elviglow-lang", "pl");
    else if (href.startsWith("/kennis/")) localStorage.setItem("elviglow-lang", "nl");
    else if (href.startsWith("/en/")) localStorage.setItem("elviglow-lang", "en");
  });

  const observer = new MutationObserver(schedule);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  observer.observe(document.body, { childList: true, subtree: true });

  ["pushState", "replaceState"].forEach((method) => {
    const original = history[method];
    history[method] = function (...args) {
      const result = original.apply(this, args);
      schedule();
      return result;
    };
  });

  window.addEventListener("popstate", schedule);
  window.addEventListener("load", schedule);
  schedule();
})();