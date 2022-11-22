#### while 반복문
    * while(conditon){
    * // 코드
    * // 반복문 본문(body) 라 불림
    * }
    * condition(조건) 이 truhty 이면 반복문 본문의 코드가 실행
    * while ( i != 0 ) 이 짧게 줄여 while(i) 이 되는 이유를 모르겠습니다. ( i 가 0이 아니면  while(i) 이 어떻게 되는건가요?)
    
    
#### do while 반복문
    * do{
    *   // 반복문 본문
    *} while (condition);
    
    * 본문이 먼저 실행되고 조건을 확인한 후 조건이 truthy인 동안 본문이 계속 실행
    * let i = 0;
    * do { 
    *    alert(i);
    *    i++;
    * } while ( i < 3 ) ;
    * 조건이 truthy 인지 아닌지에 상관없이 본문을 최소한 한 번이라도 실행하고 싶을 때만 사용해야 한다.(대다수의 상황에선 while문 적합)
    
#### for 반복문
    * 가장 많이 쓰이는 반복문
    * for (begin; condition; step){
    * // 반복문 본문 
    * } 
    
    * for(let i = 0; i < 3; i++){
    * alert(i);  // 0,1,2 출력
    * }
    
    * begin i = 0 반복문에 진입할 때 단 한 번 실행
    * condition i < 3 반복마다 해당 조건이 확인 false가 되면 반복문을 멈춘다.
    * body alert(i) condition이 truthy일 동안 계속해서 실행된다.
    * step i++ 각 반복의 body가 실행된 이후에 실행된다.
   #### 구성요소 생략(begin)에 있어 i = 0 일 경우에만 생략이 가능한건지 궁금합니다
   
#### 반복문 빠져나오기
    * break를 사용하면 반복문을 빠져나올 수 있다.
    * 반복문이 즉시 중단되고 반복문 바로 아래 줄로 이동해서 실행
    * 이쪽 예시문이 잘 이해가 안갑니다 +prompt 와 !value sum += value( sum + value 인가요?)
    
    
