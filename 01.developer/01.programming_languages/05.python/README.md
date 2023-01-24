# python

## python 2 code to python 3
* https://docs.python.org/3/howto/pyporting.html
* https://docs.python.org/2/library/2to3.html

### migration
2to3 커맨드를 이용하면 쉽게 바꿀 수 있다.

그냥 실행하면 변경 되는 부분을 알려 준다.
```bash
$ 2to3 example.py
```

-w 옵션을 넣고 실행 하면 파일의 소스코드를 변경하고 기존 파일은 백업 파일로 만들어 준다.
```bash
$ 2to3 -w example.py
```


### print to print function
```python2
print "hello world"
```

```python3
print("hello world")
```

### except

