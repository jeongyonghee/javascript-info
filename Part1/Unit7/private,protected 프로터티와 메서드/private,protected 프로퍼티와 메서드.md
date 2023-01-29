#### private, protected 프로퍼티와 메서드
  * 객체 지향 프로그래밍에서 가장 중요한 원리 중 하나는 내부 인터페이스와 외부 인터페이스를 구분 짓는 것이다.
  * 복잡한 애플리케이션을 구현하려면 내부 인터페이스와 외부 인터페이스를 구분하는 방법을 반드시 알아야 한다. 

#### 내부 인터페이스와 외부 인터페이스
  * 객체 지향 프로그래밍에서 프로퍼티와 메서드는 두 그룹으로 분류된다.
  * 1.내부 인터페이스 : 동일한 클래스 내의 다른 메서드에선 접근 가능 클래스 밖에선 접근 불가한 프로퍼티와 메서드
  * 2.외부 인터페이스 : 클래스 밖에서도 접근 가능한 프로퍼티와 메서드
  * 자바스크립트에는 두 가지 타입의 객체 필드(프로퍼티와 메서드) 가 존재한다.
  * 1.public : 어디서든지 접근가능하며 외부 인터페이스를 구성
  * 2.private : 클래스 내부에서만 접근가능하며 내부 인터페이스를 구성할 때 쓰인다.

#### 프로퍼티 보호하기
  * 예시 :
```js
class CoffeeMachine {
  waterAmount = 0; // 물통에 차 있는 물의 양

  constructor(power) {
    this.power = power;
    alert( `전력량이 ${power}인 커피머신을 만듭니다.` );
  }

}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = 200;
```
  * 프로퍼티 waterAmout와 power는 public이며 손쉽게 원하는 값으로 변경할 수 있다.
  * protected로 변경하려면 프로퍼티 명 앞에 밑줄( _ ) 을  붙이면 된다.
  * 예시 :
```js
class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

// 물 추가
coffeeMachine.waterAmount = -10; // Error: 물의 양은 음수가 될 수 없습니다.
```

#### 읽기 전용 프로퍼티
  * 읽기 전용 프로퍼티를 만드려면 setter를 제외한 getter만 만들어야 한다.
  * 예시 : power 프로퍼티를 읽기만 가능하게 만들기
```js
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// 커피 머신 생성
let coffeeMachine = new CoffeeMachine(100);

alert(`전력량이 ${coffeeMachine.power}인 커피머신을 만듭니다.`); // 전력량이 100인 커피머신을 만든다.

coffeeMachine.power = 25; // Error (setter 없음)
```

#### private 프로퍼티
  * private 프로퍼티와 메서드는 앞에 #을 붙이면 되고 #이 붙으면 클래스 안에서만 접근할 수 있다. (외부에서 접근, 변경 불가)
  * private 필드는 public 필드와 상충하지 않아 #waterAmount와 waterAmount를 동시에 가질 수 있다.
