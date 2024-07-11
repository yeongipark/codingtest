class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  add(n) {
    this.heap.push(n);

    if (this.heap.length === 1) {
      return;
    }

    let cur = this.heap.length - 1;
    let parent = Math.floor((cur - 1) / 2);
    while (cur > 0) {
      if (this.heap[parent] > this.heap[cur]) {
        [this.heap[parent], this.heap[cur]] = [
          this.heap[cur],
          this.heap[parent],
        ];
        cur = parent;
        parent = (cur - 1) / 2;
      } else break;
    }
  }

  getSize() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length < 1;
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.getSize() === 1) {
      return this.heap.shift();
    }

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let cur = 0;
    let left = cur * 2 + 1;
    let right = cur * 2 + 2;
    while (left < this.heap.length) {
      let child = left;
      if (right < this.heap.length && this.heap[right] < this.heap[left]) {
        child = right;
      }

      if (this.heap[child] < this.heap[cur]) {
        [this.heap[child], this.heap[cur]] = [this.heap[cur], this.heap[child]];
        cur = child;
        left = cur * 2 + 1;
        right = cur * 2 + 2;
      } else {
        break;
      }
    }

    return min;
  }
}

let pr = new PriorityQueue();
pr.add(1);
pr.add(2);
pr.add(3);
pr.add(4);
pr.add(5);

console.log(pr.remove());
console.log(pr.remove());

console.log(pr);
