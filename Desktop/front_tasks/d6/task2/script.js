var arrOfObj = [];
do {
  var personNumbers = prompt("Enter the no of Persons");
  if (isNaN(personNumbers) || personNumbers == "") {
    alert("Please,Enter numbers");
  }
  for (var i = 0; i < parseInt(personNumbers); i++) {
    var obj = {};
    do {
      var personName = prompt("Enter user" + (i + 1) + " name");
      if (personName == "" || !isNaN(personName)) {
        alert("Please,Enter valid name");
      } else {
        obj.name = personName;
      }
    } while (personName == "" || !isNaN(personName));
    do {
      var personAge = prompt("Enter user" + (i + 1) + " age");
      if (personAge == "" || isNaN(personAge)) {
        alert("Please,Enter valid age");
      } else {
        obj.age = personAge;
      }
    } while (personAge == "" || isNaN(personAge));
    arrOfObj.push(obj);
    console.log(arrOfObj);
  }
} while (isNaN(personNumbers) || personNumbers == "");
var tbody = document.querySelector("tbody");

console.log(tbody);
console.log(arrOfObj);
tbody.innerHTMl="";

for (var i = 0; i < arrOfObj.length; i++) {
  tbody.innerHTML +=
    "<tr><td>" +
    arrOfObj[i].name +
    "</td><td>" +
    arrOfObj[i].age +
    "</td></tr>";
}
var table=document.querySelector("table");
table.classList.remove("hide");
table.classList.add("show");