# 6. ZigZag Conversion
* 주어진 문자를 numRows 만큼 줄을 만들고 zigzag 로 글자를 쓴다.
* zigzag 로 쓴 글을 한줄로 연결한다.

```cpp
// 6. ZigZag Conversion

#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1) {
            return s;
        }

        bool direction = true; // true - down, false - up
        int row = 0;
        unsigned long length = s.size();
        vector<string> tmp(min(numRows, int(length)));
        for (int i=0; i < length; i++) {
            tmp[row] += s[i];

            if (direction) {
                row++;
            } else {
                row--;
            }

            if (row == 0 or row == numRows - 1) {
                direction = !direction;
            }
        }

        string result;
        int loop = min(numRows, int(length));
        for (int i=0; i<loop; i++) {
            result += tmp[i];
        }
        return result;
    }
};

int main() {
    Solution solution = Solution();
    assert(solution.convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR");
    assert(solution.convert("PAYPALISHIRING", 4) == "PINALSIGYAHRPI");
    assert(solution.convert("AB", 1) == "AB");
    return 0;
}
```