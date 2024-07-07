const input = require("fs")
  .readFileSync("back1744.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let dx = [0, 1, 0, -1];
let dy = [-1, 0, 1, 0];
let [n, m, t] = input.shift().split(" ").map(Number);
let arr = input.map((item) => item.split(" ").map(Number));

arr = push(arr);
console.log(arr);

function push(arr) {
  let temp = arr.map((row) => [...row]);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] <= 4) continue;
      let value = Math.floor(arr[i][j] / 5);
      for (let k = 0; k < 4; k++) {
        let row = dx[k] + i;
        let col = dy[k] + j;
        if (
          row >= 0 &&
          row < n &&
          col >= 0 &&
          col < m &&
          arr[row][col] !== -1
        ) {
          temp[row][col] += value;
          temp[i][j] -= value;
        }
      }
    }
  }
  return temp;
}
