#### 메서드 "f.defer(ms)"를 함수에 추가하기
  * 모든 함수의 프로토타입에 ms 밀리초 후에 함수를 실행하는 defer(ms) 함수를 추가하세요.
  * 함수를 프로토타입에 추가한 이후 아래 코드는 동작해야한다.
  * 인수들은 기존 함수에 전달된다.
```js
function f() {
  alert("Hello!");
}

f.defer(1000); // 1초 후 "Hello!" 출력
```

  * 정답 :
  * 해답 :
```js
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
};

function f() {
  alert("Hello!");
}

f.defer(1000); // 1초 후 "Hello!" 출력
```

#### 데코레이팅 "defer()" 를 함수에 추가하기
  * 모든 함수의 프로토타입에 ms 밀리세컨초 지연 호출 래퍼를 반환하는 defer(ms) 메서드를 추가하시오.
  * 동작 예시
```js
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // 1초 후 3을 출력
```
  * 정답 :
  * 해답 : 객체 메서드에 대한 데코레이션 동작을 만들기 위해 this를 f.apply 안에서 사용해야 한다. 래퍼 함수는 객체 메서드로써 호출된다면 this는 기존 메섣 f에 전달된다.

```js
Function.prototype.defer = function(ms) {
  let f = this;
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms);
  }
};

// 확인해 보세요.
function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // 1초 후 3 출력
```
