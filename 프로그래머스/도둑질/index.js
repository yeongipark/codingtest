function solution(money) {
  let n = money.length;
  // 첫번째 집 턴 경우
  let dp1 = Array(n).fill(0);
  // 두번째 집 턴 경우
  let dp2 = Array(n).fill(0);

  dp1[0] = money[0];
  dp1[1] = money[0];
  for (let i = 2; i < n - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
  }

  dp2[1] = money[1];
  for (let i = 2; i < n; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  return Math.max(dp1[n - 2], dp2[n - 1]);
}
