const TableComponent = {
  renderTable: (employees) => {
    const $desktopBody = $("#employeeTableBodyDesktop");
    const $mobileContainer = $("#employeeCardContainer");

    $desktopBody.empty();
    $mobileContainer.empty();

    if (!employees || employees.length === 0) {
      $desktopBody.append(`
      <tr>
        <td colspan="8" class="px-6 py-12 text-center text-slate-500">
          Belum ada data karyawan.
        </td>
      </tr>
    `);

      $mobileContainer.append(`
      <div class="text-center text-slate-500 py-10">
        Belum ada data karyawan.
      </div>
    `);

      return;
    }

    employees.forEach((employee, index) => {
      const desktopRow = `
      <tr class="hover:bg-slate-50 transition">
        <td class="px-6 py-4 text-sm">${index + 1}</td>
        <td class="px-6 py-4 text-sm font-medium">${employee.name}</td>
        <td class="px-6 py-4 text-sm">${employee.email}</td>
        <td class="px-6 py-4 text-sm">${employee.position}</td>
        <td class="px-6 py-4 text-sm">${employee.department}</td>
        <td class="px-6 py-4 text-sm">${TableComponent.formatCurrency(employee.salary)}</td>
        <td class="px-6 py-4 text-sm">${employee.joinDate}</td>
        <td class="px-6 py-4 text-center text-sm">
          <button class="edit-btn text-blue-600 mr-3" data-id="${employee.id}">
            Edit
          </button>
          <button class="delete-btn text-red-600" data-id="${employee.id}">
            Delete
          </button>
        </td>
      </tr>
    `;

      $desktopBody.append(desktopRow);

      const mobileCard = `
      <div class="bg-slate-50 rounded-xl p-4 shadow-sm border border-slate-200">
        
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="font-semibold text-slate-900">${employee.name}</h3>
            <p class="text-sm text-slate-500">${employee.position}</p>
          </div>
          <span class="text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded-full">
            ${employee.department}
          </span>
        </div>

        <div class="text-sm text-slate-600 space-y-1 mt-3">
          <p><strong>Email:</strong> ${employee.email}</p>
          <p><strong>Gaji:</strong> ${TableComponent.formatCurrency(employee.salary)}</p>
          <p><strong>Masuk:</strong> ${employee.joinDate}</p>
        </div>

        <div class="flex justify-end gap-4 mt-4 text-sm">
          <button class="edit-btn text-blue-600 font-medium" data-id="${employee.id}">
            Edit
          </button>
          <button class="delete-btn text-red-600 font-medium" data-id="${employee.id}">
            Delete
          </button>
        </div>

      </div>
    `;

      $mobileContainer.append(mobileCard);
    });
  },
  getEmptyStateRow: () => {
    return `
      <tr>
        <td colspan="8" class="px-6 py-12 text-center text-slate-500">
          Belum ada data karyawan.
        </td>
      </tr>
    `;
  },

  formatCurrency: (amount) => {
    const value = parseFloat(amount) || 0;
    return new Intl.NumberFormat(APP_CONFIG.currency.locale, {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(value);
  },

  updateSummary: () => {
    const stats = DataService.getStatistics();

    $("#totalEmployees").text(stats.totalEmployees);
    $("#totalDepartments").text(stats.totalDepartments);
    $("#averageSalary").text(
      TableComponent.formatCurrency(stats.averageSalary)
    );
  }

};
window.TableComponent = TableComponent;