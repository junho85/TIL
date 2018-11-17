# 28. Implement strStr()
* https://leetcode.com/problems/implement-strstr/

## 문제
* strstr 구현
* 찾은 위치의 index 값을 리턴한다.
* 못찾으면 -1 이다.

## 풀이
* string 에 있는 find 메소드를 이용하면 된다.
* https://en.cppreference.com/w/cpp/string/basic_string/find
* 4 ms, 98.39%

```cpp
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
    int strStr(string haystack, string needle) {
        return haystack.find(needle, 0);
    }
};

int main() {
    Solution solution = Solution();

    assert(solution.strStr("hello", "ll") == 2);
    assert(solution.strStr("aaaaa", "bba") == -1);

    return 0;
}
```
