/*const html = document.documentElemento;
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-bs-theme');
        html.setAttribute('data-bs-theme', currentTheme === 'dark' ? 'light' : 'dark');
});*/

// script.js
document.addEventListener('DOMContentLoaded', function () {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('toggleTheme');
  const icon = document.getElementById('themeIcon');

  // Cambia el ícono según el tema actual
  function updateIcon(theme) {
    if (theme === 'dark') {
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
    } else {
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
    }
  }

  // Alternar el tema
  toggleBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', newTheme);
    updateIcon(newTheme);
  });

  // Inicializa el ícono al cargar
  updateIcon(html.getAttribute('data-bs-theme'));
});
