# 8. String to Integer (atoi)
* atoi 를 구현하는건데 atoi 와 다른 점은 overflow 발생시 INT_MIN 이나 INT_MAX 를 이용하도록 하는 것이다.
* 그냥 무식하게 atol 로 구하고 INT_MIN 보다 작으면 INT_MIN 으로 하고 INT_MAX 보다 크면 INT_MAX 로 처리함.
* 이 방식에는 한계가 있겠지만 통과 하니 일단 여기서 마무리.

```cpp
#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    int myAtoi(string str) {
        long t = atol(str.c_str());
        if (t < INT_MIN) {
            return INT_MIN;
        } else if (t > INT_MAX) {
            return INT_MAX;
        }
        return int(t);
    }
};

int main() {
    Solution solution = Solution();
    assert(solution.myAtoi("42") == 42);
    assert(solution.myAtoi("4193 with words") == 4193);
    assert(solution.myAtoi("-91283472332") == -2147483648);
    assert(solution.myAtoi("2147483648") == 2147483647);
    return 0;
}
```