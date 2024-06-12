const readline = require("readline");

const solution = () => {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  rl.close();
}).on("close", function () {
  solution(input);
  process.exit();
});
