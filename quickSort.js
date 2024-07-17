// const quickSort = (arr) => {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= pivot) left.push(arr[i]);
//     else {
//       right.push(arr[i]);
//     }
//   }

//   const lSorted = quickSort(left);
//   const rSorted = quickSort(right);
//   return [...lSorted, pivot, ...rSorted];
// };

console.log(quickSort([8, 5, 6, 7, 9, 4, 1, 6, 8, 5, 8, 10, 11, 53]));

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = []; // 피봇보다 작거나 같은 원소들 집합
  const right = []; // 피봇보다 큰 원소들의 집합

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else {
      right.push(arr[i]);
    }
  }

  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];
}
