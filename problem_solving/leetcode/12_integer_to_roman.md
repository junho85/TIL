# 12. Integer to Roman
* https://leetcode.com/problems/integer-to-roman/

* 1~3999 숫자가 주어지고 이걸 로마숫자로 바꾸면 된다. (무식하게 하나하나 맵핑해도 될듯;;)
* 로마 숫자 규칙을 이제껏 제대로 몰랐는데 이제야 알게 되었다.
* 각 자리에 1, 5, 10을 나타내는 기호가 있다.
  * 한자리 숫자는 I, V, X
  * 두자리 숫자는 X, L, C
  * 세자리 숫자는 C, D, M
  * 네자리 숫자는 M
* 숫자를 표시하는 방법은 다음과 같다.
  * 1~3 은 1기호가 갯수만큼
  * 4는 1기호 5기호
  * 5는 5기호
  * 6~8은 5기호 뒤에 1기호가 갯수만큼
  * 9는 1기초 10기호
  * 10은 10기호

```cpp
// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/

#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <map>

using namespace std;

// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000

class Solution {
public:
    string intToRoman(int num) {
        string result;

        string num_string = to_string(num);
        unsigned long length = num_string.size();
        unsigned long level = length;
        for (int i=0; i < length; i++) {

            string one;
            string five;
            string ten;

            if (level == 4) { // 1000
                one = "M";
            } else if (level == 3) { // 100
                one = "C";
                five = "D";
                ten = "M";
            } else if (level == 2) { // 10
                one = "X";
                five = "L";
                ten = "C";
            } else {
                one = "I";
                five = "V";
                ten = "X";
            }

            string roman;

            int current_num = num_string[i] - 48; // character to int
            if (current_num >= 1 and current_num <= 3) {
                for (int i=1; i<=current_num; i++) {
                    roman += one;
                }
            } else if (current_num == 4) {
                roman = one + five;
            } else if (current_num == 5) {
                roman = five;
            } else if (current_num >= 6 and current_num <= 8) {
                roman = five;
                for (int i=6; i<=current_num; i++) {
                    roman += one;
                }
            } else if (current_num == 9) {
                roman = one + ten;
            }

            result += roman;

            level--;
        }
        return result;
    }
};

int main() {
    Solution solution = Solution();
    // input will be 1 to 3999
    assert(solution.intToRoman(3) == "III");
    assert(solution.intToRoman(4) == "IV");
    assert(solution.intToRoman(8) == "VIII");
    assert(solution.intToRoman(9) == "IX");
    assert(solution.intToRoman(10) == "X");
    assert(solution.intToRoman(11) == "XI");
    assert(solution.intToRoman(12) == "XII");
    assert(solution.intToRoman(20) == "XX");
    assert(solution.intToRoman(30) == "XXX");
    assert(solution.intToRoman(40) == "XL");
    assert(solution.intToRoman(50) == "L");
    assert(solution.intToRoman(58) == "LVIII"); // L = 50, V = 5, III = 3
    assert(solution.intToRoman(1994) == "MCMXCIV"); // M = 1000, CM = 900, XC = 90, IV = 4

    return 0;
}
```