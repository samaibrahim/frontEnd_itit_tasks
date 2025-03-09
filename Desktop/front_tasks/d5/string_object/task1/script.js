var string = prompt("Enter a string to check if it's a palindrome:");

while (string.trim() === "") {
    alert("Input cannot be empty.");
    string = prompt("Enter a string to check if it's a palindrome:");
}

var caseOption = prompt("Do you want to consider case sensitivity? (y/n):");

var caseSensitive = caseOption === "y";

if (!caseSensitive) {
    string = string.toLowerCase();
}

var reversedString = "";
for (var i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
}

if (string === reversedString) {
    alert(string + " is a palindrome.");
} else {
    alert(string + " is not a palindrome.");
}
