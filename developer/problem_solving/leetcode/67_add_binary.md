# 67. Add Binary
* https://leetcode.com/problems/add-binary/submissions/

## 문제
* 두개의 2진수 문자열을 더하기.
* e.g. "11" + "1" = "100"

## 테스트코드
```cpp
int main() {
    Solution solution = Solution();

    assert(solution.addBinary("11", "1") == "100");
    assert(solution.addBinary("1010", "1011") == "10101");

    assert(solution.addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011") == "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000");
    assert(solution.addBinary("1", "111") == "1000");

    return 0;
}
```

## 풀이 - 실패
* 문자열을 숫자로 바꾸고 합한 다음 다시 문자열로 바꾸기
* stoll 로도 길이 제한에 걸려서 실패.

```cpp
class Solution {
public:
    string addBinary(string a, string b) {
        int max_length = max(a.size(), b.size());
        long long sum = stoll(a, nullptr, 2) + stoll(b, nullptr, 2);

        string result;
        while (sum != 0) {
            if (sum % 2 == 0) {
                result = "0" + result;
            } else {
                result = "1" + result;
            }
            sum /= 2;
        }
        return result;
    }
};
```

## 풀이 - leetcode 에서 실패
* 뒤에서 하나씩 빼와서 더하도록 함.
* clion 에서는 잘 되는데 leetcode 에 올리니 실패함

```cpp
class Solution {
public:
    string addBinary(string a, string b) {
        unsigned long max_length = max(a.size(), b.size());

        string result;

        bool is_up = false;

        for (int i = 0; i < max_length; i++) {
            int current = 0;
            if (is_up) {
                current++;
                is_up = false;
            }

            char a_last = a.back();

            if (a_last == '1') current++;
            a.pop_back();

            char b_last = b.back();

            if (b_last == '1') current++;
            b.pop_back();

            if (current >= 2) {
                is_up = true;
                current %= 2;
            }

            if (current == 0) {
                result = '0' + result;
            } else {
                result = '1' + result;
            }
        }

        if (is_up) {
            result = '1' + result;
        }

        return result;
    }
};
```

## 풀이
* empty 상태에서 back 했을 때 쓰레기값이 나오기 때문이 아닐까 싶어서 비어 있을 때는 그냥 넘어 가도록 예외 처리 추가.
* string 의 back 함수는 다음과 같이 되어 있다.
```cpp
template <class _CharT, class _Traits, class _Allocator>
inline _LIBCPP_INLINE_VISIBILITY
typename basic_string<_CharT, _Traits, _Allocator>::reference
basic_string<_CharT, _Traits, _Allocator>::back()
{
    _LIBCPP_ASSERT(!empty(), "string::back(): string is empty");
    return *(__get_pointer() + size() - 1);
}
```

```cpp
// 67. Add Binary
// https://leetcode.com/problems/add-binary/submissions/

#include <string>
#include <vector>
#include <cassert>
#include <iostream>
#include <algorithm>
#include <map>
#include <set>
#include <stack>
#include <bitset>

using namespace std;

class Solution {
public:
    string addBinary(string a, string b) {
        unsigned long max_length = max(a.size(), b.size());

        string result;

        bool is_up = false;

        for (int i = 0; i < max_length; i++) {
            int current = 0;
            if (is_up) {
                current++;
                is_up = false;
            }

            char a_last = '0';
            if (!a.empty()) {
                a_last = a.back();

                if (a_last == '1') current++;
                a.pop_back();
            }

            char b_last = '0';
            if (!b.empty()) {
                b_last = b.back();

                if (b_last == '1') current++;
                b.pop_back();
            }

            if (current >= 2) {
                is_up = true;
                current %= 2;
            }

            if (current == 0) {
                result = '0' + result;
            } else {
                result = '1' + result;
            }
        }

        if (is_up) {
            result = '1' + result;
        }

        return result;
    }
};
```