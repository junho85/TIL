# tcpdump - 들어오는 패킷 확인. incoming packet. inbound packet.
filter 에 inbound 를 넣어 주면 된다. 아래는 512~514 port inbound 패킷을 확인 하는 예제이다. (-i any 은 모든 인터페이스, -s 0 은 snapshot-length default 값 사용)
```bash
$ sudo /usr/sbin/tcpdump -i any -s 0 inbound and portrange 512-514
```

* [](https://explainshell.com/explain?cmd=tcpdump+-i+any+-s+0+inbound+and+portrange+512-514#)
  * 2019.01.18 아직 설명 못하는 옵션이 많음.