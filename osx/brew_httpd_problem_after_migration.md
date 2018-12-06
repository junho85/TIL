# 맥북 마이그레이션 후 brew 로 설치한 httpd 문제
* 맥북 마이그레이션 후 아파치 웹서버가 제대로 동작하지 않음

## brew services 로는 상황 진단이 어려움
```bash
$ brew services restart httpd
Stopping `httpd`... (might take a while)
==> Successfully stopped `httpd` (label: homebrew.mxcl.httpd)
==> Successfully started `httpd` (label: homebrew.mxcl.httpd)
```
* 메시지는 그럴싸 한데 실제로 httpd 가 안뜸. /usr/local/var/log/httpd/error_log 에도 로그가 안찍힌다.

## apachectl 로 시작 해 보면 에러 메시지를 볼 수 있다.
```bash
$ apachectl start
dyld: Symbol not found: _apr_bucket_alloc_aligned_floor
  Referenced from: /usr/local/opt/httpd/bin/httpd
  Expected in: /usr/lib/libaprutil-1.0.dylib
 in /usr/local/opt/httpd/bin/httpd
/usr/local/bin/apachectl: line 79: 24655 Abort trap: 6           $HTTPD -k $ARGV
```
* apr 에 문제가 생긴 것을 알 수 있다.

## apr 설치
```bash
$ brew reinstall apr
```
이거로는 안되서 추가 설치
```bash
$ brew reinstall apr-util
```

## 오류가 메시지 바꼈다. libphp 를 못찾는다. php 재설치
```bash
$ apachectl start
httpd: Syntax error on line 177 of /usr/local/etc/httpd/httpd.conf: Cannot load /usr/local/opt/php/lib/httpd/modules/libphp7.so into server: dlopen(/usr/local/opt/php/lib/httpd/modules/libphp7.so, 10): image not found
```

php 를 설치 할 때는 --with-apache 로 설치해야 아파치 지원이 된다.
```bash 
$ brew uninstall php
$ brew install php --with-apache
```
