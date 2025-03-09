var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var newwindow = window.open("", "", "width=400,height=300");

  newwindow.displayme = function () {
    var clockInterval;

    function updateClock() {
      var currentTime = new Date();
      var formattedTime = currentTime.toLocaleTimeString();
      newwindow.document.body.innerHTML = formattedTime;
    }

    clockInterval = setInterval(updateClock, 1000);
    newwindow.addEventListener("keydown", function (event) {
      if (event.altKey && event.key === "w") {
        clearInterval(clockInterval);
        alert("Clock stopped");
      }
    });
  };

  newwindow.displayme();
});
