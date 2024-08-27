function solution(n, t, m, p) {
  let string = "";
  for (let i = 0; i < 30000; i++) {
    string += i.toString(n);
  }
  let result = "";
  p -= 1;
  for (let i = 0; i < t; i++) {
    result += string[p];
    p += m;
  }
  return result.toUpperCase();
}
