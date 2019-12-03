# perl - oracle

## Installation
```
cpan DBD::Oracle
```

그런데 설치 도중 ORACLE_HOME 을 못찾겠다는 둥 오류가 날 수 있다. 그럴 때는 oracle client basic, devel, sqlplus 들을 설치 해 준다. RPM 으로 설치 하는게 편하다. yum 으로 설치 하면 yum list 에도 등록 되니 yum 으로 설치 하는게 무난하다.

centos
```
sudo yum install oracle-instantclient11.2-basic-11.2.0.4.0-1.x86_64.rpm
sudo yum install oracle-instantclient11.2-sqlplus-11.2.0.4.0-1.x86_64.rpm
sudo yum install oracle-instantclient11.2-devel-11.2.0.4.0-1.x86_64.rpm
```


```
sudo cpanm --mirror-only --mirror http://ftp.daumkakao.com/CPAN/ DBD::Oracle --notest --verbose --force
```

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

## References
* [osx - DBD::Oracle 설치 2018.10.05](https://junho85.pe.kr/1102)
* [](https://en.wikibooks.org/wiki/Perl_Programming/DBI_-_Perl_database_interface)