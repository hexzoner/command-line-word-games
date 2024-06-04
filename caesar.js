const args = process.argv.slice(2);
const argsLow = args.map((x) => x.toLowerCase());
// console.log(argsLow);

const fColor = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  white: "\x1b[37m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";

if (argsLow.length === 0) {
  console.log(fColor.red, "No message was entered. Please enter your message with the shifting number and try again.", fColor.reset);
  return;
}
if (argsLow.length === 1) {
  console.log(fColor.red, "No shift number was entered. Please enter your message with the shifting number and try again.", fColor.reset);
  return;
}
if (isNaN(argsLow[1])) {
  console.log(fColor.red, "Shift should be a number. Please enter your message with the shifting number and try again.", fColor.reset);
  return;
}

let result = "";
for (let i = 0; i < argsLow[0].length; i++) {
  if (alphabet.indexOf(argsLow[0][i]) === -1) result += argsLow[0][i]; //No changes for non alphabet characters
  else result += alphabet[getNewAlphabetPosition(argsLow[0][i], args[1])];
}

console.log(fColor.red + "---Caesar Cipher---" + fColor.reset);
console.log("Entered: " + fColor.green + args[0] + fColor.reset);
console.log("Result: " + fColor.magenta + result + fColor.reset);

function getAlphabetPosition(letter) {
  return alphabet.indexOf(letter);
}

function getNewAlphabetPosition(letter, shift) {
  let newPosition = parseInt(getAlphabetPosition(letter)) + parseInt(shift);
  if (newPosition >= 26 || newPosition <= -26) newPosition = newPosition % 26;
  if (newPosition < 0) newPosition = 26 + newPosition;
  // a-->-1
  //-1-->25
  // console.log(fColor.yellow + newPosition + " - " + alphabet[newPosition] + fColor.reset);
  return newPosition;
}
