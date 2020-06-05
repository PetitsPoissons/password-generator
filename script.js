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

// utility function to generate a random string of length passed as argument and from a string of allowed characters passed as argument
function randomStr(len, str) { 
  var answer = "";
  for (var i = len; i > 0; i--) { 
      answer += str[Math.floor(Math.random() * str.length)]; 
  } 
  return answer; 
} 

// function to set and validate password length
function getPasswordLength () {
  var userAnswer = "";
  // force user to enter an integer
  while (!Number.isInteger(parseFloat(userAnswer))) {
    userAnswer = window.prompt("Choose your password length (enter an integer between 8 and 128):");
  };
  // check that the integer entered by the user is between 8 and 128
  var pwLength = parseInt(userAnswer);
  if (pwLength < 8) {
    window.alert("The password should be at least 8 characters long. Please try again.");
    getPasswordLength();
  }
  else if (pwLength > 128) {
    window.alert("The password cannot be more than 128 characters long. Please try again.");
    getPasswordLength();
  }
  else {
    return pwLength;
  }
}

// function to generate a random password based on user criteria
function generatePassword() {
  // define string from which password can be selected
  var charOptions = '0123456789abcdefghijklmnopqrstuvwxyz';
  // generate a random password of length defined by the user and from the pool of characters available in charOptions
  var pwGenerated = randomStr(passwordObj.length, charOptions);
  return pwGenerated
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
generateBtn.addEventListener("click", writePassword);
