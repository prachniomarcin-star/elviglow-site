(() => {
  const tabIndex = { face: 0, care: 1, nails: 2, waxing: 3, body: 4 };
  let lastHandled = "";

  function cleanPath() {
    return window.location.pathname.replace(/\/$/, "") || "/";
  }

  function applyPricingHash() {
    if (cleanPath() !== "/cennik") {
      lastHandled = "";
      return;
    }

    const key = window.location.hash.replace(/^#/, "");
    if (!(key in tabIndex)) return;

    const tabs = document.querySelectorAll(".pricing-tabs button");
    const target = tabs[tabIndex[key]];
    if (!target) return;

    if (!target.classList.contains("active")) target.click();

    const signature = `${cleanPath()}#${key}`;
    if (lastHandled !== signature) {
      lastHandled = signature;
      window.requestAnimationFrame(() => {
        document.querySelector(".pricing-page")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  let queued = false;
  function schedule() {
    if (queued) return;
    queued = true;
    window.setTimeout(() => {
      queued = false;
      applyPricingHash();
    }, 0);
  }

  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });

  ["pushState", "replaceState"].forEach((method) => {
    const original = history[method];
    history[method] = function (...args) {
      const result = original.apply(this, args);
      schedule();
      return result;
    };
  });

  window.addEventListener("hashchange", () => {
    lastHandled = "";
    schedule();
  });
  window.addEventListener("popstate", schedule);
  window.addEventListener("load", schedule);
  schedule();
})();