function solution(nums) {
  let obj = {};
  let max = 0;
  var answer = 0;
  let choose = nums.length / 2;
  let count = 0;
  nums.forEach((item) => {
    if (item in obj) {
      obj[item] += 1;
    } else {
      count++;
      obj[item] = 1;
    }
  });
  answer = Math.min(count, choose);
  return answer;
}
