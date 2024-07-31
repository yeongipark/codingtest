function solution(num) {
  let result = [];
  while (num > 1) {
    result.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  result.unshift(num);
  console.log(result.join(""));
}

solution(12345);
