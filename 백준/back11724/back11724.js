const input = require("fs")
  .readFileSync("back11724.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(" ").map(Number);
let map = new Map();

for (let i = 0; i < n; i++) {
  map.set(i + 1, []);
}

for (let i = 0; i < m; i++) {
  let [start, end] = input[1 + i].split(" ").map(Number);

  let startValue = map.get(start);
  startValue.push(end);
  let endValue = map.get(end);
  endValue.push(start);
  map.set(start, startValue);
  map.set(end, endValue);
}

let visited = [];
let count = 0;
for (let i = 1; i <= n; i++) {
  if (!visited.includes(i)) {
    BFS(map, i);
    count++;
  }
}
console.log(count);

// function DFS(graph, start) {
//   visited.push(start);

//   for (let item of graph.get(start)) {
//     if (!visited.includes(item)) {
//       DFS(graph, item);
//     }
//   }
// }

function BFS(graph, start) {
  let queue = [];
  queue.push(start);
  visited.push(start);
  while (queue.length !== 0) {
    let node = queue.shift();
    for (let item of graph.get(node)) {
      if (!visited.includes(item)) {
        queue.push(item);
        visited.push(item);
      }
    }
  }
}
