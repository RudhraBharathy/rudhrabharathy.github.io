const scrollKey = (url: URL) => `rb-scroll:${url.pathname}${url.search}`;
const currentKey = scrollKey(new URL(window.location.href));
const restoreKey = "rb-scroll-return";

function saveScroll() {
  try {
    sessionStorage.setItem(currentKey, String(window.scrollY));
  } catch {}
}

document.addEventListener("click", (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const link =
    event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>("a[href]")
      : null;
  if (
    !link ||
    link.hasAttribute("download") ||
    (link.target && link.target !== "_self")
  ) {
    return;
  }

  const destination = new URL(link.href);
  if (destination.origin !== window.location.origin) return;

  saveScroll();
  try {
    sessionStorage.removeItem(restoreKey);
    if (link.hasAttribute("data-restore-scroll") && !destination.hash) {
      sessionStorage.setItem(restoreKey, scrollKey(destination));
    }
  } catch {}
});

window.addEventListener("pagehide", saveScroll);
window.addEventListener("pageshow", async (event) => {
  try {
    const destination = sessionStorage.getItem(restoreKey);
    sessionStorage.removeItem(restoreKey);
    const navigation = performance.getEntriesByType("navigation")[0] as
      PerformanceNavigationTiming | undefined;
    if (
      event.persisted ||
      navigation?.type !== "navigate" ||
      destination !== currentKey ||
      window.location.hash
    ) {
      return;
    }

    const saved = sessionStorage.getItem(currentKey);
    if (saved === null) return;
    const top = Number(saved);
    if (!Number.isFinite(top) || top < 0) return;

    await document.fonts.ready;
    window.scrollTo({ top, behavior: "instant" });
  } catch {}
});
