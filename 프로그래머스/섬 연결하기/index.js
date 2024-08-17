function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);
  let arr = Array(n)
    .fill(0)
    .map((_, idx) => idx);
  let edge = 0;
  let result = 0;
  for (let cost of costs) {
    if (edge === n - 1) {
      break;
    }
    let [start, end, weight] = cost;
    if (find(arr, start) !== find(arr, end)) {
      union(arr, start, end);
      edge++;
      result += weight;
    }
  }

  return result;
}

function find(arr, num) {
  if (arr[num] === num) {
    return num;
  } else {
    return (arr[num] = find(arr, arr[num]));
  }
}

function union(arr, num1, num2) {
  let find1 = find(arr, num1);
  let find2 = find(arr, num2);

  if (find1 < find2) {
    arr[find2] = find1;
  } else {
    arr[find1] = find2;
  }
}
