const input = require("fs")
  .readFileSync("back2470.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let arr = input.shift().split(" ").map(Number);
arr.sort((a, b) => a - b);
let i = 0;
let j = n - 1;

let result; // 0에서 가장 가까운수 2개 저장
let close = 10000000000; // 0에서 가까운 수 저장

while (i < j) {
  let sum = arr[i] + arr[j];
  if (Math.abs(close) > Math.abs(sum)) {
    close = Math.abs(sum);
    result = [arr[i], arr[j]];
  }
  if (sum === 0) {
    console.log(arr[i], arr[j]);
    return;
  }
  if (sum < 0) {
    i = i + 1;
  } else {
    j = j - 1;
  }
}

console.log(result[0], result[1]);
