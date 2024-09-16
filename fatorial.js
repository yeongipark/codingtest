function Fact(n) {
  if (n === 1) return 1;

  return Fact(n - 1) * n;
}

console.log(Fact(3));
