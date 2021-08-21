import { getImgUrl } from '../utils/getImgUrl';

export function Img() {
  const img = document.createElement('img');
  img.src = getImgUrl();
  img.classList.add('image');
  return img;
}
