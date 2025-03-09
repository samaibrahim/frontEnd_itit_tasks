var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function getDayName(dateParam) {
    var day = parseInt(dateParam.slice(0, 2), 10);
    var month = parseInt(dateParam.slice(3, 5), 10) - 1;
    var year = parseInt(dateParam.slice(6), 10);
  
    var date = new Date(year, month, day);
  
    if (
      !isNaN(day) &&
      !isNaN(month) &&
      !isNaN(year) &&
      day > 0 &&
      day <= 31 &&
      month >= 0 &&
      month <= 11 &&
      year >= 1900
    ) {
      document.write(`<h1 
    style='width:100%;
    text-align:center;
    '>
    The day name is <span style='color:red'> ${dayNames[date.getDay()]}</span> 
    </h1>`);
    } else {
      alert("Invalid Date Values");
    }
  }
  do {
    var date = prompt(
      "Enter your birth date in the following format (DD – MM – YYYY) ex. 22–01–1999"
    );
    if (
      date.length === 10 &&
      date.indexOf("-") === 2 &&
      date.lastIndexOf("-") === 5 &&
      date != ""
    ) {
      getDayName(date);
      break;
    } else alert("Wong Date Format");
  } while (true);