const input = require("fs")
  .readFileSync("back1456.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [start, end] = input.shift().split(" ").map(Number);
let arr = Array.from(Array(Math.floor(Math.sqrt(end)) + 1), (_, idx) => idx);
arr[1] = 0;

for (let i = 2; i <= Math.sqrt(arr.length); i++) {
  if (arr[i] !== 0) {
    for (let j = i + i; j <= arr.length; j += i) {
      arr[j] = 0;
    }
  }
}

let count = 0;
for (let i = 2; i < arr.length; i++) {
  if (arr[i] !== 0) {
    let n = arr[i];
    while (1) {
      n *= arr[i];
      if (n >= start && n <= end) {
        count++;
      } else if (n > end) {
        break;
      }
    }
  }
}

console.log(count);
