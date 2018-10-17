# 비밀지도

* 두 맵을 비트 연산한다.
* 비트 연산 한 결과 앞을 0 으로 채워 준다.
* 0 은 ' ', 1 은 '#' 으로 변환한다.

## python3
* https://programmers.co.kr/learn/courses/30/lessons/17681?language=python3

```python
def solution(n, arr1, arr2):
    answer = []

    for idx in range(n):
        result_arr = arr1[idx] | arr2[idx]

        answer.append(format(result_arr, 'b').zfill(n).replace('1', '#').replace('0', ' '))

    return answer

# test
print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
print(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]))
```

## javascript
* https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

```javascript
function solution(n, arr1, arr2) {
    var answer = [];
    
    for (var i=0; i<n; i++) {
        var result_arr = arr1[i] | arr2[i];
        
        answer.push(result_arr.toString(2).padStart(n, '0').replace(/1/g, '#').replace(/0/g, ' '));
    }
    return answer;
}
```



## 참고
* http://junho85.pe.kr/1080