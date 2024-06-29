const input = require("fs")
  .readFileSync("back1377.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
// let index = -1;
// let number = -1;
// let arr = Array(n + 1).fill(-1);
// for (let i = 1; i <= n; i++) {
//   if (+input[i] > +input[i + 1]) {
//     number = +input[i + 1];
//     index = i + 1;
//   }
//   arr[i] = +input[i];
// }
// let count = 0; // number 보다 큰 수가 몇개인지 카운트
// for (let i = 1; i < index; i++) {
//   if (number < arr[i]) {
//     count++;
//   }
// }

// console.log(count + 1);

let arr = Array(n).fill(-1);
for (let i = 1; i <= n; i++) {
  arr[i - 1] = {
    value: +input[i],
    index: i - 1,
  };
}
arr.sort((a, b) => a.value - b.value);
let max = -1;
for (let i = 0; i < n; i++) {
  max = Math.max(max, arr[i].index - i);
}
console.log(max + 1);
