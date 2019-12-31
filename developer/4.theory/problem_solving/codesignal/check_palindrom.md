# check palindrome
::-1 을 이용하면 reserve 를 구할수 있다.

```python
import math

def checkPalindrome(inputString):
    half = len(inputString) / 2
    left = inputString[:int(half)]
    right = inputString[math.ceil(half):][::-1]

    if left == right:
        return True
    else:
        return False


assert(checkPalindrome("aabaa") == True)
assert(checkPalindrome("abac") == False)
assert(checkPalindrome("a") == True)
```