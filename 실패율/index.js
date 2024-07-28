function solution(N, stages) {
  let count = Array(N + 2).fill(0);
  let sum;
  let result = [];
  stages.forEach((item, idx) => count[item]++);
  sum = count.reduce((acc, cur) => acc + cur, 0);

  for (let i = 1; i <= N; i++) {
    sum -= count[i - 1];
    if (sum === 0) {
      result.push({ idx: i, value: 0 });
      continue;
    }

    result.push({ idx: i, value: count[i] / sum });
  }
  result.sort((a, b) => {
    if (b.value === a.value) {
      return Number(a.idx) - Number(b.idx);
    } else {
      return b.value - a.value;
    }
  });
  return result.map((item) => item.idx);
}
