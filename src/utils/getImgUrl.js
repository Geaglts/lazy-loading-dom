import { generateRandomInt } from './getRandomInt';

export function getImgUrl() {
  const LIMIT = 123;
  const BASE_URL = 'https://randomfox.ca/images';
  return `${BASE_URL}/${generateRandomInt(LIMIT)}.jpg`;
}
