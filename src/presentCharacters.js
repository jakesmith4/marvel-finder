import fetchCharacters from './fetchCharacters.js';
import displayCharacters from './displayCharacters.js';

const showCharacters = async (url) => {
  // Fetch Characters
  const data = await fetchCharacters(url);

  // console.log(data);
  // Display Characters
  const section = await displayCharacters(data);
  console.log(section);
};

export default showCharacters;
