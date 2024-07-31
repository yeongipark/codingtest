const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\r?\n/);

let length = input.length;

let result = {};
let arr = [];
input.forEach((tree) => {
  if (tree in result) {
    result[tree] += 1;
  } else {
    arr.push(tree);
    result[tree] = 1;
  }
});

arr.sort();

arr.forEach((tree) => {
  let num = result[tree];
  let rate = ((num / length) * 100).toFixed(4);
  console.log(`${tree} ${rate}`);
});

// console.log(arr);
