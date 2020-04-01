# apache httpd 1.3 to 2.4
* 레거시 서버 업그레이드 할 일이 있어서 작업 하면서 정리해 본다.

## 바뀐 설정 확인
stop, start 하면 알아서 검사 해 주긴 하지만 stop, start 관계 없이 설정만 테스트 해보고 싶으면 configtest 를 이용하면 됩니다.
```
apachectl configtest
```

## ServerType 옵션 없어짐
```
ServerType standalone
```
제거

super-server inetd 나 standalone daemon 으로 띄울지 설정하는 부부니. standalone 으로 하는걸 권장 했었음. 더 좋은 성능을 낸다고 함.

http://archive.download.redhat.com/pub/redhat/linux/7.3/en/doc/RH-DOCS/rhl-rg-en-7.3/s1-apache-config.html
기본이 standalone. 서버가 한번 실행되고 모든 커넥션을 다룬다고 함.

http://www.kuraka.co.jp/migration.html
2.0 부터 제거 되었고 오직 ServerType standalone 으로만 동작한다고 함.



## MinSpareServers, MaxSpareServers 는 mpm_prefork_module 모듈이 있을 때만 (IfModule 을 생략하려면 어떻게 해야 되지? 빌드 할 때 같이 빌드 해야 되나? 다른 방법 없을까?)
```
MinSpareServers 30
MaxSpareServers 50

<IfModule mpm_prefork_module>
    MinSpareServers 30
    MaxSpareServers 50
</IfModule>
```

## Port 는 Listen 으로
1.3
```
Port 80
```

2.4
```
Listen 80
```

## MaxClients 는 MaxRequestWorkers 로
1.3
```
MaxClients 1024
```

2.0 에는 설정이 있는듯
http://httpd.apache.org/docs/2.0/mod/mpm_common.html#maxclients

https://httpd.apache.org/docs/2.4/mod/mpm_common.html
에 의하면 MaxRequestWorkers 로 바뀐것으로 보인다. 2.3.13 이전 까지는 MaxClients 였다. MaxClients 도 아직까지는 지원하고 있다.

기본값은 256이고 높이려면 ServerLimit 도 올려 줘야 된다.

[Apache Performance Tuning: MPM Directives](https://www.liquidweb.com/kb/apache-performance-tuning-mpm-directives/) 이 글에는 기본값이 400 이라는데 뭐가 맞지?


## User, Group - IfModule unixd_module
```
User junho85
Group junho85
```
->
```
<IfModule unixd_module>
    User junho85
    Group junho85
</IfModule>
```

## DirectoryIndex - IfModule dir_module
```
DirectoryIndex index.html
```
->
```
<IfModule dir_module>
    DirectoryIndex index.html
</IfModule>
```

## TypesConfig - IfModule mime_module
```
TypesConfig conf/mime.types
```
->
```
LoadModule mime_module modules/mod_mime.so

<IfModule mime_module>
    TypesConfig conf/mime.types
</IfModule>
```
버전 차이인지 기존 1.3 빌드와 빌드설정이 달라서 그런지 2.4에서는 LoadModule을 안해주니 동작하지 않았습니다. 이 모듈이 동작하지 않는 경우 확장자에 따른 Content-Type 전송이 제대로 안될 수 있습니다. 보통은 큰 문제는 없지만 IE에서 css를 불러오지 못하는 문제가 생길 수 있습니다.

apache httpd에서 응답에
```
Content-Type: text/css
```
가 없으니 IE11에서 "SEC7133: MIME 형식이 일치하지 않아 CSS가 무시되었습니다."라는 메시지가 뜨면서 CSS가 로드되지 않더라구요. 특이한건 문서모드를 8로 바꾸면 잘 나옵니다. 그리고 Edge브라우저에서도 특별히 문제는 안생기더군요.


## DefaultType text/plain 삭제
* [DefaultType Directive](http://httpd.apache.org/docs/2.4/mod/core.html#defaulttype)

## IfModule log_config_module
```
LogFormat "%h %T %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
LogFormat "%h %T %u %t \"%r\" %>s %b" common
LogFormat "%{Referer}i -> %U" referer
LogFormat "%{User-agent}i" agent
LogFormat "%h %t \"%r\" %>s %T" permtrack
```
->

```
<IfModule log_config_module>
    LogFormat "%h %T %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
    LogFormat "%h %T %u %t \"%r\" %>s %b" common
    LogFormat "%{Referer}i -> %U" referer
    LogFormat "%{User-agent}i" agent
    LogFormat "%h %t \"%r\" %>s %T" permtrack
</IfModule>
```

## JkShmFile
JkShmFile 없으면 warning 뜸

JkShmFile /mail/program/httpd/logs/jk-runtime-status

## References
