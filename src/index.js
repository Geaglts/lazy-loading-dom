import './styles/main.scss';
import { ImageElement } from './containers/ImgElement';

function main() {
  const app = document.getElementById('app');
  const button = document.querySelector('#new-image');

  button.addEventListener('click', () => {
    const imageElement = ImageElement();
    app.appendChild(imageElement);
  });
}

main();
