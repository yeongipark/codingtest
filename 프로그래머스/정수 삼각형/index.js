function solution(triangle) {
  let dp = Array.from({ length: triangle.length }, (_, idx) =>
    Array(idx + 1).fill(0)
  );
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
        continue;
      }
      if (j === i) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
        continue;
      }
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
    }
  }
  return Math.max(...dp[dp.length - 1]);
}
