var xhr = $.get("https://api.giphy.com/v1/gifs/trending?api_key=T6LoHEjeXh8kuRbbLTs8FGmJoll68mZd&limit=10&rating=g");
xhr.done(function(data) { 
  var mainBody = document.getElementsByClassName("content")[0];

  data.data.forEach(gif => {
    var image = document.createElement("img");
    image.src = gif.images.original.url;
  
    var card = document.createElement('div');
    card.className = "card";
    card.appendChild(image);
  
    mainBody.appendChild(card);
  });

});