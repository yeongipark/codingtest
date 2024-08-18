// class PriorityQueue {
//   constructor() {
//     this.heap = [];
//   }

//   add(n) {
//     this.heap.push(n);
//     if (this.heap.length === 1) {
//       return;
//     }
//     let cur = this.heap.length - 1;
//     let parent;

//     while (cur > 0) {
//       parent = Math.floor(cur - 1 / 2);
//       if (this.heap[parent] > this.heap[cur]) {
//         [this.heap[parent], this.heap[cur]] = [
//           this.heap[cur],
//           this.heap[parent],
//         ];
//         cur = parent;
//       } else break;
//     }
//   }

//   getSize() {
//     return this.heap.length - 1;
//   }

//   isEmpty() {
//     return this.heap.length < 1;
//   }

//   remove() {
//     if (this.isEmpty()) {
//       return null;
//     }

//     if (this.getSize() === 1) {
//       return this.heap.shift();
//     }

//     let returnNum = this.heap[0];
//     this.heap[0] = this.heap.pop();
//     let cur = 0;
//     let left = cur * 2 + 1;
//     let right = cur * 2 + 2;

//     while (left < this.heap.length) {
//       let child = left;
//       if (right < this.heap.length && this.heap[right] < this.heap[child]) {
//         child = right;
//       }
//       if (this.heap[cur] > this.heap[child]) {
//         [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];
//         cur = child;
//         left = cur * 2 + 1;
//         right = cur * 2 + 2;
//       } else break;
//     }

//     return returnNum;
//   }
// }

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  add(value) {
    if (this.isEmpty()) {
      this.heap[0] = value;
    } else {
      this.heap.push(value);
      let curIdx = this.size() - 1;
      let parentIdx = Math.ceil(curIdx / 2) - 1;
      while (this.heap[parentIdx]) {
        if (this.heap[parentIdx] > value) {
          [this.heap[parentIdx], this.heap[curIdx]] = [
            this.heap[curIdx],
            this.heap[parentIdx],
          ];
          curIdx = parentIdx;
          parentIdx = Math.ceil(curIdx / 2) - 1;
        } else {
          break;
        }
      }
    }
  }

  delete() {
    if (this.size() === 1) {
      return this.heap.pop();
    }
    if (this.isEmpty()) {
      return null;
    } else {
      let returnValue = this.heap[0];
      this.heap[0] = this.heap.pop();
      let cur = 0;
      let left = cur * 2 + 1;
      let right = cur * 2 + 2;

      while (left < this.size()) {
        let child = left;
        if (right < this.size() && this.heap[right] < this.heap[child]) {
          child = right;
        }

        if (this.heap[cur] > this.heap[child]) {
          [this.heap[cur], this.heap[child]] = [
            this.heap[child],
            this.heap[cur],
          ];
          cur = child;
          left = cur * 2 + 1;
          right = cur * 2 + 2;
        } else {
          break;
        }
      }

      return returnValue;
    }
  }
}

let minHeap = new MinHeap();
minHeap.add(3);
minHeap.add(5);
minHeap.add(7);
minHeap.add(2);
minHeap.add(1);
console.log(minHeap.delete());
console.log(minHeap.delete());
console.log(minHeap.delete());
console.log(minHeap.delete());
console.log(minHeap.delete());
// console.log(minHeap.delete());
console.log(minHeap.heap);
