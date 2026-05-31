// =============================================
// DATA SERVICE
// =============================================

const DataService = {
  /**
   * Ambil semua data karyawan
   * @returns {Array} List karyawan
   */
  getAllEmployees: () => {
    const employees = StorageHelper.get(APP_CONFIG.storage.employees);
    return employees || [];
  },

  /**
   * Simpan data karyawan
   * @param {Array} employees - List karyawan
   */
  saveEmployees: (employees) => {
    StorageHelper.set(APP_CONFIG.storage.employees, employees);
  },

  /**
   * Tambah karyawan baru
   * @param {Object} employee - Data karyawan
   * @returns {Object} Karyawan yang sudah ditambahkan (dengan ID)
   */
  addEmployee: (employee) => {
    const employees = DataService.getAllEmployees();

    // Generate ID (timestamp + random)
    const newEmployee = {
      ...employee,
      id: Date.now() + Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString()
    };

    employees.push(newEmployee);
    DataService.saveEmployees(employees);
    return newEmployee;
  },

  /**
   * Ambil karyawan berdasarkan ID
   * @param {number} id - ID karyawan
   * @returns {Object|null} Data karyawan
   */
  getEmployeeById: (id) => {
    const employees = DataService.getAllEmployees();
    return employees.find(emp => emp.id === id) || null;
  },

  /**
   * Update karyawan
   * @param {number} id - ID karyawan
   * @param {Object} updatedData - Data yang diperbarui
   * @returns {Object|null} Data karyawan yang diperbarui
   */
  updateEmployee: (id, updatedData) => {
    const employees = DataService.getAllEmployees();
    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) return null;

    employees[index] = {
      ...employees[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };

    DataService.saveEmployees(employees);
    return employees[index];
  },

  /**
   * Hapus karyawan
   * @param {number} id - ID karyawan
   * @returns {boolean}
   */
  deleteEmployee: (id) => {
    const employees = DataService.getAllEmployees();
    const filteredEmployees = employees.filter(emp => emp.id !== id);

    if (employees.length === filteredEmployees.length) {
      return false; // Tidak ada yang dihapus
    }

    DataService.saveEmployees(filteredEmployees);
    return true;
  },

  /**
   * Cari karyawan berdasarkan keyword
   * @param {string} keyword - Kata kunci pencarian
   * @returns {Array} List karyawan yang cocok
   */
  searchEmployees: (keyword) => {
    if (!keyword) return DataService.getAllEmployees();

    const employees = DataService.getAllEmployees();
    const searchTerm = keyword.toLowerCase();

    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.email.toLowerCase().includes(searchTerm) ||
      employee.position.toLowerCase().includes(searchTerm) ||
      employee.department.toLowerCase().includes(searchTerm)
    );
  },

  /**
   * Dapatkan statistik karyawan
   * @returns {Object} Statistik
   */
  getStatistics: () => {
    const employees = DataService.getAllEmployees();

    const totalEmployees = employees.length;
    const departments = [...new Set(employees.map(emp => emp.department))];
    const totalDepartments = departments.length;

    const totalSalary = employees.reduce((sum, emp) => {
      return sum + (parseFloat(emp.salary) || 0);
    }, 0);

    const averageSalary = totalEmployees > 0 ? Math.round(totalSalary / totalEmployees) : 0;

    return {
      totalEmployees,
      totalDepartments,
      averageSalary
    };
  }
};

// Export ke global scope
window.DataService = DataService;