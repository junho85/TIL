# java - javamail 로 이메일 보내기. SMTP
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

## 블로그 포스팅
* [java - javamail 로 이메일 발송하기 기본 예제](http://junho85.pe.kr/954)
* [java - javamail 로 이메일 발송하기. mail from 과 header from 을 서로 다르게 세팅하기](http://junho85.pe.kr/955)

## References
* https://javaee.github.io/javamail/docs/api/com/sun/mail/smtp/package-summary.html
