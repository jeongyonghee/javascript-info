#### 배열에서 중복 요소 제거하기
  * arr은 배열이라 가정
  * arr에서 중복 값을 제거해 주는 함수 unique(arr)을 만들어보세요.
  * 예시
```js
function unique(arr) {
  /* 제출 답안 */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
```
  * 참고1 : 여기선 배열 안의 요소가 모두 문자열이지만 제출 답안을 작성할 땐 배열 내 어떤 자료형이 들어와도
  * 동작할 수 있어야한다.
  * 참고2 : Set을 사용해보세요.

```js
function unique(arr) {
 return new Set(arr)  
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); 
// 이터러블에 대한 개념이 잡히지 않아 Array.from 에 대해 사용하지 못했습니다 ㅠㅠ
```

#### 애너그램 걸러내기
  * 애너그램은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이입니다.
  * 예시
  * nap - pan
  * ear - are - era
  * cheaters - hectares - teachers
  * 애너그램으로 만든 단어를 걸러내는 함수 aclean(arr)을 만들어보세요.
  * 예시
```js
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
```
  * 애너그램 그룹에서 한 단어는 남아있어야 한다.
```js
// 이 부분에 대해서도 이해가 부족한 것 같습니다 손을 못대겠습니다..

```

#### 반복 가능한 객체의 키
  * map.keys()를 사용해 배열을 반환받고, 이 배열을 변수에 저장해 .push와 같은 배열 메서드를 적용하고 싶다고 해봅시다.
  * 작동하지 않네요.
```js
let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
keys.push("more");
```
  * 이유가 무엇일까요? keys.push가 작동하게 하려면 어떻게 코드를 고쳐야할까요?
```js
// 이터러블을 반환한다는 사실은 알지만 Array.from을 이용해야한다는 이유를 모르겠습니다
```
