const readline = require("readline");

const solution = (input) => {
  if (check(input)) {
    console.log(input.length);
    return;
  }

  for (let i = 1; i < input.length; i++) {
    let string = input.slice(i);
    if (check(string)) {
      console.log(input.length + i);
      return;
    }
  }
};

const check = (string) => {
  let reverseString = string.split("").reverse().join("");
  if (string == reverseString) {
    return true;
  } else {
    return false;
  }
};

let input;
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    input = line;
    rl.close();
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });
