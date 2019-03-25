# base64

## Encoder, Decoder 만들기
* https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding 의 예제코드를 이용하면 쉽게 만들 수 있다.
* 아래 코드가 중요 부분이다. base64js 를 이용하면 좀 더 심플하게 만들 수 있는데, 그걸 사용하지 않고 비교적 간단하게 만드는 방법이다.

encoder
```javascript
function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64EncodeUnicode('\n'); // "Cg=="
```

decoder
```javascript
function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

b64DecodeUnicode('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
b64DecodeUnicode('Cg=='); // "\n"
```

* 만든 툴은 http://labs.junho85.pe.kr/devtools/base64.html 에서 확인 할 수 있다.
  * bootstrap, jquery 로 ui 를 구성하였다.