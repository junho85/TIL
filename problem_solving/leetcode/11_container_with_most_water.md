# 11. Container With Most Water
* https://leetcode.com/problems/container-with-most-water/

* 배열에 각 기둥의 높이 값이 있고 두개의 기둥 사이에 물을 채웠을 때 가장 많이 채울 수 있는 물의 양을 구하는 것이다.

## 단순한 방식
* 하나씩 기둥을 잡고 나머지 기둥을 돌아 가며 물을 채워보고 기존 보다 물을 많이 채우면 그걸 max 값으로 기억 했다가 마지막에 리턴 하면 끝.
* 이렇게 하면 524 ms, 24.66% 정도 나왔다.
* 루프가 2중으로 들어가서 O(n^2) 이 되어 버림.

```cpp
#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        int max = 0;

        unsigned long length = height.size();
        for (int i=0; i < length - 1; i++) {
            int first_height = height[i];
            for (int j=i+1; j<length; j++) {
                int second_height = height[j];
                int width = j-i;
                int height = min(first_height, second_height);
                int water = height * width;
                if (water > max) {
                    max = water;
                }
            }
        }
        return max;
    }
};

int main() {
    Solution solution = Solution();
    vector<int> nums({1,8,6,2,5,4,8,3,7});
    assert(solution.maxArea(nums) == 49);

    return 0;
}
```

## 개선방안
* 좀 더 효율적으로 하려면 어떻게 해야 할까?
