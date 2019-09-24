# 1. Two Sum

## 단순풀이
* 첫시도 timeout
* 두번째 성공 했는데 6712ms
* 성능 개선 필요함

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

## array 에 넣고 검색
* 832 ms, 28.50%
```python
class Solution:
    def twoSum(self, nums, target):
        length = len(nums)
        for i in range(length - 1):
            find_num = target - nums[i]

            try:
                right_index = nums[i+1:].index(find_num) + i + 1
                return [i, right_index]
            except ValueError:
                pass


solution = Solution()

print(solution.twoSum([2, 7, 11, 15], 9))
assert(solution.twoSum([2, 7, 11, 15], 9) == [0, 1])
print(solution.twoSum([3, 2, 4], 6))
assert(sorted(solution.twoSum([3, 2, 4], 6)) == sorted([1, 2]))
```