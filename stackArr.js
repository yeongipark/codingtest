// 배열로 스택구현하기
class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

let queue = new Queue();

queue.push(3);
queue.push(5);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.isEmpty());
