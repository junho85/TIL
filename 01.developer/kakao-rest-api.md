# kakao developers
[REST API](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api)
REST API를 사용한 카카오 로그인은 PC 및 모바일 웹에서 카카오 로그인 구현 시 적합한 방식.
로그인은 인증 코드 받기, 사용자 토큰 받기의 두 단계를 거침. 먼저 인증 코들르 받고, 그 인증 코드로 사용자 토큰을 요청.

인증 코드 받기
```
GET /oauth/authorize?client_id={app_key}&redirect_uri={redirect_uri}&response_type=code HTTP/1.1
Host: kauth.kakao.com
```

redirect_uri 코드를 리다이렉트 해줄 URI

REST API로 개발하는 경우 kakao developers 에 Redirect URI 를 필수로 설정해야 한다.




카카오 로그인 데모
https://developers.kakao.com/tool/demo/login/login

처음 로그인 시 정보 제공 동의를 받는다.

로그인에 성공하면 token을 발급받는다.

재 로그인 할 때 마다 새로운 token을 발급받는다.



## References
