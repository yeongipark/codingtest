const input = require("fs")
  .readFileSync("back2512.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
let arr = input[1].split(" ").map(Number);
let target = +input[2];

let start = 0;
let end = Math.max(...arr);

while (start <= end) {
  let mid = Math.ceil((start + end) / 2);
  let sum = 0;
  arr.forEach((value) => {
    if (value >= mid) {
      sum += mid;
    } else {
      sum += value;
    }
  });

  if (sum == target) {
    console.log(mid);
    return;
  }

  if (sum > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(end);
