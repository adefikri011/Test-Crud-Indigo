// =============================================
// LOADING COMPONENT
// =============================================

const LoadingComponent = {

  /**
   * Tampilkan loading overlay
   * @param {string} message - Pesan loading
   */
  show: (message = "Memuat data...") => {
    $("#loadingText").text(message);
    $("#globalLoading").removeClass("hidden").addClass("flex");
  },

  /**
   * Sembunyikan loading overlay
   */
  hide: () => {
    $("#globalLoading").removeClass("flex").addClass("hidden");
  }

};

// Export global
window.LoadingComponent = LoadingComponent;