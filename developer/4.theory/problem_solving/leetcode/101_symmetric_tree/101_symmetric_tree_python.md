# 101. Symmetric Tree

## Recursive
```python
class Solution:
    def isMirror(self, l, r):
        if l is None and r is None:
            return True

        if l is not None and r is not None and l.val == r.val:
            return self.isMirror(l.left, r.right) and self.isMirror(l.right, r.left)

        return False

    def isSymmetric(self, root: TreeNode) -> bool:
        if root is None:
            return True

        return self.isMirror(root.left, root.right)
```

```
Runtime: 44 ms, faster than 11.54% of Python3 online submissions for Symmetric Tree.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Symmetric Tree.
```
