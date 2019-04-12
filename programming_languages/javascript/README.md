# JavaScript (ECMAScript)
* ECMAScript 가 정식명칭이다. JavaScript 는 Netscape 에서 명명 했었고, Microsoft 에서는 JScript 라고 명명 했었다.
* 넷스케이프에서 JavaScript 를 만들었는데, MS JScript 처럼 변종들이 생기면서 넷스케이프가 ECMA 라는 기관에 표준 제작을 넘김.
* ECMA 는 자바스크립트의 표준화를 맡으면서 자바상표권 분쟁을 피하려고 ECMAScript 라는 명칭을 택함.

## Ecma International
* https://www.ecma-international.org/

## ECMA-262. ECMAScript (JavaScript)
* https://www.ecma-international.org/publications/standards/Ecma-262.htm

### 최신버전
* https://tc39.github.io/ecma262/

### 프로포절
* Stage 0: Strawman. 뼈만 있는 상태
* Stage 1: Proposal. 어느 정도 형태를 갖춤.
* Stage 2: Draft. 형태를 거의 다 갖춤.
* Stage 3: Candidate. 형태를 전부 갖춤.
* Stage 4: Finished. 다음 해 표준에 도입 확정.

### 버그 신고
* https://github.com/tc39/ecma262#ecmascript

* 2017.09.18 20th birthday - https://www.ecma-international.org/news/ECMA-262%2020th%20birthday.htm


## Template literals (Template strings). backtick

일반 텍스트
```javascript
`string text`

```

멀티 라인 텍스트
```javascript
`string text line 1
 string text line 2`
```

템플릿
```javascript
string text ${expression} string text`
```
expression 이라는 변수의 값이 ${expression} 에 들어간다고 보면 된다.

tag
```javascript
tag `string text ${expression} string text`
```

```javascript
var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster
```

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

## References
* [미래의 자바스크립트, ESNext 2018.07.26](http://it.chosun.com/site/data/html_dir/2018/07/25/2018072501553.html)
