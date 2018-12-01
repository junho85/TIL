# 1. Two Sum

* https://leetcode.com/problems/two-sum/
* leetcode 첫번째 문제
* 배열의 두 값의 합이 target 과 같은 것의 index 두개 리턴

## cpp

### 테스트 코드
```
int main() {
    vector<int> nums({2,7,11,15});

    Solution solution = Solution();
    vector<int> answer = solution.twoSum(nums, 9);
    cout << answer[0] << ":" << answer[1] << endl;

    nums.clear();
    nums.push_back(3);
    nums.push_back(2);
    nums.push_back(4);
    answer = solution.twoSum(nums, 6);

    cout << answer[0] << ":" << answer[1] << endl;
    return 0;
}
```

### 단순 풀이

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
```

* 코드 개선
* 60 ms, 41.51% (2018.12.01 기준)
```cpp
#include <vector>
#include <iostream>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> answer(2);

        for (int i=0; i<nums.size(); i++) {
            int left = nums[i];

            for (int j=i+1; j<nums.size(); j++) {
                if (left + nums[j] == target) {
                    answer[0] = i;
                    answer[1] = j;
                    return answer;
                }
            }
        }

        return answer;
    }
};
```

### map 으로 개선
* map 에 넣은 다음 찾는다.
* 찾은 index 가 기준 index 와 달라야 한다.
* 12 ms, 47.98% (2018.12.01 기준)
* java 에서 HashMap 쓴거 보다 느린데?
```cpp
#include <vector>
#include <iostream>
#include <map>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> answer(2);

        map<int, int> map_nums; // number, index

        // put into map
        auto length = nums.size();
        for (int i=0; i<length; i++) {
            map_nums[nums[i]] = i;
        }

        for (int i = 0; i < length; i++) {
            int find_num = target - nums[i];
            auto iter = map_nums.find(find_num);

            if (iter != map_nums.end() && iter->second != i) {
                answer[0] = i;
                answer[1] = iter->second;
                return answer;
            }
        }
        return answer;
    }
};
```