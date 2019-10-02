# docker 로 개발용 DB 세팅

## MySQL

## MariaDB
* https://hub.docker.com/_/mariadb

docker 로 mariadb 설치
```
$ docker run --name mymariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mypassword -d mariadb
```

접속
```
$ mysql -uroot -pmypassword -h127.0.0.1
```

docker 내려간 경우 start
```
$ docker start mymariadb
```

## postgresql
* https://hub.docker.com/_/postgres

docker 로 postgresql 설치
```
$ docker run --name garden-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

## References
* [Docker로 개발용 DB 만들기 2018.05.18](https://gongzza.github.io/docker/db-sample/)
  * oracle
    * https://hub.docker.com/r/wnameless/oracle-xe-11g/
    `$ docker run --name oracle-db -p 1521:1521 -d wnameless/oracle-xe-11g`
  * mysql
    * https://hub.docker.com/_/mysql/
  * mariadb
    * 