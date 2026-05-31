$(function () {
  LoadingComponent.show("Menyiapkan dashboard...");
  
  ModalComponent.init();
  CreateHandler.init();
  if (typeof window.MultiSelectComponent !== "undefined" && typeof window.MultiSelectComponent.init === "function") {
    try {
      window.MultiSelectComponent.init();
    } catch (error) {
      console.error("Department filter multiselect init failed:", error);
    }
  }
  ReadHandler.init();
  UpdateHandler.init();
  DeleteHandler.init();

  const renderLucideIcons = () => {
    if (typeof window.lucide !== 'undefined' && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  };

  renderLucideIcons();
  window.addEventListener("load", renderLucideIcons, { once: true });

  requestAnimationFrame(() => {
    LoadingComponent.hide();
  });
});