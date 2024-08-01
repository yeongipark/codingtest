function solution(board, moves) {
  let col = Array(board.length).fill(0);

  // 각 열에서 처음으로 0이 아닌 값의 위치를 저장
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== 0) {
        col[i] = j;
        break;
      }
    }
  }

  let stack = [];
  let result = 0;

  moves.forEach((item) => {
    let move = item - 1;
    if (col[move] < board.length) {
      // 열이 보드 범위 내에 있는지 확인
      let value = board[col[move]][move];
      col[move]++; // 다음 위치로 이동
      if (value !== 0) {
        // 0이 아닌 값을 처리
        if (stack[stack.length - 1] === value) {
          result += 2;
          stack.pop();
        } else {
          stack.push(value);
        }
      }
    }
  });

  return result;
}
