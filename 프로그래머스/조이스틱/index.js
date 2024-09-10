function solution(name) {
  let alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  let value = 0;
  let dict = {};
  for (let char of alpha) {
    value >= 13 ? (dict[char] = 26 - value) : (dict[char] = value);
    value++;
  }

  // A가 아닌 친구들 인덱스 저장
  let notA = [];
  name.split("").forEach((char, idx) => {
    if (char !== "A") {
      notA[notA.length] = idx;
    }
  });

  if (notA.length === 0) {
    return 0;
  }

  function permutation(arr, result, cur) {
    if (cur.length === notA.length) {
      result.push(cur);
      return;
    }
    if (cur.length === 1) {
      if (cur[0] !== notA[0] && cur[0] !== notA[notA.length - 1]) {
        return;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      let rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      permutation(rest, result, [...cur, arr[i]]);
    }
  }

  function DFS(curIdx, preIdx, count, idx, arr) {
    let newCount;
    if (preIdx > curIdx) {
      newCount =
        Math.min(preIdx - curIdx, curIdx - preIdx + name.length) + count;
    } else {
      newCount =
        Math.min(curIdx - preIdx, preIdx - curIdx + name.length) + count;
    }

    newCount += dict[name[curIdx]];

    if (idx >= arr.length - 1) {
      return newCount;
    }
    return DFS(arr[idx + 1], curIdx, newCount, idx + 1, arr);
  }

  let arr = [];
  if (notA.length === name.length) {
    arr = [...notA];
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += dict[name[i]];
      result += 1;
    }
    return result - 1;
  } else {
    permutation(notA, arr, []);
    let result = Infinity;
    arr.forEach((item) => {
      let a = DFS(item[0], 0, 0, 0, item);
      result = Math.min(result, a);
    });
    return result;
  }
}
