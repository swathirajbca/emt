(() => {
  "use strict";

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reduceMotion = reduceMotionQuery.matches;
  const hero = document.getElementById("hero");
  const loader = document.getElementById("intro-loader");

  document.body.classList.add("is-loading");

  const beginInvitation = () => {
    hero?.classList.add("is-started");
    loader?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
    window.setTimeout(() => loader?.remove(), reduceMotion ? 0 : 800);
  };

  if (reduceMotion) {
    beginInvitation();
  } else {
    window.setTimeout(() => hero?.classList.add("is-started"), 2200);
    window.setTimeout(beginInvitation, 2500);
  }

  const revealElements = Array.from(document.querySelectorAll(".reveal"));
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const countdown = document.getElementById("countdown");
  const countdownFields = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  const updateCountdown = () => {
    if (!countdown) return;
    const target = new Date(countdown.dataset.target).getTime();
    const difference = Math.max(0, target - Date.now());
    const values = {
      days: Math.floor(difference / 86400000),
      hours: Math.floor((difference / 3600000) % 24),
      minutes: Math.floor((difference / 60000) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    Object.entries(values).forEach(([key, value]) => {
      if (countdownFields[key]) countdownFields[key].textContent = String(value).padStart(2, "0");
    });
    countdown.setAttribute(
      "aria-label",
      `${values.days} days, ${values.hours} hours, ${values.minutes} minutes and ${values.seconds} seconds until the wedding`,
    );
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  if (!reduceMotion) {
    const petalLayer = document.getElementById("petal-layer");
    const petalColors = ["#F4C2C2", "#F9E4C5", "#E8D399", "#FBEFE0", "#F6D6C6"];
    const fragment = document.createDocumentFragment();

    for (let index = 0; index < 12; index += 1) {
      const petal = document.createElement("span");
      const drift = (Math.random() - 0.5) * 120;
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.setProperty("--petal-size", `${10 + Math.random() * 14}px`);
      petal.style.setProperty("--petal-duration", `${12 + Math.random() * 11}s`);
      petal.style.setProperty("--petal-delay", `${Math.random() * 12}s`);
      petal.style.setProperty("--petal-drift", `${drift}px`);
      petal.style.setProperty("--petal-drift-end", `${drift * 0.4}px`);
      petal.style.setProperty("--petal-color", petalColors[index % petalColors.length]);
      fragment.appendChild(petal);
    }
    petalLayer?.appendChild(fragment);
  }

  if (!reduceMotion && hero) {
    const backdrop = hero.querySelector(".hero-backdrop");
    const content = hero.querySelector(".hero-content");
    let ticking = false;

    const applyParallax = () => {
      const heroHeight = Math.max(hero.offsetHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
      if (backdrop) backdrop.style.transform = `translate3d(0, ${progress * 18}%, 0) scale(${1 + progress * 0.08})`;
      if (content) {
        content.style.transform = `translate3d(0, ${progress * -10}%, 0)`;
        content.style.opacity = String(Math.max(0, 1 - progress * 1.35));
      }
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(applyParallax);
      },
      { passive: true },
    );
  }
})();
