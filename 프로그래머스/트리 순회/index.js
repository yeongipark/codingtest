solution([1, 2, 3, 4, 5, 6, 7]);

function solution(nodes) {
  let result = [];

  let text = [];
  preorder(0, text, nodes);
  result.push(text.join(" "));
  text = [];
  inorder(0, text, nodes);
  result.push(text.join(" "));
  text = [];
  postorder(0, text, nodes);
  result.push(text.join(" "));
  console.log(result);
}

function postorder(index, result, nodes) {
  if (nodes[index] === undefined) {
    return;
  }

  postorder(index * 2 + 1, result, nodes);
  postorder(index * 2 + 2, result, nodes);
  result.push(nodes[index]);
}

function inorder(index, result, nodes) {
  if (nodes[index] === undefined) {
    return;
  }

  inorder(index * 2 + 1, result, nodes);
  result.push(nodes[index]);
  inorder(index * 2 + 2, result, nodes);
}

function preorder(index, result, nodes) {
  if (nodes[index] === undefined) {
    return;
  }

  result.push(nodes[index]);
  preorder(index * 2 + 1, result, nodes);
  preorder(index * 2 + 2, result, nodes);
}
