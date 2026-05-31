const ReadHandler = {
  getFilteredEmployees: () => {
    const keyword = $("#searchInput").val() || "";
    const department = $("#departmentFilter").val() || "";

    const searchedEmployees = DataService.searchEmployees(keyword);

    if (!department) {
      return searchedEmployees;
    }

    return searchedEmployees.filter((employee) => employee.department === department);
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