#### JSON과 메서드 
  * 복잡한 객체를 다루는 도중 네트워크를 통해 객체르 어디간에 보내거나 로깅 목적으로 객체를 출력해야 한다면 객체를 문자열로 전환해야 한다.
  * 이때 전환된 문자열엔 원하는 정보가 있는 객체 프로퍼티 모두가 포함되어야 한다.
  * 예시 : 메서드를 구현해 객체를 문자열로 전환해보기
```js
let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};

alert(user); // {name: "John", age: 30}
```
  * 이때 프로퍼티가 추가되거나 삭제 수정되면 toString을 매번 수정해야하는데 이럴 때 사용하는 것이 JSON

#### JSON.stringify
  * JSON은 값이나 객체를 나타내주는 범용 포맷
  * 라이브러리를 사용하면 자바스크립트가 아닌 언어에서도 JSON 다루기 가능 데이터 교환 목적으로 사용한다.(클라이언트 측 언어가 자바스크립트 일 때)
  * JSON 관련 메서드
  * JSON.stringfy : 객체를 JSON으로 바꿔준다.
  * JSON.parse : JSON을 객체로 바꿔준다.
  * 예시 : 객체 student에 JSON.stringify 적용
```js
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // 문자열이네요!

alert(json);
/* JSON으로 인코딩된 객체:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```
  * JSON.stringify 를 사용하면 문자열로 바뀐다.
  * 이렇게 변경된 문자열은 JSON으로 인코딩된, 직렬화 처리된, 문자열로 변환된, 결집된 객체라고 부른다.
  * 객체는 문자열로 변환되어야 네트워크 전송, 저장소에 저장이 가능하다.
  * JSON으로 인코딩된 객체는 일반 객체와 다른 특징을 보인다.
  * 문자열은 큰 따옴표로 감싸야한다. JSON에선 작은따옴표, 백틱 사용 불가
  * 객체 프로퍼티 이름(key)은 큰따옴표로 감싸야한다.
  * JSON.stringify는 객체뿐만 아니라 원시값에도 적용 가능
  * 적용할 수 있는 자료형의 예시
  * 1.객체 
  * 2.배열
  * 3.원시형(문자형, 숫자형, 불린형 값, null)
  * 자바스크립트 특유의 객체 프로퍼티는 JSON.stringify가 처리할 수 없다.
  * JSON.stringify 호출 시 무시되는 프로퍼티
  * 1.함수 프로퍼티(메서드)
  * 2.심볼형 프로퍼티(키가 심볼인 프로퍼티)
  * 3.값이 undefined인 프로퍼티

  * JSON.stringify는 중첩객체도 알아서 문자열로 바꿔준다.
  * 다만 순환 참조(객체끼리 서로 참조할 때) 는 원하는 대로 문자열로 변환 불가.

#### replacer로 원하는 프로퍼티만 직렬화 하기
  * JSON.stringify의 전체 문법
  * let json = JSON.stringify(value[, replacer, space])
  * value : 인코딩  하려는 값
  * replacer : JSON으로 인코딩 하길 원하는 프로퍼티가 담긴 배열 또는 매핑함수 function(key,value)
  * space : 서식 변경 목적으로 사용할 공백 문자 수 
  * 대다수의 경우 인수를 하나만 넘겨서 사용하지만 순환 참조를 다뤄야 하는 경우 같이 전환 프로세스 정교하게 조정하려면 두 번쨰 인수 사용
  * JSON으로 변환하길 원하는 프로퍼티가 담긴 배열을 두 번째 인수로 넘겨주면 이 프로퍼티들만 인코딩할 수 있다.
  * 예시
```js
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
```
  * replacer 자리에 배열 대신 함수를 전달해 배열이 긴 문제를 해결 할 수 있다.
  * replacer에 전달되는 함수는 프로퍼티(키,값) 쌍 전체를 대상으로 호출되는데 반드시 기존 프로퍼티 값을 대신하여 사용할 값을 반환해야 한다.
  * 특정 프로퍼티를 직렬화에서 누락시키려면 반환 값을 undefined로 만들면 된다.
  * 예시 : occupiedBy를 제외한 모든 프로퍼티의 값을 변경없이 그대로 직렬화 한 것 (직렬화란 것이 이해가지 않습니다)
```js
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup은 room을 참조합니다
};

room.occupiedBy = meetup; // room은 meetup을 참조합니다

alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

/* replacer 함수에서 처리하는 키:값 쌍 목록
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
*/
```
  * replacer 함수는 재귀적으로 키-값 쌍을 처리 함수 내에서 this는 현재 처리하고 있는 프로퍼티가 위치한 객체를 가리킨다.
  * 첫 얼럿창에 문자열 ":[object Object]" 가 뜨는 것은 함수가 최초 호출 시 {"":meetup} 형태의 래퍼 객체가 만들어지기 때문
  * replacer 함수가 가장 처음으로 처리해야하는 key,value 쌍에서 키는 빈 문자열 value는 변환하고자 하는 객체(meetup) 전체가 된다.

#### space로 가독성 높이기
  * 세 번째 인수 space는 가독성을 높이기 위해 중간에 삽입 줄 공백 문자 수를 나타낸다.
  * space는 가독성을 높이기 위한 용도 단순 전달 목적이라면 space없이 직렬화 하는 편이다.
  * 예시 : space에 2를 넘겨주면 자바스크립트는 중첩 객체를 별도의 줄에 출력 공백 문자 두 개를 써 들여쓰기 해준다.
```js
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
/* 공백 문자 두 개를 사용하여 들여쓰기함:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* JSON.stringify(user, null, 4)라면 아래와 같이 좀 더 들여써집니다.
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
```

#### 커스텀 toJSON
  * toString 처럼 객체에 toJSON 을 사용하면 JSON으로 변경할 수 있다. 
  * JSON.stringify 는 이런 경우를 감지 toJSON을 자동으로 호출해준다.
  * 예시: Date 객체의 내장 메서드 toJSON 이 호출되면서 date의 값이 문자열로 변환된다.
```js
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/
```
  * 예시(2) : room에 직접 커스텀 메서드 toJSON을 추가하기
```js
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
```
#### JSON.parse
  * JSON.parse 를 사용하면 JSON으로 인코딩된 객체를 다시 객체로 디코딩 할 수 있다.
  * 문법 : let value = JSON.parse(str, [reviver]);
  * str : JSON형식의 문자열
  * reviver : 모든(key,value) 쌍을 대상으로 호출되는 function(key,value) 형태의 함수로 값을 변경시킬 수 있다.
  * 중첩 객체에도 사용 가능하다.
  * 예시
```js
// 문자열로 변환된 배열
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1
```
#### reviver 사용하기 (잘 모르겠습니다 ㅠㅠ )
  
  
