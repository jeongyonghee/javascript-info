#### switch 문

  * if 조건문은 switch문으로 바꿀 수 있다.
  * switch문을 사용한 비교법은 특정 변수를 다양한 상황에서 비교할 수 있게 해준다. 

#### 문법
  
  * switch 문은 하나 이상의 case 문으로 구성됨 
  * switch(x){
  * case 'value1' : // if ( x === 'value1') 
  * ...
  * [break]
  * 변수 x의 값과 첫 번째 case 문의 값 'value1' 를 일치 비교한 후 case 문의 값 'value2' 와 비교합니다. 이런 과정은 계속 이어집니다.
  * case 문에서 변수 x의 값과 일치
  * case 문에서 변수 x의 값과 일치하는 값을 찾으면 해당 case 문의 아래의 코드가 실행됩니다. 이때, break 문을 만나거나 switch 문이 
  * 끝나면 코드의 실행은 멈춥니다.
  * 값과 일치하는 case 문이 없다면, default 문 아래의 코드가 실행됩니다(default 문이 있는 경우). 

#### 예시 
  
  * let a = 2 + 2;
  * switch (a) { 
  *  case 3:
  *    alert('비교하려는 값보다 작습니다.');
  *    break;
  *  case 4:
  *    alert('비교하려는 값과 일치합니다.');
  *    break;
  *  case 5:
  *    alert('비교하려는 값보다 큽니다.');
  *    break;
  *  default:
  *    alert('어떤 값인지 파악이 되지 않습니다.');
  *  } 

  * break 문이 없을 시 조건에 부합하는지 여부를 따지지 않고 이어지는 case 문 실행

#### 여러 개의 case 문 묶기 

  * 코드가 같은 case 문은 한군데 묶을 수 있다.

#### 자료형의 중요성

  * 일치 비교로 조건 확인 비교하려는 값과 case문의 값의 형과 값이 같아야 case문 실행
  * prompt 문을 사용할때 숫자를 사용해도 문자열로 반환. case 3 : 일 경우 숫자 3을 prompt 창에 입력해도 코드 실행 x 
  * case '3':  일 경우 실행 
