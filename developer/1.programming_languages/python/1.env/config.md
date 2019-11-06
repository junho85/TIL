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

### References
* [파이썬에서 설정값 관리하기](https://mingrammer.com/ways-to-manage-the-configuration-in-python/)
