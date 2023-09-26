// 1 reverse a string without using a method or function
// Declare a variable to store the input string
 let input = "JAVASCRIPT";

// Declare a variable to store the reversed string
let reversed = "";

// Loop through the input string from the end to the beginning
for (let i = input.length - 1; i >= 0; i--) {
  // Append each character to the reversed string
  reversed += input[i];
}

// Print the reversed string
console.log(reversed);




// 2 COUNT THE number of vowels in string without using function
// Declare a variable to store the input string
let string = "javascript assignment";

// Declare a variable to store the number of vowels
let count = 0;

// Declare a variable to store the vowels
let vowels = "aeiouAEIOU";

// Loop through each character of the input string
for (let i = 0; i < string.length; i++) {
  // Check if the current character is a vowel
  if (vowels.indexOf(string[i]) !== -1) {
    // Increment the count by one
    count++;
  }
}

// Print the number of vowels
console.log("The number of vowels in '" + string+ "' is " + count);




//3 cheak if a string is a palindrome without using fun.
// Declare a variable to store the input string
let character = "level";

// Declare a variable to store the reversed string
 let REVERSED = "";

// Loop through the input string from the end to the beginning
for (let i = character.length - 1; i >= 0; i--) {
  // Append each character to the reversed string
REVERSED += character[i];
}

// Compare the input and the reversed strings
if (character === REVERSED) {
  // If they are equal, print "The string is palladium"
  console.log("The string is palladium");
} else {
  // If they are not equal, print "The string is not palladium"
  console.log("The string is not palladium");
}



// 4capatalize the each word in a sentence without using fun .
// Input: a sentence as a string
let sentence = "i am very happy today.";

// Output: a new sentence with each word capitalised
let output = "";

// Loop through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
  // Get the current character
  let char = sentence[i];

  // If it is the first character or the previous character is a space, capitalise it
  if (i == 0 || sentence[i - 1] == " ") {
    char = char.toUpperCase();
  }

  // Append the character to the output
  output += char;
}

// Print the output
console.log(output);


// 5 remove all spaces from string without using fun.
// declare a variable to store the input string
// declare a variable to store the input string
var str = "This is a string with spaces";

// declare a variable to store the output string
var Output = "";

// loop through each character of the input string
for (var i = 0; i < str.length; i++) {
  // if the character is not a space, append it to the output string
  if (str[i] != " ") {
    Output += str[i];
  }
}

// print the output string
console.log(Output );


//MEDIUM
// 1.FIND THE LONGEST WORD IN A SENTENCE WITHOUT USING FUNCTION
// declare a variable to store the sentence
var characters = "This is a sample sentence for testing";

// declare a variable to store the longest word
var longestWord = "";

// declare a variable to store the current word
var currentWord = "";

// loop through each character in the sentence
for (var i = 0; i < characters.length; i++) {
  // if the character is not a space, append it to the current word
  if (sentence[i] != " ") {
    currentWord += characters[i];
  }
  // if the character is a space or the end of the sentence, check if the current word is longer than the longest word
  if (characters[i] == " " || i == characters.length - 1) {
    // if the current word is longer than the longest word, update the longest word
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
    // reset the current word to an empty string
    currentWord = "";
  }
}

// print the longest word
console.log(longestWord);



// 2.cheak if two strings are anagrams of each other without using fun.
// Declare two strings to check
var str1 = "tea";
var str2 = "eat";

// Initialize a flag variable to true
var isAnagram = true;

// Check if the lengths of the strings are equal
if (str1.length != str2.length) {
  // If not, they are not anagrams
  isAnagram = false;
} else {
  // Loop through each character of the first string
  for (var i = 0; i < str1.length; i++) {
    // Get the current character
    var char = str1[i];
    // Initialize a counter variable to zero
    var counts = 0;
    // Loop through each character of the second string
    for (var j = 0; j < str2.length; j++) {
      // If the current character matches the character in the second string
      if (char == str2[j]) {
        // Increment the counter by one
        counts++;
      }
    }
    // If the counter is not equal to one
    if (counts != 1) {
      // The strings are not anagrams
      isAnagram = false;
      // Break out of the loop
      break;
    }
  }
}

// Print the result
if (isAnagram) {
  console.log(str1 + " and " + str2 + " are anagrams");
} else {
  console.log(str1 + " and " + str2 + " are not anagrams");
}




// 3.replace all occurance of a given substring with another substring in a string without using fun.
// Input: original string, old substring, new substring
var str = "apple banana,apple orange";
var oldSub = "apple";
var newSub = "mango";

// Output: modified string
var modStr = "";

// Loop through each character of the original string
for (var i = 0; i < str.length; i++) {
  // Check if the current character matches the first character of the old substring
  if (str[i] == oldSub[0]) {
    // Assume that the old substring is found
    var found = true;
    // Loop through the remaining characters of the old substring
    for (var j = 1; j < oldSub.length; j++) {
      // Check if the next character of the original string matches the next character of the old substring
      if (str[i + j] != oldSub[j]) {
        // If not, then the old substring is not found
        found = false;
        break;
      }
    }
    // If the old substring is found, then append the new substring to the modified string
    if (found) {
      modStr += newSub;
      // Skip the remaining characters of the old substring in the original string
      i += oldSub.length - 1;
    } else {
      // If not, then append the current character to the modified string
      modStr += str[i];
    }
  } else {
    // If the current character does not match the first character of the old substring, then append it to the modified string
    modStr += str[i];
  }
}

// Print the modified string
console.log(modStr);


// 4.truncate a string 
// Declare variables
var str = "Hello, what is your name?"; 
var len = 9; // The specified length
var result; // The result string

// Check if the string is longer than the specified length
if (str.length > len) {
  // Truncate the string and add "..." at the end
  result = str.slice(0, len) + "...";
} else {
  // The string is not longer than the specified length, so no truncation is needed
  result = str;
}

// Print the result
console.log(result);

// 5.determine if a string has balanced parenthesis
// input string
var inputs = "((a+b)*(c-d))";

// initialize a stack
var stack = [];

// loop through each character in the input
for (var i = 0; i < input.length; i++) {
  // get the current character
  var char = input[i];

  // if the character is an opening parenthesis, push it to the stack
  if (char === "(") {
    stack.push(char);
  }

  // if the character is a closing parenthesis, pop from the stack and check if it matches
  if (char === ")") {
    // if the stack is empty, the parentheses are not balanced
    if (stack.length === 0) {
      console.log("The parentheses are not balanced");
      break;
    }

    // pop the top element from the stack
    var top = stack.pop();

    // if the popped element is not an opening parenthesis, the parentheses are not balanced
    if (top !== "(") {
      console.log("The parentheses are not balanced");
      break;
    }
  }
}

// if the loop ends and the stack is not empty, the parentheses are not balanced
if (stack.length > 0) {
  console.log("The parentheses are not balanced");
} else {
  // otherwise, the parentheses are balanced
  console.log("The parentheses are balanced");
}