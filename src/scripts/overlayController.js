addOnClickEvent = function(elementArray) {
  const overlay = document.getElementsByClassName("overlay")[0];
  const image = overlay.getElementsByTagName("img")[0];
  const background = overlay.getElementsByClassName("background")[0];

  background.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  Array.from(elementArray).forEach((element) => {
    element.addEventListener("click", () => {
      image.src = element.getElementsByTagName("img")[0].src;
      overlay.style.display = "block";
    })
  });
};

window.addEventListener('DOMContentLoaded', () => {
  addOnClickEvent(document.getElementsByTagName("figure"));
});