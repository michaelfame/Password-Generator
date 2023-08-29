// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
// create a Variable to store the length of the password from the user.
  let lengthPassword = parseInt(
    prompt("How many characters do you want in your password")
  )

// setting conditions to confirm user input for passowrd length is Valid
  if(isNaN(lengthPassword)===true){
    alert("Null values not accepted! Do specify a number for you password length ")
    return;
  }
/* Conditional statement for comparing the length of password input to be
between 10 and 64 length */

  if(lengthPassword < 10 || lengthPassword >= 65){
   lengthPassword = prompt(" How many characters do you want your password to be? \n Password must be between 10 and 64 characters.");
    return; 
  }

 // creating prompts for uppercase, lowercase, numbers and special characters

 let hasSpecialCharacters = confirm( 
  "Click the Ok button to confirm including special character"
 )

 let hasNumericCharacters = confirm( 
  "Click the Ok button to confirm including numeric character"
 )


 let hasLowerCasedCharacters = confirm( 
  "Click the Ok button to confirm including lowercase character"
 )

 let hasUpperCasedCharacters = confirm( 
  "Click the Ok button to confirm including uppercase character"
 )

 if(hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false) {
      alert( "user password must contain at leaset one character type");
      return;        
    }

    let PasswordOptions = {
      lengthPassword: lengthPassword,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters
      
    }

    return PasswordOptions;
  }
    
// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex]; 

  return randomElement;
   
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  let result = []

  let possibleCharacter = []

  let expectedCharacter = []

  if(options.hasSpecialCharacters){
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    expectedCharacter.push(getRandom(specialCharacters))

    // console.log(possibleCharacter);
    // console.log(expectedCharacter);
  }
  if(options.hasNumericCharacters){
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    expectedCharacter.push(getRandom(numericCharacters))

    //  console.log(possibleCharacter);
    //  console.log(expectedCharacter);

  }

  if(options.hasLowerCasedCharacters){
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    expectedCharacter.push(getRandom(lowerCasedCharacters))

    //  console.log(possibleCharacter);
    //  console.log(expectedCharacter);
  }

    if(options.hasUpperCasedCharacters){
      possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
      expectedCharacter.push(getRandom(upperCasedCharacters))
  
      //  console.log(possibleCharacter);
      //  console.log(expectedCharacter);

  }
  console.log(possibleCharacter);



for(let index = 0; index < options.length; index++){
  let generate = getRandom(possibleCharacter);
  console.log(generate);
  result.push(generate);
}
// for(let index = 0; index < expectedCharacter.length; index++){
//   result[index] = expectedCharacter[index]


console.log(result);
return result.join ("");


}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);