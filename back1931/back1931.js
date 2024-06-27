const input = require("fs")
  .readFileSync("back1931.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
if (n == 1) {
  console.log(1);
  return;
}
let arr = Array(n).fill([]);
for (let i = 1; i <= n; i++) {
  let newArr = input[i].split(" ").map(Number);
  arr[i - 1] = newArr;
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let finish = arr[0][1];
let count = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i][0] >= finish) {
    finish = arr[i][1];
    count++;
  }
}

console.log(count);
