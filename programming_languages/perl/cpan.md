# cpan
* cpan 은 perl modules 을 설치 할 때 사용하는 유틸이다.

## OSX - apache 웹서버에서 perl cgi 호출시 특정 모듈을 못찾는 경우
* 2018.01.15 삽질 했던 것 정리. 문제가 해결은 된 상태라 해결 된 것 까지 정리. 정확한 이유 확인은 못함.
* cpan 으로 MIME::Lite 라는 모듈을 설치 했는데 로컬에서는 잘 되는데 apache 통해서 perl cgi 를 호출하면 MIME::Lite 모듈이 없어서 오류가 나는 상황
* 설치된 perl 환경
  * 참고로 OSX 기본 perl 버전은 5.18 /usr/bin/perl
  * perlbrew 로 세팅한 perl 이 5.18.2, 5.26.1
* perlbrew perl 에서 cpan MIME::Lite 로 설치 하면 로컬에서는 잘 됨
* 스크립트의 shebang 은 다음과 같이 되어 있음.
```perl
#!/usr/bin/env perl
```
* 추측하기로는 apache 에서 호출한 perl cgi 는 perlbrew 로 설치한 perl 아니고 시스템 perl 인 /usr/bin/perl 을 사용하는게 아닌가 싶음.
* 아파치 로그는 다음과 같은데 5.18 경로를 찾고 있었음.
```
Can't locate MIME/Lite.pm in @INC (you may need to install the MIME::Lite module) (@INC contains: /Library/Perl/5.18/darwin-thread-multi-2level /Library/Perl/5.18 /Network/Library/Perl/5.18/darwin-thread-multi-2level /Network/Library/Perl/5.18 /Library/Perl/Updates/5.18.2/darwin-thread-multi-2level /Library/Perl/Updates/5.18.2 /System/Library/Perl/5.18/darwin-thread-multi-2level /System/Library/Perl/5.18 /System/Library/Perl/Extras/5.18/darwin-thread-multi-2level /System/Library/Perl/Extras/5.18 .) at {some/script} line 8.
BEGIN failed--compilation aborted at {some/script} line 8.
```

* 분명 sudo cpan MIME::Lite 해 보면 이미 설치 되었다고 나옴
* sudo 넣고 빼고 다 해보고 perlbrew perl 도 바꿔봄. 그래도 perl cgi 실행하면 못찾음. 로컬에서 실행하면 잘 찾음.
```
$ cpan MIME::Lite
Loading internal null logger. Install Log::Log4perl for logging messages
Reading '/Users/junho85/.cpan/Metadata'
  Database was generated on Mon, 14 Jan 2019 21:41:02 GMT
MIME::Lite is up to date (3.030).
$ sudo cpan MIME::Lite
  Password:
  Loading internal null logger. Install Log::Log4perl for logging messages
  Reading '/Users/junho85/.cpan/Metadata'
    Database was generated on Mon, 14 Jan 2019 21:41:02 GMT
  MIME::Lite is up to date (3.030).
$ perlbrew list
  perl-5.18.2
* perl-5.26.1
$ perlbrew use perl-5.18.2
$ cpan MIME::Lite
  Reading '/Users/junho85/.cpan/Metadata'
    Database was generated on Mon, 14 Jan 2019 21:41:02 GMT
  MIME::Lite is up to date (3.030).
```

### /usr/bin/perl 로 cpan 실행해서 설치 - 실패
* 이미 설치 되어 있다고 나옴
```
$ /usr/bin/perl /usr/bin/cpan
...
cpan[2]> install MIME::Lite
MIME::Lite is up to date (3.030).
```
 
```
$ /usr/bin/perl -MCPAN -e shell
...
cpan[3]> install MIME::Lite
MIME::Lite is up to date (3.030).
```
* 이런식으로 하면 system perl 은 5.18 을 이용하기 때문에 거기에 잘 설치 될 거라 생각 했는데 그렇지는 않았음.

### sudo /usr/bin/perl -MCPAN -e 'install MIME::Lite' 로 성공
* 최종적으로 아래와 같이 성공 하였다. 앞서 한거랑 다른거는 cpan 에 들어가서 설치 하느냐 아니냐의 차이뿐. 
```
$ sudo /usr/bin/perl -MCPAN -e 'install MIME::Lite'
```

### 결론 - 모르겠다
/usr/bin/perl -MCPAN -e shell 에서 install MIME::Lite 한거랑

```
$ sudo /usr/bin/perl -MCPAN -e 'install MIME::Lite'
```

이렇게 한 거랑 어떤 차이가 있었는지 모르겠다. 아무튼 system perl 에 MIME::Lite 모듈은 잘 설치 되었고 잘 동작하고 있다.

* 블로그: http://junho85.pe.kr/1196