function solution(graph, startNode) {
  let list = {};
  let visited = {};
  let result = [];

  // 그래프를 인접 리스트로 변환하고 방문 상태 초기화
  for (let [start, end] of graph) {
    if (!list[start]) {
      list[start] = [];
      visited[start] = false;
    }
    if (!list[end]) {
      // 모든 노드를 리스트에 추가
      list[end] = [];
      visited[end] = false;
    }
    list[start].push(end);
  }

  DFS(list, startNode, visited, result);
  console.log(result);
}

function DFS(list, node, visited, result) {
  visited[node] = true;
  result.push(node);
  for (let neighbor of list[node]) {
    if (!visited[neighbor]) {
      DFS(list, neighbor, visited, result);
    }
  }
}

// 테스트 실행
solution(
  [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["B", "E"],
    ["C", "F"],
    ["E", "F"],
  ],
  "A"
);
