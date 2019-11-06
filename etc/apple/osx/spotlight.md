# spotlight

## spotlight 가 안뜨면
왜인지 모르겠지만 catalina 업그레이드 하고 나서 spotlight 가 종종 안나타나고 있네요. 이럴 때는 SystemUIServer 를 죽이면 알아서 다시 살아 나면서 spotlight 도 살아납니다.

```
killall SystemUIServer
```

참고로 spotlight 가 죽은게 아니고 UI 상 보이지 않는 것이더군요. spotlight 가 떳다고 생각하고 커맨드 입력하고 엔터 치면 실행이 되긴 합니다.