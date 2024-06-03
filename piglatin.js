const args = process.argv.slice(2);
// const argsLowered = args.map((x) => x.toLowerCase());
// const input = argsLowered[0];
console.log(args);

const consonats = "bcdfghjklmnpqrstvwxyz";
const vowels = "aeiou";

if (args.length == 0) {
  console.log("No message was entered. Please enter your message and try again.");
  return;
}

console.log("Running...");

for (let word of args) {
  //   console.log(vowels.find((letter) => letter === word[0]));
  //   console.log(vowels.some((letter) => letter === word[0]));
  if (vowels.indexOf(word[0].toLowerCase()) != -1) {
    console.log("We found a word starting with a vowel: " + word);
  }

  if (word.length == 1) continue;

  if (consonats.indexOf(word[0].toLowerCase()) != -1 && consonats.indexOf(word[1].toLowerCase() != -1)) {
    console.log(word[0].toLowerCase());
    console.log(word[1].toLowerCase());
    console.log("We found a word starting with 2 consonants: " + word);
  }
}
