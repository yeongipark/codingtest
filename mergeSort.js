// const merge = (left, right) => {
//   const sortedArr = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }

//   return [...sortedArr, ...left, ...right];
// };

// const merge = (left, right) => {
//   const sortedArr = [];
//   let i = 0; // left의 포인터
//   let j = 0; // right의 포인터

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       sortedArr.push(left[i++]);
//     } else {
//       sortedArr.push(right[j++]);
//     }
//   }

//   if (i >= left.length) {
//     while (j < right.length) {
//       sortedArr.push(right[j++]);
//     }
//   } else {
//     while (i < left.length) {
//       sortedArr.push(left[i++]);
//     }
//   }

//   return sortedArr;
// };

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;

//   const mid = Math.ceil(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   return merge(mergeSort(left), mergeSort(right));
// };

const merge = (left, right) => {
  const sortedArr = [];
  let i = 0; // 왼쪽 배열의 포인터
  let j = 0; // 오른쪽 배열의 포인터

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArr.push(left[i++]);
    } else {
      sortedArr.push(right[j++]);
    }
  }

  while (i < left.length) {
    sortedArr.push(left[i++]);
  }

  while (j < right.length) {
    sortedArr.push(right[j++]);
  }
  return sortedArr;
};
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.ceil(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

const arr = [7, 4, 3, 2, 1, 6, 5];
const sortedArray = mergeSort(arr);
console.log(arr); //[7, 4, 3, 2, 1, 6, 5]
console.log(sortedArray); //[1, 2, 3, 4,5, 6, 7]
