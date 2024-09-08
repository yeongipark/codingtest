function solution(n) {
  let result = 0;
  while (n > 0) {
    if (!(n % 2)) {
      n = n / 2;
    } else {
      n = n - 1;
      result++;
    }
  }
  return result;
}

function isEven(n) {
  return !(n % 2);
}
