const input = require("fs")
  .readFileSync("back2805.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let start = 0;
let end = arr[arr.length - 1];

while (start <= end) {
  mid = Math.floor((start + end) / 2);

  let sum = arr.reduce((acc, cur) => {
    if (cur - mid > 0) {
      return acc + cur - mid;
    }
    return acc;
  }, 0);

  if (sum === m) {
    console.log(mid);
    return;
  }

  if (sum > m) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(end);
