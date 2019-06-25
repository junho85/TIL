# SNI (Server Name Indication)
* Server Name Indication
* TLS 의 확장 기능
* 핸드셰이킹 과정 중 클라이언트가 어느 호스트명에 접속하려는지 서버에 알린다.
* 하나의 서버에 여러개의 인증서를 사용할 수 있도록 해 준다.
* http 서버의 경우 가상 호스팅 기능이 있어서 클라이언트가 어느 호스트로 접근하느냐에 따라 다른 사이트를 내려 보낼 수 있는데, TLS 핸드셰이킹이 먼저 이루어진다.
* SNI 가 없다면 TLS 핸드셰이킹이 먼저 이루어지다 보니 어떤 서버로 접근하려는지 알 수 없어서 어떤 인증서를 이용해서 핸드셰이킹을 해야 될지도 알 수 없다.
* 그래서 TLS 핸드셰이킹에서도 호스트를 먼저 지정 할 수 있도록 해 주는 것이다.
* 다만 호스트 정보를 보낼 때는 암호화되기 전이기 때문에 사용자가 어느 사이트에 접근하려는지 감청 할 수 있다.

## Server 설정
* Apache Server Alias 설정 문제

https://www.lesstif.com/pages/viewpage.action?pageId=19365977 내용

* 여러 도메인의 사이트를 VirtualHost 기능을 이용하여 SSL 로 제공할 경우 문제
* VirtualHost 는 Web Browser가 WebServer에서 HTTP 요청시 다음과 같이 Host Header를 전송
```
GET / HTTP/1.1
USER-Agent: curl/...
Host: abc.com
``` 
* Web Server는 Host 에 있는 요청을 보고 VirtualHost 에 설정된 resource 를 Browser 에 전송
* Browser가 Host Header 를 보내기전에 SSL handshaking이 이루어 지고 서버 인증서가 오므로 Browser 에서 SSL 인증서 검증시 인증서와 HostName 이 다르다는 에러가 발생

해결책
* SNI 를 지원하는 Web Server (apache 의 경우 2.2.12) 와 Web Browser (IE7+, ...)를 사용해야 함
  * Java 는 7 이상부터 지원
  * Web Server에 Multiple IP 를 할당하고 IP-based Virtual Hosts 를 설정한다.
    * http://httpd.apache.org/docs/2.2/en/vhosts/ip-based.html

## Client 설정으로 처리 하기
* JDK 1.7 에서는 기본 옵션이 enable 인 경우. 그런데 client side 에서 바꿔줘서 처리 하는 방법인데 궁극적으로는 서버 이슈를 해결하는게 좋은듯
```java
System.setProperty("jsse.enableSNIExtension", "false");
```

JVM 옵션
```
-Djsse.enableSNIExtension=false
```


## References
* [apache httpd 에 SSL/HTTPS 적용 및 VirtualHost 에 SNI(Server Name Indication) 문제 해결 2018.12.11](https://www.lesstif.com/pages/viewpage.action?pageId=19365977)
* [SSL 관련 Exception 해결하기 2017.08.29](https://freestrokes.tistory.com/68)
* [Java SE 7 Security Enhancements](https://docs.oracle.com/javase/7/docs/technotes/guides/security/enhancements-7.html)
* [서버 네임 인디케이션](https://ko.wikipedia.org/wiki/%EC%84%9C%EB%B2%84_%EB%84%A4%EC%9E%84_%EC%9D%B8%EB%94%94%EC%BC%80%EC%9D%B4%EC%85%98)
* [Transport Layer Security (TLS) Extensions: Extension Definitions](https://www.ietf.org/rfc/rfc6066.txt)