# JavaScript Date

## moment
* https://momentjs.com/
* cdn - https://cdnjs.com/libraries/moment.js/

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
```

## diff days
* date 끼리 빼주면 된다.
* 기념일이나 꾸준히 몇일째 인지 구하려면 +1 해주면 된다.
```javascript

function diffDays(baseDay, today) {
    return (today - baseDay) / 24 / 60 / 60 / 1000;
}

const startDay = new Date('2018-10-15');
const today = new Date('2019-01-22');

console.log(diffDays(startDay, today));
```

## yyyymmdd 포멧
* javascript Date 객체에 날짜를 yyyymmdd 포멧으로 리턴하는 함수 추가 하는 예제

```javascript
Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1;
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

var date = new Date();
date.yyyymmdd();

```

output
```javascript
"20180703"
```

## hhmmss 포멧
* javascript Date 객체에 날짜를 hhmmss 포멧으로 리턴하는 함수 추가 하는 예제

```javascript
Date.prototype.hhmmss = function() {
  var hh = this.getHours();
  var mm = this.getMinutes();
  var ss = this.getSeconds();

  return [(hh>9 ? '' : '0') + hh,
          (mm>9 ? '' : '0') + mm,
          (ss>9 ? '' : '0') + ss,
         ].join('');
};

var date = new Date();
date.hhmmss();
```

output
```javascript
"165731"
```

## 정리
* [javascript - date yyyymmdd, hhmmss, yyyymmddhhmmss, yyyymmddhhmm 2018.07.11](https://junho85.pe.kr/999)

## References
* [자바스크립트에서 타임존 다루기 (2) 2017.10.20](https://meetup.toast.com/posts/130)
* https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/parse