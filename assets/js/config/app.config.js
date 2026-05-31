const APP_CONFIG = {
  // App metadata
  name: "Employee Management System",
  version: "1.0.0",
  author: "INDOGO Test",

  // Storage key (untuk localStorage)
  storage: {
    employees: "indogo_employees"
  },

  // Departemen yang tersedia
  departments: ["IT", "HR", "Finance", "Marketing", "Operations"],

  // Format mata uang
  currency: {
    symbol: "Rp",
    locale: "id-ID"
  }
};

// Export ke global scope (supaya bisa diakses di semua file)
window.APP_CONFIG = APP_CONFIG;