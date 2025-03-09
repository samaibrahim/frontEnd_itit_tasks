var username;
var phoneNumber;
var mobilenumber;
var email;
var phoneRegex = /^\d{8}$/;
var mobileRegex=/^(011|012|010)\d{8}$/;
var gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

do{

     username = prompt("Enter a string:");

    if (/\d/.test(username)) {
        alert("The username contains numbers.");
    } 
    else if (!username) {
        alert("empty username");

    }
    else {
        alert("The username does not contain any numbers.");
    }
    
    
  }while(/\d/.test(username)||!username)


do{
     phoneNumber = prompt("Enter a phone number:");

    
    if (phoneRegex.test(phoneNumber)) {
        alert("Valid phone number.");
    } 
    else if (!phoneNumber) {
        alert("empty phone number.");

    }
    else {
       alert("Invalid phone number. It must be exactly 8 digits.");
    }
    
}while(!phoneRegex.test(phoneNumber)|| !phoneNumber)


do{
    mobilenumber = prompt("Enter a mobile number:");

    
    if (mobileRegex.test(mobilenumber) ) {
        alert("Valid mobile number.");
    } 
    else if (!mobilenumber) {
        alert("empty mobile number.");

    }
    else {
       alert("Invalid mobile number. It must be exactly 11 digits.");
    }

}while(!mobileRegex.test(mobilenumber) || !mobilenumber)


do{
    email = prompt("Enter a your email:");
    
        
    if (gmailRegex.test(email)) {
        alert("Valid email.");
    }
    else if (!email) {
        alert("empty email.");

    } else {
        alert("Invalid email. please enter again.");
    }
    
}while(!gmailRegex.test(email) ||!email)


// Display collected data using document.write
document.write("<h2>User Information</h2>");
document.write("<p>Username: " + username + "</p>");
document.write("<p>Phone Number: " + phoneNumber + "</p>");
document.write("<p>Mobile Number: " + mobilenumber + "</p>");
document.write("<p>Email: " + email + "</p>");