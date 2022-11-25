// 화살표 함수로 변경하기
// 함수 표현식을 사용해 만든 아래 함수를 화살표 함수로 바꿔보세요.
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);

let ask = (question, yes, no) =>
  if(confirm(question)) yes()
  else no();
// 이렇게 고치는건 잘못된건가요??

ask("동의하십니까?",()=>alert("동의하셨습니다.");,()=>alert("취소 버튼을 누르셨습니다."););
// 화살표 함수는 꼭 변수에 담아서 사용해야하나요? 리액트에서 onClick={()=>{}} 이렇게 사용한 기억이 있어 궁금합니다!
