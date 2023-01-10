#### 일초 간격으로 숫자 출력하기
  * from에 명시한 숫자부터 to에 명시한 숫자까지 출력해주는 함수 printNumbers(from, to)를 만들어 보세요.
  * 숫자는 일초 간격으로 출력되어야 한다.
  * 두가지 방법으로 만들기
  * 1.setInterval을 이용한 방법
  * 2.중첩setTimeout을 이용한 방법
  * 정답 : 
```js
function printNumbers(from,to){
  const a = from;
  const timer = setInterval(()=>{
    alert(a);
    if(a == to){
      clearInterval(timer);
    }
    a++
  },1000)
}
printNumbers(1,5)
```

#### setTimeout은 무엇을 보여줄까요?
  * 아래 코드에선 setTimeout을 이용해 호출을 스케줄링하고 있다. 그런데 그 아래 코드에선 실행 시간이 100ms이상
  * 걸리는 무거운 작업을 하고 있어 이런 경우 setTimeout에 넘겨준 함수는 언제 실행될까
  * 1.반복문 실행 후
  * 2.반복문 실행 전
  * 3.반복문이 실행되는 시점
  * 얼럿창엔 어떤 값이 출려될까?
  * 예시 :
```js
let i = 0;

setTimeout(() => alert(i), 100); // ?

// 아래 반복문을 다 도는 데 100ms 이상의 시간이 걸린다고 가정합시다.
for(let j = 0; j < 100000000; j++) {
  i++;
}
```
  * 정답 : 반복문 실행 전 얼럿창엔 0이 출력된다.
  
  * 해답 : 실행중인 코드의 실행이 종료되었을 때 실행 반복문 실행이 종료되고 난 후 i는 100000000 이므로
  * 100000000 출력
