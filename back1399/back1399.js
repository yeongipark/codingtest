const input = require("fs")
  .readFileSync("back1399.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
let arr = Array(n).fill("");
let map = new Map();
let value = 9;
for (let i = 1; i <= n; i++) {
  arr[i - 1] = input[i];
}

arr.forEach((item) => {
  for (let i = 0; i < item.length; i++) {
    if (!map.has(item[i])) {
      map.set(item[i], 0);
    }
    map.set(item[i], map.get(item[i]) + Math.pow(10, item.length - i - 1));
  }
});

let newArr = [];
for (let [key, value] of map) {
  newArr.push(value);
}

newArr.sort((a, b) => b - a);
console.log(newArr.reduce((acc, cur) => acc + cur * value--, 0));
