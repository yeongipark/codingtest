function solution(id_list, report, k) {
  let obj = new Map();
  for (let id of id_list) {
    obj.set(id, {
      count: 0, // 신고 받는 갯수 젖장
      arr: [], // 신고한 유저 저장
    });
  }
  let result = new Set();

  for (let item of report) {
    let [a, b] = item.split(" ");
    if (obj.get(a).arr.includes(b)) {
      continue;
    } else {
      obj.get(a).arr.push(b);
      obj.get(b).count++;
      if (obj.get(b).count >= k) {
        result.add(b);
      }
    }
  }

  if (result.length === 0) {
    return Array(id_list.length).fill(0);
  }
  let answer = Array(id_list.length).fill(0);
  let i = 0;
  for (let [item, value] of obj.entries()) {
    for (let id of result) {
      if (value.arr.includes(id)) {
        answer[i]++;
      }
    }
    i++;
  }
  return answer;
}
