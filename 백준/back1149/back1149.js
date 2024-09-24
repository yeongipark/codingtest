const input = require("fs")
  .readFileSync("back1149.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let color = Array.from({ length: n }, () => Array().fill(0));

input.forEach((str, idx) => {
  str.split(" ").forEach((num) => color[idx].push(+num));
});

let dp = Array.from({ length: n }, () => Array(3).fill(0));

// 첫 번째 집의 비용은 그대로 사용
dp[0][0] = color[0][0];
dp[0][1] = color[0][1];
dp[0][2] = color[0][2];

for (let i = 1; i < n; i++) {
  dp[i][0] = color[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = color[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = color[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2]));
