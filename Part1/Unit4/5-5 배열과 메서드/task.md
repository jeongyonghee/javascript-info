#### border-left-width를 borderLeftWidth 로 변경하기
  * my-short-string 같이 여러 단어를 대사 - 로 구분한 문자열을 카멜 표기법을 사용한 문자열
  * myShortString 으로 변경해 주는 함수를 작성해보세요
  * 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.
  * 예시
```js
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
```
  * 힌트 : split을 사용해 문자열을 배열로 바꾼 다음 join을 사용해 다시 합치면 된다.
  * (해답을 봐도 잘 모르겠습니다..)


#### 특정 범위에 속하는 요소 찾기
  * 배열 arr의 요소 중 a이상 b이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고
  * 해당 요소를 출력해주는 함수 filterRange(arr,a,b)를 작성해봅시다.
  * 새로 작성하는 함수는 기존 배열 arr을 변경하면 안되고, 반환되는 함수는 새로운 배열이어야 합니다.
  * 예시
```js
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)
```

```js
let arr = [5, 3, 8, 1]

let abc = function filterRange(arr, a, b) {
   return arr.filter((item)=>{item >= a && item <= b})
};
alert(abc(arr,1,4));
// 이렇게 작성했는데 제대로 동작하지 않습니다 이유를 모르겠습니다
// filter 에 대해서 한번 설명해주시면 감사하겠습니다 filterRange에 세 인수의 역할? 이 헷갈립니다
```

#### 내림차순으로 정렬하기
```js
let arr = [5, 2, 1, -10, 8];

// 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.
arr.sort((a,b) => {b - a}); // 제가 원래 쓰던 화살표 함수는 이런식으로 작성했는데
arr.sort((a,b) => {return b - a}); 
// return 과 중괄호를 함께 제거해주는건 알겠지만 return을 쓰지 않으니 결과가 달라지는 이유를 모르겠습니다
// 화살표 함수 안에 return을 쓸때와 안 쓸때를 구분하기가 너무 어려운것 같습니다 반환한다는 것은 알겠지만 
// 언제 반환 값이 필요한지가 헷갈립니다.
arr.sort((a,b) => b - a);
alert( arr ); // 8, 5, 2, 1, -10
```

#### 배열 복사본을 정렬하기
  * 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. arr은 변경되면 안됩니다.
  * 함수copySorted(arr)는 복사 후 정렬된 배열을 반환해야한다.
```js
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
```

```js
let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(a){
   return arr.slice().sort()
}

alert(copySorted(arr));
```
#### 확장 가능한 계산기
  * 기능을 확장 할 수 있는 계산기 객체를 만들어 주는 생성자 함수 Calculator를 작성해봅시다.
  * Calculator는 두 단계를 거쳐 만들 수 있습니다.
  * 1. 1+2 와 같은 문자열을 받아서 숫자 연산자 숫자 형태(공백으로 구분)로 바꿔주는 메서드 calculate(str) 를 구현 하는 것
  * 이 함수는 +와 -를 처리할 수 있어야 하고 연산 결과를 반환해야 한다.
  * 예시
```js
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
```
  * 2. 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 addMethod(name, func) 를 추가해 주는 것
  * 연산자 이름을 나타내는 name과 인수가 두개인 익명 함수 func(a,b) 를 받는 새 메서드를 구현해야한다.
  * 구현된 메서드를 이용해 곱셈과 나눗셈 거듭제곱 연산자를 추가해주는 예시는 아래와 같다.
```js
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
```
  * 참고 사항 : 괄호나 복잡한 표현식 없이도 본 과제를 풀 수 있다.
  * 숫자와 연산자는 공백 하나로 구분한다.
  * 에러핸들링을 위한 코드를 추가해도 좋다.
```js
// 이 문제는 접근을 못하겠습니다 ㅠㅠㅠㅠㅠ
```
 
#### 이름 매핑하기
  * name을 나타내는 프로퍼티를 가진 객체 user 가 담긴 배열이 있습니다. name의 값만 담은 새로운 배열을 만들어 주는 코드를 작성
  
```js
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
// 배열안에 변수를 집어 넣을때 는 그냥 집어넣으면 되는건가요?? 

let names = users.map((i)=>{return i.name})

alert( names ); // John, Pete, Mary
```

#### 객체 매핑하기
  * 세개의 프로퍼티 name과 surname id를 가진 객체 user가 담긴 배열이 있습니다.
  * name과 surname을 조합해 fullName을 만들고 이를 이용해 두 개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운
  * 배열을 반환해주는 코드를 작성해보세요.
```js
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map((i) => 
  fullName : i.name + i.surname
  id : i.id
) 
// 이렇게 작성했는데 어느 부분이 잘못된건지 모르겠습니다 
// 배열안에 객체를 생성하려고 하니 생각보다 많이 어려운 것 같습니다.
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
```

#### 나이를 기준으로 객체 정렬하기
  * 프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수
  * sortByAge(users) 를 만들어 보세요
```js
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

let sortByAge = arr.age.sort()

sortByAge();
// 이렇게 했을 때 안되는 이유가 뭔지 모르겠습니다. 아니면
// arr.map((i)=>{return i.age.sort()}) 이렇게 하는것도 안되어서 해답을봐도 이해가 잘 가지 않습니다
```

  * 배열 부분은 다시 공부하고 과제를 해보겠습니다 풀면서 이해가지 않는 부분들이 너무 많아 다시 한번 공부해야할 것 같습니다 ㅠㅠ
  
