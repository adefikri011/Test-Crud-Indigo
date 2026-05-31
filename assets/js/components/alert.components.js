// =============================================
// ALERT (TOAST) COMPONENT
// =============================================

const AlertComponent = {

  /**
   * Tampilkan toast
   * @param {string} message
   * @param {string} type (success | error | info)
   */
  showToast: (message, type = "success") => {

    if (type === "success" && window.SoundComponent && typeof SoundComponent.playSuccess === "function") {
      SoundComponent.playSuccess();
    }

    const toastId = "toast-" + Date.now();

    const bgColor = {
      success: "bg-green-600",
      error: "bg-red-600",
      info: "bg-blue-600"
    };

    const toast = `
      <div id="${toastId}" 
           class="text-white px-5 py-3 rounded-xl shadow-lg ${bgColor[type]} 
                  animate-fadeIn transition flex items-center justify-between gap-4">

        <span class="text-sm font-medium">${message}</span>

        <button class="text-white hover:opacity-80" onclick="$('#${toastId}').remove()">
          ✕
        </button>
      </div>
    `;

    $("#toastContainer").append(toast);

    // Auto remove setelah 3 detik
    setTimeout(() => {
      $("#" + toastId).fadeOut(300, function () {
        $(this).remove();
      });
    }, 3000);
  }

};

// Export global
window.AlertComponent = AlertComponent;