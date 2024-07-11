const input = require("fs")
  .readFileSync("back1929.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [start, end] = input.shift().split(" ").map(Number);

let arr = Array.from(Array(end + 1), (_, idx) => {
  return idx;
});

arr[1] = 0;

for (let i = 2; i <= Math.sqrt(end); i++) {
  if (arr[i] === 0) {
    continue;
  }
  for (let j = i + i; j <= end; j += i) {
    arr[j] = 0;
  }
}

let result = "";
for (let i = start; i <= end; i++) {
  if (arr[i] !== 0) {
    result += arr[i] + "\n";
  }
}

console.log(result);
