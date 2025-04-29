import quotes from './src/quotes.js';
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoriteIcon,
} from './src/favoritesHandler.js';

const quoteElement = document.getElementById('quote');
const quoteAutorElement = document.getElementById('quote-autor');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, autor } = randomQuote;
  quoteElement.textContent = quote;
  quoteAutorElement.textContent = autor;
  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);
  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.autor,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

//generateRandomQuote();
