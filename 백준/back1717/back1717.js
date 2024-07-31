const input = require("fs")
  .readFileSync("back1717.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(" ").map(Number);
// 대표 노드 저장할 배열
let arr = Array.from(Array(n + 1), (_, idx) => idx);
let result = "";
for (let i = 0; i < m; i++) {
  let [d, n1, n2] = input[1 + i].split(" ").map(Number);
  if (d === 0) {
    union(n1, n2);
  } else {
    if (find(n1) === find(n2)) result += "YES\n";
    else result += "NO\n";
  }
}

console.log(result);

function find(num) {
  if (arr[num] === num) return num;
  else return (arr[num] = find(arr[num]));
}

function union(num1, num2) {
  let a = find(num1);
  let b = find(num2);
  if (a === b) return; // 이미 같은 집합임

  if (a < b) {
    arr[b] = a;
  } else {
    arr[a] = b;
  }
}
