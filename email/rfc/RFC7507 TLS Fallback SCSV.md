# RFC7507 TLS Fallback Signaling Cipher Suite Value (SCSV) for Preventing Protocol Downgrade Attacks

```
Abstract

   This document defines a Signaling Cipher Suite Value (SCSV) that
   prevents protocol downgrade attacks on the Transport Layer Security
   (TLS) and Datagram Transport Layer Security (DTLS) protocols.  It
   updates RFCs 2246, 4346, 4347, 5246, and 6347.  Server update
   considerations are included.
```

초록 (글이나 문장 따위에서, 필요한 대목만을 가려 뽑아 적음)

이 문서는 Signaling Cipher Suite Value (SCSV) 를 정의한다. SCSV 는 TLS 와 DTLS 프로토콜에서 프로토콜 다운그레이드 공격을 막는 것이다.

...

```
1.  Introduction

   To work around interoperability problems with legacy servers, many
   TLS client implementations do not rely on the TLS protocol version
   negotiation mechanism alone but will intentionally reconnect using a
   downgraded protocol if initial handshake attempts fail.  Such clients
   may fall back to connections in which they announce a version as low
   as TLS 1.0 (or even its predecessor, Secure Socket Layer (SSL) 3.0)
   as the highest supported version.
```

1. 소개

* To work around - 해결하기 위해
* interoperability - 정보 처리 상호 운용, 동맹국에 의한 시설 서비스의 상호 이용, 상호 운용성
* intentionally - 의도적으로, 고의로, 일부러, 이유, 의식적으로
* predecessor - 전임자, 전신

레거시 서버와의 상호 운용성 문제를 해결하기 위해, 많은 TLS 클라이언트 구현들은 TLS 프로토콜 버전 협상 메커니즘에만 의존하지 않지 않고
초기 핸드셰이크 시도가 실패 했을 때 의도적으로 다운그레이드된 프로토콜로 재접속 할 것이다.
그러한 클라이언트들은 TLS 1.0 (또는 이전 버전인 SSL 3.0) 처럼 낮은 버전의 연결로 떨어질 수 있다. (지원하는 최고 버전)

```
While such fallback retries can be a useful last resort for
   connections to actual legacy servers, there's a risk that active
   attackers could exploit the downgrade strategy to weaken the
   cryptographic security of connections.  Also, handshake errors due to
   network glitches could similarly be misinterpreted as interaction
   with a legacy server and result in a protocol downgrade.
```

* fallback - 대체
  * 구글 번역기 - 후퇴, 대체
  * 다음영어사진 - 대체 시스템, 의존할 사물, 후퇴
* resort - 리조트, 으존하다, 휴양지, 수단
* exploit - 활용하다, 착취하다, 업적, 묘기, ...을 이용하다, 개발하다, ...을 부당하게 사용하다, (선전을 통해)촉진하다, 착복하다

