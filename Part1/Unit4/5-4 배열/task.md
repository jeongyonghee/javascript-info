#### 배열은 복사가 될까
  * 아래 코드를 실행하면 어떤 결과가 나올까요?
```js
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert( fruits.length ); // ?
```
  * 4 배열은 객체이기 때문에 추가된 바나나로 인해 length는 4가된다.

#### 배열과 관련된 연산
  * 배열과 관련된 다섯가지 연산을 해보자
  * 1. 요소 "Jazz", "Blues" 가 있는 styles 배열을 생성
  * 2. "Rock-n-Roll" 을 배열 끝에 추가한다.
  * 3. 배열 정 중앙에 있는 요소를 "Classics"로 바꾼다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동하여야함
  * 4. 배열의 첫 번째 요소를 꺼내서 출력한다.
  * 5. "Rap"과 "Reggae"를 배열의 앞에 추가한다.
  * 단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 한다.
```js
/* Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll */
```

```js
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[1] = "Classics" ; // 정답은  styles[Math.floor((styles.length - 1) / 2)] = "Classics"; 인데 이해가 가지 않습니다.
alert(styles.shift()); // 
styles.unshift("Rap","Reggae")
```

#### 배열 컨텍스트에서 함수 호출하기
  * 아래 코드를 실행하면 어떤 결과가 나올까? 그리고 그 이유는 무엇일까요?
```js
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
// undefined가 출력된다? 이유는 this가 정의된게 없어서
// a,b,function(){} 을 출력한다 ( 이 부분은 잘 모르겠습니다)
```

#### 입력한 숫자의 합 구하기
  * 아래 조건을 만족하는 함수 sumInput()을 작성해봅시다.
  * prompt 창을 띄워 사용자에게 숫자를 입력해달라고 요청 입력받은 값들을 배열에 저장
  * 숫자가 아닌 값 혹은 빈 문자열을 입력하거나 취소 버튼을 누르면 질문을 멈춘다.
  * 배열 요소의 합을 계산하고 리턴한다.
  * 주의 : 숫자 0은 유효한 숫자이므로 사용자가 0을 입력하더라도 질문이 멈추지 말아야한다.
```js
function sumInput(){
  let a = []
  a = prompt("숫자를 입력해주세요",0) 
  if(isNaN == a || a == ''){
      alert(a) 
  }else{
    a += a
  }
}
sumInput()
// 이 부분은 코드짜기가 너무 어려운 것 같습니다 계속해서 질문을 띄워주는 방법? 을 잘모르겠습니다 
```

#### 최대합 부분 배열
  * 입력값은 arr = [1, -2, 3, 4, -9, 6] 같이 숫자로만 구성된 배열
  * 우리가 해야 할 일은 인접한 요소의 총합이 최대인 arr의 부분 배열을 찾는 것
  * 부분 배열 요소들의 합을 리턴하는 함수 getMaxSubSum(arr)을 작성해보자
```js
// 예시
getMaxSubSum([-1, 2, 3, -9]) == 5 (강조 표시된 요소들의 합)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (모든 요소)
```

  * 요소 전체가 음수라면 아무런 요소도 선택하지 않아야 최댓값이 된다.(부분 배열은 빈 배열) 그리고 합은 0이 된다.
```js
getMaxSubSum([-1, -2, -3]) = 0;
```
  * 가능하다면 성능을 고려하여 답안 작성 
  * 이 부분은 문제부터 이해가 가지 않아 시도를 못하였습니다 ㅠㅠ... 
