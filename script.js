var passwordObj = {
  length: getPasswordLength(),
  //lowerCase: getLowerCase(),
  //upperCase: getUpperCase(),
  //numChar: getNumeric(),
  //specialChar: getSpecialChar()
}
/*
// utility function to check for null user answers
function nullAnswer(userInput) {
  if (userInput === "" || userInput === null) {
    return true;
  } else {
    return false;
  }
}*/

// function to set and validate password length
function getPasswordLength () {
  var userAnswer = "";
  while (!parseInt(userAnswer)) {
    userAnswer = window.prompt("Choose your password length (between 8 and 128 characters");
  };
  if 
}

function generatePassword() {

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

console.log(passwordObj.length);

