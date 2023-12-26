import { HashTable } from "./HashTable.mjs";

// Set: 데이터의 중복을 허용하지 않는 자료구조
// 해시 테이블을 사용해서 구현 가능함
// 해시 테이블을 사용한다고해서 해시셋으로도 불림
// 셋은 해시 테이블의 value 값은 사용하지 않고 key만 사용해서 구현함
// key임과 동시에 데이터임

/*
셋의 추상자료형
add(data) - 데이터 삽입
isContain(data) - 데이터 체크
remove(data) - 데이터 제거
clear() - 셋 비우기
isEmpty() - 셋이 비었는지 체크
printAll() - 모든 데이터 출력
*/

class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(data) {
    if (this.hashTable.get(data) == null) {
      this.hashTable.set(data, -1);
      // value는 쓰이지 않기 때문에 고정적으로 -1을 넣어줌
      // 아무거나 넣어줘도 되지만 -1을 줬음
    }
  }

  isContain(data) {
    return this.hashTable.get(data) != null;
  }

  remove(data) {
    this.hashTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      if (this.hashTable.arr[i].count > 0) {
        empty = false;
        break;
      }
    }
    return empty;
  }

  printAll() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      let currentNode = this.hashTable.arr[i].head;
      while (currentNode != null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };
