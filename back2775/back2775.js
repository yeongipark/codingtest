const input = require("fs")
  .readFileSync("back2775.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let d = Array.from(Array(15), () => Array(15).fill(0));

for (let i = 0; i < 15; i++) {
  d[i][1] = 1;
  d[0][i] = i;
}

for (let i = 1; i <= 14; i++) {
  for (let j = 2; j <= 14; j++) {
    d[i][j] = d[i - 1][j] + d[i][j - 1];
  }
}

let result = [];

for (let i = 0; i < n; i++) {
  let a = +input.shift();
  let b = +input.shift();
  result.push(d[a][b]);
}

console.log(result.join("\n"));
