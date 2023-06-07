setTabIndexForElementAndChild = function(elementArray) {
  Array.from(elementArray).forEach((element) => {
    element.tabIndex = 0;
    Array.from(element.children).forEach((child) => {
      child.tabIndex = 0;
    });  
  });
};

window.addEventListener('DOMContentLoaded', () => {
  console.log(document.getElementsByClassName("content main"));
  setTabIndexForElementAndChild(document.getElementsByClassName("content main"));
  setTabIndexForElementAndChild(document.getElementsByClassName("content text"));
  setTabIndexForElementAndChild(document.getElementsByClassName("card"));
});
