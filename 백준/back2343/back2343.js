const { copyFileSync } = require("fs");

const input = require("fs")
  .readFileSync("back2343.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number);
let mid = -1;
let min = -1;
let max = 0;
for (let i = 0; i < n; i++) {
  if (min < arr[i]) {
    min = arr[i];
  }
  max += arr[i];
}

while (min <= max) {
  mid = Math.floor((min + max) / 2);
  let count = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum > mid) {
      i--;
      sum = 0;
      count++;
    }
  }

  if (count <= m) {
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}

console.log(min);
