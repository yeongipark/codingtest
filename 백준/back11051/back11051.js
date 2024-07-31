const input = require("fs")
  .readFileSync("back11051.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, r] = input[0].split(" ").map(Number);
const a = 10007;

const d = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  d[i][0] = 1;
  d[i][i] = 1;
  d[i][1] = i;
}

for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    d[i][j] = (d[i - 1][j] + d[i - 1][j - 1]) % a;
    // d[i][j] = ((d[i - 1][j] % a) + (d[i - 1][j - 1] % a)) % a;
  }
}

console.log(d[n][r]);
