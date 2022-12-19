### Date 객체와 날짜
  * Date 객체를 활용하면 생성 및 수정시간을 저장하거나 시간을 측정할 수 있고 현재 날짜를 출력하는 용도로 활용 가능.

#### 객체 생성하기
  * new Date() 를 호출하면 새로운 Date 객체가 만들어진다. 
  * new Date() 는 다음과 같은 형태로 호출
##### new Date() : 인수 없이 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환
```js
let now = new Date();
alert( now ); // 현재 날짜 및 시간이 출력됨
```

##### new Date(milliseconds) 
  * UTC기준(UTC+0) 1970년 1월 1일 0시 0분 0초에서 milliseconds 밀리초 후의 시점이 저장된 Date 객체 반환
```js
// 1970년 1월 1일 0시 0분 0초(UTC+0)를 나타내는 객체
let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// 1970년 1월 1일의 24시간 후는 1970년 1월 2일(UTC+0)임
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```
  * 1970년의 첫날을 기준으로 흘러간 밀리초를 나타내는 정수는 타임스탬프라고 부른다.
  * 타임스탬프를 사용하면 숫자 형태를 간편하게 나타낼 수 있다.
  * new Date(timestamp) 를 사용 특정 날짜가 저장된 Date 객체를 손쉽게 만들 수 있다.
  * date.getTime() 메서드를 사용해 Date 객체에서 타임스탬프를 추출하는것도 가능
  * 예시 : 1970년 1월 1일 이전 날짜에 해당하는 타임스탬프 값은 음수다.
```js
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );
```

##### new Date(datestring)
  * 인수가 하나인데 문자열이라면 해당 문자열은 자동으로 구문 분석된다.
  * 구문 분석에 적용되는 알고리즘은 Date.parse에사 사용하는 알고리즘 과 동일
  * 예시
```js
let date = new Date("2017-01-26");
alert(date);
// 인수로 시간은 지정하지 않았기 때문에 GMT 자정이라고 가정하고
// 코드가 실행되는 시간대(timezone)에 따라 출력 문자열이 바뀝니다.
// 따라서 얼럿 창엔
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// 혹은
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)등이 출력됩니다.
```

##### new Date(year, month, date, hours, minutes, seconds, ms)
  * 주어진 인수를 조합해 만들 수 있는 날짜가 저장된 객체에 반환 첫 번째 두 번째 인수는 필수다.
  * year 는 반드시 네자리 숫자여야 한다. 2013은 괜찮고 98은 괜찮지 않다.
  * month는 0(1월) 부터 11(12월) 사이의 숫자여야 한다.
  * date는 일을 나타내는데, 값이 없는 경우엔 1일로 처리
  * hours/minutes/seconds/ms에 값이 없는 경우엔 0으로 처리된다.
  * 예시
```js
new Date(2011, 0, 1, 0, 0, 0, 0); // 2011년 1월 1일, 00시 00분 00초
new Date(2011, 0, 1); // hours를 비롯한 인수는 기본값이 0이므로 위와 동일
// 최소 정밀도는 1밀리초다.
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 2011년 1월 1일, 02시 03분 04.567초
```

#### 날짜 구성요소 얻기
  * Date 객체의 메서드를 사용하면 연 월 일 등의 값을 얻을 수 있따.
  * getFullYear() : 연도(네 자릿수)를 반환
  * getMonth() : 월을 반환한다.(0이상 11이하)
  * getDate() : 일을 반환한다.(1이상 31이하)
  * getHours(), getMinutes(), getSeconds(), getMiliseconds() : 시, 분, 초, 밀리초 반환
  * getDay() : 일요일을 나타내는 0부터 토요일을 나타내는 6까지의 숫자 중 하나 반환 
  * get 다음에 UTC를 붙여주면 표준시 기준의 날짜 구성요소를 반환해주는 메서드 생성 가능
```js
// 현재 일시
let date = new Date();

// 현지 시간 기준 시
alert( date.getHours() );

// 표준시간대(UTC+0, 일광 절약 시간제를 적용하지 않은 런던 시간) 기준 시
alert( date.getUTCHours() );
```
  * getTime() 과 getTimezoneOffset() 은 표준시 기준의 날짜 구성 요소를 반환해주는 메서드가 없다.

#### 날짜 구성요소 설정하기
  * 아래 메서드를 사용하면 날짜 구성요소를 설정 가능.
  * setFullYear(year, [month], [date])
  * setMonth(month, [date])
  * setDate(date)
  * setHours(hour, [min], [sec], [ms])
  * setMinutes(min, [sec], [ms])
  * setSeconds(sec, [ms])
  * setMilliseconds(ms)
  * setTime(milliseconds) 
  * setTime()을 제외한 모든 메서드는 setUTCHours() 같이 표준시에 따라 날자 구성 요소를 설정해주는 메서드가 있다.
  * setHours와 같은 메서드는 여러 개의 날짜 구성요소를 동시 설정 가능 메서드의 인수에 없는 구성요소는 변경 X
  * 예시  
```js
let today = new Date();

today.setHours(0);
alert(today); // 날짜는 변경되지 않고 시만 0으로 변경됩니다.

today.setHours(0, 0, 0, 0);
alert(today); // 날짜는 변경되지 않고 시, 분, 초가 모두 변경됩니다(00시 00분 00초).
```

#### 자동 고침
  * Date 객체의 자동 고침 기능 : 범위를 벗어나는 값을 설정하려고하면 자동 고침 기능 활성화 값이 자동 수정
  * 예시
```js
let date = new Date(2013, 0, 32); // 2013년 1월 32일은 없습니다.
alert(date); // 2013년 2월 1일이 출력됩니다.
```
  * 자동 고침은 일정 시간이 지난 후의 날짜를 구할 수 있음 
  * 예시
```js
let date = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date ); // 70초 후의 날짜가 출력됩니다.
```
#### Date 객체를 숫자로 변경해 시간차 측정하기
  * Date 객체를 숫자형으로 변경하면 타임스탬프(date.getTime()을 호출시 반환되는 값) 이 된다.
  * 예시
```js
let date = new Date();
alert(+date); // 타임스탬프(date.getTime()를 호출한 것과 동일함)
```

#### Date.now()
  * 현재 타임스탬프를 반환하는 메서드 Date.now() 를 응용하면 시차를 측정할 수 있다.
  * 예시
```js
let start = Date.now(); // 1970년 1월 1일부터 현재까지의 밀리초

// 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` ); // Date 객체가 아닌 숫자끼리 차감함
```

#### Date.parse와 문자열
  * 메서드 Date.parse(str)를 사용하면 문자열에서 날짜를 읽어올 수 있다.
  * 문자열의 형식은 YYYY-MM-DDTHH:mm:ss.sssZ 처럼 생겨야 한다.
  * YYYY-MM-DD : 날짜(연-월-일)
  * T : 구분 기호로 쓰임
  * HH:MM:ss.ssss : 시,분,초,밀리초
  * Z(옵션) : +-hh:mm 형식의 시간대를 나타냄 Z 한 글자인 경우엔 UTC+0을 나타냄
  * YYYY-MM-DD, YYYY-MM, YYYY 같이 더 짧은 문자열 형식도 가능
  * 조건을 만족하면 문자열과 대응하는 날짜의 타임스탬프 반환 조건에 맞지 않으면 NaN 반환
```js
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (타임스탬프)
```
  * Date.parse(str) 을 이용하면 타임스탬프만으로도 새로운 Date 객체 생성가능
```js
let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

alert(date);
```
