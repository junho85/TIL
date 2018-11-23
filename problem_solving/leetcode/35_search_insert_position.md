# 35. Search Insert Position
* https://leetcode.com/problems/search-insert-position/submissions/

## 문제
* 정렬된 배열에서 값을 넣을 위치 찾기

## 풀이
* lower_bound 로 찾으면 된다.
* 4 ms, 98.15%

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
    int searchInsert(vector<int>& nums, int target) {
        auto low = lower_bound(nums.begin(), nums.end(), target);
        return low - nums.begin();
    }
};

int main() {

    Solution solution = Solution();

    vector<int> input1({1,3,5,6});
    assert(solution.searchInsert(input1, 5) == 2);
    assert(solution.searchInsert(input1, 2) == 1);
    return 0;
}
```