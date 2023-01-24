# 일반 문자열을 template 문자열로 바꾸는 방법

## eval 을 이용하는 방법
가장 쉽게 사용할 수 있는 방법입니다.
```javascript
let num = 100;
let template_string = "test${num}@test.com";
let result = eval('`'+template_string+'`');
console.log(result);
```

다만 eval 은 보안상의 이유로 사용을 권장하지 않습니다. 참고: [Never use eval()!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!)



```javascript
let num = 100;
let template_string = "`;alert(1);`";
let result = eval('`'+template_string+'`');
console.log(result);
```

```javascript
function convertStringToTemplate(str) {
  // return Function('"use strict";return `' + str + '`')();
  return Function('return `' + str + '`')();
}
let num = 100;
// let template_string = "test${num}@test.com";
let template_string = "`;alert(1);`";
let result = convertStringToTemplate(template_string);
console.log(result);
```
* [Convert a string to a template string](https://stackoverflow.com/questions/29182244/convert-a-string-to-a-template-string)
