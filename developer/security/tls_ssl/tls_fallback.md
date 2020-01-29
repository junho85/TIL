# TLS Fallback


## 관련글
* [This POODLE bites: exploiting the SSL 3.0 fallback 2014.10.14](https://security.googleblog.com/2014/10/this-poodle-bites-exploiting-ssl-30.html)
SSL 은 18년이 지났지만 많이 지원하고 있음.
https 서버들의 버그를 우회하기 위해 ssl 3.0 을 포함한 옛버전으로 커넥션 재시도 함.
네트워크 공격자는 커넥션 실패를 유발시켜서 문제를 악용할 수 있음. (어떤식을지 궁금)
SSL 3.0 을 끄거나 SSL 3.0 의 CBC-mode 사이퍼를 끄면 되지만, 오늘날에도 심각한 호환성 문제가 있다.
따라서 TLS_FALLBACK_SCSV를 지원하는 것이 좋다. 실패한 연결을 다시 시도하여 발생하는 문제를 해결하여 공격자가 브라우저에서 SSL 3.0을 사용하도록 유도하지 못하게 하는 메커니즘이다.
또한 TLS 1.2에서 1.1 또는 1.0으로 다운 그레이드하는 것을 방지하므로 향후 공격을 방지하는 데 도움이 될 수 있다.
Chrome 과 Google 서번느 2월부터 TLS_FALLBACK_SCSV를 지원하므로 호환성 문제없이 사용할 수 있다는 좋은 증거가 있다. 또한 Chrome은 오늘 SSL 3.0으로의 fallback 을 비활성합니다.
이 변경으로 인해 일부 사이트가 중단되고 해당 사이트를 신속하게 업데이트해야합니다.
앞으로 몇 달 안에 클라이언트에서 SSL 3.0에 대한 지원을 완전히 제거 할 것이다.

## References
* [TLS Fallback Signaling Cipher Suite Value (SCSV) for Preventing Protocol Downgrade Attacks](https://tools.ietf.org/html/rfc7507)

```
TLS_FALLBACK_SCSV          {0x56, 0x00}
```

4. 클라이언트 행위 (Client behavior)
TLS_FALLBACK_SCSV cipher suite 값은 레거시 서버들에서의 문제를 피하기 위해 클라이언트로 하여금 낮은버전의 프로토콜로 커넥션 시도를 반복하라는 의미입니다.
이 섹션은 언제 보내야 하는지 말합니다.

* 클라이언트가 ClientHello.client_version 에 클라이언트가서 지원하는 가장 높은 값보다 작은 값을 포함해서 보낸다면, TLS_FALLBACK_SCSV cipher suite 값을 ClientHello 에 ...

* [How does TLS_FALLBACK_SCSV help?](https://crypto.stackexchange.com/questions/19673/how-does-tls-fallback-scsv-help)
  * 더 나은 세계에서는 TLS_FALLBACK_SCSV 는 필요 없을수도 있다. SSL 은 최소 3.0 부터 downgrade-proof version negotiation 을 지원해 왔고, 그래서 man in the middle 은 상호 지원되는 채대 값보다 오래된 버전으로의 연결을 제한 할 수 없어야 한다.
  * 그렇지만, 그러한 version negotiation 을 지원하지 않는 망가진 서버들이 있다. ClientHello 에서 알 수 없는, 즉 최신, 버전 번호 또는 알 수 없는 TLS 확장을 수신하면 crash 가 발생함. (적합한 서버는 충돌하지 않지만 클라이언트에게 더 낮은 버전의 프로토콜을 사용하라고 클라이언트에 알리면 상호 지원되는 가장 높은 버전을 사용하여 연결된다.) 