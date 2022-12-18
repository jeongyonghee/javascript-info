#### 구조 분해 할당
  * 아래와 같은 객체가 있다고 가정해봅시다.
```js
let user = {
  name: "John",
  years: 30
};
```
 * 구조 분해 할당을 사용해 아래 미션을 수행해 보세요.
 * name 프로퍼티의 값을 변수 name에 할당하세요.
 * years 프로퍼티의 값을 변수 age에 할당하세요.
 * isAdmin 프로ㅓ퍼티의 값을 변수 isAdmin에 할당하세요. isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.
 * 미션을 달성하면 아래 예시를 제대로 실행할 수 있게 됩니다.

```js
let user = { name: "John", years: 30 };

// 할당 연산자 좌측에 답안을 작성하시면 되겠죠?
let {name, years: age, isAdmin = false} = user;
alert(name);
alert(age);
alert(isAdmin);
```

#### 최대 급여 계산하기
  * 급여 관련 정보가 저장된 객체 salaries가 있다고 가정해 봅시다.
```js

```
