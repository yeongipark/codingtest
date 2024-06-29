// const { findSourceMap } = require("module");

// const input = require("fs")
//   .readFileSync("back14889.txt")
//   .toString()
//   .trim()
//   .split(/\r?\n/);

// let n = +input.shift();
// let arr = [];
// let size = n / 2;
// for (let i = 0; i < n; i++) {
//   let newArr = input.shift().split(" ").map(Number);
//   arr.push(newArr);
// }

// let team1 = [];
// let team2 = [];
// let min = Infinity;
// DFS(0);
// console.log(min);

// function DFS(index) {
//   if (team1.length === size && team2.length === size) {
//     min = Math.min(Math.abs(acc(team1) - acc(team2)), min);
//     return;
//   }
//   if (index === n) {
//     return;
//   }
//   team1.push(index);
//   DFS(index + 1);
//   team1.pop();
//   team2.push(index);
//   DFS(index + 1);
//   team2.pop();
// }

// function acc(team) {
//   let sum = 0;
//   for (let i = 0; i < team.length; i++) {
//     for (let j = i + 1; j < team.length; j++) {
//       sum += arr[team[i]][team[j]];
//       sum += arr[team[j]][team[i]];
//     }
//   }
//   return sum;
// }

arr = ["a", "b", "c", "d", "e"];
combination();
function combination(result = [], n = 3, index = 0) {
  if (result.length === n) {
    console.log(result);
    return result;
  }
  if (index === arr.length) {
    return;
  }

  result.push(arr[index]);
  combination(result, n, index + 1);
  result.pop();
  combination(result, n, index + 1);
}
