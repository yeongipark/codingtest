const input = require("fs")
  .readFileSync("back2436.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input.shift().split(" ").map(Number);
let arr = [];
let min = Infinity;
let result = [];

if (n === m) {
  console.log(`${n} ${n}`);
  return;
}

for (let i = 1; i <= m / 2; i++) {
  if (m % (n * i) === 0) {
    arr.push(n * i);
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (gcd(arr[i], arr[j]) === n) {
      if (arr[j] % arr[i] === 0) {
        if (arr[j] === m) {
          if (min > arr[i] + arr[j]) {
            result = [arr[i], arr[j]];
          }
        }
      } else {
        let a = arr[j];
        while (a <= m) {
          if (a % arr[i] === 0) {
            if (a === m) {
              if (min > arr[i] + arr[j]) {
                result = [arr[i], arr[j]];
              }
            }
            break;
          }
          a += arr[j];
        }
      }
    }
  }
}

console.log(result.join(" "));

function gcd(num1, num2) {
  if (num1 < num2) {
    [num1, num2] = [num2, num1];
  }

  if (num2 === 0) {
    return num1;
  }

  return gcd(num2, num1 % num2);
}
