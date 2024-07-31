const input = require("fs")
  .readFileSync("back11403.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let arr = [];
input.forEach((item) => {
  let newArr = item.split(" ").map(Number);
  arr.push(newArr);
});

for (let k = 0; k < n; k++) {
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      if (arr[a][k] + arr[k][b] === 2) {
        arr[a][b] = 1;
      }
    }
  }
}

console.log(arr.join("\n").replaceAll(",", " "));
