import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const displayCharacter = ({ data }) => {
  // Hide Loading
  hideLoading();
  // console.log(data.results[0]);
  const {
    name,
    thumbnail: image,
    description: desc,
    urls: links,
  } = data.results[0];
  console.log(links);
  // const img = getElement('.drink-img');
  const section = getElement('.single-character');
  const btn = getElement('.btn');
  const drinkInfo = getElement('.character-info');
  const characterName = getElement('.character-name');
  const characterDesc = getElement('.character-desc');
  const characterLinks = getElement('.character-links');
  const img = new Image();
  img.src = `${image.path}/detail.jpg`;
  img.alt = name;
  img.className = 'drink-img';
  btn.classList.add('single-btn');
  section.insertBefore(img, drinkInfo);
  characterName.textContent = name;
  characterDesc.textContent = desc;
  document.title = name;
  characterLinks.innerHTML = links
    .map((item) => {
      return `
    <li>
    <i class="fa-solid fa-link"></i>
    <a href="${item.url}" target="_blank">${item.type}</a>
    </li>
    `;
    })
    .join('');
};

export default displayCharacter;
