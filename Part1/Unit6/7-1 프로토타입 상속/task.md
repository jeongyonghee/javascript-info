#### 프로토타입 이해하기
  * 객체 두 개를 이용해 쌍을 만들고 이를 수정하는 코드가 아래에 있다.
  * 얼럿창에 어떤 값이 나올지 예측해보시오.
```js
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
```
  * 정답 :
  * 1.true : rabbit 자체에 jumps가 있기 때문에 프로토타입을 참조하는 것이 아닌 자체 값 
  * 2.null : rabbit에 있는 jumps를 삭제했기 때문에 프로토타입을 참조해 null 
  * 3.undefined : 프로토타입의 참조값 마저 사라졌기 때문에 정의되지 않은 undefined 

#### 검색 알고리즘
  * 아래 객체를 살펴보자.
```js
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
```

* 1.__ proto __ 를 사용해서 프로퍼티 조회가 pockets -> bed -> table -> head 의 경로를 따르도록 하기
* pockets.pen은 table에 있는 3 bed.glasses는 head에 있는 1이 되어야 한다.
* 2.pockets.glasses로 glasses를 얻는 것이 빠를까 아니면 head.glasses로 얻는 것이 빠를까? 필요하다면 벤치마크를 사용해 성능을 측정해 보시오.

* 정답 : 
```js
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__:head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__:table
  
};

let pockets = {
  money: 2000,
  __proto__: bed
};
```
  *  head.glasses로 값을 얻는게 빠르다. pockets로 얻으려면 거쳐거쳐 가야하기 때문에? 
  *  해답 : 
  *  1. 정답 
  *  2. 모던 엔진에선 객체에서 프로퍼티를 가져오는 것과 객체의 프로토타입에서 프로퍼티를 가져오는 것 사이에 성능적인 차이가 없다.
  *  모던 엔진은 프로퍼티가 어디서 발견됐는지 기억하고 있다가 다음 요청 시 이 정보를 재사용한다.

#### 어디에 프로퍼티가 추가될까?
  * animal을 상속받는 rabbit이 있다.
  * rabbit.eat()을 호출했을 때 animal과 rabbit중 어떤 객체에 full 프로퍼티가 생길까?
```js
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
```
  * 정답 : animal에 full 프로퍼티가 생긴다. 프로토타입 상속엔 this가 안먹힌다(?)
  
  * 해답 : rabbit 점 앞에 있는 객체는 this 이기 때문에 rabbit.eat() 은 rabbit을 변경한다. 
  * 프로퍼티를 찾는것과 실행하는 것은 완전히 다른 일이다.
  * 메서드 eat은 프로토타입에서 찾을 수 있지만 메서드를 실행할 땐 this가 rabbit이 되어 해당 메서드가 실행된다.

#### 왜 햄스터 두 마리 모두 배가 꽉 찼을까
  * hamster 객체를 상속받는 햄스터 speedy와 lazy가 있을 때 
  * 둘 중 한 마리에게만 먹이를 줘도 다른 한 마리의 배 역시 꽉 찹니다. 왜 그럴까 어떻게 하면 이런 이상한 일이 일어나지 않게 할 수 있을까
```js
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// 햄스터 speedy가 음식을 먹습니다.
speedy.eat("apple");
alert( speedy.stomach ); // apple

// 햄스터 lazy는 음식을 먹지 않았는데 배에 apple이 있다고 나오네요. 왜 그럴까요? lazy는 배가 비어있도록 고쳐주세요.
alert( lazy.stomach ); // apple
```
  * 정답 : 프로토타입 상속은 결국엔 참조값을 통한 상속이기 때문에 동일한 햄스터 객체를 참조하기 때문에 한번 변경된 참조값이 유지된다. 

  * 해답 : ...
