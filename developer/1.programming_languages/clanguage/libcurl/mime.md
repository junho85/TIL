# libcurl - mime
* libcurl 버전 7.56.0 이상이 필요하다.

## osx 환경 세팅
* https://stackoverflow.com/questions/36081761/how-to-update-curl-on-osx-el-capitan

* 2019.03.21 기준으로 7.54.0 이 설치 되어 있음.
```bash
$ curl -V
curl 7.54.0 (x86_64-apple-darwin18.0) libcurl/7.54.0 LibreSSL/2.6.4 zlib/1.2.11 nghttp2/1.24.1
Protocols: dict file ftp ftps gopher http https imap imaps ldap ldaps pop3 pop3s rtsp smb smbs smtp smtps telnet tftp
Features: AsynchDNS IPv6 Largefile GSS-API Kerberos SPNEGO NTLM NTLM_WB SSL libz HTTP2 UnixSockets HTTPS-proxy
```

최신 버전의 curl 을 설치해 준다.
```bash
$ brew install curl
```

cmake 를 쓴다면 CMakeLists.txt 에 다음 경로를 추가해 주어야 한다. 안그러면 OS 기본 libcurl 을 참조하게 된다.
```
include_directories(/usr/local/opt/curl/include)
link_directories(/usr/local/lib /usr/local/opt/curl/lib)
```

## 예제
* https://curl.haxx.se/libcurl/c/smtp-mime.html
* https://raw.githubusercontent.com/curl/curl/master/docs/examples/smtp-mime.c
