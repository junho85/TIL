# 30-Day LeetCoding Challenge
* [30-Day LeetCoding Challenge](https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/)

## Week 1
* [Single Number](https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/)
```
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
```
정수 배열에서 숫자 하나 빼고는 모두 두 번씩 나옵니다. 한 번만 나오는 숫자를 찾으세요.

노트: 알고리즘은 선형 런타임 복잡성을 가져야 합니다. 여분의 메모리를 사용하지 않고 구현할 수 있을까요?
```
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
```

Example 1:
```
Input: [2,2,1]
Output: 1
```

Example 2:
```
Input: [4,1,2,1,2]
Output: 4
```

첫 번째 문제인 만큼 난이도는 쉽습니다. 푸는 방법도 다양할 거 같네요. 노트에 적혀 있는 여분의 메모리를 사용하지 않고 구현한다니 그건 좀 쉽지 않아 보이네요.

간단하게 구현해 보았습니다.
```
class Solution:
    def singleNumber(self, nums):
        temp = {}
        for num in nums:
            if num not in temp:
                temp[num] = 1
            else:
                del temp[num]

        return temp.popitem()[0]

s = Solution()
assert(s.singleNumber([2,2,1]) == 1)
```
Dictionary를 만들고 숫자가 Dictionary에 없으면 넣고 있으면 뺍니다. 그러면 마지막에 남은 녀석이 답이겠죠.

공식 풀이는 4가지가 올라와 있네요. 제가 푼 방법은 두 번째 풀이와 유사합니다. 첫 번째 풀이는 리스트를 이용하는데 접근 방법은 비슷합니다. 다만 리스트를 이용하다 보니 이미 존재하는 숫자를 찾는데 loop를 사용해야 되어서 좀 O(n^2)가 됩니다.

Dictionary(hash table)을 이용하면 O(n)이 됩니다.

3번째 풀이 방법은 set으로 고윳값만 추출해낸 것의 합을 2로 곱하고 리스트의 합을 빼는 방법을 이용하는 방법입니다. 기발한 방법이네요.

4번째 풀이 방법은 XOR bit 연산을 이용합니다. a XOR 0 = a이고 a XOR a = 0 임을 이용합니다. 그럼 결국 하나만 있는 녀석이 남게 되겠네요. 메모리를 거의 사용하지 않고 해결할 수 있는 기막힌 방법입니다. 다만 논리 연산에 대해서 배우지 않은 사람들에게는 다소 이해하기 어려울 수 있겠습니다.

## 정리
* [leetcode - 30-Day LeetCoding Challenge - 1. Single Number 2020.04.20](https://junho85.pe.kr/1512)
