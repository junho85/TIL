# Length of the longest substring without repeating characters
부분 문자열 중 반복되지 않는 문자가 없는 가장 긴 부분 문자열의 길이를 구하는 문제입니다.

"abca" 라는 문자열이 있을 때 답은 3입니다. "abc" 이거나 "bca" 일 때 중복되지 않으면서 가장 길 문자열이기 때문입니다.

## 단순한 방법
간단히 생각해 보면 모든 부분 문자열을 구하고 중복 되지 않는 것들 중 가장 긴 것을 찾으면 됩니다.

모든 부분 문자열을 구해볼까요?

```
a
ab
abc
abca
b
bc
bca
c
ca
a
```
모두 10개가 나옵니다. 부분 문자열의 개수는 n*(n+1)/2 개 입니다.

시간복잡도를 구해보면 문자열 위치를 구하기 위한 loop, 부분 문자열에 중복된 문자가 없는지 검사하기 위한 loop 가 두개입니다. O(n^3) 가 되겠네요.

코드로 작성해 보면 다음과 같습니다.
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str):
        if len(s) == 0:
            return 0

        max = 0
        # substring 하기 위한 위치를 구하기 위한 loop
        for i in range(len(s)):
            sliced_s = s[i:]
            # 앞에서 부터 하나씩 없어진 문자열로 loop 를 돕니다
            for j in range(len(sliced_s)):
                substring = sliced_s[:j + 1]

                # set 을 이용해서 중복된 문자가 있는지 검사합니다
                check_set = set()
                for k in substring:
                    if k in check_set:
                        break
                    else:
                        check_set.add(k)
                if len(check_set) > max:
                    max = len(check_set)

        return max
```
이렇게 해도 웬만큼 답은 나오겠지만 문제 풀이 사이트에 제출하면 대부분 시간초과가 나올 것입니다.

## 개선하기
모든 부분 문자열을 구할 필요는 없습니다. abcabc 라는 문자열이 있을 때
```
a
ab
abc
abca <-
abcab
abcabc
```
여기서 abca 까지만 봐도 됩니다. 뒷부분은 어차피 뒤에서 또 확인할거니까요.
bcabc 에서는
```
b
bc
bca
bcab <-
bcabc
```
bcab 까지만 봐도 되겠네요. 이런식으로 해서 loop 하나를 뺄 수 있습니다.
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
O(n^2) 이 되었으니 그래도 많이 좋아졌습니다.

## 더 개선해보기


## References
* [Length of the longest substring without repeating characters](https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/)
