# spotlight

## spotlight 가 안뜨면
왜인지 모르겠지만 catalina 업그레이드 하고 나서 spotlight 가 종종 안나타나고 있네요. 이럴 때는 SystemUIServer 를 죽이면 알아서 다시 살아 나면서 spotlight 도 살아납니다.

```
killall SystemUIServer
```

