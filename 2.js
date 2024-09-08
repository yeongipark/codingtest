function splitSquareSum(num) {
  let string = num + "";
  let sum = 0;
  for (let char of string) {
    let number = +char;
    sum += number ** 2;
  }
  return sum;
}

function solution(num) {
  let result = num;
  let count = 0;
  while (result !== 1) {
    result = splitSquareSum(result);
    count++;
    if (count >= 1000 || result === num) {
      return false;
    }
  }
  return true;
}

console.log(solution(49));
