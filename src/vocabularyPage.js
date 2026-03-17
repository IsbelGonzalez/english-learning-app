// Función para mostrar texto al hacer click en áreas
function showText(text) {
  const translationElement = document.getElementById('translation');
  if (translationElement) {
    translationElement.textContent = text;
  }
}

// Exportar si es necesario
window.showText = showText;