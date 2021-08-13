// Assignment Code
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


function generatePassword() {

    passwordLength = prompt("Let's setup a secured, randomly generated, password for you! Please enter between 8-128 characters to determine how long you want your password to be.");
    
if (!passwordLength === true) {
  alert("You didn't enter anything!");
} else if (passwordLength < 8) {
  alert("Unfortunately, that number was outside of the required character limit.");
} else if (passwordLength > 128) {
  alert("Unfortunately, that number was outside of the required character limit.");
} else {
  confirmNum = confirm("Will your password contain numbers? 'Okay' means yes. 'Cancel' means no.");
  confirmSpec = confirm("Will your password contain special characters? 'Okay' means yes. 'Cancel' means no.");
  confirmUpper = confirm("Will your password contain upper case letters? 'Okay' means yes. 'Cancel' means no.");
  confirmLower = confirm("Will your password contain lower case letters? 'Okay' means yes. 'Cancel' means no.");
}

if (confirmNum === false  && confirmSpec === false && confirmUpper === false && confirmLower === false) {
  alert("Please start over and enter the required criteria.");
} else if (confirmNum === true && confirmSpec === true && confirmUpper === true && confirmLower === true) {
  userSelect = numberChar.concat(specialChar, upperChar, lowerChar)
  console.log("test that this works")
} else if (confirmNum === true && confirmSpec === true && confirmUpper === true && confirmLower === false) {
  userSelect = numberChar.concat(specialChar, upperChar)
  console.log("im only using 3 characters")
} else if (confirmNum === true && confirmSpec === true && confirmUpper === false && confirmLower === true) {
  userSelect = numberChar.concat(specialChar, lowerChar)
  console.log("im using 3 different characters")
} else if (confirmNum === true && confirmSpec === false && confirmUpper === true && confirmLower === true) {
  userSelect = numberChar.concat(upperChar, lowerChar)
} else if (confirmNum === false && confirmSpec === true && confirmUpper === true && confirmLower === true) {
  userSelect = specialChar.concat(upperChar, lowerChar)
} else if (confirmNum === true && confirmSpec === true && confirmUpper === false && confirmLower === false) {
  userSelect = numberChar.concat(specialChar)
  console.log("im using 2 characters")
} else if (confirmNum === false && confirmSpec === false && confirmUpper === true && confirmLower === true) {
  userSelect = upperChar.concat(lowerChar)
} else if (confirmNum === true && confirmSpec === false && confirmUpper === false && confirmLower === true) {
  userSelect = numberChar.concat(lowerChar)
} else if (confirmNum === true && confirmSpec === false && confirmUpper === true && confirmLower === false) {
  userSelect = numberChar.concat(upperChar)
} else if (confirmNum === false && confirmSpec === true && confirmUpper === false && confirmLower === true) {
  userSelect = specialChar.concat(lowerChar)
} else if (confirmNum === false && confirmSpec === true && confirmUpper === true && confirmLower === false) {
  userSelect = specialChar.concat(upperChar)
} else if (confirmNum === true && confirmSpec === false && confirmUpper === false && confirmLower === false) {
  userSelect = (numberChar)
  console.log("im using only 1 character")
} else if (confirmNum === false && confirmSpec === true && confirmUpper === false && confirmLower === false) {
  userSelect = (specialChar)
} else if (confirmNum === false && confirmSpec === false && confirmUpper === true && confirmLower === false) {
  userSelect = (upperChar)
} else if (confirmNum === false && confirmSpec === false && confirmUpper === false && confirmLower === true) {
  userSelect = (lowerChar)
}

var password = ""

console.log(userSelect)
for (var i = 0; i < passwordLength; i++) {
  var lengthOfString = userSelect.length
  console.log(lengthOfString)
  var randomDecimalNumber = Math.random()
  console.log(randomDecimalNumber)
  var randomNumber = randomDecimalNumber * lengthOfString
  console.log(randomNumber)
  var randomNumberRoundedDown = Math.floor(randomNumber)
  console.log(randomNumberRoundedDown)
  var pickedChoice = userSelect[randomNumberRoundedDown]
  console.log(pickedChoice)
  password += pickedChoice
  console.log(password)
}

return password

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
