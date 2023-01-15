#### bind를 적용한 함수를 메서드에 정의하기
  * 아래 코드를실행하면 어떤 결과가 나올까요?
  * 코드 : 
```js
function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();
```
  * 정답 : null이 출력된다. (이유를 정확히 설명할 수는 없음)
  
  * 해답 : null이 출력된다. bind를 적용한 함수의 컨텍스트는 완전히 고정되며 한번 고정되면 바꿀 방법이 없다. 따라서 user.g()를 실행했음에도 불구하고 
  * 기존 함수의 컨텍스트는 null이 되기 때문에 null이 출력된다.

#### bind 두 번 적용하기
  * 함수에 bind를 적용하고 이어서 한 번 더 bind를 적용하면 this를 바꿀 수 있을까요?
  * 아래 코드를 실행하면 어떤 결과가 나올까요?
  * 코드 :
```js
function f() {
  alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f();
```
  * 정답 : John이 출력된다 이유는 설명 불가 
  
  * 해답 : John이 출력된다. f.bind가 반환한 특수 객체인 묶인 함수는 함수 생성 시점의 컨텍스트만 기억한다 인수가 제공되었다면 그 인수 또한 기억
  * 한번 bind를 적용하면 bind를 사용해 컨텍스트를 다시 정의할 수 없다. 

#### bind를 적용한 함수의 프로퍼티
  * 함수 프로퍼티에 값을 하나 할당하고 이 함수에 bind 메서드를 적용하면 프로퍼티 값은 바뀔까? 그렇다면 혹은 그렇지 않다면 그 이유는 무엇일까
  * 코드 :
```js
function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert( bound.test ); 
```

  * 정답 : 똑같이 5가 출력된다. bind 메서드로 고정해도 5가 반환되는건 같다고 생각
  
  * 해답 : undefined가 출력된다. bind를 적용하면 또 다른 객체가 반환 새로운 객체엔 test 프로퍼티가 없으므로 undefined가 출력된다.

#### this 값이 undefined인 함수 고치기
  * 아래 함수 askPassword()는 비밀번호를 먼저 확인하고 그 결과에 따라 user.loginOk나 user.loginFail을 호출해야 한다.
  * 그런데 함수를 호출하면 에러가 발생 에러는 왜 발생하는 걸까?
  * 에러가 발생하지 않도록 색칠된 줄을 고쳐보자 다른 줄은 바꾸지 않아야 한다.
  * 코드 : 
```js
function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  loginOk() {
    alert(`${this.name}님이 로그인하였습니다.`);
  },

  loginFail() {
    alert(`${this.name}님이 로그인에 실패하였습니다.`);
  },

};

askPassword(user.loginOk, user.loginFail);
```
  * 정답 : bind를 사용하지 않고 함수를 호출했기 때문에 this를 읽지 못한다 따라서
  * askPassword(user.loginOk.bind(user), user.loginFail.bind(user)) 로 호출하면 잘 동작한다.
  * 해답 : 동일하다.

#### 로그인에 부분 적용하기
  * user 객체를 수정해 user가 loginOk, loginFail 대신에 오직 하나의 함수 user.login(true·false)만 가질 수 있다 
  * user.login(true)는 ok, user.login(false)는 fail을 호출하게 하려면 askPassword에 무엇을 넘겨줘야 할까
  * 코드 : 
```js
function askPassword(ok, fail) {
  let password = prompt("비밀번호를 입력해주세요.", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' 로그인 성공' : ' 로그인 실패') );
  }
};

askPassword(?, ?); // ?
```
  * 정답 : true와 false를 전달해서 할 수 있을 것 같은데 방법을 잘모르겠음

  * 해답 :
  * 1.래퍼함수나 화살표함수 사용
  * askPassword(() => user.login(true), () => user.login(false));
  * 이 방법을 사용하면 askPassword는 외부 변수에서 user를 가져오기 때문에 원하는 결과를 얻을 수 있다.

  * 2.컨텍스트가 user이면서 올바른 첫 번째 인수가 있는 부분 적용 함수를 만들면 원하는 기능 구현 가능
  * aksPassword(user.login.bind(user,true), user.login.bind(user, false));
