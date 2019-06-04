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


### MaxHeadersLength
* Maximum length of the sum of all headers.
* default: 32768 (bytes)
* M4 Variable Name: confMAX_HEADERS_LENGTH
* 특별히 설정하지 않으면 sendmail 은 헤더 사이즈를 32KB 로 제한한다.
* 헤더 사이즈가 큰 메일을 받으면 MaxHeadersLength 값을 더 크게 설정 해야 한다.

## References
https://www.sendmail.org/~ca/email/doc8.12/cf/m4/tweaking_config.html