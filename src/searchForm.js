import getElement from './getElement.js';
import presentCharacters from './presentCharacters.js';

const form = getElement('.search-form');
const input = getElement('[name="search"]');
// const nameRadio = getElement('#name');
// const startsWithRadio = getElement('#startswith');
const searchBtn = getElement('.btn-search');

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  presentCharactersFunction();
});

searchBtn.addEventListener('click', () => {
  presentCharactersFunction();
});

const presentCharactersFunction = () => {
  const value = input.value;
  if (!value) return;
  presentCharacters(
    `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&limit=100&ts=1&apikey=4fdc9d5aa3caac0ceb3b8fb2323a6378&hash=62eb50a52ac034908712c9a178288c41`
  );
};
