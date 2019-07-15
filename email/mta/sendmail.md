# sendmail mta

## configurations

### Timeouts
https://sendmail.org/~ca/email/doc8.12/op-sh-4.html 를 참고 해서 정리중이다.

10m 은 10분. 2h30m 는 2시간 30분.
```
s	seconds
m	minutes
h	hours
d	days
w	weeks
```

#### Queue interval
-q 옵션은 sub-daemon 이 얼마나 자주 queue 를 실행시킬지 지정하는 것이다. 보통 15분~1시간 정도로 세팅한다. 0 으로 세팅하면 자동으로 실행하지 않는다. RFC 1123 section 5.3.1.1 에서 적어도 30분으로 권장한다. 동작중인 큐 처리 잡을 멈추고 싶으면 부모프로세스에 SIGTERM 을 보낸다.

#### Read timeouts
타임아웃 설정은 Timeout.suboption 으로 명명된다. 대부분 SMTP 명령어에 대한 것들이다. 기본값, 허용되는 최소값은 RFC 2821 section 4.5.3.2 (또는 RFC 1123 section 5.3.2) 을 따르며 다음과 같다.

* connect - SMTP connection open 을 기다리는 시간. 기본값은 0이고 0이면 커널 기본값을 사용한다.
* iconnect
* aconnect
* initial
* helo
* mail*
* rcpt*
* datainit*
* datablock*
* datafinal*
* rset
* quit
* misc
* command*
* ident
* lhlo
* auth
* starttls
* fileopen
* control
* hoststatus
* resolver.retrans
* resolver.retrans.first
* resolver.retrans.normal
* resolver.retry
* resolver.retry.first
* resolver.retry.normal

### MaxHeadersLength
* Maximum length of the sum of all headers.
* default: 32768 (bytes)
* M4 Variable Name: confMAX_HEADERS_LENGTH
* 특별히 설정하지 않으면 sendmail 은 헤더 사이즈를 32KB 로 제한한다.
* 헤더 사이즈가 큰 메일을 받으면 MaxHeadersLength 값을 더 크게 설정 해야 한다.

## References
https://www.sendmail.org/~ca/email/doc8.12/cf/m4/tweaking_config.html