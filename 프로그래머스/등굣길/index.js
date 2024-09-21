function solution(m, n, puddles) {
  let dp = Array.from({ length: n }, () => Array(m).fill(0));
  for (let [col, row] of puddles) {
    dp[row - 1][col - 1] = -1;
  }
  dp[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      if (dp[i][j] === -1) continue;
      if (i === 0) {
        dp[i][j] = dp[i][j - 1];
        continue;
      }
      if (j === 0) {
        dp[i][j] = dp[i - 1][j];
        continue;
      }

      let num1 = dp[i - 1][j] < 0 ? 0 : dp[i - 1][j];
      let num2 = dp[i][j - 1] < 0 ? 0 : dp[i][j - 1];

      dp[i][j] = (num1 + num2) % 1000000007;
    }
  }
  return dp[n - 1][m - 1];
}
