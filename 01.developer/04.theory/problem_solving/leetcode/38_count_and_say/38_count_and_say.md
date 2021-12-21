# 38. Count and Say
* https://leetcode.com/problems/count-and-say/

## 문제
* 1 은 "1"
* 2 는 앞의 "1" 을 읽는건데 1개의 1 이라고 해서 "11"
* 3 은 앞의 "11" 을 2개의 1 이라고 해서 "21"
* 4 는 앞의 "21" 을 1개의 1, 2개의 1 이라고 해서 "1211"
* 5 는 앞의 "1211" 을 1개의 1, 1개의 2, 2개의 1 이라고 해서 "111221"

## 풀이
* map 을 만들어 두고 결과들을 쌓아 둔다.
* 구하려는 숫자의 결과가 없다면 이전 값을 반복적으로 찾는다.
* 결과가 있다면 그 결과를 리턴한다.
* 이전 값의 결과가 있다면 그 결과를 이용해서 현재의 결과값을 만든다.
  * 첫번째는 count = 1, 현재 문자를 prev 에 저장
  * 첫번째가 아닌데
    * 현재 문자와 prev 가 같으면 count++
      * 현재가 마지막이면 결과에 기록
    * 현재 문자와 prev 가 다르면 결과에 추가 하고 count 는 1 로 초기화, 현재 문자를 prev 에 저장
      * 현재가 마지막이면 결과에 기록
  * 만들어진 결과를 map 에 저장후 결과 리턴
* 0 ms, 100%


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
    map<int, string> result_map{
            {1, "1"},
            {2, "11"},
            {3, "21"},
            {4, "1211"},
            {5, "111221"},
    };

public:
    string countAndSay(int n) {
        if (result_map.find(n) != result_map.end()) {
            return result_map[n];
        } else {
            // not found

            // get before
            string before = countAndSay(n-1);

            string result;

            int length = before.size();

            int count;
            char prev = NULL;

            for (int i=0; i<length; i++) {
                char cur = before[i];
                if (i == 0) {
                    count = 1;
                    prev = cur;
                } else {
                    if (prev == cur) {
                        count++;

                        // is end?
                        if (i + 1 == length) {
                            result += (to_string(count) + prev);
                            break;
                        }

                    } else {
                        // different
                        result += (to_string(count) + prev);

                        count = 1;
                        prev = cur;

                        // is end?
                        if (i + 1 == length) {
                            result += (to_string(count) + prev);
                            break;
                        }
                    }
                }
            }

            result_map[n] = result;

//            cout << "result=" << result << endl;
            return result;
        }
    }
};

int main() {

    Solution solution = Solution();

    assert(solution.countAndSay(1) == "1");
    assert(solution.countAndSay(4) == "1211");
    assert(solution.countAndSay(5) == "111221");

    return 0;
}
```