class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const newNode = new Node(item);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  pop() {
    if (!this.head) return null;

    const returnNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return returnNode.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const queue = new Queue();
queue.push(4);
queue.push(5);
queue.push(1);
queue.push(3);

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
