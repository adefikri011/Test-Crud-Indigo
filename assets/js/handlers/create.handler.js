const CreateHandler = {
  handleOpenModal: () => {
    $(document).on("click", "#addEmployeeBtn", function () {
      ModalComponent.openCreateModal();
    });
  },
  handleSubmit: () => {
    $(document).on("submit", "#employeeForm", function (e) {
      e.preventDefault();

      const employeeId = $("#employeeId").val();
      if (employeeId) return;

      const formData = ValidationHelper.getFormData();
      const isValid = ValidationHelper.validateEmployeeForm(formData);
      if (!isValid) return;

      LoadingComponent.show("Menyimpan data karyawan...");

      setTimeout(() => {
        DataService.addEmployee(formData);
        ModalComponent.closeModal();
        ReadHandler.renderAll();
        AlertComponent.showToast("Karyawan berhasil ditambahkan", "success");

        LoadingComponent.hide();
      }, 600);
    });
  },
  init: () => {
    CreateHandler.handleOpenModal();
    CreateHandler.handleSubmit();
  }
};
window.CreateHandler = CreateHandler;