# python configuration

## configparser
* python 3 에서는 configparser
* python 2 에서는 ConfigParser
* config 파일에서 설정값을 가져 올 때 사용하는 모듈이다.

config.ini
```ini
[DEFAULT]
USERNAME = junho85
PASSWORD = 123456
```

config_test.py
```python
import configparser

config = configparser.ConfigParser()
config.read('config.ini')

username = config['DEFAULT']['USERNAME']
password = config['DEFAULT']['PASSWORD']

print(username) # junho85
print(password) # 123456
```

## DEFAULT 주의
* DEFAULT 가 아닌 곳의 list 데이터 조회 해서 가져왔는데 for loop 돌면서 찍어 보면 DEFAULT 정보도 같이 나옴.


## 정리
* [python - configparser 기본 사용법 2019.11.11](https://junho85.pe.kr/1452)

### References
* [파이썬에서 설정값 관리하기](https://mingrammer.com/ways-to-manage-the-configuration-in-python/)
* [Python 2.7.17 - 13.2. ConfigParser — Configuration file parser](https://docs.python.org/2/library/configparser.html)
* [configparser — Configuration file parser](https://docs.python.org/3/library/configparser.html)