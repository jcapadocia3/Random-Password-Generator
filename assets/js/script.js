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



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
