# jquery - ajax
* [jQuery.ajax()](https://api.jquery.com/jquery.ajax/)


## jQuery.getJSON()
* [jQuery.getJSON()](https://api.jquery.com/jQuery.getJSON/)

```
$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});
```
의 축약 형태

jQuery 3.0 에서 success(), error(), complete() 는 제거됨. done(), fail(), always() 를 사용해야됨.