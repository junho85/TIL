# 슬라이드쉐어 한글 폰트 깨지는 문제 해결

## 요약
커맨드 라인 명령어로 아래와 같은 방식으로 처리
```bash
$ LANG=C LC_ALL=C sed -i '' s'|/Registry (Adobe) /Ordering (Korea1) /Supplement [0-9]|/Registry(Adobe) /Ordering(Identity) /Supplement 0|g' /path/to/pdf.pdf
```

또는, 웹툴 이용 https://beomi.github.io/SlideShare_Character_Updater/

## 왜 안될까?

```bash
cat /path/to/pdf.pdf | grep -a Ordering
```
로 보면 Korea1 이라고 나온다.
```bash
$ cat '20190601 Konva 발표 june.kim.pdf' | grep -a Ordering
/CIDSystemInfo << /Registry (Adobe) /Ordering (Korea1) /Supplement 0 >> /W
/CIDSystemInfo << /Registry (Adobe) /Ordering (Korea1) /Supplement 0 >> /W
/CIDSystemInfo << /Registry (Adobe) /Ordering (Korea1) /Supplement 0 >> /W
```
SlideShare 에서는 지원 하지 않는 것으로 보인다.

SlideShare 가 지원하는 Identity 로 바꿔버린다.

안전하다고 보장 할 수는 없지만 아무튼 된다.

## 2019.06.03 메모
* 잔디콘에서 발표한 자료를 이 방법으로 올려 보았다.

https://www.slideshare.net/junho85/20190601-konvajs-canvas-2d-148748405

그런데 슬라이드쉐어 아래쪽에 자동으로 만들어 주는 설명은 다 깨져 버리는거 같음.


## References
* [SlideShare에서 자국어 폰트 사용하기 2016-10-31](https://item4.github.io/2016-10-31/Way-to-Use-Homeland-Fonts-on-SlideShare/)

