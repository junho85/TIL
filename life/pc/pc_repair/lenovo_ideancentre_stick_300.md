# Lenovo Ideacentre Stick 300-01IBY
* 지인이 Lenovo Ideacentre Stick 300 바이오스 버전업 하다가 벽돌이 되었다고 해서 살펴 보는중.

## 작업
* 준비: 롬파일 다운받아 두기
* 스틱PC 분해
* 바이오스 칩 위치 확인
* 롬파일 업로드

## 바이오스 업데이트 하라는 글
* UEFI 툴로 BIOS 플래시하기 - ideacentre stick 300
  * https://support.lenovo.com/kr/ko/solutions/ht118103
  * FAT32 로 포멧
  * EFI/BOOT 폴더 생성
  * efi_shell.zip 다운받고 압축풀고 BOOTIA32.efi 파일을 EFI/BOOT 에 복사

## 바이오스 업데이트 후 맛이 간 경우
* Ideacentre Stick 300-01IBY not booting after Bios Update 2017.06.03
  * https://forums.lenovo.com/t5/Lenovo-Beacon-Stick-300-D-J-and/Ideacentre-Stick-300-01IBY-not-booting-after-Bios-Update/td-p/3695300
  * It goes into an endless loop of LED flashing with no signal to the display.
  * 해결 되지 않음.
  
## 기타
* Repairing the Lenovo Ideacentre 300 Stick Computer 2017.09.19
  * https://www.youtube.com/watch?v=gQ3HDt8r4iw
  * 분해하는 영상
  * 어디 짱박아 뒀는데 불도 안들어 오던 상태
  * 바이오스 배터리 
* How to recover your IdeaCentre Stick 300 2016.02.19
  * https://www.youtube.com/watch?v=ruSvu0ZEAlM
* Flash bios intel computer stick คอมอะไรตัวเล็กจัง
  * https://www.youtube.com/watch?v=PNp2ygOjiKg
  * 이건 다른거긴 하지만 비슷하게 생김
  
* [Flashing a BIOS chip with a Raspberry Pi](https://tomvanveen.eu/flashing-bios-chip-raspberry-pi/)
* [How to program an SPI flash chip with the Raspberry Pi](https://libreboot.org/docs/install/rpi_setup.html)
* [[RASPBERRY-PI] Raspberry Pi Zero WH (with Header)](https://www.devicemart.co.kr/goods/view?no=1384052)
* 예전 작업 참고 https://junho85.pe.kr/1065
* grant 작업 후기 올라오면 참고