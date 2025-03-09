/*  Make your own input type number that accepts numbers only. “using event object” */

var input=document.getElementById("number");
input.addEventListener("keypress",function(e){
    var key=e.key;
    if(isNaN(key))
    {
        e.preventDefault();
        alert("enter numbers only");
    }


})