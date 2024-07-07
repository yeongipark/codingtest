const input = require("fs")
  .readFileSync("back18352.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m, k, s] = input.shift().split(" ").map(Number);

let arr = Array.from({ length: n }, () => []);
let visited = Array(n).fill(0);

// 간선 저장
for (let i = 0; i < m; i++) {
  let [start, end] = input.shift().split(" ").map(Number);
  arr[start - 1].push(end - 1);
}

BFS(s - 1);

let a = visited.reduce((acc, cur, idx) => {
  if (cur === k) {
    return acc + `${idx + 1}\n`;
  } else {
    return acc;
  }
}, "");

if (a.trim() === "") {
  console.log(-1);
} else {
  console.log(a);
}

function BFS(start) {
  let queue = [];
  queue.push(start);
  visited[start] = 0;
  while (queue.length) {
    let node = queue.shift();
    for (let a of arr[node]) {
      if (visited[a] === 0) {
        visited[a] = visited[node] + 1;
        queue.push(a);
      }
    }
  }
}
