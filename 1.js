const shuffle = (array) => {
  let result = [];
  while (array.length) {
    let len = array.length;
    let randomIndex = Math.floor(Math.random() * len);
    result.push(...array.splice(randomIndex, 1));
  }
  return result;
};

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
