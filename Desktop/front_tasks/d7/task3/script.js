
var par=document.getElementById("PAR");
console.log(par);

function ChangeFont(value)
{
    par.style.fontFamily=value;
}

function ChangeAlign(value)
{
     par.style.textAlign=value;
}

function ChangeHeight(value)
{
    par.style.lineHeight=value;
}

function ChangeLSpace(value)
{
    par.style.letterSpacing =value;
}

function ChangeIndent(value)
{
    par.style.textIndent=value;
}

function ChangeTransform(value)
{
    par.style.textTransform=value;
}

function ChangeDecorate(value)
{
    par.style.textDecoration=value;
}

function ChangeBorder(value)
{
    par.style.border=value;
}

function ChangeBorderColor(value)
{
    par.style.borderColor=value;
}

//-----------------------------------------------

var fontFamily=document.getElementById("fontFamily");
fontFamily.addEventListener("click",function(e){
    par.style.fontFamily=e.target.value;
})



