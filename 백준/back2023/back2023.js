// const input = require("fs")
//   .readFileSync("back2023.txt")
//   .toString()
//   .trim()
//   .split(/\r?\n/);

let result = [];
let arr = [1, 3, 5, 7, 9];
let first = [2, 3, 5, 7];
first.forEach((value) => {
  let num = String(value);
  DFS(num);
});

console.log(result.join("\n"));

function DFS(start) {
  if (start.length == +input) {
    result.push(start);
    return;
  }
  arr.forEach((next) => {
    start += String(next);
    if (isNum(+start)) {
      DFS(start);
    }
    start = start.substring(0, start.length - 1);
  });
}

// 소수 판별 함수
function isNum(num) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
