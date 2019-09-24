# 20. Valid Parentheses
* https://leetcode.com/problems/valid-parentheses/

* 괄호 짝이 맞는지 확인한다.
* 괄호는 세가지 타입이 사용 된다. (){}[]
* 열리면 같은 종류로 닫혀야 된다.
* 마지막에 열린게 먼저 닫혀야 된다. 순서가 맞아야 된다.
* stack 을 사용하면 간편하다.
* 왼쪽 괄호가 보이면 stack 에 쌓는다.
* 오른쪽 괄호가 보이면 pop 으로 꺼내서 비교 한다.
* 짝이 안맞으면 false
* 오른쪽 괄호가 보일 때 스택이 비어 있으면 false
* loop 다 돌았는데 괄호가 남아 있으면 false
* 나머지는 true
* 0 ms, 100%

```cpp
// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <map>
#include <set>
#include <stack>

using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> pstack;
        for (auto c : s) {
            if (c == '(' or c == '[' or c == '{') {
                pstack.push(c);
            } else {
                if (pstack.size() == 0) {
                    return false;
                }
                char left = pstack.top();
                pstack.pop();

                if ((c == ')' and left == '(')
                or (c == ']' and left == '[')
                or (c == '}' and left == '{')) {
                    continue;
                } else {
                    return false;
                }
            }
        }

        if (pstack.size() != 0) {
            return false;
        }

        return true;
    }
};


int main() {
    Solution solution = Solution();

    assert(solution.isValid("()") == true);
    assert(solution.isValid("()[]{}") == true);
    assert(solution.isValid("(]") == false);
    assert(solution.isValid("([)]") == false);
    assert(solution.isValid("{[]}") == true);
    assert(solution.isValid("]") == false); // odd length is false
    assert(solution.isValid("){") == false); // when right side, stack size zero is false
    assert(solution.isValid("[") == false); // after loop, not empty stack means false

    return 0;
}
```