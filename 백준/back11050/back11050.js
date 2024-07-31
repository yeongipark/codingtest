const input = require("fs")
  .readFileSync("back11050.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, r] = input[0].split(" ").map(Number);
let d = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  d[i][0] = 1;
  d[i][1] = i;
  d[i][i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    d[i][j] = d[i - 1][j] + d[i - 1][j - 1];
  }
}

console.log(d[n][r]);
