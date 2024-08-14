function solution(info, edges) {
  let arr = Array(info.length).fill([]);
  for (let [start, end] of edges) {
    arr[start] = [...arr[start], end];
  }

  let queue = [];
  let max = 1;
  // 현재 노드, 늑대 수, 양, 갈 곳
  queue.push([0, 0, 1, new Set()]);

  while (queue.length !== 0) {
    let [node, wolf, sheep, willGo] = queue.shift();
    arr[node].forEach((item) => willGo.add(item));
    willGo.forEach((next) => {
      let newSet = new Set(willGo);
      newSet.delete(next);
      if (info[next]) {
        if (wolf + 1 < sheep) {
          queue.push([next, wolf + 1, sheep, newSet]);
        }
      } else {
        max = Math.max(max, sheep + 1);
        queue.push([next, wolf, sheep + 1, newSet]);
      }
    });
  }

  return max;
}
