function solution(N, number) {
  if (String(number).length <= 1) return 1;
  let arr = Array.from({ length: 9 }, () => new Set());
  for (let i = 1; i <= 8; i++) {
    arr[i].add(Number(String(N).repeat(i)));
  }
  for (let i = 2; i <= 8; i++) {
    for (let j = 1; j < i; j++) {
      for (let num1 of arr[j]) {
        for (let num2 of arr[i - j]) {
          arr[i].add(num1 + num2);
          arr[i].add(num1 - num2);
          arr[i].add(Math.floor(num1 / num2));
          arr[i].add(num1 * num2);
        }
      }
    }
    if (arr[i].has(number)) return i;
  }
  return -1;
}
