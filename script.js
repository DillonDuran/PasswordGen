// Assignment code here
function generatePassword() {

  const length = parseInt(prompt("Enter password length"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a password length between 8 and 128 characters");
  } else {
    const includeLowercase = confirm("Include lowercase letters?");
    const includeUppercase = confirm("Include uppercase letters?");
    const includeNumbers = confirm("Include numbers?");
    const includeSpecialChars = confirm("Include special characters?");

    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
      alert("You must select at least one character type must be selected.");
    } 
    
    else {
      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "0123456789";
      const specialChars = "!@#$%^&*()_+-=[]{}|;:'\"<>,./?";

      let validChars = "";

      if (includeLowercase) validChars += lowercaseChars;
      if (includeUppercase) validChars += uppercaseChars;
      if (includeNumbers) validChars += numberChars;
      if (includeSpecialChars) validChars += specialChars;

      let password = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }
      return password;
    }
  }
}

generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);