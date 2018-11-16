# 27. Remove Element
* https://leetcode.com/problems/remove-element/

## 문제
* array 에서 주어진 값의 항목들을 모두 삭제 하고 남은 길이를 리턴한다.

## 풀이
* 앞의 문제에서 unique 를 사용 했었는데 대신 erase 를 사용하면 된다.

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
    int removeElement(vector<int>& nums, int val) {
        nums.erase(remove(nums.begin(), nums.end(), val), nums.end());
        return nums.size();
    }
};

int main() {
    Solution solution = Solution();

    vector<int> nums1({3,2,2,3});
    assert(solution.removeElement(nums1, 3) == 2);

    vector<int> nums2({0,1,2,2,3,0,4,2});
    assert(solution.removeElement(nums2, 2) == 5);

    return 0;
}
```