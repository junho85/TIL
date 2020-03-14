# 31. Next Permutation

## 문제
* 다음 순열 구하기

## 풀이
* next_permutation 함수 이용
* 8 ms, 98.95%

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
    void nextPermutation(vector<int>& nums) {
        next_permutation(nums.begin(), nums.end());
    }

    void print(vector<int> vec) {
        for (auto it : vec) {
            cout << it << " ";
        }
        cout << endl;
    }
};

int main() {
    Solution solution = Solution();

    vector<int> input1({1,2,3});
    solution.nextPermutation(input1);
    solution.print(input1);

    vector<int> input2({3,2,1});
    solution.nextPermutation(input2);
    solution.print(input2);

    return 0;
}
```