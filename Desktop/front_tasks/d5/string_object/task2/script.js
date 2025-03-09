/* do{
  var str=prompt("enter the string do you want to count the e letter in it");
   if(!isNaN(str)||!str)
   {
      alert("Invalid input. Please enter a valid string that does not contain numbers.")
   } 
}while(!isNaN(str)||!str)


var count=0;
for(var i=0;i<str.length;i++)
{
    if(str[i]==='e')
    {
       count++;
    }
}
alert("the number of letter e in "+str+" is: "+count); */


//---------------------------------------------------------------------
do{
    var str=prompt("enter the string do you want to count the e letter in it");
     if(!isNaN(str) ||!str)
     {
        console.log("Invalid input. Please enter a valid string that does not contain numbers.")
     } 
  }while(!isNaN(str)||!str)

   //str.split("e").length-1;
var countletter=str.match(/e/gi);
alert("the number of letter e in : "+str+"is : "+countletter.length);
