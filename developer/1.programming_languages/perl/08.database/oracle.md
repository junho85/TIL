# perl - oracle

## Installation
```
cpan DBD::Oracle
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