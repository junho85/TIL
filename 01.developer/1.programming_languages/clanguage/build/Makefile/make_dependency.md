# dependency
* depend 파일은 .depend 로 만들기도 하고, *.d 로 만들기도 함.

* Makefile 을 보다 보면 다음과 같은 것들을 보게 되는 경우가 있다.
* .depend 파일을 만들고 
```
DEPEND 		    = .depend

dep:
	$(CC) -MM $(CFLAGS) $(LDFLAGS) $(SRCS) > .depend

## Depend
include $(DEPEND)
```

직접 커맨드를 실행해 보면 다음과 같다.
```
$ gcc -I/some/include -MM test_api.c
test_api.o: test_api.c test_api.h \
  /some/include/my_util1.h \
  /some/include/my_util2.h
```
실행 결과를 .depend 에 저장 해 두고 그걸 include 하겠다는 의미이다.

## 참고
* https://kin.naver.com/qna/detail.nhn?d1id=1&dirId=1040101&docId=67041726&qb=TWFrZWZpbGUgZGVwZW5k&enc=utf8&section=kin&rank=1&search_sort=0&spq=0&pid=UvTw4lpVuENssa1OhdhssssstdN-222412&sid=nf8wu96UyEbR2h5v4QbTJw%3D%3D
  * -MMD, -include 에서 -의 의미 등 설명