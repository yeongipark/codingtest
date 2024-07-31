class Edge {
  constructor(start, end, weight) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }
}

const input = require("fs")
  .readFileSync("back18657.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input.shift().split(" ").map(Number);
let d = Array(n + 1).fill(Infinity);
d[1] = 0;
let arr = [];
for (let i = 0; i < m; i++) {
  let [start, end, weight] = input.shift().split(" ").map(Number);
  arr.push(new Edge(start, end, weight));
}

for (let i = 0; i < n - 1; i++) {
  oneCycle(d);
}

let copy = [...d];
oneCycle(copy);
for (let i = 0; i < n; i++) {
  if (d[i] > copy[i]) {
    console.log(-1);
    return;
  }
}
let output = "";
for (let i = 2; i <= n; i++) {
  if (d[i] !== Infinity) {
    console.log(d[i]);
  } else {
    console.log(-1);
  }
}

function oneCycle(d) {
  for (let edge of arr) {
    let start = edge.start;
    let end = edge.end;
    let weight = edge.weight;
    if (d[start] == Infinity) {
      continue;
    }
    if (d[end] > d[start] + weight) {
      d[end] = d[start] + weight;
    }
  }
}
