function solution(n, weak, dist) {
  const length = weak.length;
  for (let i = 0; i < length; i++) {
    weak.push(weak[i] + n);
  }
  let answer = Infinity;
  let result = [];
  permutation(dist, dist.length, result, []);
  console.log(result);
  for (let i = 0; i < length; i++) {
    for (const friends of result) {
      let cnt = 1;
      let position = weak[i] + friends[cnt - 1];
      for (let j = i; j < i + length; j++) {
        if (position < weak[j]) {
          cnt++;
          if (cnt > dist.length) {
            break;
          }
          position = weak[j] + friends[cnt - 1];
        }
      }
      answer = Math.min(answer, cnt);
    }
  }

  return answer <= dist.length ? answer : -1;
}

function permutation(arr, n, result, cur) {
  if (n === 0) {
    result.push([...cur]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let rest = [...arr];
    rest.splice(i, 1);
    permutation(rest, n - 1, result, [...cur, arr[i]]);
  }
}
