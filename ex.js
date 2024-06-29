let arr = [5, 3, 4, 7, 1, 8, 10, 11, 19, 14];

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
console.log(quickSort(arr));
