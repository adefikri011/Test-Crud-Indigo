const ValidationHelper = {
  validateEmployeeForm: (formData) => {
    let isValid = true;
    ValidationHelper.clearErrors();

    if (!formData.name || formData.name.trim() === "") {
      ValidationHelper.showError("nameError");
      isValid = false;
    }

    if (!formData.email || !ValidationHelper.isValidEmail(formData.email)) {
      ValidationHelper.showError("emailError");
      isValid = false;
    }

    if (!formData.position || formData.position.trim() === "") {
      ValidationHelper.showError("positionError");
      isValid = false;
    }

    if (!formData.department || formData.department.trim() === "") {
      ValidationHelper.showError("departmentError");
      isValid = false;
    }

    if (!formData.salary || parseFloat(formData.salary) <= 0) {
      ValidationHelper.showError("salaryError");
      isValid = false;
    }

    if (!formData.joinDate || formData.joinDate.trim() === "") {
      ValidationHelper.showError("joinDateError");
      isValid = false;
    }

    return isValid;
  },
  isValidEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },
  showError: (elementId) => {
    $("#" + elementId).removeClass("hidden");
  },
  clearErrors: () => {
    $("#employeeForm p[id$='Error']").addClass("hidden");
  },
  getFormData: () => {
    return {
      name: $("#name").val().trim(),
      email: $("#email").val().trim(),
      position: $("#position").val().trim(),
      department: $("#department").val(),
      salary: $("#salary").val(),
      joinDate: $("#joinDate").val()
    };
  },
  resetForm: () => {
    $("#employeeForm")[0].reset();
    $("#employeeId").val("");
    ValidationHelper.clearErrors();
  }
};
window.ValidationHelper = ValidationHelper;