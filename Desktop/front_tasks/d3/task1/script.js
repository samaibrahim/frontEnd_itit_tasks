var sum = 0;   
do{
  var input=prompt("enter the num :");
  if(isNaN(input))
  {
    alert("Invalid input. Please enter a valid numeric value.");
  }
  

  else{
    sum+=parseInt(input);
  }
 console.log(input !== 0 && sum<100 )
}while(input != 0 && sum<100);

document.write("the total sum :"+sum);



