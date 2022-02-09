import fetchCharacters from './src/fetchCharacters.js';
import displayCharacter from './src/displaySingleCharacter.js';

const presentCharacter = async () => {
  const id = localStorage.getItem('character');
  if (!id) {
    window.location.replace('index.html');
  } else {
    const character = await fetchCharacters(
      `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=4fdc9d5aa3caac0ceb3b8fb2323a6378&hash=62eb50a52ac034908712c9a178288c41`
    );
    displayCharacter(character);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  presentCharacter();
});
