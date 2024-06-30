function permutation(result, rests, ouput) {
  if (rests.length === 0) {
    ouput.push(result);
    return;
  }

  rests.forEach((value, index) => {
    let rest = [...rests.slice(0, index), ...rests.slice(index + 1)];
    permutation([...result, value], rest, ouput);
  });
}

let output = [];

permutation([], ["a", "b", "c"], output);
console.log(output);
