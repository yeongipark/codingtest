function solution(participant, completion) {
  var answer = "";
  let map = {};
  participant.forEach((name) => {
    if (name in map) {
      map[name] += 1;
    } else {
      map[name] = 1;
    }
  });
  completion.forEach((name) => {
    map[name] -= 1;
  });
  for (let key in map) {
    if (map[key] === 1) {
      answer = key;
      break;
    }
  }
  return answer;
}
