#### counter는 독립적인가
  * makeCounter를 사용해 counter와 counter2 를 만들었습니다.
  * 두 counter는 독립적일까요? 두 번째 카운터는 0,1이나 2,3 중 어떤 숫자를 얼럿창에 띄워줄까요? 다른 결과가 출력될까요?
```js
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
```
  
  * 정답 : 두 카운터는 각각 독립적이며 두 번째 카운터 또한 0,1 이 출력된다.(O)

#### counter 객체
  * 생성자 함수를 이용해 counter 객체를 만들었다.
  * 아래 예시는 잘 동작할까? 결과는 어떨까
```js
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
```
  * 정답 : 잘 동작 하며 1,2,1 출력 (O)

#### if문 안의 함수
  * 아래 예시의 실행 결과를 예측해보세요.

```js
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
```
  * 정답 : Hello John 출력 (X)
  * 에러가 발생한다.
  * sayHi는 if문 안에서 정의했기 때문에 오직 if문 안에서만 접근할 수 있다. if문 밖엔 sayHi가 없다.

#### 클로저를 이용하여 합 구하기
  * sum(a)(b) = a+b와 같은 연산을 해주는 함수 sum을 만들어 보기
  * 두개의 괄호를 사용해서 만들기
```js
sum(1)(2) = 3
sum(5)(-1) = 4
```
  * 정답 :

```js
function sum(a){
  return function(b){
    return a+b
  }
}
console.log(sum(1)(2));
console.log(sum(5)(-1));
```

#### 함수를 이용해 원하는 값만 걸러내기
  * 배열에 사용할 수 있는 내장 메서드 arr.filter(f) 는 함수 f의 반환 값을 true로 만드는 모든 요소를 배열로 반환해준다.
  * filter에 넘겨서 사용할 수 있는 함수 두 가지를 만들어보기.
  * inBetween(a,b) : a이상 b이하
  * inArray([...]) : 배열안에 있는 값인가
  * 위 함수를 활용하면 다음과 같은 결과가 나와야 한다.
  * arr.filter(inBetweeen(3,6)) : 3과 6사이에 있는 값만 반환함
  * arr.filter(inArray([1,2,3]) : [1,2,3] 안에 있는 값과 일치하는 값만 반환함
  * 예시

```js
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
```
  * 내가 쓴 정답 :
```js
let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a,b){
  for(let i = 0; i < arr.length; i++){
    return arr[i] >= a && arr[i] <= b;
  }
}

console.log(arr.filter(inBetween(3, 6)))

let arr = [1, 2, 3, 4, 5, 6, 7];
function inArray(arr){
  for(let i = 0; i < arr.length; i++){
    return arr.includes(i) 
  }
}

console.log(arr.filter(inArray([1, 2, 10])))
```

 * 해답 :
```js
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
```

#### 필드를 기준으로 정렬하기
   * 객체가 담긴 배열을 정렬해야한다고 가정
```js
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
```
  * 아래와 같은 방법을 사용해 정렬할 수 있다.
```js
// 이름을 기준으로 정렬(Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// 나이를 기준으로 정렬(Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
```
  * 여기에 함수를 하나 만들어서 정렬하면 더 깔끔해 질 수 있다.
```js
users.sort(byField('name'));
users.sort(byField('age'));
```
  * 함수를 직접 만들어 sort에 넘기는 것보다 byField(fieldName) 을 넘기는 것 처럼
  * 필드를 기준으로 정렬을 도와주ㅡ는 함수 byField를 만들어 보기

  * 정답 :
```js
function byField(fieldName){
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
```

#### 함수를 사용해 군대 만들기
  * 아래 코드는 shooters가 요소인 배열을 만들어 준다.
  * 모든 함수는 몇 번째 shooter인지 출력해줘야하는데 무언가 잘못됐다.
```js
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function() { // shooter 함수
      alert( i ); // 몇 번째 shooter인지 출력해줘야 함
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // 0번째 shooter가 10을 출력함
army[5](); // 5번째 shooter 역시 10을 출력함
// 모든 shooter가 자신의 번호 대신 10을 출력하고 있음
```
  * 왜 모든 shooter가 동일한 숫자를 출력하는지 이유를 설명하고 제대로 된 번호가 출력될 수 있게 코드를 수정하시오.

  * 정답 : while 문을 돌려 조건이 명확하지 않아 출력된다.

```js
function makeArmy() {
  let shooters = [];

  for(let i=0; i<10; i++) {
    let shooter = function() { 
      console.log( i ); 
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();
army[0](); 
army[5]();
```
