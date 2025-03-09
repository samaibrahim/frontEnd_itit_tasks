function twoParameter(x,y)
{
   if(arguments.length !=2)
   {
      throw "enter two parameters only";
   }
   console.log(x,y);
}
twoParameter(2);