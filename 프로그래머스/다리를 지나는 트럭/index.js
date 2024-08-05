function solution(bridge_length, weight, truck_weights) {
  let front = 0;
  let total = 0;
  let count = 0;
  let arr = Array(bridge_length).fill(0);

  while (truck_weights.length > 0) {
    total -= arr[front++];
    if (total + truck_weights[0] <= weight) {
      let value = truck_weights.shift();
      arr.push(value);
      total += value;
    } else {
      arr.push(0);
    }
    count++;
  }

  count += bridge_length;

  return count;
}
