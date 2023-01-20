#### 프로토타입 메서드와 __proto__가 없는 객체
  * __ proto __ 는 브라우저 대상으로 개발하고 있다면 더는 사용 X
  * 대신 모던한 메서드 사용
  * 1.Object.create(proto, [descriptos]) : [[Prototype]]이 proto를 참조하는 빈 객체를 만든다. 이때 프로퍼티 설명자를 추가로 넘길 수 있다.
  * 2.Object.getPrototypeOf(obj) : obj의 [[Prototype]]을 반환한다.
  * 3.Object.setPrototypeOf(obj, proto) : obj의 [[Prototype]]이 proto가 되도록 설정
  * 예시 :

```js
let animal = {
  eats: true
};

// 프로토타입이 animal인 새로운 객체를 생성
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // rabbit의 프로토타입을 {}으로 바꾼다.
```
