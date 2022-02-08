import getElement from './getElement.js';
import presentCharacters from './presentCharacters.js';

const form = getElement('.search-form');
const input = getElement('[name="search"]');
const nameRadio = getElement('#name');
const startsWithRadio = getElement('#startswith');

const allRadios = document.querySelectorAll('[type="radio"]');

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  presentCharactersFunction();
});

allRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    presentCharactersFunction();
  });
});

const presentCharactersFunction = () => {
  const value = input.value;
  let valueArray = value.split(' ');
  if (!value) return;
  if (nameRadio.checked) {
    if (valueArray.length === 1) {
      presentCharacters(
        `https://gateway.marvel.com/v1/public/characters?name=${value}&ts=1&apikey=4fdc9d5aa3caac0ceb3b8fb2323a6378&hash=62eb50a52ac034908712c9a178288c41`
      );
    }
    if (valueArray.length === 2) {
      presentCharacters(
        `https://gateway.marvel.com/v1/public/characters?name=${valueArray[0]}%20${valueArray[1]}&ts=1&apikey=4fdc9d5aa3caac0ceb3b8fb2323a6378&hash=62eb50a52ac034908712c9a178288c41`
      );
    }
  }
  if (startsWithRadio.checked) {
    presentCharacters(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&limit=100&ts=1&apikey=4fdc9d5aa3caac0ceb3b8fb2323a6378&hash=62eb50a52ac034908712c9a178288c41`
    );
  }
};
