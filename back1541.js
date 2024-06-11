const readline = require("readline");

const solution = (input) => {
  let number = input.split("-");
  number.forEach((item, idx) => {
    if (item.includes("+")) {
      let plusValue = item.split("+");
      let sum = 0;
      plusValue.forEach((num) => {
        sum += Number(num);
      });
      number[idx] = sum;
    }
  });

  if (number.length == 1) {
    console.log(number[0]);
  } else {
    let result = Number(number[0]);
    for (let i = 1; i < number.length; i++) {
      result -= Number(number[i]);
    }
    console.log(result);
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", (line) => {
  input = line;
  rl.close();
}).on("close", () => {
  solution(input);
  process.exit();
});
