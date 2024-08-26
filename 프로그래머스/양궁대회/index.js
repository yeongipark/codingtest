function solution(n, info) {
  let maxDiff = 0;
  let maxComb = {};

  let result = [];
  function combination(arr, n, idx, size, cur, result) {
    if (size === n) {
      result.push(cur);
      return;
    }

    for (let i = idx; i < arr.length; i++) {
      combination(arr, n, i, size + 1, [...cur, arr[i]], result);
    }
  }

  function calculateScore(combi) {
    let lion = 0;
    let peech = 0;

    for (let i = 10; i >= 0; i--) {
      if (info[10 - i] < combi.filter((x) => x === i).length) {
        lion += i;
      } else if (info[10 - i] > 0) {
        peech += i;
      }
    }
    return [lion, peech];
  }

  function calculateDiff(diff, cnt) {
    if (diff > maxDiff) {
      maxComb = { ...cnt };
      maxDiff = diff;
    }
  }

  combination([...Array(11).keys()], n, 0, 0, [], result);
  for (const combi of result) {
    const cnt = combi.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    const [lion, peech] = calculateScore(combi);
    const diff = lion - peech;
    calculateDiff(diff, cnt);
  }

  if (maxDiff > 0) {
    const answer = Array(11).fill(0);
    for (const n of Object.keys(maxComb)) {
      answer[10 - n] = maxComb[n];
    }
    return answer;
  } else {
    return [-1];
  }
}
