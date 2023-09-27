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

function promptConstraints() {
  const length = parseInt(
    prompt("Enter password length. Must be between 8 and 128 characters.")
  );
  if (isNaN(length)) {
    return "Length must be a number";
  } else if (length < constraints.minLength || length > constraints.maxLength) {
    return "Length must be between 8 and 128 characters.";
  }
  const userConstraints = {
    special: confirm("Include special characters?"),
    lowercase: confirm("Include lowercase characters?"),
    uppercase: confirm("Include uppercase characters?"),
    numbers: confirm("Include numeric characters?"),
    length,
  };
  const numTrue = Object.values(userConstraints).filter(
    (c) => typeof c == "boolean" && c
  );
  if (!numTrue) return "At least one character type must be selected";
  return userConstraints;
}

function writePassword() {
  console.log(promptConstraints());
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
