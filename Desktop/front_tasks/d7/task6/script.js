var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var emailInput = document.getElementById('email');
var nameError = document.getElementById('name-error');
var ageError = document.getElementById('age-error');
var emailError = document.getElementById('email-error');
var dataDisplay = document.getElementById('data-display').querySelector('tbody');

var users = [];

// Validation Functions
function validateName() {
    var name = nameInput.value.trim();
    if (name === "") {
        nameError.textContent = "This field is required.";
        return false;
    } else if (!isNaN(name)) {
        nameError.textContent = "Please enter characters only.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

function validateAge() {
    var age = ageInput.value.trim();
    if (age === "") {
        ageError.textContent = "This field is required.";
        return false;
    } else if (isNaN(age)) {
        ageError.textContent = "Please enter numbers only.";
        return false;
    } else {
        ageError.textContent = "";
        return true;
    }
}

function validateEmail() {
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.textContent = "This field is required.";
        return false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = "Invalid email format.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Add User
function addUser() {
    if (validateName() && validateAge() && validateEmail()) {
        var userData = {
            name: nameInput.value.trim(),
            age: ageInput.value.trim(),
            email: emailInput.value.trim(),
        };
        users.push(userData);
        displayUsers();
        resetForm();
    }
}

// Display Users in Table
function displayUsers() {
    dataDisplay.innerHTML = ''; // Clear previous data
    users.forEach(user => {
        var row = document.createElement('tr');
        row.innerHTML = `<td>${user.name}</td><td>${user.age}</td><td>${user.email}</td>`;
        dataDisplay.appendChild(row);
    });
}

// Reset Form
function resetForm() {
    nameInput.value = '';
    ageInput.value = '';
    emailInput.value = '';
    nameError.textContent = '';
    ageError.textContent = '';
    emailError.textContent = '';
}

// Event Listeners
document.getElementById('add').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    addUser();
});

document.getElementById('reset').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    resetForm();
});
