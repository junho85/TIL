# sendmail TLS
* [STARTTLS](https://www.sendmail.org/~ca/email/doc8.12/cf/m4/starttls.html)

## Disabling STARTTLS And Setting SMTP Server Features
* [STARTTLS](https://www.sendmail.org/~ca/email/doc8.12/cf/m4/starttls.html)

By default STARTTLS is used whenever possible. However, there are some broken MTAs that don't properly implement STARTTLS. To be able to send to (or receive from) those MTAs, the ruleset try_tls (srv_features) can be used that work together with the access map. Entries for the access map must be tagged with Try_TLS (Srv_Features) and refer to the hostname or IP address of the connecting system. A default case can be specified by using just the tag. For example, the following entries in the access map:

```
Try_TLS:broken.server	NO
Srv_Features:my.domain	v
Srv_Features:		V
```

will turn off STARTTLS when sending to broken.server (or any host in that domain), and request a client certificate during the TLS handshake only for hosts in my.domain. The valid entries on the RHS for Srv_Features are listed in the "Sendmail Installation and Operations Guide".

기본적으로 STARTTLS 는 가능할때 언제든 사용된다. 그러나 STARTTLS 가 제대로 구현안된 망가진 MTA 들이 있다. 그러한 MTA 들에게 메일을 보낼 수 있도록 하려면 try_tls (srv_features) 룰셋을 access map 과 함께 사용할 수 있다.

일단 try_tls 라는 룰셋

## Try_TLS
/etc/mail/access 에 추가
```
Try_TLS:broken.server   NO
```
하면 될거 같은데 안됨...

## tls_failures - 8.16 이상
* http://www.sendmail.org/~ca/email/patches/tls_failures.p1
* tls_failures 에 저장된 횟수만큼 실패 하면 STARTTLS 를 하지 않도록 함.
* 8.16 에 들어갈 예정이었던 기능
* https://ftp.sendmail.org/
* 하지만 2015-07-03 8.15.2 이후로 릴리즈 되고 있지 않음
* 8.15.2 에다가 직접 패치 해 주면 사용 할 수 있긴 할 듯.
 

## References
* [STARTTLS](https://www.sendmail.org/~ca/email/doc8.12/cf/m4/starttls.html)
* [How to change sendmail fallback behavior if TLS handshake fails?](https://serverfault.com/questions/254364/how-to-change-sendmail-fallback-behavior-if-tls-handshake-fails)
  * tls_failures
* http://etutorials.org/Server+Administration/Sendmail/Part+II+Administration/Chapter+10.+Maintain+Security+with+sendmail/10.10+STARTTLS/
* [TLS Disable](https://www.roaringpenguin.com/wiki/index.php/TLS_Disable)