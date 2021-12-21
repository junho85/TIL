# 104. Maximum Depth of Binary Tree

## Recursive
```
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0

        l = self.maxDepth(root.left)
        r = self.maxDepth(root.right)

        if l > r:
            return l + 1
        else:
            return r + 1
```

```
Runtime: 44 ms, faster than 33.58% of Python3 online submissions for Maximum Depth of Binary Tree.
Memory Usage: 14.4 MB, less than 96.87% of Python3 online submissions for Maximum Depth of Binary Tree.
```
