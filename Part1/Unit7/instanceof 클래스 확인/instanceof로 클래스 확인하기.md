##### instanceof로 클래스 확인하기
  * instanceof 연산자를 사용하면 객체가 특정 클래스에 속하는지 아닌지 상속관계도 확인해준다.
  * 인수의 타입에 따라 이를 다르게 처리하는 다형적인 함수를 만드는데 사용된다.

#### instanceof 연산자
  * 문법 : obj instanceof Class
  * obj가 Class에 속하거나 Class를 상속받는 클래스에 속하면 true가 반환된다.
  * 예시 :
```js
class Rabbit {}
let rabbit = new Rabbit();

// rabbit이 클래스 Rabbit의 객체인가요?
alert( rabbit instanceof Rabbit ); // true

// 클래스가 아닌 생성자 함수
function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true

let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true
```
  * instanceof는 생성자 함수, Array 같은 내장 클래스에도 사용할 수 있다.
  * Array는 프로토타입 기반으로 Object를 상속받는다.
  * instanceof 연산자는 보통, 프로토타입 체인을 거슬러 올라가며 인스턴스 여부나 상속 여부를 확인한다. 
  * 정적 메서드 Symbol.hasInstance을 사용하면 직접 확인 로직을 설정할 수 있다.
  * 클래스에 static메서드 Symbol.hasInstance가 구현되어있다면 obj instanceof Class 문 실행 시 Class[Symbol.hasInstance](obj) 가 호출된다. 호출 결과는 true나 false여야한다.
  * objA가 objB의 프로토타입 체인 상 어딘가에 있으면 true를 반환해주는 메서드 obj.isPrototypeOf(objB)도 있다. 

#### 보너스 : 타입 확인을 위한 Object.prototype.toString
  * Object.prototype.toString을 통하여 typeof, instanceof의 대안을 만들 수 있다.
  * 숫자형 : [object Number]
  * 불린형 : [object Boolean]
  * null : [object Null]
  * undefined : [object Undefined]
  * 배열 : [object Array]
  * 그외 : 커스터마이징 가능
  * 예시 :
```js
let objectToString = Object.prototype.toString;

let arr = [];

alert( objectToString.call(arr) ); // [object Array]
```

#### Symbol.toStringTag
  * 특수 객체 프로퍼티 Symbol.toStringTag 를 사용하면 toString 동작을 커스터마이징 할 수 있다.
  * 예시 :
```js
let user = {
  [Symbol.toStringTag]: "User"
};

alert( {}.toString.call(user) ); // [object User]
```

#### 요약
  * instanceof 연산자는 계층 구조를 가진 클래스를 다룰 때나 클래스의 상속 여부를 확인하고자 할 때 좋다.
  * typeof 는 원시형을 대상으로 동작하며 반환 값은 문자열
  * {}.toString 원시형, 내장객체, Symbol.toStringTag 가 있는 객체 대상으로 동작 반환 값 문자열
  * instanceof 객체를 대상으로 동작 반환 값 true, false
