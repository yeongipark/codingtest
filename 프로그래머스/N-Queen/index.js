function solution(n) {
  let board = Array.from({ length: n }, () => Array(n).fill(0));
  let result = 0;
  function backTracking(count, row, col) {
    if (count === n) {
      result++;
      return;
    }

    for (let j = col; j < n; j++) {
      if (!check(row, j, board, n)) {
        board[row][j] = 1;
        backTracking(count + 1, row + 1, 0);
        board[row][j] = 0;
      }
    }
  }

  backTracking(0, 0, 0);
  return result;
}

function check(row, col, board, n) {
  if (isCol(col, board) || isRow(row, board) || isCross(row, col, board, n)) {
    return true;
  } else {
    return false;
  }
}

function isCol(col, board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][col]) {
      return true;
    }
  }
  return false;
}

function isRow(row, board) {
  if (board[row].includes(1)) {
    return true;
  } else {
    return false;
  }
}

function isCross(row, col, board, n) {
  let newRow = row;
  let newCol = col;

  // 왼쪽 대각선으로 이동하면서 존재하는지 확인
  while (newRow >= 0 && newCol >= 0) {
    if (board[newRow][newCol]) {
      // 대각선에 1이 있으면 true 반환
      return true;
    }
    newRow--;
    newCol--;
  }

  newRow = row;
  newCol = col;
  while (newRow < n && newCol < n) {
    if (board[newRow][newCol]) {
      // 대각선에 1이 있으면 true 반환
      return true;
    }
    newRow++;
    newCol++;
  }

  newRow = row;
  newCol = col;
  while (newRow < n && newCol >= 0) {
    if (board[newRow][newCol]) {
      // 대각선에 1이 있으면 true 반환
      return true;
    }
    newRow++;
    newCol--;
  }

  newRow = row;
  newCol = col;
  while (newRow >= 0 && newCol < n) {
    if (board[newRow][newCol]) {
      // 대각선에 1이 있으면 true 반환
      return true;
    }
    newRow--;
    newCol++;
  }

  // 대각선에 존재하지 않으면 false 반환
  return false;
}
