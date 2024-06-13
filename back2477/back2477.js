const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\r?\n/);
let arr = [];
let test = [
  [2, 4],
  [1, 3],
  [4, 1],
  [3, 2],
];
let order = [];
let visited = [];
for (let i = 1; i < 7; i++) {
  let newArr = input[i].split(" ").map((item) => +item);
  if (
    order.some((num) => {
      return num == +input[i].split(" ")[0];
    })
  ) {
    visited.push(+input[i].split(" ")[0]);
    order.push(+input[i].split(" ")[0]);
  } else {
    order.push(+input[i].split(" ")[0]);
  }
  arr.push(newArr);
}

let idx;
for (let i = 0; i < 4; i++) {
  if (
    (test[i][0] == visited[0] || test[i][0] == visited[1]) &&
    (test[i][1] == visited[0] || test[i][1] == visited[1])
  ) {
    idx = i;
  }
}

let first = test[idx][0];
let second = test[idx][1];

let total = 1;
let minus;
let find = false;
for (let i = 0; i < order.length; i++) {
  if (order[i] != first && order[i] != second) {
    total = total * arr[i][1];
    continue;
  }

  if (order[i] == first) {
    if (i + 1 < order.length) {
      if (order[i + 1] == second) {
        minus = arr[i][1] * arr[i + 1][1];
        find = true;
      }
    } else if (!find) {
      minus = arr[0][1] * arr[i][1];
    }
  }
}

console.log(+input[0] * (total - minus));
