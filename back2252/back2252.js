const input = require("fs")
  .readFileSync("back2252.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

const [n, m] = input.shift().split(" ").map(Number);
const d = Array(n + 1).fill(0); // 진입 차수 배열
const sorted = []; // 정렬된 값 넣기
const arr = Array.from(Array(n + 1), () => []); // 인접 리스트
const queue = []; // 진입 차수 값이 0인 친구들 저장할 큐

if (n === 1) {
  console.log(1);
  return;
}

for (let i = 0; i < m; i++) {
  let [start, end] = input.shift().split(" ").map(Number);
  d[end]++;
  arr[start].push(end);
}

for (let i = 1; i <= n; i++) {
  if (d[i] === 0) {
    queue.push(i);
  }
}

while (queue.length) {
  let node = queue.shift();
  sorted.push(node);
  for (let item of arr[node]) {
    d[item]--;
    if (d[item] === 0) {
      queue.push(item);
    }
  }
}

console.log(sorted);
