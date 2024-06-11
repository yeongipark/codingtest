const readline = require("readline");

const solution = (initPos, num, move) => {
  let d = {
    R: [0, 1],
    L: [0, -1],
    B: [1, 0],
    T: [-1, 0],
    RT: [-1, 1],
    RB: [1, 1],
    LB: [1, -1],
    LT: [-1, -1],
  };

  let alpha = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
  };

  let number = {
    8: 0,
    7: 1,
    6: 2,
    5: 3,
    4: 4,
    3: 5,
    2: 6,
    1: 7,
  };

  let board = new Array(8).fill(0).map(() => new Array(8).fill(0));
  let king = initPos[0];
  let rock = initPos[1];
  king = [number[king[1]], alpha[king[0]]];
  rock = [number[rock[1]], alpha[rock[0]]];
  move.forEach((item) => {
    let dir = d[item];
    let kingRow = king[0] + dir[0];
    let kingCol = king[1] + dir[1];
    if (kingRow > 7 || kingRow < 0 || kingCol > 7 || kingCol < 0) {
      return;
    }

    if (kingRow == rock[0] && kingCol == rock[1]) {
      let rockRow = rock[0] + dir[0];
      let rockCol = rock[1] + dir[1];
      if (rockRow > 7 || rockRow < 0 || rockCol > 7 || rockCol < 0) {
        return;
      } else {
        king = [kingRow, kingCol];
        rock = [rockRow, rockCol];
        return;
      }
    }

    king = [kingRow, kingCol];
  });
  let kingString = "";
  let rockString = "";
  for (let a in alpha) {
    if (alpha[a] == king[1]) {
      kingString += a;
    }

    if (alpha[a] == rock[1]) {
      rockString += a;
    }
  }

  for (let n in number) {
    if (number[n] == king[0]) {
      kingString += n;
    }

    if (number[n] == rock[0]) {
      rockString += n;
    }
  }
  console.log(kingString);
  console.log(rockString);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

let initPos;
let num;
let move = [];
let count = 0;
rl.on("line", (line) => {
  if (count == 0) {
    initPos = line.split(" ");
    num = line.split(" ").pop();
  } else {
    move.push(line);
    if (move.length == Number(num)) {
      rl.close();
    }
  }
  count++;
}).on("close", () => {
  solution(initPos, num, move);
  process.exit();
});
