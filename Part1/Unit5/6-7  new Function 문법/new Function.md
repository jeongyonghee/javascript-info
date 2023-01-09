#### new Function 문법
  * 함수 표현식과 함수 선언문 이외에 함수를 만들 수 있는 방법

##### 문법
  * let func = new Function([arg1, arg2, ...argN], functionbody); 
  * arg1...argN과 함수 본문 functionBody로 구성된다.
  * 예시 :
```js
// 인수가 없고 본문만 있는 함수
let sayHi = new Function('alert("Hello")');

sayHi(); // Hello

// 인수 두개인 함수 
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3
```

  * new Function과 기존 방식의 차이점 : 런타임에 받은 문자열을 사용해 함수 생성 가능
  * 표현식과 선언문은 직접 스크립트를 작성 
  * new Function 문법은 어떤 문자열도 함수로 바꿀 수 있다. 서버에서 전달받은 문자열을 이용해 새로운 함수 생성 실행 가능
  * 서버에서 코드를 받거나 템플릿을 사용해 함수를 동적으로 컴파일 해야하는 경우 복잡한 웹 애플리케이션 구현 하는 특별한 경우에 new Function 사용
  * 예시 :
```js
let str = ... 서버에서 동적으로 전달받은 문자열(코드 형태) ...

let func = new Function(str);
func();
```

#### 클로저
  * 함수는 프로퍼티 [[Environment]]에 저장된 정보를 이용해 태어난 곳을 기억한다(lifecycle)
  * [[Environment]] 는 함수가 만들어진 렉시컬 환경을 참조한다.
  * new Function을 이용해 함수를 만들면 [[Environment]] 프로퍼티가 현재 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조한다.
  * new Function을 이용해 만든 함수는 외부 변수에 접근할 수 없고 오직 전역 변수에만 접근할 수 있다. 
  * 예시 : 
```js
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // ReferenceError: value is not defined
```
