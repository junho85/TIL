# Super Famicom Mini Hacking
* Hakchi2 를 이용한다. Windows OS 에서 사용 가능하다.
* https://github.com/ClusterM/hakchi2/releases 에서 최신 버전을 받는다. (2019.10.26 기준으로 2.31 이 최신버전)
* 압축파일 받아서 풀고 실행한다. 해킹하려고 하는 콘솔 기종을 선택한다. 우측 하단에 "슈퍼 패미콤 (일본)"을 선택한다.

## 덤프
* 일단 원본 커널을 덤프해둔다. 순정으로 돌릴 때 사용하기 위함이다.
* 패미콤을 윈도우PC 와 USB 로 연결한다. 패미컴을 켤 때 RESET 버튼을 누른채로 POWER 스위치를 올린다. 뭔가 윈도우에서 세팅 될것이다.
* 그러고 RESET 을 떼면 POWER LED 가 들어 오지 않는 상태일 것이다.
* 드라이버를 설치한다.

## 커스텀커널 설치
* 커널 -> 커스텀커널 설치

## retroarch-clover 설치
* [retroarch-clover](https://github.com/ClusterM/retroarch-clover/releases)
* retroarch_with_cores.zip 받아서 hachi2 에 끌어 놓기
* 게임 실행 옵션에 -retroarch 를 추가해 준다.
* 기본 에뮬레이터로는 실행이 안되는 게임이 많은데 이걸 추가 하면 되는게 많아짐
* retroarch 의 기능들을 활용할 수 있게 됨.

## 롬넣기
* hakchi2 에 롬파일을 끌어다 놓고 싱크 하면 된다.

## 기타
* 설정 -> USB 호스트 활성화.


## 서명안된 드라이버 설치 할 수 있도록

* [윈도우10에서 서명안된 드라이버 설치 방법 2015.11.02](https://notemylife.tistory.com/29)

## hachi2

* [hakchi2](https://github.com/ClusterM/hakchi2)
* [Changelog](https://github.com/ClusterM/hakchi2/wiki/Changelog)
* [USB storage guide](https://github.com/ClusterM/hakchi2/wiki/USB-storage-guide)
  * 2.30 부터는 USB storage 로 확장이 가능해 짐.


* [](https://github.com/ClusterM/retroarch-clover)

* [Hakchi2-CE](https://github.com/TeamShinkansen/hakchi2)
  * ClusterM 것을 fork 딴 것

USB host 기능을 지원한다. 스토리지 확장이 가능하다.


## References
* [HOW-TO PLAY PS1 GAMES ON YOUR SNES CLASSIC MINI ](https://snesclassicmods.com/how-to-play-playstation-games-on-your-snes-classic-mini/)
* [슈퍼패미콤 미니 (SNES CLASSIC MINI) 용량 확장 OTG 2017.12.26](https://fafan.kr/board/view.aspx?id=wiibbs&rno=24503&page=1)


* [슈퍼패미컴 미니(snes mini) 해킹 강좌 [2018-06-14 최종 수정]]](https://blog.naver.com/sinsis/221187459825)
* [슈퍼패미콤 미니 개봉기 및 해킹(USB-Host)](https://blog.naver.com/refrain/221232656078)

* [[슈퍼패미콤 미니] 슈퍼패미콤 미니에서 마메 게임하기 2017.10.28](https://blog.taeseong.me/385)
* [[슈퍼패미콤 미니] 슈퍼패미콤 미니에서 네오지오 게임하기 2017.10.30](https://blog.taeseong.me/386)
* [ADD MORE STORAGE WITH EXTERNAL USB HARD DRIVE (USB-HOST) MOD FOR SNES CLASSIC MINI](https://snesclassicmods.com/add-more-storage-with-external-usb-hard-drive-mod-for-snes-classic-mini/)