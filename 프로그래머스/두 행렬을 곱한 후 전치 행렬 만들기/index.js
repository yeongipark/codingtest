function solution(matrix1, matrix2) {
  let length = matrix1.length; // 3
  let result = Array.from({ length }, () => Array(length).fill(0));

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let sum = 0;
      for (let k = 0; k < length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      result[i][j] = sum;
    }
  }

  let newArr = Array.from({ length }, () => Array(length).fill(0));
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      newArr[i][j] = result[j][i];
    }
  }

  console.log(newArr);
}

solution(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
  ]
);
