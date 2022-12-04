#### 수를 입력받아 덧셈하기
  * 사용자에게 두 수를 입력받고 두 수의 합을 출력해주는 스크립트를 작성하기
  * 자료형에 주의하여 작성

```js 
let first = +prompt("첫 번째 숫자","");
let second = +prompt("두 번째 숫자","");

function plus(){
  let result = first + second
  alert(result)
  // 여기서 result 변수 에 넣지 않고 alert 부분이 없다고 했을 때 return first + second 이렇게만 작성하고 함수를 호출하면 안되나요?  
}
plus()
```

#### 6.35.toFixed(1) == 6.3인 이유는 무엇일까요?
  * Math.round와 toFixed는 둘 다 가장 가까운 어림수를 구해준다. 0 ~ 4는 버리고 5~ 9 는 올려준다
```js
alert( 1.35.toFixed(1) ); // 1.4
```
  * 위 예시와 유사한 아래의 경우 6.35가 6.4가 아닌 6.3으로 반올림 되는 이유는 무엇일까?
```js
alert( 6.35.toFixed(1) ); // 6.3
```
  * 어떻게 하면 6.35를 제대로 반올림할 수 있을까?
  * 6.35는 내부적으로 2진법 무한 소수이기 때문에 문제가 발생한다 반올림하기전에 이 수를 정수에 가깝게 만들어야함
```js
alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(반올림됨) -> 6.4
```

#### 숫자를 입력할 때까지 반복하기
  * 사용자가 유효한 숫자형 값을 입력할 때까지 계속 입력받는 함수 readNumber 를 만들어보세요.
  * 반환되는 값은 꼭 숫자형 값이어야 한다.
  * 사용자가 아무 입력도 하지 않거나 취소를 누르면 입력받기를 멈추고 null을 반환하기

```js
let a = +prompt("숫자를 입력해주세요","0");

function readNumber(){
  if(isNaN(a)){
     // 여기서 잘 입력하면 의도에 맞게 코드를 짤 수 있을 것 같은데 방법을 모르겠습니다... 
  }else if(a =='' || a == null)  {
      return alert("Read" +":"+ null)
  }else{
      return alert("Read" +":"+ a)
  }
}
readNumber()

// 원래의 해답은 do while을 사용하였지만 do while이 어려워 if 문으로 구현하고 싶었습니다
function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Read: ${readNumber()}`);

```

