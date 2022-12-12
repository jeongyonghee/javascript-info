#### 프로퍼티 값 더하기
  * 급여 정보가 저장되어있는 객체 salaries가 있습니다.
  * Object.values와 for ~ of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어 보세요.
  * salaries가 빈 객체라면 0이 반환되어야 한다.
  * 예시
```js
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
```

```js
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries){
  let result = 0;
  for(let plus of Object.values(salaries)){
    console.log(plus);
    result += plus // (0 + 100) + (0 + 300) + (0 + 250) 이런식으로 동작하는게 맞나요? 
  }
  return result
}
alert(sumSalaries(salaries));
```

#### 프로퍼티 개수 세기
  * 객체 프로퍼티 개수를 반환하는 함수 count(obj)를 만들어보세요.
```js
let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
```
  * 가능한 짧게 코드를 작성해 보기
  * 주의 : 심볼형 프로퍼티는 무시하고 일반 프로퍼티 개수만 세주세요.

```js
let user = {
  name: 'John',
  age: 30
};

function count(user){
  return Object.values(user).length // values 로 호출해도 똑같이 프로퍼티의 개수를 알 수 있지 않나요?
}
alert(count(user));
```
