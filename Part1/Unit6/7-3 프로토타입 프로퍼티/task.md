##### prototype 변경하기
  * 아래 코드에선 new Rabbit을 만들고 Rabbit의 prototype을 변경한다
  * 시작 코드는 다음과 같다.
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true
```
  * 1.아래와 같은 코드를 추가 하면 얼럿창엔 무엇이 출력될까
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // ?
```

  * 2.아래와 같이 코드를 변경하면 얼럿창엔 무엇이 출력될까
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // ?
```
  * 3.아래와 같이 delete를 사용하면 얼럿창엔 무엇이 출력될까
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // ?
```
  * 4.마지막 코드를 실행하면 얼럿창엔 무엇이 출력될까
```js
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ?
```

  * 정답 :
  * 1.똑같이 true 가 출력된다.
  * 2.false 출력
  * 3.undefined 출력
  * 4.undefined 출력

  * 해답 :
  * 1.true : Rabbit.prototype에 무언가를 할당하면 그 값이 새로운 객체의 [[prototype]]이 된다. 다만 이미 만들어진 객체엔 이 규칙이 적용되지 않는다.
  * 2.false : 객체는 참조에 의해 할당 Rabbit.prototype이 참조하는 객체는 단 하나 뿐인데 이 객체는 Rabbit.prototype과 rabbit의 [[Prototype]]을 사용해 참조할 수 있다. 따라서 둘 중 하나의 참조를 사용해 객체의 내용을 변경하면 다른 참조를 통해서도 변경 내용을 볼 수 있다.
  * 3.true : delet 연산은 객체에 직접 적용 delete rabbit.eats는 rabbit에서 eats 프로퍼티를 제거하지만 rabbit엔 eats가 없다. 따라서 delete는 영향 X
  * 4.undefined : 프로퍼티 eats가 프로토타입에서 삭제되었기 때문에 eats는 더이상 존재하지 않는다.

#### 동일한 생성자 함수로 객체 만들기
  * 생성자 함수가 하나 있고 이 생성자 함수를 사용해 만든 임의의 객체 obj가 있다고 가정 지금은 이 생성자 함수를 사용해 새로운 객체를 만들어야 한다. 정체를 모르는 생성자 함수를 사용해 새로운 객체를 만드는게 가능할까? 
```js
let obj2 = new obj.constructor();
```
  * 위와 같은 코드를 사용해 객체를 만들 수 있게 해주는 생성자 함수를 작성해보기 여기에 더하여 위와 같은 코드가 동작하지 않도록 하는 예시도 만들기.

  * 정답 : 문제를 이해 못함

  * 해답 : 
```js
function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // Pete 
```
