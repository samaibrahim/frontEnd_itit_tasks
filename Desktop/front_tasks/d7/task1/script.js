var body=document.getElementById("container");
console.log(body);

var div=document.getElementById("block");
console.log(div);



div.addEventListener("click",function(){
    var copyDiv=div.cloneNode(true);
    body.append(copyDiv);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var rgbValue = "#" + randomColor;
    copyDiv.style.backgroundColor=rgbValue;
})
