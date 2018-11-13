# leetcode 21. Merge Two Sorted Lists
* https://leetcode.com/problems/merge-two-sorted-lists/

* linked list 가 둘 다 끝날때 까지 루프 돌면서
* l1, l2 중 작은 쪽을 결과 linked list 에 넣는다.
* 만약 null 인 것은 pass 한다.

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
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        auto *result_ln = new ListNode(0); // head node

        while (l1 != nullptr or l2 != nullptr) {
            if (l1 != nullptr and l2 != nullptr) {
                if (l1->val > l2->val) {
                    append(result_ln, l2->val);
                    l2 = l2->next;
                } else {
                    append(result_ln, l1->val);
                    l1 = l1->next;
                }
            } else if (l1 != nullptr) {
                append(result_ln, l1->val);
                l1 = l1->next;
            } else {
                append(result_ln, l2->val);
                l2 = l2->next;
            }
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
    solution.append(ln1, 4);

    auto *ln2 = new ListNode(1);
    solution.append(ln2, 3);
    solution.append(ln2, 4);

    auto result = solution.mergeTwoLists(ln1, ln2);
    solution.print(result);

    cout << endl;

    auto *ln3 = new ListNode(5);

    auto *ln4 = new ListNode(1);
    solution.append(ln4, 2);
    solution.append(ln4, 4);

    result = solution.mergeTwoLists(ln3, ln4);
    solution.print(result);

    return 0;
}
```