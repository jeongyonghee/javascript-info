// 다음 각 동작을 한 줄씩, 코드로 작성해보세요.
// 1. 빈 객체 user를 만듭니다.
// 2. user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
// 3. user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// 4. name의 값을 Pete로 수정해보세요.
// 5. user에서 프로퍼티 name을 삭제하세요.

let user = {}

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// alert 창으로 user.name를 출력하면 undefined가 출력되는데 console.log 로 user 를 출력하면 정상적으로 출력됩니다. 하지만 똑같이
// user.name을 출력 시 undefined가 출력되는데 이유가 뭔지 궁금합니다.

// 객체가 비어있는지 확인하기
// 객체에 프로퍼티가 하나도 없는 경우 true 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.
// 아래와 같이 동작해야 합니다.
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



fucntion isEmpty(obj){
  if(obj === undefined){
    return true;
  } else{
    return false;
  }
}
// 이렇게 작성해보았는데 틀린건가요?? 


// 변하지 않는 객체
// const와 함께 선언한 객체를 변경하는게 가능할까요? 생각을 공유해주세요!

const user = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";
// 에러없이 정상적으로 실행됩니다. user를 수정한 것이 아닌 user.name을 수정했기 때문에

// 프로퍼티 합계 구하기
// 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

// 모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요.
// sum엔 390이 저장되어야겠죠? 
// 주의 : salaries가 비어있다면 sum에 0이 저장되어야 합니다.

let sum = salaries.John + salaries.Ann + salaries.Pete
 
// 이렇게 작성하면 안되는건가요???? 

// 프로퍼티 값 두 배로 부풀리기
// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두배 해주는 함수 multiplyNumeric(obj)을 만들어 보세요.
// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

// multiplyNumeric은 아무것도 반환하지 않아도 괜찮습니다. 객체 자체를 수정해주기만 하면 됩니다.
// 힌트) typeof를 사용하면 프로퍼티 값이 숫자인지 확인할 수 있습니다. 
function multiplyNumeric(menu){
  if(menu == typeof.Number){
    menu *2;
  }
}
// 이부분은 코드를 아예 못짠거 같습니다 ㅠㅠ 왜 for in 반복문이 나오는지를 모르겠습니다....
