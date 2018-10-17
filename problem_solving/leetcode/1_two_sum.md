# 1. Two Sum

* https://leetcode.com/problems/two-sum/
* leetcode 첫번째 문제
* 배열의 두 값의 합이 target 과 같은 것의 index 두개 리턴

```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
private:
    /**
     *
     * @param nums
     * @param index
     * @param target
     * @return 0 not found
     * others - index
     */
    int find(vector<int>& nums, int index, int target) {
        int current = nums[index];
        for (int i=index + 1; i<nums.size(); i++) {
            if (current + nums[i] == target) {
                return i;
            }
        }
        return 0;
    }
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> answer(2);

        for (int i=0; i<nums.size(); i++) {
            int ret = find(nums, i, target);
            if (ret != 0) {
                answer[0] = i;
                answer[1] = ret;
                break;
            }
        }

        return answer;
    }
};

int main() {
    Solution solution;

    vector<int> nums({2,7,11,15});

    vector<int> answer = solution.twoSum(nums, 9);
    cout << answer[0] << ":" << answer[1] << endl;

    return 0;
}
```