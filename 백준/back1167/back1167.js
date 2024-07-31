const input = require("fs")
  .readFileSync("back1167.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
const map = new Map();
// 인접리스트 초기화
for (let i = 1; i <= n; i++) {
  map.set(i, []);
}

let result = Array(n + 1).fill(0);
let visited = Array(n + 1).fill(false);

for (let i = 1; i <= n; i++) {
  let arr = input[i].split(" ").map(Number);
  let num = arr[0];
  for (let j = 1; j < arr.length - 1; j = j + 2) {
    let node = [arr[j], arr[j + 1]];
    let newValue = map.get(num);
    newValue.push(node);
    map.set(num, newValue);
  }
}
BFS(map, 1);
let max = 0;
let idx = 0;
result.forEach((item, i) => {
  if (item > max) {
    max = item;
    idx = i;
  }
});
result.fill(0);
visited.fill(false);
BFS(map, idx);

max = 0;
result.forEach((item) => {
  if (item > max) {
    max = item;
  }
});

console.log(max);

function BFS(map, start) {
  let queue = [];
  queue.push(start);
  visited[start] = true;
  while (queue.length !== 0) {
    let node = queue.shift();
    let value = result[node];
    for (let [next, weight] of map.get(node)) {
      if (!visited[next]) {
        result[next] = weight + value;
        visited[next] = true;
        queue.push(next);
      }
    }
  }
}
