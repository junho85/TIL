# SPF - Sender Policy Framework
* 간단히 말하면 이메일 발송 도메인에 이메일 발송 서버 리스트를 등록해 두는 것입니다.
* 수신측에서는 메일이 온 서버의 IP 와 SPF 로 등록된 IP 를 비교해서 email 이 제대로된 경로에서 왔는지 판단하는데 사용하는 것입니다.

## 인증효과
* 도메인의 설정을 변경하는 주체는 서비스 운영자 뿐입니다. 서비스 운영자가 도메인에 메일 발송 IP 를 지정해 둠으로서 발송 주소 (from address)의 도메인과 발송 클라이언트의 IP 를 알 수 있으면 그것으로 검증을 한다는 의미입니다.

## junho85.pe.kr 도메인을 예를 들어 설명
```
v=spf1 include:_spf.daum.net ip4:115.71.237.125 ip4:218.155.132.209 ip4:14.47.185.136 ~all
```

메일 발송자의 주소의 도메인이 junho85.pe.kr 이라면 "include:_spf.daum.net ip4:115.71.237.125 ip4:218.155.132.209 ip4:14.47.185.136" 에 지정된 IP 로 메일이 발송 되었다면 SPF 통과 입니다.

여기서 include:_spf.daum.net 은 한번 더 풀어서 봐야 됩니다.
```
$ dig txt _spf.daum.net +short
"v=spf1 ip4:211.43.197.0/24 ip4:175.126.189.0/24 ip4:203.133.180.0/24 ip4:211.110.62.0/24 ip4:211.110.63.0/24 ip4:203.133.181.0/24 ip4:222.231.34.38 ip4:211.231.106.0/24 ~all"
```

즉, IP 의 전체 리스트는 둘의 IP 를 합쳐서
```
ip4:211.43.197.0/24 ip4:175.126.189.0/24 ip4:203.133.180.0/24 ip4:211.110.62.0/24 ip4:211.110.63.0/24 ip4:203.133.181.0/24 ip4:222.231.34.38 ip4:211.231.106.0/24 ip4:115.71.237.125 ip4:218.155.132.209 ip4:14.47.185.136
```
가 됩니다.

* IP 가 다른 경우에 따른 처리 구분
* ~all SOFTFAIL 처리합니다.
* ?all NEUTRAL 처리합니다. 
* -all 거부합니다.

* + 는 PASS 입니다. +mx 는 mx 와 같습니다.


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

## spfquery 커맨드 유틸

## include 안에 있는 설정은?
TODO 설정을 따로 가져 가야 하나? 최상위 룰에 따르는건 아니겠지?

## References
* [Sender Policy Framework](https://en.wikipedia.org/wiki/Sender_Policy_Framework)
* [Email authentication](https://en.wikipedia.org/wiki/Email_authentication)
* [Is the 10-DNS-lookup limit in the SPF spec typically enforced? 2014](https://serverfault.com/questions/584708/is-the-10-dns-lookup-limit-in-the-spf-spec-typically-enforced)
* [Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1](https://tools.ietf.org/html/rfc7208)
* [SPF란 무엇인가? 2009.01.08](https://yoonperl.tistory.com/36)
* [SPF 작성 도우미](https://spam.kisa.or.kr/white/sub3.do)
* [15장 SPF(Sender Policy Framework)를 사용하여 위조된 전자 메일 처리](https://docs.oracle.com/cd/E19957-01/820-0512/gdpno/index.html)