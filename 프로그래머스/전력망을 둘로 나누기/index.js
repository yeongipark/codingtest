let visited;
function solution(n, wires) {
  var answer = -1;
  visited = Array(n).fill(false);
  let min = 100000000;
  for (let k = 0; k < wires.length; k++) {
    let sum = 0;
    let arr = makeList(wires, k, n);
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        sum -= BFS(i, arr);
        sum = Math.abs(sum);
      }
    }
    visited.fill(false);
    if (min > sum) {
      min = sum;
    }
  }

  answer = min;
  return answer;
}

function BFS(start, arr) {
  let size = 0;
  let queue = [];
  queue.push(start);
  size++;
  visited[start] = true;
  while (queue.length !== 0) {
    let a = queue.shift();
    arr[a].forEach((item) => {
      if (!visited[item]) {
        queue.push(item);
        size++;
        visited[item] = true;
      }
    });
  }
  return size;
}

function makeList(arr, n, size) {
  let linkedList = Array.from({ length: size + 1 }, () => []);
  arr.forEach((item, idx) => {
    if (idx === n) {
      return;
    }
    let start = item[0];
    let end = item[1];
    linkedList[start].push(end);
    linkedList[end].push(start);
  });
  return linkedList;
}
