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
  * try..catch가 실무에서 
