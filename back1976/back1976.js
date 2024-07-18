const input = require("fs")
  .readFileSync("back1976.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let m = +input.shift();
let arr = Array.from(Array(n + 1), (_, idx) => idx);

for (let i = 1; i <= n; i++) {
  let data = input.shift().split(" ").map(Number);
  data.forEach((data, idx) => {
    if (data === 1) {
      union(i, idx + 1);
    }
  });
}

let answer = input.shift().split(" ").map(Number);

let d = find(answer[0]);
for (let i = 1; i < answer.length; i++) {
  if (d !== find(answer[i])) {
    console.log("NO");
    return;
  }
}
console.log("YES");

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
