const input = require("fs")
  .readFileSync("back2212.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
let k = +input[1];
let arr = input[2].split(" ").map(Number);
arr.sort((a, b) => a - b);
let minusArr = [];

for (let i = 0; i < n - 1; i++) {
  minusArr.push(arr[i + 1] - arr[i]);
}
minusArr.sort((a, b) => b - a);

for (let i = 0; i < k - 1; i++) {
  minusArr.shift();
}

console.log(minusArr.reduce((acc, cur) => acc + cur, 0));
