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
