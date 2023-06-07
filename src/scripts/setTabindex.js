setTabIndexForElement = function(elementArray) {
  Array.from(elementArray).forEach((element) => {
    element.tabIndex = 0;
  });
};

window.addEventListener('DOMContentLoaded', () => {
  setTabIndexForElement(document.getElementsByClassName("card"));
});
