# SPF (Sender Policy Framework)

# DKIM (DomainKeys Identified Mail)

# DMARC

```
"v=DMARC1;p=reject;pct=100;rua=mailto:postmaster@dmarcdomain.com"
```

* v - Protocol version
  * e.g. v=DMARC1
* pct - Percentage of messages subjected to filtering
  * e.g. pct=20
* ruf - Reporting URI for forensic reports
  * e.g. ruf=mailto:authfail@example.com
* rua - Reporting URI of aggregate reports
  * e.g. rua=mailto:aggrep@example.com
* p - Policy for organizational domain
  * e.g. p=quarantine
* sp - Policy for subdomains of the OD
  * e.g. sp=reject
* adkim - Alignment mode for DKIM
  * e.g. adkim=s
* aspf - Alignment mode for SPF
  * e.g. aspf=r

1. Deploy DKIM & SPF. You have to cover the basics, first.
2. Ensure that your mailers are correctly aligning the appropriate identifiers.
3. Publish a DMARC record with the "none" flag set for the policies, which requests data reports.
4. Analyze the data and modify your mail streams as appropriate.
5. Modify your DMARC policy flags from "none" to "quarantine" to "reject" as you gain experience.


1. DKIM 과 SPF 를 적용한다. 기본이 되어야 한다.
2. 메일러가 적절한 식별자를 정확히 정렬 했는데 확인하라. (뭔말이야)
  - 적절한 식별자?
3. 정책을 "none" 플래그로 DMARC 레코드를 게시하라. data 보고서를 요청하는 정책이다.
4. 데이터를 분석하고 적절히 메일 스트림을 수정하라.
5. 경험치를 쌓아서 DMARC 정책 플래그를 "none" 에서 "quarantine"(격리)로, "reject"(거부)로 수정하라.

## DMARC 설정 확인
```
$ dig txt _dmarc.junho85.pe.kr +short
"v=DMARC1; p=none; rua=mailto:admin@junho85.pe.kr"
```
junho85.pe.kr 도메인으로 발송된 메일들에 대한 레포팅만 받는다. gmail 로 보낸건 gmail 이 레포팅 보내준다.

naver 적용되었으나 모니터링 정도  (2019.06.10 기준)
```bash
$ dig txt _dmarc.naver.com +short
"v=DMARC1; p=none; rua=mailto:dmarc_reports@worksmobile.com"
```

gmail (2019.06.10 기준)
```bash
$ dig txt _dmarc.gmail.com +short
"v=DMARC1; p=none; sp=quarantine; rua=mailto:mailauth-reports@google.com"
```

yahoo (2019.06.10 기준)
```bash
$ dig txt _dmarc.yahoo.com +short
"v=DMARC1; p=reject; pct=100; rua=mailto:dmarc_y_rua@yahoo.com;"
$ dig txt _dmarc.yahoo.co.kr +short
"v=DMARC1; p=reject; pct=100; rua=mailto:dmarc_y_rua@yahoo.com;"
```

korea.com 적용안됨 (2019.06.10 기준)
```bash
$ dig txt _dmarc.korea.com +short
```

nate 적용 안됨.  (2019.06.10 기준)
```bash
$ dig txt _dmarc.nate.com +short
```

dreamwiz 적용 안됨. (2019.06.10 기준)
```bash
$ dig txt _dmarc.dreamwiz.com +short
```

## References
* https://dmarc.org/overview/

* [Enhance security for forged spam (DMARC) About DMARC](https://support.google.com/a/answer/2466580)
  * Manage suspicious emails with DMARC

* [숨만 겨우 쉬는 이메일이 다시 건강해져야 하는 이유 2014.09.15](https://www.boannews.com/media/view.asp?idx=42964)
  * DMARC란 도메인 기반 메시지 인증, 보고, 준수(Domain-based Message Authentication, Reporting & Conformance)라는 뜻으로 최근 떠오르고 있는 이메일 전송 표준이다.
  * DKIM(Domain Keys Identified Mail)과 SPF(Sender Policy Framework)라는 또 다른 표준과 밀접한 연관이 있으며 이메일 발송자가 이메일에 서명을 추가하고 도메인마다 인증된 메일 서버를 정할 수 있도록 해준다.
  