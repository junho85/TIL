# 22. Generate Parentheses
* [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

입력값(n)으로 3이 들어가면 괄호 3개로 만들수 있는 모든 조합을 만들어야 한다. 5가지를 만들 수 있다.
```
((()))
(()())
(())()
()(())
()()()
```

아직 어떻게 해야 될지 감이 안온다. 일단 막 그려보자. 그리다 보면 뭔가 떠오르지 않을까.

n 이 2 라면? 2가지를 만들 수 있다.
```
(())
()()
```

n 이 1 이라면 1가지를 만들 수 있다.
```
()
```

아직 모르겠다. 반대로 가보자.

n 이 4라면. 뭔가 어렵다. 설명하기도 어렵다.
```
(((()))) # 4개 만땅 사용

((()())) # 3개 - 
((())()) # 3개 - 
((()))() # 3개

(()(())) # 2개
(())(()) # 2개
(())()() # 2개

()((())) # 1개 - 뒤에는 3개짜리 반복
()(())() # 1개 
()(()()) # 1개
()(())() # 1개
()()(()) # 1개
()()()() # 1개
```

모르겠다. 갑자기 드는 생각은 시작은 ( 인데 그 다음부터는 (, ) 선택의 갈림길이다. 다만 남아 있을 경우에 말이다.

뭔가 재귀적으로 만들면 될거 같은데 잘 모르겠다. 일단 재귀로 괄호 하나 만드는걸 생각해 보자.

그리고 괄호 갯수는 n 개 만큼이다.

일단 stack 에 쌓아두고 보자.
```
        stack_left = []
        stack_right = []

        for i in range(n):
            stack_left.append("(")
            stack_right.append(")")
```

왼쪽에거 하나 pop, 오른쪽에서 하나 pop 한걸 배열로 만들어서 리턴하면 하나는 만들 수 있다.
```
def gen(sl, sr):
    return [sl.pop() + sr.pop()]

class Solution:

    def generateParenthesis(self, n):
        stack_left = []
        stack_right = []

        for i in range(n):
            stack_left.append("(")
            stack_right.append(")")

        return gen(stack_left, stack_right)
```


