// Lightweight SVG icon provider (no external deps)
const IconComponent = {
  get: (name, classAttr = '') => {
    const c = classAttr ? `class="${classAttr}"` : '';
    switch (name) {
      case 'add':
        return `<svg ${c} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/></svg>`;
      case 'edit':
        return `<svg ${c} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M17.414 2.586a2 2 0 010 2.828l-9.9 9.9a1 1 0 01-.497.263l-4 1a1 1 0 01-1.213-1.213l1-4a1 1 0 01.263-.497l9.9-9.9a2 2 0 012.828 0z"/></svg>`;
      case 'delete':
        return `<svg ${c} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 100 2h14a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 6a1 1 0 10-2 0v7a1 1 0 102 0V8zm4 0a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"/></svg>`;
      case 'close':
        return `<svg ${c} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`;
      default:
        return '';
    }
  }
};

window.IconComponent = IconComponent;

export default IconComponent;
