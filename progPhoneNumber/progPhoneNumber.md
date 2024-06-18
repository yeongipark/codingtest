## 1번 풀이(Trie 이용)

```javascript
        // 노드 클래스 생성
        class Node(){
            constructor(value = ''){
                this.value = value
                this.end = false
                this.child = {}
            }
        }
        // 트라이 클래스 생성
        class Trie(){
            constructor(){
                this.root = new Node()
            }
            // 문자열 트라이에 추가하는 함수
            insert(string){
                // 트라이의 시작은 루트부터 탐색
                let currentNode = this.root
                for(let i = 0; i < string.length; i++){
                    let char = string[i]
                    // 만약에 찾고자 하는 문자가 자식에 없을때는 새로운 노드를 만든다
                    if(currentNode.child[char] === undefind){
                        let node = new Node(currentNode.value + char)
                        currentNode.child[char] = node
                    }

                    // 다음 노드로 이동한다
                    currentNode = currentNode.child[char]
                }
                // 문자열 삽입을 끝내고 마지막 문자를 true로 설정
                currentNode.end = true
            }

            search(string){
                let currentNode = this.root
                for(let i = 0; i < string.length; i++){
                    let char = string[i];
                    if(currentNode.child[char] === undefind){
                        return false;
                    }
                    currentNode = currentNode.child[char]
                }
                return true
            }
        }
        />
```

## 3번 풀이

- 주어진 문자열 배열을 sort로 사전순 정렬한다.
- 정렬하고 앞에 value랑 뒤에 value랑 비교해서 뒤에 문자열에 앞의 문자열이 포함되는지만 확인하면 끝... 레전드

**Array.some()** 함수 정리 -> 콜백으로 주어진 함수에서 하나라도 true를 반환하면 결과값이 true가 된다.

```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

- some
  - 첫번째 인자는 현재 순회하고 있는 배열의 값
  - 두번째 인자는 현재 순회하고 있는 배열의 인덱스
  - 세번째 인자는 현재 순회를 하는 배열 전체를 나타냄
