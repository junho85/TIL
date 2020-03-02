# 20. Valid Parentheses

(, [, { 가 나오면 stack 에 넣고 아니면 빼면서 짝이 맞는지 확인하면 된다.

```
class Solution:
    def isValid(self, s):
        stack = []

        for c in s:
            if c == "(" or c == "[" or c == "{":
                stack.append(c)
            else:
                left = stack.pop()
                if (not left == "(" and c == ")") \
                        or (not left == "[" and c == "]")\
                        or (not left == "{" and c == "}"):
                    return False
        return True
```

그런데 "[" 가 나오면 틀린다. 괄호는 짝이 맞아야 되니까 일단 홀수면 땡이다. 시작할때 홀수이면 return False 처리 해 버린다.
```
    def isValid(self, s):
        if len(s) % 2 == 1:
            return False
```

이번엔 "((" 에서 틀린다. loop 다 돌았는데 괄호가 남아 있으면 return False 처리 하자.
```
        if len(stack) > 0:
            return False
```

이번엔 "){" 에서 틀린다. 괄호가 있지도 않은데 pop 하는건 말이 안된다. pop 하기 전에 남은 괄호가 있는지 검사한다.
```
                if len(stack) == 0:
                    return False
                
                left = stack.pop()
```

통과~
```
class Solution:
    def isValid(self, s):
        if len(s) % 2 == 1:
            return False

        stack = []

        for c in s:
            if c == "(" or c == "[" or c == "{":
                stack.append(c)
            else:
                if len(stack) == 0:
                    return False

                left = stack.pop()
                if (not left == "(" and c == ")") \
                        or (not left == "[" and c == "]")\
                        or (not left == "{" and c == "}"):
                    return False

        if len(stack) > 0:
            return False

        return True


solution = Solution()

assert (solution.isValid("()") == True)
assert (solution.isValid("()[]{}") == True)
assert (solution.isValid("(]") == False)
assert (solution.isValid("([)]") == False)
assert (solution.isValid("{[]}") == True)
assert (solution.isValid("[") == False)
assert (solution.isValid("((") == False)
assert (solution.isValid("){") == False)
```
