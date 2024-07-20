class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  add = function (num) {
    this.heap.push(num);
    if (this.heap.length === 1) {
      return;
    }
    let cur = this.heap.length - 1;
    while (cur > 0) {
      let parent = Math.floor((cur - 1) / 2);
      if (this.heap[parent] > this.heap[cur]) {
        [this.heap[parent], this.heap[cur]] = [
          this.heap[cur],
          this.heap[parent],
        ];
        cur = parent;
      } else {
        break;
      }
    }
  };

  getSize() {
    return this.heap.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  remove() {
    if (this.isEmpty()) {
      return;
    }

    if (this.getSize() === 1) {
      return this.heap.shift();
    }

    let result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let cur = 0;
    let left = cur * 2 + 1;
    let right = cur * 2 + 2;

    while (left < this.getSize()) {
      let child = left;
      if (right < this.getSize() && this.heap[right] < this.heap[left]) {
        child = right;
      }

      if (this.heap[child] < this.heap[cur]) {
        [this.heap[child], this.heap[cur]] = [this.heap[cur], this.heap[child]];
        cur = child;
        left = cur * 2 + 1;
        right = cur * 2 + 2;
      } else break;
    }

    return result;
  }
}

const input = require("fs")
  .readFileSync("back1766.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(" ").map(Number);

if (n === 1) {
  console.log(1);
  return;
}

// 인접리스트
let arr = Array.from(Array(n + 1), () => []);
// 진입 차수
let d = Array(n + 1).fill(0);

// 진입 차수와 인접 리스트 초기화
for (let i = 0; i < m; i++) {
  let [start, end] = input[1 + i].split(" ").map(Number);
  d[end]++;
  arr[start].push(end);
}

let queue = new PriorityQueue();

for (let i = 1; i <= n; i++) {
  if (d[i] === 0) {
    queue.add(i);
  }
}

// 정답 담을 배열
let result = [];

while (!queue.isEmpty()) {
  let node = queue.remove();
  result.push(node);
  for (let item of arr[node]) {
    d[item]--;
    if (d[item] == 0) {
      queue.add(item);
    }
  }
}

console.log(result.join(" "));
