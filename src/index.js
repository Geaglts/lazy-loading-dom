import './styles/main.scss';

function generateRandomInt(limit) {
  return Math.floor(Math.random() * limit);
}

function getImgUrl() {
  const LIMIT = 123;
  const BASE_URL = 'https://randomfox.ca/images';
  return `${BASE_URL}/${generateRandomInt(LIMIT)}.jpg`;
}

function createImgElement() {
  const div = document.createElement('div');
  const img = document.createElement('img');
  //div
  div.appendChild(img);
  div.classList.add('image-container');
  // img - hijo
  img.src = getImgUrl();
  img.classList.add('image');
  return div;
}

function main() {
  const app = document.getElementById('app');
  const button = document.querySelector('#new-image');
  button.addEventListener('click', () => {
    const imageElement = createImgElement();
    app.appendChild(imageElement);
  });
}

main();
