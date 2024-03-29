#### finally 아니면 코드만?
  * 두 코드 조각을 비교해보세요.
  * 1.첫 번째 코드 조각은 try..catch 이후에 코드를 실행하기 위해 finally를 사용했다.
  * 예시 :
```js
try {
  작업
} catch (e) {
  에러 핸들링
} finally {
  작업 내역 삭제
}
```
  * 2.두 번째 코드 조각에선 try..catch 바로 아래에 작업 내역을 삭제하는 코드를 놓았다.
  * 예시 :
```js
try {
  작업
} catch (e) {
  에러 핸들링
}

작업 내역 삭제
```
  * 현재 상황은 에러의 유무와 상관없이 작업 후 초기화를 해야한다.
  * finally를 사용하면 이점이 있을까? 아니면 두 코드 조각은 동일하게 동작할까 만약 이점이 있다면 이점이 드러나는 예시를 제시해 주세요.


  * 정답 : 두 코드 조각은 동일하게 동작하지만 작업상 finally로 작업하는게 더 매끄럽다고 생각한다.
  * 해답 : 함수 내부의 코드를 보면 차이점이 분명하다. 
  * try..catch에 빠져나오게 하는 코드가 있다면 함수의 행동이 달라진다. 
  * try..catch 내부에 return이 있을 때 finally절은 return문을 통해 try..catch를 빠져나가는 경우를 포함 종료되는 모든 상황에서 실행된다. 종료되고 나서도 함수 호출 코드가 제어권을 갖기 직전에 실행된다.
