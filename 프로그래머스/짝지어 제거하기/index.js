function solution(s) {
  s = s.split("");

  let result = s.reduce((acc, cur) => {
    if (acc.length === 0) {
      acc.push(cur);
      return acc;
    }
    acc[acc.length - 1] === cur ? acc.pop() : acc.push(cur);
    return acc;
  }, []);

  if (result.length === 0) return 1;
  else return 0;
}
