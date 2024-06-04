function CapitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

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
