# 14. Longest Common Prefix
* 배열의 문자열에서 가장 긴 같은 prefix 구하기
* flower, flow, flight 가 있으면 가장 긴 공통 prefix 는 fl 이다.
* 공통된 prefix 가 없으면 "" 을 리턴
* 배열이 0 개 이면 "" 을 리턴

## 첫번째걸 longest prefix 로 잡고 나머지들과 비교해 나가기
* 첫번째 문자열을 기준으로 잡고 나머지 문자열과 비교 하면서 공통 prefix 를 구하면 손쉽게 구할 수 있다.
* 처음 비교 해서 구한 prefix 를 가지고 다음것과 비교 해 나가면 된다.
* 4 ms, 98.65%
* 해설에서는 이 방법을 Horizontal scanning 이라고 명명 하는듯 하다.
* Vertical scanning, Divide and conquer, Binary search 등등 다양한 풀이 방식이 존재한다.

```cpp
// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <map>

using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.size() == 0) {
            return "";
        }
        string result = strs[0];

        for (vector<string>::iterator it = strs.begin() + 1; it<strs.end(); ++it) {

            for (int i=0; i<result.size(); i++) {
                if (result[i] != (*it)[i]) {
                    if (i == 0) {
                        return "";
                    } else {
                        result = result.substr(0, i);
                    }
                }
            }
        }
        return result;
    }
};

int main() {
    Solution solution = Solution();

    vector<string> input1({"flower","flow","flight"});
    assert(solution.longestCommonPrefix(input1) == "fl");
    vector<string> input2({"dog","racecar","car"});
    assert(solution.longestCommonPrefix(input2) == "");
    vector<string> input3({});
    assert(solution.longestCommonPrefix(input3) == "");

    return 0;
}
```