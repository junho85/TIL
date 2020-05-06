# RFC822 STANDARD FOR THE FORMAT OF ARPA INTERNET TEXT MESSAGES

## 1. INTRODUCTION

### 1.1 SCOPE

### 1.2 Communication Framework

## 2. NOTATIONAL CONVENTIONS

## 3. LEXICAL ANALYSIS OF MESSAGES (메시지의 어휘적 해석)

### 3.1 General Description (일반설명)
* 메시지는 머리영역과 선택적인 본문으로 구성된다. 본문은 단순히 ASCII 문자들을 포함하는 라인들의 연속이다. 이것은 널 라인에 의해 머리로부터 분리되어있다(예, CRLF를 진행시키지 않는 한 라인).

#### 3.1.1 긴 머리영역
* 각 머리영역은 영역이름과 영역텍스트를 이루는 ASCII 문자의 단일하고, 논리적인 라인으로 볼 수 있다. 편의를 위해, 이 개념적인 실체의 영역텍스트 부분은 다중 라인의 표현으로 나누어 질 수 있다. 이것은 "중첩(folding)"으로 불리운다. 일반적인 규칙은 선형-백색-공간(linear-white-space)(간단한 LWSP-문자가 아닌)이 있을 수 있는 곳마다, 최소한 하나의 LWSP-문자가 뒤따르는 한 개의 CRLF가 대신 삽입될 수 있다. 따라서, 단일 라인
```
To: "Joe & J. Harvey" <ddd @Org>, JJV @ BBN
```
은 다음과 같이 나타날 수 있다.
```
To: "Joe & J. Harvey" <ddd @Org>,
         JJV @ BBN
```
그리고
```
To:  "Joe & J. Harvey"
                <ddd@ Org>, JJV
 @BBN
```
그리고
```
To:  "Joe &
 J. Harvey" <ddd @ Org>, JJV @ BBN
```
* 머리영역의 이 중첩된 다중 라인 표현으로부터 단일라인 표현으로 전환하는 과정은 "중첩해제(unfolding)"라고 부른다. 중첩해제는 LWSP-문자가 뒤 따르는 CRLF를 LWSP-문자와 동등하게 여김으로써 이루어진다.
* 주: 선형-백색-공간이 허용되는 곳에서, 표준안은 중첩을 허용하지만, 주소를 포함하는 것과 같은, 구조화된 영역들이 상위레벨의 구문적인 단락으로 제한하도록 권고된다. 주소영역에 대해서는, 그러한 중첩이 주소들 사이에서, 분리하는 컴마뒤에 일어날 것이 권고된다.

#### 3.3.1.2 머리영역의 구조

## References
* [RFC 822 - STANDARD FOR THE FORMAT OF ARPA INTERNET TEXT MESSAGES](http://www.faqs.org/rfcs/rfc822.html)