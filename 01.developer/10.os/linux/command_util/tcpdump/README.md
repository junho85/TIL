# tcpdump



## tcpdump 파일로 저장한 내용 tcpdump 로 읽기
-r 옵션으로 읽으면 된다.

다음과 같이 test.pcap 으로 저장을 해 두었다면
```bash
$ sudo tcpdump -i any -s 0 port 80 -w test.pcap
```

```bash
$ tcpdump -r test.pcap
reading from PCAP-NG file test.pcap
23:49:20.020425 IP 183.110.25.18.http > junekimui-mbp.kornet.59350: Flags [F.], seq 3579892103, ack 364471381, win 1015, options [nop,nop,TS val 4239603904 ecr 1067983808], length 0
23:49:20.020472 IP junekimui-mbp.kornet.59350 > 183.110.25.18.http: Flags [.], ack 1, win 4108, options [nop,nop,TS val 1068008864 ecr 4239603904], length 0
23:49:21.465928 IP junekimui-mbp.kornet.59350 > 183.110.25.18.http: Flags [F.], seq 1, ack 1, win 4108, options [nop,nop,TS val 1068010303 ecr 4239603904], length 0
23:49:21.470700 IP 183.110.25.18.http > junekimui-mbp.kornet.59350: Flags [.], ack 2, win 1015, options [nop,nop,TS val 4239605377 ecr 1068010303], length 0
23:49:23.484308 IP junekimui-mbp.kornet.59418 > ns2.daum.net.http: Flags [S], seq 1265409560, win 65535, options [mss 1460,nop,wscale 5,nop,nop,TS val 1068012280 ecr 0,sackOK,eol], length 0
...
```

```bash
$ tcpdump -r test.pcap -X
reading from PCAP-NG file test.pcap
23:49:20.020425 IP 183.110.25.18.http > junekimui-mbp.kornet.59350: Flags [F.], seq 3579892103, ack 364471381, win 1015, options [nop,nop,TS val 4239603904 ecr 1067983808], length 0
    0x0000:  4500 0034 05e5 4000 3606 ac52 b76e 1912  E..4..@.6..R.n..
    0x0010:  c0a8 0164 0050 e7d6 d560 d187 15b9 6455  ...d.P...`....dU
    0x0020:  8011 03f7 3e3e 0000 0101 080a fcb3 38c0  ....>>........8.
    0x0030:  3fa8 23c0                                ?.#.
23:49:20.020472 IP junekimui-mbp.kornet.59350 > 183.110.25.18.http: Flags [.], ack 1, win 4108, options [nop,nop,TS val 1068008864 ecr 4239603904], length 0
    0x0000:  4500 0034 bf0c 4000 4006 e92a c0a8 0164  E..4..@.@..*...d
    0x0010:  b76e 1912 e7d6 0050 15b9 6455 d560 d188  .n.....P..dU.`..
    0x0020:  8010 100c d048 0000 0101 080a 3fa8 85a0  .....H......?...
    0x0030:  fcb3 38c0                                ..8.
...
```

## References
* [How does one use tcpdump to capture incoming traffic?](https://www.corvil.com/kb/how-does-one-use-tcpdump-to-capture-incoming-traffic)

## 블로깅
* [tcpdump - 들어오는 패킷 확인. incoming packet. inbound packet.](http://junho85.pe.kr/1199)
* [tcpdump 파일로 저장한 내용 tcpdump 로 읽기](http://junho85.pe.kr/441)