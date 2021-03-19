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

function generatePassword() {
  pwLength = 0;

  //Databases
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "0123456789".split("");
  var special = "!@#$%^&*()-=_+[]{}\|~`,./<>?".split("");

  var bigBase = [lowerCase, upperCase, numbers, special];
  var sets = ["lowercase letters", "uppercase letters", "numbers", "special characters"];
  
  //Determine Password Length
  while ((pwLength<8) || (pwLength>128) || isNaN(pwLength)) {
    pwLength = Math.floor(prompt("How many characters for your password? Pick a number between 8 and 128:"));
  }
  
  //Empty Arrays for character options, password to be updated and number sets
  var password = new Array(pwLength);
  var options = new Array(0);
  var numSets = new Array (4);

  //Deciding which sets of character to use
    for (i=0;i<sets.length;i++) {
      numSets[i] = confirm("Would you like your password to include " + sets[i] + "?");
      if (numSets[i]) {
        options = options.concat(bigBase[i]);
      }
    }

    //Cannot allow for no sets of characters chosen
    if(!numSets.includes(true)) {
      alert("Warning! You should pick at least one type of characters for your password!");
      return
  }

  //Updating each individual digit
  for (i=0;i<pwLength;i++) {
    password[i]=options[Math.floor(Math.random() * options.length)];
  }
  
  //Updating first 4 digits to ensure the password has at least one of each allowed type
  for (i=0;i<4;i++) {
    if (numSets[i]) {
      password[i] = bigBase[i][Math.floor(Math.random() * bigBase[i].length)];
    }
  }

  //Combining into one single string as function output
  password = password.join('');
  return password;
}
