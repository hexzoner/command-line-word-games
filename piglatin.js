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
const specials = "/`!@#$%^&*()_+-=[]{};':|,.<>?~]";

if (args.length == 0) {
  console.log("No message was entered. Please enter your message and try again.");
  return;
}

console.log(fColor.yellow + "User entered " + args.length + " words", fColor.white);

for (let i = 0; i < args.length; i++) {
  if (args[i].length == 1) continue;

  let isUpperCase = false;
  if (args[i][0] == args[i][0].toUpperCase()) isUpperCase = true;

  //---special characters logic
  let hasDot = false;
  if (args[i][args[i].length - 1] == ".") {
    hasDot = true;
    args[i] = args[i].substring(0, args[i].length - 1);
  }

  //---a vowel---
  if (vowels.indexOf(args[i][0].toLowerCase()) != -1) args[i] += "way";

  //---2 consonants---
  if (consonats.indexOf(args[i][0].toLowerCase()) !== -1 && consonats.indexOf(args[i][1].toLowerCase()) !== -1) {
    args[i] = args[i].slice(2, args[i].length) + args[i][0].toLowerCase() + args[i][1] + "ay";
  }

  // -- a consonant and a vowel---
  if (consonats.indexOf(args[i][0].toLowerCase()) !== -1 && vowels.indexOf(args[i][1].toLowerCase()) !== -1) {
    args[i] = args[i].slice(1, args[i].length) + args[i][0].toLowerCase() + "ay";
  }

  //---final fomatting logic
  if (isUpperCase) args[i] = CapitalizeFirstLetter(args[i]);
  if (hasDot) args[i] += ".";
}

console.log(fColor.red, args.join(" "));
