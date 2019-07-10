# 인터넷 속도 측정
인터넷이 너무 느려요. 확인 해서 알려 주고 싶은데 좀 구체적으로 알릴 방법 없을까? 여러 방법이 있겠지만 인터넷 속도 측정 결과를 알려 주면 최소한의 정보를 알려 주는데 도움이 된다.

* 커맨드라인 툴인 speedtest
  * 업로드, 다운로드 속도를 측정할 수 있다.
* 넷플릭스의 fast.com
  * 인터넷 속도?
  * 업로드 속도
  * 지연 시간 (트래픽 없음, 트래픽 많음)
  * 몇가지 설정이 가능하다. 병렬 접속, 테스트 시간, 업로드 중 부하 지연 식나 측정, 항상 모든 측정치 보기, 이 디바이스 구성 저장
* 통신사들에서 제공 하는 인터넷 속도 측정 사이트들
  * https://speed.kt.com/speed/speedtest/introduce.asp
  * http://www.uplus.co.kr/css/qlty/sped/RetrieveSpeedInfo.hpi
* 기타
  * http://speed.nia.or.kr
    * 한국정보화진흥원
  * https://www.benchbee.co.kr/
    * 예전(2000년 초반?)에는 여기서 많이 측정 했던 것 같다.
  * https://www.speedcheck.org
    * Latency, Download/Upload 속도를 측정 해 볼 수 있다.

## speedtest
* https://github.com/sivel/speedtest-cli

### usage

#### OSX
```bash
$ speedtest
Retrieving speedtest.net configuration...
Testing from Korea Telecom (211.56.96.51)...
Retrieving speedtest.net server list...
Selecting best server based on ping...
Hosted by kdatacenter.com (Seoul) [20.24 km]: 9.505 ms
Testing download speed................................................................................
Download: 105.63 Mbit/s
Testing upload speed................................................................................................
Upload: 97.10 Mbit/s
```

speedtest-cli 로도 실행 가능하다.

#### python, curl
설치 해 두면 편리 하지만 설치 하기 귀찮으면 다음과 같은 방법을 사용할 수 있다.
```bash
$ curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -
```

## 설치 Installation
### OSX
```bash
$ brew install speedtest-cli
```

업그레이드
```bash
$ brew upgrade speedtest-cli
```

### linux
```
$ sudo pip install speedtest-cli
```

```
$ easy_install speedtest-cli
```


## fast.com
* https://fast.com/ko/

netflix 에서 만든 인터넷 속도 측정 툴

* [Building fast.com 2016.08.09](https://medium.com/netflix-techblog/building-fast-com-4857fe0f8adb)


## NIA
* http://speed.nia.or.kr


## References
* [speedtest-cli - CLI 로 인터넷 속도 측정. 맥북과 호스팅 서버 테스트 2018.08.27](https://junho85.pe.kr/1054)
* [리눅스에서 터미널(명령어)에서 인터넷 속도 체크하기(speedtest-cli) 2017.11.06](http://blog.naver.com/chandong83/221133546502)
* [How to run a speed test from command line using speedtest-cli 2019.01.30](https://linuxconfig.org/how-to-run-a-speed-test-from-command-line-using-speedtest-cli)