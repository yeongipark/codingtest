const input = require("fs")
  .readFileSync("back1747.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
let size = 1_200_000;
let arr = Array.from(Array(size), (_, idx) => idx);
arr[1] = 0;
for (let i = 2; i <= Math.sqrt(size); i++) {
  if (arr[i] !== 0) {
    for (let j = i + i; j < size; j += i) {
      arr[j] = 0;
    }
  }
}

for (let i = n; i < size; i++) {
  if (arr[i] !== 0) {
    if (check(arr[i])) {
      console.log(arr[i]);
      break;
    }
  }
}

function check(n) {
  return n == String(n).split("").reverse().join("");
}
