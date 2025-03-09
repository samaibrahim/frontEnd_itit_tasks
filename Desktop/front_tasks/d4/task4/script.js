/* make function isPrime to check if the number is prime or not  */
function isPrime(number) {
    if(typeof number =="number"){
      if (number < 2) {
        return false;
      }
      for (var i = 2; i <number; i++) {
        if (number % i === 0) {
            return false; 
        }
       }

     return true; 
    }
    else{
        throw "enter only numbers";
    }
}


console.log(isPrime(10));  


 

