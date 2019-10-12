# javamail debug
* debug 모드를 활성화 하면 각 단계의 상세 메시지들을 확인 할 수 있습니다.
* 현재 적용된 javamail 의 버전도 확인 가능합니다.

## debug 모드
```java
Session session = Session.getDefaultInstance(properties);
session.setDebug(true);
```

아래 처럼 디버그 정보를 좀 더 상세히 보여준다.

호스트 접속에 실패한 케이스
```
DEBUG: setDebug: JavaMail version 1.5.5
DEBUG: getProvider() returning javax.mail.Provider[TRANSPORT,smtp,com.sun.mail.smtp.SMTPTransport,Oracle]
DEBUG SMTP: useEhlo true, useAuth false
DEBUG SMTP: trying to connect to host "mx11.hanmail.net", port 25, isSSL false
```

발송 성공한 케이스
```
DEBUG: setDebug: JavaMail version 1.5.5
DEBUG: getProvider() returning javax.mail.Provider[TRANSPORT,smtp,com.sun.mail.smtp.SMTPTransport,Oracle]
DEBUG SMTP: useEhlo true, useAuth false
DEBUG SMTP: trying to connect to host "mx1.hanmail.net", port 25, isSSL false
220 mail-rmail6 ESMTP welcome to HanMail.Net(tm) ready
DEBUG SMTP: connected to host "mx1.hanmail.net", port: 25

EHLO ...
250-mail-rmail6 Hello [...], pleased to meet you
250-SIZE 71680000
250-STARTTLS
250 ENHANCEDSTATUSCODES
DEBUG SMTP: Found extension "SIZE", arg "71680000"
DEBUG SMTP: Found extension "STARTTLS", arg ""
DEBUG SMTP: Found extension "ENHANCEDSTATUSCODES", arg ""
DEBUG SMTP: use8bit false
MAIL FROM:<junho85-test@gmail.com>
250 2.1.0 <junho85-test@gmail.com>... Sender ok
RCPT TO:<junho85@daum.net>
250 2.1.5 <junho85@daum.net>... Recipient ok
DEBUG SMTP: Verified Addresses
DEBUG SMTP:   junho85@daum.net
DATA
354 Enter mail, end with "." on a line by itself
From: junho85-test@gmail.com
To: junho85@daum.net
Message-ID: <2012232625.0.1557394068206@junho85.local>
Subject: This is subject
MIME-Version: 1.0
Content-Type: text/plain; charset=us-ascii
Content-Transfer-Encoding: 7bit

This is body
.
250 2.0.0 n49IRmHQA1234671716 Message accepted for delivery
DEBUG SMTP: message successfully delivered to mail server
QUIT
221 2.0.0 mail-rmail6 closing connection
Sent message successfully
```