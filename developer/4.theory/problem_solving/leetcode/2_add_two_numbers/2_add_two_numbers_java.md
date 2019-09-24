# 2. Add Two Numbers
* https://leetcode.com/problems/add-two-numbers/

## 풀이
* c++ 로 풀었던거 java 로 단순 포팅한 수준.
* 32 ms, 45.13%

```java
package leetcode;

import org.junit.Test;

public class PS2AddTwoNumbers {
    class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    class Solution {
        public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
            ListNode ln = new ListNode(0); // head node

            int is_up = 0;

            do {
                int l1val = 0;
                int l2val = 0;

                if (l1 != null) {
                    l1val = l1.val;
                    l1 = l1.next;
                }

                if (l2 != null) {
                    l2val = l2.val;
                    l2 = l2.next;
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
            } while (l1 != null || l2 != null);

            if (is_up == 1) {
                append(ln, 1);
            }

            return ln.next;
        }

        void append(ListNode ln, int val) {
            ListNode tmp = ln;

            // get last node
            while (tmp.next != null) {
                tmp = tmp.next;
            }

            tmp.next = new ListNode(val);
        }

        void print(ListNode ln) {
            ListNode tmp = ln;

            while (tmp != null) {
                System.out.println(tmp.val);
                tmp = tmp.next;
            }
        }
    }


    @Test
    public void addTwoNumbers() {
        Solution solution = new Solution();

        ListNode ln1 = new ListNode(0);
        ListNode ln2 = new ListNode(7); solution.append(ln2, 3);

        ListNode ln_ret = solution.addTwoNumbers(ln1, ln2);
        solution.print(ln_ret);
    }
}

```