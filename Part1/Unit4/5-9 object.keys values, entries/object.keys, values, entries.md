#### Object.keys, values, entries
  * keys() , values(), entries() 를 사용할 수 있는 자료 구조는 다음과 같다.
  * Map
  * Set
  * Array
  * 일반 객체엔 다음과 같은 메서드 사용
  * Object.keys(obj) : 객체의 키만 담은 배열을 반환한다.
  * Object.values(obj) : 객체의 값만 담은 배열을 반환한다.
  * Object.entries(obj) : [키, 값] 쌍을 담은 배열을 반환한다.
  * Map, Set, Array 전용 메서드와 일반 객체용 메서드의 차이를 맵의 기준으로 비교
  
  * 1. obj.keys() 가 아닌 Object.keys(obj) 를 호출한다.
  * 문법이 다른 이유는 유연성 때문 자바스크립트는 복잡한 자료구조 전체가 객체에 기반 
  * 객체 data에 자체적으로 data.values()라는 메서드를 구현해 사용하는 경우가 있을 수 있다.
  * 커스텀 메서드를 구현한 상태라도 Object.values(data) 같은 형태로 메서드를 호출 할 수 있으면 커스텀 메서드 내장 메서드 둘다 사용 가능
  
  * 2. 메서드 Object.*를 호출하면 iterable 객체가 아닌 객체의 한 종류인 배열을 반환한다.
  * 진짜 배열을 반환하는 이유는 하위 호환성 때문이다.
  * 예시
```js
let user = {
  name: "John",
  age: 30
};
```
  * Object.keys(user) = ['name', 'age']
  * Object.values(user) = ['John', 30]
  * Object.entries(user) = [['name', 'John'], ['age', 30]]
  * 예시 처럼 Object.values를 사용하면 프로퍼티 값을 대상으로 원하는 작업 가능
```js
let user = {
  name: "Violet",
  age: 30
};

// 값을 순회합니다.
for (let value of Object.values(user)) {
  alert(value); // Violet과 30이 연속적으로 출력됨
}
```
#### 객체 변환하기
  * 객체엔 map, filter 같은 배열 전용 메서드를 사용할 수 없다.
  * 하지만 Object.entries와 Object.fromEntries 를 순차적으로 적용하면 객체에도 배열 전용 메서드를 사용할 수 있다.
  * 1. Object.entries(obj) 를 사용해 객체의 키 : 값 쌍이 요소인 배열을 얻는다.
  * 2. 1에서 만든 배열에 map등의 배열 전용 메서드를 적용한다.
  * 3. 2에서 반환된 배열에 Object.fromEntries(array) 를 적용해 배열을 다시 객체로 되돌린다.
  * 예시 : 가격 정보가 저장된 객체 prices의 프로퍼티 값을 두 배로 늘려본다
```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 객체를 배열로 변환해서 배열 전용 메서드인 map을 적용하고 fromEntries를 사용해 배열을 다시 객체로 되돌립니다.
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```
