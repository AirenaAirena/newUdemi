const quotes = [
  {
    quote:
      'De grootste glorie in het leven ligt niet in nooit vallen, maar in elke keer dat we opstaan.',
    autor: 'Nelson Mandela',
  },
  {
    quote: 'Wie naar buiten kijkt, droomt; wie naar binnen kijkt, ontwaakt.',
    autor: 'Carl Jung',
  },
  {
    quote:
      'Het leven is als fietsen – om in balans te blijven, moet je in beweging blijven.',
    autor: 'Albert Einstein',
  },
  {
    quote: 'Wees de verandering die je in de wereld wilt zien.',
    autor: 'Mahatma Gandhi',
  },
  {
    quote: 'In het midden van moeilijkheden liggen kansen.',
    autor: 'Albert Einstein',
  },
  {
    quote: 'Het enige wat we hoeven te vrezen, is de angst zelf.',
    autor: 'Franklin D. Roosevelt',
  },
  {
    quote:
      'Succes is niet het sleutel tot geluk. Geluk is de sleutel tot succes.',
    autor: 'Albert Schweitzer',
  },
  {
    quote: 'Twijfel doodt meer dromen dan falen ooit zal doen.',
    autor: 'Suzy Kassem',
  },
  {
    quote: 'Wat je vandaag doet, bepaalt je morgen.',
    autor: 'Ralph Marston',
  },
  {
    quote:
      'Geluk is niet iets kant-en-klaars. Het komt voort uit je eigen daden.',
    autor: 'Dalai Lama',
  },
];

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
