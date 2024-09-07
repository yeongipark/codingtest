function solution(brown, yellow) {
  let sum = brown + yellow;
  for (let i = 3; i < Math.sqrt(sum) + 1; i++) {
    if (sum % i === 0) {
      if (calc(i, sum / i) === brown) {
        return i > sum / i ? [i, sum / i] : [sum / i, i];
      }
    }
  }
}

function calc(row, col) {
  let difRow = row - 3;
  let difCol = col - 3;
  return 8 + (difRow + difCol) * 2;
}
