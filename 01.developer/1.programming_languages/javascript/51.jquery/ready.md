# jquery - ready, onload
* 페이지가 다 로드 되고 ready 상태가 되면 호출하는 부분.
* html 문서에 있는 DOM 이 다 생성 될 때 부리기 위함.

## $(document).ready()
```javascript
// A $( document ).ready() block.
$(document).ready(function() {
    console.log( "ready!" );
});
```

```javascript
// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );
});
```

## References
* [$(document).ready()](https://learn.jquery.com/using-jquery-core/document-ready/)