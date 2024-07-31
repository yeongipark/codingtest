//  1번 풀이 (트라이로 해결)
class Node {
  constructor(value = "") {
    this.value = value;
    this.end = false;
    this.child = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
}

function solution(phone_book) {
  phone_book.sort((a, b) => {
    return a.length - b.length;
  });

  if (phone_book.length == 1) {
    return;
  }
  let find = false;
  var answer = true;
  const trie = new Trie();
  for (let number of phone_book) {
    if (find === true) {
      break;
    }
    let currentNode = trie.root;
    for (let i = 0; i < number.length; i++) {
      let char = number[i];
      if (currentNode.child[char] === undefined) {
        let node = new Node(currentNode.value + char);
        currentNode.child[char] = node;
      }
      currentNode = currentNode.child[char];
      if (currentNode.end === true) {
        answer = false;
        find = true;
        break;
      }
    }
    currentNode.end = true;
  }
  console.log(trie.root.child);
  return answer;
}

// 2번 풀이 map을 사용 효율성 부분 탈락
function solution(phone_book) {
  phone_book.sort((a, b) => a.length - b.length);
  let answer = true;
  let map = new Map();
  phone_book.forEach((item) => {
    if (answer === false) {
      return;
    }
    for (let [key, value] of map) {
      if (item.length == key.length) {
        break;
      }
      if (item.startsWith(key)) {
        answer = false;
        break;
      }
    }
    map.set(item, 1);
  });

  return answer;
}

// 3번 풀이 (제일 간단하고 쉬운방법)
function solution(phone_book) {
  let answer = true;

  answer = phone_book.sort().some((value, index) => {
    if (index === phone_book.length - 1) {
      return false;
    }

    return phone_book[index + 1].startsWith(value);
  });
  return answer;
}
