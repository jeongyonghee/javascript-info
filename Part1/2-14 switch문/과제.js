// switch 문을 if 문으로 변환하기
// switch 문을 사용해 작성된 아래 코드를 if..else 문을 사용한 코드로 변환해 보세요.

switch (browser) {
  case 'Edge':
    alert( "Edge를 사용하고 계시네요!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
    break;

  default:
    alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
}

if(browser == 'Edge'){
  alert("Edge를 사용하고 계시네요!")
}else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || broser == 'Opera'){
  alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
}
else{
  alert('현재 페이지가 괜찮아 보이길 바랍니다!'
}
  
        
// else if 부분의 조건을 이런식으로 작성하면 안되나요? (browser == ('Chrome' || 'Firefox' || 'Safari' || 'Opera') ) 
        

// if 문을 switch 문으로 변환하기
// 아래 코드를 switch 문을 사용한 코드로 바꿔보세요. switch 문은 하나만 사용해야합니다.
        
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
 
  
let a = +prompt('a?', '');
  switch(a){
    case 0 :
      alert(0);
      break;
    
    case 1 : 
      alert(1);
      break;
      
    case 2 :
    case 3 :
      alert('2,3');
      break;
  }
  
 // prompt 앞에 + 를 붙이는 이유가 뭔지 궁금합니다!
