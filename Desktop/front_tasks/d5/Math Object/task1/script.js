/* var r;
var area;
do{

   r=prompt("enter the number");
  if(!isNaN(r)|| !r){
     area=3.14*r*r;
}
}while(isNaN(r)|| !r);

document.write("<h1> the area : "+area+"</h1>"); */


//-------------------------------------------------------
var area;

do {
  var raduis = prompt("Enter radius of the circle:");

  if (isNaN(raduis) || raduis === "") {
    alert("Please enter a valid number.");
  } else {
    area = Math.PI * Math.pow(raduis, 2);
    break;  
  }
} while (true);

document.write( " <h1> the area is: "+area+"</h1>");
