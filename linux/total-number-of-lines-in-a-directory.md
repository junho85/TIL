# 디렉토리안의 전체 파일 라인수 구하는 방법
```bash
cat * | wc -l
```
파일이 너무 많은 경우 조금 느리지만 다음과 같은 방법을 사용할 수 있다.

```bash
for file in *; do cat "$file"; done | wc -l
```

## References
* https://stackoverflow.com/questions/47026533/total-number-of-lines-in-a-directory