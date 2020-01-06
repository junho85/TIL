# apache - 시스템 perl 말고 내가 설치한 perl 사용하기
아직 해 보지는 않았음. 메모만.

기본적으로 /usr/bin/perl 을 사용하기 때문에 cpan 으로 모듈 설치 할 때도 /usr/bin/cpan 으로 설치 해야 된다.
```
sudo /usr/bin/cpan -fi DBIx::Connector
```

만약 /usr/bin/perl 말고 다른 perl 을 사용하고 싶다면

* /etc/apache2/envvars 를 수정해서 PATH 설정을 고쳐준다.
* /System/Library/LaunchDaemons/org.apache.httpd.plist

## References
* [OSX - apache 웹서버에서 perl cgi 호출시 특정 모듈을 못찾는 경우 해결. 왠지는 잘 모르겠지만...](https://junho85.pe.kr/1196#comment-4288616084)
* [Setting Apache2 PATH environment variable](https://serverfault.com/questions/151328/setting-apache2-path-environment-variable/316047#316047)
