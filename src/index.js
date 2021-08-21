import './styles/main.scss';
import { ImageElement } from './containers/ImgElement';
import { registerImage } from './utils/lazy';

function main() {
  const app = document.getElementById('app');
  const button = document.querySelector('#new-image');

  button.addEventListener('click', () => {
    const imageElement = ImageElement();
    app.appendChild(imageElement);
    registerImage(imageElement);
  });
}

main();
