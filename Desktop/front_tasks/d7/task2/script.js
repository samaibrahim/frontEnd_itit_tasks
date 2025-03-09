var screen=document.getElementById("Answer");
var expression="";


function EnterNumber(value)
{
    expression+=value;
    screen.value=expression;
}

function EnterOperator(value)
{ if(expression.length==0){
    return
}
    expression+=value;
    screen.value=expression;
}

function EnterClear()
{
    screen.value="";
}

function EnterEqual()
{
   screen.value="";
   var result=eval(expression)
   if(result!=Infinity)
   {
    screen.value=result;
   }
   else
   {
    screen.value="error";
   }
   
   expression="";
}