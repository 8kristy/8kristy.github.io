fetch('https://api.giphy.com/v1/gifs/trending?api_key=T6LoHEjeXh8kuRbbLTs8FGmJoll68mZd&limit=10&rating=g')
.then((response) => response.json())
.then((data) => {
  var mainBody = document.getElementsByTagName("section")[0];

  data.data.forEach(gif => {
    var image = document.createElement("img");
    image.src = gif.images.original.url;
  
    var card = document.createElement('figure');
    card.tabIndex = 0;
    card.appendChild(image);
  
    mainBody.appendChild(card);
  });
});
