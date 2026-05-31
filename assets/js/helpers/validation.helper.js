// =============================================
// VALIDATION HELPER
// =============================================

const ValidationHelper = {

  /**
   * Validasi seluruh form karyawan
   * @param {Object} formData
   * @returns {boolean}
   */
  validateEmployeeForm: (formData) => {
    let isValid = true;

    // Reset error dulu
    ValidationHelper.clearErrors();

    // Nama
    if (!formData.name || formData.name.trim() === "") {
      ValidationHelper.showError("nameError");
      isValid = false;
    }

    // Email
    if (!formData.email || !ValidationHelper.isValidEmail(formData.email)) {
      ValidationHelper.showError("emailError");
      isValid = false;
    }

    // Jabatan
    if (!formData.position || formData.position.trim() === "") {
      ValidationHelper.showError("positionError");
      isValid = false;
    }

    // Departemen
    if (!formData.department || formData.department.trim() === "") {
      ValidationHelper.showError("departmentError");
      isValid = false;
    }

    // Gaji
    if (!formData.salary || parseFloat(formData.salary) <= 0) {
      ValidationHelper.showError("salaryError");
      isValid = false;
    }

    // Tanggal Masuk
    if (!formData.joinDate || formData.joinDate.trim() === "") {
      ValidationHelper.showError("joinDateError");
      isValid = false;
    }

    return isValid;
  },

  /**
   * Validasi format email
   * @param {string} email
   * @returns {boolean}
   */
  isValidEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  /**
   * Tampilkan error
   * @param {string} elementId
   */
  showError: (elementId) => {
    $("#" + elementId).removeClass("hidden");
  },

  /**
   * Sembunyikan error
   */
  clearErrors: () => {
    $("#employeeForm p[id$='Error']").addClass("hidden");
  },

  /**
   * Ambil data dari form
   * @returns {Object}
   */
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

  /**
   * Reset form
   */
  resetForm: () => {
    $("#employeeForm")[0].reset();
    $("#employeeId").val("");
    ValidationHelper.clearErrors();
  }

};

// Export global
window.ValidationHelper = ValidationHelper;