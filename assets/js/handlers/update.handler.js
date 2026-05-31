const UpdateHandler = {
  handleEditClick: () => {
    $(document).on("click", ".edit-btn", function () {
      const id = parseInt($(this).data("id"));
      const employee = DataService.getEmployeeById(id);

      if (!employee) {
        AlertComponent.showToast("Data tidak ditemukan", "error");
        return;
      }

      ModalComponent.openEditModal(employee);
    });
  },
  handleUpdateSubmit: () => {
    $(document).on("submit", "#employeeForm", function (e) {
      e.preventDefault();

      const employeeId = $("#employeeId").val();
      if (!employeeId) return;

      const formData = ValidationHelper.getFormData();

      const isValid = ValidationHelper.validateEmployeeForm(formData);
      if (!isValid) return;

      LoadingComponent.show("Memperbarui data karyawan...");

      setTimeout(() => {
        const updated = DataService.updateEmployee(
          parseInt(employeeId),
          formData
        );

        if (!updated) {
          AlertComponent.showToast("Gagal memperbarui data", "error");
          LoadingComponent.hide();
          return;
        }

        ModalComponent.closeModal();
        ReadHandler.renderAll();
        AlertComponent.showToast("Data berhasil diperbarui", "success");
        LoadingComponent.hide();
      }, 600);
    });
  },

  init: () => {
    UpdateHandler.handleEditClick();
    UpdateHandler.handleUpdateSubmit();
  }
};

window.UpdateHandler = UpdateHandler;