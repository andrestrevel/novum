(() => {
  const spanishCountries = new Set([
    "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC", "ES", "GQ",
    "GT", "HN", "MX", "NI", "PA", "PE", "PR", "PY", "SV", "UY", "VE"
  ]);
  let currentLanguage = "en";

  function countryFromTrace(trace) {
    const match = trace.match(/^loc=([A-Z]{2})$/m);
    return match ? match[1] : null;
  }

  async function detectLanguage() {
    const saved = localStorage.getItem("novum_language");
    if (saved === "en" || saved === "es") return saved;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 2200);
      const response = await fetch("/cdn-cgi/trace", {
        cache: "no-store",
        signal: controller.signal
      });
      clearTimeout(timeout);
      if (response.ok) {
        const country = countryFromTrace(await response.text());
        if (country) return spanishCountries.has(country) ? "es" : "en";
      }
    } catch (_) {
      // Browser-language fallback below.
    }

    const languages = navigator.languages || [navigator.language || "en"];
    return languages.some((language) => language.toLowerCase().startsWith("es")) ? "es" : "en";
  }

  function applyLanguage(language, persist = false) {
    currentLanguage = language === "es" ? "es" : "en";
    document.documentElement.lang = currentLanguage;
    document.documentElement.dataset.lang = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = element.dataset[currentLanguage];
      if (value !== undefined) element.innerHTML = value;
    });

    document.querySelectorAll("[data-placeholder-en]").forEach((element) => {
      element.placeholder = element.dataset[`placeholder${currentLanguage === "es" ? "Es" : "En"}`] || "";
    });

    document.querySelectorAll("[data-aria-en]").forEach((element) => {
      element.setAttribute("aria-label", element.dataset[`aria${currentLanguage === "es" ? "Es" : "En"}`] || "");
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (persist) localStorage.setItem("novum_language", currentLanguage);
    document.dispatchEvent(new CustomEvent("novum:languagechange", { detail: { language: currentLanguage } }));
  }

  function bindControls() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
    });
  }

  window.NovumI18n = {
    apply: (language) => applyLanguage(language, true),
    get language() { return currentLanguage; }
  };

  detectLanguage().then((language) => {
    bindControls();
    applyLanguage(language);
    document.documentElement.classList.remove("i18n-pending");
  });
})();
