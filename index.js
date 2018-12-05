const open = (url, attributes) => {
  Object.assign(document.createElement("a"), {
    href: url,
    ...attributes
  }).click();
};

export default open;
