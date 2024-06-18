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
```
