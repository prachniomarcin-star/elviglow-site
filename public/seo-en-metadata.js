(() => {
  const BASE = "https://elviglow.com";

  const englishSeo = {
    "/": {
      title: "ElviGlow Deventer | Facial treatments, microneedling & beauty",
      description: "ElviGlow in Deventer: facial treatments, microneedling, oxybrasion, hydrogen facial cleansing, nails, waxing and body treatments. Choose by skin need first."
    },
    "/zabiegi": {
      title: "Facial Treatments Deventer | Skin care & microneedling | ElviGlow",
      description: "Facial treatments in Deventer including cleansing, oxybrasion, ampoules, masks, lifting care and microneedling, selected for the current skin condition."
    },
    "/paznokcie": {
      title: "Nails & Pedicure Deventer | Gellak, gel & acrylic | ElviGlow",
      description: "Manicure, gellak, gel or acrylic nail extensions and pedicure in Deventer. Clear prices and personal appointments at ElviGlow."
    },
    "/depilacja": {
      title: "Waxing Deventer | Bikini, Brazilian & body waxing | ElviGlow",
      description: "Waxing for women in Deventer: upper lip, eyebrows, underarms, arms, legs, back, bikini and Brazilian. View preparation, zones and prices at ElviGlow."
    },
    "/cialo": {
      title: "Body Treatments Deventer | Vacuum massage & cryolipolysis | ElviGlow",
      description: "Body treatments in Deventer including vacuum dermomassage and cryolipolysis. Clear treatment options, simple packages and one selected cryolipolysis area per visit."
    },
    "/wiedza": {
      title: "Skin & Waxing Knowledge | ElviGlow Deventer",
      description: "Practical skin and waxing guides in English: visible pores, dry skin, microneedling aftercare, Brazilian waxing, preparation and conscious treatment choices."
    },
    "/akademia-skory": {
      title: "Skin Academy | Understand your skin | ElviGlow Deventer",
      description: "Understand your skin through concerns, possible mechanisms, care goals and treatment directions. Explore the ElviGlow Skin Academy in Deventer."
    },
    "/cennik": {
      title: "ElviGlow Deventer Price List | Facials, nails, waxing & body",
      description: "Current ElviGlow prices in Deventer for facial treatments, microneedling, nails, pedicure, waxing, body treatments and regular skin-care programs."
    },
    "/abonamenty": {
      title: "Regular Skin Care Programs | ElviGlow Deventer",
      description: "Regular skin-care programs at ElviGlow Deventer for clients who prefer a structured plan instead of unrelated single treatments."
    },
    "/kontakt": {
      title: "Contact & Book an Appointment | ElviGlow Deventer",
      description: "Contact ElviGlow in Deventer to book facial treatments, microneedling, nails, waxing or body treatments. Appointments via WhatsApp or Instagram."
    }
  };

  function cleanPath() {
    return window.location.pathname.replace(/\/$/, "") || "/";
  }

  function isEnglish() {
    return (document.documentElement.lang || "").toLowerCase().slice(0, 2) === "en";
  }

  function upsertMeta(selector, attribute, value) {
    let node = document.head.querySelector(selector);
    if (!node) {
      node = document.createElement("meta");
      const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
      if (match) node.setAttribute(match[1], match[2]);
      document.head.appendChild(node);
    }
    if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
  }

  function applyEnglishMetadata() {
    if (!isEnglish()) return;
    const path = cleanPath();
    const seo = englishSeo[path];
    if (!seo) return;

    if (document.title !== seo.title) document.title = seo.title;
    upsertMeta('meta[name="description"]', "content", seo.description);
    upsertMeta('meta[property="og:title"]', "content", seo.title);
    upsertMeta('meta[property="og:description"]', "content", seo.description);
    upsertMeta('meta[name="twitter:title"]', "content", seo.title);
    upsertMeta('meta[name="twitter:description"]', "content", seo.description);

    const url = `${BASE}${path === "/" ? "/" : path}`;
    upsertMeta('meta[property="og:url"]', "content", url);
  }

  let queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    window.setTimeout(() => {
      queued = false;
      applyEnglishMetadata();
    }, 0);
  }

  const htmlObserver = new MutationObserver(schedule);
  htmlObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  const headObserver = new MutationObserver(schedule);
  headObserver.observe(document.head, { childList: true, subtree: true, attributes: true, attributeFilter: ["content"] });

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