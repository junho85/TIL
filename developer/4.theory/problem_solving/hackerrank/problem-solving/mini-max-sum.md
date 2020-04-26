# Mini-Max Sum
문제: [Mini-Max Sum](https://www.hackerrank.com/challenges/mini-max-sum/problem)

5개의 양의 정수로 이루어진 배열이 있습니다. 4개의 숫자를 더해서 가장 작은 합과 가장 큰 합을 구하는 문제입니다.

간단히 생각해 보면 정렬한 다음 처음부터 4번째까지의 합과, 두 번째부터 마지막까지의 합을 구하면 됩니다.
```python
#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the miniMaxSum function below.
def miniMaxSum(arr):
    sorted_arr = sorted(arr)
    print(sum(sorted_arr[:4]), sum(sorted_arr[1:]))

if __name__ == '__main__':
    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
```
단 두줄 만에 풀었네요. 다만 정렬을 해야 하기 때문에 조금 효율이 떨어질 수 있습니다.

다른 방법도 있습니다. 우선 합계를 구한 다음 최댓값을 빼준 값과, 최솟값을 빼준 값을 구하면 됩니다.
```python
def miniMaxSum(arr):
    arr_sum = sum(arr)
    print(arr_sum - max(arr), arr_sum - min(arr))
```
이 방법도 단 두줄이면 충분하네요. 조금 더 성능을 높이려면 min, max를 한 번에 loop에서 구하면 되긴 합니다.

이런저런 성능 개선의 여지가 있긴 하지만 배열 길이도 짧고 단순한 편이라 이 정도로도 충분해 보입니다. 뭔가 특이한 풀이 방법이 있지 않을까 궁금하네요.

## 정리
* [hackerrank - Mini-Max Sum](https://junho85.pe.kr/1518)
