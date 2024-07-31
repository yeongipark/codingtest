// 실패 ㅜㅜ
function solution(dirs) {
  let arr = Array.from({ length: 11 }, () => Array(11).fill(0));
  let d = {
    U: [0, -1],
    D: [0, 1],
    R: [1, 0],
    L: [-1, 0],
  };
  let count = 0;
  let startX = 5;
  let startY = 5;
  arr[startX][startY] = 0;
  for (let i = 0; i < dirs.length; i++) {
    let char = dirs.charAt(i); // U
    let [dx, dy] = d[char];
    if (startX + dx >= 0 && startX + dx <= 10) {
      startX += dx;
    }
    if (startY + dy >= 0 && startY + dy <= 10) {
      startY += dy;
    }

    if (arr[startX][startY] == 0) {
      console.log(startX, startY);
      arr[startX][startY] = 1;
      count++;
    }
  }

  return count;
}

// 방문 길이를 기준으로 측정했어야 하는데 방문 장소를 기준으로 측정을 하였다.
// 방문 길이를 기준으로 다시 생각해야 할 것 같다
