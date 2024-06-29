const input = require("fs")
  .readFileSync("back14888.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let min = +Infinity;
let max = -Infinity;

let n = +input[0];
let arr = input[1].split(" ").map(Number);
let operators = input[2].split(" ").map(Number);

let obj = {
  0: (a, b) => a + b,
  1: (a, b) => a - b,
  2: (a, b) => a * b,
  3: (a, b) => {
    if (a < 0 || b < 0) {
      a = Math.abs(a);
      b = Math.abs(b);
      return -Math.floor(a / b);
    } else {
      return Math.floor(a / b);
    }
  },
};

DFS(arr[0], 1);
console.log(max + "\n" + min);
function DFS(num, index) {
  if (index === n) {
    min = Math.min(min, num);
    max = Math.max(max, num);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operators[i] > 0) {
      operators[i]--;
      DFS(obj[i](num, arr[index]), index + 1);
      operators[i]++;
    }
  }
}
