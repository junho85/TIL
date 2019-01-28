# Lodash
* https://lodash.com/
```
A modern JavaScript utility library delivering modularity, performance & extras.
```

* https://en.wikipedia.org/wiki/Lodash
```
Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.
```

위의 설명들 처럼, Lodash 는 여러 유용한 유틸리티 함수들을 제공하는 라이브러리이다. functional programming 패러다임을 이용하여 만들어졌다.

## 사용예로 보는 lodash
```javascript
_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// → { 'a': 1, 'b': 2 }
_.partition([1, 2, 3, 4], n => n % 2);
// → [[1, 3], [2, 4]]
```

## lodash 설치
브라우저에서
```html
<script src="lodash.js"></script>
```

npm
```
$ npm i -g npm
$ npm i --save lodash
```

node.js
```
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
```

## 기타 - leetcode
* leetcode 는 PS 사이트 중 하나이다.
* leetcode 에서 javascript 로 문제를 풀려고 하면 lodash.js 라이브러리가 기본적으로 추가 되어 있다고 나온다.
