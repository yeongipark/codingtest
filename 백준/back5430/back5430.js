const input = require("fs")
  .readFileSync("back5430.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input.shift();
let ouput = "";
for (let i = 0; i < n; i++) {
  let func = input.shift().split("");
  let end = false;
  let length = +input.shift();
  let arr = JSON.parse(input.shift());
  let index = 0;
  for (let j = 0; j < func.length; j++) {
    if (func[j] === "R") {
      if (index === 0) {
        index = arr.length - 1;
      } else {
        index = 0;
      }
    } else {
      if (arr.length === 0) {
        ouput += "error\n";
        end = true;
        break;
      }
      if (index === 0) {
        arr.shift();
      } else {
        arr.pop();
        index -= 1;
      }
    }
  }
  if (end === false) {
    let a = [];
    if (index === 0) {
      arr.forEach((item) => a.push(item));
    } else {
      for (let j = index; j >= 0; j--) {
        a.push(arr[j]);
      }
    }

    ouput += JSON.stringify(a) + "\n";
  }
}
console.log(ouput);
