$(function () {
  LoadingComponent.show("Menyiapkan dashboard...");
  
  ModalComponent.init();
  CreateHandler.init();
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