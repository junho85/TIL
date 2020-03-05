# netstat
* -l, --listening: 연결 가능한 상태
* -n, --numeric don't resolve names
  --numeric-hosts don't resolve host names
  --numeric-ports don't resolve port names
  --numeric-users don't resolve user names
* -p, --programs PID/Program 이름 표시
* -a, --all, --listening 모든 소켓 표시 (기본: connected)
* -t, --tcp
* -u, --udp

## 자주 사용하는 커맨드
```
netstat -nap
```
* n 으로 도메인이 아닌 IP 숫자로 표시. 프로토콜도 http 이 아닌 80 처럼 숫자로 표시. 도메인 표시 하면 느린데 n 으로 숫자만 보이도록 하면 빠르다.
* a tcp/udp 구분 없이 전체에 listening 인거. udp 가 필요 없다면 tl 을 쓰면 된다.
* p 프로그램 이름 표시

위에서 udp 뺀거
```
netstat -ntpl
```

## References
* [netstat 명령어를 통한 네트워크 상태 확인 방법 2018.10.30](https://blog.naver.com/ncloud24/221388026417)
