console.log(solution([1, 2, 3, 4, 8], 8));
console.log(solution([2, 3, 5, 9], 10));

function solution(arr, target) {
  let obj = {};
  for (item of arr) {
    obj[item] = 1;
  }

  for (item of arr) {
    let rest = target - item;
    if (rest !== item && rest in obj) {
      return true;
    }
  }
  return false;
}
