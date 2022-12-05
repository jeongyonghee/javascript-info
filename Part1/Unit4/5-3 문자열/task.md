#### 첫 글자를 대문자로 변경하기
  * str의 첫 글자를 대문자로 바꿔 반환하는 함수 ucFirst(str)를 만들어 보세요.
  * 함수 실행결과는 아래 예시를 충족해야 한다.
```js
function ucFirst(a){
  return a[0].toUpperCase() + a.slice(1)
  /* 여기서 return과 slice문을 빼고 어퍼케이스로 a 첫글자를 대문자로 바꾼 뒤 그냥 return a를 하면 
  왜 수정되지 않은 john이 출력되는건가요? */
}

alert(ucFirst("john"));
// 이렇게 작성해보았는데 이건 안되는건가요? 

```

#### 스팸 문자열 걸러내기
  * str에 viagra나 XXX라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요. 해당 문자열이 없으면 false 반환
  * 함수는 대 소문자 관계없이 해당 단어를 걸러주어야 한다.
```js
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
```

```js
function checkSpam(a){
  let b = a.toLowerCase();
  if(b.includes("viagra") || b.includes("XXX")){
    return true;
  }else{
    return false;
  }
}
alert(checkSpam('buy ViAgRA now')); 
alert(checkSpam('free xxxxx')); 
alert(checkSpam("innocent rabbit")); 

// 이렇게 코드를 짜보았는데 여기서 왜 free xxxxx는 false 가 출력되는지 모르겠습니다.
```

#### 문자열 줄이기
  * str의 길이를 확인하고 최대 길이 maxlength를 초과하는 경우 str의 끝을 생략 부호("~")로 대체해주는 함수
  * truncate(str, maxlength) 를 만들어 봅시다. 새로 만든 문자열의 길이는 maxlength가 되어야 합니다.
  * 함수의 반환 값은 원하는 길이로 줄여진 문자열이 되어야 한다.
```js

```

```js
function truncate(str,maxlength){
  if(str.length > maxlength){
     return str.slice(0, maxlength -1) + '...'
  }else{
     return str
  }
}
alert(truncate("What I'd like to tell on this topic is:", 20)) 

alert(truncate("Hi everyone!", 20)) 
```

#### 숫자만 추출하기
  * 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 $120 이 있다고 가정
  * 위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)을 작성해 보자
  * 실행 결과는 아래와 같아야 한다.
```js
alert(extractCurrencyValue('$120') === 120);
```

```js
function extractCurrencyValue(str){
  return str.slice(1);
  // 해답에는 +str.slice(1); 이라고 되어있는데 더하기 연산자를 쓴 이유가 숫자열로 변환시키기위해서인가요?
}
alert(extractCurrencyValue('$120')) 
```
