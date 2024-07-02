const input = require("fs")
  .readFileSync("back14891.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let obj = {
  1: {
    idx1: 2,
    idx2: 6,
    arr: [],
  },
  2: {
    idx1: 2,
    idx2: 6,
    arr: [],
  },
  3: {
    idx1: 2,
    idx2: 6,
    arr: [],
  },
  4: {
    idx1: 2,
    idx2: 6,
    arr: [],
  },
};

let graph = [[], [2], [1, 3], [2, 4], [3]];
let visited = Array(5).fill(false);

for (let i = 0; i < 4; i++) {
  let newArr = input.shift().split("").map(Number);
  obj[i + 1].arr = newArr;
}

let n = +input.shift();
for (let i = 0; i < n; i++) {
  let [start, d] = input.shift().split(" ").map(Number);
  DFS(start, d);
  visited.fill(false);
}

let sum = 0;
for (let i = 1; i <= 4; i++) {
  let index = (obj[i].idx1 + 6) % 8;
  if (obj[i].arr[index] === 0) {
    continue;
  } else {
    sum += Math.pow(2, i - 1);
  }
}

console.log(sum);

function DFS(start, d) {
  visited[start] = true;

  for (let item of graph[start]) {
    if (visited[item] === false) {
      if (item > start) {
        if (obj[item].arr[obj[item].idx2] !== obj[start].arr[obj[start].idx1]) {
          DFS(item, d * -1);
        }
      } else {
        if (obj[item].arr[obj[item].idx1] !== obj[start].arr[obj[start].idx2]) {
          DFS(item, d * -1);
        }
      }
    }
  }

  if (d === 1) {
    if (obj[start].idx1 - 1 < 0) {
      obj[start].idx1 = 7;
    } else {
      obj[start].idx1--;
    }

    if (obj[start].idx2 - 1 < 0) {
      obj[start].idx2 = 7;
    } else {
      obj[start].idx2--;
    }
  } else {
    obj[start].idx1 = (obj[start].idx1 + 1) % 8;
    obj[start].idx2 = (obj[start].idx2 + 1) % 8;
  }
}
