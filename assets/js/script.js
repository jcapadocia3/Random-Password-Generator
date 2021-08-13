// Assignment Code
// Some defined immedaitely while others are to be defined as the code is read.
var generateBtn = document.querySelector("#generate");
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%&^*()_+";
var passwordLength;
var confirmNum;
var confirmSpec;
var confirmUpper;
var confirmLower;
var userSelect;

// Begin function to generate a random password
function generatePassword() {
  // Begin prompts for user to declare how long they would like their password to be and what characters are to be included.
  passwordLength = prompt(
    "Let's setup a secured, randomly generated, password for you! Please enter between 8-128 characters to determine how long you want your password to be."
  );

  if (!passwordLength === true) {
    alert("You didn't enter anything!");
  } else if (passwordLength < 8) {
    alert(
      "Unfortunately, that number was outside of the required character limit."
    );
  } else if (passwordLength > 128) {
    alert(
      "Unfortunately, that number was outside of the required character limit."
    );
  } else {
    confirmNum = confirm(
      "Will your password contain numbers? 'Okay' means yes. 'Cancel' means no."
    );
    confirmSpec = confirm(
      "Will your password contain special characters? 'Okay' means yes. 'Cancel' means no."
    );
    confirmUpper = confirm(
      "Will your password contain upper case letters? 'Okay' means yes. 'Cancel' means no."
    );
    confirmLower = confirm(
      "Will your password contain lower case letters? 'Okay' means yes. 'Cancel' means no."
    );
  }

  // Begin conditional statements to decide what combinations of characters can be included in randomly generated password based on the user's input in the above prompts.
  if (
    confirmNum === false &&
    confirmSpec === false &&
    confirmUpper === false &&
    confirmLower === false
  ) {
    alert("Please start over and enter the required criteria.");
  } else if (
    confirmNum === true &&
    confirmSpec === true &&
    confirmUpper === true &&
    confirmLower === true
  ) {
    userSelect = numberChar.concat(specialChar, upperChar, lowerChar);
  } else if (
    confirmNum === true &&
    confirmSpec === true &&
    confirmUpper === true &&
    confirmLower === false
  ) {
    userSelect = numberChar.concat(specialChar, upperChar);
  } else if (
    confirmNum === true &&
    confirmSpec === true &&
    confirmUpper === false &&
    confirmLower === true
  ) {
    userSelect = numberChar.concat(specialChar, lowerChar);
  } else if (
    confirmNum === true &&
    confirmSpec === false &&
    confirmUpper === true &&
    confirmLower === true
  ) {
    userSelect = numberChar.concat(upperChar, lowerChar);
  } else if (
    confirmNum === false &&
    confirmSpec === true &&
    confirmUpper === true &&
    confirmLower === true
  ) {
    userSelect = specialChar.concat(upperChar, lowerChar);
  } else if (
    confirmNum === true &&
    confirmSpec === true &&
    confirmUpper === false &&
    confirmLower === false
  ) {
    userSelect = numberChar.concat(specialChar);
  } else if (
    confirmNum === false &&
    confirmSpec === false &&
    confirmUpper === true &&
    confirmLower === true
  ) {
    userSelect = upperChar.concat(lowerChar);
  } else if (
    confirmNum === true &&
    confirmSpec === false &&
    confirmUpper === false &&
    confirmLower === true
  ) {
    userSelect = numberChar.concat(lowerChar);
  } else if (
    confirmNum === true &&
    confirmSpec === false &&
    confirmUpper === true &&
    confirmLower === false
  ) {
    userSelect = numberChar.concat(upperChar);
  } else if (
    confirmNum === false &&
    confirmSpec === true &&
    confirmUpper === false &&
    confirmLower === true
  ) {
    userSelect = specialChar.concat(lowerChar);
  } else if (
    confirmNum === false &&
    confirmSpec === true &&
    confirmUpper === true &&
    confirmLower === false
  ) {
    userSelect = specialChar.concat(upperChar);
  } else if (
    confirmNum === true &&
    confirmSpec === false &&
    confirmUpper === false &&
    confirmLower === false
  ) {
    userSelect = numberChar;
  } else if (
    confirmNum === false &&
    confirmSpec === true &&
    confirmUpper === false &&
    confirmLower === false
  ) {
    userSelect = specialChar;
  } else if (
    confirmNum === false &&
    confirmSpec === false &&
    confirmUpper === true &&
    confirmLower === false
  ) {
    userSelect = upperChar;
  } else if (
    confirmNum === false &&
    confirmSpec === false &&
    confirmUpper === false &&
    confirmLower === true
  ) {
    userSelect = lowerChar;
  }

  // Declares empty string for #password input until a final password is generated.
  var password = "";

  // For loop to calculate all input from user to generate the final password.
  console.log(userSelect);
  for (var i = 0; i < passwordLength; i++) {
    var lengthOfString = userSelect.length;
    var randomDecimalNumber = Math.random();
    var randomNumber = randomDecimalNumber * lengthOfString;
    var randomNumberRoundedDown = Math.floor(randomNumber);
    var pickedChoice = userSelect[randomNumberRoundedDown];
    password += pickedChoice;
  }

  // Enters final password generated into the #password output field.
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
