// 실행
const A = create_matrix(5, 4);
const B = create_matrix(5, 4);
const C = sum(A, B);
console.log(A, B, C);

// 행렬 만들기 함수
function create_matrix(n, x) {
  let arr = Array.from({ length: n }, () => Array(n).fill(null));
  let count = 0; // 행렬에 원소값 몇개 추가했는지 확인하는 변수
  let returnArr = [];
  // x개의 원소 추가하기
  while (count < x) {
    let randomRow = Math.floor(Math.random() * n);
    let randomCol = Math.floor(Math.random() * n);
    // 이미 값이 할당된 곳이면 다시 반복
    if (arr[randomRow][randomCol]) continue;

    // 1~10까지 무작위 수 넣기
    let value = Math.floor(Math.random() * 10) + 1;
    arr[randomRow][randomCol] = value;
    returnArr.push({ row: randomRow, col: randomCol, value });
    count++;
  }

  // row 순으로 정렬해서 리턴하기
  returnArr.sort((a, b) => a.row - b.row || a.col - b.col);
  return returnArr;
}

// 두 행렬 더하기 함수
function sum(arr1, arr2) {
  let sumArr = [...arr1, ...arr2];
  let obj = sumArr.reduce((acc, cur) => {
    let row = cur["row"];
    let col = cur["col"];
    let value = cur["value"];

    let key = `${row}-${col}`;
    acc[key] = acc[key] ? acc[key] + value : value;
    return acc;
  }, {});

  let returnArr = [];
  for (let entry of Object.entries(obj)) {
    let [row, col] = entry[0].split("-").map((num) => +num);
    let value = entry[1];
    returnArr.push({ row, col, value });
  }

  // row 순으로 정렬해서 리턴하기
  returnArr.sort((a, b) => a.row - b.row || a.col - b.col);
  return returnArr;
}
