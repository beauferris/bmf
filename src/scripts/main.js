document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('[data-module="bow-header"]');
  const toggleButton = document.getElementById("menu-toggle");
  const panel = document.getElementById("mobile-menu-panel");

  if (!header || !toggleButton || !panel) return;

  function setMenuOpen(open) {
    header.classList.toggle("bow-header--menu-open", open);
    panel.classList.toggle("bow-header__mobile-panel--open", open);
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    toggleButton.setAttribute("aria-expanded", open ? "true" : "false");
    toggleButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("bow-header__body-lock", open);
  }

  toggleButton.addEventListener("click", function () {
    setMenuOpen(!header.classList.contains("bow-header--menu-open"));
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("bow-header--menu-open")) {
      setMenuOpen(false);
    }
  });

  const desktopMq = window.matchMedia("(min-width: 769px)");
  function closeMenuIfDesktop() {
    if (desktopMq.matches && header.classList.contains("bow-header--menu-open")) {
      setMenuOpen(false);
    }
  }
  desktopMq.addEventListener("change", closeMenuIfDesktop);
  window.addEventListener("orientationchange", function () {
    requestAnimationFrame(closeMenuIfDesktop);
  });
});

/** Homepage hero: IKEA-style inset frame on scroll — uses overlay, not margin, so media stays full-bleed. */
document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".bow-hero-with-video");
  if (!hero) return;

  const insetClass = "bow-hero-with-video--scroll-inset";
  const thresholdPx = 24;
  let ticking = false;

  function syncInset() {
    ticking = false;
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    hero.classList.toggle(insetClass, y > thresholdPx);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(syncInset);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  syncInset();
});
