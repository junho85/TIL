# 53. Maximum Subarray

## Kadane's algorithm 적용 했지만 코드가 좀 길다
```
class Solution:
    def maxSubArray(self, nums):
        zero_and_positive_numbers = list(filter(lambda x: (x >= 0), nums))

        if len(zero_and_positive_numbers) == 0:
            return max(nums)

        if len(zero_and_positive_numbers) == len(nums):
            return sum(nums)

        # trim left
        for (i, num) in enumerate(nums):
            if num > 0:
                nums = nums[i:]
                break

        # trim right
        for (i, num) in enumerate(nums[::-1]):
            if num > 0:
                nums = nums[:len(nums) - i]
                break

        if len(nums) == 1:
            return nums[0]

        result = 0
        tmp = 0
        for num in nums:
            tmp = max(0, tmp + num)
            result = max(result, tmp)

        return result


s = Solution()
assert (s.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6)
assert (s.maxSubArray([-2, 1]) == 1)
assert (s.maxSubArray([8, -19, 5, -4, 20]) == 21)
assert (s.maxSubArray([3, -3, 2, -3]) == 3)
```

## Kadane's algorithm 적용한 간단한 버전
```python
class Solution:
    def maxSubArray(self, nums):
        tmp = nums[0]
        result = nums[0]

        for num in nums[1:]:
            tmp = max(tmp + num, num)
            result = max(tmp, result)

        return result
```


## References
* [Maximum subarray problem](https://en.wikipedia.org/wiki/Maximum_subarray_problem)
