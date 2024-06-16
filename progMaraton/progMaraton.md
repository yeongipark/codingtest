**1. 아쉬운 부분**
- 문제를 제대로 안 읽어서 삽질을 했다
- 객체를 이용해서 풀었는데 객체의 값을 바꾸는 행위를 하니까 Map 객체를 이용하는게 더 좋았을 거 같다

**2. Map객체 정리**
- set,get
```javascript
    const map1 = new Map();
    map1.set('bar', 'foo');

    console.log(map1.get('bar'));
    // Expected output: "foo"

    console.log(map1.get('baz'));
    // Expected output: undefined
```
- has
```javascript
    const map1 = new Map();
    map1.set('bar', 'foo');

    console.log(map1.has('bar'));
    // Expected output: true

    console.log(map1.has('baz'));
    // Expected output: false
```
- size
```javascript
    map.size() // map의 크기가 나옴
```

- delete
```javascript
    map.delete("orange"); // oragne 키 삭제
```

- 순회
```javascript
    for (let [key, value] of map) {
        console.log(key, value);
    }

        // forEach() 메서드 사용
    map.forEach((value, key) => {
        console.log(key, value);
    })
```

- 장점
    1. 순서 보장 : 삽입한 순서가 그대로 유지된다
    2. 빠른 검색 및 삭제 가능 
    3. 사이즈 속성 및 이터러블
```javascript
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.size); // 출력: 3

// Map 객체를 배열로 변환하여 순회
const entriesArray = Array.from(map);
console.log(entriesArray); // 출력: [["a", 1], ["b", 2], ["c", 3]]

// 키 배열과 값 배열을 추출하여 순회
const keysArray = Array.from(map.keys());
const valuesArray = Array.from(map.values());
console.log(keysArray); // 출력: ["a", "b", "c"]
console.log(valuesArray); // 출력: [1, 2, 3]
```