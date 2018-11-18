# 29. Divide Two Integers
* https://leetcode.com/problems/divide-two-integers/

## 문제
* 나누기 구현하는데 int 범위 overflow 하면 int 범위 최대, 최소값으로 처리

## 풀이
* long 으로 바꿔서 계산 하고 위로 overflow 하면 INT_MAX, 아래로 overflow 하면 INT_MIN 을 리턴한다.
* 12 ms, 98.93%

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
    int divide(int dividend, int divisor) {
        long result = long(dividend)/long(divisor);

        if (result < INT_MIN) {
            return INT_MIN;
        } else if (result > INT_MAX) {
            return INT_MAX;
        }

        return result;
    }
};

int main() {
    Solution solution = Solution();

    assert(solution.divide(10, 3) == 3);
    assert(solution.divide(7, -3) == -2);
    assert(solution.divide(-2147483648, -1) == INT_MAX);

    return 0;
}
```