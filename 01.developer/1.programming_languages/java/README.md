# Java
## 유용한 자료
### 2018 Java 를 위한, Java 에 의한 도구들
* https://www.slideshare.net/NHNFORWARD/2018-java-java?fbclid=IwAR2lkXJEJSwxjfyl8dYWkAgMriz1m5gFTLtr4smxzzQbHD3CGZC9CnwziDk
* 이상민 모니터링플랫폼개발팀
* NHN FORWARD
* 도구의 구분
  * JVM 진단 도구
    * 실시간 진단 도구
      * JVM 에 붙어서 실시간으로 진단하는 도구
      * jvm-tools, jcmd, jhsdb
    * 사후 진단 도구
      * JVM 문제 발생시 덤프등을 통하여 분석하는 도구
      * 쓰레드 덤프 : TDA, Thread Logic
      * 힙 덤프 : IBM Heap Analyzer, MAT
  * 성능 진단 도구
    * 운영도구
      * TODO...
    * 측정도구
  * 부하 도구
    * 벤치마크 도구
    * 부하 테스트 도구


##

```
[2019-07-05 17:57:42] INFO  org.springframework.web.context.ContextLoader.initWebApplicationContext(ContextLoader.java:325) - Root WebApplicationContext: initialization completed in 2414 ms
7월 05, 2019 6:00:04 오후 org.apache.catalina.util.SessionIdGeneratorBase createSecureRandom
WARNING: Creation of SecureRandom instance for session ID generation using [SHA1PRNG] took [141,343] milliseconds.
```

tomcat 구동이 느려져서 catalina.out 로그를 들여다 보니 Creation of SecureRandom instance 하는데 141초나 걸리고 있다.

* [tomcat 구동 시 /dev/random 블로킹 이슈 2016.08.25](https://lng1982.tistory.com/261)