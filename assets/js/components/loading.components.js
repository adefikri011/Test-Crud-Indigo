const LoadingComponent = {
  show: (message = "Memuat data...") => {
    $("#loadingText").text(message);
    $("#globalLoading").removeClass("hidden").addClass("flex");
  },
  hide: () => {
    $("#globalLoading").removeClass("flex").addClass("hidden");
  }
};
window.LoadingComponent = LoadingComponent;