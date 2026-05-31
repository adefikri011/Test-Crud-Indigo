module.exports = {
  content: [
    './index.html',
    './partials/**/*.html',
    './assets/js/**/*.js',
    './assets/partials/**/*.html'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out'
      }
    }
  },
  plugins: []
};
