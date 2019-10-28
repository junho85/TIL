# mongodb - dump & restore

* mongodump 명령어를 이용합니다.

## mongodump 명령어 설치
* mongodb 설치 했으면 bin 디렉토리에 생김
* osx 에서 mongodb 설치 하면 mongodump 도 생김
```
$ which mongodump
/usr/local/bin/mongodump
```

## dump
전체 덤프
```
mongodump --host 127.0.0.1
```

특정 컬렉션만 덤프


## References
* [MongoDB 백업하고 복구하기 2012.05.29](https://blog.outsider.ne.kr/790)
* [](https://docs.mongodb.com/manual/reference/program/mongodump/)