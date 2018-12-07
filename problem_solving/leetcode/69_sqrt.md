# 69. Sqrt(x)
* https://leetcode.com/problems/sqrtx/

## 문제
* `int sqrt(int x)` 구현하기

## 풀이
* math.h 의 sqrt 이용
* 24 ms, 23.47%
* 사실 이렇게 푸는 걸 원하는 문제는 아닐 것이다.

```cpp
#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <map>
#include <set>
#include <stack>
#include <math.h>

using namespace std;

class Solution {
public:
    int mySqrt(int x) {
        return sqrt(x);
    }
};

int main() {

    Solution solution = Solution();

    assert(solution.mySqrt(4) == 2);
    assert(solution.mySqrt(8) == 2);

    return 0;
}


```