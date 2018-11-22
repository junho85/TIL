# 10. Regular Expression matching
* https://leetcode.com/problems/regular-expression-matching/

## 문제
* 정규표현식 matching 일부 기능을 직접 구현해 보는 문제

## 풀이
* regex 라이브러리 이용하기
* 104 ms, 9.95%

```cpp
// 10. Regular Expression Matching
// https://leetcode.com/problems/regular-expression-matching/

#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <regex>

using namespace std;

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

class Solution {
public:
    bool isMatch(string s, string p) {
        regex exp(p);
        return regex_match(s, exp);
    }
};

int main() {
    Solution solution = Solution();
    assert(solution.isMatch("aa", "a") == false);
    assert(solution.isMatch("aa", "a*") == true);
    assert(solution.isMatch("ab", ".*") == true);
    assert(solution.isMatch("aab", "c*a*b") == true);

    assert(solution.isMatch("mississippi", "mis*is*p*.") == false);
    assert(solution.isMatch("ab", ".*c") == false);
    assert(solution.isMatch("aaa", "a*a") == true);
    assert(solution.isMatch("aaa", "ab*a*c*a") == true);
    return 0;
}
```