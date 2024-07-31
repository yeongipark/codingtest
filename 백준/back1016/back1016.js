const input = require("fs")
  .readFileSync("back1016.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [min, max] = input[0].split(" ").map(Number);
let diff = max - min + 1;
let arr = Array.from(Array(max - min + 1)).fill(false);

let d = Array(Math.floor(Math.sqrt(max)) + 1)
  .fill(0)
  .map((_, idx) => idx);

d[1] = 0;

for (let i = 2; i < d.length; i++) {
  if (d[i] != 0) {
    for (let j = i * i; j <= max; j *= i) {
      if (j < d.length) {
        d[j] = 0;
      }
      if (j >= min && max >= j) {
        diff--;
      }
    }
  }
}

console.log(diff);
