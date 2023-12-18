// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(generateBtn)

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?'];

var characterSet = [];

var password = " ";

while (true) {
  passwordLength = +prompt("Please provide a password length");
  if (passwordLength >= 8 && passwordLength <= 128) {
    break;
  } else {
    alert("Password must be at least 8 characters and no more than 128 characters.");
  }
}

var wantsLowercase = confirm("Do you want to lowercase letters?");
var wantsUppercase = confirm("Do you want to uppercase letters?");
var wantsNumbers = confirm("Do you want to numbers?");
var wantsSpecialCharacters = confirm("Do you want to special characters?");

function generatePassword(){

if (wantsLowercase) {
    characterSet = characterSet.concat(lowercase)
}

if (wantsUppercase) {
    characterSet = characterSet.concat(uppercase)
}

if (wantsNumbers) {
    characterSet = characterSet.concat(numbers)
}

if (wantsSpecialCharacters) {
    characterSet = characterSet.concat(specialCharacters)
}

for (var count = 0; count < passwordLength; count++) {
    var ranIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet [ranIndex];
}

console.log(password)

return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
