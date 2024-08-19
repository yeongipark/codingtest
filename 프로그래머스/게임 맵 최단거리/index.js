function solution(maps) {
  let dx = [0, 1, 0, -1];
  let dy = [-1, 0, 1, 0];
  let rowNum = maps.length - 1;
  let colNum = maps[0].length - 1;
  let visited = Array.from({ length: maps.length }, () => Array(5).fill(0));

  return BFS(rowNum, colNum, dx, dy, visited, maps) ?? -1;
}

function BFS(rowNum, colNum, dx, dy, visited, maps) {
  let queue = [];
  // x, y, value
  queue.push([0, 0, 1]);
  visited[0][0] = 1;
  while (queue.length) {
    let [x, y, value] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nextX = x + dx[i];
      let nextY = y + dy[i];
      if (nextX >= 0 && nextX <= rowNum && nextY >= 0 && nextY <= colNum) {
        if (maps[nextX][nextY] && !visited[nextX][nextY]) {
          if (nextX === rowNum && nextY === colNum) {
            return value + 1;
          } else {
            visited[nextX][nextY] = 1;
            queue.push([nextX, nextY, value + 1]);
          }
        }
      }
    }
  }
}
