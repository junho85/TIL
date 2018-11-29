# 1. Two Sum

* https://leetcode.com/problems/two-sum/
* leetcode 첫번째 문제
* 배열의 두 값의 합이 target 과 같은 것의 index 두개 리턴

## cpp

테스트 코드
```
int main() {
    Solution solution;

    vector<int> nums({2,7,11,15});

    vector<int> answer = solution.twoSum(nums, 9);
    cout << answer[0] << ":" << answer[1] << endl;

    return 0;
}
```

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

좀 더 심플하게
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

## python3
```python3
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        length = len(nums)
        for i in range(length - 1):
            left = nums[i]

            for j in range(i+1, length):
                right = nums[j]
                sum = left + right
                if sum == target:
                    return [i, j]


solution = Solution()

assert(solution.twoSum([2, 7, 11, 15], 9) == [0, 1])
```
* 첫시도 timeout
* 두번째 성공 했는데 6712ms
* 성능 개선 필요함

## Java 8

### 풀이
* ArrayList 로 바꾼다음 하나하나 찾는다.
* 77 ms, 6.67%
* 별로 효과적인 방법이 아니다.
```java
package leetcode;

import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];

        List<Integer> listNums = new ArrayList<>();

        for (int num : nums) {
            listNums.add(num);
        }

        int length = listNums.size();
        for (int i=0; i<listNums.size(); i++) {
            Integer num = listNums.get(i);
            List<Integer> subList = listNums.subList(i + 1, length);

            int index = subList.indexOf(target - num);
            if (index != -1) {
                result[0] = i;
                result[1] = index + i + 1;
            }
        }

        return result;
    }
}

public class PS1TwoSum {
    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] nums = new int[]{2,7,11,15};
        int[] result = solution.twoSum(nums, 9);
        System.out.println(result[0]);
        System.out.println(result[1]);
        System.out.println();

        nums = new int[]{3,2,4};
        result = solution.twoSum(nums, 6);
        System.out.println(result[0]);
        System.out.println(result[1]);
        System.out.println();
    }
}
```