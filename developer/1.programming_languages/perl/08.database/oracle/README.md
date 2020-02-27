# perl - oracle

## Installation
```
cpan DBD::Oracle
```

### oracle instantclient 설치가 필요하다면
그런데 설치 도중 ORACLE_HOME 을 못찾겠다는 둥 오류가 날 수 있다. 그럴 때는 oracle client basic, devel, sqlplus 들을 설치 해 준다. RPM 으로 설치 하는게 편하다. yum 으로 설치 하면 yum list 에도 등록 되니 yum 으로 설치 하는게 무난하다.

centos 에서 oracle isntantclient 설치
```
sudo yum install oracle-instantclient11.2-basic-11.2.0.4.0-1.x86_64.rpm
sudo yum install oracle-instantclient11.2-sqlplus-11.2.0.4.0-1.x86_64.rpm
sudo yum install oracle-instantclient11.2-devel-11.2.0.4.0-1.x86_64.rpm
```

만약 삭제 하고 싶으면
```
sudo yum remove oracle-instantclient11.2-basic-11.2.0.4.0-1.x86_64
sudo yum remove oracle-instantclient11.2-sqlplus-11.2.0.4.0-1.x86_64
sudo yum remove oracle-instantclient11.2-devel-11.2.0.4.0-1.x86_64
```

```
sudo cpanm --mirror-only --mirror http://ftp.daumkakao.com/CPAN/ DBD::Oracle --notest --verbose --force
```

### 

## module
```
use DBI;
use DBD::Oracle;
```

## connection
host, port 로 접속하기
```
my $dsn = "DBI:Oracle:host=$host;port=$port;sid=$sid";
$self->{dbh} = DBI->connect($dsn, $username, $password) || die "Could not connect to database: $DBI::errstr";
```

tns 로 접속하기
```
my $dsn = "DBI:Oracle:$sid";
$self->{dbh} = DBI->connect($dsn, $username, $password) || die "Could not connect to database: $DBI::errstr";
```

## 환경변수

### TNS_ADMIN
* TNS_ADMIN
  * tnsnames.ora 파일의 위치는 TNS_ADMIN 환경변수로 결정된다.
* 참고
  * [Oracle 환경 변수](https://www.ibm.com/support/knowledgecenter/ko/SSEPGG_11.1.0/com.ibm.data.fluidquery.doc/topics/iiylsorcenvvars.html)
  * [환경 변수들이 모두 올바른 데도 character set 에 문제가 있는 경우](http://dbtech.co.kr/bbs/?bo_c=1040&bo_v=121)
  
### ORA_NLS
* ORA_NLS
  * 7.2 ORA_NLS
  * 7.3 ORA_NLS32
  * 8.x, 9.x ORA_NLS33
  * 10.x, 11.x ORA_NLS10
* 참고
  * [ORA_NLS33, ORA_NLS10 그리고 Characterset](https://talkativelee.tistory.com/24)

## References
* [osx - DBD::Oracle 설치 2018.10.05](https://junho85.pe.kr/1102)
* [Perl Programming/DBI - Perl database interface](https://en.wikibooks.org/wiki/Perl_Programming/DBI_-_Perl_database_interface)
