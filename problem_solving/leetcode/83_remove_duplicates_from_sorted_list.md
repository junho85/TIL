# 83. Remove Duplicates from Sorted List
* https://leetcode.com/problems/remove-duplicates-from-sorted-list/

## 문제
* 정렬된 리스트에서 중복된거 제거 하고 리턴

## 풀이
* 이전값을 기억해 두고 있다가 루프 돌면서 확인 해서 중복된거 빼고 추가 해서 리턴 
* 8 ms, 98.26%

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
    ListNode* deleteDuplicates(ListNode* head) {
        if (head == nullptr) {
            return head;
        }
        auto *result = new ListNode(0); // head node

        int pre = head->val;
        append(result, pre);

        ListNode *tmp = head;
        while (tmp) {
            if (pre != tmp->val) {
                append(result, tmp->val);
                pre = tmp->val;
            }
            tmp = tmp->next;
        }

        return result->next;
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
    solution.append(ln1, 1);
    solution.append(ln1, 2);

    auto result = solution.deleteDuplicates(ln1);

    solution.print(result);

    auto *ln2 = new ListNode(1);
    solution.append(ln2, 1);
    solution.append(ln2, 2);
    solution.append(ln2, 3);
    solution.append(ln2, 3);

    result = solution.deleteDuplicates(ln2);

    solution.print(result);

    ListNode *ln3;
    result = solution.deleteDuplicates(ln3);
    solution.print(result);

    return 0;
}
```