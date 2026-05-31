const ReadHandler = {
  getFilteredEmployees: () => {
    const keyword = $("#searchInput").val() || "";
    const departmentValue = $("#departmentFilter").val();
    const departments = Array.isArray(departmentValue)
      ? departmentValue.filter(Boolean)
      : departmentValue
        ? [departmentValue]
        : [];

    const searchedEmployees = DataService.searchEmployees(keyword);

    if (departments.length === 0) {
      return searchedEmployees;
    }

    return searchedEmployees.filter((employee) => departments.includes(employee.department));
  },
  renderAll: () => {
    const employees = ReadHandler.getFilteredEmployees();

    TableComponent.renderTable(employees);
    TableComponent.updateSummary();
  },
  handleSearch: () => {
    $(document).on("input", "#searchInput", function () {
      ReadHandler.renderAll();
    });

    $(document).on("change", "#departmentFilter", function () {
      ReadHandler.renderAll();
    });
  },
  init: () => {
    ReadHandler.renderAll();
    ReadHandler.handleSearch();
  }
};
window.ReadHandler = ReadHandler;