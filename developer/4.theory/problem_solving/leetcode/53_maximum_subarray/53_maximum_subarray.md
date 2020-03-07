# 53. Maximum Subarray
* [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/submissions/)

숫자로 이루어진 배열에서 합이 최대가 되는 부분배열 찾는 문제이다. 몇가지 생각해 볼 수 있는 부분으로는 0과 음수로만 이루어져 있다면 최고 큰 숫자 하나로 된 배열의 합이 답이다. 양수로만 이루어져 있다면 모든 숫자를 합한 값이 답이다.

음수와 양수로 섞여 있다면 거기서 합의 최대가 되는 부분배열을 찾으면 되는데 여기서도 시작과 끝은 양수이면 된다. 양쪽 끝부분이 양수가 될때 까지 음수 값들은 버려도 된다.

brute force 하게 생각해 보면 대충 다음과 같은 알고리즘을 생각해 볼 수 있다.
```
result = 0
for i in range(len(nums)):
    for j in range(len(nums)):
        tmp = sum(nums[i:j + 1])
        if tmp > result:
            result = tmp
```
당연하게도 Time Limit Exceeded 가 발생한다. sum 도 내부적으로는 for loop 를 돌기 때문에 O(n3) 시간이 소요될 것이다.

Kadane's algorithm 라는 것이 있는데 이것을 이용하면 for loop 하나로 해결 할 수 있다. O(n) 이라니 넘나 획기 적인거.

앞에서 부터 하나씩 더하면서 기존 합보다 현재 값이 더 크면 그 값을 기억해 뒀다가 그 값과 결과값중에 더 큰 값을 결과값으로 사용하는 것이다.

뭔가 아하~ 하지만 이걸 모르는 상태에서 이런걸 생각해 낼 수 있을지는 모르겠다;;


## References
* [Maximum subarray problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
* [Kadane Algorithm 2016.09.24](https://previc.tistory.com/38)
