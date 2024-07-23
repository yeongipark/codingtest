const input = require("fs")
  .readFileSync("back1256.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m, k] = input.shift().split(" ").map(Number);
k = BigInt(k); // k를 BigInt로 변환

let arr = Array.from({ length: 201 }, () => Array(201).fill(0n));

for (let i = 0; i < arr.length; i++) {
  arr[i][0] = 1n;
  arr[i][i] = 1n;
}

// 조합 dp 배열 초기화
for (let i = 1; i < arr.length; i++) {
  for (let j = 1; j < i; j++) {
    arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
  }
}

if (arr[n + m][n] < k) {
  console.log("-1");
  return;
}

let result = "";
while (n > 0 && m > 0) {
  if (arr[n - 1 + m][m] >= k) {
    // 여기에서 n-1 대신 n으로 잘못되어 있었음
    result += "a";
    n--;
  } else {
    result += "z";
    k -= arr[n - 1 + m][m];
    m--;
  }
}

for (let i = 0; i < n; i++) {
  result += "a";
}

for (let i = 0; i < m; i++) {
  result += "z";
}

console.log(result);
