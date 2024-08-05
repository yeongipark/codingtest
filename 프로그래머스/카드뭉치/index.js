function solution(cards1, cards2, goal) {
  let c1Front = 0;
  let c2Front = 0;

  for (item of goal) {
    if (cards1[c1Front] === item) {
      c1Front++;
    } else if (cards2[c2Front] === item) {
      c2Front++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
