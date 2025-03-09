var conatiner =document.querySelector(".center");

var foot=document.createElement("div");
document.querySelector(".center").append(foot);
foot.classList.add("footer");

const originalImage =document.images[0];
const clonedImage = originalImage.cloneNode(true);
foot.append(clonedImage)

var header=document.getElementById("header");
header.style.display="flex";
header.style.justifyContent="right";

var footer=document.querySelector(".footer");
footer.style.display="flex";
footer.style.justifyContent="left";
footer.style.marginTop="200px";

var navigation=document.querySelector("#navigation");
navigation.style.display="flex";
navigation.style.justifyContent="center";

var ul=document.getElementById("nav");
ul.style.listStyleType="circle";