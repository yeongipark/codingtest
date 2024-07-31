const input = require("fs")
  .readFileSync("back1715.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(+input.shift());
}
if (n == 1) {
  console.log(arr[0]);
  return;
}
arr.sort((a, b) => a - b);
let total = 0;
while (arr.length > 1) {
  let num1 = arr.shift();
  let num2 = arr.shift();
  sum = num1 + num2;

  total += sum;
  if (arr.length === 0) {
    console.log(total);
    return;
  }
  arr.unshift(sum);
  if (sum > arr[1]) {
    sort(arr);
  }
}

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    } else {
      break;
    }
  }
}
