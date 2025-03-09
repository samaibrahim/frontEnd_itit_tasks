/* Write a function that takes any number of parameters and returns them reversed using
array’s reverse function. */

function reverseParams() {
//    var arr=[];
//    for(var i=0;i<arguments.length;i++)
//    {
//        arr.push(arguments[i]);
//    }
    var arr = Array.from(arguments)
    var res=arr.reverse();
    return res;
}


var x = reverseParams(1,2,3);
console.log(x);
console.log(reverseParams('a', 'b', 'c')); 
console.log(reverseParams(true, false, 42));
 

