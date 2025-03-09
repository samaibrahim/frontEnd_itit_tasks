var buttons = document.querySelectorAll(".btn button"); // Select all buttons inside .btn
var img = document.querySelector("img");
var counter = 0;
var images = [
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg"
];
var interval; // Variable for setInterval


    buttons[0].addEventListener("click", function () {
        if (counter < images.length - 1) {
            counter++;
            img.src = images[counter];
        }
    });

    buttons[1].addEventListener("click", function () {
        interval = setInterval(function () {
            img.src = images[counter];
            counter++;
            if (counter === images.length) {
                counter = 0; 
            }
        }, 2000);
    });

    buttons[2].addEventListener("click", function () {
        clearInterval(interval); // Stop the slideshow
    });

    buttons[3].addEventListener("click", function () {
        if (counter > 0) {
            counter--;
            img.src = images[counter];
        }
    });

