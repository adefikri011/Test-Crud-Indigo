const DataService = {
  getAllEmployees: () => {
    const employees = StorageHelper.get(APP_CONFIG.storage.employees);
    return employees || [];
  },
  saveEmployees: (employees) => {
    StorageHelper.set(APP_CONFIG.storage.employees, employees);
  },
  addEmployee: (employee) => {
    const employees = DataService.getAllEmployees();
    const newEmployee = {
      ...employee,
      id: Date.now() + Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString()
    };

    employees.push(newEmployee);
    DataService.saveEmployees(employees);
    return newEmployee;
  },
  getEmployeeById: (id) => {
    const employees = DataService.getAllEmployees();
    return employees.find((emp) => emp.id === id) || null;
  },
  updateEmployee: (id, updatedData) => {
    const employees = DataService.getAllEmployees();
    const index = employees.findIndex((emp) => emp.id === id);

    if (index === -1) return null;

    employees[index] = {
      ...employees[index],
      ...updatedData,
      updatedAt: new Date().toISOString()
    };

    DataService.saveEmployees(employees);
    return employees[index];
  },
  deleteEmployee: (id) => {
    const employees = DataService.getAllEmployees();
    const filteredEmployees = employees.filter((emp) => emp.id !== id);

    if (employees.length === filteredEmployees.length) {
      return false;
    }

    DataService.saveEmployees(filteredEmployees);
    return true;
  },
  searchEmployees: (keyword) => {
    if (!keyword) return DataService.getAllEmployees();

    const employees = DataService.getAllEmployees();
    const searchTerm = keyword.toLowerCase();

    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.email.toLowerCase().includes(searchTerm) ||
      employee.position.toLowerCase().includes(searchTerm) ||
      employee.department.toLowerCase().includes(searchTerm)
    );
  },
  getStatistics: () => {
    const employees = DataService.getAllEmployees();

    const totalEmployees = employees.length;
    const departments = [...new Set(employees.map((emp) => emp.department))];
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
window.DataService = DataService;