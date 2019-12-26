# find

## 1MB 이상. *.gz 파일 제외. 파일 사이즈 확인을 위해 ls 커맨드 사용
```
find . -size +1024k ! -name '*.gz' -exec ls -lh {} \;
```