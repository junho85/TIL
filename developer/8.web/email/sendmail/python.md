# python - sendmail
* smtplib 모듈을 이용하면 간단히 메일을 발송할 수 있다.
* 간단한 예제
* 수신자의 도메인이 daum.net 인 경우 실제로 daum.net 으로 보내는 것이 아니고 해당 도메인의 MX 레코드에 있는 서버로 메일을 보내게 된다.
* daum.net 의 MX 중 하나인 mx1.hanmail.net 으로 메일을 보낸다.
* from 주소는 임의로 지정 한다.
* smtp.sendmail 로 메일을 발송한다.
* smtp.set_debuglevel(1) 를 설정 해 두면 발송 과정을 자세히 볼 수 있다. 
```python
import smtplib

host = "mx1.hanmail.net"
port = 25

fromaddr = "abc@test.com"
toaddr = "junho85@daum.net"


smtp = smtplib.SMTP(host, port)
smtp.set_debuglevel(1)

msg = """Subject: this is test mail
from: abc@test.com

this is test mail
"""

smtp.sendmail(fromaddr, toaddr, msg)

smtp.quit()
```