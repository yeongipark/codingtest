const input = require("fs")
  .readFileSync("back2178.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
let vistied = Array.from({ length: n }, () => Array(m).fill(0));
// 미로 초기화
for (let i = 1; i <= n; i++) {
  let newArr = input[i].split("").map(Number);

  arr.push(newArr);
}

// BFS 수행
BFS(arr, [0, 0]);
console.log(vistied[n - 1][m - 1]);

function BFS(arr, start) {
  let [row, col] = start;
  let queue = [];
  queue.push([row, col]);
  vistied[row][col] = 1;

  while (queue.length !== 0) {
    let [x, y] = queue.shift();
    let curDepth = vistied[x][y];
    if (x == n - 1 && y == m - 1) {
      return;
    }
    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];
      if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
        if (arr[newX][newY] === 1 && vistied[newX][newY] === 0) {
          queue.push([newX, newY]);
          vistied[newX][newY] = curDepth + 1;
        }
      }
    }
  }
}
