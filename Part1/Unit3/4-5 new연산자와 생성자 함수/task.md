# 이 파트에 대해서 혹시 설명이 가능하실까요? 이 파트는 유독 더 어려워서 전반적으로 이해를 하지 못했습니다 ㅠㅠ

#### 함수 두개로 동일한 객체 만들기
  * new A() == new B()가 성립 가능한 함수 A와 B를 만드는게 가능할까요?

```js
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
```
  * 만약 가능하다면 실행 가능한 예시를 작성해 보세요.
  * (가능은 할 것 같지만 예시를 작성하지 못하겠습니다)

#### 계산기 만들기
  * 아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.
  * read() - prompt 함수를 이용해 사용자로부터 값 두개를 받고 객체 프로퍼티에 저장한다.
  * sum() - 프로퍼티에 저장된 값 두 개를 더한 후 반환한다.
  * mul() - 프로퍼티에 저장된 값 두 개를 곱한 후 반환한다.
```js
function Calculator() {
  this.read = function(){
    this.a = prompt("첫 번째 값",0);
    this.b = prompt("두 번째 값",0);
  };
  this.sum  = function(){
    return this.a + this.b;
  }
  this.mul = function(){
    return this.a * this.b
  }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
// 이 문제에 있어서 this를 사용한다는 생각을 못했습니다 this를 사용하지 않은 방식으로는 구현할 수 있을 것 같으나 
// 바로 this를 써야지 라는 생각을 하기가 어렵습니다 ㅠㅠ
```

#### 누산기 만들기
  * 생성자 함수 Accumulator(startingValue) 를 만들어 보자
  * Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건 충족
  * 1. 프로퍼티 value에 현재 값을 저장 최초 호출 시엔 생성자 함수의 인수 startingValue에서 시작값을 받아온다.
  * 2. 메서드 read()에선 prompt 함수를 사용해 사용자로 부터 숫자를 받아오고 받은 숫자를 value에 더해준다.
  * 프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장된다.

```js
function Accumulator(startingValue){
  this.vlaue = startingValue;
  this.read = function(){
    this.value += +prompt('더할 값을 입력해주세요.', 0);
    // this.value = this.value + prompt("값",0)); 이렇게 입력하면 의도대로 동작하지 않는데 이유를 모르겠습니다
  }
}
let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함
```
