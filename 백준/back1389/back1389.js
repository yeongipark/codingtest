const input = require("fs")
  .readFileSync("back1389.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input.shift().split(" ").map(Number);
let arr = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
for (let i = 0; i < m; i++) {
  let [start, end] = input.shift().split(" ").map(Number);
  arr[start][end] = 1;
  arr[end][start] = 1;
}

for (let k = 1; k <= n; k++) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === j) {
        arr[i][j] = 0;
        continue;
      }
      arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
    }
  }
}
let min = 100000000000;
let result = 0;
for (let i = 1; i <= n; i++) {
  let sum = 0;
  for (let j = 1; j <= n; j++) {
    sum += arr[i][j];
  }
  if (min > sum) {
    min = sum;
    result = i;
  }
}

console.log(result);
