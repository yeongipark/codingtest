const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\r?\n/);

let arr = input.map((item) => +item);
let n = arr.shift();
arr.sort((a, b) => a - b);
let midIndex = Math.ceil(n / 2) - 1;
let 빈도 = {};
let sum = 0;
let max = -40000;
let min = 500000;
let avg = 0;
arr.forEach((item) => {
  sum += item;
  if (item > max) {
    max = item;
  }
  if (item < min) {
    min = item;
  }
  if (!(item in 빈도)) {
    빈도[item] = 1;
  } else {
    빈도[item] += 1;
  }
});

let value = -100;
for (let number in 빈도) {
  if (빈도[number] > value) {
    value = +빈도[number];
  }
}

let newArr = [];
for (let number in 빈도) {
  if (빈도[number] == value) {
    newArr.push(+number);
  }
}

newArr.sort((a, b) => a - b);

avg = Math.round(sum / n);
if (avg == -0) {
  console.log(0);
} else {
  console.log(avg);
}

if (n == 1) {
  console.log(arr[0]);
} else {
  console.log(arr[midIndex]);
}

if (newArr.length == 1) {
  console.log(newArr[0]);
} else {
  console.log(newArr[1]);
}
console.log(max - min);
