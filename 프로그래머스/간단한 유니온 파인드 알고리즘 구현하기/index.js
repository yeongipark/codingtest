function find(arr, num) {
  if (arr[num] === num) {
    return num;
  } else {
    return (arr[num] = find(arr, arr[num]));
  }
}

function union(arr, num1, num2) {
  let findNum1 = find(arr, num1);
  let findNum2 = find(arr, num2);

  if (findNum1 === findNum2) return;
  if (findNum1 < findNum2) {
    arr[findNum2] = findNum1;
  } else {
    arr[findNum1] = findNum2;
  }
}

function solution(k, operations) {
  let arr = Array(k)
    .fill(0)
    .map((_, idx) => idx);

  for (let operation of operations) {
    if (operation[0] === "u") {
      union(arr, operation[1], operation[2]);
    } else {
      find(operation[1]);
    }
  }

  let result = new Set(arr);
  console.log(result.size);
}

solution(3, [
  ["u", 0, 1],
  ["u", 1, 2],
  ["f", 0],
]);
