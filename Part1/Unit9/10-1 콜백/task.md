#### 콜백을 이용한 움직이는 원
  * 과제 Animated circle에서 점점 커지는 원을 만들어 보았다.
  * 원 안에 메시지를 보여줘야 하낟고 가정했을 때 이때 메시지는 애니메이션이 다 끝나고 난 후 즉 원이 완전히 커지고 난 후에 나타나야 한다.
  * 그렇지 않으면 뭔가 이상해보인다.
  * 과제 Animated circle의 해답에 있는 함수 showCircle(cx, cy, radius) 은 원을 그려주긴 하지만 애니메이션이 다 끝났는지 아닌지를 알려주는 기능은 없다.
  * 함수 showCircle에 showCircle(cx, cy, radius, callback) 처럼 콜백 인수를 추가해 애니메이션이 종료되면 이 콜백이 실행되도록 해보자. 단 이때 callback은 원에 대응하는 <div>를 반드시 인수로 받아야한다.
  * 완성된 함수는 다음과 같이 사용할 수 있어야 한다.
```js
  showCircle(150, 150, 100, div => {
  div.classList.add('message-ball');
  div.append("안녕하세요!");
});
```
  * 해답 : 
```js
  function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("안녕하세요!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    }, 0);
  }
```
