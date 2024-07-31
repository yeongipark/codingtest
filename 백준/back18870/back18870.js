const { copyFileSync } = require("fs");

const input = require("fs")
  .readFileSync("back18870.txt")
  .toString()
  .trim()
  .split(/\r?\n/);

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
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

let arr = input[1].split(" ").map(Number);
let setArr = [...new Set(arr)];
let sortedArr = mergeSort(setArr);
//let sortedArr = setArr.sort((a, b) => a - b);
let map = new Map();

sortedArr.forEach((value, index) => {
  if (!map.has(value)) {
    map.set(value, index);
  }
});
let result = [];
arr.forEach((value) => {
  result.push(map.get(value));
});

console.log(result.join(" "));
