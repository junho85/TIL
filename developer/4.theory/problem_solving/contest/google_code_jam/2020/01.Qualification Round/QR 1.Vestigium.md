# 1. Vestigium (7pts)
* [Vistigium (7pts)](https://codingcompetitions.withgoogle.com/codejam/round/000000000019fd27/000000000020993c)

```
Vestigium means "trace" in Latin. In this problem we work with Latin squares and matrix traces.

The trace of a square matrix is the sum of the values on the main diagonal (which runs from the upper left to the lower right).

An N-by-N square matrix is a Latin square if each cell contains one of N different values, and no value is repeated within a row or a column. In this problem, we will deal only with "natural Latin squares" in which the N values are the integers between 1 and N.

Given a matrix that contains only integers between 1 and N, we want to compute its trace and check whether it is a natural Latin square. To give some additional information, instead of simply telling us whether the matrix is a natural Latin square or not, please compute the number of rows and the number of columns that contain repeated values.
```
Vistigium은 라틴어로 "추적하다(trace)"를 의미합니다.

정방행렬(N-by-N의 square matrix)의 trace는 왼쪽위 부터 오른쪽 아래까지 대각선 숫자의 합입니다.

N-by-N 매트릭스 이면서 행(row)과 열(column)의 숫자가 N개의 서로 다른 숫자이면서 반복되지 않는다면 Latin square입니다.

주어지는 매트릭스는 1 N사이의 숫자로 이루어져 있습니다. 우리는 trace를 구하고 싶고 이 매트릭스가 natural Latin square인지 를 확인하려고 합니다. 좀 더 설명을 하자면 단순히 이것이 natural Latin square인지 아닌지를 알려달라는 것이 아니고 반복되는 숫자를 가진 행(row)의 갯수와 열(column)의 갯수를 계산해 주세요.

## 입력
입력값 예제
```
3
4
1 2 3 4
2 1 4 3
3 4 1 2
4 3 2 1
4
2 2 2 2
2 3 2 3
2 2 2 3
2 2 2 2
3
2 1 3
1 3 2
1 2 3
```

## 출력
```
Case #x: k r c
```

x는 1부터 시작하는 테스트 번호
k는 매트릭스의 trace
r는 반복되는 숫자를 가진 행(row)의 갯수
c는 반복되는 숫자를 가진 열(column)의 갯수

출력값 예제

```
Case #1: 4 0 0
Case #2: 9 4 4
Case #3: 8 0 2
```

## 풀이
첫번째 문제라 비교적 쉽게 풀 수 있는 문제입니다. n만큼 loop를 돌면서 m[i][i]의 합을 구하면 trace입니다. row를 set에 넣고 길이가 n이 아니면 r을 1증가 시킵니다. 마찬가지로 column을 set에 넣고 길이가 n이 아니면 c를 1증가 시킵니다. 

제출버전
```
tc = int(input())

def solve(nc, m):
    k = sum(m[i][i] for i in range(nc))
    r = 0
    c = 0
    for i in range(nc):
        if len(set(m[i])) != nc:
            r += 1
        column = [row[i] for row in m]
        if len(set(column)) != nc:
            c += 1

    return str(k) + " " + str(r) + " " + str(c)


for t in range(1, tc+1):
    nc = int(input())
    m = []
    for n in range(1, nc+1):
        row = [int(i) for i in input().split()]
        m.append(row)
    ans = solve(nc, m)
    print("Case #" + str(t) + ": " + ans)
```

다시 짜본 버전. 크게 달라진 건 없음.
```python
for t in range(int(input())):
    m = []
    nc = int(input())
    for n in range(nc):
        m.append([int(x) for x in input().split()])

    trace = 0
    rbad = 0
    cbad = 0

    for n in range(nc):
        if len(set(m[n])) != nc:
            rbad += 1

        if len(set([m[x][n] for x in range(nc)])) != nc:
            cbad += 1

        trace += m[n][n]

    print("Case #" + str(t+1) + ": ", trace, rbad, cbad)
```

## 정리
* [Google Code Jam 2020 QR 1 Vestigium 풀이 2020.04.08](https://junho85.pe.kr/1500)
