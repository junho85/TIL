# python - ps - loop

## range 의 숫자는 1을 더한다
1 에서 100까지 수를 더하기
```
for i in range(101):
  sum = sum + i
```

## for loop 에서 index 를 알려면 enumerate
```
for i, x in enumerate([1, 3, 5]):
    print(i, x)
```

```
0 1
1 3
2 5
```

## 정리
* [python - 문제 풀이 할 때 알아 두면 유용한 loop 기법](https://junho85.pe.kr/1079)