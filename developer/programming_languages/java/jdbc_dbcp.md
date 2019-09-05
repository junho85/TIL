# JDBC, DBCP

## JDBC (Java DataBase Connectivity)
* 자바에서 DB 에 연결하기 위한 인터페이스
* oracle, mysql, mssql 등에서 JDBC를 사용하기 위한 각각의 Driver를 제공함.

## DBCP (DataBase Connection Pool)
* 커넥션을 맺고 있는 객체를 관리함

### DBCP, DBCP2 설정
* maxActive(maxTotal in DBCP2): Connection Pool이 최대로 가질 수 있는 커넥션의 개수
* minIdle: Connection Pool이 최소로 가질 수 있는 커넥션의 개수
* timeBetweenEvictionRunsMillis: DBCP의 Eviction thread가 깨어

### DBCP2


## References
* [JDBC, DBCP란? 웹 어플리케이션의 DB접속에 대한 고찰 2018.07.02](https://aljjabaegi.tistory.com/402)
* [Commons DBCP 이해하기 2015.10.21](https://d2.naver.com/helloworld/5102792)