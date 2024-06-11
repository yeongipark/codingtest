const readline = require("readline");

const solution = (line) => {
  if (line.includes("<")) {
    let input = line.split(">");
    let output = "";
    input.forEach((string, idx) => {
      if (string.includes("<")) {
        input[idx] = input[idx] + ">";
      }
    });
    // console.log(input);
    input.forEach((string) => {
      if (string.startsWith("<")) {
        output += string;
      } else {
        let newArr = string.split("<");
        newArr.forEach((item, idx) => {
          if (item.includes(">")) {
            newArr[idx] = "<" + newArr[idx];
          }
        });
        newArr.forEach((item) => {
          if (item.startsWith("<")) {
            output += item;
          } else {
            let arr = item.split(" ");
            arr.forEach((char, idx) => {
              for (let i = char.length - 1; i >= 0; i--) {
                output += char[i];
              }
              if (idx + 1 != arr.length) {
                output += " ";
              }
            });
          }
        });
      }
    });

    console.log(output);
  } else {
    // 특수문자 없는 경우
    let input = line.split(" ");
    let output = "";
    input.forEach((string) => {
      for (let i = string.length - 1; i >= 0; i--) {
        output += string[i];
      }
      output += " ";
    });

    console.log(output);
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line;
  rl.close();
}).on("close", () => {
  solution(input);
  process.exit();
});
