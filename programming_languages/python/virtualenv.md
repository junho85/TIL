# python virtualenv
python virtualenv 는 시스템 python 과 격리된 python 환경을 만들어 주는 툴이다. 시스템 python 을 사용하는 것이 아니고 특정 python 환경을 만들어 준다.

## 설치
```bash
$ python3 -m pip install --user virtualenv
```

## env 디렉토리에 virtualenv 만들기
```bash
$ python3 -m virtualenv env
```

## virtualenv 활성화 하기
```bash
source env/bin/activate
```

## 참고
* https://virtualenv.pypa.io
