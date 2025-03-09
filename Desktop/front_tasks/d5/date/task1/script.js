const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
do {
  var date = prompt(
    "Enter your birth date in the following format (DD – MM – YYYY) ex. 22–01–1999"
  );
  try {
    if (
      date.length === 10 &&
      date.indexOf("-") === 2 &&
      date.lastIndexOf("-") === 5 &&
      date != ""
    ) {
      var day = parseInt(date.slice(0, 2), 10);
      var month = parseInt(date.slice(3, 5), 10) - 1;
      var year = parseInt(date.slice(6), 10);

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
        function createDate(day, month, year) {
          var newDate = new Date(year, month, day);
          document.write(`<h1 
            style='width:100%;
            text-align:center;
            '>
            The date is <span style='color:red'> ${
              day +
              " " +
              months[newDate.getMonth()] +
              " " +
              newDate.getFullYear()
            }</span> 
            </h1>`);
        }
        createDate(day, month, year);
        break;
      } else alert("Invalid Date Values");
    } else alert("Wong Date Format");
  } catch (err) {
    alert(err.message);
  }
} while (true);