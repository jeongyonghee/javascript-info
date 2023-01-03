#### 오래된 var
  * 변수 선언 방법 
  * 1.let
  * 2.const
  * 3.var
  * var로 선언한 변수는 let으로 선언한 변수와 유사하다. 대부분의 경우 let을 var로 var을 let으로 바꿔도 큰 문제 없이 동작한다.
  * 하지만 var은 초기 자바스크립트 구현 방식 때문에 let과 const로 선언한 변수와는 다른 방식으로 동작
  * 최근엔 var 사용 X

##### var은 블록 스코프가 없다
  * var로 선언한 변수의 스코프는 함수 스코프이거나 전역스코프이다. 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근가능
  * 예시 :
```js
if (true) {
  var test = true; // 
}

alert(test); // true(if 문이 끝났어도 변수에 여전히 접근할 수 있음)
```
  * var은 코드 블록을 무시하기 때문에 test는 전역 변수가 된다. 
  * var이 아닌 let으로 선언 했을 경우 if문 안에서만 접근 가능
  * 반복문도 유사한 일이 발생한다.
  * 코드 블록이 함수 안에 있다면 var은 함수 레벨 변수가 된다.
  * 예시
```js
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // Hello 출력
}

sayHi();
alert(phrase); // 에러발생
```
  * var은 if, for 등의 코드 블록을 관통한다.

#### var은 변수의 중복 선언을 허용한다.
  * 한 스코프에서 같은 변수를 let으로 두번 선언하면 에러가 발생
  * var로 같은 변수를 여러 번 중복으로 선언할 시 에러 발생 x 하지만 이미 선언된 변수에 var을 사용하면 두 번째 선언문은 무시된다.
  * 예시
```js
var user = "Pete";

var user = "John"; // 이 var은 아무것도 하지 않으며 에러도 발생하지 않는다.(이전에 선언됨)

alert(user); // John
```

#### 선언하기 전 사용할 수 있는 var
  * var 선언은 함수가 시작될 때 처리된다. 전역에서 선언한 변수라면 스크립트가 시작될 때 처리된다.
  * 함수 본문 내에서 var로 선언한 변수는 선언 위치와 상관없이 함수 본문이 시작되는 지점에서 정의(변수가 중첩 함수 내에서 정의되지 않아야함)
  * 예시 : 두 예시는 동일하게 동작한다.
```js
function sayHi() {
  phrase = "Hello";

  alert(phrase);

  var phrase;
}
sayHi();

function sayHi() {
  var phrase;

  phrase = "Hello";

  alert(phrase);
}
sayHi();
```
  * 코드 블록은 무시되기 때문에 아래 코드의 경우 동일하게 동작한다 
  * 예시 :
```js
function sayHi() {
  phrase = "Hello"; // (*)

  if (false) {
    var phrase;
  }

  alert(phrase);
}
sayHi();
```
  * 이렇게 변수가 끌어올려 지는 현상을 '호이스팅' 이라고 부른다 var로 선언한 모든 변수는 함수의 최상위로 끌어 올려지기 때문
  * 위 예시의 if문 코드는 실행되지 않지만 호이스팅에 영향을 주지 않는다.
  * if 내부의 var은 함수 sayHi의 시작 부분에서 처리 phrase는 이미 정의가 된 상태다.

##### 선언은 호이스팅 되지만 할당은 호이스팅 되지 않는다.
  * 예시 
```js
function sayHi() {
  alert(phrase);

  var phrase = "Hello";
}

sayHi();
```
  * 변수 선언은 함수 실행이 시작될 때 처리되지만(호이스팅) 할당은 호이스팅 되지 않기 때문에 할당 관련 코드에서 처리된다.
  * 모든 var 선언은 함수 시작 시 처리되기 때문에 var로 선언한 변수는 어디서든 참조할 수 있다.(변수에 무언가를 할당하기 전까진 undefined)
  * var phrase 할당 -> 선언 은 괜찮지만 선언 -> 할당은 안된다.

#### 즉시 실행 함수 표현식
  * var도 블록 레벨 스코프를 가질 수 있게 한 방법 : 즉시 실행 함수 표현식
  * 요즘엔 자주 사용 X
  * 예시 :
```js
(function() {

  let message = "Hello";

  alert(message); // Hello

})();
```
  * 함수 표현식이 만들어지고 바로 호출되면서 해당 함수가 즉시 실행 
  * 문법 : (function(){})() 
  * 함수 선언문으로 선언 시 즉시 함수 실행 불가.
  * 함수 앞을 괄호로 둘러 싸거나 실행 뒤에 괄호 또는 !, + 를 이용해 함수 표현식이라고 인식해주는 방법도 있다.
