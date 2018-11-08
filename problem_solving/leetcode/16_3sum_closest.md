# 16. 3Sum Closest
* https://leetcode.com/problems/3sum-closest/

* 3개의 합이 target 과 가장 가까운 구성을 구하는 문제
* 3개 이하이면 다 더해서 리턴
* 일단 처음 3개 합을 구해서 closest 기준값으로 사용
* 하나씩 합을 구하고 그 합과 target 의 차이가 closest 와 target 의 차이보다 작으면 이 값을 closest 로 바꾼다.


```cpp
#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <map>
#include <set>

using namespace std;

class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        unsigned long length = nums.size();
        if (length <= 3) {
            int sum = 0;
            for (auto& n : nums) {
                sum += n;
            }
            return sum;
        }
        int closest = nums[0] + nums[1] + nums[2];

        for (int i = 0; i < length - 2; i++) {
            for (int j = i + 1; j < length - 1; j++) {
                int pre_sum = nums[i] + nums[j];

                for (int k = j + 1; k < length; k++) {
                    int sum = pre_sum + nums[k];
                    if (sum == target) {
                        return target;
                    }
                    if (abs(target - sum) < abs(target - closest)) {
                        closest = sum;
                    }
                }
            }
        }

        return closest;
    }
};

int main() {
    Solution solution = Solution();

    vector<int> input1({-1, 2, 1, -4});
    assert(solution.threeSumClosest(input1, 1) == 2);

    vector<int> input2({0, 0, 0});
    assert(solution.threeSumClosest(input2, 1) == 0);

    vector<int> input3({1, 1, 1, 0});
    assert(solution.threeSumClosest(input3, -100) == 2);

    return 0;
}
```