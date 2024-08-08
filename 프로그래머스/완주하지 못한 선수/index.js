// 1번 풀이
function solution(participant, completion) {
  let map = new Map();
  for (let name of participant) {
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }
  }

  for (let name of completion) {
    map.set(name, map.get(name) - 1);
  }
  for (let key of map.keys()) {
    if (map.get(key) > 0) {
      return key;
    }
  }
}

// 2번 풀이
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return participant[participant.length - 1];
}
