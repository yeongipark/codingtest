const input = require("fs")
  .readFileSync("back1010.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

const d = Array.from(Array(31), () => Array(31).fill(0));

for (let i = 0; i < 31; i++) {
  d[i][0] = 1;
  d[i][i] = 1;
  d[i][1] = i;
}

for (let i = 3; i < 31; i++) {
  for (let j = 2; j < i; j++) {
    d[i][j] = d[i - 1][j] + d[i - 1][j - 1];
  }
}

const n = +input.shift();
let result = [];
for (let i = 0; i < n; i++) {
  let [a, b] = input.shift().split(" ").map(Number);
  result.push(d[b][a]);
}
console.log(result.join("\n"));
