let arr = [5, 3, 4, 7, 1, 8, 10, 11, 19, 14];

// 퀵정열
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = [arr[0]];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot[0]) {
      right.push(arr[i]);
    } else if (arr[i] < pivot[0]) {
      left.push(arr[i]);
    } else {
      pivot.push(arr[i]);
    }
  }

  let leftSort = quickSort(left);
  let rightSork = quickSort(right);
  return [...leftSort, ...pivot, ...rightSork];
}

// 병합 정렬
function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.ceil((arr.length - 1) / 2);
  let leftSort = mergeSort(arr.slice(0, mid));
  let rightSort = mergeSort(arr.slice(mid));

  return merge(leftSort, rightSort);
}

console.log(mergeSort(arr));
