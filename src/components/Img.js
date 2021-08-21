import { getImgUrl } from '../utils/getImgUrl';

export function Img() {
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
