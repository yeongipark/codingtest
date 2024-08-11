function solution(orders, course) {
  let result = [];
  for (let c of course) {
    let menu = [];
    for (let words of orders) {
      const sortedArr = words.split("").sort();
      combination(sortedArr, [], c, -1, menu);
    }

    let counter = {};
    for (let text of menu) {
      let key = text.join("");
      counter[key] = (counter[key] || 0) + 1;
    }
    let max = Math.max(...Object.values(counter));

    if (max <= 1) {
      continue;
    }

    for (let [key, value] of Object.entries(counter)) {
      if (value === max) {
        result.push(key);
      }
    }
  }

  return result.sort();
}

// text 는 알파뱃 모아 놓은 문자열
// cur은 현재 선택한 알파뱃 배열
// n은 몇개 선택할지
// i는 몇번째 까지 선택했는지를 나타냄

function combination(text, cur, n, idx, menu) {
  if (cur.length === n) {
    menu.push(cur);
    return;
  }
  for (let i = idx + 1; i < text.length; i++) {
    combination(text, [...cur, text[i]], n, i, menu);
  }
}
