const { resourceUsage } = require("process");
const { resourceLimits } = require("worker_threads");

const input = require("fs")
  .readFileSync("back1850.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(" ").map(BigInt);
let d;
if (n > m) {
  d = gcd(n, m);
} else {
  d = gcd(m, n);
}
let reulst = "";
for (let i = 0; i < d; i++) {
  reulst += "1";
}

console.log(reulst);
function gcd(big, small) {
  if (small == 0n) {
    return big;
  } else {
    return gcd(small, big % small);
  }
}
