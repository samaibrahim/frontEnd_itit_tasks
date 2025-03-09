//Enter another value to calculate its square root and alert the result.
var num;
var squareRoot;

do{

   num=prompt("enter the number");
  if(!isNaN(num) || !num){
   squareRoot=Math.sqrt(num);
}
}while(isNaN(num)|| !num);

alert("the squareRoot of " +num+ " is : "+squareRoot);