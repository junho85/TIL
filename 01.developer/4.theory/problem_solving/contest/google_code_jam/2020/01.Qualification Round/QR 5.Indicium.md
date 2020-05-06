# 5. Indicium (7pts, 25pts)
* [Indicium (7pts, 25pts)](https://codingcompetitions.withgoogle.com/codejam/round/000000000019fd27/0000000000209aa0)

## 문제
```
Indicium means "trace" in Latin. In this problem we work with Latin squares and matrix traces.

A Latin square is an N-by-N square matrix in which each cell contains one of N different values, such that no value is repeated within a row or a column. In this problem, we will deal only with "natural Latin squares" in which the N values are the integers between 1 and N.

The trace of a square matrix is the sum of the values on the main diagonal (which runs from the upper left to the lower right).

Given values N and K, produce any N-by-N "natural Latin square" with trace K, or say it is impossible. For example, here are two possible answers for N = 3, K = 6. In each case, the values that contribute to the trace are underlined.

2 1 3   3 1 2
3 2 1   1 2 3
1 3 2   2 3 1
```

## 입력
```
2
3 6
2 3
```

## 출력
```
Case #1: POSSIBLE
2 1 3
3 2 1
1 3 2
Case #2: IMPOSSIBLE
```


## References
* [Latin square](https://en.wikipedia.org/wiki/Latin_square)
