class Node {
  constructor(weight) {
    this.weight = weight;
    this.left = null;
    this.right = null;
  }
}

function add(weight, root) {
  const newNode = new Node(weight);
  let preNode = root;
  let curNode = root;
  while (curNode) {
    preNode = curNode;
    if (weight > curNode.weight) {
      curNode = preNode.right;
    } else if (weight < curNode.weight) {
      curNode = preNode.left;
    }
  }
  if (preNode.weight > weight) {
    preNode.left = newNode;
  } else {
    preNode.right = newNode;
  }
}

function find(number, root) {
  let curNode = root;
  while (curNode) {
    if (number > curNode.weight) {
      curNode = curNode.right;
    } else if (number < curNode.weight) {
      curNode = curNode.left;
    } else {
      return true;
    }
  }
  return false;
}

function solution(lst, searchList) {
  const root = new Node(lst[0]);
  for (let i = 1; i < lst.length; i++) {
    add(lst[i], root);
  }
  let result = [];
  for (let item of searchList) {
    if (find(item, root)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  console.log(result);
}

solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 9]);
