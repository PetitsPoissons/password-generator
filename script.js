var passwordObj = {
  length: ""
};
var numCharStr = "0123456789";
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = lowerCaseStr.toUpperCase();
var specialCharStr = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Utility function to generate a random string of length passed as argument and from a string of allowed characters passed as argument
function randomStr(len, str) { 
  var answer = "";
  for (var i = len; i > 0; i--) { 
      answer += str[Math.floor(Math.random() * str.length)]; 
  } 
  return answer; 
} 

// Function to force the user to enter an integer
function getNewInteger () {
  someInput = "";
  while (!Number.isInteger(parseFloat(someInput))) {
    someInput = window.prompt("Your password should be no less than 8 characters long and no more than 128 characters long. Please enter an integer between 8 and 128.");
    console.log("someInput: " + someInput);
  };
  return parseInt(someInput);
}

// Function to set and validate password length
function getPasswordLength () {
  var pwLength = getNewInteger();
  while (pwLength < 8 || pwLength > 128) {
    pwLength = getNewInteger();
    console.log("pwLength: " + pwLength);
  }
  console.log("last pwLength before returning it: " + pwLength);
  return pwLength;
}

// function to get user criteria for password
function getUserCriteria () {
  while (!passwordObj.lowerCase && !passwordObj.upperCase && !passwordObj.numChar && !passwordObj.specialChar) {
    window.alert("You must select at least one among four criteria for password generation. Get ready!")
    passwordObj.lowerCase = window.confirm("Would you like lower case characters in your password?");
    passwordObj.upperCase = window.confirm("Would you like upper case characters in your password?");
    passwordObj.numChar = window.confirm("Would you like numeric characters in your password?");
    passwordObj.specialChar = window.confirm("Would you like special characters in your password?");
  }
}

// function to generate a random password based on user criteria
function generatePassword() {
  var pwGenerated = "";
  var nbCharToGenerate = passwordObj.length;
  var charOptions = "";

  // if user selected to have lower case characters ...
  if (passwordObj.lowerCase) {
    // ... add the lower alpha string to the characters available for password generation,
    charOptions += lowerCaseStr;
    // and make sure there will be at least one lower case character in the password
    pwGenerated += randomStr(1, lowerCaseStr);
    nbCharToGenerate--;   // decrease nb of characters left to generate by 1
  }

  // if user selected to have upper case characters ...
  if (passwordObj.upperCase) {
    // ... add the upper alpha string to the characters available for password generation,
    charOptions += upperCaseStr;
    // and make sure there will be at least one upper case character in the password
    pwGenerated += randomStr(1, upperCaseStr);
    nbCharToGenerate--;   // decrease nb of characters left to generate by 1
  }
  
  // if user selected to have numeric characters ...
  if (passwordObj.numChar) {
    // ... add the numeric string to the characters available for password generation,
    charOptions += numCharStr;
    // and make sure there will be at least one numeric character in the password
    pwGenerated += randomStr(1, numCharStr);
    nbCharToGenerate--;   // decrease nb of characters left to generate by 1
  }

  // if user selected to have special characters ...
  if (passwordObj.specialChar) {
    // ... add the numeric string to the characters available for password generation,
    charOptions += specialCharStr;
    // and make sure there will be at least one numeric character in the password
    pwGenerated += randomStr(1, specialCharStr);
    nbCharToGenerate--;   // decrease nb of characters left to generate by 1
  }

  // generate a random password of length defined by the user and from the pool of characters available in charOptions
  pwGenerated += randomStr(nbCharToGenerate, charOptions);
  return pwGenerated;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordObj = {
    length: "",
    lowerCase: "",
    upperCase: "",
    numChar: "",
    specialChar: ""
  }
  passwordObj.length = getPasswordLength();
  console.log("passwordObj.length: " + passwordObj.length);
  getUserCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
