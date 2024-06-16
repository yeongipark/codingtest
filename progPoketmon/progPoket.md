**1. 아쉬운 부분**
    - 모든 배열을 순회하면서 객체에 저장했는데, set을 사용하면 바로 중복된 값은 없어지니까 객체의 수만 바로 나온다...
```javascript
        function solution(nums) {
            const noDuplicatePokemon = new Set(nums); // 입력받은 배열을 바로 set에 저장
            const pokemonVarietyCount = noDuplicatePokemon.size; // set.size 변수를 이용해서 바로 포켓몬 종류 저장
            const pokemonCounts = nums.length; 
            return pokemonVarietyCount > pokemonCounts/2 ? pokemonCounts/2 : pokemonVarietyCount;
        }
```

**2. set 메서드 정리**
    -add : 속성 추가 함수
    -clear : 변수 초기화
    -delete : 해당 변수 삭제
    -difference : 두 set의 차집합 
```javascript
            const odds = new Set([1, 3, 5, 7, 9]);
            const squares = new Set([1, 4, 9]);
            console.log(odds.difference(squares)); // Set(3) { 3, 5, 7 }
```
    -forEach : set을 순회할 수 있음
