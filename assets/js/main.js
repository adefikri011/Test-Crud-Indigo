$(function () {
  let started = false;

  const startApp = () => {
    if (started) {
      return;
    }

    started = true;
    LoadingComponent.show("Menyiapkan dashboard...");

    ReadHandler.init();

    const initDeferredModules = () => {
      ModalComponent.init();
      CreateHandler.init();
      UpdateHandler.init();
      DeleteHandler.init();

      if (typeof window.MultiSelectComponent !== "undefined" && typeof window.MultiSelectComponent.init === "function") {
        try {
          window.MultiSelectComponent.init();
        } catch (error) {
          console.error("Department filter multiselect init failed:", error);
        }
      }
    };

    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(initDeferredModules, { timeout: 1200 });
    } else {
      setTimeout(initDeferredModules, 120);
    }

    requestAnimationFrame(() => {
      LoadingComponent.hide();
    });
  };

  if (window.__APP_PARTIALS_READY__ === true) {
    startApp();
    return;
  }

  window.addEventListener("app:partials-ready", startApp, { once: true });
});