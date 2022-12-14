#### 읽음 상태인 메시지 저장하기
  * 메시지가 저장되어 있는 배열이 있습니다.
```js
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
```
  * 여러분이 작성하고 있는 코드를 사용해 이 배열에 접근할 수 있지만 메시지를 관리하는 건 다른 코드에서 이뤄지고 있는 상황입니다.
  * 새로운 메시지가 있으면 배열에 추가되고 오래된 메시지는 배열에서 삭제되지만 이런 작업은 외부 코드에 의해 이뤄지고 있기 때문에
  * 여러분은 언제 메시지가 추가/삭제되는지 알 수 없는 상황이죠
  * 이와 같은 상황에서 읽음 상태의 메시지는 어떤 자료구조에 저장해야 좋을까요? 특정 메시지 객체를 대상으로 메시지가 읽음 상태인가요?
  * 라는 질문을 던지면 제대로 된 답이 반환되는 자료구조는 무엇일까요?
  * 주의 : messages에서 특정 메시지가 삭제되면 여러분이 구현할 자료구조에서도 해당 메시지가 삭제되어야 합니다.
  * 주의 : 메시지 객체에 프로퍼티를 추가하는 것과 같이 메시지 객체를 수정해선 안 됩니다. 
  * 메시지 객체는 외부코드에서 관리하고 있기 때문에 메시지 객체를 직접 수정하면 예상치 않은 결과가 나타날 수 있습니다.


#### 읽은 날짜 저장하기
  * 배열에 메시지를 저장하고 있다고 가정해 봅시다.
```js
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
```
  * 이번 문제에선 메시지를 언제 읽었나요 라는 질문을 던지면 제대로 된 답이 반환되는 자료구조가 무엇인지 생각해봅시다.
  * 위 문제에선 yes나 no만 저장해도 괜찮았는데 이제는 날짜 정보를 저장해야 하고 이 날짜 정보는 메시지가 가비지 컬렉션의 대상이
  * 되기 전까지만 메모리에 남아있어야 합니다.
  * 참고 : Date라는 내장 클래스의 구현체(객체) 를 사용하면 날짜를 저장할 수 있습니다.

```js

```
