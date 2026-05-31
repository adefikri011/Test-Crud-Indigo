const ModalComponent = {
  openCreateModal: () => {
    $("#modalTitle").text("Tambah Karyawan");
    $("#submitBtn").text("Simpan");

    ValidationHelper.resetForm();

    if (window.MultiSelectComponent && typeof window.MultiSelectComponent.syncModalDepartmentSelect === "function") {
      window.MultiSelectComponent.syncModalDepartmentSelect();
    }

    $("#employeeModal")
      .removeClass("hidden")
      .addClass("flex");
  },
  openEditModal: (employee) => {
    $("#modalTitle").text("Edit Karyawan");
    $("#submitBtn").text("Update");

    $("#employeeId").val(employee.id);
    $("#name").val(employee.name);
    $("#email").val(employee.email);
    $("#position").val(employee.position);
    $("#department").val(employee.department);
    $("#salary").val(employee.salary);
    $("#joinDate").val(employee.joinDate);

    if (window.MultiSelectComponent && typeof window.MultiSelectComponent.syncModalDepartmentSelect === "function") {
      window.MultiSelectComponent.syncModalDepartmentSelect();
    }

    $("#employeeModal")
      .removeClass("hidden")
      .addClass("flex");
  },
  closeModal: () => {
    $("#employeeModal")
      .removeClass("flex")
      .addClass("hidden");

    ValidationHelper.resetForm();
  },
  init: () => {
    $(document).on("click", "#closeModal", function () {
      ModalComponent.closeModal();
    });

    $(document).on("click", "#cancelBtn", function () {
      ModalComponent.closeModal();
    });

    $(document).on("click", "#employeeModal", function (e) {
      if (e.target.id === "employeeModal") {
        ModalComponent.closeModal();
      }
    });

  }
};
window.ModalComponent = ModalComponent;