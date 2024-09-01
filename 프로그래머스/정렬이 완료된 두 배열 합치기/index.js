function solution(arr1, arr2) {
  let result = [];
  let length = arr1.length;
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < length && idx2 < length) {
    if (arr1[idx1] >= arr2[idx2]) {
      result.push(arr2[idx2++]);
    } else {
      result.push(arr1[idx1++]);
    }
  }

  if (idx1 >= length) {
    while (idx2 < length) {
      result.push(arr2[idx2++]);
    }
  } else {
    while (idx1 < length) {
      result.push(arr1[idx1++]);
    }
  }
  console.log(result);
}

solution([1, 2, 3], [4, 5, 6]);
