import showCharacters from './src/presentCharacters.js';
import './src/searchForm.js';

const URL =
  'https://gateway.marvel.com/v1/public/characters?limit=20&ts=1&apikey=4fdc9d5aa3caac0ceb3b8fb2323a6378&hash=62eb50a52ac034908712c9a178288c41';

window.addEventListener('DOMContentLoaded', () => {
  showCharacters(URL);
});
