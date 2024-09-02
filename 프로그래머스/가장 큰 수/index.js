function solution(numbers) {
  numbers = numbers.map((num) => num + "");
  numbers.sort((a, b) => {
    let ab = a + b;
    let ba = b + a;
    return +ab > +ba ? -1 : 1;
  });

  const result = numbers.join("");
  return Number(result) === 0 ? "0" : result;
}
