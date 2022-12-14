#### 디버깅
  * 디버깅은 스크립트 내 에러를 검출해 제거하는 일련의 과정을 의미한다.

#### Sources 패널
  * Chrome 개발자 도구 
  * Sources 탭을 클릭해 Sources 패널을 연다. 
  * Sources 패널은 크게 세 개의 영역으로 구성된다.
  * 왼쪽부터
  * 1. 파일 탐색 영역 - 페이지를 구성하는 데 쓰인 리소스(HTML, JavaScript, CSS 등) 보여준다.
  * 2. 코드 에디터 영역 - 선택한 파일의 소스코드를 보여주고 소스 코드 편집 가능
  * 3. 자바스크립트 디버깅 영역 - 디버깅에 관련된 기능 제공

#### 콘솔
  * 내가 아는 그 콘솔창 간단하게 확인하기 좋고 console.log() 입력으로 반응 확인하기 

#### 중단점(breakpoints) 
  * breakpoints 를 선택하면 자바스크립트의 실행이 중단 되는 지점을 선택 
  * 중단점을 이용하면 중지된 시점에 변수가 어떤 값을 담고 있는지 확인 가능
  * 또한 중지된 시점을 기준으로 명령어 실행 가능(디버깅이 가능해진다라는데 무슨 뜻인지 모르겠습니다 중지를 시켜가면서 어디서 잘못된건지 확인한다는 건가요?)
  * 다수의 중단점을 설정해 놓은 경우 디버깅 영역을 이용하면 
  * 1. 항목을 클릭해 해당 중단점이 설정된 곳으로 바로 이동 가능
  * 2. 체크박스 선택을 해제해 해당 중단점을 비활성화 할 수 있다.]
  * 3. 마우스 오른쪽 버튼을 클릭했을 때 나오는 Remove breakpoint 옵션을 통해 중단점 삭제 가능
  * 4. 이 외에도 다양한 기능 존재  
  * 조건부 중단점 : 줄 번호에 커서를 옮긴 후 마우스 오른쪽 버튼을 클릭 conditional breakpoint 설정 가능 
  * add conditional breakpoint 클릭했을 때 뜨는 작은 창에 표현식을 입력하면 표현식이 참인 경우에만 실행 중지 

#### debugger 명령어
  * function hello(name) {
  *   let phrase = `Hello, ${name}!`;
  *   debugger;  // 여기서 실행이 멈춘다.
  *   say(phrase);
  * }
  * debugger 명령어를 적어주면 중단점을 설정한 것과 같은 효과를 본다.
  * debugger 명령어 사용 시 개발자 도구를 열고 중단점을 설정하지 않아도 된다.

#### 멈추면 보이는 것들
  * 오른쪽 패널 부분 확인.
  * 1.Watch - 표현식을 평가하고 결과를 보여준다. + 버튼을 클릭해 원하는 표현식을 입력하면 중단 시점의 값을 보여준다
  * (중단 시점의 값을 보여준다는게 무슨 뜻인지 모르겠습니다)
  * 2.Call Stack - 코드를 해당 중단점으로 안내한 실행 경로를 역순으로 표시합니다.
  * 실행은 index.html 안에서 hello()를 호출하는 과정 중에 멈췄다. 함수 hello 내에 중단점을 설정했기 때문에 최상단엔 hello가 위치 
  * index.html 에서 함수 hello를 정의하지 않았기 때문 하단엔 anonymous가 출력 ( 전체적으로 무슨 말인지 이해가 안갑니다...)
  * Scope - 현재 정의된 모든 변수를 출력한다.
  * Local은 함수의 지역 변수를 보여준다.
  * Global은 전역 변수를 보여준다.
  * Local 하위 항목으로 this에 대한 정보도 출력된다.

#### 실행 추적하기
  * 재생버튼 - resume 스크립트 실행을 다시 시작한다. 추가 중단점이 없을 경우 실행이 이어진다.
  * -> Step 다음 명령어를 실행한다. 스크립트 전체를 문 단위로 실행할 수 있다. 
  * 부메랑 모양 - Step over : 다음 명령어를 실행하되 함수 안으로 들어가진 않는다. 
  * Step과 유사하지만 다음 문이 함수 호출일 떄 Step과 다르게 동작(alert 같은 내장함수에 해당 x) (뒤의 설명들이 이해가 가지 않습니다..)
  * 아래 화살표 모양 - Step into : 비동기 동작은 무시한다.
  * 위 화살표 모양 - Step out : 실행 중인 함수의 실행이 끝날 때 까지 실행 계속
  * 화살표 / 모양 - 모든 중단점을 활성화/비활성화
  * 일시정지버튼 - 예외 발생 시 코드를 자동 중지시켜주는 기능 활성화/비활성화

#### console.log
  * console.log 함수를 이용하면 원하는 것을 콘솔에 출력할 수 있다.
