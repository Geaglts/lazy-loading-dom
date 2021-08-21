import { getImgUrl } from '../utils/getImgUrl';

export function Img() {
  const img = document.createElement('img');
  img.classList.add('image');
  img.dataset.src = getImgUrl();
  return img;
}
