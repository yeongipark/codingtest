const input = require("fs")
  .readFileSync("back1043.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input.shift().split(" ").map(Number);
// 대표 노드를 지정할 배열
let arr = Array.from(Array(n + 1), (_, idx) => idx);
// 진실을 알고 있는 사람들의 집합 생성
let set = input.shift().split(" ").map(Number).splice(1);

if (set.length === 0) {
  console.log(m);
  return;
}

for (let i = 0; i < m; i++) {
  let member = input[i].split(" ").map(Number).splice(1);
  let first = member[0];
  for (let j = 1; j < member.length; j++) {
    union(first, member[j]);
  }
}
let result = 0;
for (let i = 0; i < m; i++) {
  let is = true;
  let member = input[i].split(" ").map(Number).splice(1);
  let cur = member[0];
  for (let j = 0; j < set.length; j++) {
    if (find(cur) == find(set[j])) {
      is = false;
      break;
    }
  }
  if (is) result++;
}
console.log(result);

function union(num1, num2) {
  let a = find(num1);
  let b = find(num2);
  if (a === b) return;
  if (a < b) {
    arr[b] = a;
  } else {
    arr[a] = b;
  }
}

function find(num) {
  if (arr[num] === num) return num;
  else return (arr[num] = find(arr[num]));
}
