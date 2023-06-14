fetch('https://api.giphy.com/v1/gifs/trending?api_key=T6LoHEjeXh8kuRbbLTs8FGmJoll68mZd&limit=10&rating=g')
.then((response) => response.json())
.then((data) => {
  var mainBody = document.getElementsByTagName("section")[0];

  data.data.forEach(gif => {
    var image = document.createElement("img");
    image.src = gif.images.original.url;
  
    var card = document.createElement('figure');
    card.tabIndex = 0;

    const overlay = document.getElementsByClassName("overlay")[0];
    const background = overlay.getElementsByClassName("background")[0];
    const overlayImage = overlay.getElementsByTagName("img")[0];

    background.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    card.addEventListener("click", () => {
      overlayImage.src = gif.images.original.url;
      overlay.style.display = "block";
    });

    card.appendChild(image);
  
    mainBody.appendChild(card);
  });
});
