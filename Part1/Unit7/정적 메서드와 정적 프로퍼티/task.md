#### Object를 상속받는 클래스
  * 객체는 보통 Object.prototype을 상속받고 hasOwnProperty같은 일반 객체 메서드에 접근할 수 있다.
  * 예시 :
```js
class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// 메서드 hasOwnProperty는 Object.prototype에서 왔다.
alert( rabbit.hasOwnProperty('name') ); // true
```
  * 그런데 class Rabbit extends Object 같이 상속을 명시적으로 해주는 경우와 그냥 class Rabbit을 사용하는 경우 결과가 다를까?
  * 만약 다르다면 어떤 것이 다를까
  * 아래 예시에서 class Rabbit extends Object 를 사용한 코드가 있는데 실행해보면 동작하지 않는다. 어디서 문제가 생긴걸까 코드를 수정하시오.
  * 예시 :
```js
class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error
```
