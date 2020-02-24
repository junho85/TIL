# javascript split
* separator 로 지정된 문자를 기준으로 문자열을 잘라서 배열로 리턴한다.
* separator 은 2자 이상도 가능하다.
* 없는 값을 참조 하면 undefined 이다.
* limit 을 지정하면 limit 까지만 값을 구하고 나머지는 버린다.

```javascript
const assert = require('assert');

// normal
assert.deepStrictEqual("hello-world".split("-")[0], "hello");
assert.deepStrictEqual("hello-world".split("-")[1], "world");

// 3 length separator
assert.deepStrictEqual("hello-+xworld".split("-+x")[0], "hello");
assert.deepStrictEqual("hello-+xworld".split("-+x")[1], "world");

// limit
assert.deepStrictEqual("nice-to-meet-you".split("-", 1)[0], "nice");
assert.deepStrictEqual("nice-to-meet-you".split("-", 1)[1], undefined);

// out of range - undefined
assert.deepStrictEqual("hello-world".split("-")[2], undefined);
```

## split string and get two variables in one line
```javascript
const [left, right] = "hello-world".split("-");
console.log(left, right); // hello world
```

## split large string in n-size chunks
* 긴 문자열을 일정 길이로 나누기
```javascript
"1234567890".match(/.{1,2}/g);
// Results in:
["12", "34", "56", "78", "90"]
```

```javascript
"123456789".match(/.{1,2}/g);
// Results in:
["12", "34", "56", "78", "9"]
```

* https://stackoverflow.com/questions/7033639/split-large-string-in-n-size-chunks-in-javascript

## References
* https://www.w3schools.com/jsref/jsref_split.asp
* https://stackoverflow.com/questions/3522406/javascript-split-string-straight-to-variables
