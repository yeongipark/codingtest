function solution(enroll, referral, seller, amount) {
  let parent = new Map();
  let price = new Map();

  // parent와 price 초기화
  for (let i = 0; i < enroll.length; i++) {
    if (referral[i] === "-") {
      parent.set(enroll[i], "center");
    } else {
      parent.set(enroll[i], referral[i]);
    }
    price.set(enroll[i], 0);
  }

  // 돈 구하기
  for (let i = 0; i < seller.length; i++) {
    let target = seller[i];
    let money = amount[i] * 100;
    while (target !== "center") {
      let rest = Math.floor(money / 10);
      if (rest < 1) {
        price.set(target, price.get(target) + money);
        break;
      } else {
        price.set(target, price.get(target) + (money - rest));
        target = parent.get(target);
        money = rest;
      }
    }
  }

  // 결과 저장하기
  let result = [];
  for (let [name, money] of price.entries()) {
    result.push(money);
  }
  return result;
}
