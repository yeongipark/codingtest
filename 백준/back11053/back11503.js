const input = require("fs")
  .readFileSync("back11503.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
let dp = Array(n).fill(1);

let arr = input[1].split(" ").map((item) => +item);

for (let i = 1; i < n; i++) {
  for (let k = 0; k < i; k++) {
    if (arr[i] > arr[k]) {
      dp[i] = Math.max(dp[i], dp[k] + 1);
    }
  }
}

console.log(Math.max(...dp));
