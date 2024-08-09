function solution(record) {
  let name = new Map();
  let result = [];

  for (let item of record) {
    let arr = item.split(" ");
    switch (arr[0]) {
      case "Enter":
        name.set(arr[1], arr[2]);
        break;
      case "Change":
        name.set(arr[1], arr[2]);
        break;
    }
  }
  for (let item of record) {
    let arr = item.split(" ");
    switch (arr[0]) {
      case "Enter":
        result.push(`${name.get(arr[1])}님이 들어왔습니다.`);
        break;
      case "Leave":
        result.push(`${name.get(arr[1])}님이 나갔습니다.`);
        break;
    }
  }
  return result;
}
