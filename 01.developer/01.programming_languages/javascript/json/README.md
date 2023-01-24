# json

## json pretty
json string 을 좀 더 보기 좋게 만들어 주는 방법

```
var jsonString = '{"name":"junho85","address":"some where"}';
var jsonPretty = JSON.stringify(JSON.parse(jsonString), null, 2);
```

결과
```
{
  "name": "junho85",
  "address": "some where"
}
```