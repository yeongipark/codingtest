let sum = 1;
let map;
let keys;
function solution(clothes) {
  var answer = 0;
  map = new Map();

  if (clothes.length == 1) {
    answer = sum;
    return answer;
  }
  clothes.forEach((item) => {
    if (map.has(item[1])) {
      map.set(item[1], map.get(item[1]) + 1);
    } else {
      map.set(item[1], 1);
    }
  });

  for (let [key, value] of map) {
    sum *= value + 1;
  }
  answer = sum - 1;
  return answer;
}
