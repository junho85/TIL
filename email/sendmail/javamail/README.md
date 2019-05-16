# java - javamail

* https://github.com/javaee/javamail/releases
* https://javaee.github.io/javamail/

## 메일 보내기 기본
* property 를 만들고 각종 값을 세팅한다. smtp host 등을 지정할 수 있다.
* 이 property 설정으로 session 을 만든다.
* session 을 이용해서 MimeMessage 를 생성한다.
  * MimeMessage 는 독립적으로 만들어도 될 텐데 session 을 넣어 주는게 좀 이상해 보인다.
* message 에 from, to, subject 헤더를 입력하고, setText 로 본문을 입력한다.
* Transport.send 로 메일을 발송한다.

```java
final String host = "gmail-smtp-in.l.google.com.";

final String from = "junho85@daum.net";
final String to = "junho85@gmail.com";

Properties properties = System.getProperties();

properties.setProperty("mail.smtp.host", host);

Session session = Session.getDefaultInstance(properties);

try {
    MimeMessage message = new MimeMessage(session);

    message.setFrom(new InternetAddress(from)); // from
    message.addRecipient(Message.RecipientType.TO, new InternetAddress(to)); // recipients
    message.setSubject("This is subject"); // subject
    message.setText("This is body"); // content

    Transport.send(message); // send

    System.out.println("Sent message successfully");
} catch (MessagingException e) {
    e.printStackTrace();
}
```

## mail from 과 header from 을 서로 다르게 세팅하기
* 기본 예제로 이메일을 보내면 mail from 의 값이 message 의 from 주소로 들어간다.
* 만약 mail from 커맨드의 from 주소를 바꾸고 싶다면 property 의 mail.from 을 다르게 세팅한다.
  * 그런데 문서상으로는 "mail.smtp.from" 이라고 나와 있음.
  * mail.from, mail.smtp.from 둘다 될거 같은데 관련 히스토리는 좀 찾아 봐야 겠음.
```java
properties.setProperty("mail.from", from);
```

```java
properties.setProperty("mail.smtp.from", from);
```

## 메일발송 성공 상태값과 메시지
메일 발송시
```java
Transport.send(message);
```
대신 아래 처럼 smtpTransport 를 꺼내서 이걸 이용해서 발송 하면
```java
SMTPTransport smtpTransport = (SMTPTransport) session.getTransport("smtp");

smtpTransport.connect(host, "", "");
smtpTransport.sendMessage(message, message.getAllRecipients());

System.out.println("getLastReturnCode=" + smtpTransport.getLastReturnCode());
System.out.println("getLastServerResponse=" + smtpTransport.getLastServerResponse());
```

아래 처럼 결과 코드와 메시지를 구할 수 있다.
```
getLastReturnCode=250
getLastServerResponse=250 2.0.0 n4GBK7Sr11395940305 Message accepted for delivery
```


## 메일발송 실패시 Exception 정리
* MessagingException 아래에 SendFailedException 을 부모로 하는 자식 exception 들로 구성된다.
* SendFailedException
  * https://docs.oracle.com/javaee/7/api/javax/mail/SendFailedException.html
* SendFailedException 의 자식들로
  * SMTPSendFailedException
  * SMTPSenderFailedException
  * SMTPAddressFailedException
* 3가지가 존재한다.

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

### SMTPSenderFailedException
* 메시지를 보낼 수 없을 때 발생한다.
* 서버가 거부한 발송자 이메일 주소를 포함한다.
* [Class SMTPSenderFailedException](https://javaee.github.io/javamail/docs/api/com/sun/mail/smtp/SMTPSenderFailedException.html)

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

## 블로그 포스팅
* [java - javamail 로 이메일 발송하기 기본 예제](http://junho85.pe.kr/954)
* [java - javamail 로 이메일 발송하기. mail from 과 header from 을 서로 다르게 세팅하기](http://junho85.pe.kr/955)

## References
* https://javaee.github.io/javamail/docs/api/com/sun/mail/smtp/package-summary.html
