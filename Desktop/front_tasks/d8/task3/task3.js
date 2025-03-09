var btn = document.querySelector("button");
btn.addEventListener("click", function () {
  var neww = window.open("", "", "width=400,height=300");
  neww.displayme = function () {
    var index = 0;
    var message = ["w", "e", "l", "c", "o", "m", "e" ," ","f","o","r"," ","n","e","w"," ","p","a","g","e"];
    setInterval(function () {
      if (index < message.length) {
        neww.document.write(message[index]);
        index++;
      }
    }, 1000);
  };
  neww.displayme();
});
