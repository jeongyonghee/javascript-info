#### SyntaxError 상속
  * 내장된 SyntaxError 클래스를 상속하는 FormatError 클래스를 만들어 보자.
  * 만들어진 클래스에서 message, name, stack을 참조할 수 있어야 한다.
  * 참고 예시 :
```js
let err = new FormatError("formatting error");

alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (SyntaxError 클래스를 상속받았기 때문입니다.)
```
  * 정답 :
```js
class FormatError extends SyntaxError{
    constructor(){
      
    }
}
```

  * 해답 :
```js
class FormatError extends SyntaxError{
  constructor(message){
    super(message);
    this.name = this.constructor.name;
  }
}
let err = new FormatError("formatting error");
alert(err.message); // formatting error
alert(err.name); // FormatError
alert(err.stack); // stack
alert(err instanceof SyntaxError); // true
```
