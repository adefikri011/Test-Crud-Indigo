// =============================================
// DELETE HANDLER
// =============================================

const DeleteHandler = {

  handleDeleteClick: () => {
    $(document).on("click", ".delete-btn", function () {
      const id = parseInt($(this).data("id"));

      ConfirmComponent.show({
        title: "Hapus karyawan?",
        message: "Data yang dihapus tidak bisa dikembalikan lagi. Lanjut hapus data ini?",
        confirmText: "Ya, hapus",
        cancelText: "Batal"
      }).then((confirmed) => {
        if (!confirmed) return;

        LoadingComponent.show("Menghapus data...");

        setTimeout(() => {
          const deleted = DataService.deleteEmployee(id);

          if (!deleted) {
            AlertComponent.showToast("Gagal menghapus data", "error");
            LoadingComponent.hide();
            return;
          }

          ReadHandler.renderAll();
          AlertComponent.showToast("Data berhasil dihapus", "success");

          LoadingComponent.hide();
        }, 600);
      });
    });
  },

  init: () => {
    DeleteHandler.handleDeleteClick();
  }

};

window.DeleteHandler = DeleteHandler;