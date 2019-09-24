# mail

## smtp relay - not login
```
import smtplib

to = 'to_addr@daum.net'
fromaddr = 'from_addr@gmail.com'

host = 'gmail-smtp-in.l.google.com' # dig mx gmail.com +short
port = 587

smtpserver = smtplib.SMTP(host, port)
smtpserver.ehlo()
smtpserver.starttls()
smtpserver.ehlo # ?

header = 'To:' + to + '\n' + 'From: ' + fromaddr + '\n' + 'Subject:testing \n'
print header

msg = header + '\n this is test message \n\n'

smtpserver.sendmail(userid, to, msg)
print 'mail send done!'

smtpserver.close()
```

## using user gmail account
```
import smtplib

to = 'to_addr@daum.net'
fromaddr = 'from_addr@gmail.com'

host = 'smtp.gmail.com'
port = 587
userid = fromaddr
password = 'yourpassword'

smtpserver = smtplib.SMTP(host, port)
smtpserver.ehlo()
smtpserver.starttls()
smtpserver.ehlo # ?
smtpserver.login(fromaddr, password)

header = 'To:' + to + '\n' + 'From: ' + fromaddr + '\n' + 'Subject:testing \n'
print header

msg = header + '\n this is test message \n\n'

smtpserver.sendmail(userid, to, msg)
print 'mail send done!'

smtpserver.close()
```

## references
http://www.mkyong.com/python/how-do-send-email-in-python-via-smtplib/