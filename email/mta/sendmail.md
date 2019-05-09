# sendmail mta

## configurations
### MaxHeadersLength
* Maximum length of the sum of all headers.
* default: 32768 (bytes)
* M4 Variable Name: confMAX_HEADERS_LENGTH
* 특별히 설정하지 않으면 sendmail 은 헤더 사이즈를 32KB 로 제한한다.
* 헤더 사이즈가 큰 메일을 받으면 MaxHeadersLength 값을 더 크게 설정 해야 한다.

## References
https://www.sendmail.org/~ca/email/doc8.12/cf/m4/tweaking_config.html