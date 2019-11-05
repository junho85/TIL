# python - requests

## installation
```
pip install requests
```

## get
```
import requests
response = requests.get("http://daum.net")
response.text
```

## get with params
```
params = {'name': 'june', 'job': 'developer'}
response = requests.get(URL, params=params)
```

## post with data
```
data = {'name': 'june', 'job': 'developer'}
response = requests.post(URL, data=data)
```

## add headers
```
headers = {'Content-Type': 'application/json'}
response = requests.get(URL, headers=headers)
```

## add cookies
```
cookies = {'session_id': 'some_session_id'}
response = requests.get(URL, cookies=cookies)
```

## post with raw json data
```
import requests, json
data = {'name': 'june'}
response = requests.post(URL, data=json.dumps(data))
```

## response
* text - 응답 텍스트
* status_code - 응답 상태 코드
* request - 요청 정보
* raise_for_status() - 200 OK 가 아닌 경우 에러 발생시킴
* json() - json response일 경우 딕셔너리로 변환해서 리턴. 잘 되는건지 모르겠음. 에러 났을 때는 아닌가?

## 응답받은 값이 json 인 경우 dictionary 로 바꾸기
response.json() 이 속도도 더 빠르다고 함.
```
import requests

response = requests.get(...)
data = response.json()
```

```
import json
import requests

response = requests.get(...)
json_data = json.loads(response.text)
```



## References
* [https://2.python-requests.org//en/master/user/quickstart/](https://2.python-requests.org//en/master/user/quickstart/)
* [Python requests 모듈 간단 정리 2016.08.10](https://dgkim5360.tistory.com/entry/python-requests)
* [What's the best way to parse a JSON response from the requests library?](https://stackoverflow.com/questions/16877422/whats-the-best-way-to-parse-a-json-response-from-the-requests-library)