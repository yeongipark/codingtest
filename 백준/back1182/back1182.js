const readline = require("readline");
let result = 0;

const solution = (n, searchNum, arr) => {
  arr = arr.map((item) => +item);

  const recursion = (num, sum) => {
    if (num == n) {
      return;
    }

    sum += arr[num];
    if (sum == searchNum) {
      result++;
    }
    recursion(num + 1, sum); // 해당 숫자를 선택한 경우
    recursion(num + 1, sum - arr[num]); // 선택하지 않은 경우
  };

  recursion(0, 0);
  console.log(result);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let searchNum;
let arr;
let count = 0;

rl.on("line", function (line) {
  if (count == 0) {
    n = +line.split(" ")[0];
    searchNum = +line.split(" ")[1];
  } else {
    arr = line.split(" ");
  }
  if (count == 1) {
    rl.close();
  }
  count++;
}).on("close", function () {
  solution(n, searchNum, arr);
  process.exit();
});
