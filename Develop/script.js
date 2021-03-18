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
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var special = ["!","@","#","$","%","^","&","*","(",")","[","]","{","}","<",">",",",".","?","/"];
  
  //Determine Password Length
  while ((pwLength<8) || (pwLength>128)) {
    pwLength = Math.floor(prompt("How many characters for your password? Pick a number between 8 and 128:"));
  }
  
  //Empty Arrays for character options and password to be updated
  var password = new Array(pwLength);
  var options = new Array(0);

  //Deciding which sets of character to use
    ifLower = confirm("Would you like your password to include lowercase letters?");
    if (ifLower) {
      options = options.concat(lowerCase);
    }

    ifUpper = confirm("Would you like your password to include uppercase letters?");
    if (ifUpper) {
      options = options.concat(upperCase);
    }

    ifNumber = confirm("Would you like your password to include numbers?");
    if (ifNumber) {
      options = options.concat(numbers);
    }

    ifSpecial = confirm("Would you like your password to include special characters?");
    if (ifSpecial) {
      options = options.concat(special);
    }

    //Cannot allow for no sets of characters chosen
    if(options.length === 0) {
      alert("Warning! You should pick at least one type of characters for your password!");
      return
  }

  //Updating each individual digit
  for (i=0;i<pwLength;i++) {
    password[i]=options[Math.floor(Math.random() * options.length)];
  }

  //Updating first 4 digits to ensure the password has at least one of each allowed type
  if (ifLower) {password[0]=lowerCase[Math.floor(Math.random() * lowerCase.length)];}
  if (ifUpper) {password[1]=upperCase[Math.floor(Math.random() * upperCase.length)];}
  if (ifNumber) {password[2]=numbers[Math.floor(Math.random() * numbers.length)];}
  if (ifSpecial) {password[3]=special[Math.floor(Math.random() * special.length)];}
  
  //Combining into one single string as function output
  password = password.join('');
  return password;
}

var tryout = '1234567890';
console.log(tryout[1]);