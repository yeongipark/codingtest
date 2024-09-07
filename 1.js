function solution(num) {
  let tenToBinaryResult = tenToBinary(num, "");
  console.log(
    "직접 구현 결과 : " + tenToBinaryResult.split("").reverse().join("")
  );

  let useToStringResult = useToString(num);
  console.log("toString 메서드 이용한 결과 : " + useToStringResult);
}

function tenToBinary(num, result) {
  if (num < 2) {
    result += num;
    return result;
  }

  let rest = num % 2;
  let q = Math.floor(num / 2);

  return tenToBinary(q, (result += rest));
}

function useToString(num) {
  return num.toString(2);
}

solution(10);
