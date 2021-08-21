import './styles/main.scss';
import { Img } from './components/Img';

function main() {
  const app = document.getElementById('app');
  const button = document.querySelector('#new-image');
  button.addEventListener('click', () => {
    const imageElement = Img();
    app.appendChild(imageElement);
  });
}

main();
