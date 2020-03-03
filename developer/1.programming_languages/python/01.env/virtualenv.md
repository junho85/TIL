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

## 뭔가 깨진거 같으면 재생성
* python 이 버전업 되거나 알수 없는 이유로 venv 에 있는 모듈을 불러 오지 못하는 경우가 생긴다.
* 이럴때는 그냥 재생성 해 주면 된다.
```
virtualenv venv
```

다음과 같이 할 수도 있음.
```
/usr/local/bin/python3 -m virtualenv venv
```

## 참고
* [Virtualenv](https://virtualenv.pypa.io)
