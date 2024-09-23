function solution(board) {
  let result = 0;
  let rowLength = board.length;
  let colLength = board[0].length;
  for (let i = 0; i < rowLength; i++) {
    if (board[i][0]) {
      result = 1;
      break;
    }
  }
  for (let i = 0; i < colLength; i++) {
    if (board[0][i]) {
      result = 1;
      break;
    }
  }
  for (let i = 1; i < rowLength; i++) {
    for (let j = 1; j < colLength; j++) {
      if (!board[i][j]) continue;
      let arr = [board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]];
      let min = Math.min(...arr);
      board[i][j] = min + 1;
      result = Math.max(board[i][j], result);
    }
  }
  return result ** 2;
}
