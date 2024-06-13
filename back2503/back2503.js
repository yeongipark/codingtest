const readline = require("readline");

const solution = (input) => {
  let result = 0;
  for (i = 111; i < 1000; i++) {
    let string = String(i);
    if (string[0] == 0 || string[1] == 0 || string[2] == 0) {
      continue;
    }
    if (
      string[0] == string[1] ||
      string[1] == string[2] ||
      string[0] == string[2]
    ) {
      continue;
    }
    if (check(input, String(i))) {
      result++;
    }
  }
  console.log(result);
};

const check = (input, number) => {
  let 백 = number[0];
  let 십 = number[1];
  let 일 = number[2];
  for (let i = 0; i < input.length; i++) {
    let strike = 0;
    let ball = 0;
    if (백 == input[i].number[0]) {
      strike++;
    }
    if (십 == input[i].number[1]) {
      strike++;
    }
    if (일 == input[i].number[2]) {
      strike++;
    }
    if (백 == input[i].number[1] || 백 == input[i].number[2]) {
      ball++;
    }
    if (십 == input[i].number[0] || 십 == input[i].number[2]) {
      ball++;
    }
    if (일 == input[i].number[0] || 일 == input[i].number[1]) {
      ball++;
    }
    if (input[i].strike != strike || input[i].ball != ball) {
      return false;
    }
  }
  return true;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;
let n;
rl.on("line", function (line) {
  if (count == 0) {
    n = +line;
    count++;
  } else {
    let number = line.split(" ")[0];
    let strike = +line.split(" ")[1];
    let ball = +line.split(" ")[2];
    let obj = { number, strike, ball };
    input.push(obj);
    count++;
    if (count == n + 1) {
      rl.close();
    }
  }
}).on("close", function () {
  solution(input);
  process.exit();
});
