const input = require("fs")
  .readFileSync("back1516.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

const n = +input.shift();
const arr = Array.from(Array(n + 1), () => []); // 인접 리스트
const time = Array(n + 1).fill(0); // 건물 짓는데 걸리는 시간 저장
const d = Array(n + 1).fill(0); // 진입 차수 배열
const queue = []; // 진입 차수가 0인 노드 저장할 큐
const result = Array(n + 1).fill(0); // 정답 저장할 배열

for (let i = 1; i <= n; i++) {
  let array = input.shift().split(" ").map(Number);
  time[i] = array[0];
  for (let j = 1; j < array.length; j++) {
    if (array[j] != -1) {
      d[i]++;
      arr[array[j]].push(i);
    }
  }
}

for (let i = 1; i < d.length; i++) {
  if (d[i] === 0) {
    queue.push(i);
    result[i] = time[i];
  }
}

while (queue.length) {
  let node = queue.shift();
  for (let item of arr[node]) {
    d[item]--;
    result[item] = Math.max(result[item], result[node] + time[item]);
    if (d[item] === 0) {
      queue.push(item);
    }
  }
}

console.log(result.slice(1).join("\n"));
