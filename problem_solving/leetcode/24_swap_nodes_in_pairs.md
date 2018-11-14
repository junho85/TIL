# 24. Swap Nodes in Pairs
* https://leetcode.com/problems/swap-nodes-in-pairs/

## 문제
* linked list 값 순서를 짝짝이 바꾼다. 1, 2번째 서로 위치 변경, 3, 4번째 서로 위치 변경, ... 요런식

## 풀이
* 홀수 번째 값을 따로 저장 하고 있다가 짝수 번째에서 바꿔서 linked list 에 넣어 준다.
* 만약 홀수 번째에서 종료 되었으면 linked list 에 넣어 주고 끝낸다.
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


struct ListNode {
    int val;
    ListNode *next;

    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        auto *result_ln = new ListNode(0); // head node

        ListNode *tmp = head;

        int i = 0;
        int before;
        while (tmp) {
            if (i % 2 == 0) {
                before = tmp->val;
            } else {
                append(result_ln, tmp->val);
                append(result_ln, before);
            }
            tmp = tmp->next;
            i++;
        }

        if (i % 2 == 1) {
            append(result_ln, before);
        }

        return result_ln->next;
    }

    void print(ListNode *ln) {
        ListNode *tmp = ln;

        while (tmp) {
            cout << tmp->val << endl;
            tmp = tmp->next;
        }
    }

    void append(ListNode *ln, int val) {
        ListNode *tmp = ln;

        // get last node
        while (tmp->next) {
            tmp = tmp->next;
        }

        tmp->next = new ListNode(val);
    }

};

int main() {
    Solution solution = Solution();

    auto *ln1 = new ListNode(1);
    solution.append(ln1, 2);
    solution.append(ln1, 3);
    solution.append(ln1, 4);

    auto result = solution.swapPairs(ln1);
    solution.print(result);

    auto *ln2 = new ListNode(1);

    result = solution.swapPairs(ln2);
    solution.print(result);


    return 0;
}
```