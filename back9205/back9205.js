const input = require("fs")
  .readFileSync("back9205.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();

for (let i = 0; i < 2; i++) {
  let m = +input.shift(); // 편의점 개수
  let arr = Array.from({ length: 2 + m }, () => Array(2 + m).fill(0));
  let home = input.shift().split(" ").map(Number);
  let mart = [];
  for (let k = 0; k < m; k++) {
    mart.push(input.shift().split(" ").map(Number));
  }

  let fesival = input.shift().split(" ").map(Number);

  for (let k = 0; k < 2 + m; k++) {
    let row, col;
    if (k == 0) {
      row = home[0];
      col = home[1];
    } else if (k == 1 + m) {
      row = fesival[0];
      col = fesival[1];
    } else {
      row = mart[k - 1][0];
      col = mart[k - 1][1];
    }

    for (let j = 0; j < 2 + m; j++) {
      if (k == j) continue;
      let x;
      let y;
      if (j === 0) {
        x = home[0];
        y = home[1];
      } else if (j === 1 + m) {
        x = fesival[0];
        y = fesival[1];
      } else {
        x = mart[j - 1][0];
        y = mart[j - 1][1];
      }
      arr[k][j] = Math.abs(row - x) + Math.abs(col - y);
    }
  }

  let visited = Array(2 + m).fill(false);
  visited[0] = true;
  let index = 0;
  let find;
  while (1) {
    find = false;
    let min = -50000;
    arr[index].forEach((item, idx) => {
      if (item <= 1000) {
        if (min < item && !visited[idx]) {
          visited[idx] = true;
          min = item;
          index = idx;
          find = true;
        }
      }
    });
    if (!find) {
      console.log("sad");
      break;
    }
    if (index === 1 + m) {
      console.log("happy");
      break;
    }
  }
}
