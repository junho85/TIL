# 88. Merge Sorted Array
* https://leetcode.com/problems/merge-sorted-array/

## 문제
* nums1, nums2 를 nums1 에 합치기
* nums1 에는 nums2 를 합칠만큼 충분한 공간이 있음.
* nums1 의 길이 m, nums2 의 길이 n 이 주어짐.

## 풀이
* nums1 에 m 만큼 외에는 삭제
* nums1 에 nums2 를 n 길이 만큼 합침
* nums1 을 정렬시킴
* 8 ms, 14,01%

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
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        nums1.erase(nums1.begin() + m, nums1.end());
        nums1.insert(nums1.begin(), nums2.begin(), nums2.begin() + n);
        sort(nums1.begin(), nums1.end());
    }
};

int main() {
    Solution solution = Solution();

    vector<int> nums1({1,2,3,0,0,0});
    vector<int> nums2({2,5,6});

    solution.merge(nums1, 3, nums2, 3);

    for (auto num : nums1) {
        cout << num << endl;
    }

    return 0;
}

```