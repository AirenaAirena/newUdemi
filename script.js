import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const quoteAutorElement = document.getElementById('quote-autor');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, autor } = randomQuote;
  // const quote = randomQuote.quote;
  // const quoteAutor = randomQuote.autor;
  quoteElement.textContent = quote;
  quoteAutorElement.textContent = autor;
}

generateBtn.addEventListener('click', generateRandomQuote);

//generateRandomQuote();
