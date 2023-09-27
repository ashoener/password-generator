// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "~!@#$%^&*()_+{}[]\\|;:'\"<>,.?/",
};

// Write password to the #password input
const constraints = {
  minLength: 8,
  maxLength: 128,
  length: 8,
  lowercase: true,
  uppercase: true,
  numbers: true,
  special: true,
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
