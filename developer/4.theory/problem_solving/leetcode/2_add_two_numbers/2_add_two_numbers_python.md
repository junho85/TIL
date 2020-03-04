# 2. Add Two Numbers

## 링크드 리스트의 노드를 하나씩 꺼내서 합을 구해서 결과 링크드 리스트 만들기
```
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def append(self, ln, val):
        tmp = ln

        while tmp.next:
            tmp = tmp.next

        tmp.next = ListNode(val)

    def print(self, ln):
        tmp = ln

        while tmp:
            print(tmp.val, end="")
            tmp = tmp.next
        print()

    def addTwoNumbers(self, l1, l2):
        ln = ListNode(0)  # head node

        is_up = False

        while True:
            l1val = 0
            l2val = 0

            if l1 is not None:
                l1val = l1.val
                l1 = l1.next

            if l2 is not None:
                l2val = l2.val
                l2 = l2.next

            sum = l1val + l2val
            if is_up == True:
                sum += 1
                is_up = 0

            if sum >= 10:
                is_up = 1
                sum %= 10

            self.append(ln, sum)

            if l1 is not None or l2 is not None:
                continue

            break

        if is_up == 1:
            self.append(ln, 1)

        return ln.next


s = Solution()

l1 = ListNode(2)
s.append(l1, 4)
s.append(l1, 3)

s.print(l1)

l2 = ListNode(5)
s.append(l2, 6)
s.append(l2, 4)

s.print(l2)

result = s.addTwoNumbers(l1, l2)
s.print(result)
```

```
Runtime: 68 ms, faster than 76.00% of Python3 online submissions for Add Two Numbers.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Add Two Numbers.
```


## Linked List 를 숫자로 바꿔서 합한다음 다시 Linked List 로 변환
```
class Solution:
    def append(self, ln, val):
        tmp = ln

        while tmp.next:
            tmp = tmp.next

        tmp.next = ListNode(val)

    def list_to_num(self, ln):
        tmp = ln

        reversed_num_str = ""

        while tmp:
            reversed_num_str += str(tmp.val)
            tmp = tmp.next

        return int(reversed_num_str[::-1])

    def num_to_list(self, num):
        ln = ListNode(0)  # head node

        for n in str(num)[::-1]:
            self.append(ln, n)

        return ln.next

    def print(self, ln):
        tmp = ln

        while tmp:
            print(tmp.val, end="")
            tmp = tmp.next
        print()

    def addTwoNumbers(self, l1, l2):
        sum = self.list_to_num(l1) + self.list_to_num(l2)
        return self.num_to_list(sum)
```

사실 이렇게 하면 숫자 저장 범위를 초과해서 오버플로우 등의 문제를 겪을거라 생각 했는데 통과 했다.
```
Runtime: 76 ms, faster than 30.10% of Python3 online submissions for Add Two Numbers.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Add Two Numbers.
```
