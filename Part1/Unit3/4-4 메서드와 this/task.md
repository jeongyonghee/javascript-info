#### 객체 리터럴에서 this 사용하기
  * 함수 makeUser는 객체를 반환한다.
  * 이 객체의 ref에 접근하면 어떤 결과가 발생하고 그 이유는 뭘까?

```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // 결과가 어떻게 될까요?
```
  * john이 출력 된다? 메서드로 등록되었기 때문에? x (메서드로 선언되지 않았다 이유는 객체에 할당한 것이 아닌 변수에 할당(함수를) 
  * 에러가 발생한다. this 값을 설정할 땐 객체 정의가 사용되지 않는다.
  * this 값은 호출 시점에 결정 된다. 
  * 위 코드에서 makeUser() 내 this는 undefined가 된다. 메서드로써 호출된게 아닌 함수로 호출됨
  * this 값은 전체 함수가 되며 코드 블록과 객체 리터럴은 여기에 영향 x
  * ref : this 는 함수의 현재 this 값을 가져온다. ( undefined ) 
  * 에러가 발생하지 않게 코드를 작성하기
```js
function makeUser() {
  return {
    name: "John",
    ref() {
      return this; // 여기서 return 을 하는 이유는 무엇인가요? 
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // John
```

#### 계산기 만들기
  * calculator 라는 객체를 만들고 세가지 메서드를 구현해 보기
  * read()에선 프롬프트 창을 띄우고 더할 값 두개를 입력받는다. 입력받은 값은 객체의 프로퍼티에 저장
  * sum()은 저장된 두 값의 합을 반환한다.
  * mul()은 저장된 두 값의 곱을 반환한다.

```js
let calculator = {
  // 제가 작성한 답변인데 이렇게 작성할 경우 NaN이 반환되는데 이유가 무엇인지 모르겠습니다. 
  read(){
    let a = prompt("첫 번째 값",0)
    let b = prompt("두 번째 값",0)
  },
  sum(){
    return this.a + this.b 
  },
  mul(){
    return this.a * this.b
  }
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

#### 체이닝
  * 올라가기(up)와 내려가기(down)메서드를 제공하는 객체 ladder가 있다.
```js
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
    alert( this.step );
  }
};
```
  * 메서드를 연이어 호출하고자 한다면 아래와 같이 코드를 작성할 수 있다.
```js
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```
  * up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해보자.
```js
ladder.up().up().down().showStep(); // 1
```

```js
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1
// return this를 해야만 하단 호출 처럼 동작하게 되는지 모르겠습니다 ㅠㅠ 
```
