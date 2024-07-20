// list : 전체 배열, result : 결과를 저장할 배열, size : nCr에서 r, items: 결과에 저장될 배열, index : 몇번 째 인덱스를 참조했는지

function combination({ list, result, size, items, index }) {
  if (items.length === size) {
    result.push(items);
    return;
  }
  for (let i = index; i < list.length; i++) {
    combination({
      list,
      result,
      size,
      index: i + 1,
      items: [...items, list[i]],
    });
  }
}

function permutation({ list, result, items }) {
  if (list.length === 0) {
    result.push(items);
    return;
  }
  for (let i = 0; i < list.length; i++) {
    let rest = [...list.slice(0, i), ...list.slice(i + 1)];
    permutation({ list: rest, result, items: [...items, list[i]] });
  }
}
