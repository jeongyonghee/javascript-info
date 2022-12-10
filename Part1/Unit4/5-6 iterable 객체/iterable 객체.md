#### 이번 챕터는 전체적으로 잘 이해가 가지 않아 후에 다시 살펴보겠습니다.

#### iterable 객체
  * 반복가능한(iterable) 객체는 배열을 일반화한 객체다.
  * 이터러블 사용하면 어떤 객체든 for ~ of 반복문 적용 가능.

#### Symbol.iterator
  * for ~ of 를 적용하기에 적합해 보이는 객체 만들기
  * 예시 : range는 숫자 간격을 나타내고 있다.
```js
let range = {
  from: 1,
  to: 5
};

// 아래와 같이 for..of가 동작할 수 있도록 하는 게 목표입니다.
// for(let num of range) ... num=1,2,3,4,5
```
  * range를 for ~ of 가 동작하도록 만드려면 Symbol.iterator라는 메서들 추가
  * 1. Symbol.iterator 호출 
  * 2. for ~ of 는 반환된 객체만을 대상으로 동작
  * 3. for ~ of 에 다음 값이 필요하면 for ~ of 는 이터레이터의 next()메서드를 호출한다.
  * 4. next()의 반환 값은 {done: Boolean, value:any} 와 같은 형태여야한다. 
  * done = true 반복 종료 done = false value에 다음 값이 저장된다.
```js
let range = {
  from: 1,
  to: 5
};

// 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function() {

  // Symbol.iterator는 이터레이터 객체를 반환합니다.
  // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
  return {
    current: this.from, 
    last: this.to,

    // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
    next() {
      // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 의도한대로 동작된다.
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
// 이 부분에 대해서도 이해가 잘 가지 않습니다.
```

#### 문자열은 이터러블입니다.
  * 배열과 문자열은 가장 광범위하게 쓰이는 내장 이터러블이다.
  * for ~ of 는 문자열의 각 글자를 순회한다. 
```js
for (let char of "test") {
  // 글자 하나당 한 번 실행됩니다(4회 호출).
  alert( char ); // t, e, s, t가 차례대로 출력됨
}
```
#### 이터레이터를 명시적으로 호출하기
  * for ~ of 를 사용했을 때와 동일한 방법으로 문자열을 순회할 건데 이번엔 직접 호출을 통해서 순회해보겠습니다.
  * 다음 코드는 문자열 이터레이터를 만들고, 여기서 값을 수동으로 가져온다.
```js
let str = "Hello";

// for..of를 사용한 것과 동일한 작업을 합니다.
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 글자가 하나씩 출력됩니다.
}
```

#### 이터러블과 유사 배열
  * 이터러블은 Symbol.iterator가 구현된 객체
  * 유사배열(array-like) 은 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체다.
  * 이터러블과 유사 배열은 대부분 배열이 아니기 때문에 push pop 등의 메서드를 지원하지 않는다.

#### Array.from
  * Array.from은 이터러블이나 유사 배열을 받아 진짜 Array를 만들어 준다. 이 과정을 거치면 배열 메서드 사용 가능.
```js
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2  // 여기서 length는 객체안의 내용물이라기 보단 정말 길이를 표현한 것인가요?? 
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (메서드가 제대로 동작합니다.) 
```
  * Array.from엔 매핑 함수를 선택적으로 넘겨줄 수 있다.
  * Array.from(obj[, mapFn, thisArg])
  * mapFn을 두 번째 인수로 넘겨주면 새로운 배열에 obj의 요소를 추가하기 전에 각 요소를 대상으로 mapFn을 적용하고 반환된 값 추가
  * 세 번째 인수 thisArg는 각 요소의 this를 지정할 수 있도록 해준다.
