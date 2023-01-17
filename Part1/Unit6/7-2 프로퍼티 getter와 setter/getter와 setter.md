#### 프로퍼티 getter와 setter
  * 객체의 프로퍼티는 두 종류로 나뉜다.
  * 1.데이터 프로퍼티 : 지금까지 사용한 모든 프로퍼티는 데이터 프로퍼티다.
  * 2.접근자 프로퍼티 : 접근자 프로퍼티의 본질은 함수다 이 함수는 값을 획득(get)하고 설정(set)하는 역할 담당 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보인다.

#### getter와 setter
  * 접근자 프로퍼티는 getter(획득자)와 setter(설정자) 메서드로 표현된다. 객체 리터럴안에서 getter와 setter메서드는 get과 set으로 나타낸다.
  * 예시 :
```js
let obj = {
  get propName() {
    // getter, obj.propName을 실행할 때 실행되는 코드
  },

  set propName(value) {
    // setter, obj.propName = value를 실행할 때 실행되는 코드
  }
};
```
  * getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행 setter메서드는 obj.propName = value로 프로퍼티에 값을 할당하려 할 때 실행된다.
  * 예시2 : name과 surname이 있는 객체 user를 만드는데 이 객체에 fullName이라는 프로퍼티를 추가해 fullName을 만들 때 접근자 프로퍼티를 구현하면 된다.
```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
```
  * 바깥 코드에선 접근자 프로퍼티를 일반 프로퍼티처럼 사용할 수 있다.(user.fullName 처럼 접근 가능)
  * 위 예시에선 getter메서드만 가지고 있기 때문에 user.fullName = 처럼 할당하려고 하면 에러가 발생한다. 이때 setter메서드를 사용하면 에러가 발생하지 않는다.
  * 예시 : 

```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// 주어진 값을 사용해 set fullName이 실행
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

#### 접근자 프로퍼티 설명자
  * 접근자 프로퍼티는 다음과 같은 설명자를 갖는다.
  * get : 인수가 없는 함수로 프로퍼티를 읽을 때 동작
  * set : 인수가 하나인 함수로 프로퍼티에 값을 쓸 때 호출
  * enumerable : 데이터 프로퍼티와 동일
  * configurable : 데이터 프로퍼티와 동일
  * defineProperty에 설명자 get과 set을 전달하면 fullName을 위한 접근자 생성가능
  * 예시 :
```js
et user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```

#### getter와 setter 활용
  * getter와 setter를 실제 프로퍼티 값을 감싸는 래퍼처럼 사용하면 프로퍼티 값을 원하는 대로 통제할 수있다.
  * 예시 :
```js
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete
```

#### 호환성을 위해 사용하기
  * 접근자 프로퍼티는 언제 어느 때나 getter와 setter를 사용해 데이터 프로퍼티의 행동과 값을 원하는대로 조정 가능하다.
