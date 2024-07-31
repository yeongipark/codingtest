const input = require("fs")
  .readFileSync("back10986.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(" ").map(Number);

let arr = input[1].split(" ").map(Number);
let sumArr = Array(n).fill(0);
let c = Array(n).fill(0);

for (let i = 0; i < arr.length; i++) {
  sumArr[i] = ((sumArr[i - 1] ?? 0) + arr[i]) % m;
  c[sumArr[i]] += 1;
}

const o = c[0] + c.reduce((a, b) => a + (b * (b - 1)) / 2, 0);
console.log(o.toString());
