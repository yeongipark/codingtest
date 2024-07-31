const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\r?\n/);

let num = +input[0] * 2;
for (let i = 1; i <= num; i = i + 2) {
  let size = input[i].split(" ")[0];
  if (size == 1) {
    console.log(1);
    continue;
  }
  let target = +input[i].split(" ")[1];
  let priority = input[i + 1].split(" ").map((item) => +item);
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(i);
  }
  let result = 0;
  while (arr.length !== 0) {
    let push = false;
    let n = arr.shift();
    let nPrio = priority[n];
    for (let i = 0; i < arr.length; i++) {
      if (nPrio < priority[arr[i]]) {
        arr.push(n);
        push = true;
        break;
      }
    }
    if (!push) {
      result++;
      if (n == target) {
        console.log(result);
        break;
      }
    }
  }
}
