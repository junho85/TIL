# ansible tags


* tag 하나만 달려면
```
  tags: sendmail
```


* tag 여러개 달려면

```
  tags:
    - sendmail
    - sendmail_deploy
```

```
  tags: [sendmail,sendmail_deploy]
```

이렇게는 안됨
tags: sendmail,sendmail_deploy
