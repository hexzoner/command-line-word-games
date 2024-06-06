function CapitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const fColor = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  white: "\x1b[37m",
  yellow: "\x1b[33m",
  magenta: "\x1b[35m",
};

const args = process.argv.slice(2);
const argsLowered = args.map((x) => x.toLowerCase());
const input = argsLowered[0];
// console.log(argsLowered);

if (input != "rock" && input != "paper" && input != "scissors") {
  console.error("Please enter the word 'rock', 'paper' or 'scissors'");
  return;
}

const choices = ["rock", "paper", "scissors"];
const computerInput = choices[Math.floor(Math.random() * 3)];
let winner = "draw";

console.log(fColor.yellow + "--- Rock Paper Scissors Game---" + fColor.reset);
console.log("Player's choice: " + fColor.magenta + CapitalizeFirstLetter(input) + fColor.reset);
console.log("Computer's choice: " + fColor.magenta + CapitalizeFirstLetter(computerInput + fColor.reset));

console.log(fColor.yellow + "-------------------------");
switch (true) {
  case input == "rock" && computerInput == "scissors":
    winner = "player";
    break;
  case input == "rock" && computerInput == "paper":
    winner = "computer";
    break;
  case input == "paper" && computerInput == "rock":
    winner = "player";
    break;
  case input == "paper" && computerInput == "scissors":
    winner = "computer";
    break;
  case input == "scissors" && computerInput == "rock":
    winner = "computer";
    break;
  case input == "scissors" && computerInput == "paper":
    winner = "player";
    break;
}
console.log(fColor.red + "The winner is: " + fColor.green + CapitalizeFirstLetter(winner));
