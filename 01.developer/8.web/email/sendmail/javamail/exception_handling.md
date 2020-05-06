# javamail exception handling

## 메일발송 실패시 Exception 정리
* MessagingException 아래에 SendFailedException 을 부모로 하는 자식 exception 들로 구성된다.
* SendFailedException
  * https://docs.oracle.com/javaee/7/api/javax/mail/SendFailedException.html
* SendFailedException 의 자식들로
  * SMTPSendFailedException
  * SMTPSenderFailedException
  * SMTPAddressFailedException
* 3가지가 존재한다.


### SMTPSenderFailedException
* 메시지를 보낼 수 없을 때 발생한다.
* 서버가 거부한 발송자 이메일 주소를 포함한다.
* [Class SMTPSenderFailedException](https://javaee.github.io/javamail/docs/api/com/sun/mail/smtp/SMTPSenderFailedException.html)



### SMTPSendFailedException
* 메시지를 보낼 수 없을 때 발생하는 exception
* 보통 exception 들에서 첫번째로 나타난다.
* MAIL, DATA, "end of data" 커맨드에서 발생한다.
* RCPT 커맨드에서는 발생하지 않는다.
* getValidSentAddresses
  * https://javaee.github.io/javamail/docs/api/javax/mail/SendFailedException.html#getValidSentAddresses--
  * 메시지가 성공적으로 발송된 주소들. 없으면 null
  * 메시지를 보낼 수 없는데 sent address 가 어떻게 존재하지?
  * 이후에 4x 에러가 났을 때 재시도를 하기 위함일까?


* [Class SMTPSendFailedException](https://javaee.github.io/javamail/docs/api/com/sun/mail/smtp/SMTPSendFailedException.html)
* [exception SMTPSendFailedException](http://edelstein.pebbles.cs.cmu.edu/jadeite/main.php?api=javamail&state=class&package=com.sun.mail.smtp&class=SMTPSendFailedException)
  * com.sun.mail.smtp

### SMTPAddressFailedException - 수신자 오류
* RCPT TO 에서 실패한 내역 확인
```java
} else if (ex instanceof SMTPAddressFailedException) {
    SMTPAddressFailedException smtpAddressFailedException = (SMTPAddressFailedException) ex;

    final int returnCode = smtpAddressFailedException.getReturnCode();
    String message = smtpAddressFailedException.getMessage();

    System.out.println(smtpAddressFailedException.getAddress().toString());
    System.out.println(returnCode);
    System.out.println(message);
}
```

```
junho85_not_exists@daum.net
550
550 5.1.1 RUSR 14.47.185.136: No such user: <junho85_not_exists@daum.net>
```