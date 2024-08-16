function solution(nodeinfo) {
  var answer = [[], []];
  let newNodeInfo = nodeinfo.map((item, idx) => [...item, idx + 1]);
  // 0 인덱스 : value
  // 2 인덱스 : 노드 번호
  newNodeInfo.sort((a, b) => b[1] - a[1]);
  let tree = new Tree();
  for (let nodeInfo of newNodeInfo) {
    tree.add(nodeInfo[0], nodeInfo[2]);
  }

  preOrder(tree.root, answer);
  postOrder(tree.root, answer);

  return answer;
}

function preOrder(nextNode, answer) {
  if (!nextNode) {
    return;
  }
  answer[0].push(nextNode.node);
  preOrder(nextNode.left, answer);
  preOrder(nextNode.right, answer);
}

function postOrder(nextNode, answer) {
  if (!nextNode) {
    return;
  }

  postOrder(nextNode.left, answer);
  postOrder(nextNode.right, answer);
  answer[1].push(nextNode.node);
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value, node) {
    let newNode = new Node(node, value);
    if (!this.root) this.root = newNode;
    else {
      let prevNode = this.root;
      let nextNode = this.root;
      while (nextNode) {
        prevNode = nextNode;
        if (prevNode.value < value) {
          nextNode = prevNode.right;
        } else {
          nextNode = prevNode.left;
        }
      }
      if (prevNode.value < value) {
        prevNode.right = newNode;
      } else {
        prevNode.left = newNode;
      }
    }
  }
}

class Node {
  constructor(node, value) {
    this.node = node; // 노드 번호 저장
    this.value = value; // 비교할 값 저장
    this.left = null;
    this.right = null;
  }
}
