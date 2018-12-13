# 1. Two Sum

* https://leetcode.com/problems/two-sum/
* leetcode 첫번째 문제
* 배열의 두 값의 합이 target 과 같은 것의 index 두개 리턴

## python3
```python3
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        length = len(nums)
        for i in range(length - 1):
            left = nums[i]

            for j in range(i+1, length):
                right = nums[j]
                sum = left + right
                if sum == target:
                    return [i, j]


solution = Solution()

assert(solution.twoSum([2, 7, 11, 15], 9) == [0, 1])
```
* 첫시도 timeout
* 두번째 성공 했는데 6712ms
* 성능 개선 필요함
