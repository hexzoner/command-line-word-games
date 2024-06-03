const args = process.argv.slice(2);
// const argsLowered = args.map((x) => x.toLowerCase());
// const input = argsLowered[0];
// console.log(args);

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

console.log(fColor.yellow + "User entered " + args.length + " words", fColor.white);

for (let i = 0; i < args.length; i++) {
  if (vowels.indexOf(args[i][0].toLowerCase()) != -1) {
    // Found a word starting with ---a vowel---
    args[i] += "way";
  }

  if (args[i].length == 1) continue;

  let hasDot = false;
  if (args[i][args[i].length - 1] == ".") {
    hasDot = true;
    args[i] = args[i].substring(0, args[i].length - 1);
  }

  if (consonats.indexOf(args[i][0].toLowerCase()) !== -1 && consonats.indexOf(args[i][1].toLowerCase()) !== -1) {
    //Found a word starting with ---2 consonants---
    let newWord = args[i].slice(2, args[i].length) + args[i][0].toLowerCase() + args[i][1] + "ay";
    args[i] = newWord;
  }

  if (consonats.indexOf(args[i][0].toLowerCase()) !== -1 && vowels.indexOf(args[i][1].toLowerCase()) !== -1) {
    // Found the word starting with --- a consonant and a vowel---

    let newWord = args[i].slice(1, args[i].length) + args[i][0].toLowerCase() + "ay";
    // const upperCased = newWord[0].toUpperCase();
    args[i] = newWord;
  }

  if (hasDot) args[i] += ".";
}

console.log(fColor.red, args.join(" "));
