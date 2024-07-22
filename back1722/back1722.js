const input = require("fs")
  .readFileSync("back1722.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let arr = Array.from({ length: n }, (_, idx) => idx + 1);
// m : 소문제 번호 , k = 몇번 째 순열인지 or 순열
let d = input.shift().split(" ").map(Number);
let m = d[0];
let k;

let D = Array.from({ length: 21 }).fill(BigInt(0));
D[1] = BigInt(1);
for (let i = 2; i < 21; i++) {
  D[i] = D[i - 1] * BigInt(i);
}

if (m == 1) {
  k = BigInt(d[1]);
  findArr(arr, k);
} else {
  k = d.slice(1).map(BigInt);
  findIndex(arr, k);
}

function findIndex(list, target) {
  let result = BigInt(0);
  while (list.length > 0 && target.length > 0) {
    let index = list.findIndex((item) => item === Number(target[0]));
    if (index === -1) {
      break;
    }
    list = [...list.slice(0, index), ...list.slice(index + 1)];
    target = target.slice(1);
    result += BigInt(index) * D[list.length];
  }
  console.log((result + BigInt(1)).toString()); // BigInt를 문자열로 변환하여 출력
}

function findArr(list, target) {
  let result = [];
  while (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      if (list.length == 1) {
        result.push(list.shift());
        break;
      }
      if (D[list.length - 1] < target) {
        target -= D[list.length - 1];
      } else {
        result.push(list[i]);
        list = [...list.slice(0, i), ...list.slice(i + 1)];
        break;
      }
    }
  }
  console.log(result.join(" "));
}
