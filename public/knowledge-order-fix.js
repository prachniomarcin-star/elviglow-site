(() => {
  function moveNailsLast() {
    if ((window.location.pathname.replace(/\/$/, "") || "/") !== "/wiedza") return;
    const groups = document.querySelector(".knowledge-hub-groups");
    if (!groups) return;
    const candidates = ["knowledge-paznokcie", "knowledge-nagels", "knowledge-nails"];
    const nailGroup = candidates.map(id => document.getElementById(id)).find(Boolean);
    if (nailGroup && groups.lastElementChild !== nailGroup) groups.appendChild(nailGroup);

    const jump = document.querySelector(".knowledge-hub-jump");
    if (jump) {
      const link = [...jump.querySelectorAll("a")].find(a => ["#knowledge-paznokcie", "#knowledge-nagels", "#knowledge-nails"].includes(a.getAttribute("href")));
      if (link && jump.lastElementChild !== link) jump.appendChild(link);
    }
  }

  const observer = new MutationObserver(() => moveNailsLast());
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("load", moveNailsLast);
  window.addEventListener("popstate", moveNailsLast);
  setTimeout(moveNailsLast, 0);
})();
