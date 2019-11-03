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

## References
* [https://2.python-requests.org//en/master/user/quickstart/](https://2.python-requests.org//en/master/user/quickstart/)
* [Python requests 모듈 간단 정리 2016.08.10](https://dgkim5360.tistory.com/entry/python-requests)