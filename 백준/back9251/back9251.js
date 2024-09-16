const { copyFileSync } = require("fs");

const input = require("fs")
  .readFileSync("back9251.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

const dp = Array.from({ length: input[0].length + 1 }, () =>
  Array(input[1].length + 1).fill(0)
);

const str1 = input[0];
const str2 = input[1];

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}
console.log(dp[str1.length][str2.length]);
