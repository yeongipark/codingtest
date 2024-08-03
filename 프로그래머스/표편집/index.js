function solution(n, k, cmd) {
  let queue = [];

  const Node = function (index, pre) {
    this.index = index;
    this.pre = pre;
    this.next = null;
  };

  let prevNode = new Node(0, null);
  let select = prevNode;

  for (let i = 1; i < n; i++) {
    let targetNode = new Node(i, prevNode);
    prevNode.next = targetNode;
    prevNode = targetNode;

    if (i === k) select = targetNode;
  }

  function selectMove(count, direction) {
    for (let i = 0; i < count; i++) {
      if (!select[direction]) break;
      select = select[direction];
    }
  }

  function deleteNode() {
    queue.push(select);
    let pre = select.pre;
    let next = select.next;

    select = next ?? pre;

    if (pre) pre.next = next;
    if (next) next.pre = pre;
  }

  function recovery() {
    let targetNode = queue.pop();

    let pre = targetNode.pre;
    let next = targetNode.next;

    if (pre) pre.next = targetNode;
    if (next) next.pre = targetNode;
  }

  for (let dir of cmd) {
    switch (dir[0]) {
      case "D":
        selectMove(dir.split(" ")[1], "next");
        break;
      case "C":
        deleteNode();
        break;
      case "Z":
        recovery();
        break;
      case "U":
        selectMove(dir.split(" ")[1], "pre");
        break;
    }
  }
  let result = Array(n).fill("O");
  queue.forEach((item) => (result[item.index] = "X"));
  return result.join("");
}
