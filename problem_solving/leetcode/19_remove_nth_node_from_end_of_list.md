# 19. Remove Nth Node From End of List
* https://leetcode.com/problems/remove-nth-node-from-end-of-list/
* linked list 가 있고 뒤에서 n 번째 노드를 제거
* array 로 circular_queue 를 n + 1 개 만큼 만들어 둔다.
* linked list 를 처음부터 끝까지 돌면서 circular_queue 에 현재 노드 포인터를 저장해 둔다.
* circular queue 의 첫번째 노드의 next 를 next->next 로 연결 시킨다.
* 그러면 뒤에서 n번째 노드를 제거 하는 것이다.
* 그리고 head 를 리턴한다.
* 그런데 linked list 의 첫번째 노드를 제거 하는 경우가 있을 수 있는데 그때는 n-1 번째 노드가 없는 상태이다.
* 이 경우에는 head 를 head->next 로 바꿔준다.
* 4ms 100%

```cpp
#include <cassert>
#include <iostream>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;

    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        int list_num = 0;
        int queue_num = n + 1;
        ListNode* circular_queue[queue_num];
        int index = 0;

        ListNode *tmp = head;

        while (tmp) {
            list_num++;
            circular_queue[index++] = tmp;
            index %= queue_num;

            tmp = tmp->next;
        }

        if (list_num == n) {
            head = head->next;
            return head;
        }

        index = (index) % queue_num;

        ListNode *tmp2 = circular_queue[index];

        tmp2->next = tmp2->next->next;
        return head;
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

    ListNode *result;

    auto *ln1 = new ListNode(1);
    solution.append(ln1, 2);
    solution.append(ln1, 3);
    solution.append(ln1, 4);
    solution.append(ln1, 5);
    result = solution.removeNthFromEnd(ln1, 2);
    solution.print(result);

    auto *ln2 = new ListNode(1);
    result = solution.removeNthFromEnd(ln2, 1);
    solution.print(result);

    auto *ln3 = new ListNode(1);
    solution.append(ln3, 2);
    result = solution.removeNthFromEnd(ln3, 2);
    solution.print(result);

    return 0;
}
```