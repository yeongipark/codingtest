let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// let copy = arr.map((item) => [...item]);
let copy = Array.from(arr, (row) => [...row]);
console.log(copy);
