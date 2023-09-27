// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "~`!@#$%^&*()_+{}[]\\|;:'\"<>,.?/+=",
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
  if (!numTrue.length) return "At least one character type must be selected";
  return userConstraints;
}

function generatePassword(userConstraints) {
  let characterSet = "";
  let finalPassword = "";
  const characterTypes = Object.entries(userConstraints)
    .filter(([_, value]) => typeof value == "boolean" && value)
    .map(([name]) => name);
  for (let type of characterTypes) characterSet += characters[type];
  for (let i = 0; i < userConstraints.length; i++) {
    finalPassword +=
      characterSet[Math.floor(Math.random() * characterSet.length)];
  }
  return finalPassword;
}

function writePassword() {
  const userConstraints = promptConstraints();
  if (typeof userConstraints == "string")
    return alert(`Error: ${userConstraints}`);
  var password = generatePassword(userConstraints);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
