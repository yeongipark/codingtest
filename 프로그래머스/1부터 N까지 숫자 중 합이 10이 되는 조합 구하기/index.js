function partialSum(start, end, wish, sum, arr, result) {
  if (sum === wish) {
    result.push(arr);
    return;
  }

  if (sum > wish) {
    return;
  }

  if (start > end) {
    return;
  }

  partialSum(start + 1, end, wish, sum + start, [...arr, start], result);
  partialSum(start + 1, end, wish, sum, [...arr], result);
}

let result = [];
partialSum(1, 7, 10, 0, [], result);
console.log(result);
