const input = require("fs")
  .readFileSync("back13335.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let width = +input[0].split(" ")[1];
let max = +input[0].split(" ")[2];

let arr = input[1].split(" ").map((item) => +item);

if (arr.length == 1) {
  console.log(width + 1);
  return;
}

let queue = new Array(width).fill(0);
let cnt = 0;
let sum = 0;

while (queue.length !== 0) {
  sum -= queue.shift();
  if (arr.length !== 0) {
    if (sum + arr[0] <= max) {
      sum += arr[0];
      queue.push(arr.shift());
    } else {
      queue.push(0);
    }
  }
  cnt++;
}

console.log(cnt);
