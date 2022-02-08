import getElement from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayCharacters = async ({ data }) => {
  const section = getElement('.section-center');
  const title = getElement('.title');

  const characters = data.results;
  if (characters.length === 0) {
    hideLoading();
    title.textContent = 'Sorry, no Marvel Characters matched your search';
    section.innerHTML = null;
    return;
  }

  const newCharacters = characters
    .map((character) => {
      const { id, name, thumbnail: image } = character;
      return `
      <a href="character.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image.path}/detail.jpg" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>
      `;
    })
    .join('');
  // Hide Loading
  hideLoading();
  title.textContent = '';
  section.innerHTML = newCharacters;
  return section;
};

export default displayCharacters;
