function solution(land) {
  let dp = Array.from({ length: land.length }, () => Array(4).fill(0));
  for (let i = 0; i < 4; i++) {
    dp[0][i] = land[0][i];
  }

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      let arr = dp[i - 1].filter((_, idx) => idx !== j);
      dp[i][j] = Math.max(...arr) + land[i][j];
    }
  }

  return Math.max(...dp[dp.length - 1]);
}
