function solution(topping) {
  result = 0;
  let first = topping.slice(0, 1);
  let second = topping.slice(1).reverse();
  let firstMap = new Map();
  let secondMap = new Map();
  firstMap.set(topping[0], 1);
  for (let num of second) {
    secondMap.set(num, secondMap.get(num) + 1 || 1);
  }

  for (let i = 0; i < topping.length - 1; i++) {
    if (firstMap.size === secondMap.size) {
      result++;
    }
    let num = second.pop();
    first.push(num);
    firstMap.set(num, firstMap.get(num) + 1 || 1);
    if (secondMap.get(num) === 1) {
      secondMap.delete(num);
    } else {
      secondMap.set(num, secondMap.get(num) - 1);
    }
  }

  return result;
}
