#### 사전에 toString 추가하기
  * key/value 쌍을 저장하기 위해 Object.create(null)로 생성된 dictionary 객체가 있다.
  * 그 안에 쉼표로 구분된 키 목록을 반환하는 dictionary.toString() 메서드를 추가하십시오. toString은 객체 위의 for..in에 나타나서는 안된다.
  * 작동 방식은 다음과 같다.
```js
let dictionary = Object.create(null);

// dictionary.toString 메서드를 추가하는 코드

// 데이터를 추가합니다.
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__는 여기서 일반적인 프로퍼티 키입니다.

// 반복문에는 apple과 __proto__ 만 있습니다.
for(let key in dictionary) {
  alert(key); // "apple" 다음 "__proto__"입니다.
}

// toString이 동작하는 부분입니다.
alert(dictionary); // "apple,__proto__"
```
  * 정답 : 
  * 해답 : 
```js
let dictionary = Object.create(null, {
  toString: { // toString 프로퍼티를 정의합니다.
    value() { // value는 함수입니다.
      return Object.keys(this).join();
    }
  }
});
```

#### 호출 간의 차이점
  * 새로운 rabbit 객체를 만들어 보자
```js
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");
```
  * 아래와 같이 메서드를 호출하면 동일하게 동작할지 다르게 동작할지 예상해 보시오.
```js
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
```
  * 정답 : 
  * 해답 : this는 실제 점 앞에 있는 객체를 나타내기 때문에 첫 번째 호출에선 this가 rabbit이고 다른 호출에선 Rabbit.prototype입니다.
  * 따라서 첫 번째 호출만이 Rabbit을 출력하고 다른 호출은 undefined를 출력합니다.
```js
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined
```
