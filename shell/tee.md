# tee
화면에 출력과 파일 저장을 동시에 할 수 있다.
```
echo "hello" | tee test.log
```
만약 기존에 파일이 있다면 덮어 쓴다.

기존 파일에 덧붙이려면 --append 옵션을 이용한다.
```
echo "hello" | tee --append test.log
```

## references
