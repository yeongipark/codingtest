function gcd(big, small) {
  let d = big % small;
  if (d === 0) {
    return small;
  }
  return gcd(small, d);
}
let result = gcd(270, 192);
console.log(result);
