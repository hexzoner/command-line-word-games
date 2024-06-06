function CapitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const args = process.argv.slice(2);

const fColor = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  white: "\x1b[37m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
};

const consonats = "bcdfghjklmnpqrstvwxyz";
const vowels = "aeiou";

if (args.length == 0) {
  console.log("No message was entered. Please enter your message and try again.");
  return;
}

const inputText = args[0];

// const inputWords = inputText.split(" ");
const inputWords = inputText.match(/\w+/g);
//    / ... /g    It's a global regex. So it'll operate on multiple matches in the string.
// \w    Matches any alphanumeric character from the basic Latin alphabet, including the underscore. Equivalent to [A-Za-z0-9_].

console.log(inputWords);

console.log(fColor.yellow + "User entered " + inputWords.length + " words", fColor.white);

for (let i = 0; i < inputWords.length; i++) {
  if (inputWords[i].length == 1) continue;

  let isUpperCase = false;
  if (inputWords[i][0] == inputWords[i][0].toUpperCase()) isUpperCase = true;

  //---special characters logic
  let hasDot = false;
  if (inputWords[i][inputWords[i].length - 1] == ".") {
    hasDot = true;
    inputWords[i] = inputWords[i].substring(0, inputWords[i].length - 1);
  }

  //---a vowel---
  if (vowels.indexOf(inputWords[i][0].toLowerCase()) != -1) inputWords[i] += "way";

  //---2 consonants---
  if (consonats.indexOf(inputWords[i][0].toLowerCase()) !== -1 && consonats.indexOf(inputWords[i][1].toLowerCase()) !== -1) {
    inputWords[i] = inputWords[i].slice(2, inputWords[i].length) + inputWords[i][0].toLowerCase() + inputWords[i][1] + "ay";
  }

  // -- a consonant and a vowel---
  if (consonats.indexOf(inputWords[i][0].toLowerCase()) !== -1 && vowels.indexOf(inputWords[i][1].toLowerCase()) !== -1) {
    inputWords[i] = inputWords[i].slice(1, inputWords[i].length) + inputWords[i][0].toLowerCase() + "ay";
  }

  //---final fomatting logic
  if (isUpperCase) inputWords[i] = CapitalizeFirstLetter(inputWords[i]);
  if (hasDot) inputWords[i] += ".";
}

console.log(fColor.red, inputWords.join(" "));
