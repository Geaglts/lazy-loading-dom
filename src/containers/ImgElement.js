import { ImgContainer } from '../components/ImgContainer';
import { Img } from '../components/Img';

export function ImageElement() {
  const imageContainer = ImgContainer();
  imageContainer.appendChild(Img());
  return imageContainer;
}
