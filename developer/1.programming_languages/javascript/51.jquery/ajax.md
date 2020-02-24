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

## file
FormData

### References
* [[JQUERY]ajax로 파일 업로드 2015-08-11](http://b1ix.net/213)