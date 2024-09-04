function solution(arr, n) {
  let newArr = arr.map((row) => [...row]);
  for (let i = 0; i < n; i++) {
    newArr = right90(newArr);
  }
  console.log(newArr);
}

function right90(arr) {
  let newArr = arr.map((row) => [...row]);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      newArr[i][j] = arr[arr.length - j - 1][i];
    }
  }
  return newArr;
}

solution(
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],
  4
);
