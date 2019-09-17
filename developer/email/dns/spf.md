# SPF - Sender Policy Framework
* 간단히 말하면 이메일 발송 도메인에 이메일 발송 서버 리스트를 등록해 두는 것이다.
* 수신측에서는 메일이 온 서버의 IP 와 SPF 로 등록된 IP 를 비교해서 email 이 제대로된 경로에서 왔는지 판단하는데 사용하는 것이다.

## 설정현황
다음메일 2019.06.19
```
$ dig txt daum.net +short
"v=spf1 include:_spf.daum.net ~all"
```

_spf.daum.net 에 ip 리스트가 들어 있다.
```
$ dig txt _spf.daum.net +short
"v=spf1 ip4:211.43.197.0/24 ip4:175.126.189.0/24 ip4:203.133.180.0/24 ip4:211.110.62.0/24 ip4:211.110.63.0/24 ip4:203.133.181.0/24 ip4:222.231.34.38 ip4:211.231.106.0/24 ~all"
```

네이버메일 2019.06.19
```
$ dig txt naver.com +short
"v=spf1 include:_spfblocka.naver.com include:_spfblockb.naver.com include:_spfblockc.naver.com include:_spfblockd.naver.com include:_spfblocke.naver.com include:_spfblockf.naver.com include:spf.worksmobile.com ~all"
```

## References
* [Sender Policy Framework](https://en.wikipedia.org/wiki/Sender_Policy_Framework)
* [Email authentication](https://en.wikipedia.org/wiki/Email_authentication)
* [Is the 10-DNS-lookup limit in the SPF spec typically enforced? 2014](https://serverfault.com/questions/584708/is-the-10-dns-lookup-limit-in-the-spf-spec-typically-enforced)
* [Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1](https://tools.ietf.org/html/rfc7208)