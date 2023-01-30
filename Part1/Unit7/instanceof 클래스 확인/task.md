#### 이상한 instanceof
  * 아래 예시에서 a는 B()를 통해 생성하지 않았다. 그런데도 instanceof는 왜 true를 반환할까?
```js
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
```
  * 정답 : a의 프로토타입에 b의 프로토타입을 참조 시켰기 때문에 
  * 해답 : instanceof는 평가 시 함수는 고려하지 않고 평가 대상의 prototype을 고려 평가 대상의 prototype이 프로토타입 체인상에 있는 프로토타입과 일치하는지 여부를 고려하기 때문에(A와 B의 프로토타입은 일치한다 B의 프로토타입이 할당되었기 때문에) 
