const input = require("fs")
  .readFileSync("back1946.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let a = 0;
let n = +input[a++];
for (let i = 0; i < n; i++) {
  let num = +input[a++];
  let result = num;
  let min = 1000000;
  let arr = [];
  for (let j = 0; j < num; j++) {
    arr.push(input[a++].split(" ").map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);
  arr.forEach((value) => {
    if (value[1] < min) {
      min = value[1];
    } else {
      result--;
    }
  });
  console.log(result);
}
