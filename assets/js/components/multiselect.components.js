const MultiSelectComponent = {
  modalDepartmentState: null,

  initDepartmentFilter: () => {
    const select = document.getElementById("departmentFilter");

    if (!select) {
      return;
    }

    if (select.dataset.multiselectInitialized === "true") {
      return;
    }

    select.dataset.multiselectInitialized = "true";
    select.multiple = true;

    const emptyOption = select.querySelector('option[value=""]');
    if (emptyOption) {
      emptyOption.remove();
    }

    select.classList.add("department-multi-native");

    const dropdown = document.createElement("div");
    dropdown.id = "departmentFilterCustom";
    dropdown.className = "department-multi";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "department-multi-trigger";
    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");

    const label = document.createElement("span");
    label.className = "department-multi-label";
    label.textContent = "Semua Departemen";

    const caret = document.createElement("span");
    caret.className = "department-multi-caret";
    caret.setAttribute("aria-hidden", "true");
    caret.textContent = "▾";

    const menu = document.createElement("div");
    menu.className = "department-multi-menu";
    menu.id = "departmentFilterCustomMenu";
    menu.setAttribute("role", "group");

    const filterLabel = document.querySelector('label[for="departmentFilter"]');
    if (filterLabel) {
      if (!filterLabel.id) {
        filterLabel.id = "departmentFilterLabel";
      }
      menu.setAttribute("aria-labelledby", filterLabel.id);
      trigger.setAttribute("aria-labelledby", filterLabel.id);
    } else {
      menu.setAttribute("aria-label", "Filter Departemen");
      trigger.setAttribute("aria-label", "Filter Departemen");
    }

    trigger.setAttribute("aria-controls", menu.id);

    const actions = document.createElement("div");
    actions.className = "department-multi-actions";

    const selectAllButton = document.createElement("button");
    selectAllButton.type = "button";
    selectAllButton.className = "department-multi-action-btn";
    selectAllButton.textContent = "Pilih Semua";

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "department-multi-action-btn";
    resetButton.textContent = "Reset";

    actions.append(selectAllButton, resetButton);
    menu.appendChild(actions);

    Array.from(select.options).forEach((option) => {
      const item = document.createElement("label");
      item.className = "department-multi-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "department-multi-checkbox";
      checkbox.value = option.value;
      checkbox.checked = option.selected;

      const text = document.createElement("span");
      text.className = "department-multi-item-text";
      text.textContent = option.text;

      item.append(checkbox, text);
      menu.appendChild(item);
    });

    trigger.append(label, caret);
    dropdown.append(trigger, menu);
    select.insertAdjacentElement("afterend", dropdown);

    const syncLabel = () => {
      const selectedTexts = [];
      const allCheckboxes = Array.from(menu.querySelectorAll(".department-multi-checkbox"));

      Array.from(menu.querySelectorAll(".department-multi-checkbox:checked")).forEach((checkbox) => {
        const textElement = checkbox.closest("label")?.querySelector(".department-multi-item-text");
        if (textElement) {
          selectedTexts.push(textElement.textContent || "");
        }
      });

      if (selectedTexts.length === 0) {
        label.textContent = "Semua Departemen";
        return;
      }

      if (selectedTexts.length === allCheckboxes.length && allCheckboxes.length > 0) {
        label.textContent = "Semua Departemen";
        return;
      }

      if (selectedTexts.length <= 2) {
        label.textContent = selectedTexts.join(", ");
        return;
      }

      label.textContent = `${selectedTexts.slice(0, 2).join(", ")} +${selectedTexts.length - 2}`;
    };

    const closeMenu = () => {
      dropdown.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      dropdown.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };

    const syncSelectValue = () => {
      const selectedValues = Array.from(
        menu.querySelectorAll(".department-multi-checkbox:checked")
      ).map((checkbox) => checkbox.value);

      Array.from(select.options).forEach((option) => {
        option.selected = selectedValues.includes(option.value);
      });

      select.dispatchEvent(new Event("change", { bubbles: true }));

      syncLabel();
    };

    trigger.addEventListener("click", () => {
      if (dropdown.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.addEventListener("change", (event) => {
      if (event.target instanceof HTMLInputElement && event.target.classList.contains("department-multi-checkbox")) {
        syncSelectValue();
      }
    });

    selectAllButton.addEventListener("click", () => {
      Array.from(menu.querySelectorAll(".department-multi-checkbox")).forEach((checkbox) => {
        checkbox.checked = true;
      });
      syncSelectValue();
    });

    resetButton.addEventListener("click", () => {
      Array.from(menu.querySelectorAll(".department-multi-checkbox")).forEach((checkbox) => {
        checkbox.checked = false;
      });
      syncSelectValue();
    });

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      if (!event.target.closest("#departmentFilterCustom")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    syncLabel();
  },

  initModalDepartmentSelect: () => {
    const select = document.getElementById("department");

    if (!select) {
      return;
    }

    if (select.dataset.customSingleInitialized === "true") {
      return;
    }

    select.dataset.customSingleInitialized = "true";
    select.classList.add("department-single-native");

    const dropdown = document.createElement("div");
    dropdown.id = "departmentCustomSingle";
    dropdown.className = "department-single";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "department-single-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");

    const label = document.createElement("span");
    label.className = "department-single-label";

    const caret = document.createElement("span");
    caret.className = "department-single-caret";
    caret.setAttribute("aria-hidden", "true");
    caret.textContent = "▾";

    const menu = document.createElement("div");
    menu.className = "department-single-menu";
    menu.id = "departmentCustomSingleMenu";
    menu.setAttribute("role", "listbox");

    const modalLabel = document.querySelector('label[for="department"]');
    if (modalLabel) {
      if (!modalLabel.id) {
        modalLabel.id = "departmentModalLabel";
      }
      menu.setAttribute("aria-labelledby", modalLabel.id);
      trigger.setAttribute("aria-labelledby", modalLabel.id);
    } else {
      menu.setAttribute("aria-label", "Departemen");
      trigger.setAttribute("aria-label", "Departemen");
    }

    trigger.setAttribute("aria-controls", menu.id);

    Array.from(select.options).forEach((option) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "department-single-option";
      item.dataset.value = option.value;
      item.textContent = option.text;
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", "false");

      if (!option.value) {
        item.classList.add("is-placeholder");
      }

      menu.appendChild(item);
    });

    trigger.append(label, caret);
    dropdown.append(trigger, menu);
    select.insertAdjacentElement("afterend", dropdown);

    const closeMenu = () => {
      dropdown.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      dropdown.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    };

    const syncFromSelect = () => {
      const selectedValue = select.value || "";
      const selectedOption = Array.from(select.options).find((option) => option.value === selectedValue);

      label.textContent = selectedOption ? selectedOption.text : "Pilih Departemen";
      trigger.classList.toggle("is-empty", !selectedValue);

      Array.from(menu.querySelectorAll(".department-single-option")).forEach((item) => {
        const isSelected = item instanceof HTMLButtonElement && item.dataset.value === selectedValue;
        item.classList.toggle("is-selected", isSelected);
        item.setAttribute("aria-selected", isSelected ? "true" : "false");
      });
    };

    trigger.addEventListener("click", () => {
      if (dropdown.classList.contains("is-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const optionElement = target.closest(".department-single-option");
      if (!(optionElement instanceof HTMLButtonElement)) {
        return;
      }

      select.value = optionElement.dataset.value || "";
      select.dispatchEvent(new Event("change", { bubbles: true }));
      syncFromSelect();
      closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      if (!event.target.closest("#departmentCustomSingle")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    select.addEventListener("change", syncFromSelect);

    MultiSelectComponent.modalDepartmentState = {
      sync: syncFromSelect,
      close: closeMenu
    };

    syncFromSelect();
  },

  syncModalDepartmentSelect: () => {
    if (MultiSelectComponent.modalDepartmentState && typeof MultiSelectComponent.modalDepartmentState.sync === "function") {
      MultiSelectComponent.modalDepartmentState.sync();
      return;
    }

    MultiSelectComponent.initModalDepartmentSelect();
  },

  init: () => {
    MultiSelectComponent.initDepartmentFilter();
    MultiSelectComponent.initModalDepartmentSelect();
  }
};

window.MultiSelectComponent = MultiSelectComponent;