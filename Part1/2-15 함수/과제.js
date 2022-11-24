// else는 정말 필요한가요
// 아래 함수는 매개변수 age가 18 보다 큰 경우 true를 반환한다.
// 그 이외의 경우는 컨펌 대화상자를 통해 사용자에게 질문한 후 해당 결과를 반환한다.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('보호자의 동의를 받으셨나요?');
  }
}
// 위 코드에서 else 문을 삭제해도 기존 코드와 동일하게 작동할까?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('보호자의 동의를 받으셨나요?');
}
// 아니면 뭔가 변화가 있을까?
// 콘솔창을 이용해 동일하게 작동하는건 확인했지만 왜 동일하게 작동하는지 이해가 되지 않습니다. 


// ? 나 || 를 사용하여 함수 다시 작성하기
// 아래 함수는 매개변수 age가 18보다 큰 경우  true를 반환한다.
// 그 이외의 경우는 컨펌 대화상자를 통해 사용자에게 질문한 후  해당결과를 반환
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('보호자의 동의를 받으셨나요?');
  }
}
// if 문을 사용하지 않고 동일한 동작을 하는 함수를 한 줄에 작성해보세요.
// 아래 조건을 충족하는 해답 2개 작성
// 1. 물음표 연산자 ? 를 사용하여 본문 작성
// 2. or연산자 || 를 사용하여 본문 작성

function checkAge(age){
  (age > 18) ? true : confirm('보호자의 동의를 받으셨나요?')
}
// return을 작성하지 않으니 작동하지 않는데 return을 써야하는 이유가 궁금합니다.

function checkAge(age){
  (age > 18) || confirm('보호자의 동의를 받으셨나요?')
}
// 위와 동일한 이유가 궁금합니다. 

