#### 메서드와 this
  * 객체는 사용자(user), 주문(order) 등과 같이 실제 존재하는 개체를 표현하고자 할 때 생성
  * 객체의 프로퍼티에 함수를 할당하여 행동할 수 있는 능력 부여

#### 메서드 만들기
  *  user에게 인사할 수 있는 능력 부여해 주기.
```js
let user = {
 name: "John",
 age: 30
};

user.sayHi = function() {
  alert("안녕하세요!");
};

user.sayHi(); // 안녕하세요!
```  
  * 객체 프로퍼티 user.sayHi 에 함수 할당
  * user.sayHi() 로 호출시 alert 창 출력
  * 객체 프로퍼티에 할당된 함수를 메서드라고 부른다.
  * 위 경우 sayHi가 메서드
  * 아래 처럼 이미 정의된 함수를 이용해서 만들 수도 있다.
```js
let user = {
  // ...
};

// 함수 선언
function sayHi() {
  alert("안녕하세요!");
};

// 선언된 함수를 메서드로 등록
user.sayHi = sayHi;

user.sayHi(); // 안녕하세요!
```
#### 메서드 단축 구문
  * 객체 리터럴 메서드 선언 시 단축 문법

```js
// 아래 두 객체는 동일하게 동작합니다.

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// 단축 구문을 사용하니 더 깔끔해 보이네요.
user = {
  sayHi() { // "sayHi: function()"과 동일합니다.
    alert("Hello");
  }
};
```
  * function 생략해도 메서드 정의 가능
  * 일반적인 방법과 단축 구문이 완전 동일하진 않다 

#### 메서드와 this
  * 메서드 내부에서 this 키워드를 사용하면 객체에 접근가능.
  * . 앞의 this는 메서드를 호출할 때 사용된 객체를 나타낸다 이 경우 user 를 나타냄 this.name === user.name
```js
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    alert(this.name);
  }

};

user.sayHi(); // John
```
  * this를 사용하지 않고 외부 변수를 참조해 객체에 접근 가능 
  * ex )) alert(user.name)
  * 하지만 예상치 못한 에러가 발생할 수 있다.(user를 복사해 다른 변수에 할당 user를 다른 값으로 덮었을 경우)

#### 자유로운 this
  * 자바스크립트에선 모든 함수에 this를 사용할 수 있다.
``` js
function sayHi() {
  alert( this.name );
}
```
  * 이렇게 작성해도 문법 에러가 발생하지 않는다.(아무 의미 없는 코드)
  * this 값은 런타임에 결정되며 컨텍스트에 따라 달라진다.
  * 런타임 : 자바스크립트가 구동되는 환경( 크롬, 파이어폭스, 익스플로러 그리고 Node.js)
  * 컨텍스트 :  1. 실행할 코드에 제공할 환경 정보들을 모아놓은 객체
  * 2. 자바스크립트의 동적 언어로서의 성격을 가장 잘 파악할 수 있는 개념(컨텍스트가 무엇인지 잘 모르겠습니다.)
  * 동일한 함수라도 다른 객체에서 호출했다면 this가 참조하는 값이 달라진다. 
```js
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin.f = sayHi;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (점과 대괄호는 동일하게 동작함)
// admin[f]가 출력되지 않는 이유가 궁금합니다 그리고 대괄호는 배열을 사용할때 쓰는거 아닌가요? 전부터 궁금했습니다
```
#### this가 없는 화살표 함수
  * 화살표 함수는 일반 함수와 달리 고유한 this를 가지지 않는다. 
  * 화살표 함수에서 this 참조 시 평범한 외부 함수에서 this 값을 가져온다.

```js
let user = {
  firstName: "보라",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // 보라
/// 위 구문처럼 함수 안에 화살표 함수를 사용해도 되는건가요? 이런 경우엔 sayHi() 를 호출 할 시에 arrow() 가 호출이 되는건가요? 
```

#### 요약
  * 객체 프로퍼티에 저장된 함수를 메서드라고 부른다.
  * 객체.함수명()은 객체를 행동 할 수 있게 해준다.
  * 메서드는 this로 객체를 참조한다.
  * this 값은 런타임에 결정된다.
  * 함수를 선언할 떄 this 사용가능 함수가 호출되기 전까지 this엔 값이 할당되지 안흔ㄴ다.
  * 함수를 복사해 객체 간 전달할 수 있다.
  * 함수를 객체 프로퍼티에 저장해 객체명.함수명() 같이 메서드 형태로 호출하면 this 는 객체를 참조한다.
