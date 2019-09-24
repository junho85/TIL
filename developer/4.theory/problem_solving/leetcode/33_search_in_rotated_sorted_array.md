# 33. Search in Rotated Sorted Array
* https://leetcode.com/problems/search-in-rotated-sorted-array/

## 문제
* 정렬된 배열을 몇차례 돌린 배열이 있다.
* 여기서 target 값의 위치를 찾는다. 위치를 리턴한다. 못찾으면 -1 을 리턴한다.

## 풀이
* 참고: https://stackoverflow.com/questions/15099707/how-to-get-position-of-a-certain-element-in-strings-vector-to-use-it-as-an-inde
* 정렬 되어 있고 돌린건 신경 쓰지 않고 그냥 검색 함수를 사용 했다.
* 최적화된 방식은 아니겠지만서도 꽤 좋은 성적이 나온다.
* 4 ms, 98.97%
* 정렬 되어 있다는 걸 가정하고 최적의 알고리즘을 짜면 좀 더 나아질지도?


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
    int search(vector<int>& nums, int target) {
        ptrdiff_t pos = distance(nums.begin(), find(nums.begin(), nums.end(), target));
        if (pos == -1 or pos == nums.size()) {
            return -1;
        } else {
            return pos;
        }
    }
};

int main() {
    Solution solution = Solution();

    vector<int> input1({4,5,6,7,0,1,2});
    assert(solution.search(input1, 0) == 4);
    assert(solution.search(input1, 3) == -1);

    return 0;
}
```