const input = require("fs")
  .readFileSync("back14504.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let direction = {
  0: [-1, 0], // 북
  1: [0, -1], // 서
  2: [1, 0], // 남
  3: [0, 1], // 동
};

let [n, m] = input.shift().split(" ").map(Number);
let [x, y, d] = input.shift().split(" ").map(Number);
let visited = Array.from({ length: n }, () => Array(m).fill(false));
let count = 1;

if (d === 1) {
  d = 3;
} else if (d === 3) {
  d = 1;
}
visited[x][y] = true;
let arr = [];
for (let i = 0; i < n; i++) {
  let newArr = input.shift().split(" ").map(Number);
  arr.push(newArr);
}
let find = false;
DFS(x, y, d);
console.log(count);

function DFS(row, col, d) {
  let newD = d;
  for (let i = 0; i < 4; i++) {
    newD = (newD + 1) % 4;
    let newRow = row + direction[newD][0];
    let newCol = col + direction[newD][1];
    if (arr[newRow][newCol] !== 1 && visited[newRow][newCol] === false) {
      visited[newRow][newCol] = true;
      count++;
      DFS(newRow, newCol, newD);
      break;
    }
  }

  if (find === true) {
    return;
  }

  let r = row + direction[(d + 2) % 4][0];
  let c = col + direction[(d + 2) % 4][1];
  if (arr[r][c] === 1) {
    find = true;
    return;
  } else {
    DFS(r, c, d);
  }
}
