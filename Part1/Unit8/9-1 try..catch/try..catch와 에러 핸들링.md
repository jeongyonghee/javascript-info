#### try..catch와 에러 핸들링
  * 에러가 발생하면 스크립트는 즉시 중단되고 콘솔에 에러가 출력된다.
  * try..catch 문법을 사용하면 스크립트가 중단되는걸 방지하고 에러를 잡아서 합당한 무언가를 할 수 있게된다.

#### try...catch 문법
  * try...catch 문법은 try와 catch라는 두 개의 주요 블록으로 구성된다.
  * 예시 :
```js
try {

  // 코드...

} catch (err) {

  // 에러 핸들링

}
```
  * try...catch 동작 알고리즘 
  * 1.먼저 try {...} 안의 코드가 실행된다.
  * 2.에러가 없다면 try 안의 마지막 줄까지 실행되고 catch 블록 건너뜀
  * 3.에러가 있다면 try안 코드 실행중단 catch(err) 블록으로 제어 흐름이 넘어간다. 변수 err(아무 이름 사용가능)은 무슨 일이 일어났는지에 대한 설명이 담긴 에러 객체를 포함한다.
  * try{...} 블록 안에서 에러가 발생해도 catch 에서 에러를 처리하기 때문에 스크립트는 죽지 않습니다. 
  
  * 에러가 없는 예시 : 1과 2를 alert 창에 보여줌 
```js
try {

  alert('try 블록 시작');  // (1) <--

  // ...에러가 없습니다.

  alert('try 블록 끝');   // (2) <--

} catch(err) {

  alert('에러가 없으므로, catch는 무시됩니다.'); // (3)

}
```

  * 에러가 있는 코드라면 1이후에 catch 코드 블럭 실행 

#### 에러 객체
  * 에러가 발생하면 자바스크립트는 에러 상세내용이 담긴 객체를 생성한다. 그 후 catch 블록에 이 객체를 인수로 전달
  * catch(err){  에러객체 생성 } 
  * 내장 에러 전체와 에러 객체는 두 가지 주요 프로퍼티를 가진다.
  * 1.name : 에러 이름 정의되지 않은 변수 때문에 발생한 에러라면 ReferencError 가 이름이 된다.
  * 2.message : 에러 상세 내용을 담고 있는 문자 메시지
  * 3.stack : 현재 호출 스택 에러를 유발한 중첩 호출들의 순서 정보를 가진 문자열로 디버깅 목적으로 사용
  * 예시 :
```js
try {
  lalala; // 에러, 변수가 정의되지 않음!
} catch(err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)

  // 에러 전체를 보여줄 수도 있습니다.
  // 이때, 에러 객체는 "name: message" 형태의 문자열로 변환됩니다.
  alert(err); // ReferenceError: lalala is not defined
}
```
#### 선택적 catch 바인딩
  * 에러에 대한 자세한 정보가 필요하지 않으면 catch() 괄호 생략 가능 ((err) 없이)

#### try...catch 사용하기
  * JSON.parse를 사용할 때 잘못된 형식의 json이 들어온 경우 에러를 만들기 때문에 스크립트가 죽는다. 이럴 때 try...catch로 해결가능
  * 예시 :
```js
let json = "{ bad json }"; // 잘못된 json 

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert( user.name ); // 이 코드는 동작하지 않는다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어온다.
  alert( "데이터에 에러가 있어 재요청을 시도합니다." );
  alert( e.name );
  alert( e.message );
}
```

#### 직접 에러를 만들어서 던지기
 * json이 문법적으로 잘못되지 않았지만 스크립트 내에서 사용중인 프로퍼티를 가지고 있지 않다면 에러를 유발하지만 catch문이 동작하지 않는다.
 * 이걸 throw 연산자를 통해 해결할 수 있다.

#### throw 연산자
 * throw 연산자는 에러를 생성한다.
 * 문법 : throw <error object>
 * 내장 에러와의 호환을 위해 되도록 에러 객체에 name과 message 프로퍼티를 넣는 것이 좋다.
 * 예시 :
