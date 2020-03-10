# 3. Longest Substring Without Repeating Characters

```
class Solution:
    def get_length(self, s: str):
        myset = set()
        for i in range(len(s)):
            if s[i] in myset:
                return i
            myset.add(s[i])
        return len(s)

    def lengthOfLongestSubstring(self, s: str):
        if len(s) == 0:
            return 0

        max = 0
        for i in range(len(s)):
            ret = self.get_length(s[i:])
            if ret > max:
                max = ret
            if len(s) - i < max:
                return max
        return max
```

```
Runtime: 520 ms, faster than 14.55% of Python3 online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 13 MB, less than 99.49% of Python3 online submissions for Longest Substring Without Repeating Characters.
```

함수 줄이기
```
class Solution:
    def lengthOfLongestSubstring(self, s: str):
        if len(s) == 0:
            return 0

        max_len = 0
        # substring 하기 위한 위치를 구하기 위한 loop
        for i in range(len(s)):
            sliced_s = s[i:]
            # 앞에서 부터 하나씩 없어진 문자열로 loop 를 돕니다
            # 중복된 문자가 보이면 거기서 멈춥니다
            check_set = set()
            for j in sliced_s:
                # set 을 이용해서 중복된 문자가 있는지 검사합니다
                if j in check_set:
                    break
                else:
                    check_set.add(j)

            if len(check_set) > max_len:
                max_len = len(check_set)

        return max_len
```
```
Runtime: 376 ms, faster than 18.30% of Python3 online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Longest Substring Without Repeating Characters.
```
