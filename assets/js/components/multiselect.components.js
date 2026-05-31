const MultiSelectComponent = {
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
    trigger.setAttribute("aria-haspopup", "listbox");
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
    menu.setAttribute("role", "listbox");
    menu.setAttribute("aria-multiselectable", "true");

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

  init: () => {
    MultiSelectComponent.initDepartmentFilter();
  }
};

window.MultiSelectComponent = MultiSelectComponent;