(() => {
  const missingEnglishHomeLinks = [
    ["/en/oxybrasion-deventer", "Oxybrasion Deventer"],
    ["/en/hydrogen-facial-cleansing-deventer", "Hydrogen facial cleansing Deventer"],
  ];

  function cleanPath() {
    return window.location.pathname.replace(/\/$/, "") || "/";
  }

  function isEnglish() {
    return (document.documentElement.lang || "").toLowerCase().slice(0, 2) === "en";
  }

  function render() {
    if (cleanPath() !== "/" || !isEnglish()) return;
    const nav = document.querySelector("[data-seo-wave1-home-links] .seo-wave1-link-grid");
    if (!nav) return;

    for (const [href, label] of missingEnglishHomeLinks) {
      if (nav.querySelector(`a[href="${href}"]`)) continue;
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      nav.appendChild(link);
    }
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
    const link = event.target.closest('[data-seo-wave1-home-links] a[href^="/en/"]');
    if (link) localStorage.setItem("elviglow-lang", "en");
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