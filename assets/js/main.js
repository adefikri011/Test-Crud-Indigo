$(function () {
  LoadingComponent.show("Menyiapkan dashboard...");
  ModalComponent.init();
  CreateHandler.init();
  ReadHandler.init();
  UpdateHandler.init();
  DeleteHandler.init();

  requestAnimationFrame(() => {
    LoadingComponent.hide();
  });
});