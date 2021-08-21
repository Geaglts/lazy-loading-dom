export const stats = {
  totalImages: 0,
  loadedImages: 0,
};

const showStats = () => {
  console.log('-'.repeat(50));
  console.log(`🎩 Total de imagenes: ${stats.totalImages}`);
  console.log(`🦊 Imagenes mostradas: ${stats.loadedImages}`);
  console.log('-'.repeat(50));
};

const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const action = (entry) => {
  const node = entry.target;
  const image = node.firstChild;
  const url = image.dataset.src;
  image.src = url;
  observer.unobserve(node);
  stats.loadedImages++;
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(action);
  showStats();
});

export const registerImage = (image) => {
  stats.totalImages++;
  observer.observe(image);
};
