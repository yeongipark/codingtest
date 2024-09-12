function solution(operations) {
  let queue = [];
  operations.forEach((operate) => {
    if (operate.startsWith("I")) {
      let [_, value] = operate.split(" ");
      queue[queue.length] = +value;
      queue.sort((a, b) => a - b);
    } else if (operate === "D 1") {
      queue.pop();
    } else {
      queue.shift();
    }
  });
  if (queue.length === 0) {
    return [0, 0];
  } else {
    return [queue[queue.length - 1], queue[0]];
  }
}
