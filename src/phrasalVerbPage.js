// Función para mostrar texto al hacer click en botones del menú
function showText(text) {
  const translationElement = document.getElementById('translation');
  if (translationElement) {
    translationElement.textContent = text;
  }
}

function toggleMenu(event) {
  event.stopPropagation();
  const clickArea = event.currentTarget.closest('.click-area');
  if (!clickArea) return;

  document.querySelectorAll('.click-area.open').forEach((area) => {
    if (area !== clickArea) {
      area.classList.remove('open');
    }
  });

  clickArea.classList.toggle('open');
}

window.addEventListener('click', () => {
  document.querySelectorAll('.click-area.open').forEach((area) => {
    area.classList.remove('open');
  });
});

// Exportar si es necesario
window.showText = showText;
window.toggleMenu = toggleMenu;