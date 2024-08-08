function solution(want, number, discount) {
  // 구하고자 하는 음식들 초기화
  let result = 0;
  let target = new Map();
  want.forEach((item, idx) => {
    target.set(item, number[idx]);
  });
  let map = new Map();
  let start = 0;
  let end = 0;
  while (end <= discount.length) {
    if (end <= 9) {
      if (map.has(discount[end])) {
        map.set(discount[end], map.get(discount[end]) + 1);
      } else {
        map.set(discount[end], 1);
      }
      end++;
    } else {
      if (check(target, map)) {
        result++;
      }
      map.set(discount[start], map.get(discount[start]) - 1);
      if (map.has(discount[end])) {
        map.set(discount[end], map.get(discount[end]) + 1);
      } else {
        map.set(discount[end], 1);
      }
      start++;
      end++;
    }
  }
  return result;
}

function check(target, map) {
  for (let key of target.keys()) {
    if (!map.has(key) || target.get(key) > map.get(key)) {
      return false;
    }
  }
  return true;
}
