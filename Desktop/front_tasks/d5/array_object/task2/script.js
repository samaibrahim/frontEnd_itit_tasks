//Fill an array of 5 elements from the user, sort it in descending and ascending
//orders

var num;
var array=[];

for (var i = 0; i < 5; i++) {
     
    do {
        num = prompt("Enter number" +(i + 1)+" :");
    } while (!num || isNaN(num));
    array.push(Number(num)); 
    alert("The number "+(i + 1) +" entered successfully!");
}


document.write(`<h1 style="color:red">u have entered the values  of  <span style="color:black">${array.join(',')}</span></h1>`);

array.sort((a,b)=> a-b);
for(var i = 0; i < array.length; i++)
{
    console.log(array[i]);
    
}

document.write(`<h1 style="color:red">ur values after being sorted ascending <span style="color:black">${array.join(',')}</span></h1>`);


array.sort((a,b)=> b-a);
for(var i = 0; i < array.length; i++)
{
    console.log(array[i]);
        
}

document.write(`<h1 style="color:red">ur values after being sorted descending  <span style="color:black">${array.join(',')}</span></h1>`);