```js
 let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...
```
 * 일반 객체가 아닌 내장 생성자를 사용해 만든 내장 에러 객체의 name 프로퍼티는 생성자 이름과 동일한 값을 갖는다. 프로퍼티 message의 값은 인수에서 가져온다.
 * 예시 : 
 ```js
let error = new Error("이상한 일이 발생했습니다. o_O");

alert(error.name); // Error
alert(error.message); // 이상한 일이 발생했습니다. o_O (에러 메시지 수정)
 ```
 * 예시 : throw 연산자를 사용해 에러 발생 시키기
 ```js
 let json = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json); // <-- 에러 없음

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }

  alert( user.name );

} catch(e) {
  alert( "JSON Error: " + e.message ); // JSON Error: 불완전한 데이터: 이름 없음 (e.message가 원래의 에러 메시지가 아닌 수정한 에러 메시지로 출력)
}
 ```

#### 에러 다시 던지기
 * 정의되지 않은 변수 사용등의 프로그래밍 에러가 발생할 가능성은 항상 있다. (ex : user = JSON.parse(json) 같이 user 앞에 let을 붙이지 않았을 때)
 * catch는 예상치 못한 에러를 잡아내 주긴 하지만 에러 종류와 관계없이 메시지를 보여줄 수 있다.
 * 이러한 문제를 해결하기 위해 다시 던지기(rethrowing) 기술 사용
 * catch는 알고 있는 에러만 처리하고 나머지는 다시 던져야 한다.
 * rethrowing 이란 
 * 1.catch가 모든 에러를 받는다.
 * 2.catch(err) {...} 블록안에서 에러 객체 err을 분석한다.
 * 3.에러 처리 방법을 알지 못하면 throw err을 한다. 
 * 에러 타입은 instanceof 명령어로 체크
 * 예시 :
```js
try {
  user = { /*...*/ };
} catch(err) {
  if (err instanceof ReferenceError) {
    alert('ReferenceError'); //  정의되지 않은 변수에 접근하여 'ReferenceError' 발생
  }
}                                      
```
* err.name 프로퍼티로 에러 클래스 이름 확인가능 기본형 에러는 모두 err.name 프로퍼티를 가진다. 또는 err.constructor.name을 사용할 수 있다.
                                      
#### try...catch...finally
 * try..catch는 finally 라는 코드 절을 하나 더 가질 수 있다.
 * finally안의 코드는 다음과 같은 상황에서 실행된다. 
 * 에러가 없는 경우 : try 실행이 끝난 후 
 * 에러가 있는 경우 : catch 실행이 끝난 후 
 * finally를 사용하면 try..catch를 다음과 같이 확장할 수 있다.
 ```js
try {
   ... 코드를 실행 ...
} catch(e) {
   ... 에러 핸들링 ...
} finally {
   ... 항상 실행 ...
}                            
 ```
 * finally 절은 무언가를 실행하고 실행 결과에 상관없이 실행을 완료하고 싶을 경우 사용
 * finally절은 try...catch 절을 빠져나가는 어떤 경우에도 실행된다. return을 사용해 명시적으로 빠져나간다 해도 finally절이 먼저 실행되고 return 실행.
                                      
#### 전역 catch
 * try...catch 바깥에서 치명적인 에러가 발생했을 때 대응하는 방법으로 window.onerror를 이용해 에러를 처리할 수 있다.
 * window.onerror 프로퍼티에 함수를 할당하면 예상치 못한 에러가 발생했을 때 이 함수가 실행된다.
 * 문법 :
```js
window.onerror = function(message, url, line, col, error) { }                      
```
 * message : 에러 메시지
 * url : 에러가 발생한 스크립트의 URL
 * line, col : 에러가 발생한 곳의 줄과 열 번호
 * error : 에러 객체
 * 전역 핸들러인 window.onerror는 스크립트 복구 목적보다는 개발자에게 에러 메시지를 보내는 용도로 사용
 * 예시 : 
```js
<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // 에러가 발생한 장소
  }

  readData();
</script>     
```
