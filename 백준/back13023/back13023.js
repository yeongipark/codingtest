const input = require("fs")
  .readFileSync("back13023.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, e] = input[0].split(" ").map(Number);
let map = new Map();
let find = false;
let visited = new Array(n).fill(false);

for (let i = 0; i < n; i++) {
  map.set(i, []);
}

for (let i = 1; i <= e; i++) {
  let [start, end] = input[i].split(" ").map(Number);

  let startValue = map.get(start);
  //  console.log(startValue);
  startValue.push(end);
  let endValue = map.get(end);
  endValue.push(start);

  map.set(start, startValue);
  map.set(end, endValue);
}

for (let i = 0; i < n; i++) {
  DFS(i, 0);
  if (find) {
    break;
  }
}

if (find) {
  console.log(1);
} else {
  console.log(0);
}

function DFS(start, depth) {
  if (depth == 4) {
    find = true;
    return;
  }
  visited[start] = true;

  for (let item of map.get(start)) {
    if (!visited[item]) {
      DFS(item, depth + 1);
    }
  }
  visited[start] = false;
}
