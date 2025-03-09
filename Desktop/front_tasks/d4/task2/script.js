var sum=0;
function summ()
{

   for(var i=0;i<arguments.length;i++)
   {
      if(typeof arguments[i]=="number")
      {
         sum+=arguments[i];
      }
      else{
         throw "error enter numbers only";
      }
      
   }
   return sum;
}
var result=summ(5,"sama");
console.log(result);
