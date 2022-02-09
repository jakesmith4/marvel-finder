import { hideLoading } from './toggleLoading.js';
import getElement from './getElement.js';

const displayCharacter = ({ data }) => {
  console.log(data.results[0]);
  // Hide Loading
  hideLoading();
  // console.log(data.results[0]);
  const {
    name,
    thumbnail: image,
    description: desc,
    urls: links,
    events,
  } = data.results[0];

  const section = getElement('.single-character');
  const btn = getElement('.btn');
  const drinkInfo = getElement('.character-info');
  const characterName = getElement('.character-name');
  const characterDesc = getElement('.character-desc');
  const characterLinks = getElement('.character-links');
  const eventsComics = getElement('.events-comics');
  const headingFours = document.querySelectorAll('.heading-4');
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
    <a href="${item.url}" target="_blank">
    <i class="fa-solid fa-link"></i>
    ${item.type}
    </a>
    </li>
    `;
    })
    .join('');

  console.log(events.items);
  const allEvents = events.items
    .map((item) => {
      return `<li>${item.name}</li>`;
    })
    .join('');
  eventsComics.innerHTML = allEvents;
  headingFours.forEach((heading) => {
    heading.style.display = 'block';
  });
};

export default displayCharacter;
