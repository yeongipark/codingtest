function solution(arr) {
  let len = arr[0].length;

  let dp = Array.from({ length: 4 }, () => Array(len).fill(0));
  dp[0][0] = arr[0][0];
  dp[1][0] = arr[1][0];
  dp[2][0] = arr[2][0];
  dp[3][0] = arr[0][0] + arr[2][0];

  for (let i = 1; i < len; i++) {
    dp[0][i] = arr[0][i] + Math.max(dp[1][i - 1], dp[2][i - 1]);
    dp[1][i] = arr[1][i] + Math.max(dp[0][i - 1], dp[2][i - 1], dp[3][i - 1]);
    dp[2][i] = arr[2][i] + Math.max(dp[0][i - 1], dp[1][i - 1]);
    dp[3][i] = arr[2][i] + arr[0][i] + dp[1][i - 1];
  }
  console.log(Math.max(...dp.map((row) => row[len - 1])));
}

solution([
  [1, 7, 13, 2, 6],
  [2, -4, 2, 5, 4],
  [5, 3, 5, -3, 1],
]);
