const input = require("fs")
  .readFileSync("back11404.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let m = +input.shift();
let arr = Array.from({ length: n }, () => new Array(n).fill(Infinity));

for (let i = 0; i < m; i++) {
  let [start, end, weight] = input.shift().split(" ").map(Number);
  if (arr[start - 1][end - 1] > weight) {
    arr[start - 1][end - 1] = weight;
  }
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
    }
  }
}

for (let start = 0; start < n; start++) {
  for (let end = 0; end < n; end++) {
    if ((arr[start][end] === Infinity) | (start === end)) {
      arr[start][end] = 0;
    }
  }
}

console.log(arr);

console.log(arr.map((item) => item.join("\n")));
