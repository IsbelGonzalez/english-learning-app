import { createWordCard } from './word.js';

// Función para mostrar texto al hacer click en botones del menú
function showText(text) {
  const translationElement = document.getElementById('translation');
  if (translationElement) {
    translationElement.textContent = text;
  }
}

const vocabularyData = [
  {
    word: 'Put cream on',
    meaning: 'To put cream on - She put cream on her back after swimming to prevent dryness.',
    example: 'Example: She puts cream on her face every morning.',
    top: '30px',
    left: '30px',
    width: '60px',
    height: '50px',
  },
  {
    word: 'Apply',
    meaning: 'To put cream on - She put cream on her back after swimming to prevent dryness.',
    example: 'Example: Apply sunscreen before going outside.',
    top: '30px',
    left: '95px',
    width: '60px',
    height: '50px',
  },
  {
    word: 'Moisturize',
    meaning: 'To put cream on - She put cream on her back after swimming to prevent dryness.',
    example: 'Example: Moisturize your skin regularly.',
    top: '30px',
    left: '155px',
    width: '70px',
    height: '50px',
  },
  {
    word: 'Dog',
    meaning: 'Dog - Perro',
    example: 'Example: The dog is playing in the park.',
    top: '150px',
    left: '250px',
    width: '60px',
    height: '50px',
  },
  {
    word: 'Book',
    meaning: 'Book - Libro',
    example: 'Example: I am reading a good book.',
    top: '200px',
    left: '400px',
    width: '60px',
    height: '50px',
  },
  {
    word: 'House',
    meaning: 'House - Casa',
    example: 'Example: I live in a big house.',
    top: '300px',
    left: '150px',
    width: '70px',
    height: '50px',
  },
];

function initializeVocabulary() {
  const container = document.getElementById('vocabulary-container');
  if (!container) return;

  vocabularyData.forEach((data) => {
    const card = createWordCard(data);
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', initializeVocabulary);

// Exportar si es necesario
window.showText = showText;