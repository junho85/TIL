# javamail - versions

## maven
* https://mvnrepository.com/artifact/com.sun.mail/javax.mail

### 1.5.3
* TLS 1.2 가 기본으로 올라감
* [diff](https://github.com/javaee/javamail/compare/70807e1...8078d18aebf513c6fff9c722d4258f1eefd63df9)
  * https://github.com/javaee/javamail/compare/70807e1...8078d18aebf513c6fff9c722d4258f1eefd63df9#diff-93156a458accdabc21373b45bb9ccd99L526
```
sslsocket.setEnabledProtocols(new String[] {"TLSv1"});
```
코드가 제거 됨


### 1.5.2
* [JavaMail API » 1.5.2](https://mvnrepository.com/artifact/com.sun.mail/javax.mail/1.5.2)
* TLS 1 이 기본인 마지막 버전



## Changes
* [CHANGES](https://javaee.github.io/javamail/docs/CHANGES.txt)
* [JavaMail 1.6 2017.07.17](https://javaee.github.io/javamail/docs/JavaMail-1.6-changes.txt)
* [Releases](https://github.com/javaee/javamail/releases)