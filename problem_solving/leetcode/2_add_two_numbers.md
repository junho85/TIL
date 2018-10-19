# 2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/

## cpp
```cpp
#include <iostream>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    void append(ListNode *ln, int val) {
        ListNode *tmp = ln;

        // get last node
        while (tmp->next) {
            tmp = tmp->next;
        }

        tmp->next = new ListNode(val);
    }

    void print(ListNode *ln) {
        ListNode *tmp = ln;

        while (tmp) {
            cout << tmp->val << endl;
            tmp = tmp->next;
        }
    }

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *ln = new ListNode(0); // head node

        int is_up = 0;

        do {
            int l1val = 0;
            int l2val = 0;

            if (l1) {
                l1val = l1->val;
                l1 = l1->next;
            }

            if (l2) {
                l2val = l2->val;
                l2 = l2->next;
            }

            int sum = l1val + l2val;
            if (is_up == 1) {
                sum++;
                is_up = 0;
            }

            if (sum >= 10) {
                is_up = 1;
                sum %= 10;
            }
            append(ln, sum);
        } while (l1 != nullptr or l2 != nullptr);

        if (is_up == 1) {
            append(ln, 1);
        }

        return ln->next; // return except head node
    }
};



int main() {
    Solution s = Solution();

    // ListNode test
//    ListNode *ln1 = new ListNode(2); s.append(ln1, 4);    s.append(ln1, 3);
//    ListNode *ln2 = new ListNode(5); s.append(ln2, 6);    s.append(ln2, 4);

//    ListNode *ln1 = new ListNode(1); s.append(ln1, 8);
//    ListNode *ln2 = new ListNode(0);

//    ListNode *ln1 = new ListNode(5);
//    ListNode *ln2 = new ListNode(5);

    ListNode *ln1 = new ListNode(0);
    ListNode *ln2 = new ListNode(7); s.append(ln2, 3);

    ListNode *ln_ret = s.addTwoNumbers(ln1, ln2);
    s.print(ln_ret);

    return 0;
}
```