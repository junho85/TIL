# openssl

## 인증서 확인
```bash
$ openssl s_client -connect mx1.hanmail.net:25 -starttls smtp < /dev/null 2>/dev/null | openssl x509 -text -in /dev/stdin | grep -E "Issuer:|Signature Algorithm|GMT|DNS:"
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=US, O=DigiCert Inc, OU=www.digicert.com, CN=Thawte TLS RSA CA G1
            Not Before: Feb  7 00:00:00 2019 GMT
            Not After : Feb  6 12:00:00 2021 GMT
                DNS:mx1.hanmail.net, DNS:mx4.hanmail.net, DNS:mx3.hanmail.net, DNS:alt.aspmx.daum.net, DNS:aspmx.daum.net, DNS:mx2.hanmail.net
                    Timestamp : Feb  7 07:40:14.399 2019 GMT
                    Timestamp : Feb  7 07:40:14.599 2019 GMT
                    Timestamp : Feb  7 07:40:14.739 2019 GMT
    Signature Algorithm: sha256WithRSAEncryption
```

```bash
$ openssl s_client -connect gmail-smtp-in.l.google.com:25 -starttls smtp < /dev/null 2>/dev/null | openssl x509 -text -in /dev/stdin | grep -E "Issuer:|Signature Algorithm|GMT|DNS:"
      Signature Algorithm: sha256WithRSAEncryption
          Issuer: C=US, O=Google Trust Services, CN=Google Internet Authority G3
              Not Before: Mar 26 13:32:24 2019 GMT
              Not After : Jun 18 13:24:00 2019 GMT
                  DNS:mx.google.com, DNS:alt1.aspmx.l.google.com, DNS:alt1.gmail-smtp-in.l.google.com, DNS:alt1.gmr-smtp-in.l.google.com, DNS:alt2.aspmx.l.google.com, DNS:alt2.gmail-smtp-in.l.google.com, DNS:alt2.gmr-smtp-in.l.google.com, DNS:alt3.aspmx.l.google.com, DNS:alt3.gmail-smtp-in.l.google.com, DNS:alt3.gmr-smtp-in.l.google.com, DNS:alt4.aspmx.l.google.com, DNS:alt4.gmail-smtp-in.l.google.com, DNS:alt4.gmr-smtp-in.l.google.com, DNS:aspmx.l.google.com, DNS:aspmx2.googlemail.com, DNS:aspmx3.googlemail.com, DNS:aspmx4.googlemail.com, DNS:aspmx5.googlemail.com, DNS:gmail-smtp-in.l.google.com, DNS:gmr-mx.google.com, DNS:gmr-smtp-in.l.google.com, DNS:mx1.smtp.goog, DNS:mx2.smtp.goog, DNS:mx3.smtp.goog, DNS:mx4.smtp.goog
      Signature Algorithm: sha256WithRSAEncryption
```

```bash
openssl s_client -connect mx1.naver.com:25 -starttls smtp < /dev/null 2>/dev/null | openssl x509 -text -in /dev/stdin | grep -E "Issuer:|Signature Algorithm|GMT|DNS:"
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=GB, ST=Greater Manchester, L=Salford, O=COMODO CA Limited, CN=COMODO RSA Organization Validation Secure Server CA
            Not Before: Apr  6 00:00:00 2018 GMT
            Not After : Apr 30 23:59:59 2020 GMT
                DNS:mail.naver.com, DNS:*.mail.naver.com, DNS:imap.naver.com, DNS:mail.naver.net, DNS:mx1.naver.com, DNS:mx2.naver.com, DNS:mx3.naver.com, DNS:mx4.naver.com, DNS:pop.naver.com, DNS:smtp.naver.com
                    Timestamp : Apr  6 01:03:55.964 2018 GMT
                    Timestamp : Apr  6 01:03:55.559 2018 GMT
                    Timestamp : Apr  6 01:03:55.492 2018 GMT
    Signature Algorithm: sha256WithRSAEncryption
```

참고로 sslscan 으로 확인하는게 더 쉬울수도 있다.
```bash
$ sslscan --starttls-smtp mx1.hanmail.net:25
...
Subject:  mx1.hanmail.net
Altnames: DNS:mx1.hanmail.net, DNS:mx4.hanmail.net, DNS:mx3.hanmail.net, DNS:alt.aspmx.daum.net, DNS:aspmx.daum.net, DNS:mx2.hanmail.net
Issuer:   Thawte TLS RSA CA G1

Not valid before: Feb  7 00:00:00 2019 GMT
Not valid after:  Feb  6 12:00:00 2021 GMT
```

## build
* [OpenSSL 컴파일(compile) & 빌드(build)](https://www.lesstif.com/pages/viewpage.action?pageId=6291508)

