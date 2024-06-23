const input = require("fs")
  .readFileSync("back11659.txt")
  .toString()
  .trim()
  .split(/\r?\n/);
let [n, m] = input[0].split(" ").map(Number);
let numArr = input[1].split(" ").map(Number);
let sumArr = Array(n).fill(0);
let result = [];
sumArr[0] = numArr[0];
for (let i = 1; i < n; i++) {
  sumArr[i] = sumArr[i - 1] + numArr[i];
}

for (let i = 2; i < m + 2; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  if (start == 1) {
    result.push(sumArr[end - 1]);
  } else {
    result.push(sumArr[end - 1] - sumArr[start - 2]);
  }
}
console.log(result.join("\n"));
