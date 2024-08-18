class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  // value = [노드이름, 값]
  add(value) {
    if (this.isEmpty()) {
      this.heap.push(value);
    } else {
      this.heap.push(value);
      let cur = this.heap.length - 1;
      let parent = Math.ceil(cur / 2) - 1;
      while (this.heap[parent]) {
        if (this.heap[cur][1] < this.heap[parent][1]) {
          [this.heap[cur], this.heap[parent]] = [
            this.heap[parent],
            this.heap[cur],
          ];
          cur = parent;
          parent = Math.ceil(cur / 2) - 1;
        } else break;
      }
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let returnValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let cur = 0;
    let left = cur * 2 + 1;
    let right = cur * 2 + 2;
    while (left < this.heap.length) {
      let child = left;
      if (
        right < this.heap.length &&
        this.heap[left][1] > this.heap[right][1]
      ) {
        child = right;
      }

      if (this.heap[cur][1] > this.heap[child][1]) {
        [this.heap[cur], this.heap[child]] = [this.heap[child], this.heap[cur]];
        cur = child;
        left = cur * 2 + 1;
        right = cur * 2 + 2;
      } else break;
    }

    return returnValue;
  }
}

function solution(graph, start) {
  let distances = {};
  const paths = {};
  for (let node in graph) {
    distances[node] = Infinity;
    paths[node] = [];
  }
  distances[start] = 0;

  let heap = new MinHeap();
  heap.add([start, 0]);
  while (!heap.isEmpty()) {
    const [currentNode, currentValue] = heap.remove();
    if (distances[currentNode] < currentNode) continue;
    for (const adNode in graph[currentNode]) {
      let weight = graph[currentNode][adNode];
      let distance = weight + currentValue;
      if (distance < distances[adNode]) {
        distances[adNode] = distance;
        paths[adNode] = [...paths[currentNode]];
        heap.add([adNode, distance]);
      }
    }
  }

  console.log(distances);
  for (let node in paths) {
    paths[node].push(node);
  }
  console.log(paths);
}

solution(
  {
    A: { B: 1 },
    B: { C: 5 },
    C: { D: 1 },
    D: {},
  },
  "A"
);
