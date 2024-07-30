function solution(string) {
  while (1) {
    let preString = string;
    string = string.replaceAll("()", "");
    if (preString === string) {
      break;
    }
  }

  if (string.length !== 0) {
    console.log("False");
  } else {
    console.log("True");
  }
}

solution("((())()");
