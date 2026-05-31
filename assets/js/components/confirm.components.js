// =============================================
// CONFIRM COMPONENT
// =============================================

const ConfirmComponent = {
  resolver: null,

  ensureDialog: () => {
    if (document.getElementById("confirmDeleteOverlay")) {
      return;
    }

    const dialog = `
      <div id="confirmDeleteOverlay" class="fixed inset-0 z-[110] hidden items-center justify-center bg-slate-950/60 backdrop-blur-sm px-4">
        <div class="w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden animate-fadeIn border border-slate-100">
          <div class="px-6 pt-6 pb-4">
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>

              <div class="flex-1">
                <h3 id="confirmDeleteTitle" class="text-xl font-semibold text-slate-900">Hapus data ini?</h3>
                <p id="confirmDeleteMessage" class="mt-2 text-sm leading-6 text-slate-500">
                  Data yang sudah dihapus tidak bisa dikembalikan.
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col-reverse gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end">
            <button id="confirmDeleteCancel" type="button" class="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50">
              Batal
            </button>
            <button id="confirmDeleteAction" type="button" class="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700">
              Hapus
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", dialog);
  },

  hide: () => {
    const overlay = document.getElementById("confirmDeleteOverlay");
    if (overlay) {
      overlay.classList.add("hidden");
      overlay.classList.remove("flex");
    }

    ConfirmComponent.resolver = null;
  },

  show: ({ title, message, confirmText, cancelText }) => {
    ConfirmComponent.ensureDialog();

    const overlay = document.getElementById("confirmDeleteOverlay");
    const titleElement = document.getElementById("confirmDeleteTitle");
    const messageElement = document.getElementById("confirmDeleteMessage");
    const confirmButton = document.getElementById("confirmDeleteAction");
    const cancelButton = document.getElementById("confirmDeleteCancel");

    if (titleElement && title) {
      titleElement.textContent = title;
    }

    if (messageElement && message) {
      messageElement.textContent = message;
    }

    if (confirmButton && confirmText) {
      confirmButton.textContent = confirmText;
    }

    if (cancelButton && cancelText) {
      cancelButton.textContent = cancelText;
    }

    overlay.classList.remove("hidden");
    overlay.classList.add("flex");

    return new Promise((resolve) => {
      ConfirmComponent.resolver = resolve;

      const handleCancel = () => {
        ConfirmComponent.hide();
        resolve(false);
      };

      const handleConfirm = () => {
        ConfirmComponent.hide();
        resolve(true);
      };

      const handleBackdrop = (event) => {
        if (event.target === overlay) {
          handleCancel();
        }
      };

      const handleEscape = (event) => {
        if (event.key === "Escape") {
          handleCancel();
        }
      };

      cancelButton.onclick = handleCancel;
      confirmButton.onclick = handleConfirm;
      overlay.onclick = handleBackdrop;

      document.addEventListener("keydown", handleEscape, { once: true });
    });
  }
};

window.ConfirmComponent = ConfirmComponent;