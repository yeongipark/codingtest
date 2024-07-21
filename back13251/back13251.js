const input = require("fs")
  .readFileSync("back13251.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let d = input.shift().split(" ").map(Number);
let m = +input.shift();
let total = d.reduce((acc, cur) => acc + cur, 0);
let sum = 0;
let result;
for (let i = 0; i < n; i++) {
  result = 1;
  if (d[i] < m) {
    continue;
  }
  for (let j = 0; j < m; j++) {
    result *= (d[i] - j) / (total - j);
  }
  sum += result;
}
if (sum == 1) {
  console.log("1.0");
} else {
  console.log(sum);
}
