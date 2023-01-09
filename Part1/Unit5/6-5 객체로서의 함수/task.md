#### 임의의 수만큼 있는 괄호를 이용해 합계 구하기
  * 다음과 같이 작동하는 함수 sum을 만들어보세요.
```js
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
```
  * 힌트 : 해당 함수 내부에서 쓸 수 있는 객체 - 원시형으로의 형 변환을 직접 구현해야 할 수도 있다.
  * 내가 쓴 정답 : 매개변수로 전달받는 인수가 여러개이므로 함수안의 함수를 만들어서 구현해보려고함 
```js
function sum(a){
  const result1 = a;
  function sum2(b){
  const result2 = b;
  return result1 + result2
  }
 }
```

  * 정답 :
  * 1.sum은 함수를 반환해야만 이 모든 것이 의도한 대로 동작
  * 2.sum이 반환하는 함수는 호출될 때마다 현재 값을 메모리에 저장하고 있어야함
  * 3.함수는 ==를 만났을 때 숫자가 되어야 한다. 함수는 객체이므로 객체-원시형으로의 형 변환이 일어날 텐데 이때 메서드를 직접 구현해 원하는 대로 객체-원시형으로의 형 변환이
  * 일어나게 할 수 있다.

```js
function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15
```
