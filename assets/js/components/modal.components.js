const ModalComponent = {

  /**
   * Buka modal (mode create)
   */
  openCreateModal: () => {
    $("#modalTitle").text("Tambah Karyawan");
    $("#submitBtn").text("Simpan");

    ValidationHelper.resetForm();

    $("#employeeModal")
      .removeClass("hidden")
      .addClass("flex");
  },

  /**
   * Buka modal (mode edit)
   * @param {Object} employee
   */
  openEditModal: (employee) => {
    $("#modalTitle").text("Edit Karyawan");
    $("#submitBtn").text("Update");

    // Isi form
    $("#employeeId").val(employee.id);
    $("#name").val(employee.name);
    $("#email").val(employee.email);
    $("#position").val(employee.position);
    $("#department").val(employee.department);
    $("#salary").val(employee.salary);
    $("#joinDate").val(employee.joinDate);

    $("#employeeModal")
      .removeClass("hidden")
      .addClass("flex");
  },

  /**
   * Tutup modal
   */
  closeModal: () => {
    $("#employeeModal")
      .removeClass("flex")
      .addClass("hidden");

    ValidationHelper.resetForm();
  },

  /**
   * Inisialisasi event modal
   */
  init: () => {

    // Tombol close (X)
    $(document).on("click", "#closeModal", function () {
      ModalComponent.closeModal();
    });

    // Tombol cancel
    $(document).on("click", "#cancelBtn", function () {
      ModalComponent.closeModal();
    });

    // Klik area luar modal
    $(document).on("click", "#employeeModal", function (e) {
      if (e.target.id === "employeeModal") {
        ModalComponent.closeModal();
      }
    });

  }

};

// Export global
window.ModalComponent = ModalComponent;