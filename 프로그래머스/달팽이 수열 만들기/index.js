function solution(n) {
  let arr = Array.from({ length: n }, () => Array(n).fill(0));
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];

  let count = 1;
  let idx = 0;
  function DFS(row, col) {
    arr[row][col] = count++;

    for (let i = 0; i < 3; i++) {
      let newRow = row + dy[idx];
      let newCol = col + dx[idx];
      if (check(newRow, newCol)) {
        DFS(newRow, newCol);
      } else {
        idx = (idx + 1) % 4;
      }
    }
    // for (let i = 0; i < 4; i++) {
    //   let newRow = row + dy[i];
    //   let newCol = col + dx[i];
    //   if (check(newRow, newCol)) {
    //     DFS(newRow, newCol);
    //   }
    // }
  }

  function check(row, col) {
    return row >= 0 && row < n && col >= 0 && col < n && arr[row][col] === 0;
  }

  DFS(0, 0);
  console.log(arr);
}

solution(7);
