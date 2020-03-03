# AJP, mod_jk
* AJP 는 Apache JServ Protocol 의 약자이다.


## References
* [AJP 프로토콜](https://iam-song.tistory.com/74)
  * Apache Jserv 프로토콜은 바이너리 형태의 데이터를 네트워크로 전송하도록 개발된 프로토콜이다.
  * TCP와 패킷 기반의 프로토콜로 웹 서버 성능이 증가된다.
  * AJP 프로토콜은 mod_jk와 mod_proxy로 구성되어 있다.
  * mod_jk - 아파치 서버를 톰캣과 통합할 때 사용하는 커넥터
  * mod_jk는 아파치 서버 뒤에 톰캣을 숨기고 URL 접근할 때 포트 번호를 제거하는데 유용
  * httpd.conf mod_jk 설정
```
LoadModule jk_module modules/mod_jk.so # mod_jk 모듈 로딩
JkWorkersFile conf/workers.properties # jk 모듈 실행을 위해 선언된 속성 값 (실행 대상 이름 등)
JkLogFile logs/mod_jk.log # mod_jk 모듈 실행중 발생하는 로그를 기록하는 파일 선언
JkLogLevel INFO # INFO 이상의 레벨에 대해 로깅
JkMount /* node  # 도메인/* url로 접근한 경우 톰캣으로 재전송
```
  * workers.properties
```
worker.list=node # 실행할 노드 서버 이름
worker.node.port=9000 # 톰캣에서 ajp 요청을 몇 번 포트로 허용할 것인가?
worker.node.host=127.0.0.1 # 톰캣 호스트 ip
worker.node.type=ajk13 # 사용 중인 프로토콜 (기본이 ajp)
```
* [Apache JServ Protocol](https://en.wikipedia.org/wiki/Apache_JServ_Protocol)
