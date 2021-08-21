const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const action = (entry) => {
  const node = entry.target;
  const image = node.firstChild;
  const url = image.dataset.src;
  image.src = url;
  observer.unobserve(node);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(action);
});

export const registerImage = (image) => {
  observer.observe(image);
};
