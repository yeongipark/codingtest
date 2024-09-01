function solution(array, commands) {
  let result = [];
  for (let q = 0; q < commands.length; q++) {
    let [i, j, k] = commands[q];
    let newArr = array.slice(i - 1, j);
    newArr.sort((a, b) => a - b);
    result.push(newArr[k - 1]);
  }
  return result;
}
