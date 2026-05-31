const StorageHelper = {
  /**
   * Simpan data ke localStorage
   * @param {string} key - Key storage
   * @param {any} data - Data yang disimpan
   */
  set: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      return false;
    }
  },

  /**
   * Ambil data dari localStorage
   * @param {string} key - Key storage
   * @returns {any|null} Data yang diambil
   */
  get: (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  },

  /**
   * Hapus data dari localStorage
   * @param {string} key - Key storage
   * @returns {boolean}
   */
  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("Error removing from localStorage:", error);
      return false;
    }
  },

  /**
   * Hapus semua data
   */
  clearAll: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("Error clearing localStorage:", error);
      return false;
    }
  }
};

// Export ke global scope
window.StorageHelper = StorageHelper;