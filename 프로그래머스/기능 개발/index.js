function solution(progresses, speeds) {
  let leftDays = progresses.map((progresse, index) =>
    Math.ceil((100 - progresse) / speeds[index])
  );

  let maxDays = leftDays[0];
  let result = [];
  let count = 0;
  for (let i = 0; i < progresses.length; i++) {
    if (leftDays[i] <= maxDays) {
      count++;
    } else {
      result.push(count);
      count = 1;
      maxDays = leftDays[i];
    }
  }
  result.push(count);
  return result;
}
