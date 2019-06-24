# java SSL/TLS

## Handshake
https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html#Fig1

```
       Client                                  Server
1. Client hello
                                2. Server hello
                                3. Certificate (optional)
                                4. Certificate request (optional)
                                5. Server key exchange (optional)
                                6. Server hello done
7. Certificate (optional)
8. Client key exchange
9. Certificate verify (optional)
10. Change cipher spec
11. Finished
                                12. Change cipher spec
                                13. Finished
14. Encrypted data              14. Encrypted data
15. Close messages              15. Close messages
```

1. Client hello
클라이언트는 SSL, cipher suites 정보들을 서버로 보낸다.

2. Server hello
서버가 가장 높은 버전의 SSL 과 최고의 cipher suite 를 골라서 클라이언트에게 알려 준다.

3. Certificate (optional)
서버가 인증서나 인증서 체인을 클라이언트로 보낸다.
