# mariadb

## create database
```
creae database <database>;
```

e.g. graden 이라는 database 만들기
```
create database garden;
```

## user 추가 하기

```
create user '<userid>>'@'localhost' identified by '<password>';
```

e.g.
```
create user 'garden_admin'@'localhost' identified by 'mypassword';
```

## user 에게 database 권한 주기
```
grant all privileges on <database>>.* TO '<userid>>'@'localhost';
```

e.g.
```
grant all privileges on garden.* TO 'garden_admin'@'localhost';
```

## table 만들기
```
create table <table_name> (
  <column_name> <type> <options>,
  ...
);
```

e.g.
```
create table slack_github (
    id            int auto_increment primary key,
    github_userid varchar(100) not null,
    slack_ts      decimal(16, 6) not null,
    slack_message text         not null
) CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci comment 'github bot message';

create unique index slack_github_github_userid_slack_ts_uindex
	on slack_github (github_userid, slack_ts);

```

### data types
* [Data Types](https://mariadb.com/kb/en/library/data-types/)

#### varchar
* [VARCHAR](https://mariadb.com/kb/en/library/varchar/)
* varchar(M)
  * M 은 숫자인데 최대 길이를 의미함. 0~65532 까지 가능.
* varchar(200) 200자의 글자.
  
#### float?
* [FLOAT](https://mariadb.com/kb/en/library/float/)
* float(16,6) - 총 16자리. 소수점 6자리. (정수 10자리)
  * slack 메시지의 ts 예 1570039829.028700
  * 2019.10.03 그런데 insert 하고 select 해 보니 소수점 안나오던데? 확인 필요. 일단 decmial 로 바꿔서 해결.

#### decimal
* [DECIMAL](https://mariadb.com/kb/en/library/decimal/)
* decimal(16,6) - 총 16자리. 소수점 6자리. (정수 10자리)
  * slack 메시지의 ts 예 1570039829.028700


#### text
* [TEXT](https://mariadb.com/kb/en/library/text/)
* 65535 (2^16 - 1) 이 최대 길이

#### mediumtext
* [MEDIUMTEXT](https://mariadb.com/kb/en/library/mediumtext/)
* 16,777,215 (2^24 - 1) 이 최대 길이 