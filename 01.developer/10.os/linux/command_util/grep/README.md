# grep
## 기본 사용법
```bash
$ grep keyword filename
```

## 순차적으로 검색값이 있는 경우
```
$ grep -E "pattern1.*pattern2"
```

## 패턴 파일 이용하기
```
grep -f patterns
```

file.txt
```
hello world
nice world
good day
```

patterns
```
world
```

```
$ cat file.txt | grep -f patterns
hello world
nice world
```



## References
* [[Linux] grep 명령어에서 AND, OR, NOT 조건 사용하기](https://twpower.github.io/173-grep-and-or-not)