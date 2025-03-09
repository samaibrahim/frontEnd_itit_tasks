var images = document.getElementsByClassName("imag");
console.log(images);
var slideshowInterval;
var imageCounter = 0;
var reverseCounter = 0;

function startSlideshow() {
  slideshowInterval = setInterval(function () {
    if (imageCounter < images.length) {
     
      images[imageCounter].src = "photos/marble2.webp";
      imageCounter++;
      
    }

    if (reverseCounter < images.length) {
     
      images[reverseCounter].src = "photos/marble1.webp";
      reverseCounter++;
     
    }

    if (imageCounter >= images.length || reverseCounter >= images.length) {
      imageCounter = 0;
      reverseCounter = 0;
      images[imageCounter].src = "photos/marble2.webp";
    }
  }, 500);
}

startSlideshow();

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    clearInterval(slideshowInterval);
  });

  images[i].addEventListener("mouseout", function () {
    startSlideshow();
  });
}
