# python - logging
test.log 에 INFO 로그를 남기는 예제
```
logging.basicConfig(format='%(asctime)s %(message)s', filename='test.log', level=logging.INFO)
logging.info("%d; %s; %s" % (200, "name=super", "msg=some message"))
```

test.log
```
2019-10-30 18:59:38,067 200; name=super; msg=some message
```

## References
* [로깅 HOWTO](https://docs.python.org/ko/3/howto/logging.html)