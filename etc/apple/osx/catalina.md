# Catalina
## / 에 디렉토리 만들기
### /etc/synthetic.conf 로 심볼릭 링크 만들기
/etc/synthetic.conf 에
```
test	/Users/junho85/test
```
처럼 작성하면 /Users/junho85/test 에 연결된 /test 심볼릭 링크각 생성됩니다.

(주의) test 와 path 사이에는 탭(\t) 으로 띄워 주어야 합니다. 스페이스로 하면 안됨.

### 진짜로 디렉토리를 만들려면 SIP 해제후 / 디렉토리를 쓰기 가능하도록 설정
부팅시 Cmd + R 눌러서 리커버리 모드로 진입

SIP 을 꺼줍니다.
```
$ csrtuil disable
```
재시작

터미널에서
```
$ sudo mount -uw /
```
하면 쓰기 가능 하도록 바뀜.

이제 디렉토리를 만들어 주면 됩니다.

SIP 을 다시 켜고 싶다면 다시 리커버리 모드로 부팅 후
```
$ csrutil enable
```



### 정리
* [macOS - Catalina / (root) 에 디렉토리 만들기](https://junho85.pe.kr/1458)

### References
* [Deleting root files/folders in Catalina](https://forums.developer.apple.com/thread/119790)