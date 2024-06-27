const input = require("fs")
  .readFileSync("back1744.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let arr = input.map(Number);

let nagative = [];
let one = [];
let positive = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 0) {
    nagative.push(arr[i]);
  } else if (arr[i] === 1) {
    one.push(arr[i]);
  } else {
    positive.push(arr[i]);
  }
}

nagative.sort((a, b) => a - b);
positive.sort((a, b) => b - a);

for (let i = 0; i < nagative.length; i++) {
  if (i == nagative.length - 1) {
    sum += nagative[i];
  } else {
    sum += nagative[i] * nagative[i + 1];
    i++;
  }
}

for (let i = 0; i < positive.length; i++) {
  if (i == positive.length - 1) {
    sum += positive[i];
  } else {
    sum += positive[i] * positive[i + 1];
    i++;
  }
}

console.log(sum + one.length);
