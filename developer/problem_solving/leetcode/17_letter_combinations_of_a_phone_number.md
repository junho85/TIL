# 17. Letter Combinations of a Phone Number
* https://leetcode.com/problems/letter-combinations-of-a-phone-number/

* 휴대폰 2~9 까지 숫자는 각각 입력 가능한 알파벳 목록이 있다. 2 - abc, 3 - def...
* "23" 을 입력 했을 때 가능한 조합은 ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] 이다.
* 두자리라고 가정 하면 그냥 string 을 char 로 쪼개서 하나하나 합쳐서 결과 벡터에 넣어서 리턴 하면 된다.
* char 를 string 에 합치려면 다음과 같이 해야 한다. `string tmp; tmp.push_back(c);`
* 이렇게 짜서 돌리니 input 이 한자리도 가능하였다.
* 한자리이면 그냥 string 쪼개서 넣도록 했다.
* 이렇게 짜서 돌리니 input 이 3자리... 문제에 미리 제시 해 줘도 될텐데...
* 자릿수 제한이 없다고 가정하고 다시 짰다.
* string 을 쪼개서 vector<string> 으로 만드는 string_to_vector(string str) 을 만든다.
* 결과 vector<string> result 을 만들고 첫번째에서는 문자열을 쪼개서 넣고, 그 다음부터는 결과 * 다음 입력 방식으로 진행 하도록 loop 돌렸다.
* 처음에는 4ms 로 높은 순위 아니었는데 다시 돌려 보니 0ms 로 100% 나왔다;; 그냥 운빨인듯.

```cpp
#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <map>
#include <set>

using namespace std;

class Solution {
private:
    map<char, string> number_map{
        {'2', "abc"},
        {'3', "def"},
        {'4', "ghi"},
        {'5', "jkl"},
        {'6', "mno"},
        {'7', "pqrs"},
        {'8', "tuv"},
        {'9', "wxyz"},
    };
public:
    vector<string> mix(vector<string> left, vector<string> right) {
        vector<string> result;

        for (auto left_it : left) {
            for (auto right_it : right) {
                cout << left_it + right_it << endl;
                result.push_back(left_it + right_it);
            }
        }

        return result;
    }

    vector<string> string_to_vector(string str) {
        vector<string> result;

        for (auto c : str) {
            string tmp;
            tmp.push_back(c);
            result.push_back(tmp);
        }
        return result;
    }

    vector<string> letterCombinations(string digits) {
        vector<string> result;

        unsigned long length = digits.size();

        for (int i=0; i<length; i++) {
            if (i == 0) {
                result = string_to_vector(number_map[digits[i]]);
            } else {
                result = mix(result, string_to_vector(number_map[digits[i]]));
            }
        }

        return result;
    }

    void print(vector<string>& v) {
        for (auto& str : v) {
            cout << str << endl;
        }
    }
};

int main() {
    Solution solution = Solution();

    auto result = solution.letterCombinations("23");
    solution.print(result);

    result = solution.letterCombinations("2");
    solution.print(result);

    result = solution.letterCombinations("234");
    solution.print(result);

    return 0;
}
```