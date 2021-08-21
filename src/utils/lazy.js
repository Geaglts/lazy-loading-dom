const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const action = (entry) => {
  const node = entry.target;
  console.log('Aqui ando perro');
  observer.unobserve(node);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(action);
});

export const registerImage = (image) => {
  observer.observe(image);
};
