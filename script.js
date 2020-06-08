var numCharStr = "0123456789";                                // define string of numerical characters allowed
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";              // define string of lower case characters allowed 
var upperCaseStr = lowerCaseStr.toUpperCase();                // define string of upper case characters allowed
var specialCharStr = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";     // define string of special characters allowed/*

// Utility function to generate a random string of length passed as argument and from a string of allowed characters passed as argument
function randomStr(n, str) { 
  var answer = "";
  for (var i = n; i > 0; i--) { 
      answer += str[Math.floor(Math.random() * str.length)];  // get random index nb from string of characters allowed and add that character to string to be returned
  }
  return answer; 
}

// Utility function to shuffle a string
function shuffle(someString, n) {
  var arr = someString.split('');             // convert someString to an array b/c strings are immutable
  for (var i = 0 ; i < n-1 ; ++i) {
    console.log("i: " + i, arr[i]);
    var j = Math.floor(Math.random() * n);    // get random of [0, n-1]
    var temp = arr[i];
    console.log("j: " + j, arr[j]);           // swap someString[i] and someString[j]
    arr[i] = arr[j];
    console.log("new i: " + i, arr[i]);
    arr[j] = temp;
    console.log("new j: " + j, arr[j]);
  }
  someString = arr.join('');                  // swap arr[i] and arr[j]
  console.log("shuffled string: " + arr);
  return someString;                          // return shuffled string
}

// Function to force the user to enter an integer
function getNewInteger () {
  someInput = "";
  while (!Number.isInteger(parseFloat(someInput))) {      // prompt user until the input is an integer
    someInput = window.prompt("Your password should be no less than 8 characters long and no more than 128 characters long. Please enter an integer between 8 and 128.");
  };
  return parseInt(someInput);                             // convert string to integer and return it
}

// Function to set and validate password length
function getPasswordLength () {
  var pwLength = getNewInteger();                         // get an integer from the user
  while (pwLength < 8 || pwLength > 128) {                // verify the integer is between 8 and 128
    pwLength = getNewInteger();                           // prompt user for a new integer until it is valid (between 8 and 128)
  }
  return pwLength;                                        // return a valid password length
}

// Function to set and validate user criteria for password
function getUserCriteria () {
  while (!passwordObj.lowerCase && !passwordObj.upperCase && !passwordObj.numChar && !passwordObj.specialChar) {  // prompt user as long as all 4 criteria are set to FALSE
    window.alert("Please select AT LEAST ONE among the following four criteria for password generation.");
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
  /*var pwSetUp = function (charAllowed) {
    charOptions += 
  }*/
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
  pwShuffled = shuffle(pwGenerated, passwordObj.length);
  return pwShuffled;
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
  getUserCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
