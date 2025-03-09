/* var num1;
var num2;
var num3;
var array=[];
var sum=0;
var multi=1;
var division;

do{
   num1=prompt("enter the first number");

}while(!num1 || isNaN(num1));
alert("the num1 entered successfully");


do{
  num2=prompt("enter the second number");

}while(!num2 || isNaN(num2));
alert("the num2 entered successfully");


do{
  num3=prompt("enter the third number");

}while(!num3 || isNaN(num3));
alert("the num3 entered successfully");


array.push(Number(num1),Number(num2),Number(num3));
division=array[0];

for(var i=0;i<3;i++)
{
      sum=sum+array[i];

      multi=multi*array[i];
  
}

for(var i=1;i<array.length;i++)
{
  division=division/array[i];
}

document.write("<h1 style=color:red>the sum of the three values  "+"<span style=color:black>"+num1+"+"+num2+"+"+num3+"="+sum+"</span>"+"</h1>");
document.write("<h1 style=color:red>the multiplication of the three values   "+"<span style=color:black>"+num1+"*"+num2+"*"+num3+"="+multi+"</span>"+"</h1>");
document.write("<h1 style=color:red>the division of the three values   "+"<span style=color:black>"+num1+"/"+num2+"/"+num3+"="+division+"</span>"+"</h1>");
 */


//_______________________________________________________________________________________________________
//enhanced code
var num;
var array = [];
var sum = 0;
var multi = 1;
var division;


for (var i = 0; i < 3; i++) {
  
    do {
        num = prompt("Enter number" +(i + 1)+" :");
    } while (!num || isNaN(num));
    array.push(Number(num)); 
    alert("The number "+(i + 1) +" entered successfully!");
}


division = array[0];


for (var i = 0; i < array.length; i++) {
    sum += array[i];
    multi *= array[i];
    if (i > 0) division /= array[i];
}

// Display results
document.write(`<h1 style="color:red">The sum of the three values <span style="color:black">${array.join('+')}=${sum}</span></h1>`);
document.write(`<h1 style="color:red">The multiplication of the three values <span style="color:black">${array.join('*')}=${multi}</span></h1>`);
document.write(`<h1 style="color:red">The division of the three values <span style="color:black">${array.join('/')}=${division}</span></h1>`);