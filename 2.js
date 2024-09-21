const union = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
};

console.log(union([5, 6, 1, 3], [1, 8, 9, 5]));
