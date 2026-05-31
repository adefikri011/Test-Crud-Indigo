const CreateHandler = {

  /**
   * Handle buka modal tambah karyawan
   */
  handleOpenModal: () => {
    $(document).on("click", "#addEmployeeBtn", function () {
      ModalComponent.openCreateModal();
    });
  },

  /**
   * Handle submit form (create mode)
   */
  handleSubmit: () => {
    $(document).on("submit", "#employeeForm", function (e) {
      e.preventDefault();

      const employeeId = $("#employeeId").val();
      if (employeeId) return;

      const formData = ValidationHelper.getFormData();
      const isValid = ValidationHelper.validateEmployeeForm(formData);
      if (!isValid) return;

      // Tampilkan loading saat proses simpan
      LoadingComponent.show("Menyimpan data karyawan...");

      // Simulasi delay network 600ms
      setTimeout(() => {
        DataService.addEmployee(formData);
        ModalComponent.closeModal();
        ReadHandler.renderAll();
        AlertComponent.showToast("Karyawan berhasil ditambahkan", "success");

        // Sembunyikan loading
        LoadingComponent.hide();
      }, 600);
    });
  },

  /**
   * Inisialisasi create handler
   */
  init: () => {
    CreateHandler.handleOpenModal();
    CreateHandler.handleSubmit();
  }

};

// Export global
window.CreateHandler = CreateHandler;