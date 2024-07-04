const input = require("fs")
  .readFileSync("back14502.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let [n, m] = input.shift().split(" ").map(Number);
let temp;
let arr = [];
let max = -100;
input.forEach((item) => {
  arr.push(item.split(" ").map(Number));
});
let virus = [];
let empty = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 0) {
      empty.push([i, j]);
    }
    if (arr[i][j] === 2) {
      virus.push([i, j]);
    }
  }
}
for (let i = 0; i < empty.length - 2; i++) {
  for (let j = i + 1; j < empty.length - 1; j++) {
    for (let k = j + 1; k < empty.length; k++) {
      let first = empty[i];
      let seond = empty[j];
      let third = empty[k];
      temp = JSON.parse(JSON.stringify(arr));
      temp[first[0]][first[1]] = 1;
      temp[seond[0]][seond[1]] = 1;
      temp[third[0]][third[1]] = 1;
      max = Math.max(max, BFS(temp, virus));
    }
  }
}

console.log(max);

function BFS(temp, virus) {
  let queue = [];
  virus.forEach((item) => queue.push(item));
  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];
      if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
        if (temp[newX][newY] === 0) {
          temp[newX][newY] = 2;
          queue.push([newX, newY]);
        }
      }
    }
  }
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] === 0) {
        cnt++;
      }
    }
  }
  return cnt;
}
