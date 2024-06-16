const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\r?\n/);

const getReverNum = (position) => {
  if (position == 1) {
    return 2;
  } else if (position == 2) {
    return 1;
  } else if (position == 3) {
    return 4;
  } else if (position == 4) {
    return 3;
  }
};

let width = +input[0].split(" ")[0];
let height = +input[0].split(" ")[1];
let n = +input[1];
let my = input[input.length - 1].split(" ").map((item) => +item);
let myPosition = my[0]; // 나의 위치 저장
let reversPostion = getReverNum(myPosition); // 반대편에 있는지 확인 할 변수
let reverse = []; // 반대편에 있는 좌표 저장할 변수
let notReverse = []; // 반대편이 아닌 좌표 저장할 변수

for (let i = 0; i < n + 1; i++) {
  let arr = input[2 + i].split(" ").map((item) => +item);
  let newArr;
  if (arr[0] == 1) {
    newArr = [0, arr[1]];
  } else if (arr[0] == 2) {
    newArr = [height, arr[1]];
  } else if (arr[0] == 3) {
    newArr = [arr[1], 0];
  } else if (arr[0] == 4) {
    newArr = [arr[1], width];
  }

  if (i == n) {
    my = newArr;
    break;
  }

  if (arr[0] == reversPostion) {
    reverse.push(newArr);
  } else {
    notReverse.push(newArr);
  }
}
let sum = 0;
notReverse.forEach((item) => {
  let diffX = Math.abs(my[0] - item[0]);
  let diffY = Math.abs(my[1] - item[1]);
  sum += diffX + diffY;
});

reverse.forEach((item) => {
  let sum1;
  let sum2;
  if (myPosition == 1 || myPosition == 2) {
    sum1 = Math.abs(width - my[1]) + Math.abs(width - item[1]) + height;
    sum2 = my[1] + item[1] + height;
  } else {
    sum1 = Math.abs(height - my[0]) + Math.abs(height - item[0]) + width;
    sum2 = my[0] + item[0] + width;
  }
  sum += Math.min(sum2, sum1);
});

console.log(sum);
