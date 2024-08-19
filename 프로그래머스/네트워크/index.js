function solution(n, computers) {
  let visited = Array(n).fill(0);

  function DFS(startIdx) {
    visited[startIdx] = 1;
    for (let i = 0; i < computers[startIdx].length; i++) {
      if (computers[startIdx][i] === 1 && !visited[i]) {
        DFS(i);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      count++;
    }
  }

  return count;
}
