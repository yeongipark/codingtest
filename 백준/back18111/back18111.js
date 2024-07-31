const readline = require("readline");

const solution = (input, arr, max, min) => {
  let num = +input.split(" ")[2];
  let n = arr.length; // 행 개수
  let m = arr[0].length; // 열 개수
  let value = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let x = min - arr[i][j];
      value.push(x);
    }
  }
  let sec = acc(value)[0];
  let height = min;
  for (let i = min + 1; i <= max; i++) {
    value = value.map((item) => item + 1);

    let [curSec, sum] = acc(value);
    if (sum > num) {
      break;
    }
    if (curSec <= sec) {
      sec = curSec;
      height = i;
    }
  }
  console.log(sec, height);
  //   console.log(input, arr);
};

const acc = (value) => {
  let sum = 0;
  let sec = 0;
  value.forEach((item) => {
    sum += item;
    if (item > 0) {
      sec += item;
    } else {
      sec += -item * 2;
    }
  });
  return [sec, sum];
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let arr = [];
let count = 0;
let min = 300;
let max = -300;
let sum = 0;
let avg = 0;
let n;
rl.on("line", function (line) {
  if (count == 0) {
    n = +line.split(" ")[0];
    input = line;
  } else {
    arr.push(
      line.split(" ").map((item) => {
        if (+item > max) {
          max = +item;
        }
        if (+item < min) {
          min = +item;
        }
        sum += +item;
        return +item;
      })
    );
  }
  count++;
  if (count == n + 1) {
    avg = Math.floor(sum / (n * +input.split(" ")[1]));
    rl.close();
  }
}).on("close", function () {
  solution(input, arr, max, min);
  process.exit();
});
