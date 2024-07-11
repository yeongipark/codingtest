const { start } = require("repl");

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  add(node) {
    this.heap.push(node);

    if (this.heap.length === 1) {
      return;
    }

    let cur = this.heap.length - 1;
    let parent = Math.floor((cur - 1) / 2);
    while (cur > 0) {
      if (this.heap[parent].weight > this.heap[cur].weight) {
        [this.heap[parent].weight, this.heap[cur].weight] = [
          this.heap[cur].weight,
          this.heap[parent].weight,
        ];
        cur = parent;
        parent = (cur - 1) / 2;
      } else break;
    }
  }

  getSize() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length < 1;
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.getSize() === 1) {
      return this.heap.shift();
    }

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let cur = 0;
    let left = cur * 2 + 1;
    let right = cur * 2 + 2;
    while (left < this.heap.length) {
      let child = left;
      if (
        right < this.heap.length &&
        this.heap[right].weight < this.heap[left].weight
      ) {
        child = right;
      }

      if (this.heap[child].weight < this.heap[cur].weight) {
        [this.heap[child].weight, this.heap[cur].weight] = [
          this.heap[cur].weight,
          this.heap[child].weight,
        ];
        cur = child;
        left = cur * 2 + 1;
        right = cur * 2 + 2;
      } else {
        break;
      }
    }

    return min;
  }
}

class Node {
  constructor(n, weight) {
    this.n = n;
    this.weight = weight;
  }
}

const input = require("fs")
  .readFileSync("back1753.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input.shift().split(" ").map(Number);
let startNode = +input.shift();
let arr = Array.from({ length: n + 1 }, () => new Array());
for (let i = 0; i < m; i++) {
  let [start, end, weight] = input.shift().split(" ").map(Number);
  arr[start].push(new Node(end, weight));
}

let min = Array(n + 1).fill(Infinity);
min[startNode] = 0;
let visited = Array(n + 1).fill(false);
visited[0] = true;

let pr = new PriorityQueue();
pr.add(new Node(startNode, 0));
while (!pr.isEmpty()) {
  startNode = pr.remove().n;
  visited[startNode] = true;
  for (let i of arr[startNode]) {
    let [s, weight] = [i.n, i.weight];
    if (!visited[s] && min[s] > min[startNode] + weight) {
      min[s] = min[startNode] + weight;
      pr.add(i);
    }
  }
}

let ouput = "";
for (let i = 1; i < min.length; i++) {
  if (min[i] === Infinity) {
    ouput += "INF\n";
  } else {
    ouput += min[i] + "\n";
  }
}

console.log(ouput);
