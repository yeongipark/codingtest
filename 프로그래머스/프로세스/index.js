function solution(priorities, location) {
  let queue = [];
  priorities.forEach((weight, index) => {
    queue.push(new Node(index, weight));
  });
  let count = 0;
  while (queue.length) {
    let node = queue.shift();
    let curWeight = node.weight;
    let find = false;
    for (let i = 0; i < queue.length; i++) {
      if (curWeight < queue[i].weight) {
        queue.push(node);
        find = true;
        break;
      }
    }
    if (find) continue;
    count++;
    if (location === node.index) {
      return count;
    }
  }
}

class Node {
  constructor(index, weight) {
    this.index = index;
    this.weight = weight;
  }
}
