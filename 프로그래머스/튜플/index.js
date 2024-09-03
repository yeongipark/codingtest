function solution(s) {
  var answer = [];
  s = s.replaceAll("{", "[");
  s = s.replaceAll("}", "]");
  let arr = JSON.parse(s);
  arr.sort((a, b) => a.length - b.length);
  let result = [];
  arr.forEach((item) => {
    item.forEach((num) => {
      if (!result.includes(num)) {
        result.push(num);
      }
    });
  });
  return result;
}
