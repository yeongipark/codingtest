function solution(s) {
  const counts = Array(26).fill(0);

  for (let char of s) {
    counts[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  let result = "";
  for (let i = 0; i < 26; i++) {
    result += String.fromCharCode(i + "a".charCodeAt(0)).repeat(counts[i]);
  }
  console.log(result);
}

solution("hello");
