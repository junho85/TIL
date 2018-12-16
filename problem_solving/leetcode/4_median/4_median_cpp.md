# 4. Median of Two Sorted Arrays

## 풀이
* 난이도가 Hard 인데 생각보다 쉽다.
* 두개의 정렬된 배열이 있다. 이 두 배열의 중간값을 구하는 문제이다.
* (1, 3) 과 (2) 를 합치면 (1, 2, 3) 이 되고 중간값은 2 이다.
* (1, 2) 와 (3, 4) 를 합치면 (1, 2, 3, 4) 가 되고 중간 값은 2와 3의 중간값인 2.5 이다. (2+3)/2=2.5 로 구할 수 있다.
* 두 배열을 합친 다음 정렬하고 갯수가 홀수이면 중간값을 그냥 사용하고, 갯수가 짝수이면 가운데 두개의 값을 합한다음 2로 나누었다.
* 좀 더 효율적으로 하려면 두 배열을 합칠 때 이미 정렬된 값이니 insertion sort 식으로 하나씩 집어 넣으면 좀 더 빨라질 듯 하다.
* 다 넣을 필요 없이 둘의 갯수의 합에서 중간 정도 까지만 오면 거기서 바로 중간값을 찾을 수도 있을 것이다.
* 그런데 이 역시 배열의 크기나 상황에 따라 더 효율적일수도 있고 덜 효율적일수도 있을 것이다.

```cpp
#include <cassert>
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        nums1.insert(nums1.end(), nums2.begin(), nums2.end());
        sort(nums1.begin(), nums1.end());

        int center = (int)(nums1.size()/2);
        if (nums1.size() % 2 == 0) {
            return (double)(nums1[center-1] + nums1[center])/2;
        } else {
            return nums1[center];
        }
    }
};

int main() {
    Solution solution = Solution();

    vector<int> nums1({1,3});
    vector<int> nums2({2});

    assert(solution.findMedianSortedArrays(nums1, nums2) == 2.0);

    vector<int> nums3({1,2});
    vector<int> nums4({3,4});
    double ret2 = solution.findMedianSortedArrays(nums3, nums4);
    cout << ret2 << endl;
    assert(ret2 == 2.5);

    return 0;
}
```