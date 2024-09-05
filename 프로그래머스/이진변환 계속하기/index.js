function solution(s) {
  var answer = [];
  let zeroCount = 0;
  let count = 0;
  function translate(s) {
    let newString = "";
    for (let char of s) {
      if (char === "0") {
        zeroCount++;
      } else {
        newString += char;
      }
    }
    let length = newString.length;
    return length.toString(2);
  }

  while (s !== "1") {
    s = translate(s);
    count++;
  }

  return [count, zeroCount];
}
