# 롬라이터로 벽돌된 메인보드 바이오스 롬 살리기
예전에 데스크탑에서 OBS 랑 캡쳐보드를 세팅 하다가 메인보드 바이오스를 날려 버렸다.

캡쳐보드가 잘 동작하지 않아서 이리저리 검색 해 보다가 메인보드 바이오스를 업데이트 하고 나면 좀 나아진다는 글을 보고 했다가 망했다.

좀 더 자세한 상황은 다음글을 참고 한다.

https://junho85.pe.kr/1065
```
Asrock Z77 Pro4 바이오스 업데이트 실패 ㅠㅠ 롬라이터 주문. 도착하면 2탄 작성 예정
데스크탑PC 에 OBS 를 설치하고 CamLink (캡쳐보드) 연결해서 방송과 녹화를 세팅해 보았다.
그런데 CamLink 영상이 도중에 자꾸 Hang 걸려 버려서 방송을 진행 하기는 어려울 거 같았다. 그래서 이래 저래 찾아..
```

아무튼 거대한 벽돌을 만들었었다.

바이오스를 복구 하기 위해 여러 시도를 해 보았지만 결국 다 실패했다. USB 에 롬을 넣어서 부팅을 해 본다던지 등을 해 보았다.

부팅 자체가 안되었기 때문에 무용지물 이었다.

기가바이트 메인보드처럼 아예 롬이 두개 달려 있으면 하나 날려도 회복이 가능하지만 롬이 하나면 그거 망가지면 땡이다.

그런 경우에 롬라이터로 롬을 구워 버리는 방법을 사용한다는 것을 알게 되었다.

## 롬라이터 주문
알리에서 롬라이터를 주문 했다. 가격은 $2.10 달러였다.

보통은 메인보드들이 바이오스 롬을 비슷한 모델들을 사용해서 이 롬라이터로 웬만하면 될 듯 하다.

하지만 혹시 모르니 메인보드의 칩과 롬라이터 호환성을 잘 확인 해 보는 것이 좋다.

롬라이터는 배송시간이 오래 걸렸다.

롬라이터가 도착했을 때는 롬을 복구 시키겠다는 의지가 이미 사라졌다.

## 데스크탑을 다시 써야 되겠다
그러다가 데스크탑을 다시 써야 되겠다 싶은 생각이 들었다.
 
## 복구
롬라이터를 이용해서 바이오스를 되살렸고 결국 데스크탑을 살리는데 성공 하였다.

오랜 시간이 걸렸지만 결국 되살리는데 성공 하였다.

내가 사용하는 메인보드는 Asrock Z77 Pro4 이라는 메인보드인데 다행히도 롬을 쉽게 분리 할 수 있도록 되어 있었다.

롬을 쉽게 분리 할 수 없는 경우 칩을 분리 하거나 특별한 도구를 이용해 하나하나 잘 연결 해 주어야 된다.

롬라이터를 연결하고 flashrom 커맨드를 이용해서 다운받아둔 롬이미지를 롬에 구워 주면 끝이다.

## flashrom
flashrom 이라는 프로그램을 이용한다.

맥에서는

```bash
brew install flashrom
```

으로 설치 하면 된다.

## 복구 관련 커맨드


테스트로 기존에 롬에 있던 내용을 yy.bin 파일로 저장해 보았다.
```bash
$ sudo flashrom -p ch341a_spi -r yy.bin
flashrom v1.0 on Darwin 18.2.0 (x86_64)
flashrom is free software, get the source code at https://flashrom.org

Calibrating delay loop... OK.
Found Winbond flash chip "W25Q64.V" (8192 kB, SPI) on ch341a_spi.
Reading flash... done.

$ stat yy.bin
16777221 12898507266 -rw-r--r-- 1 root staff 0 8388608 "Feb 21 13:18:22 2019" "Feb 21 13:17:29 2019" "Feb 21 13:17:29 2019" "Feb 21 13:17:29 2019" 4096 16384 0 yy.bin
```

다운받은 롬파일과 사이즈를 비교 해 보았다.
```bash
## 새로 올릴 롬. 사이즈가 일치 한다.
$ stat Z77PRO41-1.80
16777221 12898492988 -rwxr-xr-x 1 junho85 staff 0 8388608 "Feb 21 12:30:25 2019" "Jul 11 20:19:34 2013" "Feb 21 12:48:49 2019" "Jul 11 20:19:34 2013" 4096 16384 0 Z77PRO41-1.80
```

write 성공하였다.
```bash
$ sudo flashrom -p ch341a_spi -w Z77PRO41-1.80
flashrom v1.0 on Darwin 18.2.0 (x86_64)
flashrom is free software, get the source code at https://flashrom.org

Calibrating delay loop... OK.
Found Winbond flash chip "W25Q64.V" (8192 kB, SPI) on ch341a_spi.
Reading old flash chip contents... done.
Erasing and writing flash chip... Erase/write done.
Verifying flash... VERIFIED.
```

