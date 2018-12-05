# 66. Plus One
* https://leetcode.com/problems/plus-one/

## 문제
* 리스트로 넘어 오는 숫자에 1 더하기

## 풀이
* 뒤에서 부터 확인 해서 1 더해서 10 되면 0 을 넣고 다음 루프로 넘어 간다.
* 루프 끝나고 리스트의 첫번째 값이 0 이 되면 앞에 1을 추가 한다.

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
    vector<int> plusOne(vector<int>& digits) {
        int length = digits.size();
        int i;
        for (i=length-1; i>=0; i--) {
            digits[i]++;
            if (digits[i] != 10) {
                return digits;
            }
            digits[i] = 0;
        }
        if (digits[0] == 0) {
            digits.insert(digits.begin(), 1);
        }
        return digits;
    }
};

int main() {

    Solution solution = Solution();

    vector<int> input1({1,2,3});
    auto result = solution.plusOne(input1);
    for (auto it : result) {
        cout << it << endl;
    }
    cout << endl;

    vector<int> input2({9});
    result = solution.plusOne(input2);
    for (auto it : result) {
        cout << it << endl;
    }

    return 0;
}
```