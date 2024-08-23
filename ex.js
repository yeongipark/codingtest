function solution(k, dungeons) {
  let visited = Array(dungeons.length).fill(false);
  let result = -Infinity;
  function getResult(cur, idx, count) {
    visited[idx] = true;
    if (cur < dungeons[idx][0]) {
      result = Math.max(result, count);
      return;
    }
    if (!visited.includes(false)) {
      result = Math.max(result, count);
      return;
    }

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i]) {
        getResult(cur - dungeons[idx][1], i, count + 1);
      }
    }
    visited[idx] = false;
  }

  getResult(k, 0, 1);
  return result;
}
