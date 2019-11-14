# python - bisect
* 정렬이 되어 있는 데이터를 빠르게 검색할때 사용합니다.
* bisect_left 는 찾은 위치.
* birsect_right 는 찾은 위치 다음.
* bisect 는 birsect_right 와 같음.

```
import bisect

apply_order = [9, 10, 6, 5, 4, 3, 1]
sorted_apply_order = sorted(set(apply_order))
print(sorted_apply_order) # [1, 3, 4, 5, 6, 9, 10]

print(bisect.bisect_left(sorted_apply_order, 3)) # 1
print(bisect.bisect_right(sorted_apply_order, 3)) # 2
print(bisect.bisect(sorted_apply_order, 3)) # 2
```

## References
* [bisect — Array bisection algorithm](https://docs.python.org/3/library/bisect.html)
* [bisect – 이진탐색 알고리듬](https://soooprmx.com/archives/8722)