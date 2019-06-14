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
