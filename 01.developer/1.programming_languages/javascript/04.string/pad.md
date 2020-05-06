# pad
## padStart
앞에 0을 붙여 주고 싶다면.

```javascript
"1".padStart(2, '0') // "01"
```

```javascript
"01".padStart(2, '0') // "01"
"10".padStart(2, '0') // "10"
```


## References
* [String.prototype.padStart()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
  * Internet Explorer 은 No support 라고 나옴.
* [숫자1을 두자리 숫자를 01, 세자리수를 001등으로 표현하고 싶다면](https://programmers.co.kr/learn/questions/52)
```
function pad(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
```
```
pad(10, 4);      // 0010
pad(9, 4);       // 0009
pad(123, 4);    // 0123
pad(1234, 4);   // 1234
```
* [숫자 앞에 자릿수를 맞추기 위한 0을 넣기](https://hashcode.co.kr/questions/1317/%EC%88%AB%EC%9E%90-%EC%95%9E%EC%97%90-%EC%9E%90%EB%A6%BF%EC%88%98%EB%A5%BC-%EB%A7%9E%EC%B6%94%EA%B8%B0-%EC%9C%84%ED%95%9C-0%EC%9D%84-%EB%84%A3%EA%B8%B0)