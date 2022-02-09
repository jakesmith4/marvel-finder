import fetchCharacters from './fetchCharacters.js';
import displayCharacters from './displayCharacters.js';
import setCharacter from './setCharacter.js';

const showCharacters = async (url) => {
  // Fetch Characters
  const data = await fetchCharacters(url);

  // console.log(data);
  // Display Characters
  const section = await displayCharacters(data);
  if (section) {
    setCharacter(section);
  }
};

export default showCharacters;
