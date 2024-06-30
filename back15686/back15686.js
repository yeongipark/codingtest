const input = require("fs")
  .readFileSync("back15686.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [size, n] = input.shift().split(" ").map(Number);
let arr = [];
input.forEach((value, index) => {
  arr.push(value.split(" ").map(Number));
});

let home = [];
let chick = [];
let min = Infinity;

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (arr[i][j] === 1) {
      home.push([i + 1, j + 1]);
    } else if (arr[i][j] === 2) {
      chick.push([i + 1, j + 1]);
    }
  }
}

combination([], chick, n);
console.log(min);

function combination(result = [], rests, n) {
  if (result.length === n) {
    let sum = 0;
    for (let i = 0; i < home.length; i++) {
      let minimum = Infinity;
      for (let j = 0; j < result.length; j++) {
        let x = Math.abs(home[i][0] - result[j][0]);
        let y = Math.abs(home[i][1] - result[j][1]);
        if (minimum > x + y) {
          minimum = x + y;
        }
      }
      sum += minimum;
    }

    if (min > sum) {
      min = sum;
    }
    // 계산 로직
  }

  rests.forEach((value, index) => {
    let rest = [...rests.slice(index + 1)];
    combination([...result, value], rest, n);
  });
}
