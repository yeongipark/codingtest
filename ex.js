function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);

  return [...lSorted, pivot, ...rSorted];
}

function merge(arr1, arr2) {
  const sortedArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) sortedArr.push(arr1.shift());
    else sortedArr.push(arr2.shift());
  }

  return [...sortedArr, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function find(num) {
  if (arr[num] === num) return num;
  else return (arr[num] = find(arr[num]));
}

function union(a, b) {
  let findA = find(a);
  let findB = find(b);
  if (findA === findB) return;

  if (findA < findB) {
    arr[findB] = findA;
  } else {
    arr[findA] = findB;
  }
}

let arr = [
  4, 23, 4, 4, 2, 1, 6, 7, 54, 43, 654, 323, 1, 1, 34, 6534, 6435, 324, 432, 6,
];

console.log(mergeSort(arr));
