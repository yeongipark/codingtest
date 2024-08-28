function solution(msg) {
  let map = new Map();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  for (let i = 1; i <= 26; i++) {
    map.set(alphabet[i - 1], i);
  }
  let num = 27;
  let string = "";
  let idx = 0;
  let result = [];
  while (idx < msg.length) {
    if (map.has(string + msg[idx])) {
      string += msg[idx];
      idx++;
      continue;
    } else {
      result.push(map.get(string));
      map.set(string + msg[idx], num++);
      string = "";
    }
  }
  result.push(map.get(string));

  return result;
}
