(() => {
  const groupIds = ["knowledge-nagels", "knowledge-paznokcie", "knowledge-nails"];
  let scheduled = false;

  function applyOrder() {
    scheduled = false;
    const hub = document.querySelector("[data-knowledge-hub]");
    if (!hub) return;

    const groups = hub.querySelector(".knowledge-hub-groups");
    const jump = hub.querySelector(".knowledge-hub-jump");
    const group = groupIds.map((id) => document.getElementById(id)).find(Boolean);
    if (!groups || !group) return;

    if (groups.lastElementChild !== group) groups.appendChild(group);

    if (jump) {
      const link = jump.querySelector(`a[href="#${group.id}"]`);
      if (link && jump.lastElementChild !== link) jump.appendChild(link);
    }
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(applyOrder);
  }

  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("load", schedule);
  window.addEventListener("popstate", schedule);
  document.addEventListener("click", schedule);
  schedule();
})();
