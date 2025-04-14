const quotes = [
  'The grootste glorie in het leven ligt niet in nooit vallen, maar in elke keer dat we opstaan. – Nelson Mandela',
  'Wie naar buiten kijkt, droomt; wie naar binnen kijkt, ontwaakt. – Carl Jung',
  'Het leven is als fietsen – om in balans te blijven, moet je in beweging blijven. – Albert Einstein',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote(click) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
