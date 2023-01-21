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
 * 예시 : Object.create로 프로퍼티 설명자 추가 
```js
let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true
```
 * Object.create를 호춣하면 obj의 모든 프로퍼티를 포함한 완벽한 사본이 만들어진다.( [[Prototype]] 도 복제된다. ) 

#### 아주 단순한 객체
 * 객체는 키 : 값 쌍이 있는 연관 배열로 사용할 수 있지만 "__ proto __ " 라는 문자열은 키로 사용할 수 없다.
 * 예시 : 
```js
let obj = {};

let key = prompt("입력하고자 하는 key는 무엇인가요?", "__proto__");
obj[key] = "...값...";

alert(obj[key]); // "...값..."이 아닌 [object Object]가 출력됩니다.
```
 * __ proto __ 는 항상 객체이거나 null이어야 한다. 하지만 위의 예시처럼 키가 __ proto __ 일때 값이 제대로 저장되지 않는 건 명백한 버그다.
 * 이것을 해결하기 위한 예시 :
```js
let obj = Object.create(null);

let key = prompt("입력하고자 하는 key는 무엇인가요?", "__proto__");
obj[key] = "...값...";

alert(obj[key]); // "...값..."  
```

 * Object.create(null)로 객체를 만들면 __ proto __ getter와 setter를 상속받지 않는다.
 * 프로토타입이 없는 빈 객체는 순수 사전식 객체라고 부르며 일반 객체 { ... } 보다 단순하다. 하지만 내장 메서드가 없다는 단점이 존재한다.
 
### 요약
 * 프로토 타입에 직접 접근할 때 다음과 같은 모던한 메서드를 사용할 수 있다.
 * 1.Object.create(proto, descriptors]) : [[Prototype]]이 proto인 객체를 만들고 참조 값은 null 일 수 있고 프로퍼티 설명자를 넘길 수 있다.
 * 2.Object.getPrototypeOf(obj) : obj의 [[Prototype]] 을 반환한다. ( __ proto __ getter와 같다. ) 
 * 3.Object.setPrototypeOf(obj,proto) : obj의 [[Prototype]] 을 proto로 설정한다. ( __ proto __ setter와 같다)
 * 사용자가 키를 직접 만들 수 있게 허용하면 내장 __ proto __ 의 getter, setter 때문에 의도치 않은 결과가 나올 수 있다. 키가 " __ proto __ " 일 때 에러 발생 
 * 이를 방지하기 위해 Object.create(null)을 사용해 __ proto __ 가 없는 아주 단순한 객체를 만들거나 맵을 사용하는게 좋다.
 * Object.create를 사용하면 객체의 얕은 복사본(shallow-copy)를 만들 수 있다.
