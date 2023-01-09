#### setTimeout과 setInterval을 이용한 호출 스케즐링
  * 일정 시간이 지난후에 원하는 함수를 예약 실행 할 수 있게 하는 것을 호출 스케즐링 이라 한다.
  * 호출 스케줄링 방법
  * 1.setTimeout : 일정 시간이 지난 후에 함수를 실행 
  * 2.setInterval : 일정 시간 간격을 두고 함수를 실행

#### setTimeout
  * 문법 : let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
  * 매개변수 
  * 1.func|code : 실행하고자 하는 코드 함수 or 문자열 형태지만 대개 함수 
  * 2.delay : 실행 전 대기 시간 단위는 밀리초 기본값 0
  * 3.arg1,arg2 : 함수에 전달할 인수 IE9이하에선 지원 x
  * 되도록 화살표 함수를 이용 
  * setTimeout에 함수를 넘길 때 함수뒤에 () 생략 
  * 예시 : 

```js
function sayHi(who, phrase) {
  alert( who + ' 님, ' + phrase );
}

setTimeout(sayHi, 1000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요. 1초 뒤 출력
```

#### clearTimeout으로 스케쥴링 취소하기
  * setTimeout을 호출하면 타이머 식별자 반환 스케줄링을 취소하고 싶을 땐 이 식별자를 사용하면 된다.
  * 스케줄링 취소하기 : clearTimeout()

#### setInterval
  * 문법 : let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)  setTimeout과 동일한 문법(인수 역시 동일)
  * setInterval은 함수를 주기적으로 실행한다.
  * 중단을 원하면 clearInterval(timerId)를 사용 
  * 예시 :

```js
// 2초 간격으로 메시지를 보여줌
let timerId = setInterval(() => alert('째깍'), 2000);

// 5초 후에 정지
setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000);
```

#### 중첩 setTimeout
  * 중첩 setTimeout을 이용해 일정 간격을 두고 실행할 수 있다.
  * 예시 :
```js
let timerId = setTimeout(function tick() {
  alert('째깍');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```
  * 중첩 setTimeout을 사용하는 이유는 setInterval 보다 유연하며 호출 결과에 따라 다음 호출을 원하는 방식으로 조정이 가능하다.
  * 중첩 setTimeout은 지연간격을 보장하지만 setInterval은 이를 보장하지 않는다.

#### 대기 시간이 0인 setTimeout
  * setTimeout(func, 0)이나 setTimeout(func)를 사용하면 setTimeout의 대기시간을 0으로 설정할 수 있다.
  * 대기시간을 0으로 설정하면 빨리 실행할 수 있지만 스케줄러는 현재 실행 중인 스크립트의 처리가 종료된 이후 스케줄링한 함수를 실행
  * 예시 :
```js
setTimeout(() => alert("World"));

alert("Hello");
// Hello가 먼저 출력 되고 World가 바로 출력된다.
```
  
