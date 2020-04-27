# Birthday Cake Candles
문제: [Birthday Cake Candles](https://www.hackerrank.com/challenges/birthday-cake-candles/problem)

당신은 조카의 생일케이크를 담당합니다. 그리고 해마다 하나의 초를 가지게 됩니다. 조카는 가장 큰 촛불만 끌 수 있습니다. 당신의 임무는 조카가 불어서 끌 수 있는 초를 준비하는 것입니다.

예를 들어 조카가 4살이 되었고 4, 4, 1, 3 높이의 초가 있으면 가장 큰 4 높이의 초 2개를 끕니다.

birthdayCakeCandles 함수를 완성합니다. 조카가 끌 수 있는 초의 갯수를 리턴합니다.

## 풀이
가장 큰 초의 갯수를 구하면 됩니다. max 함수를 이용해서 리스트에서 가장 큰 값을 찾습니다. list의 count함수를 이용해서 가장 큰 수의 갯수를 구합니다.
```
#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the birthdayCakeCandles function below.
def birthdayCakeCandles(ar):
    return ar.count(max(ar))

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    ar_count = int(input())

    ar = list(map(int, input().rstrip().split()))

    result = birthdayCakeCandles(ar)

    fptr.write(str(result) + '\n')

    fptr.close()
```

## 정리
* [hackerrank - Birthday Cake Candles 2020.04.27](https://junho85.pe.kr/1519)
