const input = require("fs")
  .readFileSync("back11000.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
let arr = Array.from({ length: n }).fill([]);
let visited = [];
for (let i = 1; i <= n; i++) {
  let newArr = input[i].split(" ").map(Number);
  arr[i - 1] = newArr;
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
console.log(arr);
visited.push(arr[0][1]);
for (let i = 1; i < n; i++) {
  let find = false;
  for (let j = 0; j < visited.length; j++) {
    if (visited[j] <= arr[i][0]) {
      visited[j] = arr[i][1];
      find = true;
      break;
    }
  }
  if (!find) {
    visited.push(arr[i][1]);
  }
}

console.log(visited.length);
