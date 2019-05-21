# apache httpd

## apache webserver 와 tomcat 같은 포트에서 사용하기

### proxy 세팅 방법

httpd.conf - proxy module 활성화. 기본적으로 주석 처리 되어 있는데 주석 해제 하고 httpd 재시작 하면 된다.
```
LoadModule proxy_module lib/httpd/modules/mod_proxy.so
LoadModule proxy_http_module lib/httpd/modules/mod_proxy_http.so
```

tomcat 이 8080 포트에서 돌고 있다면 다음과 같이 설정해 주면 된다.
```
ProxyRequests Off
ProxyPass /myapp http://localhost:8080
ProxyPassReverse /myapp http://localhost:8080
...
<Location "/myapp">
  # Allow access to this proxied URL location for everyone.
  Order allow,deny
  Allow from all
</Location>
```

* 참고: https://stackoverflow.com/questions/25486364/apache-webserver-and-apache-tomcat-on-port-80-configuration
