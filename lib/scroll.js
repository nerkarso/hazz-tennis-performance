export const scrollTo = (selector) => {
  const elem = document.querySelector(selector);
  if (elem) elem.scrollTo(0, elem.scrollHeight);
};
