# 1. Vestigium (7pts)
* [Vistigium (7pts)](https://codingcompetitions.withgoogle.com/codejam/round/000000000019fd27/000000000020993c)

```
Vestigium means "trace" in Latin. In this problem we work with Latin squares and matrix traces.

The trace of a square matrix is the sum of the values on the main diagonal (which runs from the upper left to the lower right).

An N-by-N square matrix is a Latin square if each cell contains one of N different values, and no value is repeated within a row or a column. In this problem, we will deal only with "natural Latin squares" in which the N values are the integers between 1 and N.

Given a matrix that contains only integers between 1 and N, we want to compute its trace and check whether it is a natural Latin square. To give some additional information, instead of simply telling us whether the matrix is a natural Latin square or not, please compute the number of rows and the number of columns that contain repeated values.
```
Vistigium은 라틴어로 "추적하다"을 의미합니다.

사각매트릭스의 trace는 왼쪽위 부터 오른쪽 아래까지 대각선 숫자의 합입니다.

매트릭스는 N-by-N
행(row), 열(column)에는 같은값이 반복되지 않습니다.

반복되는 숫자의 갯수

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
Case #x: k r c

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
