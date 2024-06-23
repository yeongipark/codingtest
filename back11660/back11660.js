const input = require("fs")
  .readFileSync("back11660.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
let sumArr = Array.from({ length: n }, () => Array(n).fill(0)); // 2차원 배열 생성법
let result = [];

// 2차원 배열 저장
input.splice(1, n).forEach((item, i) => {
  let newArr = item.split(" ").map(Number);
  arr.push(newArr);
});

// 구간합 저장
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == 0 && j == 0) {
      sumArr[i][j] = arr[i][j];
    } else if (i == 0) {
      sumArr[i][j] = sumArr[i][j - 1] + arr[i][j];
    } else if (j == 0) {
      sumArr[i][j] = sumArr[i - 1][j] + arr[i][j];
    } else {
      sumArr[i][j] =
        sumArr[i - 1][j] + sumArr[i][j - 1] - sumArr[i - 1][j - 1] + arr[i][j];
    }
  }
}

// splice 하면 원본배열에서 사라지나???????
input.splice(1).forEach((item) => {
  let [x1, y1, x2, y2] = item.split(" ").map(Number);
  if (x1 == x2 && y1 == y2) {
    result.push(arr[x1 - 1][y1 - 1]);
  } else if (x1 == 1 && y1 == 1) {
    result.push(sumArr[x2 - 1][y2 - 1]);
  } else if (x1 == 1) {
    result.push(sumArr[x2 - 1][y2 - 1] - sumArr[x2 - 1][y1 - 2]);
  } else if (y1 == 1) {
    result.push(sumArr[x2 - 1][y2 - 1] - sumArr[x1 - 2][y2 - 1]);
  } else {
    result.push(
      sumArr[x2 - 1][y2 - 1] -
        sumArr[x2 - 1][y1 - 2] -
        sumArr[x1 - 2][y2 - 1] +
        sumArr[x1 - 2][y1 - 2]
    );
  }
});

console.log(result.join("\n"));
